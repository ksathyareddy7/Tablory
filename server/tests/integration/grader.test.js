import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import pg from "pg";
import {
  FINGERPRINT_VERSION,
  captureExpected,
  captureExpectedAnswer,
  gradeUserQuery,
} from "../../services/grader.js";

const { Client } = pg;

function connect() {
  return new Client({
    user: process.env.DB_USER || os.userInfo().username,
    database: process.env.SQL_ARENA_GRADER_TEST_DB || "postgres",
    password: process.env.DB_PASSWORD || undefined,
    host: process.env.DB_HOST || undefined,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
  });
}

async function withClient(fn) {
  const client = connect();
  await client.connect();
  try {
    await client.query("BEGIN");
    await fn(client);
  } finally {
    try {
      await client.query("ROLLBACK");
    } catch {
      // ignore
    }
    await client.end();
  }
}

test("gradeUserQuery runs the learner SQL once", async () => {
  await withClient(async (client) => {
    await client.query("CREATE TEMP TABLE hits (n int) ON COMMIT DROP");
    await client.query(`
      CREATE FUNCTION pg_temp.bump() RETURNS int
      LANGUAGE plpgsql AS $$
      BEGIN
        INSERT INTO hits VALUES (1);
        RETURN 1;
      END;
      $$
    `);

    const graded = await gradeUserQuery(client, {
      userQuery: "SELECT pg_temp.bump() AS v FROM generate_series(1, 4)",
      expectedQuery: "SELECT 1::int AS v FROM generate_series(1, 4)",
      expectedColumns: ["v"],
      config: {},
    });

    const { rows } = await client.query("SELECT COUNT(*)::int AS c FROM hits");
    assert.equal(rows[0].c, 4);
    assert.equal(graded.isCorrect, true);
    assert.equal(graded.rows.length, 4);
  });
});

test("stored fingerprint does not execute the official query", async () => {
  await withClient(async (client) => {
    await client.query("CREATE TEMP TABLE hits (n int) ON COMMIT DROP");
    await client.query(`
      CREATE FUNCTION pg_temp.bump() RETURNS int
      LANGUAGE plpgsql AS $$
      BEGIN
        INSERT INTO hits VALUES (1);
        RETURN 1;
      END;
      $$
    `);

    const captured = await captureExpected(client, {
      expectedQuery: "SELECT 1::int AS v",
      expectedColumns: ["v"],
      config: {},
    });
    assert.equal(captured.version, FINGERPRINT_VERSION);

    const graded = await gradeUserQuery(client, {
      userQuery: "SELECT pg_temp.bump() AS v",
      expectedQuery: "SELECT pg_temp.bump() AS v",
      expectedColumns: ["v"],
      config: {},
      expectedRowCount: captured.rowCount,
      expectedFingerprint: captured.fingerprint,
      expectedFingerprintVersion: captured.version,
    });

    const { rows } = await client.query("SELECT COUNT(*)::int AS c FROM hits");
    assert.equal(rows[0].c, 1);
    assert.equal(graded.isCorrect, true);
  });
});

test("gradeUserQuery ignores order unless the question requires it", async () => {
  await withClient(async (client) => {
    const unordered = await gradeUserQuery(client, {
      userQuery: "SELECT n FROM (VALUES (1), (2), (3)) AS t(n) ORDER BY n DESC",
      expectedQuery: "SELECT n FROM (VALUES (1), (2), (3)) AS t(n)",
      expectedColumns: ["n"],
      config: {},
    });
    assert.equal(unordered.isCorrect, true);
    assert.deepEqual(
      unordered.rows.map((row) => row.n),
      [3, 2, 1],
    );

    const wrongOrder = await gradeUserQuery(client, {
      userQuery: "SELECT n FROM (VALUES (1), (2), (3)) AS t(n) ORDER BY n ASC",
      expectedQuery: "SELECT n FROM (VALUES (3), (2), (1)) AS t(n)",
      expectedColumns: ["n"],
      config: { sort_by_columns: [{ column: "n", direction: "desc" }] },
    });
    assert.equal(wrongOrder.isCorrect, false);
    assert.match(wrongOrder.reason, /ordered by n DESC/);

    const rightOrder = await gradeUserQuery(client, {
      userQuery: "SELECT n FROM (VALUES (1), (2), (3)) AS t(n) ORDER BY n DESC",
      expectedQuery: "SELECT n FROM (VALUES (3), (2), (1)) AS t(n)",
      expectedColumns: ["n"],
      config: { sort_by_columns: [{ column: "n", direction: "desc" }] },
    });
    assert.equal(rightOrder.isCorrect, true);
  });
});

