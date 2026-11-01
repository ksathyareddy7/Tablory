/**
 * Grades a learner SELECT by running it once, then comparing a fingerprint.
 *
 * The official query is executed when exercises are loaded. Run and Submit
 * reuse that stored fingerprint, so the expected answer is not computed again.
 * When no fingerprint is stored, the expected query still runs only once.
 *
 * Fingerprints are md5 aggregates of per-row md5s. That keeps multiset
 * equality without building one giant JSON string of the whole result.
 */

export const FINGERPRINT_VERSION = 1;

const USER_TABLE = "sql_arena_user_result";
const EXPECTED_TABLE = "sql_arena_expected_result";
const POS = "__sql_arena_pos";

const tempTable = (table) => `pg_temp.${table}`;
const DEFAULT_TOLERANCE = 0.0001;

const quoteIdent = (s) => `"${String(s).replace(/"/g, '""')}"`;

const isSafeSchemaName = (s) => /^[a-z_][a-z0-9_]*$/i.test(String(s || ""));

const stripTrailingSemicolon = (q = "") => String(q || "").trim().replace(/;+\s*$/, "");

export function normalizeSortSpec(sortByColumns) {
  if (!Array.isArray(sortByColumns)) return [];

  return sortByColumns
    .map((item) => {
      if (typeof item === "string") {
        if (item.startsWith("-")) return { column: item.slice(1), direction: "desc" };
        if (item.startsWith("+")) return { column: item.slice(1), direction: "asc" };
        return { column: item, direction: "asc" };
      }

      if (item && typeof item === "object" && typeof item.column === "string") {
        return {
          column: item.column,
          direction:
            String(item.direction || "asc").toLowerCase() === "desc" ? "desc" : "asc",
        };
      }

      return null;
    })
    .filter(Boolean);
}

/**
 * Matches the in-memory comparator:
 * sort_by_columns means the learner must order the result.
 * ignore_order: false with no sort spec means position matters.
 * Otherwise the result is a multiset.
 */
export function comparisonMode(config = {}) {
  const sortByColumns = normalizeSortSpec(config.sort_by_columns);
  if (sortByColumns.length > 0) return "sorted";
  if (config.ignore_order === false) return "positional";
  return "multiset";
}

export function formatSortSpec(sortByColumns) {
  const specs = normalizeSortSpec(sortByColumns);
  if (specs.length === 0) return "";
  return specs.map((s) => `${s.column} ${s.direction.toUpperCase()}`).join(", ");
}

/**
 * Decimal places used to bucket numbers, matching the JS comparator's
 * `Math.round(value * (1 / tolerance)) / (1 / tolerance)` serialization.
 */
export function numericScale(config = {}) {
  const tolerance =
    typeof config.numeric_tolerance === "number" &&
    config.numeric_tolerance > 0 &&
    config.numeric_tolerance <= 1
      ? config.numeric_tolerance
      : DEFAULT_TOLERANCE;
  const factor = Math.round(1 / tolerance);
  if (!Number.isFinite(factor) || factor < 1) return 4;
  return Math.max(0, Math.min(6, Math.round(Math.log10(factor))));
}

function canonicalSql(expr, scale) {
  // Only casts that exist for every Postgres type. Type-specific operators
  // (AT TIME ZONE, ::numeric on the raw column) fail while planning.
  const text = `btrim((${expr})::text)`;
  const asNumber = `trim(trailing '0' from trim(trailing '.' from round((${text})::numeric, ${scale})::text))`;
  return `CASE
    WHEN (${expr}) IS NULL THEN E'\\\\N'
    WHEN ${text} ~ '^-?[0-9]+(\\.[0-9]+)?$' THEN ${asNumber}
    ELSE (${expr})::text
  END`;
}

function fingerprintSql(table, columns, config) {
  const mode = comparisonMode(config);
  const scale = numericScale(config);
  const selectedCols = columns.map((c) => quoteIdent(c)).join(", ");
  const canon = columns
    .map((c) => canonicalSql(`projected.${quoteIdent(c)}`, scale))
    .join(` || E'\\x1e' || `);
  const positional = mode === "positional";
  const posSelect = positional ? `${quoteIdent(POS)}, ` : "";
  const posOut = positional ? `projected.${quoteIdent(POS)} AS pos, ` : "";
  const orderBy = positional ? "pos" : "row_hash";

  return `
    SELECT
      COUNT(*)::bigint AS row_count,
      md5(COALESCE(string_agg(row_hash, '' ORDER BY ${orderBy}), '')) AS fingerprint
    FROM (
      SELECT
        ${posOut}
        md5(${canon}) AS row_hash
      FROM (
        SELECT ${posSelect}${selectedCols}
        FROM ${tempTable(table)}
      ) projected
    ) hashed
  `;
}

