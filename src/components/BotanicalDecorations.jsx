import React from 'react';

/**
 * Botanical Corner Ornament
 * Delicate dried flowers, pampas grass, dried palm spear, and eucalyptus
 * in Terracotta (#986B58), Dusty Brown (#795345), and Muted Champagne (#C5A58F).
 */
export const DriedFloralCorner = ({ position = 'top-left', className = '' }) => {
  const getTransforms = () => {
    switch (position) {
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-x-[-1] scale-y-[-1]';
      default:
        return '';
    }
  };

  return (
    <div
      className={`pointer-events-none select-none transition-opacity duration-700 ${getTransforms()} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <g opacity="0.88">
          {/* Dried Palm Spear Leaf 1 */}
          <path
            d="M10 10 C 60 40, 110 80, 130 160 C 105 130, 70 85, 10 10 Z"
            fill="#C5A58F"
            opacity="0.65"
          />
          <path
            d="M10 10 C 80 50, 140 100, 170 180 C 135 140, 85 90, 10 10 Z"
            fill="#986B58"
            opacity="0.75"
          />
          <path
            d="M10 10 C 100 60, 160 120, 185 200 C 150 150, 95 100, 10 10 Z"
            fill="#795345"
            opacity="0.85"
          />

          {/* Palm leaf ridges */}
          <line x1="10" y1="10" x2="185" y2="200" stroke="#E9DDD1" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          <line x1="35" y1="35" x2="65" y2="45" stroke="#E9DDD1" strokeWidth="0.8" opacity="0.5" />
          <line x1="60" y1="60" x2="100" y2="75" stroke="#E9DDD1" strokeWidth="0.8" opacity="0.5" />
          <line x1="90" y1="90" x2="135" y2="110" stroke="#E9DDD1" strokeWidth="0.8" opacity="0.5" />
          <line x1="120" y1="120" x2="165" y2="145" stroke="#E9DDD1" strokeWidth="0.8" opacity="0.5" />

          {/* Pampas Grass Plume Left */}
          <g opacity="0.8">
            <path
              d="M12 12 Q 90 20 155 45 Q 110 25 12 12"
              fill="#E9DDD1"
            />
            {/* Soft feathery strands */}
            <path d="M50 20 Q 75 10 95 18" stroke="#DAC9B8" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M70 23 Q 100 12 120 25" stroke="#E9DDD1" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M90 28 Q 125 18 145 32" stroke="#DAC9B8" strokeWidth="1" strokeLinecap="round" />
            <path d="M110 33 Q 140 25 160 42" stroke="#F7F2EC" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Pampas Grass Plume Right */}
          <g opacity="0.85">
            <path
              d="M12 12 Q 30 85 45 165 Q 25 110 12 12"
              fill="#E9DDD1"
            />
            {/* Feathery strands */}
            <path d="M22 50 Q 12 75 20 95" stroke="#DAC9B8" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M25 75 Q 14 105 26 125" stroke="#E9DDD1" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M30 100 Q 20 130 34 150" stroke="#DAC9B8" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Dried Lunaria Seed Pods (Translucent silver-beige petals) */}
          <ellipse cx="115" cy="75" rx="14" ry="9" transform="rotate(-35 115 75)" fill="#F7F2EC" stroke="#C5A58F" strokeWidth="0.8" opacity="0.85" />
          <line x1="105" y1="70" x2="125" y2="80" stroke="#C5A58F" strokeWidth="0.6" opacity="0.6" />
          
          <ellipse cx="145" cy="115" rx="16" ry="10" transform="rotate(-15 145 115)" fill="#F7F2EC" stroke="#C5A58F" strokeWidth="0.8" opacity="0.85" />
          <line x1="133" y1="112" x2="157" y2="118" stroke="#C5A58F" strokeWidth="0.6" opacity="0.6" />

          <ellipse cx="80" cy="130" rx="12" ry="8" transform="rotate(-55 80 130)" fill="#F7F2EC" stroke="#C5A58F" strokeWidth="0.8" opacity="0.85" />

          {/* Baby's Breath / Delicate Dried Berries */}
          <circle cx="95" cy="45" r="2.5" fill="#C5A059" />
          <circle cx="120" cy="55" r="2" fill="#E9DDD1" />
          <circle cx="135" cy="90" r="2.5" fill="#986B58" />
          <circle cx="65" cy="110" r="2" fill="#C5A059" />
          <circle cx="75" cy="155" r="2.5" fill="#795345" />

          {/* Corner Framing Border Hairline */}
          <path
            d="M 5 65 L 5 5 L 65 5"
            stroke="#C5A58F"
            strokeWidth="1"
            strokeLinecap="square"
            opacity="0.7"
          />
          <path
            d="M 12 55 L 12 12 L 55 12"
            stroke="#986B58"
            strokeWidth="0.6"
            strokeLinecap="square"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * Botanical Divider Line
 * Thin champagne-gold decorative hairline with center pampas plume & diamond.
 */
export const BotanicalDivider = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center my-6 text-champagne-400 ${className}`}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A58F] to-transparent w-24 sm:w-36 md:w-48 opacity-60"></div>
      <div className="mx-3 flex items-center space-x-1.5 opacity-80">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#986B58] bg-[#E9DDD1]/60"></span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[#986B58]">
          <path
            d="M2 6 Q 7 2 12 6 Q 17 10 22 6"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="12" cy="6" r="2" fill="#C5A059" />
        </svg>
        <span className="w-1.5 h-1.5 rotate-45 border border-[#986B58] bg-[#E9DDD1]/60"></span>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A58F] to-transparent w-24 sm:w-36 md:w-48 opacity-60"></div>
    </div>
  );
};

