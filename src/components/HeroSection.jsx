import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DriedFloralCorner, BotanicalDivider, WaxSeal } from './BotanicalDecorations';
import { KrishnaFluteMotif, SacredLotusMotif } from './TraditionalMotifs';
import { Calendar, Clock, MapPin, Heart, Check, Sparkles, Phone, Eye, EyeOff } from 'lucide-react';

export const HeroSection = ({ lang, t, config }) => {
  const [calendarSaved, setCalendarSaved] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const bride = config.couple.bride;
  const groom = config.couple.groom;
  const brideName = lang === 'kn' ? bride.kannadaName : bride.name;
  const groomName = lang === 'kn' ? groom.kannadaName : groom.name;
  const brideParents = lang === 'kn' ? bride.kannadaParents : bride.parents;
  const groomParents = lang === 'kn' ? groom.kannadaParents : groom.parents;

  // Save the Date (.ics & Google Calendar integration)
  const handleSaveTheDate = () => {
    const title = `Wedding of ${bride.fullName} & ${groom.fullName}`;
    const desc = `${t.hero.cordiallyInvited} at ${config.venue.name.en}.`;
    const location = `${config.venue.name.en}, ${config.venue.address.en}`;
    const startTime = "20261122T040000Z"; // 9:30 AM IST (UTC 4:00 AM)
    const endTime = "20261122T063000Z";

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startTime}/${endTime}&details=${encodeURIComponent(
      desc
    )}&location=${encodeURIComponent(location)}`;

    window.open(gcalUrl, '_blank');
    setCalendarSaved(true);
    setTimeout(() => setCalendarSaved(false), 4000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden flex flex-col justify-end sm:justify-center items-center">
      {/* 1. Dried Floral Ornaments in Top Corners */}
      <DriedFloralCorner position="top-left" className="absolute top-10 left-0 w-32 h-32 sm:w-60 sm:h-60 opacity-80 z-20" />
      <DriedFloralCorner position="top-right" className="absolute top-10 right-0 w-32 h-32 sm:w-60 sm:h-60 opacity-80 z-20" />

      {/* Floating Toggle to View Full Uninhibited Photo */}
      <div className="absolute top-20 right-4 sm:top-24 sm:right-8 z-30">
        <button
          onClick={() => setIsCardVisible(!isCardVisible)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6F0]/80 backdrop-blur-md border border-[#C5A58F]/40 text-xs font-serif text-[#442E25] hover:bg-[#FAF6F0] transition-all shadow-xs"
          title={isCardVisible ? "Hide card to view photo" : "Show invitation card"}
        >
          {isCardVisible ? (
            <>
              <Eye className="w-3.5 h-3.5 text-[#986B58]" />
              <span className="hidden sm:inline font-medium">{lang === 'kn' ? 'ಫೋಟೋ ವೀಕ್ಷಿಸಿ' : 'View Photo'}</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5 text-[#986B58]" />
              <span className="font-medium">{lang === 'kn' ? 'ಕಾರ್ಡ್ ತೋರಿಸಿ' : 'Show Invitation'}</span>
            </>
          )}
        </button>
      </div>

      {/* Headroom on larger screens to keep couple's faces unobstructed */}
      <div className="hidden lg:block h-36 xl:h-44 shrink-0 pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 relative z-25">
        
        {/* 2. Translucent Frosted Glass Stationery Card */}
        <AnimatePresence>
          {isCardVisible && (
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.98 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative glass-stationery rounded-3xl p-6 sm:p-10 md:p-14 text-center overflow-hidden"
            >
              {/* Double Framing Gold & Terracotta Hairline Borders */}
              <div className="absolute inset-3 sm:inset-5 border border-[#C5A58F]/50 rounded-2xl pointer-events-none" />
              <div className="absolute inset-4 sm:inset-7 border border-[#986B58]/25 rounded-xl pointer-events-none" />

              {/* Traditional Krishna Flute Motif */}
              <div className="flex flex-col items-center justify-center mb-5">
                <KrishnaFluteMotif className="w-24 sm:w-28 h-10 sm:h-12 mb-1.5 filter drop-shadow-2xs" />
                <span className="text-[10px] sm:text-xs font-serif tracking-[0.28em] uppercase text-[#795345] opacity-90">
                  ॥ ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ • ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ ॥
                </span>
              </div>

              {/* Invitation Text Lines */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-1.5 mb-5 text-[#795345]"
              >
                <p className="text-xs sm:text-[13px] font-cinzel font-medium tracking-[0.25em] text-[#986B58] uppercase">
                  {t.hero.together}
                </p>
                <p className="text-xs sm:text-[13px] font-serif tracking-[0.15em] uppercase text-[#795345] max-w-lg mx-auto font-normal">
                  {t.hero.joyfullyInvite}
                </p>
              </motion.div>

              {/* Bride Name: SINCHANA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="my-2 sm:my-3"
              >
                {lang === 'kn' ? (
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-kannada font-semibold text-[#3E2720] py-1 tracking-normal leading-tight select-none">
                    {brideName}
                  </h1>
                ) : (
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-script text-[#3E2720] py-1 tracking-normal leading-tight font-normal select-none">
                    {brideName}
                  </h1>
                )}
                <p className="text-xs sm:text-[13px] font-serif italic text-[#795345] max-w-md mx-auto mt-0.5 font-normal">
                  {brideParents}
                </p>
              </motion.div>

              {/* Elegant "&" with Sacred Lotus Flourish */}
              <div className="my-1.5 flex items-center justify-center">
                <div className="h-[1px] w-12 sm:w-24 bg-[#C5A58F]/50" />
                <div className="mx-3 flex items-center gap-2">
                  <SacredLotusMotif className="w-5 h-5 opacity-80" color="#986B58" />
                  <span className="text-xl sm:text-2xl font-serif italic text-[#986B58] font-normal">
                    {t.hero.and}
                  </span>
                  <SacredLotusMotif className="w-5 h-5 scale-x-[-1] opacity-80" color="#986B58" />
                </div>
                <div className="h-[1px] w-12 sm:w-24 bg-[#C5A58F]/50" />
              </div>

              {/* Groom Name: VINAY */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="my-2 sm:my-3"
              >
                {lang === 'kn' ? (
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-kannada font-semibold text-[#3E2720] py-1 tracking-normal leading-tight select-none">
                    {groomName}
                  </h2>
                ) : (
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-script text-[#3E2720] py-1 tracking-normal leading-tight font-normal select-none">
                    {groomName}
                  </h2>
                )}
                <p className="text-xs sm:text-[13px] font-serif italic text-[#795345] max-w-md mx-auto mt-0.5 font-normal">
                  {groomParents}
                </p>
              </motion.div>

              <BotanicalDivider className="my-5" />

              {/* Date, Time & Venue Information Cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-5 sm:my-7 text-[#442E25]"
              >
                {/* Wedding Date */}
                <div className="glass-stationery-card p-4 rounded-2xl flex flex-col items-center">
                  <Calendar className="w-5 h-5 text-[#986B58] mb-1.5" />
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#795345] font-medium">
                    {lang === 'kn' ? 'ದಿನಾಂಕ' : 'Wedding Date'}
                  </span>
                  <span className="text-xs sm:text-sm font-serif font-semibold text-[#442E25] mt-0.5">
                    {t.hero.weddingDate}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#986B58] font-medium">
                    {t.hero.weddingDay}
                  </span>
                </div>

                {/* Wedding Muhurtham */}
                <div className="glass-stationery-card p-4 rounded-2xl flex flex-col items-center">
                  <Clock className="w-5 h-5 text-[#986B58] mb-1.5" />
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#795345] font-medium">
                    {lang === 'kn' ? 'ಮುಹೂರ್ತ' : 'Muhurtham'}
                  </span>
                  <span className="text-xs sm:text-sm font-serif font-semibold text-[#442E25] mt-0.5">
                    {t.hero.muhurthamTime}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#986B58] font-medium">
                    {lang === 'kn' ? 'ಧನುರ್ ಲಗ್ನ' : 'Dhanur Lagna'}
                  </span>
                </div>

                {/* Venue */}
                <div className="glass-stationery-card p-4 rounded-2xl flex flex-col items-center">
                  <MapPin className="w-5 h-5 text-[#986B58] mb-1.5" />
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#795345] font-medium">
                    {t.events.venueLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-serif font-semibold text-[#442E25] mt-0.5 text-center leading-snug">
                    {lang === 'kn' ? config.venue.name.kn : config.venue.name.en}
                  </span>
                </div>
              </motion.div>

              {/* Cordially Invited Note */}
              <p className="text-xs sm:text-sm font-serif italic text-[#795345] max-w-lg mx-auto mb-6">
                "{t.hero.cordiallyInvited}"
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <a
                  href="#events"
                  className="px-7 sm:px-9 py-3 rounded-full bg-gradient-to-r from-[#986B58] via-[#855B49] to-[#795345] text-[#FAF6F0] text-xs sm:text-[13px] font-cinzel tracking-[0.18em] uppercase shadow-md hover:shadow-lg hover:scale-102 transition-all font-medium"
                >
                  {t.hero.eventsButton}
                </a>

                <button
                  onClick={handleSaveTheDate}
                  className="px-6 sm:px-8 py-3 rounded-full border border-[#C5A58F]/60 bg-white/60 hover:bg-[#FAF6F0] text-[#442E25] text-xs sm:text-[13px] font-cinzel tracking-[0.16em] uppercase transition-all flex items-center gap-2 font-medium shadow-2xs"
                >
                  {calendarSaved ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800" />
                      <span>{t.hero.addedToCalendar}</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#986B58]" />
                      <span>{t.hero.saveTheDate}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Couple's Hashtag & Contact Highlight */}
              <div className="mt-7 pt-4 border-t border-[#C5A58F]/30 flex flex-wrap items-center justify-center gap-4 text-xs font-serif italic text-[#795345]">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#986B58] fill-current opacity-80" />
                  <span>{config.couple.hashtag}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5 font-sans not-italic text-[11px] text-[#986B58] font-medium">
                  <Phone className="w-3 h-3 text-[#986B58]" />
                  <span>9972145509 / 8867052409</span>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default HeroSection;
