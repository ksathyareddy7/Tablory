import test from "node:test";
import assert from "node:assert/strict";
import { comparisonMode, numericScale, formatSortSpec, usesVolatileSql } from "../../services/grader.js";

test("comparisonMode: sort_by_columns requires order", () => {
  assert.equal(
    comparisonMode({ sort_by_columns: [{ column: "n", direction: "desc" }] }),
    "sorted",
  );
  assert.equal(comparisonMode({ sort_by_columns: ["-n"] }), "sorted");
});

test("comparisonMode: default is a multiset", () => {
  assert.equal(comparisonMode({}), "multiset");
  assert.equal(comparisonMode({ ignore_order: true }), "multiset");
});

test("comparisonMode: ignore_order false without a sort spec is positional", () => {
  assert.equal(comparisonMode({ ignore_order: false }), "positional");
});

test("numericScale matches the in-memory tolerance buckets", () => {
  assert.equal(numericScale({}), 4);
  assert.equal(numericScale({ numeric_tolerance: 0.001 }), 3);
  assert.equal(numericScale({ numeric_tolerance: 0.01 }), 2);
});

test("usesVolatileSql detects clock and random calls", () => {
  assert.equal(usesVolatileSql("SELECT NOW()"), true);
  assert.equal(usesVolatileSql("SELECT CURRENT_DATE"), true);
  assert.equal(usesVolatileSql("SELECT id FROM users"), false);
});

test("formatSortSpec prints column and direction", () => {
  assert.equal(
    formatSortSpec([{ column: "hire_date", direction: "desc" }, "user_id"]),
    "hire_date DESC, user_id ASC",
  );
});