test("gradeUserQuery treats numeric text and integers as the same value", async () => {
  await withClient(async (client) => {
    const graded = await gradeUserQuery(client, {
      userQuery: "SELECT '1.0000'::text AS v",
      expectedQuery: "SELECT 1::int AS v",
      expectedColumns: ["v"],
      config: {},
    });
    assert.equal(graded.isCorrect, true);
  });
});

test("gradeUserQuery reports a result mismatch and DESC null ordering", async () => {
  await withClient(async (client) => {
    const mismatch = await gradeUserQuery(client, {
      userQuery: "SELECT 2::int AS v",
      expectedQuery: "SELECT 1::int AS v",
      expectedColumns: ["v"],
      config: {},
    });
    assert.equal(mismatch.isCorrect, false);
    assert.equal(mismatch.reason, "Result set mismatch");

    const sameInstant = await gradeUserQuery(client, {
      userQuery: "SELECT '2024-01-01T00:00:00Z'::timestamptz AS v",
      expectedQuery: "SELECT '2024-01-01 00:00:00+00'::timestamptz AS v",
      expectedColumns: ["v"],
      config: {},
    });
    assert.equal(sameInstant.isCorrect, true);

    const nullsLastOnDesc = await gradeUserQuery(client, {
      userQuery: "SELECT v FROM (VALUES (2::int), (NULL::int)) AS t(v) ORDER BY v ASC",
      expectedQuery: "SELECT v FROM (VALUES (NULL::int), (2::int)) AS t(v) ORDER BY v DESC",
      expectedColumns: ["v"],
      config: { sort_by_columns: [{ column: "v", direction: "desc" }] },
    });
    assert.equal(nullsLastOnDesc.isCorrect, false);
    assert.match(nullsLastOnDesc.reason, /ordered by v DESC/);

    const nullsFirstOnDesc = await gradeUserQuery(client, {
      userQuery: "SELECT v FROM (VALUES (2::int), (NULL::int)) AS t(v) ORDER BY v DESC",
      expectedQuery: "SELECT v FROM (VALUES (NULL::int), (2::int)) AS t(v) ORDER BY v DESC",
      expectedColumns: ["v"],
      config: { sort_by_columns: [{ column: "v", direction: "desc" }] },
    });
    assert.equal(nullsFirstOnDesc.isCorrect, true);
  });
});

test("gradeUserQuery reports a row-count mismatch", async () => {
  await withClient(async (client) => {
    const graded = await gradeUserQuery(client, {
      userQuery: "SELECT 1::int AS v",
      expectedQuery: "SELECT 1::int AS v UNION ALL SELECT 2::int",
      expectedColumns: ["v"],
      config: {},
    });
    assert.equal(graded.isCorrect, false);
    assert.match(graded.reason, /Row count mismatch: expected 2, got 1/);
  });
});

test("gradeUserQuery reports a missing column without failing the transaction", async () => {
  await withClient(async (client) => {
    const graded = await gradeUserQuery(client, {
      userQuery: "SELECT 1::int AS b",
      expectedQuery: "SELECT 1::int AS a",
      expectedColumns: ["a"],
      config: {},
    });
    assert.equal(graded.isCorrect, false);
    assert.match(graded.reason, /Required column "a"/);
    const { rows } = await client.query("SELECT 1 AS ok");
    assert.equal(rows[0].ok, 1);
  });
});

test("learner SQL errors are thrown and the transaction stays usable", async () => {
  await withClient(async (client) => {
    await assert.rejects(
      gradeUserQuery(client, {
        userQuery: "SELECT * FROM sql_arena_relation_that_does_not_exist",
        expectedQuery: "SELECT 1::int AS v",
        expectedColumns: ["v"],
        config: {},
      }),
    );
    const { rows } = await client.query("SELECT 1 AS ok");
    assert.equal(rows[0].ok, 1);
  });
});

test("captureExpectedAnswer keeps the loader transaction alive when the official query fails", async () => {
  await withClient(async (client) => {
    const captured = await captureExpectedAnswer(client, {
      schema: "public",
      expectedQuery: "SELECT nope FROM sql_arena_relation_that_does_not_exist",
      expectedColumns: ["nope"],
      config: {},
    });
    assert.ok(captured.error);
    assert.equal(captured.fingerprint, null);
    const { rows } = await client.query("SELECT 1 AS ok");
    assert.equal(rows[0].ok, 1);
  });
});