/**
 * Wax Seal Monogram Badge
 */
export const WaxSeal = ({ text = "S & K", size = "md", onClick, className = "" }) => {
  const sizeClasses = {
    sm: "w-12 h-12 text-xs",
    md: "w-16 h-16 text-sm",
    lg: "w-20 h-20 text-base",
    xl: "w-24 h-24 text-lg",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={`wax-seal rounded-full flex flex-col items-center justify-center text-white/95 font-serif cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none ${sizeClasses[size] || sizeClasses.md} ${className}`}
      title="Royal Wax Seal"
    >
      <div className="w-[82%] h-[82%] rounded-full border border-amber-200/40 flex flex-col items-center justify-center relative">
        <span className="font-serif italic font-semibold tracking-wider gold-text-shimmer" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>
          {text}
        </span>
        <span className="text-[8px] opacity-75 font-sans tracking-widest mt-0.5 uppercase">
          ✦
        </span>
      </div>
    </button>
  );
};

/**
 * Floating Dried Petals / Floral Specks Effect
 */
export const FloatingPetals = () => {
  // 12 subtle, gently drifting petals
  const petals = [
    { left: '8%', delay: '0s', duration: '14s', size: 10, rot: 15, bg: '#CCAFA1' },
    { left: '22%', delay: '3s', duration: '18s', size: 14, rot: 45, bg: '#E6D3C9' },
    { left: '38%', delay: '7s', duration: '16s', size: 8, rot: -20, bg: '#B38C7A' },
    { left: '55%', delay: '1s', duration: '15s', size: 12, rot: 60, bg: '#DAC9B8' },
    { left: '72%', delay: '5s', duration: '20s', size: 9, rot: -40, bg: '#CCAFA1' },
    { left: '88%', delay: '2s', duration: '17s', size: 13, rot: 30, bg: '#E6D3C9' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20" aria-hidden="true">
      <style>{`
        @keyframes floatPetal {
          0% {
            transform: translateY(-5vh) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 0.55;
          }
          85% {
            opacity: 0.55;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(40px);
            opacity: 0;
          }
        }
      `}</style>
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size * 1.5}px`,
            backgroundColor: p.bg,
            borderRadius: '50% 10% 50% 50%',
            transform: `rotate(${p.rot}deg)`,
            filter: 'blur(0.5px)',
            opacity: 0,
            animation: `floatPetal ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

