// ─────────────────────────────────────────────
// FloatingBadges
// Editorial floating card badges around the hero
// ─────────────────────────────────────────────

import React from 'react';
import { Zap, Code2, Star, Users } from 'lucide-react';
import './FloatingBadges.css';

const FloatingBadges = () => {
  return (
    <>
      {/* Top-left: Available badge */}
      <div className="floating-badge floating-badge--tl">
        <span className="floating-badge__dot" />
        <span>Available for Work</span>
      </div>

      {/* Top-right: Stack badge */}
      <div className="floating-badge floating-badge--tr">
        <Zap size={14} className="floating-badge__icon" />
        <span>React · Three.js · Node</span>
      </div>

      {/* Bottom-left: Projects stat */}
      <div className="floating-badge floating-badge--bl">
        <Code2 size={14} className="floating-badge__icon" />
        <div>
          <div className="floating-badge__value">20+</div>
          <div className="floating-badge__label">Projects Shipped</div>
        </div>
      </div>

      {/* Bottom-right: Experience stat */}
      <div className="floating-badge floating-badge--br">
        <Star size={14} className="floating-badge__icon floating-badge__icon--sage" />
        <div>
          <div className="floating-badge__value">3+</div>
          <div className="floating-badge__label">Years Experience</div>
        </div>
      </div>

      {/* Mid-right: Clients */}
      <div className="floating-badge floating-badge--mr">
        <Users size={13} className="floating-badge__icon" />
        <div>
          <div className="floating-badge__value">10+</div>
          <div className="floating-badge__label">Happy Clients</div>
        </div>
      </div>
    </>
  );
};

export default FloatingBadges;