function materializeSql(table, sql) {
  const body = stripTrailingSemicolon(sql);
  // OFFSET 0 is an optimization fence so an ORDER BY in the learner query
  // is still visible to row_number() and the preview.
  return `
    CREATE TEMP TABLE ${table} ON COMMIT DROP AS
    SELECT row_number() OVER ()::bigint AS ${quoteIdent(POS)}, src.*
    FROM (
      SELECT * FROM (${body}) AS sql_arena_src
      OFFSET 0
    ) src
  `;
}

function orderCheckSql(table, sortSpecs) {
  const currentCols = [...new Set(sortSpecs.map((spec) => spec.column))]
    .map((column) => quoteIdent(column))
    .join(", ");
  const lagCols = sortSpecs
    .map(
      (spec, idx) =>
        `lag(${quoteIdent(spec.column)}) OVER (ORDER BY ${quoteIdent(POS)}) AS ${quoteIdent(`__prev_${idx}`)}`,
    )
    .join(", ");

  const lessExprs = sortSpecs.map((spec, idx) => {
    const prev = quoteIdent(`__prev_${idx}`);
    const curr = quoteIdent(spec.column);
    const op = spec.direction === "desc" ? ">" : "<";
    // PostgreSQL default NULL ordering: ASC NULLS LAST, DESC NULLS FIRST.
    if (spec.direction === "desc") {
      return `((${prev} IS NULL AND ${curr} IS NOT NULL) OR (${prev} IS NOT NULL AND ${curr} IS NOT NULL AND ${prev} ${op} ${curr}))`;
    }
    return `((${prev} IS NOT NULL AND ${curr} IS NULL) OR (${prev} IS NOT NULL AND ${curr} IS NOT NULL AND ${prev} ${op} ${curr}))`;
  });

  const eqExprs = sortSpecs.map((spec, idx) => {
    const prev = quoteIdent(`__prev_${idx}`);
    const curr = quoteIdent(spec.column);
    return `((${prev} IS NULL AND ${curr} IS NULL) OR (${prev} IS NOT NULL AND ${curr} IS NOT NULL AND ${prev} = ${curr}))`;
  });

  const disjuncts = [];
  for (let i = 0; i < sortSpecs.length; i++) {
    const prefix = eqExprs.slice(0, i).join(" AND ");
    disjuncts.push(prefix ? `((${prefix}) AND ${lessExprs[i]})` : `${lessExprs[i]}`);
  }
  disjuncts.push(`(${eqExprs.join(" AND ")})`);
  const orderCheckExpr = disjuncts.join(" OR ");

  return `
    WITH actual_prev AS (
      SELECT ${quoteIdent(POS)}, ${currentCols}, ${lagCols}
      FROM ${tempTable(table)}
    )
    SELECT COALESCE(bool_and(${quoteIdent(POS)} = 1 OR (${orderCheckExpr})), true) AS is_ordered
    FROM actual_prev
  `;
}

async function rollbackSavepoint(client, name) {
  try {
    await client.query(`ROLLBACK TO SAVEPOINT ${name}`);
    await client.query(`RELEASE SAVEPOINT ${name}`);
  } catch {
    // The transaction may already be finished.
  }
}

async function materialize(client, table, sql) {
  await client.query(`DROP TABLE IF EXISTS ${tempTable(table)}`);
  await client.query(materializeSql(table, sql));
}

async function readPreview(client, table, limit) {
  const previewLimit = Number.isInteger(limit) && limit > 0 ? limit : 200;
  const result = await client.query(
    `SELECT * FROM ${tempTable(table)} ORDER BY ${quoteIdent(POS)} LIMIT ${previewLimit}`,
  );
  const fields = (result.fields || [])
    .map((f) => f.name)
    .filter((name) => name !== POS);
  const rows = result.rows.map((row) => {
    const copy = { ...row };
    delete copy[POS];
    return copy;
  });
  return { fields, rows };
}

