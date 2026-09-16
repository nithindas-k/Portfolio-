// ─────────────────────────────────────────────
// App.jsx — Root application component
// Assembles all portfolio sections
// ─────────────────────────────────────────────

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/hero/HeroSection.jsx';
import ProjectsSection from './components/projects/ProjectsSection.jsx';
import SkillsSection from './components/skills/SkillsSection.jsx';
import StatsSection from './components/stats/StatsSection.jsx';
import ExperienceSection from './components/experience/ExperienceSection.jsx';
import ContactSection from './components/contact/ContactSection.jsx';
import './index.css';

const App = () => {
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

  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
