import React from 'react';

/**
 * Traditional Kannada Wedding Motifs
 * Subtle, high-luxury motifs incorporating Lord Krishna's flute,
 * peacock feather, temple arches, sacred kalasha, and lotus blossoms.
 */

// 1. Lord Krishna Divine Flute & Peacock Feather Motif
export const KrishnaFluteMotif = ({ className = "w-28 h-14" }) => (
  <div className={`inline-flex items-center justify-center select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
      {/* Peacock Feather Plume */}
      <g opacity="0.9">
        <path
          d="M80 50 C 95 30, 115 15, 135 18 C 145 20, 140 38, 120 46 C 100 52, 85 50, 80 50 Z"
          fill="#CCAFA1"
          opacity="0.45"
        />
        {/* Feather Eyespot (Outer Terracotta) */}
        <ellipse cx="126" cy="28" rx="14" ry="10" transform="rotate(-25 126 28)" fill="#986B58" opacity="0.8" />
        {/* Feather Eyespot (Gold ring) */}
        <ellipse cx="126" cy="28" rx="10" ry="7" transform="rotate(-25 126 28)" fill="#C5A059" opacity="0.85" />
        {/* Feather Eyespot (Center Deep Teal / Chocolate) */}
        <ellipse cx="126" cy="28" rx="6" ry="4" transform="rotate(-25 126 28)" fill="#3A534B" opacity="0.9" />
        {/* Feather Hairline Strands */}
        <path d="M110 38 Q 130 18 148 24" stroke="#E9DDD1" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M102 44 Q 120 25 138 36" stroke="#C5A58F" strokeWidth="0.8" strokeLinecap="round" />
      </g>

      {/* Golden Krishna Flute (Bansuri) */}
      <g>
        {/* Main Flute Body */}
        <rect x="25" y="46" width="105" height="7" rx="3.5" fill="#C5A059" stroke="#986B58" strokeWidth="0.8" />
        {/* Flute Hole Finger Marks */}
        <circle cx="50" cy="49.5" r="1.3" fill="#49362E" />
        <circle cx="62" cy="49.5" r="1.3" fill="#49362E" />
        <circle cx="74" cy="49.5" r="1.3" fill="#49362E" />
        <circle cx="86" cy="49.5" r="1.3" fill="#49362E" />
        <circle cx="98" cy="49.5" r="1.3" fill="#49362E" />
        <circle cx="110" cy="49.5" r="1.3" fill="#49362E" />
        {/* Flute Mouthpiece Hole */}
        <circle cx="35" cy="49.5" r="1.8" fill="#49362E" />

        {/* Flute Silk Tassel / Pearls Hanging */}
        <path d="M125 53 Q 128 65 133 72" stroke="#986B58" strokeWidth="1" strokeLinecap="round" />
        <circle cx="134" cy="74" r="2.5" fill="#986B58" />
        <circle cx="131" cy="65" r="1.5" fill="#C5A059" />
      </g>
    </svg>
  </div>
);

// 2. Sacred South Indian Temple Lotus (ಪದ್ಮ)
export const SacredLotusMotif = ({ className = "w-10 h-10", color = "#986B58" }) => (
  <div className={`inline-flex items-center justify-center select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Center Petal */}
      <path
        d="M50 20 C 45 40, 45 60, 50 78 C 55 60, 55 40, 50 20 Z"
        fill={color}
        opacity="0.85"
      />
      {/* Left Inner Petal */}
      <path
        d="M50 24 C 38 40, 32 58, 42 76 C 45 62, 47 42, 50 24 Z"
        fill="#C5A58F"
        opacity="0.9"
      />
      {/* Right Inner Petal */}
      <path
        d="M50 24 C 62 40, 68 58, 58 76 C 55 62, 53 42, 50 24 Z"
        fill="#C5A58F"
        opacity="0.9"
      />
      {/* Left Outer Wing Petal */}
      <path
        d="M48 38 C 24 50, 20 68, 32 78 C 38 68, 44 54, 48 38 Z"
        fill={color}
        opacity="0.65"
      />
      {/* Right Outer Wing Petal */}
      <path
        d="M52 38 C 76 50, 80 68, 68 78 C 62 68, 56 54, 52 38 Z"
        fill={color}
        opacity="0.65"
      />
      {/* Lotus Base Calyx */}
      <path
        d="M34 78 Q 50 85 66 78 Q 50 82 34 78 Z"
        fill="#C5A059"
      />
      <circle cx="50" cy="80" r="1.8" fill="#C5A059" />
    </svg>
  </div>
);

// 3. Mangala Kalasha (ಮಂಗಳ ಕಲಶ)
export const MangalaKalashaMotif = ({ className = "w-12 h-12" }) => (
  <div className={`inline-flex items-center justify-center select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Coconut Tip */}
      <path d="M50 22 C 45 32, 42 38, 50 45 C 58 38, 55 32, 50 22 Z" fill="#986B58" />
      {/* Mango Leaves */}
      <path d="M48 42 C 34 32, 28 36, 32 46 C 40 44, 44 43, 48 42 Z" fill="#795345" opacity="0.8" />
      <path d="M52 42 C 66 32, 72 36, 68 46 C 60 44, 56 43, 52 42 Z" fill="#795345" opacity="0.8" />
      {/* Kalasha Pot Body */}
      <path
        d="M40 46 L60 46 L68 56 C 72 68, 68 80, 50 82 C 32 80, 28 68, 32 56 L40 46 Z"
        fill="#E9DDD1"
        stroke="#986B58"
        strokeWidth="1.2"
      />
      {/* Pot Sacred Swastika / Thread */}
      <circle cx="50" cy="65" r="4" fill="#C5A059" />
      <line x1="38" y1="52" x2="62" y2="52" stroke="#986B58" strokeWidth="1" />
      <line x1="33" y1="65" x2="67" y2="65" stroke="#C5A58F" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Base */}
      <rect x="42" y="82" width="16" height="4" rx="2" fill="#986B58" />
    </svg>
  </div>
);

// 4. Traditional Temple Kolam Border Hairline
export const TraditionalBorderHairline = ({ className = "" }) => (
  <div className={`flex items-center justify-center my-4 ${className}`}>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A58F] to-transparent w-20 sm:w-36 opacity-60"></div>
    <div className="mx-2 flex items-center space-x-1 opacity-80">
      <span className="w-1.5 h-1.5 rotate-45 border border-[#986B58] bg-[#E9DDD1]"></span>
      <SacredLotusMotif className="w-6 h-6" color="#986B58" />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#986B58] bg-[#E9DDD1]"></span>
    </div>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A58F] to-transparent w-20 sm:w-36 opacity-60"></div>
  </div>
);

