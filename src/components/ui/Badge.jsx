// ─────────────────────────────────────────────
// Badge Component
// Pill badge with optional dot indicator
// ─────────────────────────────────────────────

import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'default', dot = false, className = '' }) => {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()}>
      {dot && <span className="badge__dot" />}
      {children}
    </span>
  );
};

export default Badge;
