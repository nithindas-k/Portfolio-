// ─────────────────────────────────────────────
// Project Service
// Filtering, search, and query helpers
// ─────────────────────────────────────────────

import { PROJECTS } from '../constants/portfolioData.js';

/**
 * Get all projects filtered by category
 * @param {string} category - Category label or 'All'
 * @returns {Array}
 */
export const getProjectsByCategory = (category) => {
  if (!category || category === 'All') return PROJECTS;
  return PROJECTS.filter((p) => p.category === category);
};

/**
 * Get featured projects only
 * @returns {Array}
 */
export const getFeaturedProjects = () => {
  return PROJECTS.filter((p) => p.featured);
};

/**
 * Search projects by keyword (title, description, tech)
 * @param {string} query
 * @returns {Array}
 */
export const searchProjects = (query) => {
  if (!query || query.trim() === '') return PROJECTS;
  const q = query.toLowerCase();
  return PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q))
  );
};

/**
 * Get unique categories from project list
 * @returns {string[]}
 */
export const getCategories = () => {
  const cats = ['All', ...new Set(PROJECTS.map((p) => p.category))];
  return cats;
};
