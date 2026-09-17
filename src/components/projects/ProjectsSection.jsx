// ─────────────────────────────────────────────
// ProjectsSection
// High-impact showcase with category filtering & Grid/List view
// ─────────────────────────────────────────────

import React, { useState } from 'react';
import { ChevronDown, LayoutGrid, List } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';
import { getProjectsByCategory } from '../../services/projectService.js';
import { CATEGORIES } from '../../constants/portfolioData.js';
import './ProjectsSection.css';

const ProjectsSection = ({ initialShowAll = false }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [showAll, setShowAll] = useState(initialShowAll);

  const projects = getProjectsByCategory(activeCategory);
  const INITIAL_COUNT = 3;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setShowAll(initialShowAll);
    requestAnimationFrame(() => {
      window.lenis?.resize();
    });
  };

  const handleToggleMore = () => {
    if (showAll) {
      if (window.lenis) {
        window.lenis.scrollTo('#projects', { offset: -10, duration: 1.2 });
      } else {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowAll((prev) => !prev);
    requestAnimationFrame(() => {
      window.lenis?.resize();
    });
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="section__inner">
        {/* Header */}
        <div className="section__header">
          <div className="section__eyebrow">
            <span className="section__eyebrow-line" />
            <span>My Work</span>
          </div>
          <h2 className="section__title">
            Selected <span className="text-sage">Projects</span>
          </h2>
          <p className="section__sub">
            A collection of software I&apos;ve designed, built, and shipped — from concept to production.
          </p>
        </div>

        {/* Toolbar: Category filters + View switcher */}
        <div className="projects-section__toolbar">
          <div className="projects-section__filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`projects-section__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-view-toggle">
            <button
              type="button"
              className={`projects-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View with Live Previews"
            >
              <LayoutGrid size={14} />
              <span>Grid View</span>
            </button>
            <button
              type="button"
              className={`projects-view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View (No Previews)"
            >
              <List size={14} />
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* Projects Display: Grid or List */}
        <div className={viewMode === 'grid' ? 'projects-section__grid' : 'projects-section__list'}>
          {displayedProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* More Projects toggle button */}
        {hasMore && (
          <div className="projects-section__more-wrap">
            <button
              className="projects-section__more-btn"
              onClick={handleToggleMore}
              aria-expanded={showAll}
            >
              <span>{showAll ? 'Show Less' : 'More Projects'}</span>
              <ChevronDown
                size={16}
                className={`projects-section__more-icon ${showAll ? 'projects-section__more-icon--open' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
