// ─────────────────────────────────────────────
// Navbar
// Editorial navigation with brand, links, CTA
// ─────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../../constants/navigation.js';
import { useRouter, scrollToHash } from '../../router/Router.jsx';
import Button from '../ui/Button.jsx';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { path, navigate, isCinematicTransition } = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smart nav click:
  //   '/'  links  → navigate(href) — triggers curtain if different page
  //   '#'  links  → scrollToHash if already on '/', else navigate('/', { scrollTarget: href })
  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      if (path === '/') {
        scrollToHash(href);
      } else {
        navigate('/', { scrollTarget: href });
      }
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${
        isCinematicTransition ? 'navbar--hidden' : ''
      }`}
    >
      <div className="navbar__inner">
        {/* Brand */}
        <a
          href="/"
          className="navbar__brand"
          onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
        >
          <span className="navbar__brand-dot" />
          {BRAND.name}
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
          </Button>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <Button variant="primary" size="md" onClick={() => handleNavClick('#contact')}>
          Hire Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
