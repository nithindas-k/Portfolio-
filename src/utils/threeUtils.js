// ─────────────────────────────────────────────
// Three.js Utils
// Mesh generators, procedural materials, math helpers
// ─────────────────────────────────────────────

import * as THREE from 'three';
import { COLORS } from '../constants/theme.js';

/**
 * Create a sage-green emissive wireframe material
 * @param {number} opacity
 */
export const createSageWireframeMaterial = (opacity = 0.7) =>
  new THREE.MeshBasicMaterial({
    color: new THREE.Color(COLORS.sage),
    wireframe: true,
    transparent: true,
    opacity,
  });

/**
 * Create a glowing emissive mesh material
 * @param {string} color - hex color
 * @param {number} emissiveIntensity
 */
export const createGlowMaterial = (color = COLORS.sage, emissiveIntensity = 0.6) =>
  new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    emissive: new THREE.Color(color),
    emissiveIntensity,
    roughness: 0.4,
    metalness: 0.7,
    transparent: true,
    opacity: 0.85,
  });

/**
 * Random float between min and max
 */
export const randomFloat = (min, max) => Math.random() * (max - min) + min;

/**
 * Generate a random position vector within a sphere of given radius
 */
export const randomSpherePoint = (radius) => {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  ];
};

/**
 * Float a mesh in a sinusoidal wave pattern
 * @param {THREE.Object3D} mesh
 * @param {number} time
 * @param {number} amplitude
 * @param {number} frequency
 * @param {number} offset
 */
export const applySineFloat = (mesh, time, amplitude = 0.3, frequency = 0.8, offset = 0) => {
  if (!mesh) return;
  mesh.position.y += Math.sin(time * frequency + offset) * amplitude * 0.01;
};

/**
 * Convert normalized mouse coords (-1..1) to a Three.js Vector2
 */
export const mouseToVec2 = (x, y) => new THREE.Vector2(x, y);
