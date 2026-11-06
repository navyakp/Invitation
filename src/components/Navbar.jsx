import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Heart } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = ({ lang, setLang, t, config, onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.events, href: '#events' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.venue, href: '#venue', highlight: true },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF6F0]/85 backdrop-blur-xl shadow-xs border-b border-[#C5A58F]/30 py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram: S & V */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group text-[#442E25] focus:outline-none"
          >
            <span className="font-serif italic text-2xl sm:text-3xl font-normal tracking-wider group-hover:text-[#986B58] transition-colors">
              {lang === 'kn' ? config.couple.kannadaInitials : config.couple.initials}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-cinzel text-[#795345] font-medium hidden md:inline-block">
              Wedding
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 px-6 py-2 rounded-full bg-[#FAF6F0]/80 backdrop-blur-md border border-[#C5A58F]/35 shadow-2xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.16em] transition-all duration-200 relative ${
                  link.highlight
                    ? 'px-4 py-1.5 rounded-full bg-[#986B58] text-[#FAF6F0] hover:bg-[#795345] shadow-2xs font-medium border border-[#C5A58F]/40'
                    : 'text-[#442E25] hover:text-[#986B58] font-medium'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls: Replay Invitation + English/Kannada Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Replay Invitation button */}
            <button
              onClick={onReplayIntro}
              className="hidden sm:flex items-center gap-1.5 text-xs font-serif italic text-[#795345] hover:text-[#442E25] px-3.5 py-1.5 rounded-full border border-[#C5A58F]/40 bg-white/80 hover:bg-[#FAF6F0] transition-all shadow-2xs font-normal"
              title="Open the introductory animated invitation"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.nav.openInvitation}</span>
            </button>

            {/* Language Switcher */}
            <LanguageToggle lang={lang} setLang={setLang} />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#442E25] hover:text-[#986B58] focus:outline-none rounded-full bg-white/80 border border-[#C5A58F]/40"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0]/95 backdrop-blur-xl border-b border-[#C5A58F]/35 px-6 py-6 transition-all duration-300 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm tracking-[0.15em] py-2 uppercase transition-colors font-medium ${
                  link.highlight
                    ? 'inline-block text-center rounded-full bg-[#986B58] text-[#FAF6F0] py-2.5 my-1 shadow-xs'
                    : 'text-[#442E25] hover:text-[#986B58]'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#C5A58F]/30 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="flex items-center justify-center gap-2 text-xs font-serif italic font-normal text-[#795345] py-2.5 rounded-full bg-white/80 border border-[#C5A58F]/40 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{t.nav.openInvitation}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
