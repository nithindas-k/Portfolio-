// ─────────────────────────────────────────────
// CharacterImage — Editorial Hero Portrait
// Replicating the exact Nexora editorial layout:
// - Solid transparent cutout character
// - Organic background blob shapes (sage theme)
// - Orbital wire doodle behind head
// - Head rising tall between split headlines
// ─────────────────────────────────────────────

import React from 'react';
import characterImg from '../../assets/myimage.png';
import './CharacterImage.css';

const CharacterImage = () => {
  return (
    <div className="character-image">
      {/* ── Background Editorial Accents (Matching Nexora Theme) ── */}
      {/* 1. Wire doodle behind head (matching Nexora reference) */}
      <svg className="character-image__doodle" viewBox="0 0 280 160" fill="none">
        <path
          d="M 25 80 C 15 40, 70 15, 140 18 C 215 22, 265 55, 260 90 C 255 125, 195 148, 130 145 C 65 142, 25 115, 20 80 C 15 45, 60 25, 135 25 C 210 25, 260 65, 250 100"
          stroke="rgba(163, 177, 138, 0.45)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {/* 2. Organic background blobs inside card (sage/forest theme) */}
      <div className="character-image__blob character-image__blob--1" />
      <div className="character-image__blob character-image__blob--2" />
      <div className="character-image__blob character-image__blob--3" />

      {/* ── 100% Solid Character Cutout ── */}
      <img
        src={characterImg}
        alt="Nithin Das — Software Developer"
        className="character-image__img"
        loading="eager"
        draggable={false}
      />
    </div>
  );
};

export default CharacterImage;
