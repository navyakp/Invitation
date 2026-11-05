import React from 'react';
import { Globe } from 'lucide-react';

export const LanguageToggle = ({ lang, setLang, className = "" }) => {
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'kn' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C5A58F]/40 bg-white/80 hover:bg-[#FAF6F0] text-xs font-serif font-medium text-[#795345] transition-all shadow-2xs ${className}`}
      title="Change Language (English / Kannada)"
    >
      <Globe className="w-3.5 h-3.5 text-[#986B58]" />
      <span className={lang === 'en' ? 'font-semibold text-[#986B58]' : 'opacity-70'}>EN</span>
      <span className="opacity-40">|</span>
      <span className={lang === 'kn' ? 'font-semibold text-[#986B58] font-kannada' : 'opacity-70 font-kannada'}>ಕನ್ನಡ</span>
    </button>
  );
};

export default LanguageToggle;

