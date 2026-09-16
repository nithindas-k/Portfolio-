// ─────────────────────────────────────────────
// useMousePosition
// Normalized mouse coordinates for 3D parallax
// Returns x, y in range -1..1
// ─────────────────────────────────────────────

import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;   // -1 to 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1; // -1 to 1 (inverted Y)
      setMouse({ x, y, rawX: e.clientX, rawY: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouse;
};

export default useMousePosition;
