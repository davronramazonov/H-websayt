import { motion } from 'motion/react';
import { Building2, Check, Info, Layers, Network, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingProps {
  lang: Language;
  onRequestDemo: () => void;
}

const planIds = ['pilotPrep', 'clinicPilot', 'enterprise'] as const;
const planIcons = [Layers, Building2, Network] as const;
const factorIcons = [Building2, Layers, Network, ShieldCheck] as const;

type PlanId = (typeof planIds)[number];
type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
};

type Factor = {
  title: string;
  desc: string;
};

export default function Pricing({ lang, onRequestDemo }: PricingProps) {
  const t = translations[lang];
  const plans = t.pricing.plans as Record<PlanId, Plan>;
  const factors = t.pricing.factors.items as Factor[];

  return (
    <div className="bg-[#020617] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto space-y-5 mb-10 md:mb-14"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <span className="w-6 h-px bg-sky-300" />
              <span>{t.pricing.eyebrow}</span>
              <span className="w-6 h-px bg-sky-300" />
            </span>
            <span className="rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-100">
              {t.pricing.statusBadge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t.pricing.headline}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.pricing.subheadline}
          </p>
        </motion.div>

        <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-5 md:p-6 mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row items-start gap-4 text-left">
            <div className="w-11 h-11 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sky-50 text-lg font-bold tracking-tight">{t.pricing.notice.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed mt-2">{t.pricing.notice.desc}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {planIds.map((id, index) => {
            const plan = plans[id];
            const Icon = planIcons[index];
            const isRecommended = id === 'clinicPilot';

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className={`relative rounded-2xl border p-6 md:p-7 text-left flex flex-col min-h-[520px] ${
                  isRecommended
                    ? 'border-sky-300/40 bg-sky-400/[0.09] shadow-2xl shadow-sky-950/30'
                    : 'border-white/10 bg-white/[0.045] shadow-lg shadow-black/20'
                }`}
              >
                {isRecommended && (
                  <div className="absolute top-4 right-4 bg-sky-300/15 text-sky-100 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-sky-300/30 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.pricing.recommended}</span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-4">
                  <div className="pr-20 md:pr-0 lg:pr-16">
                    <h3 className="text-xl font-bold tracking-tight text-white">{plan.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">{plan.desc}</p>
                  </div>

                  <div className="pt-2">
                    <span className="block text-2xl md:text-3xl font-extrabold tracking-tight text-sky-100">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full my-6" />

                <div className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <Check className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 mt-auto">
                  <button
                    onClick={onRequestDemo}
                    aria-label={t.pricing.cta}
                    className={`w-full py-3 rounded-lg font-semibold text-sm tracking-tight transition-all text-center cursor-pointer flex items-center justify-center gap-2 ${
                      isRecommended
                        ? 'bg-sky-300 hover:bg-sky-200 text-[#020617] shadow-sm'
                        : 'bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white'
                    }`}
                  >
                    <span>{t.pricing.cta}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <section className="mt-12 md:mt-16">
          <div className="text-left mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.pricing.factors.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3 max-w-3xl">{t.pricing.factors.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {factors.map((factor, index) => {
              const Icon = factorIcons[index] ?? Layers;

              return (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">{factor.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2">{factor.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="mt-8 md:mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 md:p-6 text-left">
          <h3 className="text-amber-100 font-bold text-base md:text-lg">{t.pricing.disclaimer.title}</h3>
          <p className="text-amber-50/80 text-sm leading-relaxed mt-2">{t.pricing.disclaimer.desc}</p>
        </div>
      </div>
    </div>
  );
}
