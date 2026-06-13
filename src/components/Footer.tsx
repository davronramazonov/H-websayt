import { Mail, MapPin, Github } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { contact } from '../config/contact';
import BrandLogo from './BrandLogo';
import type { LegalDocument } from './LegalModal';

interface FooterProps {
  lang: Language;
  setActivePage: (page: PageId) => void;
  onRequestDemo: () => void;
  onOpenLegal: (document: LegalDocument) => void;
}

export default function Footer({ lang, setActivePage, onRequestDemo, onOpenLegal }: FooterProps) {
  const t = translations[lang];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] pt-16 pb-8 text-[#475569] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
        <div className="space-y-4 md:col-span-1">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <BrandLogo size="md" showText={false} className="group-hover:opacity-90 transition-opacity" />
          </button>
          <p className="text-[#475569] text-xs leading-relaxed max-w-sm">
            {t.footer.desc}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href={contact.github} target="_blank" rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center hover:bg-[#EFF6FF] text-[#475569] hover:text-[#2563EB] transition-colors"
              aria-label="H+ GitHub Repository">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-[#0F172A] font-semibold text-xs tracking-wider uppercase">{t.footer.company}</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => handleNavClick('product')} className="hover:text-[#2563EB] transition-colors text-left cursor-pointer">{t.nav.product}</button></li>
            <li><button onClick={() => handleNavClick('solutions')} className="hover:text-[#2563EB] transition-colors text-left cursor-pointer">{t.nav.solutions}</button></li>
            <li><button onClick={() => handleNavClick('market')} className="hover:text-[#2563EB] transition-colors text-left cursor-pointer">{t.nav.market}</button></li>
            <li><button onClick={() => handleNavClick('traction')} className="hover:text-[#2563EB] transition-colors text-left cursor-pointer">{t.nav.traction}</button></li>
            <li><button onClick={() => handleNavClick('company')} className="hover:text-[#2563EB] transition-colors text-left cursor-pointer">{t.nav.company}</button></li>
            <li><button onClick={() => handleNavClick('interview')} className="hover:text-[#2563EB] transition-colors text-left cursor-pointer">{t.nav.interview}</button></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-[#0F172A] font-semibold text-xs tracking-wider uppercase">{t.footer.legal}</h4>
          <ul className="space-y-2 text-xs">
            <li><button type="button" onClick={() => onOpenLegal('privacy')} className="hover:text-[#2563EB] cursor-pointer transition-colors text-left">{t.footer.privacy}</button></li>
            <li><button type="button" onClick={() => onOpenLegal('terms')} className="hover:text-[#2563EB] cursor-pointer transition-colors text-left">{t.footer.terms}</button></li>
            <li><button onClick={() => handleNavClick('pricing')} className="hover:text-[#2563EB] transition-colors text-left cursor-pointer">{t.nav.pricing}</button></li>
            <li><button onClick={onRequestDemo} className="text-[#2563EB] hover:underline transition-colors text-left cursor-pointer font-medium">{t.common.demoBtn}</button></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-[#0F172A] font-semibold text-xs tracking-wider uppercase">{t.footer.contact}</h4>
          <ul className="space-y-3 text-xs leading-relaxed text-[#475569]">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>{t.footer.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-[#0F172A] transition-colors">{contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="text-[#475569]">&copy; {new Date().getFullYear()} H+ Healthcare Platform. {t.footer.rights}</span>
        <div className="flex gap-4 text-[#475569]">
          <span>{t.common.demoModalCountries.uzbekistan} &bull; {t.common.demoModalCountries.kazakhstan} &bull; {t.common.demoModalCountries.kyrgyzstan} &bull; {t.common.demoModalCountries.tajikistan}</span>
        </div>
      </div>
    </footer>
  );
}
