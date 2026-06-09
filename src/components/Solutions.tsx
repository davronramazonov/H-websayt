import { Building2, CheckCircle2, Database, HeartHandshake, Landmark, Stethoscope } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface SolutionsProps {
  lang: Language;
  onRequestDemo: () => void;
}

type SolutionKey = 'clinics' | 'doctors' | 'patients' | 'partners' | 'government';

export default function Solutions({ lang, onRequestDemo }: SolutionsProps) {
  const t = translations[lang];

  const solutionCards = [
    { key: 'clinics', icon: Building2 },
    { key: 'doctors', icon: Stethoscope },
    { key: 'patients', icon: HeartHandshake },
    { key: 'partners', icon: Database },
    { key: 'government', icon: Landmark },
  ] as const satisfies ReadonlyArray<{ key: SolutionKey; icon: typeof Building2 }>;

  return (
    <div className="bg-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-4">
          <span className="w-8 h-px bg-[#2563EB]" />
          <span>{t.solutions.eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] max-w-3xl">
          {t.solutions.headline}
        </h1>
        <p className="text-[#475569] text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
          {t.solutions.subheadline}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {solutionCards.map(({ key, icon: Icon }) => {
          const card = t.solutions.cards[key];
          return (
            <article
              key={key}
              className="rounded-2xl border border-[#1E293B] bg-[#0F172A] p-5 md:p-6 text-left shadow-sm transition-all duration-300 hover:border-[#2563EB]/70"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center text-[#93C5FD]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#93C5FD] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  {card.tag}
                </span>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-white">{card.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                {card.bullets.map((item: string) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#93C5FD] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-12 md:mt-16 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 md:p-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0F172A]">{t.solutions.workflow.title}</h2>
          <p className="text-[#475569] text-sm leading-relaxed mt-2">{t.solutions.workflow.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {t.solutions.workflow.items.map((item: { problem: string; solution: string; result: string }, idx: number) => (
            <article key={idx} className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-left">
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] flex items-center justify-center text-xs font-bold mb-4">
                {idx + 1}
              </div>
              <WorkflowLine label={t.solutions.workflow.labels.problem} text={item.problem} />
              <WorkflowLine label={t.solutions.workflow.labels.solution} text={item.solution} />
              <WorkflowLine label={t.solutions.workflow.labels.result} text={item.result} />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-16 p-5 md:p-8 bg-[#0F172A] border border-[#1E293B] rounded-2xl text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs text-[#93C5FD] uppercase font-bold tracking-wider">{t.solutions.banner.eyebrow}</span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{t.solutions.banner.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{t.solutions.banner.desc}</p>
        </div>
        <button
          onClick={onRequestDemo}
          className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm tracking-tight transition-all shrink-0 cursor-pointer shadow-sm"
        >
          {t.common.contactUs}
        </button>
      </section>
    </div>
  );
}

function WorkflowLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="mb-3 last:mb-0">
      <span className="text-[10px] uppercase font-bold tracking-wider text-[#2563EB]">{label}</span>
      <p className="text-xs text-[#475569] leading-relaxed mt-1">{text}</p>
    </div>
  );
}
