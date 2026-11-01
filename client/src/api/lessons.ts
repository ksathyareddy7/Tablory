import { apiClient, unwrapData, withUser } from "./client";

export const listLessons = (userId) =>
  apiClient.get("/api/lessons", withUser(userId)).then(unwrapData);

export const getLesson = (slug, userId) =>
  apiClient.get(`/api/lessons/${slug}`, withUser(userId)).then(unwrapData);

export const updateLessonProgress = ({ slug, status }, userId) =>
  apiClient
    .post(`/api/lessons/${slug}/progress`, { status }, withUser(userId))
    .then(unwrapData);

export const getLessonPractice = (slug, userId) =>
  apiClient
    .get(`/api/lessons/${slug}/practice`, withUser(userId))
    .then(unwrapData);

export const runLessonSql = (slug, query, userId) =>
  apiClient
    .post(`/api/lessons/${slug}/run`, { query }, withUser(userId))
    .then(unwrapData);