async function fingerprintTable(client, table, columns, config) {
  const { rows } = await client.query(fingerprintSql(table, columns, config));
  const row = rows[0] || {};
  return {
    rowCount: row.row_count ?? "0",
    fingerprint: row.fingerprint || "",
  };
}

function compactCell(value) {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "bigint") return value.toString();
  if (typeof value === "string") {
    return value.length > 160 ? `${value.slice(0, 157)}...` : value;
  }
  if (Array.isArray(value)) return value.slice(0, 8).map(compactCell);
  if (value && typeof value === "object") {
    try {
      const text = JSON.stringify(value);
      return text.length > 160 ? `${text.slice(0, 157)}...` : value;
    } catch {
      return String(value);
    }
  }
  return value ?? null;
}

function compactRows(rows) {
  return (rows || []).map((row) => {
    const out = {};
    for (const [key, value] of Object.entries(row)) out[key] = compactCell(value);
    return out;
  });
}

async function sampleSetDiff(client, columns, limit = 5) {
  const cols = columns.map((column) => quoteIdent(column)).join(", ");
  const cap = Number.isInteger(limit) && limit > 0 ? limit : 5;
  const missing = await client.query(`
    SELECT ${cols}
    FROM (
      SELECT ${cols} FROM ${tempTable(EXPECTED_TABLE)}
      EXCEPT ALL
      SELECT ${cols} FROM ${tempTable(USER_TABLE)}
    ) missing
    LIMIT ${cap}
  `);
  const extra = await client.query(`
    SELECT ${cols}
    FROM (
      SELECT ${cols} FROM ${tempTable(USER_TABLE)}
      EXCEPT ALL
      SELECT ${cols} FROM ${tempTable(EXPECTED_TABLE)}
    ) extra
    LIMIT ${cap}
  `);
  return {
    missingRows: compactRows(missing.rows),
    extraRows: compactRows(extra.rows),
  };
}

function isSetMismatch(reason) {
  const text = String(reason || "");
  return text.startsWith("Row count mismatch") || text === "Result set mismatch";
}

function missingColumnsReason(fields, expectedColumns) {
  if (!Array.isArray(expectedColumns) || expectedColumns.length === 0) {
    return "No expected columns defined for this question";
  }
  const actual = new Set((fields || []).map((f) => String(f)));
  const missing = expectedColumns.filter((c) => !actual.has(String(c)));
  if (missing.length === 0) return null;
  if (missing.length === 1) {
    return `Required column "${missing[0]}" is missing from query results`;
  }
  return `Required columns missing from query results: ${missing.join(", ")}`;
}

const VOLATILE_SQL =
  /\b(now|current_date|current_time|current_timestamp|localtime|localtimestamp|clock_timestamp|statement_timestamp|transaction_timestamp|timeofday|random)\b/i;

/** Clock and random calls cannot be compared to a fingerprint captured earlier. */
export function usesVolatileSql(sql) {
  return VOLATILE_SQL.test(String(sql || ""));
}

function storedFingerprintReady(args) {
  if (usesVolatileSql(args.expectedQuery)) return false;
  return (
    args.expectedFingerprintVersion === FINGERPRINT_VERSION &&
    typeof args.expectedFingerprint === "string" &&
    args.expectedFingerprint.length > 0 &&
    args.expectedRowCount !== null &&
    args.expectedRowCount !== undefined
  );
}

function verdictFromFingerprints({ expected, actual, ordered, config }) {
  const mode = comparisonMode(config);
  if (mode === "sorted" && !ordered) {
    const spec = formatSortSpec(config.sort_by_columns);
    return {
      isCorrect: false,
      reason: spec
        ? `Results must be ordered by ${spec}`
        : "Results must be ordered as specified",
    };
  }

  if (String(expected.rowCount) !== String(actual.rowCount)) {
    return {
      isCorrect: false,
      reason: `Row count mismatch: expected ${expected.rowCount}, got ${actual.rowCount}`,
    };
  }

  if (expected.fingerprint !== actual.fingerprint) {
    return { isCorrect: false, reason: "Result set mismatch" };
  }

  return { isCorrect: true };
}

