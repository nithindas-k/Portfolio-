// ─────────────────────────────────────────────
// SceneLighting
// Studio key, rim, and fill lights for the 3D scene
// ─────────────────────────────────────────────

import React from 'react';
import { LIGHTING } from '../../constants/threeConfig.js';

const SceneLighting = () => {
  return (
    <>
      {/* Ambient fill */}
      <ambientLight intensity={LIGHTING.ambientIntensity} color="#c8cbd6" />

      {/* Key light — sage green tint from upper-right */}
      <pointLight
        position={LIGHTING.keyLightPosition}
        intensity={LIGHTING.keyLightIntensity}
        color={LIGHTING.keyLightColor}
        distance={12}
        decay={2}
      />

      {/* Rim light — sage from lower-left behind character */}
      <pointLight
        position={LIGHTING.rimLightPosition}
        intensity={LIGHTING.rimLightIntensity}
        color={LIGHTING.rimLightColor}
        distance={10}
        decay={2}
      />

      {/* Front fill — soft white */}
      <pointLight
        position={LIGHTING.fillLightPosition}
        intensity={LIGHTING.fillLightIntensity}
        color={LIGHTING.fillLightColor}
        distance={8}
        decay={2}
      />

      {/* Directional for overall scene balance */}
      <directionalLight
        position={[0, 8, 4]}
        intensity={0.5}
        color="#ffffff"
      />
    </>
  );
};

export default SceneLighting;
