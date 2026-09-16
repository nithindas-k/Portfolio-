import React from 'react';

export const TechIcon = ({ name, size = 32 }) => {
  const s = size;

  switch (name) {
    case 'React':
      return (
        <svg width={s} height={s} viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'TypeScript':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path fill="#fff" d="M64 40.5H35.8v14.1h10.8V103h17.4V54.6H75V40.5H64zm25.9 26.2c0-2.3 1-4.3 2.9-6s4.5-2.6 7.8-2.6c3.4 0 6.1.9 8.2 2.6s3.1 3.9 3.1 6.5h16.2c0-6-2.5-10.9-7.5-14.7-5-3.8-11.7-5.7-20-5.7-8.3 0-15 1.9-20.1 5.7-5.1 3.8-7.7 8.9-7.7 15.3 0 5 1.5 9 4.6 12.1 3.1 3.1 8 5.6 14.8 7.5 4.3 1.2 7.2 2.4 8.7 3.6 1.5 1.2 2.3 2.6 2.3 4.2 0 1.9-.9 3.5-2.7 4.8-1.8 1.3-4.5 1.9-8.1 1.9-3.9 0-7-.8-9.3-2.4s-3.5-3.9-3.6-6.9H59.7c0 6.6 2.7 12 8.1 16.2 5.4 4.2 12.6 6.3 21.6 6.3 8.8 0 15.8-2 21-6 5.2-4 7.8-9.4 7.8-16.2 0-5.3-1.6-9.6-4.8-12.9-3.2-3.3-8.3-5.9-15.3-7.8-4.5-1.2-7.5-2.4-9-3.6-1.5-1.2-2.3-2.6-2.3-4.2z" />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path fill="#000" d="M34.7 93.3c2.4 3.9 5.8 6.4 10.3 6.4 5.3 0 8.6-2.6 8.6-8.9V47.5h17.8v43.4c0 14.6-8.6 21.1-23.7 21.1-12.8 0-20.2-6.5-24-15.4l11-3.3zm50.6-2.3c2.9 4.7 7 7.7 13.5 7.7 5.7 0 9.4-2.8 9.4-6.8 0-4.7-3.8-6.4-10.2-9.2l-3.5-1.5c-10.1-4.3-16.7-9.8-16.7-21.4 0-11.7 9.1-20.7 23.3-20.7 10.2 0 17.5 3.5 22.4 12.3l-11.3 7.2c-2.4-4.3-5.4-6.3-10.9-6.3-5.2 0-8.5 2.7-8.5 6.2 0 4.1 2.6 5.7 8.7 8.3l3.5 1.5c12 5.1 18.6 10.5 18.6 22.6 0 13-10.2 21.4-25.7 21.4-14.4 0-23.2-6.9-27.4-16.2l12.6-6.6z" />
        </svg>
      );

    case 'Node.js':
      return (
        <svg width={s} height={s} viewBox="0 0 256 289">
          <path fill="#339933" d="M128 0L8.5 69v151L128 289l119.5-69V69L128 0z" />
          <path fill="#fff" d="M136.6 68.6c-4.4-2.6-12.8-2.6-17.2 0L67.1 98.7c-4.4 2.6-6.9 8.2-6.9 13.3v64.6c0 5.1 2.5 10.7 6.9 13.3l52.3 30.1c4.4 2.6 12.8 2.6 17.2 0l52.3-30.1c4.4-2.6 6.9-8.2 6.9-13.3V112c0-5.1-2.5-10.7-6.9-13.3l-52.2-30.1z" />
          <path fill="#339933" d="M141.5 119.3c0-3.3-2.7-5.9-6-5.9-3.3 0-6 2.7-6 5.9v42.5c0 3.3 2.7 6 6 6 3.3 0 6-2.7 6-6v-42.5z" />
        </svg>
      );

    case 'Express.js':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#222" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="34" fontWeight="800" fontFamily="sans-serif">ex</text>
        </svg>
      );

    case 'MongoDB':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#47A248" d="M64.7 1.8c-.8.8-15.6 15.6-21.7 34.6-7.8 24.3-3.2 46.2 3.1 57.6 10.2 18.5 17.7 26.9 18.2 27.5.5-.5 8-8.9 18.2-27.5 6.3-11.4 10.9-33.3 3.1-57.6C79.5 17.4 65.5 2.6 64.7 1.8z" />
          <path fill="#499D4A" d="M64.3 121.5c-.3-.4-7.4-8.4-17-25.9-5.9-10.8-10.2-31.2-2.9-54 5.7-17.8 19.3-31.7 19.9-32.3v112.2z" />
          <path fill="#fff" d="M64.3 43.8c-.5.4-3.2 2.7-4.4 7.6-1.5 5.9-.6 11.2.6 14 2 4.7 4 7 4.1 7.1.1-.1 1.9-2.3 3.9-7 1.2-2.8 2.1-8.1.6-14-1.2-4.9-3.9-7.3-4.8-7.7v0z" />
        </svg>
      );

    case 'PostgreSQL':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#336791" />
          <path fill="#fff" d="M64 24c-19.9 0-36 16.1-36 36 0 12.6 6.5 23.6 16.4 30-1.2 3.8-3.4 9.1-8.4 14 0 0 9.8.7 19.6-8 2.7.6 5.5 1 8.4 1 19.9 0 36-16.1 36-36s-16.1-37-36-37zm-9 47c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm18 0c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" />
        </svg>
      );

    case 'Redis':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#DC382D" d="M122.9 59.4L68.5 32.7c-2.8-1.4-6.1-1.4-8.9 0L5.1 59.4C2 60.9.1 64.1.1 67.5s1.9 6.6 5 8.1l54.5 26.7c1.4.7 2.9 1 4.5 1s3.1-.3 4.5-1l54.5-26.7c3.1-1.5 5-4.7 5-8.1s-2-6.6-5.2-8.1z" />
          <path fill="#fff" d="M64 45.4l35.8 17.5L64 80.4 28.2 62.9 64 45.4z" />
        </svg>
      );

    case 'Firebase':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#FFA000" d="M21.2 96.6l23.5-44.5L30.9 25.4c-.9-1.7-3.3-1.9-4.5-.4L6.9 83.7l14.3 12.9z" />
          <path fill="#F57C00" d="M44.7 52.1L30.9 25.4c-.9-1.7-3.3-1.9-4.5-.4l-5.2 7.7 23.5 19.4z" />
          <path fill="#FFCA28" d="M72.2 41.5l14.8-28.5c.9-1.7 3.3-1.9 4.5-.4l30.4 71.1-49.7-42.2z" />
          <path fill="#FFA000" d="M121.9 83.7L91.5 12.6c-1.2-1.5-3.6-1.3-4.5.4L72.2 41.5l25.8 22 23.9 20.2z" />
          <path fill="#FFCA28" d="M6.9 83.7l54.5 30.6c1.6.9 3.6.9 5.2 0l55.3-30.6L72.2 41.5 6.9 83.7z" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#06B6D4" d="M64 32c-17.7 0-28.8 8.8-33.3 26.5 6.7-8.9 14.4-12.2 23.3-10 5.1 1.3 8.7 5 12.7 9.1 6.6 6.7 14.2 14.4 30.7 14.4 17.7 0 28.8-8.8 33.3-26.5-6.7 8.9-14.4 12.2-23.3 10-5.1-1.3-8.7-5-12.7-9.1-6.5-6.7-14.2-14.4-30.7-14.4zm-33.3 32c-17.7 0-28.8 8.8-33.3 26.5 6.7-8.9 14.4-12.2 23.3-10 5.1 1.3 8.7 5 12.7 9.1 6.6 6.7 14.2 14.4 30.7 14.4 17.7 0 28.8-8.8 33.3-26.5-6.7 8.9-14.4 12.2-23.3 10-5.1-1.3-8.7-5-12.7-9.1-6.6-6.7-14.2-14.4-30.7-14.4z" />
        </svg>
      );

    case 'Three.js':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#111" />
          <path fill="#fff" d="M64 24L28 86h72L64 24zm0 25l22 37H42l22-37z" />
        </svg>
      );

    case 'AWS':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#232F3E" />
          <path fill="#FF9900" d="M35 78c18 10 39 10 58 0 2-1 4 1 2 3-17 12-42 13-62 0-2-2 0-4 2-3zm53-6c2-4 9-2 11-1 2 1 1 3-1 4-3 3-7 4-10 4-2 0-2-4 0-7z" />
          <text x="50%" y="46%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800" fontFamily="sans-serif">AWS</text>
        </svg>
      );

    case 'Git':
    case 'Git & GitHub':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#F05032" d="M124.6 57.3L70.7 3.4c-4.5-4.5-11.9-4.5-16.4 0L40.9 16.8l20.8 20.8c4.8-1.6 10.4-.6 14.3 3.3 3.9 3.9 4.9 9.5 3.3 14.3l20 20c4.8-1.6 10.4-.6 14.3 3.3 5.4 5.4 5.4 14.2 0 19.6s-14.2 5.4-19.6 0c-4.1-4.1-5-10.1-2.9-15.1l-18.7-18.7v38.9c1.4 1.1 2.6 2.5 3.5 4.1 5.4 5.4 5.4 14.2 0 19.6s-14.2 5.4-19.6 0c-5.4-5.4-5.4-14.2 0-19.6 1.6-.9 3.3-1.6 5-1.9V50.8c-1.8-.3-3.5-1-5-1.9-4.1-4.1-5-10.1-2.9-15.1L32.4 13.5 3.4 42.5c-4.5 4.5-4.5 11.9 0 16.4l53.9 53.9c4.5 4.5 11.9 4.5 16.4 0l50.9-50.9c4.5-4.5 4.5-11.9 0-16.4v1.8z" />
        </svg>
      );

    case 'GitHub':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1v-10.8c-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3.6-4.1 2.2-7 4-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.1s10.9.7 16 2.1c12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.3 5.9 4.3 11.9v17.6c0 1.7 1.2 3.7 4.4 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z" />
        </svg>
      );

    case 'Groq AI':
    case 'Groq AI / LLM APIs':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#F55036" />
          <path fill="#fff" d="M42 42h44v44H42zM52 52h24v24H52z" />
          <path stroke="#fff" strokeWidth="6" strokeLinecap="round" d="M64 24v18M64 86v18M24 64h18M86 64h18" />
        </svg>
      );

    case 'Socket.io':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="60" fill="#010101" stroke="#fff" strokeWidth="4" />
          <path fill="#fff" d="M60 25l-20 45h18l-6 33 36-47H66z" />
        </svg>
      );

    case 'Vite':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="url(#vite-grad)" d="M117.8 19.3L67.1 118.8c-1.5 2.9-5.7 2.9-7.2 0L9.1 19.3c-1.7-3.3.9-7.2 4.6-6.8l50 5.4c.4 0 .9 0 1.3-.1l48.1-5.3c3.7-.4 6.4 3.5 4.7 6.8z" />
          <path fill="#FFD62E" d="M72.5 18.5L44.2 68.3h19.5l-10.7 34.6 30.8-49.2H64.9z" />
          <defs>
            <linearGradient id="vite-grad" x1="10%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'Redux Toolkit':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#764ABC" />
          <path fill="#fff" d="M42 48c0-8.8 7.2-16 16-16 6.3 0 11.8 3.7 14.4 9.1C75 35.7 80.5 32 86.8 32c8.8 0 16 7.2 16 16 0 5.5-2.8 10.3-7.1 13.2 4.3 2.9 7.1 7.7 7.1 13.2 0 8.8-7.2 16-16 16-6.3 0-11.8-3.7-14.4-9.1-2.6 5.4-8.1 9.1-14.4 9.1-8.8 0-16-7.2-16-16 0-5.5 2.8-10.3 7.1-13.2C44.8 58.3 42 53.5 42 48z" opacity="0.9" />
        </svg>
      );

    case 'Zustand':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#443E38" />
          <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fontSize="48">🐻</text>
        </svg>
      );

    case 'Framer Motion':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#0055FF" />
          <path fill="#fff" d="M34 24h60L64 54zm0 30l30 30-30 30zM64 54l30 30H64z" />
        </svg>
      );

    case 'GSAP':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#0AE448" />
          <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#000" fontSize="28" fontWeight="900" fontFamily="sans-serif">GSAP</text>
        </svg>
      );

    case 'Vercel':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#000" stroke="#333" strokeWidth="2" />
          <path fill="#fff" d="M64 30L98 88H30z" />
        </svg>
      );

    case 'Render':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#141414" />
          <path fill="#46E3B7" d="M34 94V34h30c16.6 0 30 13.4 30 30s-13.4 30-30 30H34zm20-20h10c5.5 0 10-4.5 10-10s-4.5-10-10-10H54v20z" />
        </svg>
      );

    case 'Cloudinary':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#3448C5" />
          <path fill="#fff" d="M64 42c-10 0-18.4 6.5-21.2 15.6C34.7 59.4 28 66.8 28 75.8c0 9.5 7.7 17.2 17.2 17.2h38.6c8.5 0 15.4-6.9 15.4-15.4 0-7.8-5.8-14.2-13.3-15.2C84.4 50 75.1 42 64 42z" />
        </svg>
      );

    case 'Razorpay':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#02042B" />
          <path fill="#3395FF" d="M38 28h28l-8 32h14l-26 40 8-28H38z" />
        </svg>
      );

    case 'Java':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#5382A1" />
          <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#EA2D2E" fontSize="38" fontWeight="900" fontFamily="serif">☕</text>
        </svg>
      );

    case 'C++':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#00599C" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="800" fontFamily="sans-serif">C++</text>
        </svg>
      );

    case 'C':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#A8B9CC" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#283593" fontSize="40" fontWeight="900" fontFamily="sans-serif">C</text>
        </svg>
      );

    case 'HTML5':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#E34F26" d="M19 11l9 101.5L64 124l36-11.5L109 11H19z" />
          <path fill="#EF652A" d="M64 114.8l28.6-9.1 7.5-84.7H64v93.8z" />
          <path fill="#fff" d="M64 36.4H43.1l1.5 17.2H64v-17.2zm0 33.6H46.1l1.6 18.5 16.3 4.5v-23z" />
          <path fill="#EBEBEB" d="M64 36.4v17.2h20.7l-1.9 21.9-18.8 5.1v17.7l30.9-8.6 4.3-53.3H64z" />
        </svg>
      );

    case 'CSS3':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128">
          <path fill="#1572B6" d="M19 11l9 101.5L64 124l36-11.5L109 11H19z" />
          <path fill="#33A9DC" d="M64 114.8l28.6-9.1 7.5-84.7H64v93.8z" />
          <path fill="#fff" d="M64 36.4H43.1l1.5 17.2H64v-17.2zm0 33.6H46.1l1.6 18.5 16.3 4.5v-23z" />
          <path fill="#EBEBEB" d="M64 36.4v17.2h20.7l-1.9 21.9-18.8 5.1v17.7l30.9-8.6 4.3-53.3H64z" />
        </svg>
      );

    default:
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
};

export default TechIcon;
