// ─────────────────────────────────────────────
// App.jsx — Root application component
// Assembles pages based on current route path
// ─────────────────────────────────────────────

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useRouter } from './router/Router.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import PageTransition from './components/transition/PageTransition.jsx';
import WorkTransition from './components/transition/WorkTransition.jsx';
import HomePage from './pages/HomePage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import './index.css';

const App = () => {
  const {
    path,
    phase,
    isCinematicTransition,
    completeCinematicTransition,
  } = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Watch for DOM height changes across all pages and route transitions
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // ── Only pause Lenis while the screen is blacked out ('covering') or
  //    running the cinematic portal zoom transition.
  useEffect(() => {
    if (!window.lenis) return;
    if (phase === 'covering' || isCinematicTransition) {
      window.lenis.stop();
    } else {
      window.lenis.start();
      window.lenis.resize();
    }
  }, [phase, isCinematicTransition]);

  // ── On route path change, reset scroll position and recalculate dimensions
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.start();
      window.lenis.scrollTo(0, { immediate: true });
      window.lenis.resize();
    }
  }, [path]);

  // Content choreography: scale/fade the page wrapper based on phase.
  // CSS classes live in PageTransition.css (no layout properties — only
  // transform + opacity, so Lenis / scroll aren't affected).
  const pageContentClass = [
    'page-content',
    phase === 'covering'  ? 'page-content--covering'  : '',
    phase === 'revealing' ? 'page-content--revealing' : '',
    phase === 'idle'      ? 'page-content--idle'      : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="app">
      {/* Cinematic Work Portal Transition: Home -> Man Zoom -> Silhouette Portal -> Work */}
      {isCinematicTransition && (
        <WorkTransition onComplete={completeCinematicTransition} />
      )}

      {/* Global curtain transition for standard page transitions */}
      {!isCinematicTransition && <PageTransition />}

      <Navbar />

      {/* page-content: receives blur + scale + opacity transitions (covering)
          and a reveal keyframe animation (revealing). Defined in PageTransition.css.
          Only filter/transform/opacity — no layout properties. */}
      <div className={pageContentClass}>
        {path === '/work' ? <WorkPage /> : <HomePage />}
      </div>

      <Footer />
    </div>
  );
};

export default App;
