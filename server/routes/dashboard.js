import express from "express";
import {
  getDashboardStats,
  getMissedPractice,
  getSolvedExercises,
  resetUserProgress,
} from "../controllers/dashboard.js";

const router = express.Router();

router.get("/stats", getDashboardStats);
router.get("/solved", getSolvedExercises);
router.get("/review", getMissedPractice);
router.post("/reset-progress", resetUserProgress);

export default router;
