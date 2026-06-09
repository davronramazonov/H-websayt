import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Eye, Lightbulb, ShieldCheck, Sparkles, Trophy, UserCircle, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import davronImage from '../../assets/davron.jpg';
import islombekImage from '../../assets/islombek.jpg';
import lucianoImage from '../../assets/luciano.jpg';

interface CompanyProps {
  lang: Language;
}

const teamIds = ['davron', 'islombek', 'ulugbek', 'luciano'] as const;
const teamImages = {
  islombek: islombekImage,
  davron: davronImage,
  ulugbek: '/team/ulugbek.jpg',
  luciano: lucianoImage,
} as const;

const portraitPositions: Record<(typeof teamIds)[number], string> = {
  islombek: 'center 22%',
  davron: 'center 20%',
  ulugbek: 'center 28%',
  luciano: 'center 18%',
};
const storyIds = ['islombek', 'davron'] as const;
const valueIcons = [Sparkles, Compass, ShieldCheck, Trophy] as const;

type TeamId = (typeof teamIds)[number];
type StoryId = (typeof storyIds)[number];
type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  imageAlt: string;
};
type JourneyItem = {
  label: string;
  title: string;
  desc: string;
  status: string;
};
type ValueItem = {
  title: string;
  desc: string;
};

function TeamPortrait({ id, member }: { id: TeamId; member: TeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-sky-400/10 border border-sky-300/20 flex items-center justify-center text-2xl font-bold text-sky-100 shrink-0">
      {!imageFailed && (
        <img
          src={teamImages[id]}
          alt={member.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: portraitPositions[id] }}
          onError={() => setImageFailed(true)}
        />
      )}
      {imageFailed && (
        <div className="flex flex-col items-center justify-center gap-1">
          <UserCircle className="w-9 h-9 text-sky-200" />
          <span>{member.initials}</span>
        </div>
      )}
    </div>
  );
}

function statusClass(index: number) {
  if (index < 2) return 'border-sky-300/30 bg-sky-400/10 text-sky-100';
  if (index === 2) return 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100';
  return 'border-amber-300/30 bg-amber-400/10 text-amber-100';
}

export default function Company({ lang }: CompanyProps) {
  const t = translations[lang];
  const members = t.company.team.members as Record<TeamId, TeamMember>;
  const journeyItems = t.company.journey.items as JourneyItem[];
  const valueItems = t.company.values.items as ValueItem[];

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
              <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">{t.company.eyebrow}</span>
              <span className="rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-100">
                {t.company.statusBadge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
              {t.company.headline}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {t.company.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              { icon: Compass, content: t.company.mission },
              { icon: Eye, content: t.company.vision },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.content.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left">
                  <div className="w-11 h-11 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-white">{item.content.title}</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2">{item.content.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <section className="mb-12 md:mb-16">
          <div className="text-left max-w-3xl mb-7 md:mb-9">
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">{t.company.team.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-3">{t.company.team.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">{t.company.team.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {teamIds.map((id, index) => {
              const member = members[id];
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left min-h-[360px] flex flex-col"
                >
                  <TeamPortrait id={id} member={member} />
                  <div className="mt-5">
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                    <p className="text-sky-200 text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mt-4">{member.bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mb-12 md:mb-16 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:p-8">
          <div className="text-left max-w-3xl mb-7">
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">{t.company.founderStory.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-3">{t.company.founderStory.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">{t.company.founderStory.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {storyIds.map((id) => (
              <div key={id} className="rounded-2xl border border-white/10 bg-[#08111f] p-5 md:p-6 text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 mb-4">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{t.company.founderStory[id as StoryId].title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-3">{t.company.founderStory[id as StoryId].desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="text-left max-w-3xl mb-7">
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">{t.company.journey.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-3">{t.company.journey.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">{t.company.journey.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {journeyItems.map((item, index) => (
              <motion.div
                key={`${item.label}-${item.title}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sky-300 text-xs font-bold">{item.label}</span>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusClass(index)}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mt-5">{item.title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8 md:mb-10">
          <div className="text-left max-w-3xl mb-7">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.company.values.title}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">{t.company.values.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {valueItems.map((item, index) => {
              const Icon = valueIcons[index] ?? Users;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-sky-300/10 border border-sky-300/20 flex items-center justify-center text-sky-200 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 md:p-6 text-left">
          <h3 className="text-amber-100 font-bold text-base md:text-lg">{t.company.disclaimer.title}</h3>
          <p className="text-amber-50/80 text-sm leading-relaxed mt-2">{t.company.disclaimer.desc}</p>
        </div>
      </div>
    </div>
  );
}
