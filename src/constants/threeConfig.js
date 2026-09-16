// ─────────────────────────────────────────────
// Three.js Scene Configuration
// Camera, lighting, animation presets
// ─────────────────────────────────────────────

export const CAMERA = {
  fov: 45,
  near: 0.1,
  far: 100,
  position: [0, 0, 5],
};

export const LIGHTING = {
  ambientIntensity: 0.4,
  keyLightColor: '#A3B48A',      // Sage light key
  keyLightIntensity: 2.5,
  keyLightPosition: [3, 4, 3],
  rimLightColor: '#7E8D67',
  rimLightIntensity: 1.5,
  rimLightPosition: [-3, 2, -2],
  fillLightColor: '#E8EAF0',
  fillLightIntensity: 0.8,
  fillLightPosition: [0, -2, 4],
};

export const PARTICLES = {
  count: 80,
  spread: 12,
  size: 0.025,
  color: '#657152',
  speed: 0.0004,
};

export const FLOATING_NODES = {
  icosahedron: { radius: 0.22, detail: 0 },
  octahedron: { radius: 0.18, detail: 0 },
  torus: { radius: 0.2, tube: 0.07, radialSegments: 8, tubularSegments: 16 },
  positions: [
    [-2.2, 1.8, -1.0],
    [2.4, 2.2, -0.8],
    [-2.8, -1.0, -1.5],
    [2.8, -1.4, -1.2],
    [-1.6, 3.0, -2.0],
    [1.8, -2.8, -1.8],
    [3.2, 0.6, -2.5],
    [-3.0, 0.2, -2.2],
  ],
  rotationSpeed: 0.003,
  floatAmplitude: 0.3,
  floatSpeed: 0.0008,
};

export const CHARACTER = {
  // How much the character shifts with scroll
  scrollRotationMax: Math.PI * 0.25,
  // Mouse influence on character lean
  mouseInfluence: 0.08,
  // Scroll stages for pose transitions
  stages: {
    front: { scrollRange: [0, 0.3], label: 'pose-front' },
    quarter: { scrollRange: [0.3, 0.6], label: 'pose-quarter' },
    back: { scrollRange: [0.6, 1.0], label: 'pose-back' },
  },
};

export const SCENE = {
  fogColor: '#0B0C0E',
  fogNear: 8,
  fogFar: 20,
  background: '#0B0C0E',
};
