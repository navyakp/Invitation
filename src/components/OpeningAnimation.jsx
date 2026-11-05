import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DriedFloralCorner, BotanicalDivider, WaxSeal } from './BotanicalDecorations';
import { KrishnaFluteMotif } from './TraditionalMotifs';
import { Sparkles, MailOpen, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export const OpeningAnimation = ({ onOpen, lang, setLang, config, t }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      confetti({
        particleCount: 55,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#986B58', '#E9DDD1', '#C5A58F', '#C5A059', '#795345'],
        shapes: ['circle'],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.9,
      });
    } catch (e) {}

    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  const invitationLetters = Array.from(t.intro.invitationLine);
  const celebrationText = t.intro.celebrationLine;
  const brideName = lang === 'kn' ? config.couple.bride.kannadaName : config.couple.bride.name;
  const groomName = lang === 'kn' ? config.couple.groom.kannadaName : config.couple.groom.name;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.35,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)', transition: { duration: 0.9, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-3 sm:p-6 overflow-hidden select-none bg-black/15"
    >
      {/* Corner Botanical Dried Florals */}
      <DriedFloralCorner position="top-left" className="absolute top-0 left-0 w-28 h-28 sm:w-52 sm:h-52 lg:w-64 lg:h-64 opacity-85 z-20" />
      <DriedFloralCorner position="top-right" className="absolute top-0 right-0 w-28 h-28 sm:w-52 sm:h-52 lg:w-64 lg:h-64 opacity-85 z-20" />
      <DriedFloralCorner position="bottom-left" className="absolute bottom-0 left-0 w-28 h-28 sm:w-48 sm:h-48 lg:w-56 lg:h-56 opacity-85 z-20" />
      <DriedFloralCorner position="bottom-right" className="absolute bottom-0 right-0 w-28 h-28 sm:w-48 sm:h-48 lg:w-56 lg:h-56 opacity-85 z-20" />

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 sm:top-7 sm:right-7 z-30 flex items-center gap-2">
        <button
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
          className="px-3.5 py-1.5 rounded-full border border-[#C5A58F]/40 bg-[#FAF6F0]/80 backdrop-blur-md text-xs font-serif tracking-widest text-[#442E25] hover:bg-[#FAF6F0] transition-all shadow-xs flex items-center gap-1.5"
          title="Switch language between English and Kannada"
        >
          <span className={lang === 'en' ? 'font-semibold text-[#986B58]' : 'opacity-70'}>EN</span>
          <span className="opacity-40">|</span>
          <span className={lang === 'kn' ? 'font-semibold text-[#986B58] font-kannada' : 'opacity-70 font-kannada'}>ಕನ್ನಡ</span>
        </button>
      </div>

      {/* Headroom keeping the couple's faces unobstructed */}
      <div className="hidden sm:block h-28 md:h-36 shrink-0 pointer-events-none" />

      {/* Frosted Luxury Vellum Stationery Card (Blended naturally with typography & photo) */}
      <div className="relative w-full max-w-lg mx-auto perspective-1000 flex flex-col items-center justify-center z-25 mb-4 sm:mb-0">
        
        <motion.div
          animate={isOpening ? {
            rotateX: 20,
            y: 45,
            scale: 0.95,
            opacity: 0,
            transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] }
          } : {}}
          className="relative w-full glass-stationery rounded-3xl p-6 sm:p-9 md:p-11 text-center overflow-hidden"
        >
          {/* Double Framing Gold & Terracotta Hairline Borders */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-[#C5A58F]/50 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3.5 sm:inset-4.5 border border-[#986B58]/25 rounded-xl pointer-events-none" />

          {/* Traditional Krishna Flute Crest */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center justify-center mb-3 sm:mb-4"
          >
            <KrishnaFluteMotif className="w-20 sm:w-24 h-8 sm:h-10 filter drop-shadow-2xs" />
            <span className="text-[10px] font-serif tracking-[0.25em] text-[#795345] uppercase mt-1 opacity-90">
              ॥ ಶ್ರೀ ಕೃಷ್ಣಾಯ ನಮಃ ॥
            </span>
          </motion.div>

          {/* Letter-by-Letter "YOU ARE INVITED" */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center items-center gap-x-[0.3rem] sm:gap-x-1.5 text-xs sm:text-[13px] font-cinzel tracking-[0.25em] text-[#442E25] uppercase mb-1.5 font-medium"
          >
            {invitationLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={char === " " ? "w-1" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* "A CELEBRATION OF LOVE" */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xs font-serif italic tracking-[0.18em] uppercase text-[#986B58] font-medium mb-3"
          >
            {celebrationText}
          </motion.p>

          {/* Decorative Champagne Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
            className="origin-center"
          >
            <BotanicalDivider className="my-3 sm:my-4" />
          </motion.div>

          {/* Bride and Groom Names: Flowing Calligraphy in Rich Chocolate */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.4 }}
            className="my-2 sm:my-3"
          >
            {lang === 'kn' ? (
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-kannada font-semibold text-[#3E2720] tracking-normal leading-tight py-1 select-none">
                {brideName}
              </h1>
            ) : (
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-script text-[#3E2720] tracking-normal leading-tight py-1 font-normal select-none">
                {brideName}
              </h1>
            )}
            <span className="block my-0.5 text-lg sm:text-xl font-serif italic text-[#986B58] font-normal">
              {t.intro.and}
            </span>
            {lang === 'kn' ? (
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-kannada font-semibold text-[#3E2720] tracking-normal leading-tight py-1 select-none">
                {groomName}
              </h2>
            ) : (
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-script text-[#3E2720] tracking-normal leading-tight py-1 font-normal select-none">
                {groomName}
              </h2>
            )}
          </motion.div>

          {/* Wedding Date: 22 NOVEMBER 2026 • SUNDAY */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="mt-3 mb-5 sm:mb-6 inline-flex flex-col items-center justify-center px-6 py-2 rounded-full bg-white/60 border border-[#C5A58F]/40 shadow-2xs"
          >
            <div className="flex items-center gap-2 text-xs sm:text-[13px] font-cinzel tracking-[0.2em] font-medium text-[#442E25] uppercase">
              <Calendar className="w-3.5 h-3.5 text-[#986B58]" />
              <span>{t.intro.dateLine}</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#986B58] font-medium">
              {t.intro.dayLine}
            </span>
          </motion.div>

          {/* Wax Seal & OPEN INVITATION Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.2 }}
            className="flex flex-col items-center justify-center gap-3.5"
          >
            {/* Wax Seal with SV initials */}
            <div className="relative group cursor-pointer" onClick={handleOpenClick}>
              <WaxSeal
                text={config.couple.monogram}
                size="md"
                onClick={handleOpenClick}
                className="transform group-hover:scale-108 active:scale-95 transition-all shadow-wax-seal"
              />
              <span className="absolute -inset-1.5 rounded-full border border-[#986B58]/30 animate-ping pointer-events-none opacity-40"></span>
            </div>

            {/* "OPEN INVITATION" Button */}
            <button
              onClick={handleOpenClick}
              disabled={isOpening}
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-[#986B58] via-[#855B49] to-[#795345] text-[#FAF6F0] text-xs sm:text-[13px] font-cinzel font-medium tracking-[0.22em] uppercase shadow-md hover:shadow-xl hover:scale-102 active:scale-98 transition-all duration-300"
            >
              <MailOpen className="w-4 h-4 text-[#E9DDD1] group-hover:rotate-12 transition-transform duration-300" />
              <span>{isOpening ? (lang === 'kn' ? "ಆಮಂತ್ರಣ ತೆರೆಯುತ್ತಿದೆ..." : "Opening Invitation...") : t.intro.buttonText}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
            </button>

            <p className="text-[11px] font-serif italic text-[#795345] tracking-wider">
              {t.intro.tapHint}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OpeningAnimation;
