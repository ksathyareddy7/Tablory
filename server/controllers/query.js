import pool from "../database/db.js";
import { awardBadgesForEvent } from "../services/badges.js";
import { gradeUserQuery } from "../services/grader.js";

const quoteIdent = (s) => `"${String(s).replace(/"/g, '""')}"`;
const isSafeSchemaName = (s) => /^[a-z_][a-z0-9_]*$/i.test(String(s || ""));

const stripTrailingSemicolon = (q = "") => {
  return q.trim().replace(/;+\s*$/, "");
};

const stripSqlLiteralsAndComments = (sql = "") => {
  let s = String(sql);

  // Remove block comments
  s = s.replace(/\/\*[\s\S]*?\*\//g, " ");
  // Remove line comments
  s = s.replace(/--[^\n]*$/gm, " ");
  // Remove dollar-quoted strings ($tag$...$tag$)
  s = s.replace(/(\$[a-zA-Z0-9_]*\$)[\s\S]*?\1/g, " ");
  // Remove single-quoted strings (handles doubled '' escapes)
  s = s.replace(/'(?:[^']|'{2})*'/g, " ");

  return s;
};

const stripFunctionCalls = (sql = "", functionNames = []) => {
  const names = new Set(functionNames.map((n) => String(n).toLowerCase()));
  const s = String(sql);
  const lower = s.toLowerCase();

  const isIdentChar = (ch) => /[a-z0-9_]/i.test(ch);
  const isWordBoundary = (idx) => {
    if (idx <= 0) return true;
    return !isIdentChar(s[idx - 1]);
  };

  const scanToMatchingParen = (openIdx) => {
    let depth = 0;
    for (let i = openIdx; i < s.length; i++) {
      const ch = s[i];
      if (ch === "(") depth++;
      else if (ch === ")") {
        depth--;
        if (depth === 0) return i + 1;
      }
    }
    return s.length;
  };

  let out = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (/[a-z_]/i.test(ch) && isWordBoundary(i)) {
      let j = i + 1;
      while (j < s.length && isIdentChar(s[j])) j++;
      const word = lower.slice(i, j);

      if (names.has(word)) {
        let k = j;
        while (k < s.length && /\s/.test(s[k])) k++;
        if (s[k] === "(") {
          const end = scanToMatchingParen(k);
          out += " ".repeat(end - i);
          i = end - 1;
          continue;
        }
      }
    }
    out += ch;
  }
  return out;
};

