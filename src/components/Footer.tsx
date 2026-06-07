import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
  setActivePage: (page: PageId) => void;
  onRequestDemo: () => void;
}

export default function Footer({ lang, setActivePage, onRequestDemo }: FooterProps) {
  const t = translations[lang];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060E] border-t border-white/5 pt-16 pb-8 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
        
        {/* Widget 1: Branding */}
        <div className="space-y-4 md:col-span-1">
          <button
            id="footer-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer font-sans"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-white text-lg">
              H
            </div>
            <span className="text-white font-bold text-xl tracking-tight">+ Healthcare</span>
          </button>
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            {t.footer.desc}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-400/10 text-gray-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-400/10 text-gray-400 hover:text-sky-400 transition-colors"
              aria-label="Telegram Community"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-400/10 text-gray-400 hover:text-sky-400 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Widget 2: Company link directories */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase">{t.footer.company}</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNavClick('product')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                {t.nav.product}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('solutions')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                {t.nav.solutions}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('market')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                {t.nav.market}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('traction')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                {t.nav.traction}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('company')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                {t.nav.company}
              </button>
            </li>
          </ul>
        </div>

        {/* Widget 3: Legal stuff */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase">{t.footer.legal}</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <span className="hover:text-white cursor-pointer transition-colors block">{t.footer.privacy}</span>
            </li>
            <li>
              <span className="hover:text-white cursor-pointer transition-colors block">{t.footer.terms}</span>
            </li>
            <li>
              <button onClick={() => handleNavClick('pricing')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                {t.nav.pricing}
              </button>
            </li>
            <li>
              <button onClick={onRequestDemo} className="text-sky-400 hover:underline transition-colors text-left cursor-pointer font-medium">
                {t.common.demoBtn}
              </button>
            </li>
          </ul>
        </div>

        {/* Widget 4: Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase">{t.footer.contact}</h4>
          <ul className="space-y-3 text-xs leading-relaxed text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>{t.footer.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <a href="mailto:info@hplus.uz" className="hover:text-white transition-colors">info@hplus.uz</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <a href="tel:+998712000000" className="hover:text-white transition-colors">+998 (71) 200-00-00</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="text-gray-500">
          &copy; {new Date().getFullYear()} H+ Healthcare Platform. {t.footer.rights}
        </span>
        <div className="flex gap-4 text-gray-500">
          <span>{t.common.countries}: Uzbekistan • Kazakhstan • Kyrgyzstan • Tajikistan</span>
        </div>
      </div>
    </footer>
  );
}
