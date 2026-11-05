import React from 'react';
import { motion } from 'framer-motion';
import { BotanicalDivider } from './BotanicalDecorations';
import { KrishnaFluteMotif, SacredLotusMotif, MangalaKalashaMotif } from './TraditionalMotifs';
import { Calendar, Clock, MapPin, Navigation, Sparkles, Shirt, Heart, Music, Phone } from 'lucide-react';

export const WeddingEvents = ({ lang, t, config }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Music':
        return Music;
      case 'Heart':
      default:
        return Heart;
    }
  };

  const handleAddToCalendar = (event) => {
    const title = `${event.title.en} — ${config.couple.bride.name} & ${config.couple.groom.name}`;
    const desc = `${event.subtitle.en} at ${event.venue.en}`;
    const location = `${event.venue.en}, ${config.venue.address.en}`;
    
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&details=${encodeURIComponent(desc)}&location=${encodeURIComponent(location)}`;
    window.open(gcalUrl, '_blank');
  };

  return (
    <section id="events" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF6F0]/80 backdrop-blur-md border border-[#C5A58F]/40 text-[#795345] text-xs font-cinzel tracking-[0.2em] uppercase mb-2.5 shadow-2xs font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#986B58]" />
            <span>{t.events.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#442E25] tracking-tight font-normal">
            {t.events.heading}
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#795345] mt-2">
            {t.events.subtitle}
          </p>
          <BotanicalDivider className="my-5" />
        </div>

        {/* Two Harmonized Wedding Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {config.events.map((event, index) => {
            const Icon = getIcon(event.icon);
            const title = lang === 'kn' ? event.title.kn : event.title.en;
            const subtitle = lang === 'kn' ? event.subtitle.kn : event.subtitle.en;
            const date = lang === 'kn' ? event.date.kn : event.date.en;
            const day = lang === 'kn' ? event.day.kn : event.day.en;
            const time = lang === 'kn' ? event.time.kn : event.time.en;
            const venue = lang === 'kn' ? event.venue.kn : event.venue.en;
            const attire = lang === 'kn' ? event.attire.kn : event.attire.en;

            const isCeremony = event.id === 'wedding-ceremony';

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative glass-stationery rounded-3xl p-6 sm:p-9 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Inner Double Border */}
                <div className="absolute inset-3 border border-[#C5A58F]/35 rounded-2xl pointer-events-none group-hover:border-[#986B58]/40 transition-colors" />

                {/* Corner Floral Motif */}
                <div className="absolute top-3 right-3 w-16 h-16 opacity-60 pointer-events-none">
                  {isCeremony ? (
                    <MangalaKalashaMotif className="w-10 h-10 ml-auto filter drop-shadow-2xs" />
                  ) : (
                    <SacredLotusMotif className="w-9 h-9 ml-auto filter drop-shadow-2xs" color="#986B58" />
                  )}
                </div>

                <div>
                  {/* Top Badge: Event 1 or Event 2 */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[#C5A58F]/40 text-[#986B58] text-[10px] font-cinzel font-medium tracking-widest uppercase mb-4 shadow-2xs">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{isCeremony ? (lang === 'kn' ? 'ಪ್ರಮುಖ ಸಮಾರಂಭ ೨' : 'EVENT 2 — CEREMONY') : (lang === 'kn' ? 'ಪ್ರಮುಖ ಸಮಾರಂಭ ೧' : 'EVENT 1 — RECEPTION')}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#442E25] font-normal mb-2 group-hover:text-[#986B58] transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs font-serif italic text-[#795345] leading-relaxed mb-6">
                    {subtitle}
                  </p>

                  {/* Event Details List */}
                  <div className="space-y-4 text-xs text-[#442E25] border-t border-[#C5A58F]/30 pt-5">
                    {/* Date & Day */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-white/70 border border-[#C5A58F]/35 text-[#986B58] shrink-0 shadow-2xs">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-sans uppercase tracking-widest text-[#795345] font-medium">
                          {lang === 'kn' ? 'ದಿನಾಂಕ ಮತ್ತು ವಾರ' : 'Date & Day'}
                        </span>
                        <span className="font-serif font-semibold text-sm text-[#442E25]">{date}</span>
                        <span className="block text-[11px] font-sans text-[#986B58] font-medium">{day}</span>
                      </div>
                    </div>

                    {/* Time / Muhurtham */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-white/70 border border-[#C5A58F]/35 text-[#986B58] shrink-0 shadow-2xs">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-sans uppercase tracking-widest text-[#795345] font-medium">
                          {isCeremony ? (lang === 'kn' ? 'ಶುಭ ಮುಹೂರ್ತ' : 'Muhurtham Time') : t.events.timeLabel}
                        </span>
                        <span className="font-serif font-semibold text-sm text-[#442E25]">{time}</span>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-white/70 border border-[#C5A58F]/35 text-[#986B58] shrink-0 shadow-2xs">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-sans uppercase tracking-widest text-[#795345] font-medium">
                          {t.events.venueLabel}
                        </span>
                        <span className="font-serif font-semibold text-sm text-[#442E25] leading-snug block">
                          {venue}
                        </span>
                        <span className="text-[11px] font-serif italic text-[#795345] block mt-0.5">
                          {config.venue.address[lang]}
                        </span>
                      </div>
                    </div>

                    {/* Attire */}
                    {attire && (
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-white/70 border border-[#C5A58F]/35 text-[#986B58] shrink-0 shadow-2xs">
                          <Shirt className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-[10px] font-sans uppercase tracking-widest text-[#795345] font-medium">
                            {t.events.attireLabel}
                          </span>
                          <span className="font-serif text-[#795345] font-medium">{attire}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 pt-4 border-t border-[#C5A58F]/30 flex items-center justify-between gap-2">
                  <a
                    href={config.venue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-cinzel font-medium tracking-wider text-[#986B58] hover:text-[#795345] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{t.events.directions}</span>
                  </a>

                  <button
                    onClick={() => handleAddToCalendar(event)}
                    className="inline-flex items-center gap-1 text-[11px] font-serif italic text-[#795345] hover:text-[#442E25] px-3 py-1.5 rounded-lg bg-white/70 border border-[#C5A58F]/35 hover:bg-[#FAF6F0] transition-all shadow-2xs"
                  >
                    <Calendar className="w-3 h-3 text-[#C5A059]" />
                    <span>{t.events.addToCal}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Numbers Bar */}
        <div className="mt-10 p-5 rounded-3xl glass-stationery max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/80 border border-[#C5A58F]/40 flex items-center justify-center text-[#986B58] shadow-2xs">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] font-cinzel uppercase tracking-widest text-[#795345] font-medium">
                {t.events.contactLabel}
              </span>
              <span className="text-xs font-serif italic text-[#442E25]">
                {lang === 'kn' ? 'ಕುಟುಂಬದವರನ್ನು ಸಂಪರ್ಕಿಸಲು:' : 'For family inquiries & assistance:'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#986B58] font-semibold">
            {config.contacts.map((c) => (
              <a
                key={c.phone}
                href={c.href}
                className="px-4 py-2 rounded-full bg-white/80 border border-[#C5A58F]/40 hover:bg-[#986B58] hover:text-white transition-all shadow-2xs"
              >
                {c.phone}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WeddingEvents;
