import React from 'react';
import { motion } from 'framer-motion';
import { WaxSeal } from './BotanicalDecorations';
import { MailOpen } from 'lucide-react';

export const EnvelopeAnimation = ({ isOpen, onToggle, monogram = "SV" }) => {
  return (
    <div className="relative w-72 sm:w-80 h-48 sm:h-52 perspective-1000 select-none">
      {/* Envelope Outer Base */}
      <div className="absolute inset-0 bg-[#E8DDD1] rounded-2xl border border-[#C5A58F]/50 shadow-stationery overflow-hidden">
        {/* Envelope Side Flaps */}
        <div
          className="absolute inset-0 border-l-[140px] sm:border-l-[160px] border-l-[#DFCEBE] border-y-[96px] sm:border-y-[104px] border-y-transparent border-r-[140px] sm:border-r-[160px] border-r-[#D9C4B2] pointer-events-none"
        />
        {/* Bottom Flap */}
        <div
          className="absolute bottom-0 left-0 right-0 border-b-[100px] sm:border-b-[110px] border-b-[#D2BCAB] border-x-[140px] sm:border-x-[160px] border-x-transparent pointer-events-none"
        />
      </div>

      {/* Top Folding Flap with 3D rotation */}
      <motion.div
        animate={{ rotateX: isOpen ? -180 : 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute top-0 left-0 right-0 border-t-[100px] sm:border-t-[110px] border-t-[#C5A58F] border-x-[140px] sm:border-x-[160px] border-x-transparent pointer-events-none z-20"
      />

      {/* Center Wax Seal */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-auto">
        <WaxSeal
          text={monogram}
          size="md"
          onClick={onToggle}
          className="shadow-wax-seal"
        />
      </div>
    </div>
  );
};

export default EnvelopeAnimation;

