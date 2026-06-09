import { motion } from 'motion/react';
import { AlertTriangle, Check, FileText, Lightbulb, PiggyBank, Rocket, ShieldCheck, Target, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface InvestorsProps {
  lang: Language;
}

const fundIds = ['product', 'pilot', 'team', 'legal'] as const;
const fundWidths = {
  product: 'w-[40%]',
  pilot: 'w-[25%]',
  team: 'w-[25%]',
  legal: 'w-[10%]',
} as const;
const fundIcons = {
  product: Rocket,
  pilot: Target,
  team: Users,
  legal: ShieldCheck,
} as const;
const thesisIcons = [Lightbulb, Users, Target, FileText] as const;
const riskIcons = [AlertTriangle, ShieldCheck, FileText] as const;

type FundId = (typeof fundIds)[number];
type FundItem = {
  title: string;
  desc: string;
  percentage: string;
};
type CardItem = {
  title: string;
  desc: string;
};
type MilestoneItem = {
  label: string;
  title: string;
  desc: string;
  status: string;
};

function milestoneStatusClass(index: number) {
  return index === 0 || index === 4
    ? 'border-sky-300/30 bg-sky-400/10 text-sky-100'
    : 'border-slate-400/30 bg-slate-400/10 text-slate-200';
}

export default function Investors({ lang }: InvestorsProps) {
  const t = translations[lang];
  const funds = t.investors.useOfFunds as Record<FundId, FundItem>;
  const thesisPoints = t.investors.thesis.points as CardItem[];
  const milestones = t.investors.milestones.items as MilestoneItem[];
  const risks = t.investors.risks.items as CardItem[];

  return (
    <div className="bg-[#020617] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-end mb-10 md:mb-14"
        >
          <div className="space-y-5 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">{t.investors.eyebrow}</span>
              <span className="rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-100">
                {t.investors.statusBadge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
              {t.investors.headline}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {t.investors.subheadline}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 md:p-6 text-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 shrink-0">
                <PiggyBank className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">{t.investors.funding.targetLabel}</span>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-1">{t.investors.funding.targetValue}</h2>
                <p className="text-slate-300 text-sm leading-relaxed mt-3">{t.investors.funding.targetDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-12 md:mb-16">
          {[t.investors.opportunity, t.investors.stage].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 md:p-6 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 mb-5">
                {index === 0 ? <Lightbulb className="w-5 h-5" /> : <Target className="w-5 h-5" />}
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">{card.title}</h2>
              {'value' in card && (
                <span className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-100 mt-3">
                  {card.value}
                </span>
              )}
              <p className="text-slate-300 text-sm leading-relaxed mt-3">{card.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="mb-12 md:mb-16 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:p-8">
          <div className="text-left max-w-3xl mb-7">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.investors.thesis.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">{t.investors.thesis.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {thesisPoints.map((point, index) => {
              const Icon = thesisIcons[index] ?? Lightbulb;
              return (
                <div key={point.title} className="rounded-2xl border border-white/10 bg-[#08111f] p-5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">{point.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 md:p-6 text-left">
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">{t.investors.funding.title}</span>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-3">{t.investors.funding.allocationTitle}</h2>
            <p className="text-slate-300 text-sm leading-relaxed mt-3">{t.investors.funding.targetDesc}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 md:p-6 text-left space-y-5">
            {fundIds.map((id) => {
              const item = funds[id];
              const Icon = fundIcons[id];
              return (
                <div key={id} className="space-y-2 group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                        <p className="text-slate-300 text-xs leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-sky-200 font-bold font-mono text-sm">{item.percentage}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full bg-sky-300 transition-all duration-500 ${fundWidths[id]}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="text-left max-w-3xl mb-7">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.investors.milestones.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">{t.investors.milestones.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {milestones.map((item, index) => (
              <motion.div
                key={`${item.label}-${item.title}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sky-300 text-xs font-bold">{item.label}</span>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${milestoneStatusClass(index)}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mt-5">{item.title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8 md:mb-10 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:p-8">
          <div className="text-left max-w-3xl mb-7">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.investors.risks.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">{t.investors.risks.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {risks.map((risk, index) => {
              const Icon = riskIcons[index] ?? AlertTriangle;
              return (
                <div key={risk.title} className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-amber-300/10 border border-amber-300/20 flex items-center justify-center text-amber-100 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-amber-50 text-base">{risk.title}</h3>
                  <p className="text-amber-50/80 text-sm leading-relaxed mt-2">{risk.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-5 md:p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h3 className="text-sky-50 font-bold text-base md:text-lg">{t.investors.disclaimer.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mt-2 max-w-4xl">{t.investors.disclaimer.desc}</p>
          </div>
          <button
            type="button"
            aria-label={t.investors.cta}
            className="shrink-0 rounded-lg bg-sky-300 hover:bg-sky-200 text-[#020617] px-5 py-3 text-sm font-bold transition-colors"
          >
            {t.investors.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
