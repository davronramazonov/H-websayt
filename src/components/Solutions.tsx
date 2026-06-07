import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Users, HeartHandshake, ShieldCheck, Database, BarChart3, Pill, Settings2, Stethoscope, Landmark 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface SolutionsProps {
  lang: Language;
  onRequestDemo: () => void;
}

export default function Solutions({ lang, onRequestDemo }: SolutionsProps) {
  const t = translations[lang];

  const solutionsData = [
    {
      title: t.solutions.cards.clinics.title,
      desc: t.solutions.cards.clinics.desc,
      icon: <Building2 className="w-5 h-5 text-sky-400" />,
      stats: {
        uz: "30% Klinik yuklama o'sishi",
        ru: "+30% Пропускная способность",
        en: "+30% Patient Throughput"
      },
      bullets: {
        uz: ["Intellektual onlayn navbat yozilishi", "Oylik tahlillar va moliya bo'limi", "KPI shifokorlar ishini baholash"],
        ru: ["Умная онлайн-очередь", "Анализ финансов и доходов", "Учет KPI медицинского персонала"],
        en: ["Smart Queue scheduling algorithms", "Revenue & financial analysis dashboard", "Rosters & clinician KPI trackers"]
      }
    },
    {
      title: t.solutions.cards.doctors.title,
      desc: t.solutions.cards.doctors.desc,
      icon: <Stethoscope className="w-5 h-5 text-sky-400" />,
      stats: {
        uz: "-90% Ortiqcha qog'ozbozlik",
        ru: "-90% Бумажной рутины",
        en: "-90% Redundant Transcription"
      },
      bullets: {
        uz: ["Elektron Tibbiyot Kartalari (EHR)", "Retseptlarni cheksiz avtomatik rasmda jo'natish", "Shaxsiy shifokorlar jadvali boshqarilishi"],
        ru: ["Электронные медкарты (EHR)", "Электронные рецепты по шаблонам", "Индивидуальный график приемов"],
        en: ["Advanced Patient Charts (EHR)", "SaaS structured prescriptions templates", "Modular practitioner rosters scheduling"]
      }
    },
    {
      title: t.solutions.cards.patients.title,
      desc: t.solutions.cards.patients.desc,
      icon: <HeartHandshake className="w-5 h-5 text-sky-400" />,
      stats: {
        uz: "1-Click shifokorga yozilish",
        ru: "Запись в 1 клик",
        en: "1-Click Medical booking"
      },
      bullets: {
        uz: ["Bemorning to'liq kasallik tahlili mobil tasviri", "Onlayn kutish vaqtini o'lchash", "Lab natijalari real vaqtda yangilanishi"],
        ru: ["Полная история болезни в телефоне", "Онлайн-отслеживание очереди", "Результаты анализов в реальном времени"],
        en: ["Unified medical pocket histories", "Live cloud queue position trackers", "Real-time laboratory results feed"]
      }
    },
    {
      title: t.solutions.cards.investors.title,
      desc: t.solutions.cards.investors.desc,
      icon: <Landmark className="w-5 h-5 text-sky-400" />,
      stats: {
        uz: "Yillik 50%+ Bozorda o'sish",
        ru: "+50% Рыночный потенциал",
        en: "+50% CAGR Regional Expansion"
      },
      bullets: {
        uz: ["$4.1 Mlrdlik raqamlashtirish bozor", "Eng yirik Toshkent / Olmati klinika tarmoqlari", "Kompaniya ARR tezkor o'sishi"],
        ru: ["Рынок HealthTech в $4.1 млрд", "Крупные сети Ташкента и Алматы", "Быстрорастущий показатель ARR"],
        en: ["$4.1B untapped digitization opportunities", "Integrated networks in Tashkent & Almaty", "Substantial ARR expansion margins"]
      }
    }
  ];

  return (
    <div className="relative bg-[#050B14] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow layers */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Headings */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block">{t.nav.solutions} TAILORED STACKS</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-white animate-fade-in">
          {t.solutions.headline}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          {t.solutions.subheadline}
        </p>
      </div>

      {/* Solutions Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="solutions-profiles-grid">
        {solutionsData.map((s, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0D1527] hover:border-sky-500/20 transition-all duration-300 text-left flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1 font-bold">
                  {s.stats[lang]}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-white">{s.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="h-[1px] bg-white/5 w-full font-mono" />

              {/* Sub features list */}
              <div className="space-y-2.5">
                {s.bullets[lang].map((item, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-8">
              <button
                id={`solutions-cta-btn-${idx}`}
                onClick={onRequestDemo}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-semibold tracking-tight transition-all text-center w-fit cursor-pointer"
              >
                {t.common.demoBtn}
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* State Healthcare integration summary banner */}
      <div className="mt-16 p-6 md:p-10 bg-sky-500/[0.02] border border-sky-500/20 rounded-3xl text-left relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-3 max-w-2xl">
          <span className="text-[10px] text-sky-400 uppercase font-bold tracking-wider">{t.solutions.cards.government.title}</span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Enforcing Regulatory Transparency & Compliance
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            {t.solutions.cards.government.desc}
          </p>
        </div>

        <button
          id="government-banner-btn"
          onClick={onRequestDemo}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs tracking-tight transition-all hover:scale-105 shrink-0 cursor-pointer"
        >
          {t.common.contactUs}
        </button>
      </div>

    </div>
  );
}
