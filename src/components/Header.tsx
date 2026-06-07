import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Check, Menu, X, Landmark } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onRequestDemo: () => void;
}

export default function Header({ lang, setLang, activePage, setActivePage, onRequestDemo }: HeaderProps) {
  const t = translations[lang];
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'product' as PageId, label: t.nav.product },
    { id: 'solutions' as PageId, label: t.nav.solutions },
    { id: 'market' as PageId, label: t.nav.market },
    { id: 'traction' as PageId, label: t.nav.traction },
    { id: 'pricing' as PageId, label: t.nav.pricing },
    { id: 'company' as PageId, label: t.nav.company },
    { id: 'investors' as PageId, label: t.nav.investors },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbekcha", flag: "🇺🇿" },
    { code: 'ru', label: "Русский", flag: "🇷🇺" },
    { code: 'en', label: "English", flag: "🇬🇧" }
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050B14]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 md:h-16 flex items-center justify-between">
        
        {/* Logo */}
        <button
          id="header-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 via-sky-400 to-blue-600 flex items-center justify-center font-bold text-white text-lg tracking-tight shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            H
          </div>
          <span className="text-white font-bold text-xl font-sans tracking-tight group-hover:text-sky-400 transition-colors">
            + <span className="text-gray-400 font-medium text-xs tracking-widest uppercase ml-1 opacity-80 group-hover:opacity-100 transition-opacity">Healthcare</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Buttons & Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Language Switcher */}
          <div className="relative">
            <button
              id="lang-switcher-trigger"
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-sky-500/30 text-xs font-semibold uppercase bg-white/5 transition-all cursor-pointer focus:outline-none"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{currentLangObj.code}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  id="lang-switcher-dropdown"
                  className="absolute right-0 mt-2 w-36 bg-[#0D1527] border border-sky-500/20 rounded-xl shadow-2xl p-1 z-50 overflow-hidden"
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      id={`lang-select-${item.code}`}
                      onMouseDown={(e) => {
                        e.preventDefault(); // Prevents blur
                        setLang(item.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-left transition-all ${
                        lang === item.code
                          ? 'text-sky-400 bg-sky-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span>{item.label}</span>
                      </span>
                      {lang === item.code && <Check className="w-3.5 h-3.5 text-sky-400" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Request Demo Button */}
          <button
            id="desktop-demo-btn"
            onClick={onRequestDemo}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs tracking-tight transition-all hover:opacity-90 shadow-[0_4px_15px_rgba(14,165,233,0.15)] hover:shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:scale-105 transform cursor-pointer"
          >
            {t.common.demoBtn}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          
          {/* Quick language switcher icon */}
          <button
            id="mobile-quick-lang"
            onClick={() => {
              // Quick toggling languages
              const nextLangMap: Record<Language, Language> = { uz: 'ru', ru: 'en', en: 'uz' };
              setLang(nextLangMap[lang]);
            }}
            className="p-1 px-2.5 rounded-full border border-white/10 bg-white/5 text-sky-400 hover:text-white text-[10px] font-bold uppercase cursor-pointer"
            title="Toggle Language"
          >
            {lang} {currentLangObj.flag}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white p-1"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-drawer-menu"
            className="lg:hidden w-full bg-[#050B14] border-b border-white/5 px-4 pb-6 pt-2 space-y-3"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-sky-400 bg-sky-500/10 border-l-2 border-sky-400'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              {/* Language Picker in Drawer */}
              <div className="px-4 py-2 bg-white/5 rounded-xl flex items-center justify-between">
                <span className="text-gray-400 text-xs uppercase font-bold tracking-wider">{t.common.countries} / Lang</span>
                <div className="flex gap-2">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      id={`mobile-lang-${item.code}`}
                      onClick={() => setLang(item.code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        lang === item.code ? 'bg-sky-500 text-white' : 'bg-white/5 text-gray-300'
                      }`}
                    >
                      {item.flag} {item.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                id="mobile-demo-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md cursor-pointer"
              >
                {t.common.demoBtn}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
