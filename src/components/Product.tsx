import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Clock, FileText, Brain, Smartphone, Network, 
  Search, ShieldAlert, BadgeCheck, Users, RefreshCw, BarChart3, Pill, Settings
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ProductProps {
  lang: Language;
}

export default function Product({ lang }: ProductProps) {
  const t = translations[lang];
  const [activeModule, setActiveModule] = useState<'queue' | 'clinic' | 'ehr' | 'ai' | 'app' | 'integrations'>('queue');

  const modulesData = [
    {
      id: 'queue' as const,
      icon: <Calendar className="w-5 h-5" />,
      title: t.product.modules.queue.title,
      desc: t.product.modules.queue.desc,
      benefits: {
        uz: ["Kutish vaqtini 45% gacha qisqartirish", "Bemorlarni xabardor qilish SMS tizimi", " Shifokorlar vaqtini optimal taqsimlash"],
        ru: ["Сокращение ожидания на 45%", "Автоматические СМС-оповещения", "Оптимизация занятости врачей"],
        en: ["Up to 45% shorter waiting times", "Automated patient SMS notifications", "Smart clinical resource balancing"]
      }
    },
    {
      id: 'clinic' as const,
      icon: <Clock className="w-5 h-5" />,
      title: t.product.modules.clinic.title,
      desc: t.product.modules.clinic.desc,
      benefits: {
        uz: ["Soliq, moliya va hisob-kitoblar avtomatizatsiyasi", "Dori-darmon ombori nazorati", "Klinika xodimlari ish samaradorligini o'lchash (KPI)"],
        ru: ["Автоматизация налогов и финансов", "Контроль аптечного склада", "Учет KPI медицинского персонала"],
        en: ["Automated billing & financial reporting", "Pharmacy and medical drug inventories", "Staff productivity & KPI tracking"]
      }
    },
    {
      id: 'ehr' as const,
      icon: <FileText className="w-5 h-5" />,
      title: t.product.modules.ehr.title,
      desc: t.product.modules.ehr.desc,
      benefits: {
        uz: ["Xavfsiz bulutli arxivlash (HIPAA standarti)", "Tahlil natijalarining bir lahzada birikishi", "Qog'ozbozlik va xatoliklarni 90% ga kamaytirish"],
        ru: ["Безопасный облачный архив (HIPAA)", "Мгновенная выписка результатов", "Сокращение бумажной рутины на 90%"],
        en: ["HIPAA-designed cloud data archives", "Immediate diagnostic file attachment", "Reduce operational transcription errors by 90%"]
      }
    },
    {
      id: 'ai' as const,
      icon: <Brain className="w-5 h-5" />,
      title: t.product.modules.ai.title,
      desc: t.product.modules.ai.desc,
      benefits: {
        uz: ["Tashrif dinamikasini bashorat qilish", "Shifokorga tashxis qo'yishda aqlli assistent", "Avtomatik tibbiy summalar tayyorlash (NLP)"],
        ru: ["Прогнозирование динамики посещений", "Интеллектуальная поддержка врача", "Автоматическая выжимка карт (NLP)"],
        en: ["Predictive clinic loading dynamics", "Smart clinician decision support vectors", "Automatic patient record summaries (NLP)"]
      }
    },
    {
      id: 'app' as const,
      icon: <Smartphone className="w-5 h-5" />,
      title: t.product.modules.app.title,
      desc: t.product.modules.app.desc,
      benefits: {
        uz: ["Bemor uchun tezkor QR kodli identifikatsiya", "Laboratoriya tahlillarining mobil tasviri", "Shifokor bilan interaktiv chat va telemeditsina"],
        ru: ["Быстрая QR-код идентификация пациента", "Доступ к результатам анализов в телефоне", "Прямой чат с клиникой и телемедицина"],
        en: ["Rapid patient QR-code physical scans", "Instant diagnostic files feed", "Direct clinical chat & secure telemedicine"]
      }
    },
    {
      id: 'integrations' as const,
      icon: <Network className="w-5 h-5" />,
      title: t.product.modules.integrations.title,
      desc: t.product.modules.integrations.desc,
      benefits: {
        uz: ["Laboratoriya (LIS) tizimlari bilan tayyor API", "Xususiy sug'urta kompaniyalari tizimi bilan integratsiya", "Sog'liqni saqlash vazirligi ma'lumotlar bazasiga mutanosiblik"],
        ru: ["Готовые API для лабораторий (LIS)", "Интеграция со страховыми компаниями", "Соответствие базам Минздрава"],
        en: ["Pre-built Laboratory (LIS) APIs", "Direct insurance claim integrations", "Seamless Ministry of Health alignments ready"]
      }
    }
  ];

  const activeData = modulesData.find(m => m.id === activeModule) || modulesData[0];

  return (
    <div className="relative bg-[#07110C] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00C16A]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Headline Block */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-[#00C16A] text-xs font-bold uppercase tracking-widest block">{t.nav.product} PLATFORM</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-white">
          {t.product.headline}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-md">
          {t.product.subheadline}
        </p>
      </div>

      {/* Main SaaS product module block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="product-saas-showcase">
        
        {/* Left: Tab selectors */}
        <div className="lg:col-span-5 space-y-3">
          {modulesData.map((m) => {
            const isSelected = activeModule === m.id;
            return (
              <button
                key={m.id}
                id={`product-tab-${m.id}`}
                onClick={() => setActiveModule(m.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#091b11] border-emerald-500/30 text-white shadow-[0_0_15px_rgba(0,193,106,0.05)]'
                    : 'bg-white/[0.01] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <div className={`p-2.5 rounded-lg border shrink-0 transition-colors ${
                  isSelected 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-[#00C16A]' 
                    : 'bg-white/5 border-white/5 text-gray-400'
                }`}>
                  {m.icon}
                </div>
                <div className="space-y-1">
                  <h3 className={`text-sm font-semibold tracking-tight ${isSelected ? 'text-[#00C16A]' : 'text-white'}`}>
                    {m.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed max-w-sm">
                    {m.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Dynamic high-end interactive console that represents the current state */}
        <div className="lg:col-span-7 bg-[#09110d] border border-white/5 rounded-2xl p-4 md:p-6 shadow-2xl relative min-h-[380px] md:min-h-[440px] flex flex-col justify-between overflow-hidden">
          
          {/* Header row containing simulation indicators */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-gray-500">
              <span className="w-2 h-2 rounded-full bg-[#00C16A] animate-pulse" />
              <span>STABLE FEED // {activeModule.toUpperCase()}__MODULE</span>
            </div>
            <div className="text-[10px] text-gray-600 bg-white/5 px-2 py-0.5 rounded-md">
              REVIV-OS v4.12
            </div>
          </div>

          {/* Interactive Screen switch */}
          <div className="flex-grow flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeModule === 'queue' && (
                <motion.div
                  key="queue-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full space-y-4"
                  id="queue-sim-screen"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                      <span className="text-[8px] uppercase font-bold text-gray-400 block mb-1">{t.product.dashboardMockup.waitingTime}</span>
                      <span className="text-xl font-bold text-white block">14 mins</span>
                      <small className="text-[8px] text-[#00C16A] font-medium">-25% vs last week</small>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                      <span className="text-[8px] uppercase font-bold text-gray-400 block mb-1">Queue Handled</span>
                      <span className="text-xl font-bold text-[#00C16A] block">248 patients</span>
                      <small className="text-[8px] text-gray-500">Today average</small>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl font-mono">
                      <span className="text-[8px] uppercase font-bold text-gray-400 block mb-1">Next Token ID</span>
                      <span className="text-lg font-bold text-white block text-teal-400">#H-UZ-182</span>
                      <small className="text-[8px] text-[#00C16A]">Priority EHR</small>
                    </div>
                  </div>

                  {/* Booking schedule rendering */}
                  <div className="border border-emerald-500/10 rounded-xl bg-emerald-500/[0.01] p-3 text-left">
                    <span className="text-[8px] uppercase font-bold text-emerald-400 tracking-wider block mb-2">Live AI Smart Queue Balancer</span>
                    <div className="space-y-2 text-[10px]">
                      <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="text-[#00C16A] font-semibold">14:00</span>
                          <span className="text-white font-medium">Bemor: Sardor Valiyev</span>
                        </div>
                        <span className="text-xs text-gray-400">Status: Checked-In</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2">
                          <span className="text-[#00C16A] font-semibold">14:15</span>
                          <span className="text-white font-medium">Bemor: Elena Pak</span>
                        </div>
                        <span className="text-[#00C16A] font-bold">Calling... (Room 4)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'clinic' && (
                <motion.div
                  key="clinic-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full space-y-4 text-left"
                  id="clinic-sim-screen"
                >
                  <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-3 rounded-xl mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-[#00C16A]" />
                      <div>
                        <h4 className="text-white font-semibold text-xs">{t.product.dashboardMockup.revenueThisMonth}</h4>
                        <span className="text-emerald-400 font-mono text-sm font-bold">$12,480.00</span>
                      </div>
                    </div>
                    <span className="text-[9px] bg-emerald-500/10 text-[#00C16A] px-2 py-0.5 rounded">+18.5% MoM</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Medical stocks */}
                    <div className="p-3 rounded-xl border border-white/5 bg-[#07110C] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] uppercase font-bold text-gray-400">Pharmacy Inventory</span>
                        <Pill className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                      <div className="space-y-1.5 text-[9px]">
                        <div className="flex justify-between text-gray-300">
                          <span>CardioGrip 250mg</span>
                          <span className="text-[#00C16A] font-semibold">820 units</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>AeroVent Inhaler</span>
                          <span className="text-yellow-400 font-semibold">45 units (Low)</span>
                        </div>
                      </div>
                    </div>

                    {/* Clinic occupancy rate */}
                    <div className="p-3 rounded-xl border border-white/5 bg-[#07110C] space-y-2">
                      <span className="text-[8px] uppercase font-bold text-gray-400 block">{t.product.dashboardMockup.occupancyRate}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white font-mono">78%</span>
                        <span className="text-[9px] text-gray-400">High load today</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[78%] h-full bg-[#00C16A]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'ehr' && (
                <motion.div
                  key="ehr-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full space-y-3 text-left"
                  id="ehr-sim-screen"
                >
                  <div className="flex items-center justify-between bg-[#07110C] border border-white/5 px-3 py-2 rounded-lg">
                    <div className="flex items-center gap-2 text-xs text-white">
                      <Search className="w-3.5 h-3.5 text-gray-500" />
                      <span>{t.product.dashboardMockup.searchPatient}</span>
                    </div>
                    <span className="text-[8px] text-gray-500">ID: UZ-782-901</span>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-2">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div>
                        <h4 className="text-white text-xs font-semibold">Rustam Akhmedov</h4>
                        <p className="text-[9px] text-gray-400">Age: 42 • Male • Tashkent</p>
                      </div>
                      <span className="text-[8px] bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2 py-0.5 rounded-full">Secure Record</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[9px] pt-1">
                      <div>
                        <span className="text-gray-500 block uppercase font-bold text-[8px]">{t.product.dashboardMockup.status}</span>
                        <span className="text-white font-medium">Chronic Hypertension</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block uppercase font-bold text-[8px]">{t.product.dashboardMockup.diagnose}</span>
                        <span className="text-emerald-400 font-semibold">I10 Essential Hypertension</span>
                      </div>
                    </div>

                    <div className="bg-[#07110C] border border-white/5 rounded p-2 text-[9px] text-gray-400 flex items-center justify-between">
                      <span>Vital Sign Monitor</span>
                      <span className="text-white font-semibold">B-Pulse: 72 bpm • Temp: 36.6 C</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'ai' && (
                <motion.div
                  key="ai-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full space-y-4 text-left"
                  id="ai-sim-screen"
                >
                  <div className="p-4 rounded-xl border border-[#00C16A]/20 bg-emerald-500/[0.02] flex items-start gap-3">
                    <Brain className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-white text-xs font-bold">Predictive Smart Allocation Engine</h4>
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        Monday expected checkout volume: <span className="text-[#00C16A] font-semibold">+35% above capacity</span>. System advises deploying 2 optional clinical staff vectors.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col justify-between h-20">
                      <span className="text-[8px] uppercase font-bold text-gray-400">Diagnosis Recommendation Match</span>
                      <span className="text-lg font-bold text-white">92.4% Accuracy</span>
                      <small className="text-[8px] text-gray-500">Validated against MD-EHR v2</small>
                    </div>
                    <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col justify-between h-20">
                      <span className="text-[8px] uppercase font-bold text-gray-400">Physician Transcription Relief</span>
                      <span className="text-lg font-bold text-[#00C16A]">3.2 hrs saved/day</span>
                      <small className="text-[8px] text-emerald-400 font-semibold">per medical provider</small>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'app' && (
                <motion.div
                  key="app-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex items-center justify-center w-full"
                  id="app-sim-screen"
                >
                  {/* Smartphone preview layout */}
                  <div className="w-[160px] h-[260px] bg-[#07110C] border border-[#00C16A]/30 rounded-2xl p-3 flex flex-col justify-between text-left relative overflow-hidden">
                    <div>
                      {/* Notch */}
                      <div className="w-14 h-3 bg-black rounded-full mx-auto mb-2" />
                      
                      {/* Personal app QR Ident */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2 text-center space-y-1 mb-2">
                        <span className="text-[6px] text-gray-400 block">YOUR HEALTH QR IDENT</span>
                        <div className="w-16 h-16 bg-white mx-auto p-1 rounded-sm">
                          {/* QR Mockup */}
                          <div className="w-full h-full bg-[#07110C] grid grid-cols-4 gap-0.5 p-0.5">
                            <div className="bg-white" /><div className="bg-[#07110C]" /><div className="bg-white" /><div className="bg-white" />
                            <div className="bg-white" /><div className="bg-white" /><div className="bg-[#07110C]" /><div className="bg-[#07110C]" />
                            <div className="bg-[#07110C]" /><div className="bg-white" /><div className="bg-white" /><div className="bg-[#07110C]" />
                            <div className="bg-white" /><div className="bg-[#07110C]" /><div className="bg-[#07110C]" /><div className="bg-white" />
                          </div>
                        </div>
                        <span className="text-[8px] text-white font-mono block">MED-098-UZ</span>
                      </div>
                    </div>

                    <div className="space-y-1 mt-auto">
                      <div className="h-0.5 bg-white/5 w-full" />
                      <span className="text-[6px] uppercase text-emerald-400 block font-bold">Today appointment</span>
                      <p className="text-[8px] text-gray-400 font-medium">15:30 • Dr. S. Kamalova</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'integrations' && (
                <motion.div
                  key="integrations-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full space-y-4"
                  id="integrations-sim-screen"
                >
                  <div className="relative h-28 border border-white/5 bg-[#07110C] rounded-xl flex items-center justify-around overflow-hidden">
                    
                    {/* Flow connectors */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-full h-[1px] bg-gradient-to-r from-teal-500 via-emerald-500 to-[#00C16A] animate-pulse" />
                    </div>

                    <div className="z-10 text-center space-y-1">
                      <span className="text-[7px] text-gray-500 uppercase font-bold block">Independent Lab</span>
                      <div className="bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-lg p-2 text-xs font-bold leading-none">
                        Darmon LIS
                      </div>
                      <span className="text-[6px] text-emerald-400">Syncing...</span>
                    </div>

                    <div className="z-10 text-center space-y-1">
                      <div className="bg-[#00C16A] text-[#07110C] rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,193,106,0.3)]">
                        H+
                      </div>
                      <span className="text-[7px] text-gray-400 font-mono">CORE_API</span>
                    </div>

                    <div className="z-10 text-center space-y-1">
                      <span className="text-[7px] text-gray-500 uppercase font-bold block">Insurance Corp</span>
                      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg p-2 text-xs font-bold leading-none">
                        Sug'urta G
                      </div>
                      <span className="text-[6px] text-[#00C16A]">Realtime claim</span>
                    </div>

                  </div>

                  <p className="text-[10px] text-gray-400 text-left">
                    Our API enforces automated payload validation ensuring no claim discrepancies occur during cross-hospital record routing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bullet benefit points for active module */}
          <div className="border-t border-white/5 pt-4 mt-4 text-left">
            <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider block mb-2">{t.common.metrics} & ADVANTAGES</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {activeData.benefits[lang].map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-center gap-1.5 text-xs text-gray-300">
                  <BadgeCheck className="w-4 h-4 text-[#00C16A] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
