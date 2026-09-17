// ─────────────────────────────────────────────
// WorkTransition.jsx — Cinematic Camera Zoom & Silhouette Portal
// Home → Zoom to Man → Real Work Page inside Silhouette → Work
// ─────────────────────────────────────────────

import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import characterImg from '../../assets/myimage.png';
import WorkPage from '../../pages/WorkPage.jsx';
import './WorkTransition.css';

const WorkTransition = ({ onComplete }) => {
  const containerRef = useRef(null);
  const dimmerRef = useRef(null);
  const cameraRef = useRef(null);
  const portalFrameRef = useRef(null);
  const portalMaskRef = useRef(null);
  const portalGlowRef = useRef(null);
  const portalContentRef = useRef(null);
  const finalViewRef = useRef(null);

  // Compute live character rect & chest focus point with integer precision to prevent subpixel jitter
  const [geo] = useState(() => {
    const el = document.querySelector('.character-image__img');
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 900;

    let rect;
    if (el) {
      const r = el.getBoundingClientRect();
      rect = {
        left: Math.round(r.left),
        top: Math.round(r.top),
        width: Math.round(r.width),
        height: Math.round(r.height),
      };
    } else {
      const fallbackW = Math.min(460, vw * 0.85);
      const fallbackH = Math.min(650, vh * 0.75);
      rect = {
        left: Math.round((vw - fallbackW) / 2),
        top: Math.round(Math.max(80, vh - fallbackH - 60)),
        width: Math.round(fallbackW),
        height: Math.round(fallbackH),
      };
    }

    // Upper torso / chest coordinates (center X, ~42% down the character)
    const chestX = Math.round(rect.left + rect.width * 0.5);
    const chestY = Math.round(rect.top + rect.height * 0.42);

    return { rect, chestX, chestY, vw, vh };
  });

  const { rect, chestX, chestY, vw, vh } = geo;
  // Calculate target scale so the chest opening expands completely past the viewport edges
  const chestOpeningWidth = Math.max(70, rect.width * 0.22);
  const targetScale = Math.max(26, Math.ceil((vw / chestOpeningWidth) * 1.5));

  useLayoutEffect(() => {
    const heroEl = document.querySelector('.hero');
    const heroRect = heroEl ? heroEl.getBoundingClientRect() : { left: 0, top: 0 };
    const heroOriginX = chestX - heroRect.left;
    const heroOriginY = chestY - heroRect.top;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (heroEl) {
            gsap.set(heroEl, { clearProps: 'transform,transformOrigin,filter,x,y' });
          }
          if (onComplete) onComplete();
        },
      });

      // 1. Camera Zoom to Man: scale hero into the man's chest
      if (heroEl) {
        gsap.set(heroEl, {
          transformOrigin: `${heroOriginX}px ${heroOriginY}px`,
          willChange: 'transform, filter',
        });

        tl.to(
          heroEl,
          {
            scale: targetScale,
            duration: 2.3,
            ease: 'power2.inOut',
          },
          0
        );

        // Soft, progressive motion blur on Home page as camera accelerates into the character
        tl.fromTo(
          heroEl,
          { filter: 'blur(0px)' },
          {
            filter: 'blur(5px)',
            duration: 0.75,
            ease: 'sine.in',
          },
          0.02
        );

        // Ultra-smooth low-amplitude micro-shake strictly on the Home page (finishes in 0.22s before Work page appears)
        const shakeTl = gsap.timeline();
        shakeTl
          .to(heroEl, { x: 1.2, y: -0.8, duration: 0.05, ease: 'sine.inOut' })
          .to(heroEl, { x: -1.2, y: 0.9, duration: 0.05, ease: 'sine.inOut' })
          .to(heroEl, { x: 0.7, y: -0.5, duration: 0.06, ease: 'sine.inOut' })
          .to(heroEl, { x: 0, y: 0, duration: 0.06, ease: 'sine.out' });
        tl.add(shakeTl, 0.01);
      }

      // 2. Portal Camera Rig scales into the man while locking Work page to STRICT 1.0x scale
      // ZERO shake, ZERO blur on the Work page — completely rock-steady and crisp
      if (portalContentRef.current) {
        gsap.set(portalContentRef.current, {
          transformOrigin: `${chestX}px ${chestY}px`,
          willChange: 'transform',
        });
      }

      const cameraTracker = { scale: 1 };
      tl.to(
        cameraTracker,
        {
          scale: targetScale,
          duration: 2.3,
          ease: 'power2.inOut',
          onUpdate: () => {
            const s = cameraTracker.scale;
            if (cameraRef.current) {
              gsap.set(cameraRef.current, { scale: s });
            }
            // Strict mathematical inverse: s * (1/s) = 1.00000x at every frame (ZERO zoom on Work page)
            if (portalContentRef.current) {
              gsap.set(portalContentRef.current, { scale: 1 / s });
            }
          },
        },
        0
      );

      // 3. Vignette darkens perimeter smoothly
      tl.to(
        dimmerRef.current,
        {
          opacity: 0.45,
          duration: 0.8,
          ease: 'sine.out',
        },
        0
      );
      tl.to(
        dimmerRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: 'sine.inOut',
        },
        1.7
      );

      // 4. Portal illumination: silhouette smoothly reveals the Work page inside
      tl.fromTo(
        portalMaskRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'sine.inOut',
        },
        0.1
      );

      // Luminous sage aura breathing pulse
      tl.fromTo(
        portalGlowRef.current,
        { opacity: 0 },
        {
          opacity: 0.75,
          duration: 0.55,
          ease: 'sine.out',
        },
        0.1
      );
      tl.to(
        portalGlowRef.current,
        {
          opacity: 0,
          duration: 0.75,
          ease: 'sine.inOut',
        },
        0.8
      );

      // Soften drop shadow at the end as silhouette completely exits viewport
      tl.to(
        portalFrameRef.current,
        {
          filter: 'drop-shadow(0 0 0px transparent)',
          duration: 0.55,
          ease: 'sine.out',
        },
        1.7
      );

      // 5. Seamless handoff: as silhouette edges clear the screen,
      // fade in the static full-bleed WorkPage layer so the handoff to /work is 100% identical with ZERO jump
      if (finalViewRef.current) {
        tl.fromTo(
          finalViewRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.45,
            ease: 'sine.inOut',
          },
          1.85
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      if (heroEl) {
        gsap.set(heroEl, { clearProps: 'transform,transformOrigin,filter,x,y' });
      }
    };
  }, [chestX, chestY, targetScale, onComplete]);

  return (
    <div className="work-trans" ref={containerRef} aria-hidden="true">
      {/* 1. Cinematic Vignette */}
      <div className="work-trans__dimmer" ref={dimmerRef} />

      {/* 2. Camera Rig with zoom origin locked to the chest */}
      <div
        className="work-trans__camera"
        ref={cameraRef}
        style={{
          transformOrigin: `${chestX}px ${chestY}px`,
        }}
      >
        {/* Glowing silhouette portal frame */}
        <div
          className="work-trans__portal-frame"
          ref={portalFrameRef}
          style={{
            left: `${rect.left}px`,
            top: `${rect.top}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
          }}
        >
          {/* Character Silhouette Mask */}
          <div
            className="work-trans__portal-mask"
            ref={portalMaskRef}
            style={{
              WebkitMaskImage: `url("${characterImg}")`,
              maskImage: `url("${characterImg}")`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'bottom center',
              maskPosition: 'bottom center',
            }}
          >
            {/* Subtle sage portal ambient backdrop */}
            <div className="work-trans__portal-bg" />

            {/* Glowing sage aura */}
            <div className="work-trans__portal-glow" ref={portalGlowRef} />

            {/* The REAL Work page mapped inside the silhouette */}
            <div
              className="work-trans__portal-content"
              ref={portalContentRef}
              style={{
                left: `${-rect.left}px`,
                top: `${-rect.top}px`,
                width: `${vw}px`,
                height: `${vh}px`,
              }}
            >
              <WorkPage />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Full-bleed Work Page for 100% pixel-perfect seamless handoff */}
      <div className="work-trans__final-view" ref={finalViewRef}>
        <WorkPage />
      </div>
    </div>
  );
};

export default WorkTransition;
