import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BotanicalDivider } from './BotanicalDecorations';
import { SacredLotusMotif, MangalaKalashaMotif } from './TraditionalMotifs';
import { MapPin, Navigation, Copy, Check, Car, Phone } from 'lucide-react';

export const VenueSection = ({ lang, t, config }) => {
  const [copied, setCopied] = useState(false);

  const venueName = lang === 'kn' ? config.venue.name.kn : config.venue.name.en;
  const hallName = lang === 'kn' ? config.venue.hall.kn : config.venue.hall.en;
  const address = lang === 'kn' ? config.venue.address.kn : config.venue.address.en;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${config.venue.name.en}, ${config.venue.address.en}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="venue" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF6F0]/80 backdrop-blur-md border border-[#C5A58F]/40 text-[#795345] text-xs font-cinzel tracking-[0.2em] uppercase mb-2.5 shadow-2xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#986B58]" />
            <span>{t.venue.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#442E25] tracking-tight font-normal">
            {t.venue.heading}
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#795345] mt-2">
            {t.venue.subtitle}
          </p>
          <BotanicalDivider className="my-5" />
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Venue Details Translucent Stationery Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-stationery rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden"
          >
            {/* Inner Border */}
            <div className="absolute inset-3 border border-[#C5A58F]/35 rounded-2xl pointer-events-none" />

            <div>
              <span className="text-[10px] font-cinzel uppercase tracking-[0.25em] text-[#986B58] block mb-2 font-medium">
                Wedding Destination
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#442E25] font-normal leading-tight mb-2">
                {venueName}
              </h3>
              <p className="text-xs font-serif italic text-[#795345] mb-6">
                {hallName}
              </p>

              <div className="space-y-4 text-xs text-[#442E25] border-t border-[#C5A58F]/30 pt-4">
                {/* Full Address */}
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-white/80 border border-[#C5A58F]/35 text-[#986B58] shrink-0 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-widest text-[#795345] mb-0.5 font-medium">
                      {t.venue.addressTitle}
                    </span>
                    <p className="font-serif leading-relaxed text-[#442E25] font-normal">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Parking Note */}
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-white/80 border border-[#C5A58F]/35 text-[#986B58] shrink-0 shadow-2xs">
                    <Car className="w-4 h-4" />
                  </div>
                  <p className="font-serif italic text-[#795345]">
                    {t.venue.parkingNote}
                  </p>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-white/80 border border-[#C5A58F]/35 text-[#986B58] shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-widest text-[#795345] mb-0.5 font-medium">
                      {t.venue.contactVenue}
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-mono font-medium text-[#986B58]">
                      {config.contacts.map((c) => (
                        <a key={c.phone} href={c.href} className="hover:underline">
                          {c.phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-[#C5A58F]/30 flex flex-wrap items-center gap-3">
              <a
                href={config.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#986B58] text-[#FAF6F0] text-xs font-cinzel tracking-wider uppercase hover:bg-[#795345] shadow-xs transition-all text-center font-medium border border-[#C5A58F]/40"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.venue.openMaps}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#C5A58F]/40 bg-white/80 hover:bg-[#FAF6F0] text-xs font-cinzel tracking-wider text-[#442E25] font-medium transition-all shadow-2xs"
                title="Copy Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{lang === 'kn' ? 'ಕಾಪಿ ಮಾಡಲಾಗಿದೆ' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#986B58]" />
                    <span>{t.venue.copyAddress}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Interactive Google Map in Glass Frame (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-stationery rounded-3xl p-3"
          >
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-black/10">
              <iframe
                title={lang === 'kn' ? "ವಿವಾಹ ಸ್ಥಳ - ಗಾಯತ್ರಿ ಕಲ್ಯಾಣ ಮಂಟಪ, ಚಳ್ಳಕೆರೆ" : "Wedding Venue Location - Gayathri Kalyana Mantapa, Challakere"}
                src={config.venue.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VenueSection;
