// ─────────────────────────────────────────────
// useScrollProgress
// Reactive scroll progress tracker (0..1)
// ─────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { clamp } from '../utils/animationUtils.js';

/**
 * Returns global scroll progress from 0 (top) to 1 (bottom)
 */
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? clamp(scrollTop / docHeight, 0, 1) : 0;
      setProgress(p);
      setScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, scrollY };
};

export default useScrollProgress;