const assertSelectOrWithOnly = (query) => {
  const cleaned = stripSqlLiteralsAndComments(query)
    .trim()
    // allow optional wrapping parentheses
    .replace(/^\(+\s*/, "");

  if (!/^(with|select)\b/i.test(cleaned)) {
    throw new Error("Only SELECT queries are allowed.");
  }
};

const assertSingleStatement = (query) => {
  const trimmed = String(query || "").trim();
  const withoutTrailing = trimmed.replace(/;+\s*$/, "");
  const cleaned = stripSqlLiteralsAndComments(withoutTrailing);
  if (cleaned.includes(";")) {
    throw new Error("Only a single SELECT statement is allowed.");
  }
};

const assertNoCrossSchemaRefs = async (client, query, appSchema) => {
  // Remove SQL literals/comments first, then remove function calls that use FROM in their syntax
  // (e.g. EXTRACT(... FROM ...), TRIM(... FROM ...), OVERLAY(... FROM ...)).
  // This prevents false positives where `FROM alias.column` is not a FROM-clause schema ref.
  const cleaned = stripFunctionCalls(stripSqlLiteralsAndComments(query), [
    "extract",
    "trim",
    "overlay",
  ]);
  const schemaRef =
    /\b(from|join)\s+(?:lateral\s+)?(?:only\s+)?((?:"[^"]+"|[a-z_][a-z0-9_]*))\s*\.\s*((?:"[^"]+"|[a-z_][a-z0-9_]*))/gi;

  const unquoteIdent = (ident) => {
    const s = String(ident || "");
    if (s.startsWith('"') && s.endsWith('"')) {
      return s.slice(1, -1).replace(/""/g, '"');
    }
    return s;
  };

  const forbidden = new Set(["public", "information_schema", "pg_catalog"]);
  const allowedSchema = String(appSchema || "").toLowerCase();

  const schemaExists = async (schemaName) => {
    const { rowCount } = await client.query(
      "SELECT 1 FROM pg_namespace WHERE nspname = $1",
      [schemaName],
    );
    return rowCount > 0;
  };

  if (!(await schemaExists(allowedSchema))) {
    throw new Error(`App schema '${appSchema}' does not exist.`);
  }

  let m;
  while ((m = schemaRef.exec(cleaned)) !== null) {
    const schema = unquoteIdent(m[2]).toLowerCase();
    if (forbidden.has(schema)) {
      throw new Error(
        "Access to system/public schemas is not allowed. Use the app tables only.",
      );
    }
    // If a schema-qualified ref is used, it must match the app schema exactly.
    // (Unqualified table names are recommended.)
    if (schema !== allowedSchema) {
      throw new Error(
        `Cross-schema access is not allowed. Use unqualified table names (recommended) or only '${appSchema}'.<table>.`,
      );
    }
  }

  // Extra guard: catch quoted schema refs like "public".apps even if not preceded by FROM/JOIN.
  const forbiddenSchemaAny =
    /(?:^|[^a-z0-9_])(?:"(?:public|information_schema|pg_catalog)"|(?:public|information_schema|pg_catalog))\s*\./i;
  if (forbiddenSchemaAny.test(cleaned)) {
    throw new Error(
      "Access to system/public schemas is not allowed. Use the app tables only.",
    );
  }

  const setSearchPath = /\bset\s+(local\s+)?search_path\b/i;
  if (setSearchPath.test(cleaned)) {
    throw new Error("Modifying search_path is not allowed.");
  }

  // Prevent changing settings via SQL functions (can be used to alter search_path).
  const setConfigFn = /\bset_config\s*\(/i;
  if (setConfigFn.test(cleaned)) {
    throw new Error("Modifying session settings is not allowed.");
  }

  // Prevent unqualified access to system catalogs/views (pg_catalog is searched implicitly).
  const sysCatalogRel =
    /\b(from|join)\s+(?:lateral\s+)?(?:only\s+)?(?:"?pg_[a-z0-9_]+"?)(?!\s*\.)/gi;
  if (sysCatalogRel.test(cleaned)) {
    throw new Error(
      "Access to system catalog tables/views is not allowed. Use the app tables only.",
    );
  }
};

const getAppSchemaByQuestionId = async (client, questionId) => {
  const { rows } = await client.query(
    `
    SELECT a.name AS app_name
    FROM questions q
    JOIN apps a ON a.app_id = q.app_id
    WHERE q.id = $1
    LIMIT 1
    `,
    [questionId],
  );

  const appName = rows?.[0]?.app_name || null;
  if (!appName) throw new Error("Question app not found");
  const schema = `${appName}_schema`;
  if (!isSafeSchemaName(schema)) {
    throw new Error("Invalid app schema name");
  }
  return schema;
};

const setLocalSearchPath = async (client, schema) => {
  // Exclude public by default so unqualified queries can't accidentally hit platform tables.
  await client.query(`SET LOCAL search_path TO ${quoteIdent(schema)}, pg_catalog`);
  return schema;
};


const statementTimeoutMs = (config) => {
  const value = config?.statement_timeout_ms;
  if (Number.isInteger(value) && value > 0 && value <= 120000) return value;
  return 60000;
};

const schemaFromAppName = (appName) => {
  const schema = `${appName}_schema`;
  if (!isSafeSchemaName(schema)) throw new Error("Invalid app schema name");
  return schema;
};

const isQuerySafe = (query) => {
  const forbidden =
    /\b(INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|GRANT|REVOKE|CREATE|COMMENT|VACUUM|ANALYZE|COPY|\\copy)\b/i;
  return !forbidden.test(query);
};

// ===============================
// EXECUTE QUERY (Preview Mode)
// ===============================
export const executeQuery = async (req, res) => {
  const client = await pool.connect();

  try {
    const { questionId, query } = req.body;
    const userId = req.userId;

    if (!questionId) {
      return res
        .status(400)
        .json({ error: "Question ID is missing or invalid" });
    }

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Query is missing or invalid" });
    }

    if (!isQuerySafe(query)) {
      return res
        .status(403)
        .json({ error: "Only SELECT queries are allowed." });
    }

    assertSelectOrWithOnly(query);
    assertSingleStatement(query);

    const qRes = await client.query(
      `SELECT q.expected_query,
              q.comparison_config,
              q.solution_columns,
              q.expected_row_count,
              q.expected_fingerprint,
              q.expected_fingerprint_version,
              a.name AS app_name
         FROM questions q
         JOIN apps a ON a.app_id = q.app_id
         WHERE q.id = $1`,
      [questionId],
    );

    if (qRes.rows.length === 0) {
      return res.status(404).json({ error: "Question not found" });
    }

    const question = qRes.rows[0];
    const config = question.comparison_config || {};
    const timeoutMs = statementTimeoutMs(config);
    const appSchema = schemaFromAppName(question.app_name);

    await client.query("BEGIN");
    await assertNoCrossSchemaRefs(client, query, appSchema);
    await setLocalSearchPath(client, appSchema);
    await client.query(`SET LOCAL statement_timeout = ${timeoutMs}`);

    const graded = await gradeUserQuery(client, {
      userQuery: query,
      expectedQuery: question.expected_query,
      expectedColumns: question.solution_columns,
      config,
      expectedRowCount: question.expected_row_count,
      expectedFingerprint: question.expected_fingerprint,
      expectedFingerprintVersion: question.expected_fingerprint_version,
    });

    await updateUserProgress(questionId, "attempted", query, userId, {
      countAttempt: false,
      logSubmission: false,
    });

    await client.query("COMMIT");
    return res.json({
      rows: graded.rows,
      fields: graded.fields,
      isCorrect: graded.isCorrect,
      reason: graded.reason,
    });
  } catch (error) {
    try {
      await client.query("ROLLBACK");
    } catch (e) {
      // ignore
    }
    return res.status(400).json({ error: error.message });
  } finally {
    client.release();
  }
};

// ===============================
// EXPLAIN / EXPLAIN ANALYZE
// ===============================
export const explainQuery = async (req, res) => {
  const client = await pool.connect();

  try {
    const { questionId, query, analyze } = req.body;

    if (!questionId) {
      return res
        .status(400)
        .json({ error: "Question ID is missing or invalid" });
    }

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Query is missing or invalid" });
    }

    if (!isQuerySafe(query)) {
      return res
        .status(403)
        .json({ error: "Only SELECT queries are allowed." });
    }

    assertSelectOrWithOnly(query);
    assertSingleStatement(query);

    const queryWithoutSemicolon = stripTrailingSemicolon(query);
    const doAnalyze = analyze === true;

    await client.query("BEGIN");
    const appSchema = await getAppSchemaByQuestionId(client, questionId);
    await assertNoCrossSchemaRefs(client, query, appSchema);
    await setLocalSearchPath(client, appSchema);
    await client.query("SET LOCAL statement_timeout = 60000");

    const explainSql = `EXPLAIN (FORMAT JSON, COSTS true, VERBOSE false, BUFFERS true, ANALYZE ${
      doAnalyze ? "true" : "false"
    }) ${queryWithoutSemicolon}`;

    const { rows } = await client.query(explainSql);
    await client.query("COMMIT");

    const plan =
      rows?.[0]?.["QUERY PLAN"] ??
      rows?.[0]?.["QUERY_PLAN"] ??
      rows?.[0]?.query_plan ??
      null;

    return res.json({ plan });
  } catch (error) {
    try {
      await client.query("ROLLBACK");
    } catch (e) {
      console.warn("Failed to rollback explain transaction:", e.message);
    }
    return res.status(400).json({ error: error.message });
  } finally {
    client.release();
  }
};

