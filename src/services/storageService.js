// ─────────────────────────────────────────────
// Storage Service
// LocalStorage wrapper for user preferences
// ─────────────────────────────────────────────

const PREFIX = 'portfolio_';

/**
 * Save a value to localStorage
 */
export const savePreference = (key, value) => {
  try {
    localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
  } catch (_) {
    // Silently fail if localStorage is unavailable
  }
};

/**
 * Read a value from localStorage
 */
export const readPreference = (key, fallback = null) => {
  try {
    const raw = localStorage.getItem(`${PREFIX}${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
};

/**
 * Remove a value from localStorage
 */
export const clearPreference = (key) => {
  try {
    localStorage.removeItem(`${PREFIX}${key}`);
  } catch (_) {
    // Silently fail
  }
};
