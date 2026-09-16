import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import './ProjectCard.css';

const getDomain = (url) => {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

const ProjectCard = ({ project, index, viewMode = 'grid' }) => {
  const previewUrl = project.previewUrl || project.liveUrl;
  const domain = getDomain(previewUrl || project.liveUrl);
  const isList = viewMode === 'list';

  return (
    <article
      className={`project-card ${isList ? 'project-card--list' : ''} ${project.featured ? 'project-card--featured' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Mac Mini Browser Preview (Grid View only — hidden in List View) */}
      {!isList && (
        <div className="project-card__mini-browser">
          <div className="project-card__browser-header">
            <div className="project-card__browser-dots">
              <span className="project-card__browser-dot project-card__browser-dot--red" />
              <span className="project-card__browser-dot project-card__browser-dot--yellow" />
              <span className="project-card__browser-dot project-card__browser-dot--green" />
            </div>

            <div className="project-card__browser-url">
              <span className="project-card__browser-lock"></span>
              <span>{domain}</span>
            </div>

            {(project.liveUrl || previewUrl) ? (
              <a
                href={project.liveUrl || previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__browser-external"
                title={`Open ${project.title} in new tab`}
              >
                <ExternalLink size={11} />
              </a>
            ) : (
              <span className="project-card__browser-external-placeholder" />
            )}
          </div>

          <div className="project-card__browser-viewport">
            {previewUrl ? (
              <iframe
                src={previewUrl}
                title={`${project.title} Live App Preview`}
                className="project-card__browser-iframe"
                loading="lazy"
              />
            ) : (
              <div className="project-card__browser-empty" style={{ background: project.gradient }}>
                <span>Preview Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content Details */}
      <div className={`project-card__body ${isList ? 'project-card__body--list' : ''}`}>
        <div className="project-card__header-row">
          <h3 className="project-card__title">{project.title}</h3>
          <Badge variant="ash">{project.category}</Badge>
        </div>

        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__footer-row">
          {/* Tech stack */}
          <div className="project-card__tech">
            {project.tech.map((t) => (
              <span key={t} className="project-card__tech-pill">{t}</span>
            ))}
          </div>

          {/* Links */}
          <div className="project-card__links">
            {project.githubUrl && (
              <a href={project.githubUrl} className="project-card__link" target="_blank" rel="noopener noreferrer">
                <GitBranch size={14} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} className="project-card__link project-card__link--primary" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
