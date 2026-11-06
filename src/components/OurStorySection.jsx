import React from 'react';
import { motion } from 'framer-motion';
import { BotanicalDivider } from './BotanicalDecorations';
import { Heart, Coffee, Sunrise, Sparkles } from 'lucide-react';

export const OurStorySection = ({ lang, t, config }) => {
  const milestones = [
    {
      icon: Coffee,
      date: t.story.milestone1Date,
      title: t.story.milestone1Title,
      description: t.story.milestone1Desc,
      image: "/images/couple-bridge.jpg",
    },
    {
      icon: Sunrise,
      date: t.story.milestone2Date,
      title: t.story.milestone2Title,
      description: t.story.milestone2Desc,
      image: "/images/couple-vintage-car.jpg",
    },
    {
      icon: Heart,
      date: t.story.milestone3Date,
      title: t.story.milestone3Title,
      description: t.story.milestone3Desc,
      image: "/images/couple-beach.jpg",
    },
  ];

  return (
    <section id="story" className="py-16 sm:py-24 relative overflow-hidden bg-[#FAF6F0]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E9DDD1]/80 border border-[#C5A58F]/40 text-[#795345] text-xs font-cinzel tracking-[0.2em] uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.story.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#49362E] tracking-tight">
            {t.story.heading}
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#795345]/85 mt-2">
            {t.story.subtitle}
          </p>
          <BotanicalDivider className="my-5" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Vertical Guideline */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#C5A58F]/50 to-transparent pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo Vignette */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group max-w-sm rounded-2xl overflow-hidden p-2 bg-[#FCF9F5] border border-[#C5A58F]/40 shadow-stationery">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.15]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#49362E]/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-cinzel tracking-widest text-[#986B58] uppercase mb-1.5">
                      <Icon className="w-4 h-4 text-[#C5A059]" />
                      <span>{m.date}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#49362E] font-semibold mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-serif leading-relaxed text-[#795345]/90 max-w-md">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

