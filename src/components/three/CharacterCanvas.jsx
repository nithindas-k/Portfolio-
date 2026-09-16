// ─────────────────────────────────────────────
// CharacterCanvas
// Three.js WebGL canvas — ambient scene only
// (Floating nodes + particles as background)
// Character is rendered separately as a CSS canvas
// with background removal for a clean cutout effect.
// ─────────────────────────────────────────────

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import SceneLighting from './SceneLighting.jsx';
import ParticleField from './ParticleField.jsx';
import FloatingNodes from './FloatingNodes.jsx';
import { CAMERA } from '../../constants/threeConfig.js';
import './CharacterCanvas.css';

const CharacterCanvas = () => {
  return (
    <div className="character-canvas">
      <Canvas
        camera={{
          fov: CAMERA.fov,
          near: CAMERA.near,
          far: CAMERA.far,
          position: CAMERA.position,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneLighting />
          <ParticleField />
          <FloatingNodes />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CharacterCanvas;
