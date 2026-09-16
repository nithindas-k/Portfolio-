// ─────────────────────────────────────────────
// FloatingNodes
// Wireframe polyhedra floating in the 3D scene
// ─────────────────────────────────────────────

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FLOATING_NODES } from '../../constants/threeConfig.js';

const FloatingNode = ({ position, geometry, initialRotation, floatOffset, speed }) => {
  const meshRef = useRef();
  const baseY = useRef(position[1]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x += speed * 0.7;
    meshRef.current.rotation.y += speed;
    meshRef.current.rotation.z += speed * 0.4;
    meshRef.current.position.y =
      baseY.current + Math.sin(t * FLOATING_NODES.floatSpeed * 1000 + floatOffset) * FLOATING_NODES.floatAmplitude;
  });

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#657152'),
        emissive: new THREE.Color('#4A543C'),
        emissiveIntensity: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      }),
    []
  );

  return (
    <mesh ref={meshRef} position={position} rotation={initialRotation} material={material}>
      {geometry}
    </mesh>
  );
};

const FloatingNodes = () => {
  const nodes = useMemo(() => {
    const { positions, rotationSpeed } = FLOATING_NODES;

    return positions.map((pos, i) => {
      const type = i % 3;
      let geometry;
      if (type === 0) {
        geometry = <icosahedronGeometry args={[FLOATING_NODES.icosahedron.radius, FLOATING_NODES.icosahedron.detail]} />;
      } else if (type === 1) {
        geometry = <octahedronGeometry args={[FLOATING_NODES.octahedron.radius, FLOATING_NODES.octahedron.detail]} />;
      } else {
        geometry = (
          <torusGeometry
            args={[
              FLOATING_NODES.torus.radius,
              FLOATING_NODES.torus.tube,
              FLOATING_NODES.torus.radialSegments,
              FLOATING_NODES.torus.tubularSegments,
            ]}
          />
        );
      }

      return {
        id: i,
        position: pos,
        geometry,
        initialRotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        floatOffset: i * 1.2,
        speed: rotationSpeed * (0.6 + Math.random() * 0.8),
      };
    });
  }, []);

  return (
    <group>
      {nodes.map((node) => (
        <FloatingNode key={node.id} {...node} />
      ))}
    </group>
  );
};

export default FloatingNodes;
