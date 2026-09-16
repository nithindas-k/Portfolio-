// ─────────────────────────────────────────────
// StatsSection.jsx
// Lightweight, modern Code Activity showcase: GitHub & LeetCode
// ─────────────────────────────────────────────

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './StatsSection.css';

const GitHubLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

const LeetCodeLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.728-1.797.728s-1.332-.232-1.816-.71l-5.255-5.207a2.536 2.536 0 0 1 0-3.606l5.234-5.207c.484-.469 1.13-.71 1.816-.71.686 0 1.331.242 1.816.71l2.677 2.589a1.075 1.075 0 0 1-.02 1.528 1.075 1.075 0 0 1-1.528-.02l-2.656-2.589a.406.406 0 0 0-.585 0L6.032 13.05a.406.406 0 0 0 0 .585l5.255 5.207c.16.16.425.16.585 0l2.697-2.607a1.075 1.075 0 0 1 1.528.02 1.075 1.075 0 0 1 .005 1.525z"
      fill="#D1D5DB"
    />
    <path
      d="M10.802 13.918l8.672-.008a1.075 1.075 0 0 0 0-2.15l-8.672.008a1.075 1.075 0 0 0 0 2.15z"
      fill="#FFA116"
    />
  </svg>
);

const StatsSection = () => {
  return (
    <section id="activity" className="stats-section section">
      <div className="section__inner">
        {/* Section Header */}
        <div className="section__header">
          <div className="section__eyebrow">
            <span className="section__eyebrow-line" />
            <span>STATS</span>
          </div>
          <h2 className="section__title">
            Code <span className="text-sage">Activity</span>
          </h2>
          <p className="section__sub">
            A snapshot of my coding activity across GitHub and LeetCode.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="stats-grid">
          {/* CARD 1 — GitHub */}
          <div className="stats-card">
            {/* Header */}
            <div className="stats-card__header">
              <div className="stats-card__identity">
                <div className="stats-card__icon stats-card__icon--github">
                  <GitHubLogo size={19} />
                </div>
                <div>
                  <h3 className="stats-card__title">GitHub</h3>
                  <span className="stats-card__handle">@nithindas-k</span>
                </div>
              </div>
              <a
                href="https://github.com/nithindas-k"
                target="_blank"
                rel="noopener noreferrer"
                className="stats-card__btn"
              >
                <span>View Profile →</span>
              </a>
            </div>

            {/* Clean Stats Row (no bulky boxes) */}
            <div className="stats-card__metrics">
              <div className="stats-card__metric">
                <span className="stats-card__metric-val">39</span>
                <span className="stats-card__metric-lbl">Public Repos</span>
              </div>
              <div className="stats-card__metric">
                <span className="stats-card__metric-val">14</span>
                <span className="stats-card__metric-lbl">Followers</span>
              </div>
              <div className="stats-card__metric">
                <span className="stats-card__metric-val">19</span>
                <span className="stats-card__metric-lbl">Following</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="stats-card__row">
              <span className="stats-card__row-label">Badges</span>
              <div className="stats-card__pills">
                <span className="stats-pill">Pull Shark</span>
                <span className="stats-pill">Quickdraw</span>
                <span className="stats-pill">YOLO</span>
              </div>
            </div>
          </div>

          {/* CARD 2 — LeetCode */}
          <div className="stats-card">
            {/* Header */}
            <div className="stats-card__header">
              <div className="stats-card__identity">
                <div className="stats-card__icon stats-card__icon--leetcode">
                  <LeetCodeLogo size={19} />
                </div>
                <div>
                  <h3 className="stats-card__title">LeetCode</h3>
                  <span className="stats-card__handle">@mzjW7AhAg4</span>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/mzjW7AhAg4/"
                target="_blank"
                rel="noopener noreferrer"
                className="stats-card__btn"
              >
                <span>View Profile →</span>
              </a>
            </div>

            {/* Clean Stats Row */}
            <div className="stats-card__metrics">
              <div className="stats-card__metric">
                <span className="stats-card__metric-val">227</span>
                <span className="stats-card__metric-lbl">Problems Solved</span>
              </div>
              <div className="stats-card__metric">
                <span className="stats-card__metric-val stats-card__metric-val--lang">JavaScript</span>
                <span className="stats-card__metric-lbl">Language</span>
              </div>
              <div className="stats-card__metric">
                <span className="stats-card__metric-val">731,970</span>
                <span className="stats-card__metric-lbl">Global Rank</span>
              </div>
            </div>

            {/* Strongest Topics & Badges */}
            <div className="stats-card__rows">
              <div className="stats-card__row">
                <span className="stats-card__row-label">Topics</span>
                <div className="stats-card__pills">
                  <span className="stats-pill">Array x147</span>
                  <span className="stats-pill">Hash Table x53</span>
                  <span className="stats-pill">DP x21</span>
                </div>
              </div>
              <div className="stats-card__row">
                <span className="stats-card__row-label">Badges</span>
                <div className="stats-card__pills">
                  <span className="stats-pill">100 Days Badge</span>
                  <span className="stats-pill">50 Days Badge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
