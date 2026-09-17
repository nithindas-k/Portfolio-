// ─────────────────────────────────────────────
// PageTransition.jsx — Blur transition
// Renders only:
//   1. A soft semi-transparent tint overlay
//   2. A compact center mark (brand + destination)
// The actual blur/scale lives on .page-content in App.jsx.
// ─────────────────────────────────────────────

import React from 'react';
import { useRouter } from '../../router/Router.jsx';
import './PageTransition.css';

function routeLabel(path) {
  if (!path || path === '/') return 'Home';
  return path.replace(/^\//, '').replace(/-/g, ' ').toUpperCase();
}

const PageTransition = () => {
  const { phase, toPath } = useRouter();

  const isCovering  = phase === 'covering';
  const isRevealing = phase === 'revealing';
  const isActive    = isCovering || isRevealing;

  const cls = [
    'pt',
    isCovering  ? 'pt--covering'  : '',
    isRevealing ? 'pt--revealing' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} aria-hidden="true" inert={!isActive ? '' : undefined}>
      <div className="pt__mark">
        <div className="pt__mark-dest">
          {routeLabel(toPath).split('').map((char, i) => (
            <span
              key={i}
              className="pt__mark-char"
              style={{ '--char-index': i }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
