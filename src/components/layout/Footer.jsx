// ─────────────────────────────────────────────
// Footer
// Editorial closing with socials, nav, status
// ─────────────────────────────────────────────

import React from 'react';
import { Code2, Link, AtSign, Share2 } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, BRAND } from '../../constants/navigation.js';
import { DEVELOPER } from '../../constants/portfolioData.js';
import './Footer.css';

const ICON_MAP = { Code2, Link, AtSign, Share2 };

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-name">
              <span className="footer__brand-dot" />
              {BRAND.name}
            </div>
            <p className="footer__brand-desc">{DEVELOPER.shortBio}</p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map((s) => {
                const Icon = ICON_MAP[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social"
                    aria-label={s.label}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav links */}
          <div className="footer__nav">
            <span className="footer__nav-title">Navigation</span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    window.lenis.scrollTo(link.href, { offset: -10, duration: 1.2 });
                  } else {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="footer__status">
            <span className="footer__nav-title">Status</span>
            <div className="footer__status-badge">
              <span className="footer__status-dot" />
              Available for work
            </div>
            <a href={`mailto:${DEVELOPER.email}`} className="footer__email">
              {DEVELOPER.email}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {year} {BRAND.name}. All rights reserved.</span>
          <span className="footer__built">Built with React & Three.js</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
