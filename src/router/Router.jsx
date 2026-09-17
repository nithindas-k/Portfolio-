// ─────────────────────────────────────────────
// Router.jsx — Custom History API router
// Exports: RouterProvider, useRouter, scrollToHash
// ─────────────────────────────────────────────

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ── Phase type: 'idle' | 'covering' | 'revealing'

const RouterContext = createContext(null);

// ── scrollToHash: uses window.lenis if available, else scrollIntoView
export function scrollToHash(hash) {
  if (!hash) return;
  const selector = hash.startsWith('#') ? hash : `#${hash}`;

  // Small delay to let the DOM settle after a page swap
  requestAnimationFrame(() => {
    if (window.lenis) {
      window.lenis.scrollTo(selector, { offset: -10, duration: 1.2 });
    } else {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ── RouterProvider
export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'covering' | 'revealing'
  // toPath: the destination route, available during covering so PageTransition
  // can render the destination label in the center mark.
  const [toPath, setToPath] = useState(() => window.location.pathname);

  // Listen for browser back/forward
  useEffect(() => {
    const onPopState = () => {
      const nextPath = window.location.pathname;
      setToPath(nextPath);
      setPhase('covering');

      const coverTimer = setTimeout(() => {
        setPath(nextPath);

        // Reset scroll
        window.scrollTo(0, 0);
        if (window.lenis) {
          window.lenis.start();
          window.lenis.scrollTo(0, { immediate: true });
          window.lenis.resize();
        }

        // Two rAFs before revealing to let React re-render the new page
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase('revealing');
            const revealTimer = setTimeout(() => {
              setPhase('idle');
            }, 1200);
            return () => clearTimeout(revealTimer);
          });
        });
      }, 800);

      return () => clearTimeout(coverTimer);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // ── navigate(to, { scrollTarget, replace })
  const navigate = useCallback(
    (to, { scrollTarget, replace = false } = {}) => {
      const currentPath = window.location.pathname;

      // Same path — just scroll
      if (to === currentPath) {
        if (scrollTarget) scrollToHash(scrollTarget);
        return;
      }

      // Different path — run curtain transition
      setToPath(to);
      setPhase('covering');

      setTimeout(() => {
        // Update history + state
        if (replace) {
          window.history.replaceState({}, '', to);
        } else {
          window.history.pushState({}, '', to);
        }
        setPath(to);

        // Reset scroll position
        window.scrollTo(0, 0);
        if (window.lenis) {
          window.lenis.start();
          window.lenis.scrollTo(0, { immediate: true });
          window.lenis.resize();
        }

        // Two animation frames so React can paint the new page before revealing
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase('revealing');

            setTimeout(() => {
              setPhase('idle');
              if (scrollTarget) scrollToHash(scrollTarget);
            }, 1200);
          });
        });
      }, 800);
    },
    []
  );

  return (
    <RouterContext.Provider value={{ path, phase, toPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

// ── useRouter hook
export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used inside <RouterProvider>');
  }
  return ctx;
}
