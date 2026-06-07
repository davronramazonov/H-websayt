import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, MessageSquareQuote, ShieldCheck, Zap, 
  HelpCircle, Sparkles, Server, Flame, GitGraph
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TractionProps {
  lang: Language;
}

export default function Traction({ lang }: TractionProps) {
  const t = translations[lang];

  const metricsData = [
    {
      title: t.traction.metrics.discussions,
      desc: t.traction.metrics.discussionsDesc,
      icon: <GitGraph className="w-6 h-6 text-[#00C16A]" />,
      background: "bg-[#09110d] border-gradient"
    },
    {
      title: t.traction.metrics.signed,
      desc: t.traction.metrics.signedDesc,
      icon: <Flame className="w-6 h-6 text-emerald-400" />,
      background: "bg-emerald-950/15 border-[#00C16A]/30 shadow-[0_0_15px_rgba(0,193,106,0.1)]"
    },
    {
      title: t.traction.metrics.waitlist,
      desc: t.traction.metrics.waitlistDesc,
      icon: <Sparkles className="w-6 h-6 text-[#00C16A]" />,
      background: "bg-[#09110d]"
    },
    {
      title: t.traction.metrics.mvp,
      desc: t.traction.metrics.mvpDesc,
      icon: <Server className="w-6 h-6 text-teal-400" />,
      background: "bg-[#09110d]"
    }
  ];

  return (
    <div id="traction-view" className="relative bg-[#07110C] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00C16A]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Headings */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-[#00C16A] text-xs font-bold uppercase tracking-widest block">{t.nav.traction} TO DATE</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-white">
          {t.traction.headline}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          {t.traction.subheadline}
        </p>
      </div>

      {/* Traction Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" id="traction-metrics-row">
        {metricsData.map((m, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border border-white/5 flex flex-col justify-between transition-all hover:border-[#00C16A]/20 duration-300 transform hover:-translate-y-1 ${m.background}`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-5">
              {m.icon}
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{m.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Block */}
      <div className="bg-[#09110d] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden text-left">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00C16A]/5 rounded-full blur-3xl pointer-events-none" />
        
        <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-8 text-[#00C16A]">
          {t.traction.testimonials.headline}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex text-emerald-400">
                <MessageSquareQuote className="w-8 h-8 opacity-80" />
              </div>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed italic">
                "{t.traction.testimonials.quote1}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              {/* Custom CSS Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-[#07110C] text-xs text-white">
                AQ
              </div>
              <div>
                <h4 className="text-white text-xs font-bold leading-none">{t.traction.testimonials.author1}</h4>
                <span className="text-gray-500 text-[10px] block mt-0.5">{t.traction.testimonials.position1}</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex text-[#00C16A]">
                <MessageSquareQuote className="w-8 h-8 opacity-80" />
              </div>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed italic">
                "{t.traction.testimonials.quote2}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              {/* Custom CSS Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center font-bold text-[#07110C] text-xs text-white">
                ES
              </div>
              <div>
                <h4 className="text-white text-xs font-bold leading-none">{t.traction.testimonials.author2}</h4>
                <span className="text-gray-500 text-[10px] block mt-0.5">{t.traction.testimonials.position2}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
