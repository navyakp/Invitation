import React from 'react';
import { BotanicalDivider, WaxSeal } from './BotanicalDecorations';
import { KrishnaFluteMotif, SacredLotusMotif } from './TraditionalMotifs';
import { Heart, ArrowUp, Sparkles, Calendar } from 'lucide-react';

export const Footer = ({ lang, t, config, onReplayIntro }) => {
  const brideName = lang === 'kn' ? config.couple.bride.kannadaName : config.couple.bride.name;
  const groomName = lang === 'kn' ? config.couple.groom.kannadaName : config.couple.groom.name;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden bg-[#FAF6F0]/80 backdrop-blur-xl border-t border-[#C5A58F]/35 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Krishna Flute & Wax Seal Crest */}
        <div className="flex flex-col items-center justify-center mb-6">
          <KrishnaFluteMotif className="w-24 sm:w-28 h-10 sm:h-12 mb-3 filter drop-shadow-2xs" />
          <WaxSeal
            text={config.couple.monogram}
            size="md"
            onClick={scrollToTop}
          />
        </div>

        {/* Primary Footer Message */}
        <p className="text-xs sm:text-sm font-cinzel font-medium uppercase tracking-[0.2em] text-[#986B58] max-w-xl mx-auto mb-3">
          {t.footer.heading}
        </p>

        {/* Botanical Flourish */}
        <div className="flex items-center justify-center my-4 opacity-80">
          <div className="h-[1px] w-16 sm:w-28 bg-[#C5A58F]/50" />
          <SacredLotusMotif className="w-5 h-5 mx-2 filter drop-shadow-2xs" color="#986B58" />
          <div className="h-[1px] w-16 sm:w-28 bg-[#C5A58F]/50" />
        </div>

        {/* Names & Signature */}
        <div className="my-4">
          <span className="block text-[11px] font-cinzel tracking-[0.22em] uppercase text-[#795345] font-medium mb-1">
            {t.footer.withLove}
          </span>
          {lang === 'kn' ? (
            <h2 className="text-3xl sm:text-4xl font-kannada font-semibold text-[#3E2720] py-1">
              {brideName} &amp; {groomName}
            </h2>
          ) : (
            <h2 className="text-4xl sm:text-5xl font-script text-[#3E2720] py-1 font-normal tracking-normal select-none">
              {brideName} &amp; {groomName}
            </h2>
          )}
          <div className="inline-flex items-center gap-1.5 text-xs font-cinzel font-medium tracking-widest text-[#986B58] mt-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.footer.weddingDate}</span>
          </div>
        </div>

        {/* Bottom Navigation & Replay Intro */}
        <div className="mt-10 pt-6 border-t border-[#C5A58F]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#442E25]">
          <span className="font-serif italic text-xs text-[#795345]">
            {config.couple.hashtag} • Bengaluru, Karnataka
          </span>

          <div className="flex items-center gap-4">
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1.5 text-xs font-serif italic text-[#986B58] hover:text-[#795345] underline transition-colors font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.nav.openInvitation}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C5A58F]/40 bg-white/80 hover:bg-[#FAF6F0] text-[11px] font-cinzel tracking-wider text-[#442E25] font-medium transition-all shadow-2xs"
            >
              <ArrowUp className="w-3 h-3 text-[#986B58]" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
