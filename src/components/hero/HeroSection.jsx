// ─────────────────────────────────────────────
// HeroSection — Nexora editorial layout (v3)
// Structure:
//   TOP ROW:  [DIGITAL]  [floating image]  [WORLD]
//   BOTTOM:   Wide card → left text | image bleeds up | right features
// NO rectangle behind image — it floats freely.
// ─────────────────────────────────────────────

import React from 'react';
import { useRouter } from '../../router/Router.jsx';
import { ArrowRight, ArrowUpRight, Download, Star, ExternalLink } from 'lucide-react';
import CharacterImage from './CharacterImage.jsx';
import { DEVELOPER } from '../../constants/portfolioData.js';
import resumePdf from '../../assets/Nithin Das Resume.pdf';
import './HeroSection.css';

const SocialIcon = ({ type, size = 18 }) => {
  switch (type) {
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case 'gmail':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
  }
};

const HeroSection = () => {
  const { navigate } = useRouter();

  const handleCTAClick = () => {
    navigate('/work');
  };

  return (
    <section id="home" className="hero">
      {/* Ambient background */}
      <div className="hero__grid-bg" />
      <div className="hero__glow" />

      {/* ══════════════════════════════════════════
          MAIN WRAPPER — positions everything
      ══════════════════════════════════════════ */}
      <div className="hero__wrapper">

        {/* ── TOP ROW: Bold split headlines ── */}
        <div className="hero__headline-row">
          <div className="hero__hl-left">
            <span className="hero__hl-italic">Building</span>
            <span className="hero__hl-big hero__hl-accent">PRODUCTS</span>
          </div>

          {/* Center spacer — image floats through here from the card below */}
          <div className="hero__hl-center" />

          <div className="hero__hl-right">
            <span className="hero__hl-italic">Solutions</span>
            <div className="hero__hl-big-wrap">
              <span className="hero__hl-big">THAT SCALE</span>
              <span className="hero__star-icon">✦</span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Wide card — image bleeds up through it ── */}
        <div className="hero__bottom-card">

          {/* LEFT text content */}
          <div className="hero__text">
            <div className="hero__new-label">
              <span className="hero__new-dot" />
              AVAILABLE FOR HIRE
            </div>

            <h2 className="hero__sub-headline">
              From Idea to Impact
            </h2>

            <p className="hero__sub">
              MERN-stack developer who builds real products, not demos — from a healthcare platform handling live appointments and payments to an AI-powered chat analytics tool processing thousands of messages in real time. I care about clean architecture, type-safe code, and shipping things people actually use.
            </p>

            <div className="hero__actions">
              <button className="hero__btn-primary" onClick={handleCTAClick}>
                View My Work
                <ArrowRight size={16} />
              </button>
              <a
                className="hero__btn-outline"
                href={resumePdf}
                download="Nithin_Das_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* CENTER: Character Image */}
          <div className="hero__image-col">
            <CharacterImage />
          </div>

          {/* RIGHT: features + featured card */}
          <div className="hero__right">
            {/* Social & Contact Links */}
            <div className="hero__features">
              {[
                {
                  type: 'linkedin',
                  label: 'LinkedIn',
                  sub: 'Profile',
                  href: 'https://www.linkedin.com/in/nithin-das-9b932123a/',
                  isExternal: true,
                },
                {
                  type: 'github',
                  label: 'GitHub',
                  sub: 'Code',
                  href: 'https://github.com/nithindas-k',
                  isExternal: true,
                },
                {
                  type: 'whatsapp',
                  label: 'WhatsApp',
                  sub: 'Chat',
                  href: 'https://wa.me/918921642524',
                  isExternal: true,
                },
                {
                  type: 'gmail',
                  label: 'Gmail',
                  sub: 'Email',
                  href: 'mailto:nithindaskavungal@gmail.com',
                  isExternal: false,
                },
              ].map(({ type, label, sub, href, isExternal }) => (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? '_blank' : '_self'}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="hero__feature-item"
                  title={`${label}: ${href}`}
                >
                  <span className="hero__feature-icon">
                    <SocialIcon type={type} size={18} />
                  </span>
                  <span className="hero__feature-label">{label}</span>
                  <span className="hero__feature-sub">{sub}</span>
                </a>
              ))}
            </div>

            {/* Featured project card */}
            <div className="hero__featured-card">
              <div className="hero__featured-label">
                <Star size={12} />
                Featured Project
              </div>

              {/* Interactive Mini Browser Preview */}
              <div className="hero__mini-browser">
                <div className="hero__browser-header">
                  <div className="hero__browser-dots">
                    <span className="hero__browser-dot hero__browser-dot--red" />
                    <span className="hero__browser-dot hero__browser-dot--yellow" />
                    <span className="hero__browser-dot hero__browser-dot--green" />
                  </div>
                  <div className="hero__browser-url">
                    <span className="hero__browser-lock"></span>
                    <span>takecare.nithin.site</span>
                  </div>
                  <a
                    href="https://takecare.nithin.site"
                    target="_blank"
                    rel="noreferrer"
                    className="hero__browser-external"
                    title="Open live site in new tab"
                  >
                    <ExternalLink size={10} />
                  </a>
                </div>

                <div className="hero__browser-viewport">
                  <iframe
                    src="https://takecare.nithin.site"
                    title="TakeCare Live App Preview"
                    className="hero__browser-iframe"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="hero__featured-footer">
                <div className="hero__featured-name">TakeCare</div>
                <a
                  className="hero__featured-btn"
                  href="https://takecare.nithin.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>View Live Project</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="hero__location">
              <span className="hero__location-dot" />
              <span>{DEVELOPER.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
