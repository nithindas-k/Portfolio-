// ─────────────────────────────────────────────
// Animation Utils
// Easing equations & scroll interpolation helpers
// ─────────────────────────────────────────────

/**
 * Linear interpolation
 * @param {number} a - Start value
 * @param {number} b - End value
 * @param {number} t - Progress 0..1
 */
export const lerp = (a, b, t) => a + (b - a) * t;

/**
 * Clamp a value between min and max
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/**
 * Map a value from one range to another
 */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return lerp(outMin, outMax, t);
};

/**
 * Ease-in-out cubic
 */
export const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Ease-out expo — great for snappy entrances
 */
export const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Ease-in-out quart
 */
export const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

/**
 * Get scroll progress (0..1) for the full page
 */
export const getScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? clamp(scrollTop / docHeight, 0, 1) : 0;
};

/**
 * Get scroll progress (0..1) for a specific element
 * @param {HTMLElement} element
 */
export const getElementScrollProgress = (element) => {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
  return clamp(progress, 0, 1);
};

/**
 * Stagger delay for a list of items
 * @param {number} index
 * @param {number} baseDelay - ms
 * @param {number} step - ms per item
 */
export const staggerDelay = (index, baseDelay = 0, step = 80) =>
  baseDelay + index * step;
