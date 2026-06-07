import React from 'react';
import { motion } from 'motion/react';
import { 
  PiggyBank, LineChart, Target, Rocket, Layers, Users, TrendingUp, Lightbulb, Check 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface InvestorsProps {
  lang: Language;
}

export default function Investors({ lang }: InvestorsProps) {
  const t = translations[lang];

  const fundsAllocation = [
    {
      title: t.investors.useOfFunds.development.title,
      desc: t.investors.useOfFunds.development.desc,
      percentage: "40%",
      width: "w-[40%]",
      color: "from-sky-500 to-sky-400"
    },
    {
      title: t.investors.useOfFunds.team.title,
      desc: t.investors.useOfFunds.team.desc,
      percentage: "25%",
      width: "w-[25%]",
      color: "from-blue-500 to-blue-400"
    },
    {
      title: t.investors.useOfFunds.marketing.title,
      desc: t.investors.useOfFunds.marketing.desc,
      percentage: "20%",
      width: "w-[20%]",
      color: "from-sky-400 to-cyan-300"
    },
    {
      title: t.investors.useOfFunds.operations.title,
      desc: t.investors.useOfFunds.operations.desc,
      percentage: "15%",
      width: "w-[15%]",
      color: "from-sky-500 to-blue-500"
    }
  ];

  const milestones = [
    t.investors.milestones.m1,
    t.investors.milestones.m2,
    t.investors.milestones.m3,
    t.investors.milestones.m4
  ];

  return (
    <div id="investors-view" className="relative bg-[#050B14] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial overlays */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Headings */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block">{t.nav.investors} SEED ROUND</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-white animate-fade-in">
          {t.investors.headline}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          {t.investors.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left COLUMN: Seed round card & Thesis */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Seed Target highlights */}
          <div className="p-6 md:p-8 bg-sky-500/[0.02] border border-sky-500/20 rounded-2xl relative shadow-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-4.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <PiggyBank className="w-6 h-6" />
               </div>
              <div>
                <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">ACTIVE CAPITAL RAISE</span>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono">{t.investors.funding.target}</h3>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-1">
              {t.investors.funding.targetDesc}
            </p>
          </div>

          {/* Investment Thesis block */}
          <div className="bg-[#0D1527] border border-white/5 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-sky-400">
              <Lightbulb className="w-5 h-5" />
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.investors.funding.thesisTitle}</h4>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {t.investors.funding.thesisDesc}
            </p>
          </div>

        </div>

        {/* Right COLUMN: Use of Funds charts & Milestones */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* Progress gauge chart for Allocation */}
          <div className="bg-[#0D1527] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
            <span className="text-xs uppercase font-bold text-gray-500 tracking-wider block">
              {t.investors.funding.allocationTitle}
            </span>
            <div className="space-y-4">
              {fundsAllocation.map((f, i) => (
                <div key={i} className="space-y-1.5 group">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-300 font-semibold group-hover:text-white transition-colors">{f.title}</span>
                    <span className="text-sky-400 font-bold font-mono text-sm">{f.percentage}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full p-[1px] overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${f.color} transition-all duration-300 ${f.width}`} />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed pl-1">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones checklists */}
          <div className="p-6 md:p-8 bg-[#0D1527] border border-white/5 rounded-2xl space-y-5">
            <span className="text-xs uppercase font-bold text-sky-400 tracking-wider block">
              {t.investors.milestones.title} (GTM Path)
            </span>
            <div className="space-y-3.5">
              {milestones.map((milestone, mIdx) => (
                <div key={mIdx} className="flex gap-3 text-xs leading-relaxed text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
