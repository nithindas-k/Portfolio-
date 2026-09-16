// ─────────────────────────────────────────────
// Design Token: Color Palette
// Black · White · Ash · Sage Green (#657152)
// ─────────────────────────────────────────────

export const COLORS = {
  // Backgrounds
  bgPrimary: '#0B0C0E',
  bgSecondary: '#111318',
  bgCard: '#16181E',
  bgCardGlass: 'rgba(22, 24, 30, 0.80)',
  bgHover: '#1E2028',

  // Borders
  borderSubtle: 'rgba(255, 255, 255, 0.07)',
  borderMid: 'rgba(255, 255, 255, 0.12)',
  borderSage: 'rgba(101, 113, 82, 0.40)',

  // Sage Green (from user swatch)
  sage: '#657152',
  sageMid: '#7E8D67',
  sageLight: '#A3B48A',
  sageDark: '#4A543C',
  sageGlow: 'rgba(101, 113, 82, 0.25)',
  sageBright: 'rgba(163, 180, 138, 0.15)',

  // Ash / Gray scale
  ashDark: '#1E2028',
  ashMid: '#2D3140',
  ashLight: '#9499A8',
  ashLighter: '#C8CBD6',

  // Text
  textWhite: '#FFFFFF',
  textLight: '#E8EAF0',
  textMuted: '#9499A8',
  textFaint: '#555A6A',

  // Accents
  white: '#FFFFFF',
  black: '#000000',
};

export const FONTS = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '40px',
  xxl: '80px',
  xxxl: '120px',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

export const TRANSITIONS = {
  fast: 'all 0.15s ease',
  base: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};
