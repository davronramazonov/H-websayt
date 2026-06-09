import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ClipboardCheck, GitGraph, Layers, Server, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TractionProps {
  lang: Language;
}

const metricCards = [
  { key: 'concept', icon: Sparkles },
  { key: 'architecture', icon: Server },
  { key: 'prototype', icon: GitGraph },
  { key: 'pilot', icon: ShieldCheck },
] as const;

const progressIcons = [ClipboardCheck, Layers, GitGraph, CheckCircle2, ShieldCheck] as const;

const statusStyles = [
  'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  'border-sky-400/30 bg-sky-400/10 text-sky-200',
  'border-amber-400/30 bg-amber-400/10 text-amber-200',
  'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  'border-slate-500/40 bg-slate-500/10 text-slate-200',
] as const;

export default function Traction({ lang }: TractionProps) {
  const t = translations[lang];

  return (
    <div className="bg-[#020617] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-end mb-10 md:mb-14"
        >
          <div className="space-y-5 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">{t.traction.eyebrow}</span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                {t.traction.statusBadge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
              {t.traction.headline}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {t.traction.subheadline}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 shadow-2xl shadow-emerald-950/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-300/20 flex items-center justify-center text-emerald-300 shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <p className="text-sm leading-relaxed text-slate-200">{t.traction.statusNote}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16">
          {metricCards.map((metric, index) => {
            const Icon = metric.icon;
            const item = t.traction.metrics[metric.key];

            return (
              <motion.div
                key={metric.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="min-h-[190px] rounded-2xl border border-white/10 bg-white/[0.045] p-5 md:p-6 shadow-lg shadow-black/20"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-300/20 flex items-center justify-center text-emerald-300 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-white">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-3">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:p-8 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7 md:mb-9 text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.traction.progress.headline}</h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3 max-w-2xl">{t.traction.progress.subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {t.traction.progress.items.map((item: { label: string; title: string; desc: string; status: string }, index: number) => {
              const Icon = progressIcons[index] ?? ClipboardCheck;

              return (
                <motion.div
                  key={`${item.label}-${item.title}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="relative rounded-2xl border border-white/10 bg-[#08111f] p-5 text-left"
                >
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-bold text-emerald-300">{item.label}</span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[index] ?? statusStyles[0]}`}>
                    {item.status}
                  </span>
                  <h3 className="text-base font-bold text-white mt-4">{item.title}</h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-2">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 items-start">
          <div className="text-left">
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">{t.traction.validation.headline}</span>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4">{t.traction.validation.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.traction.validation.items.map((item: { title: string; desc: string }, index: number) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-300/20 flex items-center justify-center text-emerald-300 mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm md:text-base">{item.title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="mt-8 md:mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 md:p-6 text-left">
          <h3 className="text-amber-100 font-bold text-base md:text-lg">{t.traction.disclaimer.title}</h3>
          <p className="text-amber-50/80 text-sm leading-relaxed mt-2">{t.traction.disclaimer.desc}</p>
        </div>
      </div>
    </div>
  );
}
