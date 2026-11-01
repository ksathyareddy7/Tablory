import express from "express";
import {
  getLesson,
  getLessonPractice,
  listLessons,
  runLessonSql,
  upsertLessonProgress,
} from "../controllers/lessons.js";

const router = express.Router();

router.get("/", listLessons);
router.get("/:slug/practice", getLessonPractice);
router.post("/:slug/run", runLessonSql);
router.get("/:slug", getLesson);
router.post("/:slug/progress", upsertLessonProgress);

export default router;

