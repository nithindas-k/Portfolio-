// ─────────────────────────────────────────────
// ExperienceSection
// Chronological career roadmap
// ─────────────────────────────────────────────

import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../../constants/portfolioData.js';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section section">
      <div className="section__inner">
        <div className="section__header">
          <div className="section__eyebrow">
            <span className="section__eyebrow-line" />
            <span>Career</span>
          </div>
          <h2 className="section__title">
            My <span className="text-sage">Experience</span>
          </h2>
          <p className="section__sub">
            A track record of building reliable, scalable software in fast-moving environments.
          </p>
        </div>

        <div className="experience-section__timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.id} className="experience-item">
              {/* Timeline line */}
              <div className="experience-item__track">
                <div className="experience-item__dot">
                  <Briefcase size={14} />
                </div>
                {i < EXPERIENCE.length - 1 && <div className="experience-item__line" />}
              </div>

              {/* Content */}
              <div className="experience-item__content">
                <div className="experience-item__header">
                  <div>
                    <h3 className="experience-item__role">{exp.role}</h3>
                    <div className="experience-item__meta">
                      <span className="experience-item__company">{exp.company}</span>
                      <span className="experience-item__type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="experience-item__period">
                    <Calendar size={13} />
                    {exp.period}
                  </div>
                </div>

                <p className="experience-item__desc">{exp.description}</p>

                <ul className="experience-item__highlights">
                  {exp.highlights.map((h) => (
                    <li key={h} className="experience-item__highlight">
                      <CheckCircle2 size={14} className="experience-item__highlight-icon" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
