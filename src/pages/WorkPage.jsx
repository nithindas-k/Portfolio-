// ─────────────────────────────────────────────
// WorkPage.jsx — /work route
// Reuses ProjectsSection as-is + a topbar with ← Home
// ─────────────────────────────────────────────

import React from 'react';
import { useRouter } from '../router/Router.jsx';
import { BRAND } from '../constants/navigation.js';
import ProjectsSection from '../components/projects/ProjectsSection.jsx';
import './WorkPage.css';

const WorkPage = () => {
  const { navigate } = useRouter();

  return (
    <main className="work-page">
      {/* Top navigation bar */}
      <div className="work-page__topbar">
        <button
          className="work-page__back-btn"
          onClick={() => navigate('/')}
          aria-label="Go back to home"
        >
          <span className="work-page__back-arrow">←</span>
          Home
        </button>

        <span className="work-page__brand">{BRAND.name}</span>
      </div>

      {/* Projects — reused exactly as-is */}
      <ProjectsSection />
    </main>
  );
};

export default WorkPage;
