// ─────────────────────────────────────────────
// HomePage.jsx — Home page (all sections except Projects)
// ─────────────────────────────────────────────

import React from 'react';
import HeroSection from '../components/hero/HeroSection.jsx';
import SkillsSection from '../components/skills/SkillsSection.jsx';
import StatsSection from '../components/stats/StatsSection.jsx';
import ExperienceSection from '../components/experience/ExperienceSection.jsx';
import ContactSection from '../components/contact/ContactSection.jsx';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <StatsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
