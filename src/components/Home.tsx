import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, Clock, LayoutDashboard, Brain, FileText, Smartphone, Network, 
  MapPin, Users, Activity, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Zap
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface HomeProps {
  lang: Language;
  setActivePage: (page: PageId) => void;
  onRequestDemo: () => void;
}

export default function Home({ lang, setActivePage, onRequestDemo }: HomeProps) {
  const t = translations[lang];

  // Target audience keys matched with translation cards
  const targetCountries = [
    { name: t.market.countriesData.uzbekistan.name, flag: "🇺🇿", status: "Active Pilots" },
    { name: t.market.countriesData.kazakhstan.name, flag: "🇰🇿", status: "Waitlist Launch" },
    { name: t.market.countriesData.kyrgyzstan.name, flag: "🇰🇬", status: "Expansion 2026" },
    { name: t.market.countriesData.tajikistan.name, flag: "🇹🇯", status: "Expansion 2026" }
  ];

  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-sky-400" />,
      title: t.product.modules.queue.title,
      desc: t.product.modules.queue.desc,
      page: 'product' as PageId
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-400" />,
      title: t.product.modules.clinic.title,
      desc: t.product.modules.clinic.desc,
      page: 'product' as PageId
    },
    {
      icon: <FileText className="w-6 h-6 text-sky-400" />,
      title: t.product.modules.ehr.title,
      desc: t.product.modules.ehr.desc,
      page: 'product' as PageId
    },
    {
      icon: <Brain className="w-6 h-6 text-sky-400" />,
      title: t.product.modules.ai.title,
      desc: t.product.modules.ai.desc,
      page: 'product' as PageId
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-400" />,
      title: t.product.modules.app.title,
      desc: t.product.modules.app.desc,
      page: 'product' as PageId
    },
    {
      icon: <Network className="w-6 h-6 text-sky-400" />,
      title: t.product.modules.integrations.title,
      desc: t.product.modules.integrations.desc,
      page: 'product' as PageId
    }
  ];

  return (
    <div id="home-view" className="relative min-h-screen bg-[#050B14] text-white">
      {/* Background radial overlays for premium ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-20 md:pt-16 md:pb-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Announcement badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.1] text-white"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-blue-400">Operating System</span> for Healthcare in Central Asia
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <button
                id="hero-demo-btn"
                onClick={onRequestDemo}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm tracking-tight transition-all hover:opacity-90 shadow-[0_4px_24px_rgba(14,165,233,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                {t.common.demoBtn}
              </button>
              <button
                id="hero-partner-btn"
                onClick={() => setActivePage('investors')}
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-tight transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.common.partnerBtn}</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </motion.div>

            {/* Target countries slider */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <span className="text-xs uppercase font-bold text-gray-500 tracking-wider block">
                {t.common.countries}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {targetCountries.map((c, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActivePage('market')}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-500/20 hover:bg-sky-500/[0.01] transition-all cursor-pointer text-left group"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">{c.flag}</span>
                      <span className="text-xs font-semibold text-white group-hover:text-sky-400 transition-colors">{c.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded-md block w-fit">
                      {c.status}
                    </span>
                   </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: High-Fidelity Interactive Dashboard and Phone Presentation */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', duration: 0.8 }}
              className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[480px] rounded-2xl bg-white/[0.01] border border-white/5 p-6 flex items-center justify-center overflow-hidden"
            >
              
              {/* Layout Backdrop Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-sky-500/10 to-transparent pointer-events-none" />

              {/* 1. Laptop Dashboard Mockup */}
              <div className="absolute inset-x-6 top-8 h-[260px] bg-[#0E1726] border border-sky-500/20 rounded-xl shadow-2xl p-4 overflow-hidden transform -rotate-2 select-none">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-sky-500/10 text-[10px] text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="font-mono text-[9px] bg-white/5 px-2 py-0.5 rounded ml-2">h-operating-system.io</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-sky-400 animate-pulse" />
                    <span>H+ Server Live</span>
                  </div>
                </div>

                {/* Simulated Content */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="col-span-2 space-y-2">
                    <div className="h-10 rounded-lg bg-white/5 border border-white/5 p-2 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Active Queue</span>
                        <div className="flex items-center gap-2">
                          <span className="text-semibold text-white text-xs">18 Patients In line</span>
                        </div>
                      </div>
                      <ChevronRightGlow />
                    </div>
                    <div className="h-10 rounded-lg bg-white/5 border border-white/5 p-2 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Doctor Availability</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                          <span className="text-[10px] text-gray-300">12 Clinicians Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 rounded-lg bg-sky-500/5 border border-sky-500/10 p-2 text-center flex flex-col justify-between">
                    <span className="text-[8px] text-sky-400 font-bold uppercase">Uptime Ratio</span>
                    <span className="text-xl font-bold text-white tracking-tight">99.9%</span>
                    <span className="text-[7px] text-gray-400">HIPAA Compliant</span>
                  </div>
                </div>

                {/* Embedded Graph representation */}
                <div className="mt-3 h-20 rounded-lg bg-[#050B14] border border-white/5 p-2 flex flex-col justify-between">
                  <span className="text-[7px] text-gray-500 uppercase font-bold tracking-wider">Clinic Growth Index (Tashkent Pilot 1)</span>
                  <div className="flex items-end gap-1.5 h-12 pt-2">
                    <div className="w-full bg-[#0099FF]/30 h-[20%] rounded-sm" />
                    <div className="w-full bg-[#0099FF]/40 h-[40%] rounded-sm" />
                    <div className="w-full bg-[#0099FF]/50 h-[35%] rounded-sm animate-pulse" />
                    <div className="w-full bg-[#0099FF]/70 h-[65%] rounded-sm animate-pulse" />
                    <div className="w-full bg-sky-400 h-[92%] rounded-sm shadow-[0_0_8px_rgba(14,165,233,0.3)]" />
                  </div>
                </div>
              </div>

              {/* 2. Overlapping Patient Mobile App Mockup */}
              <div className="absolute right-6 bottom-4 w-[160px] h-[250px] bg-[#050B14] border border-sky-500/30 rounded-2xl shadow-3xl p-3 transform rotate-6 select-none flex flex-col justify-between">
                <div>
                  {/* Phone Notch */}
                  <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
                  
                  {/* Card title */}
                  <div className="flex items-center justify-between text-[8px] text-gray-400 mb-2">
                    <span className="font-semibold text-white">H+ Patient App</span>
                    <span>12:45 🔋</span>
                  </div>

                  {/* Booking interface simulation */}
                  <div className="bg-sky-500/10 border border-sky-500/25 rounded-lg p-2 space-y-1">
                    <span className="text-[6px] uppercase font-bold text-sky-400">Next Booking</span>
                    <span className="text-[9px] font-bold text-white block">Dr. Nodir Aliev</span>
                    <span className="text-[7px] text-gray-300 block">Chief Surgeon • Orthopedics</span>
                    
                    <div className="flex gap-1 pt-1">
                      <span className="text-[7px] bg-sky-500 text-white font-semibold px-2 py-0.5 rounded-full">14:00</span>
                      <span className="text-[7px] bg-white/10 text-white px-2 py-0.5 rounded-full">Tomorrow</span>
                    </div>
                  </div>
                </div>

                {/* Live queue tracker inside mobile */}
                <div className="space-y-1.5">
                  <div className="h-0.5 bg-white/5 w-full" />
                  <div className="flex items-center justify-between text-[7px] text-gray-400">
                    <span>Active Queue Line</span>
                    <span className="text-sky-400 font-semibold">2 min wait</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-sky-400" />
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute left-8 bottom-8 bg-[#0D1527] border border-sky-500/20 rounded-lg p-2.5 shadow-2xl flex items-center gap-2 transform -rotate-3 animate-bounce shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <div className="flex flex-col text-[8px] font-sans">
                  <span className="font-bold text-white">SECURE RECORD</span>
                  <span className="text-gray-400 font-mono">MD-EHR Standard v2</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* Trust Quote / Stats Strip */}
      <section className="bg-white/[0.01] border-y border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase font-bold text-gray-500 tracking-widest mb-6">
            {t.hero.trustedClinics}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-2xl sm:text-3xl font-bold text-white block">15,000+</span>
              <span className="text-xs text-gray-400">{t.hero.stats.registered}</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-2xl sm:text-3xl font-bold text-sky-400 block">8+</span>
              <span className="text-xs text-gray-400">{t.hero.stats.clinics}</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-2xl sm:text-3xl font-bold text-white block">2.4M+</span>
              <span className="text-xs text-gray-400">{t.hero.stats.transactions}</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-2xl sm:text-3xl font-bold text-sky-400 block">99.9%</span>
              <span className="text-xs text-gray-400">{t.hero.stats.uptime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid Section */}
      <section id="features-grid" className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block">{t.nav.product}</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            {t.product.headline}
          </h2>
          <p className="text-gray-400 text-sm sm:text-md">
            {t.product.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              onClick={() => setActivePage(f.page)}
              className="group p-6 rounded-2xl bg-[#0D1527] border border-white/5 hover:border-sky-500/20 hover:bg-sky-500/[0.01] transition-all text-left duration-300 relative overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.05)]"
            >
              {/* Card visual ambient glow on Hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors duration-300 pointer-events-none" />
              
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center border border-sky-500/20 mb-5 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              
              <h3 className="text-white text-lg font-semibold tracking-tight mb-2 group-hover:text-sky-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                {f.desc}
              </p>
              
              <div className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>{t.common.learnMore}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audiences Quick presentation */}
      <section id="audiences" className="px-4 sm:px-6 lg:px-8 py-12 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <div className="space-y-4 text-left">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">{t.common.audience}</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Connective Cloud Infrastructure for Every Stakeholder
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              H+ consolidates the decentralized medical paths of Central Asia — eliminating errors, reducing billing bottlenecks, and making diagnostics faster.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setActivePage('solutions')}
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:underline font-semibold cursor-pointer"
              >
                <span>Check all customized solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#0D1527] border border-white/5 text-left">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold mb-3">1</div>
              <h4 className="text-white font-semibold text-sm mb-1">{t.solutions.cards.clinics.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{t.solutions.cards.clinics.desc}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1527] border border-white/5 text-left">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold mb-3">2</div>
              <h4 className="text-white font-semibold text-sm mb-1">{t.solutions.cards.doctors.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{t.solutions.cards.doctors.desc}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1527] border border-white/5 text-left">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold mb-3">3</div>
              <h4 className="text-white font-semibold text-sm mb-1">{t.solutions.cards.patients.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{t.solutions.cards.patients.desc}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1527] border border-white/5 text-left">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold mb-3">4</div>
              <h4 className="text-white font-semibold text-sm mb-1">{t.solutions.cards.investors.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{t.solutions.cards.investors.desc}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

// Helper inline layouts
function ChevronRightGlow() {
  return (
    <div className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
      <ArrowRight className="w-2.5 h-2.5" />
    </div>
  );
}
