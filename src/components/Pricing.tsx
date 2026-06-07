import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, BadgeAlert, Sparkles, Send } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingProps {
  lang: Language;
  onRequestDemo: () => void;
}

export default function Pricing({ lang, onRequestDemo }: PricingProps) {
  const t = translations[lang];
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('annually');

  const plans = [
    {
      id: 'starter',
      name: t.pricing.starter.name,
      priceMonthly: "$49",
      priceAnnually: "$39",
      desc: t.pricing.starter.desc,
      features: t.pricing.starter.features,
      isPopular: false,
      glow: "border-white/5 bg-[#0D1527]"
    },
    {
      id: 'growth',
      name: t.pricing.growth.name,
      priceMonthly: "$149",
      priceAnnually: "$119",
      desc: t.pricing.growth.desc,
      features: t.pricing.growth.features,
      isPopular: true,
      glow: "border-sky-500/30 bg-[#0A1224] shadow-[0_0_30px_rgba(14,165,233,0.1)]"
    },
    {
      id: 'enterprise',
      name: t.pricing.enterprise.name,
      priceMonthly: t.pricing.enterprise.price,
      priceAnnually: t.pricing.enterprise.price,
      desc: t.pricing.enterprise.desc,
      features: t.pricing.enterprise.features,
      isPopular: false,
      glow: "border-white/5 bg-[#0D1527]"
    }
  ];

  return (
    <div id="pricing-view" className="relative bg-[#050B14] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Headings */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block">{t.nav.pricing} MANAGEMENT</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-white animate-fade-in">
          {t.pricing.headline}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          {t.pricing.subheadline}
        </p>

        {/* Dynamic Billing Toggle element */}
        <div className="pt-6 flex justify-center items-center gap-3">
          <span className={`text-xs font-semibold ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
            {t.pricing.billingToggle.monthly}
          </span>
          <button
            id="billing-period-toggle"
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
            className="w-12 h-6.5 rounded-full bg-white/10 p-[2.5px] relative transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle billing subscription period"
          >
            <motion.div
              layout
              className="w-5.5 h-5.5 rounded-full bg-sky-500"
              animate={{ x: billingPeriod === 'annually' ? 22 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-xs font-semibold ${billingPeriod === 'annually' ? 'text-sky-400' : 'text-gray-500'} flex items-center gap-1.5`}>
            <span>{t.pricing.billingToggle.annually}</span>
            <span className="bg-sky-500/10 text-sky-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">Save 20%</span>
          </span>
        </div>
      </div>

      {/* Pricing cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6" id="pricing-plans-grid">
        {plans.map((p) => {
          const price = billingPeriod === 'annually' ? p.priceAnnually : p.priceMonthly;

          return (
            <div
              key={p.id}
              className={`p-6 md:p-8 rounded-2xl border text-left flex flex-col justify-between relative overflow-hidden transition-all hover:border-sky-500/20 duration-300 ${p.glow}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

              {p.isPopular && (
                <div className="absolute top-4 right-4 bg-sky-500/15 text-sky-400 text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-sky-500/20 tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.common.popular}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white mb-1.5">{p.name}</h3>
                  <p className="text-gray-400 text-xs min-h-[32px]">{p.desc}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-mono">
                    {price}
                  </span>
                  {p.id !== 'enterprise' && (
                    <span className="text-gray-500 text-xs font-semibold">
                      {t.common.perMonth}
                    </span>
                  )}
                </div>

                <div className="h-[1px] bg-white/5 w-full" />

                {/* Features checklists */}
                <div className="space-y-3.5">
                  {p.features.map((feat: string, fIdx: number) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Demo callback action */}
              <div className="pt-8 mt-auto">
                <button
                  id={`pricing-plan-btn-${p.id}`}
                  onClick={onRequestDemo}
                  className={`w-full py-3 rounded-lg font-semibold text-xs tracking-tight transition-all text-center cursor-pointer flex items-center justify-center gap-2 ${
                    p.isPopular
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold shadow-[0_0_20px_rgba(14,165,233,0.2)]'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  <span>{t.common.getStarted}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
