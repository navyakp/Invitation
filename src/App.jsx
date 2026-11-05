import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { weddingDetails } from './config/weddingDetails';
import { translations } from './translations';
import { CinematicBackground } from './components/CinematicBackground';
import { OpeningAnimation } from './components/OpeningAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Countdown } from './components/Countdown';
import { WeddingEvents } from './components/WeddingEvents';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVPForm } from './components/RSVPForm';
import { VenueSection } from './components/VenueSection';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/BotanicalDecorations';

export function App() {
  // Current language: 'en' (English) or 'kn' (Kannada)
  const [lang, setLang] = useState('en');

  // First Screen: Animated Letter Opening
  const [showIntro, setShowIntro] = useState(true);

  // Background music autoplay trigger (after user interaction)
  const [startMusic, setStartMusic] = useState(false);

  const t = translations[lang];

  const handleOpenInvitation = () => {
    setShowIntro(false);
    setStartMusic(true);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`relative min-h-screen text-[#442E25] selection:bg-[#986B58] selection:text-[#FAF6F0] ${
      lang === 'kn' ? 'font-kannada' : ''
    }`}>
      {/* 1. Global Cinematic Ken Burns Animated Photo Background (Persists Throughout Whole Website) */}
      <CinematicBackground
        imageSrc={weddingDetails.couple.heroPhoto || "/images/couple-hero.jpg"}
        altText="Sinchana & Vinay"
        isFixed={true}
        overlayIntensity="light"
        enableParallax={true}
      />

      {/* 2. Soft Floating Dried Petals Overlay */}
      <FloatingPetals />

      {/* 3. First Screen: Full-Screen Animated Letter & 3D Envelope Opening */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <OpeningAnimation
            key="opening-animation"
            onOpen={handleOpenInvitation}
            lang={lang}
            setLang={setLang}
            config={weddingDetails}
            t={t}
          />
        )}
      </AnimatePresence>

      {/* 4. Main Wedding Website (Transparent Glassmorphic Sections over Animated Background) */}
      {!showIntro && (
        <main className="relative z-10 animate-fadeIn">
          {/* Glassmorphic Sticky Navigation Bar */}
          <Navbar
            lang={lang}
            setLang={setLang}
            t={t}
            config={weddingDetails}
            onReplayIntro={handleReplayIntro}
          />

          {/* Hero Section */}
          <HeroSection
            lang={lang}
            t={t}
            config={weddingDetails}
          />

          {/* Live Wedding Countdown */}
          <Countdown
            lang={lang}
            t={t}
            config={weddingDetails}
          />

          {/* Wedding Events (Pre-Wedding & Ceremony) */}
          <WeddingEvents
            lang={lang}
            t={t}
            config={weddingDetails}
          />

          {/* Photo Gallery & Lightbox */}
          <PhotoGallery
            lang={lang}
            t={t}
            config={weddingDetails}
          />

          {/* RSVP Form with Supabase Integration */}
          <RSVPForm
            lang={lang}
            t={t}
            config={weddingDetails}
          />

          {/* Venue & Google Maps Integration */}
          <VenueSection
            lang={lang}
            t={t}
            config={weddingDetails}
          />

          {/* Website Footer */}
          <Footer
            lang={lang}
            t={t}
            config={weddingDetails}
            onReplayIntro={handleReplayIntro}
          />

          {/* Floating Wedding Instrumental Music Player */}
          <MusicPlayer
            audioUrl={weddingDetails.audio.url}
            autoPlayRequested={startMusic}
            lang={lang}
          />
        </main>
      )}
    </div>
  );
}

export default App;