async function checkOrdered(client, table, config) {
  if (comparisonMode(config) !== "sorted") return true;
  const sortSpecs = normalizeSortSpec(config.sort_by_columns);
  const { rows } = await client.query(orderCheckSql(table, sortSpecs));
  return rows[0]?.is_ordered !== false;
}

function validateSortColumns(expectedColumns, config) {
  const sortSpecs = normalizeSortSpec(config.sort_by_columns);
  if (comparisonMode(config) !== "sorted") return null;
  const missing = sortSpecs.filter((s) => !expectedColumns.includes(s.column));
  if (missing.length === 0) return null;
  return `Question setup error: sort_by_columns contains columns not in expected output (${missing
    .map((s) => s.column)
    .join(", ")})`;
}

/**
 * Execute expectedQuery once and return its preview plus fingerprint.
 * Caller must already be inside a transaction with the right search_path.
 */
export async function captureExpected(client, { expectedQuery, expectedColumns, config = {}, previewLimit = 10 }) {
  if (!Array.isArray(expectedColumns) || expectedColumns.length === 0) {
    throw new Error("No expected columns defined for this question");
  }
  const setupError = validateSortColumns(expectedColumns, config);
  if (setupError) throw new Error(setupError);

  await materialize(client, EXPECTED_TABLE, expectedQuery);
  const preview = await readPreview(client, EXPECTED_TABLE, previewLimit);
  const fingerprint = await fingerprintTable(client, EXPECTED_TABLE, expectedColumns, config);
  return {
    fields: preview.fields,
    rows: preview.rows,
    rowCount: fingerprint.rowCount,
    fingerprint: fingerprint.fingerprint,
    version: FINGERPRINT_VERSION,
  };
}

/**
 * Used while seeding. Failures are contained so one bad official query
 * does not abort the exercise load. search_path is restored to public.
 */
export async function captureExpectedAnswer(client, { schema, expectedQuery, expectedColumns, config = {}, previewLimit = 10 }) {
  if (!isSafeSchemaName(schema)) {
    return { error: new Error("Invalid app schema name") };
  }
  if (!stripTrailingSemicolon(expectedQuery)) {
    return { fields: null, rows: null, rowCount: null, fingerprint: null, version: null };
  }

  await client.query("SAVEPOINT sql_arena_expected_capture");
  try {
    await client.query(`SET LOCAL search_path TO ${quoteIdent(schema)}, pg_catalog`);
    await client.query("SET LOCAL statement_timeout = 60000");
    const captured = await captureExpected(client, {
      expectedQuery,
      expectedColumns,
      config,
      previewLimit,
    });
    await client.query("RELEASE SAVEPOINT sql_arena_expected_capture");
    await client.query(`DROP TABLE IF EXISTS ${tempTable(EXPECTED_TABLE)}`);
    await client.query("SET LOCAL search_path TO public");
    await client.query("SET LOCAL statement_timeout TO DEFAULT");
    return captured;
  } catch (error) {
    await rollbackSavepoint(client, "sql_arena_expected_capture");
    const preview = await capturePreviewOnly(client, {
      schema,
      expectedQuery,
      previewLimit,
    });
    return {
      fields: preview.fields,
      rows: preview.rows,
      rowCount: null,
      fingerprint: null,
      version: null,
      error,
    };
  }
}

async function capturePreviewOnly(client, { schema, expectedQuery, previewLimit }) {
  await client.query("SAVEPOINT sql_arena_expected_preview");
  try {
    await client.query(`SET LOCAL search_path TO ${quoteIdent(schema)}, pg_catalog`);
    await client.query("SET LOCAL statement_timeout = 2000");
    const body = stripTrailingSemicolon(expectedQuery);
    const limit = Number.isInteger(previewLimit) && previewLimit > 0 ? previewLimit : 10;
    const res = await client.query(
      `SELECT * FROM (${body}) AS expected_preview LIMIT ${limit}`,
    );
    await client.query("RELEASE SAVEPOINT sql_arena_expected_preview");
    await client.query("SET LOCAL search_path TO public");
    await client.query("SET LOCAL statement_timeout TO DEFAULT");
    return {
      fields: (res.fields || []).map((f) => f.name).filter(Boolean),
      rows: res.rows || [],
    };
  } catch {
    await rollbackSavepoint(client, "sql_arena_expected_preview");
    return { fields: null, rows: null };
  }
}

