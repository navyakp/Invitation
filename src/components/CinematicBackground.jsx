import React, { useState, useEffect } from 'react';

/**
 * Global Cinematic Ken Burns Background
 * Persists throughout the whole website with slow, elegant movement,
 * soft warm champagne/beige & terracotta color grading, and golden stardust particles.
 */
export const CinematicBackground = ({
  imageSrc = "/images/couple-hero.jpg",
  altText = "Sinchana & Vinay",
  isFixed = true,
  overlayIntensity = "light",
  enableParallax = true,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enableParallax) return;

    const handleMouseMove = (e) => {
      // Gentle parallax damping (+/- 10px)
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableParallax]);

  const positionClass = isFixed ? 'fixed inset-0 z-0' : 'absolute inset-0';

  return (
    <div className={`${positionClass} overflow-hidden pointer-events-none select-none`} aria-hidden="true">
      <style>{`
        @keyframes kenBurnsSlow {
          0% {
            transform: scale(1.02) translate(0%, 0%);
          }
          50% {
            transform: scale(1.08) translate(-1%, -1.2%);
          }
          100% {
            transform: scale(1.03) translate(0.8%, -0.6%);
          }
        }

        @keyframes goldParticleDrift {
          0% {
            transform: translateY(105vh) translateX(0px) scale(0.6);
            opacity: 0;
          }
          20% {
            opacity: 0.85;
          }
          80% {
            opacity: 0.85;
          }
          100% {
            transform: translateY(-5vh) translateX(35px) scale(1.15);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ken-burns-anim {
            animation: none !important;
            transform: scale(1.03) !important;
          }
          .particle-drift {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>

      {/* 1. Base Couple Photograph with Ken Burns & Parallax */}
      <div
        className="absolute -inset-6 sm:-inset-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="ken-burns-anim w-full h-full object-cover filter contrast-[1.04] saturate-[1.08] brightness-[1.02]"
          style={{
            objectPosition: 'center 20%', // Keeps Sinchana and Vinay's faces in prime visual focal area
            animation: 'kenBurnsSlow 28s ease-in-out infinite alternate',
          }}
          loading="eager"
        />
      </div>

      {/* 2. Soft Warm Champagne & Terracotta Color Grade Layer */}
      <div
        className="absolute inset-0 mix-blend-color opacity-25"
        style={{
          background: 'linear-gradient(135deg, #E9DDD1 0%, #C5A58F 45%, #986B58 100%)',
        }}
      />

      {/* 3. Subtle Warm Radial Vignette Centered on the Couple */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 25%, rgba(255, 255, 255, 0.05) 0%, rgba(73, 54, 46, 0.15) 50%, rgba(35, 24, 18, 0.55) 100%)',
        }}
      />

      {/* 4. Text Readability Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          overlayIntensity === 'light'
            ? 'bg-gradient-to-t from-[#2D1F18]/65 via-[#2D1F18]/15 to-[#2D1F18]/25'
            : overlayIntensity === 'deep'
            ? 'bg-gradient-to-t from-[#2D1F18]/85 via-[#2D1F18]/30 to-[#2D1F18]/45'
            : 'bg-gradient-to-t from-[#2D1F18]/70 via-[#49362E]/20 to-[#2D1F18]/30'
        }`}
      />

      {/* 5. Golden Stardust Micro-particles Floating Across Entire Page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[
          { left: '8%', delay: '0s', duration: '18s', size: 3 },
          { left: '22%', delay: '4s', duration: '22s', size: 2.5 },
          { left: '38%', delay: '8s', duration: '19s', size: 3.5 },
          { left: '54%', delay: '2s', duration: '24s', size: 2 },
          { left: '68%', delay: '6s', duration: '17s', size: 3 },
          { left: '82%', delay: '1s', duration: '21s', size: 2.5 },
          { left: '92%', delay: '11s', duration: '20s', size: 3 },
          { left: '30%', delay: '14s', duration: '16s', size: 2 },
          { left: '76%', delay: '9s', duration: '23s', size: 3.5 },
        ].map((particle, i) => (
          <div
            key={i}
            className="particle-drift absolute rounded-full bg-[#E5C16C]"
            style={{
              left: particle.left,
              bottom: '-20px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: '0 0 8px 2px rgba(229, 193, 108, 0.75)',
              animation: `goldParticleDrift ${particle.duration} linear infinite`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CinematicBackground;