// ===============================
// SUBMIT ANSWER (Final Evaluation)
// ===============================
export const submitAnswer = async (req, res) => {
  const client = await pool.connect();

  try {
    const { questionId, query } = req.body;
    const userId = req.userId;

    if (!questionId || !query) {
      return res.status(400).json({ error: "Missing questionId or query" });
    }

    if (!isQuerySafe(query)) {
      return res
        .status(403)
        .json({ error: "Only SELECT queries are allowed." });
    }

    assertSelectOrWithOnly(query);
    assertSingleStatement(query);

    const qRes = await client.query(
      `SELECT q.expected_query,
              q.comparison_config,
              q.solution_columns,
              q.expected_row_count,
              q.expected_fingerprint,
              q.expected_fingerprint_version,
              a.name AS app_name
       FROM questions q
       JOIN apps a ON a.app_id = q.app_id
       WHERE q.id = $1`,
      [questionId],
    );

    if (qRes.rows.length === 0) {
      return res.status(404).json({ error: "Question not found" });
    }

    const question = qRes.rows[0];
    const config = question.comparison_config || {};
    const timeoutMs = statementTimeoutMs(config);

    await client.query("BEGIN");
    const appSchema = schemaFromAppName(question.app_name);
    await assertNoCrossSchemaRefs(client, query, appSchema);
    await setLocalSearchPath(client, appSchema);
    await client.query(`SET LOCAL statement_timeout = ${timeoutMs}`);

    let graded;
    try {
      graded = await gradeUserQuery(client, {
        userQuery: query,
        expectedQuery: question.expected_query,
        expectedColumns: question.solution_columns,
        config,
        expectedRowCount: question.expected_row_count,
        expectedFingerprint: question.expected_fingerprint,
        expectedFingerprintVersion: question.expected_fingerprint_version,
        includeDiff: true,
      });
    } catch (error) {
      await updateUserProgress(questionId, "attempted", query, userId);
      await client.query("ROLLBACK");
      return res.status(400).json({
        error: error.message,
        isCorrect: false,
      });
    }

    const newStatus = graded.isCorrect ? "solved" : "attempted";
    await updateUserProgress(questionId, newStatus, query, userId);

    await client.query("COMMIT");
    let newBadges = [];
    if (graded.isCorrect) {
      try {
        const awarded = await awardBadgesForEvent(
          { userId, event: "question_solved", context: { questionId } },
          null,
        );
        newBadges = awarded?.newlyEarned || [];
      } catch (e) {
        console.warn("Failed to award badges:", e?.message || e);
      }
    }

    res.json({
      isCorrect: graded.isCorrect,
      rows: graded.rows,
      fields: graded.fields,
      reason: graded.reason,
      expectedRowCount: graded.expectedRowCount ?? null,
      actualRowCount: graded.actualRowCount ?? null,
      missingRows: graded.missingRows || null,
      extraRows: graded.extraRows || null,
      newBadges,
      message: graded.isCorrect
        ? "Correct! Good job."
        : graded.reason || "Results did not match expected output.",
    });
  } catch (error) {
    console.error("Submit error:", error);
    try {
      await client.query("ROLLBACK");
    } catch (e) {
      // ignore
    }
    res.status(500).json({
      error: "Internal server error",
    });
  } finally {
    client.release();
  }
};