/**
 * Run userQuery once inside the open transaction and grade it.
 * search_path and statement_timeout must already be set.
 * Throws if the learner SQL itself fails. Comparison problems are returned.
 */
export async function gradeUserQuery(client, {
  userQuery,
  expectedQuery,
  expectedColumns,
  config = {},
  expectedRowCount = null,
  expectedFingerprint = null,
  expectedFingerprintVersion = null,
  previewLimit = 200,
  includeDiff = false,
}) {
  const sql = stripTrailingSemicolon(userQuery);
  if (!sql) {
    const err = new Error("Query is missing or invalid");
    throw err;
  }

  await client.query("SAVEPOINT sql_arena_grade");
  try {
    await materialize(client, USER_TABLE, sql);
    await client.query("RELEASE SAVEPOINT sql_arena_grade");
  } catch (error) {
    await rollbackSavepoint(client, "sql_arena_grade");
    throw error;
  }

  const preview = await readPreview(client, USER_TABLE, previewLimit);
  const columnError = missingColumnsReason(preview.fields, expectedColumns);
  if (columnError) {
    return {
      rows: preview.rows,
      fields: preview.fields,
      isCorrect: false,
      reason: columnError,
    };
  }

  const sortError = validateSortColumns(expectedColumns, config);
  if (sortError) {
    return {
      rows: preview.rows,
      fields: preview.fields,
      isCorrect: false,
      reason: sortError,
    };
  }

  try {
    await client.query("SAVEPOINT sql_arena_compare");
    const ordered = await checkOrdered(client, USER_TABLE, config);
    const actual = await fingerprintTable(client, USER_TABLE, expectedColumns, config);

    let expected;
    let materializedExpected = false;
    if (
      storedFingerprintReady({
        expectedQuery,
        expectedFingerprint,
        expectedFingerprintVersion,
        expectedRowCount,
      })
    ) {
      expected = { rowCount: expectedRowCount, fingerprint: expectedFingerprint };
    } else {
      await materialize(client, EXPECTED_TABLE, expectedQuery);
      expected = await fingerprintTable(client, EXPECTED_TABLE, expectedColumns, config);
      materializedExpected = true;
    }

    const verdict = verdictFromFingerprints({ expected, actual, ordered, config });
    let missingRows = null;
    let extraRows = null;
    if (includeDiff && !verdict.isCorrect && isSetMismatch(verdict.reason)) {
      await client.query("SAVEPOINT sql_arena_row_diff");
      try {
        if (!materializedExpected) {
          await materialize(client, EXPECTED_TABLE, expectedQuery);
          materializedExpected = true;
        }
        const diff = await sampleSetDiff(client, expectedColumns, 5);
        missingRows = diff.missingRows;
        extraRows = diff.extraRows;
        await client.query("RELEASE SAVEPOINT sql_arena_row_diff");
      } catch {
        await rollbackSavepoint(client, "sql_arena_row_diff");
      }
    }

    if (materializedExpected) {
      await client.query(`DROP TABLE IF EXISTS ${tempTable(EXPECTED_TABLE)}`);
    }

    await client.query("RELEASE SAVEPOINT sql_arena_compare");
    return {
      rows: preview.rows,
      fields: preview.fields,
      isCorrect: verdict.isCorrect,
      reason: verdict.reason,
      expectedRowCount: verdict.isCorrect ? null : expected.rowCount,
      actualRowCount: verdict.isCorrect ? null : actual.rowCount,
      missingRows,
      extraRows,
    };
  } catch (error) {
    await rollbackSavepoint(client, "sql_arena_compare");
    return {
      rows: preview.rows,
      fields: preview.fields,
      isCorrect: false,
      reason: error.message,
    };
  }
}

export async function ensureQuestionFingerprintColumns(db) {
  await db.query(`ALTER TABLE questions ADD COLUMN IF NOT EXISTS expected_row_count BIGINT`);
  await db.query(`ALTER TABLE questions ADD COLUMN IF NOT EXISTS expected_fingerprint TEXT`);
  await db.query(
    `ALTER TABLE questions ADD COLUMN IF NOT EXISTS expected_fingerprint_version SMALLINT`,
  );
}
