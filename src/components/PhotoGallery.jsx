import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BotanicalDivider } from './BotanicalDecorations';
import { X, ChevronLeft, ChevronRight, ZoomIn, Upload, Camera, Heart } from 'lucide-react';

export const PhotoGallery = ({ lang, t, config }) => {
  const [photos, setPhotos] = useState(config.gallery);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, photos.length]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Upload/Add photo dynamically
  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const newPhoto = {
          id: Date.now(),
          title: {
            en: "Uploaded Memory",
            kn: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ನೆನಪು",
          },
          subtitle: {
            en: file.name,
            kn: file.name,
          },
          url: uploadEvent.target.result,
          aspect: "portrait",
        };
        setPhotos([newPhoto, ...photos]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF6F0]/80 backdrop-blur-md border border-[#C5A58F]/40 text-[#795345] text-xs font-cinzel tracking-[0.2em] uppercase mb-2.5 shadow-2xs font-medium">
            <Camera className="w-3.5 h-3.5 text-[#986B58]" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#442E25] tracking-tight font-normal">
            {t.gallery.heading}
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#795345] mt-2">
            {t.gallery.subtitle}
          </p>
          <BotanicalDivider className="my-5" />

          {/* Upload Custom Couple Photo Option */}
          <div className="flex justify-center mt-2">
            <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C5A58F]/40 bg-[#FAF6F0]/80 backdrop-blur-md hover:bg-[#FAF6F0] text-xs font-cinzel tracking-wider text-[#442E25] font-medium cursor-pointer transition-all shadow-2xs">
              <Upload className="w-3.5 h-3.5 text-[#986B58]" />
              <span>{t.gallery.uploadButton}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Editorial Masonry Gallery Grid in Translucent Stationery Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, index) => {
            const title = lang === 'kn' ? item.title.kn : item.title.en;
            const subtitle = lang === 'kn' ? item.subtitle.kn : item.subtitle.en;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative rounded-3xl p-3 glass-stationery cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  item.isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/10">
                  <img
                    src={item.url}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter contrast-[1.04]"
                    style={item.isFeatured ? { objectPosition: 'center 20%' } : {}}
                    loading="lazy"
                  />

                  {/* Featured Badge for Couple Portrait */}
                  {item.isFeatured && (
                    <div className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full bg-[#FAF6F0]/90 backdrop-blur-md border border-[#C5A58F]/50 text-[10px] font-cinzel font-medium tracking-wider text-[#986B58] flex items-center gap-1.5 shadow-md">
                      <Heart className="w-3.5 h-3.5 text-[#986B58] fill-current" />
                      <span>{lang === 'kn' ? 'ನವದಂಪತಿಗಳು' : 'The Couple'}</span>
                    </div>
                  )}
                  
                  {/* Elegant Gradient & Caption overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2720]/90 via-[#3E2720]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#FAF6F0]">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block p-2 rounded-full bg-white/20 backdrop-blur-xs mb-2">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </span>
                      <h4 className="text-lg font-serif font-medium text-white">{title}</h4>
                      <p className="text-xs font-serif italic text-[#E9DDD1]">{subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Minimal label under card */}
                <div className="pt-3 px-2 pb-1 flex items-center justify-between text-[#442E25]">
                  <span className="text-xs font-serif italic text-[#442E25]">
                    {title}
                  </span>
                  <span className="text-[10px] font-cinzel font-medium uppercase tracking-widest text-[#986B58]">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A120E]/94 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-60 p-3 rounded-full bg-white/15 hover:bg-white/25 text-[#F7F2EC] transition-colors focus:outline-none border border-white/20"
              title={t.gallery.closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/15 hover:bg-white/25 text-[#F7F2EC] transition-colors focus:outline-none border border-white/20"
              title={t.gallery.prev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/15 hover:bg-white/25 text-[#F7F2EC] transition-colors focus:outline-none border border-white/20"
              title={t.gallery.next}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Card Container */}
            <div
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                src={photos[selectedIndex].url}
                alt={lang === 'kn' ? photos[selectedIndex].title.kn : photos[selectedIndex].title.en}
                className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl border-2 border-white/30"
              />

              <div className="mt-4 text-center text-[#F7F2EC]">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {lang === 'kn' ? photos[selectedIndex].title.kn : photos[selectedIndex].title.en}
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-[#C5A58F] mt-0.5">
                  {lang === 'kn' ? photos[selectedIndex].subtitle.kn : photos[selectedIndex].subtitle.en}
                </p>
                <div className="text-[11px] font-cinzel text-white/60 tracking-widest mt-1">
                  {selectedIndex + 1} {t.gallery.of} {photos.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