const updateUserProgress = async (
  questionId,
  status,
  query,
  userId,
  options = {},
) => {
  const { countAttempt = true, logSubmission = true } = options;

  // LOG SUBMISSION for heatmap/activity tracking (submit only; not "run query")
  if (logSubmission) {
    try {
      await pool.query(
        "INSERT INTO user_submissions (user_id, question_id, status, query) VALUES ($1, $2, $3, $4)",
        [userId, questionId, status, query],
      );
    } catch (err) {
      console.error("Failed to log submission activity:", err);
    }
  }

  // Check if progress exists
  const checkRes = await pool.query(
    "SELECT id, status FROM user_progress WHERE question_id = $1 AND user_id = $2",
    [questionId, userId],
  );

  if (checkRes.rows.length && checkRes.rows[0].status === "solved") {
    return;
  }

  if (checkRes.rows.length > 0) {
    if (status === "solved") {
      await pool.query(
        `UPDATE user_progress 
         SET status = $1, last_query = $2, attempts_count = attempts_count + $5, solved_at = NOW(), updated_at = NOW() 
         WHERE question_id = $3 AND user_id = $4`,
        [status, query, questionId, userId, countAttempt ? 1 : 0],
      );
    } else {
      await pool.query(
        `UPDATE user_progress 
         SET status = $1, last_query = $2, attempts_count = attempts_count + $5, updated_at = NOW() 
         WHERE question_id = $3 AND user_id = $4`,
        [status, query, questionId, userId, countAttempt ? 1 : 0],
      );
    }
  } else {
    if (status === "solved") {
      await pool.query(
        `INSERT INTO user_progress (user_id, question_id, status, last_query, attempts_count, solved_at) 
         VALUES ($1, $2, $3, $4, $5, NOW())`,
        [userId, questionId, status, query, countAttempt ? 1 : 0],
      );
    } else {
      await pool.query(
        `INSERT INTO user_progress (user_id, question_id, status, last_query, attempts_count) 
         VALUES ($1, $2, $3, $4, $5)`,
        [userId, questionId, status, query, countAttempt ? 1 : 0],
      );
    }
  }
};
