/**
 * Ties a lesson's example SQL and tags to a loaded app schema and to
 * concept names already stored on graded questions.
 */

export const APP_NAMES = [
  "social",
  "ecommerce",
  "food",
  "ride",
  "movies",
  "bank",
  "realestate",
  "hospital",
  "education",
  "chat",
];

const TAG_TO_CONCEPTS = {
  select: ["count"],
  limit: ["limit"],
  where: ["filtering", "comparison"],
  null: ["null_handling"],
  comparison: ["comparison", "filtering"],
  boolean: ["filtering"],
  order_by: ["sorting"],
  sorting: ["sorting"],
  joins: ["joins", "left_join"],
  join: ["joins"],
  inner_join: ["joins"],
  left_join: ["left_join"],
  full_outer_join: ["joins", "left_join"],
  self_join: ["self_join"],
  group_by: ["group_by", "aggregation"],
  aggregation: ["aggregation"],
  having: ["having"],
  subquery: ["subquery", "exists"],
  subqueries: ["subquery", "exists"],
  exists: ["exists"],
  cte: ["cte"],
  window: ["window_functions", "ranking", "row_number", "partition_by"],
  windows: ["window_functions", "ranking", "row_number", "lag", "running_total"],
  dates: ["date_functions", "date_difference"],
  date: ["date_functions", "date_difference"],
  case: ["case_when"],
  case_when: ["case_when"],
  distinct: ["distinct"],
  union: ["union", "set_operations"],
  set_operations: ["set_operations"],
  fintech: ["aggregation", "joins"],
  reconciliation: ["joins", "left_join"],
  ledger: ["running_total", "aggregation"],
  cohorts: ["aggregation", "date_functions"],
  credit: ["aggregation", "case_when", "date_difference"],
  fraud: ["lag", "pattern_detection"],
};

const SLUG_CONCEPTS = {
  "fintech-settlement-reconciliation": ["joins", "left_join", "aggregation", "date_difference"],
  "fintech-vintage-roll-rates": ["aggregation", "date_difference", "case_when"],
  "fintech-fraud-monitoring": ["lag", "pattern_detection"],
  "fintech-dense-ledger-balances": ["running_total", "date_functions", "aggregation"],
};

const KNOWN_CONCEPTS = new Set([
  "advanced_sql",
  "aggregation",
  "anti_join",
  "arithmetic",
  "average",
  "calculation",
  "case_when",
  "comparison",
  "conditional_aggregation",
  "conversion_metrics",
  "count",
  "count_distinct",
  "cte",
  "date_difference",
  "date_functions",
  "distinct",
  "exists",
  "filtering",
  "group_by",
  "having",
  "joins",
  "lag",
  "lag_lead",
  "lead",
  "left_join",
  "limit",
  "max",
  "min",
  "moving_average",
  "null_handling",
  "ordered_set_aggregate",
  "partition_by",
  "pattern_detection",
  "percentile",
  "performance",
  "postgres_specific",
  "ranking",
  "row_number",
  "running_max",
  "running_total",
  "self_join",
  "set_operations",
  "sorting",
  "string_functions",
  "subquery",
  "sum",
  "trend_analysis",
  "union",
  "window_functions",
]);

export function preferredAppForLesson({ tags = [], slug = "" } = {}) {
  const tagSet = new Set((tags || []).map((tag) => String(tag).toLowerCase()));
  if (String(slug).startsWith("fintech-") || tagSet.has("fintech") || tagSet.has("bank")) {
    return "bank";
  }
  return APP_NAMES.find((name) => tagSet.has(name)) || null;
}

export function conceptsForLesson({ tags = [], slug = "" } = {}) {
  const names = new Set(SLUG_CONCEPTS[String(slug || "")] || []);
  for (const tag of tags || []) {
    const key = String(tag || "").toLowerCase();
    for (const name of TAG_TO_CONCEPTS[key] || []) names.add(name);
    if (KNOWN_CONCEPTS.has(key)) names.add(key);
  }
  return [...names];
}

