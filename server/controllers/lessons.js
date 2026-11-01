import pool from "../database/db.js";
import { awardBadgesForEvent } from "../services/badges.js";
import {
  assertLessonSelect,
  capLessonSql,
  conceptsForLesson,
  preferredAppForLesson,
  prepareLessonSql,
} from "../services/lessonSql.js";

const quoteIdent = (value) => `"${String(value).replace(/"/g, '""')}"`;

export const listLessons = async (req, res) => {
  try {
    const userId = req.userId;

    const { rows } = await pool.query(
      `
      SELECT
        l.id,
        l.slug,
        l.title,
        l.description,
        l.level,
        l.lesson_order,
        l.tags,
        l.estimated_minutes,
        COALESCE(ulp.status, 'not started') AS status,
        ulp.last_viewed_at,
        ulp.completed_at
      FROM lessons l
      LEFT JOIN user_lesson_progress ulp
        ON ulp.lesson_id = l.id AND ulp.user_id = $1
      ORDER BY l.lesson_order ASC, l.id ASC
      `,
      [userId],
    );

    res.json({ data: rows });
  } catch (err) {
    console.error("listLessons error:", err);
    res.status(500).json({ error: "Failed to fetch lessons" });
  }
};

export const getLesson = async (req, res) => {
  try {
    const userId = req.userId;
    const { slug } = req.params;

    const { rows } = await pool.query(
      `
      SELECT
        l.id,
        l.slug,
        l.title,
        l.description,
        l.level,
        l.lesson_order,
        l.tags,
        l.estimated_minutes,
        l.content_md,
        COALESCE(ulp.status, 'not started') AS status,
        ulp.last_viewed_at,
        ulp.completed_at
      FROM lessons l
      LEFT JOIN user_lesson_progress ulp
        ON ulp.lesson_id = l.id AND ulp.user_id = $1
      WHERE l.slug = $2
      LIMIT 1
      `,
      [userId, slug],
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    res.json({ data: rows[0] });
  } catch (err) {
    console.error("getLesson error:", err);
    res.status(500).json({ error: "Failed to fetch lesson" });
  }
};

export const upsertLessonProgress = async (req, res) => {
  try {
    const userId = req.userId;
    const { slug } = req.params;
    const { status } = req.body || {};

    if (!status || !["not started", "in progress", "completed"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const { rows: lessonRows } = await pool.query(
      `SELECT id FROM lessons WHERE slug = $1 LIMIT 1`,
      [slug],
    );

    if (lessonRows.length === 0) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    const lessonId = lessonRows[0].id;
    const completedAt = status === "completed" ? "NOW()" : "NULL";

    const { rows } = await pool.query(
      `
      INSERT INTO user_lesson_progress (user_id, lesson_id, status, last_viewed_at, completed_at)
      VALUES ($1, $2, $3, NOW(), ${completedAt})
      ON CONFLICT (user_id, lesson_id)
      DO UPDATE SET
        status = EXCLUDED.status,
        last_viewed_at = NOW(),
        completed_at = ${completedAt}
      RETURNING user_id, lesson_id, status, last_viewed_at, completed_at
      `,
      [userId, lessonId, status],
    );

    let newBadges = [];
    if (status === "completed") {
      try {
        const awarded = await awardBadgesForEvent(
          { userId, event: "lesson_completed", context: { slug } },
          null,
        );
        newBadges = awarded?.newlyEarned || [];
      } catch (e) {
        console.warn("Failed to award badges:", e?.message || e);
      }
    }

    res.json({ data: rows[0], newBadges });
  } catch (err) {
    console.error("upsertLessonProgress error:", err);
    res.status(500).json({ error: "Failed to update lesson progress" });
  }
};

export const getLessonPractice = async (req, res) => {
  try {
    const userId = req.userId;
    const { slug } = req.params;
    const { rows: lessonRows } = await pool.query(
      `SELECT slug, tags FROM lessons WHERE slug = $1 LIMIT 1`,
      [slug],
    );
    if (lessonRows.length === 0) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    const concepts = conceptsForLesson({
      tags: lessonRows[0].tags || [],
      slug: lessonRows[0].slug,
    });
    if (concepts.length === 0) return res.json({ data: [] });
    const preferredApp = preferredAppForLesson({
      tags: lessonRows[0].tags || [],
      slug: lessonRows[0].slug,
    });

    const { rows } = await pool.query(
      `
      SELECT
        q.id,
        q.title,
        q.difficulty,
        a.name AS app_name,
        COALESCE(up.status, 'not started') AS status
      FROM questions q
      JOIN apps a ON a.app_id = q.app_id
      JOIN question_concepts qc ON qc.question_id = q.id
      JOIN concepts c ON c.id = qc.concept_id
      LEFT JOIN user_progress up
        ON up.question_id = q.id AND up.user_id = $1
      WHERE c.name = ANY($2::text[])
      GROUP BY q.id, q.title, q.difficulty, a.name, up.status
      ORDER BY
        CASE WHEN $3::text IS NOT NULL AND a.name = $3 THEN 0 ELSE 1 END,
        COUNT(*) DESC,
        CASE COALESCE(up.status, 'not started')
          WHEN 'attempted' THEN 0
          WHEN 'not started' THEN 1
          ELSE 2
        END,
        CASE q.difficulty WHEN 'easy' THEN 1 WHEN 'medium' THEN 2 ELSE 3 END,
        q.id
      LIMIT 5
      `,
      [userId, concepts, preferredApp],
    );

    res.json({ data: rows });
  } catch (err) {
    console.error("getLessonPractice error:", err);
    res.status(500).json({ error: "Failed to fetch practice questions" });
  }
};

export const runLessonSql = async (req, res) => {
  const client = await pool.connect();
  try {
    const { slug } = req.params;
    const query = req.body?.query;
    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Query is missing or invalid" });
    }

    const { rows: lessonRows } = await client.query(
      `SELECT slug, tags FROM lessons WHERE slug = $1 LIMIT 1`,
      [slug],
    );
    if (lessonRows.length === 0) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    const prepared = prepareLessonSql(query, {
      tags: lessonRows[0].tags || [],
      slug: lessonRows[0].slug,
    });
    assertLessonSelect(prepared.query);
    if (
      /\b(from|join)\s+"?(?:public|information_schema|pg_catalog|[a-z][a-z0-9_]*_schema)"?\s*\./i.test(
        prepared.query,
      )
    ) {
      return res.status(400).json({
        error: "Use unqualified table names. The lesson runs inside one schema.",
      });
    }

    const limited = capLessonSql(prepared.query, 40);
    await client.query("BEGIN");
    await client.query(
      `SET LOCAL search_path TO ${quoteIdent(prepared.schema)}, pg_catalog`,
    );
    await client.query("SET LOCAL statement_timeout = 8000");
    const result = await client.query(limited);
    await client.query("ROLLBACK");

    res.json({
      app: prepared.app,
      fields: (result.fields || []).map((field) => field.name).filter(Boolean),
      rows: result.rows || [],
      rowCount: (result.rows || []).length,
    });
  } catch (err) {
    try {
      await client.query("ROLLBACK");
    } catch {
      // The transaction may already be finished.
    }
    const status = Number.isInteger(err.status) ? err.status : 400;
    if (status >= 500) console.error("runLessonSql error:", err);
    res.status(status).json({ error: err.message || "Query failed" });
  } finally {
    client.release();
  }
};
