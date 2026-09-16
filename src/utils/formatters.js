// ─────────────────────────────────────────────
// Formatters
// Date, metric, and text formatting utilities
// ─────────────────────────────────────────────

/**
 * Format a number with + suffix and K abbreviation
 * e.g. 1200 → "1.2K+"
 */
export const formatMetric = (value) => {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K+`;
  return `${value}+`;
};

/**
 * Truncate text to a max word count with ellipsis
 */
export const truncateWords = (text, maxWords = 20) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
};

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

/**
 * Format a tech tag for display (handles acronyms nicely)
 */
export const formatTechTag = (tag) => tag.trim();

/**
 * Generate a CSS delay string from ms
 */
export const msDelay = (ms) => `${ms}ms`;

/**
 * Format years of experience
 */
export const formatYearsExp = (years) =>
  years === 1 ? '1 Year' : `${years}+ Years`;
