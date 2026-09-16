// ─────────────────────────────────────────────
// CharacterModel
// 3D billboard character that responds to scroll & mouse
// Uses a texture sprite from the character photo
// ─────────────────────────────────────────────

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { lerp } from '../../utils/animationUtils.js';

const CharacterModel = ({ scrollProgress = 0, mouseX = 0, mouseY = 0 }) => {
  const groupRef = useRef();
  const meshRef = useRef();
  const glowRef = useRef();

  // Load the character photo as a texture
  const texture = useTexture('/assets/character.jpg');

  // Create a stylized plane with the character texture
  const geometry = useMemo(() => new THREE.PlaneGeometry(2.2, 3.0, 1, 1), []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
        transparent: false,
        roughness: 0.6,
        metalness: 0.1,
      }),
    [texture]
  );

  // Glow ring behind character
  const glowGeometry = useMemo(
    () => new THREE.PlaneGeometry(2.6, 3.4, 1, 1),
    []
  );
  const glowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#657152'),
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
      }),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Target rotation based on mouse
    const targetRotY = mouseX * 0.12;
    const targetRotX = -mouseY * 0.06;

    // Smooth lerp toward target
    groupRef.current.rotation.y = lerp(groupRef.current.rotation.y, targetRotY, 0.05);
    groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, targetRotX, 0.05);

    // Subtle float animation
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.04;

    // Glow pulse
    if (glowRef.current) {
      glowRef.current.material.opacity = 0.06 + Math.sin(t * 0.8) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0.4, -0.2, 0]}>
      {/* Glow backing */}
      <mesh ref={glowRef} position={[0, 0, -0.05]} geometry={glowGeometry} material={glowMaterial} />

      {/* Character plane */}
      <mesh ref={meshRef} geometry={geometry} material={material} />
    </group>
  );
};

export default CharacterModel;
