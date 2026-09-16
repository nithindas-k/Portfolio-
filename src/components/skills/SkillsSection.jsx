// ─────────────────────────────────────────────
// SkillsSection
// Dual-view: Grid (Tools & Process) | List (3 Categorized Cards)
// ─────────────────────────────────────────────

import React, { useState } from 'react';
import { Layers, Code2, Gauge, Rocket, ArrowRight, LayoutGrid, List } from 'lucide-react';
import TechIcon from './TechIcons.jsx';
import { SKILLS, TECH_TAGS } from '../../constants/portfolioData.js';
import './SkillsSection.css';

const PRIMARY_TOOLS = [
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Three.js',
  'Redis',
  'AWS',
  'Git & GitHub',
  'Groq AI',
];

const MORE_TOOLS = [
  'JavaScript',
  'Vite',
  'Redux Toolkit',
  'Zustand',
  'Framer Motion',
  'GSAP',
  'Socket.io',
  'Firebase',
  'Razorpay',
  'Cloudinary',
  'Vercel',
  'Render',
  'Java',
  'C++',
  'C',
  'HTML5',
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'ARCHITECT',
    desc: 'System architecture, database schema design & technical roadmap planning.',
    Icon: Layers,
  },
  {
    number: '02',
    title: 'DEVELOP',
    desc: 'Type-safe frontend development & high-throughput REST / WebSocket backends.',
    Icon: Code2,
  },
  {
    number: '03',
    title: 'OPTIMIZE',
    desc: 'Performance audits, cross-device responsiveness, security hardening & caching.',
    Icon: Gauge,
  },
  {
    number: '04',
    title: 'SHIP & MONITOR',
    desc: 'Automated CI/CD pipelines, cloud deployment (AWS/Vercel/Render) & live uptime.',
    Icon: Rocket,
  },
];

const SkillCategoryCard = ({ title, skills }) => (
  <div className="skill-category-card">
    <div className="skill-category-card__header">
      <span className="skills-card__dot" />
      <h3 className="skill-category-card__title">{title}</h3>
    </div>
    <div className="skill-category-card__tags">
      {skills.map((skill) => (
        <span key={skill} className="skill-pill">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [showMore, setShowMore] = useState(false);

  const displayedTools = showMore ? [...PRIMARY_TOOLS, ...MORE_TOOLS] : PRIMARY_TOOLS;

  return (
    <section id="skills" className="skills-section section">
      <div className="section__inner">
        {/* Header with Title and View Switcher */}
        <div className="section__header">
          <div className="section__eyebrow">
            <span className="section__eyebrow-line" />
            <span>Expertise</span>
          </div>
          <h2 className="section__title">
            Tech <span className="text-sage">Stack</span>
          </h2>
          <p className="section__sub">
            Tools and technologies I work with to build full-stack digital products.
          </p>
        </div>

        {/* Top-right view switch controls */}
        <div className="skills-section__controls">
          <div className="skills-view-toggle">
            <button
              type="button"
              className={`skills-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Show as Grid and Process"
            >
              <LayoutGrid size={14} />
              <span>Grid View</span>
            </button>
            <button
              type="button"
              className={`skills-view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="Show as Categorized List"
            >
              <List size={14} />
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Grid View (Image 1 style: Tools & Technologies + My Process) */}
        {viewMode === 'grid' && (
          <div className="skills-showcase">
            {/* Left Card: Tools & Technologies */}
            <div className="skills-card skills-card--tools">
              <div className="skills-card__header">
                <div className="skills-card__title-wrap">
                  <span className="skills-card__dot" />
                  <h3 className="skills-card__title">Tools & Technologies</h3>
                </div>
                <span className="skills-card__count">
                  {displayedTools.length} / {PRIMARY_TOOLS.length + MORE_TOOLS.length} Tools
                </span>
              </div>

              <div className="tech-tile-grid">
                {displayedTools.map((tool) => (
                  <div key={tool} className="tech-tile" title={tool}>
                    <div className="tech-tile__icon-box">
                      <TechIcon name={tool} size={30} />
                    </div>
                    <span className="tech-tile__name">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="skills-card__footer">
                <button
                  type="button"
                  className="skills-card__more-btn"
                  onClick={() => setShowMore(!showMore)}
                >
                  <span>{showMore ? 'Show Less' : `+ ${MORE_TOOLS.length} More Technologies`}</span>
                  <ArrowRight
                    size={14}
                    className={`skills-card__arrow ${showMore ? 'skills-card__arrow--up' : ''}`}
                  />
                </button>
              </div>
            </div>

            {/* Right Card: My Process */}
            <div className="skills-card skills-card--process">
              <div className="skills-card__header">
                <div className="skills-card__title-wrap">
                  <span className="skills-card__dot" />
                  <h3 className="skills-card__title">My Process</h3>
                </div>
                <span className="skills-card__badge">Workflow</span>
              </div>

              <div className="process-list">
                {PROCESS_STEPS.map((step, idx) => {
                  const IconComponent = step.Icon;
                  return (
                    <div key={step.number} className="process-item">
                      <div className="process-item__indicator">
                        <div className="process-item__icon-wrap">
                          <IconComponent size={17} />
                        </div>
                        {idx < PROCESS_STEPS.length - 1 && (
                          <div className="process-item__line" />
                        )}
                      </div>
                      <div className="process-item__content">
                        <div className="process-item__header">
                          <span className="process-item__num">{step.number}</span>
                          <h4 className="process-item__title">{step.title}</h4>
                        </div>
                        <p className="process-item__desc">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: List View (Image 2 style: 3 Category Cards + All Technologies cloud) */}
        {viewMode === 'list' && (
          <div className="skills-list-view">
            <div className="skills-categories-grid">
              <SkillCategoryCard title="Frontend" skills={SKILLS.frontend} />
              <SkillCategoryCard title="Backend" skills={SKILLS.backend} />
              <SkillCategoryCard title="Tools & Cloud" skills={SKILLS.tools} />
            </div>

            <div className="skills-tag-cloud-wrap">
              <p className="skills-tag-cloud-label">All Technologies</p>
              <div className="skills-tag-cloud">
                {TECH_TAGS.map((tag) => (
                  <span key={tag} className="skills-tag-item">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
