import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Eye, Compass, Trophy, Linkedin, Mail, CheckCircle2, ChevronRight, Bookmark 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface CompanyProps {
  lang: Language;
}

export default function Company({ lang }: CompanyProps) {
  const t = translations[lang];

  const team = [
    {
      name: t.company.team.member1.name,
      role: t.company.team.member1.role,
      bio: t.company.team.member1.bio,
      alias: "DR",
      linkedin: "https://linkedin.com"
    },
    {
      name: t.company.team.member2.name,
      role: t.company.team.member2.role,
      bio: t.company.team.member2.bio,
      alias: "SA",
      linkedin: "https://linkedin.com"
    },
    {
      name: t.company.team.member3.name,
      role: t.company.team.member3.role,
      bio: t.company.team.member3.bio,
      alias: "KT",
      linkedin: "https://linkedin.com"
    }
  ];

  const roadmap = [
    {
      quarter: t.company.roadmap.q3_2025.quarter,
      title: t.company.roadmap.q3_2025.title,
      desc: t.company.roadmap.q3_2025.desc,
      status: 'completed' as const
    },
    {
      quarter: t.company.roadmap.q4_2025.quarter,
      title: t.company.roadmap.q4_2025.title,
      desc: t.company.roadmap.q4_2025.desc,
      status: 'current' as const
    },
    {
      quarter: t.company.roadmap.q1_2026.quarter,
      title: t.company.roadmap.q1_2026.title,
      desc: t.company.roadmap.q1_2026.desc,
      status: 'future' as const
    },
    {
      quarter: t.company.roadmap.h2_2026.quarter,
      title: t.company.roadmap.h2_2026.title,
      desc: t.company.roadmap.h2_2026.desc,
      status: 'future' as const
    }
  ];

  return (
    <div id="company-view" className="relative bg-[#050B14] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow vector overlays */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Headings */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block">{t.nav.company} DIRECTORY</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-white animate-fade-in">
          {t.company.headline}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          {t.company.subheadline}
        </p>
      </div>

      {/* Mission & Vision blocks split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" id="company-mission-vision">
        
        {/* Mission */}
        <div className="bg-[#0D1527] border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden text-left flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">{t.company.mission.title}</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {t.company.mission.desc}
            </p>
          </div>
          <div className="h-1 bg-gradient-to-r from-sky-500 to-blue-600 opacity-40 mt-6 rounded-full w-24" />
        </div>

        {/* Vision */}
        <div className="bg-[#0D1527] border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden text-left flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">{t.company.vision.title}</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {t.company.vision.desc}
            </p>
          </div>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-sky-400 opacity-40 mt-6 rounded-full w-24" />
        </div>

      </div>

      {/* Leadership Team Block */}
      <div className="space-y-10 mb-20">
        <div className="text-left space-y-2 max-w-md">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-wider block">BOARD OF DIRECTORS</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">{t.company.team.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="company-team-grid">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/5 bg-[#0D1527] hover:border-sky-500/20 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Placeholder for Team heads */}
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {member.alias}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 pointer-events-none" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-white font-bold text-base leading-none">{member.name}</h4>
                  <span className="text-sky-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider block pt-0.5">{member.role}</span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed min-h-[72px] md:min-h-[80px]">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-sky-500/15 text-gray-500 hover:text-sky-400 flex items-center justify-center transition-colors"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Interactive visual continuous timeline roadmap */}
      <div className="space-y-12 text-left bg-[#0D1527] border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden" id="company-roadmap-timeline">
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="space-y-2">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-wider block">CHRONOLOGY METRICS</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">{t.company.roadmap.title}</h2>
        </div>

        {/* Vertical Stepper layout */}
        <div className="relative border-l border-white/10 ml-4 py-2 space-y-8 max-w-4xl">
          {roadmap.map((item, roadmapIdx) => (
            <div key={roadmapIdx} className="relative pl-8 group">
              
              {/* Connector Node Dot */}
              <div className={`absolute -left-[9.5px] top-1 w-[18px] h-[18px] rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                item.status === 'completed'
                  ? 'bg-sky-500 border-[#050B14] ring-4 ring-sky-500/10'
                  : item.status === 'current'
                    ? 'bg-amber-400 border-[#050B14] ring-4 ring-amber-500/10 animate-pulse'
                    : 'bg-gray-800 border-white/10'
              }`} />

              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-sm font-bold text-white font-mono bg-white/5 py-0.5 px-2 rounded-md">
                    {item.quarter}
                  </span>
                  
                  {item.status === 'completed' && (
                    <span className="text-[9px] bg-sky-500/15 text-sky-400 font-extrabold uppercase px-2 py-0.5 rounded-full border border-sky-500/20">Completed</span>
                  )}
                  {item.status === 'current' && (
                    <span className="text-[9px] bg-amber-500/15 text-amber-500 font-extrabold uppercase px-2 py-0.5 rounded-full border border-amber-500/20">Active Focus</span>
                  )}
                  {item.status === 'future' && (
                    <span className="text-[9px] bg-white/5 text-gray-500 font-extrabold uppercase px-2 py-0.5 rounded-full">Coming Next</span>
                  )}
                </div>

                <div>
                  <h4 className="text-white font-bold text-base md:text-lg group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-2xl mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
