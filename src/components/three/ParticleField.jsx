// ─────────────────────────────────────────────
// ParticleField
// Floating ambient sage & ash particle system
// ─────────────────────────────────────────────

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PARTICLES } from '../../constants/threeConfig.js';

const ParticleField = () => {
  const pointsRef = useRef();

  const { positions, colors } = useMemo(() => {
    const count = PARTICLES.count;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const sageColor = new THREE.Color('#657152');
    const ashColor = new THREE.Color('#9499A8');

    for (let i = 0; i < count; i++) {
      const spread = PARTICLES.spread;
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * (spread * 0.5);

      const color = Math.random() > 0.5 ? sageColor : ashColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += PARTICLES.speed;
    pointsRef.current.rotation.x += PARTICLES.speed * 0.4;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={PARTICLES.size}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export default ParticleField;
