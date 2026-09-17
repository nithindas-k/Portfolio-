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
import HomePage from './pages/HomePage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import './index.css';

const App = () => {
  const { path, phase } = useRouter();

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
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // ── Pause Lenis during transition so its RAF loop doesn't compete
  //    with the compositor thread animating the blur overlay.
  useEffect(() => {
    if (!window.lenis) return;
    if (phase === 'covering' || phase === 'revealing') {
      window.lenis.stop();
    } else {
      window.lenis.start();
    }
  }, [phase]);

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
      {/* Global curtain transition — always mounted, driven by router phase */}
      <PageTransition />

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
