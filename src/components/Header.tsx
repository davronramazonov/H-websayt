import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Check, Menu, X } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import BrandLogo from './BrandLogo';

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

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: "O'zbekcha" },
    { code: 'ru', label: "Русский" },
    { code: 'en', label: "English" }
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <BrandLogo size="md" showText={false} className="group-hover:opacity-90 transition-opacity" />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#2563EB] bg-[#EFF6FF]'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#2563EB]/30 text-xs font-semibold uppercase bg-white transition-all cursor-pointer focus:outline-none"
            >
              <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
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
                  className="absolute right-0 mt-2 w-36 bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-1 z-50 overflow-hidden"
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setLang(item.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-left transition-all ${
                        lang === item.code
                          ? 'text-[#2563EB] bg-[#EFF6FF]'
                          : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {lang === item.code && <Check className="w-3.5 h-3.5 text-[#2563EB]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={onRequestDemo}
            className="px-5 py-2 rounded-lg bg-[#2563EB] text-white font-semibold text-xs tracking-tight transition-all hover:bg-[#1D4ED8] shadow-sm hover:shadow-md cursor-pointer"
          >
            {t.common.demoBtn}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              const nextLangMap: Record<Language, Language> = { uz: 'ru', ru: 'en', en: 'uz' };
              setLang(nextLangMap[lang]);
            }}
            className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[#475569] hover:text-[#0F172A] text-[10px] font-bold uppercase cursor-pointer"
          >
            {lang}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#475569] hover:text-[#0F172A] p-1 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-white border-b border-[#E2E8F0] px-4 pb-6 pt-2 space-y-3 shadow-lg"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'text-[#2563EB] bg-[#EFF6FF]'
                        : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-3">
              <div className="px-4 py-3 bg-[#F8FAFC] rounded-lg flex items-center justify-between">
                <span className="text-[#475569] text-xs uppercase font-bold tracking-wider">{t.common.language}</span>
                <div className="flex gap-1.5">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => { setLang(item.code); setIsMobileMenuOpen(false); }}
                      className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        lang === item.code ? 'bg-[#2563EB] text-white' : 'bg-white border border-[#E2E8F0] text-[#475569]'
                      }`}
                    >
                      {item.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full text-center py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-sm cursor-pointer"
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
