import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BotanicalDivider } from './BotanicalDecorations';
import { Heart, Sparkles, Clock } from 'lucide-react';

export const Countdown = ({ lang, t, config }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(config.weddingDateTime.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [config.weddingDateTime.targetDate]);

  const timeUnits = [
    { label: t.countdown.days, value: timeLeft.days },
    { label: t.countdown.hours, value: timeLeft.hours },
    { label: t.countdown.minutes, value: timeLeft.minutes },
    { label: t.countdown.seconds, value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF6F0]/80 backdrop-blur-md border border-[#C5A58F]/40 text-[#795345] text-xs font-cinzel tracking-[0.2em] uppercase mb-2.5 shadow-2xs font-medium">
            <Clock className="w-3.5 h-3.5 text-[#986B58]" />
            <span>{lang === 'kn' ? 'ಕ್ಷಣಗಣನೆ' : 'Live Countdown'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#442E25] tracking-tight font-normal">
            {t.countdown.heading}
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#795345] mt-2 max-w-md mx-auto">
            {t.countdown.subtitle}
          </p>
        </div>

        {timeLeft.isCompleted ? (
          /* Auspicious Wedding Celebration Message */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 sm:p-12 rounded-3xl glass-stationery max-w-xl mx-auto text-center"
          >
            <Sparkles className="w-10 h-10 text-[#C5A059] mx-auto mb-3 animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-serif text-[#986B58] font-bold">
              {t.countdown.celebrationTitle}
            </h3>
            <p className="text-sm sm:text-base font-serif italic text-[#442E25] mt-2 font-medium">
              {t.countdown.celebrationSubtitle}
            </p>
            <div className="mt-4 flex justify-center">
              <Heart className="w-6 h-6 text-[#986B58] fill-current animate-pulse" />
            </div>
          </motion.div>
        ) : (
          /* Harmonized Countdown Cards */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-stationery rounded-2xl p-5 sm:p-7 flex flex-col items-center justify-center group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Thin inner hairline */}
                <div className="absolute inset-2 border border-[#C5A58F]/30 rounded-xl pointer-events-none" />

                {/* Number Display */}
                <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#3E2720] tracking-tight tabular-nums">
                  {String(unit.value).padStart(2, '0')}
                </div>

                {/* Label */}
                <div className="text-[11px] sm:text-xs font-cinzel uppercase tracking-[0.2em] text-[#986B58] font-medium mt-2">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <BotanicalDivider className="mt-12" />

      </div>
    </section>
  );
};

export default Countdown;