function lessonError(message) {
  const error = new Error(message);
  error.status = 400;
  return error;
}

function prefixedApp(table) {
  const name = String(table || "").toLowerCase();
  return APP_NAMES.find((app) => name.startsWith(`${app}_`) && name !== `${app}_schema`) || null;
}

function rewritePrefixedTables(sql, app) {
  const re = new RegExp(
    `(\\b(?:from|join)\\s+(?:lateral\\s+)?(?:only\\s+)?)${app}_([a-zA-Z_][a-zA-Z0-9_]*)`,
    "gi",
  );
  return sql.replace(re, (full, lead, rest) => {
    if (String(rest).toLowerCase() === "schema") return full;
    return `${lead}${String(rest).toLowerCase()}`;
  });
}

/**
 * Lesson markdown often prefixes tables with the app name (`social_users`).
 * Loaded schemas use the short name (`users`) and a search_path.
 */
export function prepareLessonSql(sql, { tags = [], slug = "" } = {}) {
  const body = String(sql || "").trim().replace(/;+\s*$/, "");
  if (!body) throw lessonError("Query is missing or invalid");

  const tables = [
    ...body.matchAll(/\b(?:from|join)\s+(?:lateral\s+)?(?:only\s+)?([a-zA-Z_][a-zA-Z0-9_]*)/gi),
  ].map((match) => match[1]);

  const prefixes = new Set(tables.map(prefixedApp).filter(Boolean));
  if (prefixes.size > 1) {
    throw lessonError("This example uses more than one app. Run each query on its own.");
  }

  let app = null;
  let query = body;
  if (prefixes.size === 1) {
    app = [...prefixes][0];
    query = rewritePrefixedTables(body, app);
  } else {
    const tagSet = new Set((tags || []).map((tag) => String(tag).toLowerCase()));
    if (String(slug).startsWith("fintech-") || tagSet.has("fintech") || tagSet.has("bank")) {
      app = "bank";
    } else {
      app = APP_NAMES.find((name) => tagSet.has(name)) || null;
    }
  }

  if (!app) throw lessonError("This example is not tied to a loaded schema.");
  return { app, schema: `${app}_schema`, query };
}

export function capLessonSql(sql, cap = 40) {
  const body = String(sql || "").trim().replace(/;+\s*$/, "");
  if (/\blimit\s+\d+/i.test(body)) {
    return `SELECT * FROM (${body}) AS lesson_src LIMIT ${cap}`;
  }
  return `${body}\nLIMIT ${cap}`;
}

const FORBIDDEN_SQL =
  /\b(INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|GRANT|REVOKE|CREATE|COMMENT|VACUUM|ANALYZE|COPY)\b/i;

export function assertLessonSelect(query) {
  const text = String(query || "");
  if (FORBIDDEN_SQL.test(text)) {
    throw lessonError("Only SELECT queries are allowed.");
  }
  const withoutTrailing = text.trim().replace(/;+\s*$/, "");
  if (withoutTrailing.includes(";")) {
    throw lessonError("Only a single SELECT statement is allowed.");
  }
  const cleaned = withoutTrailing.replace(/^\(+\s*/, "");
  if (!/^(with|select)\b/i.test(cleaned)) {
    throw lessonError("Only SELECT queries are allowed.");
  }
  if (/\bset\s+(local\s+)?search_path\b/i.test(text) || /\bset_config\s*\(/i.test(text)) {
    throw lessonError("Modifying session settings is not allowed.");
  }
  if (/\b(from|join)\s+(?:"?pg_[a-z0-9_]+"?)/i.test(text)) {
    throw lessonError("Access to system catalog tables is not allowed.");
  }
  if (/\b(public|information_schema|pg_catalog)\s*\./i.test(text)) {
    throw lessonError("Access to system schemas is not allowed.");
  }
}
