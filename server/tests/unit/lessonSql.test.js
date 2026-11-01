import test from "node:test";
import assert from "node:assert/strict";
import { conceptsForLesson, prepareLessonSql, capLessonSql } from "../../services/lessonSql.js";

test("prepareLessonSql rewrites a single app prefix", () => {
  const prepared = prepareLessonSql("SELECT id FROM social_users LIMIT 5", {
    tags: ["select"],
    slug: "select-basics",
  });
  assert.equal(prepared.app, "social");
  assert.equal(prepared.schema, "social_schema");
  assert.match(prepared.query, /FROM users/i);
});

test("prepareLessonSql uses the bank schema for fintech lessons", () => {
  const prepared = prepareLessonSql("SELECT transaction_id FROM card_transactions LIMIT 5", {
    tags: ["fintech"],
    slug: "fintech-settlement-reconciliation",
  });
  assert.equal(prepared.app, "bank");
  assert.match(prepared.query, /card_transactions/);
});

test("prepareLessonSql rejects mixed app prefixes", () => {
  assert.throws(
    () =>
      prepareLessonSql("SELECT * FROM social_users u JOIN ecommerce_orders o ON true", {
        tags: [],
        slug: "joins",
      }),
    /more than one app/,
  );
});

test("conceptsForLesson maps lesson tags and fintech slugs", () => {
  const names = conceptsForLesson({
    tags: ["where", "null"],
    slug: "where-filtering-and-null",
  });
  assert.ok(names.includes("filtering"));
  assert.ok(names.includes("null_handling"));

  const fintech = conceptsForLesson({
    tags: ["fintech", "fraud"],
    slug: "fintech-fraud-monitoring",
  });
  assert.ok(fintech.includes("lag"));
  assert.ok(fintech.includes("pattern_detection"));
});

test("capLessonSql keeps an existing limit inside a wrapper", () => {
  const sql = capLessonSql("SELECT id FROM users ORDER BY id LIMIT 5", 40);
  assert.match(sql, /LIMIT 40/i);
  assert.match(sql, /lesson_src/);
});
