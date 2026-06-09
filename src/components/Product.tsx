import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BadgeCheck,
  BarChart3,
  Brain,
  Calendar,
  Clock,
  FileText,
  Network,
  Pill,
  Search,
  Smartphone,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import BrandLogo from './BrandLogo';

interface ProductProps {
  lang: Language;
}

type ModuleId = 'queue' | 'clinic' | 'ehr' | 'ai' | 'app' | 'integrations';

export default function Product({ lang }: ProductProps) {
  const t = translations[lang];
  const [activeModule, setActiveModule] = useState<ModuleId>('queue');

  const moduleIcons: Record<ModuleId, ReactNode> = {
    queue: <Calendar className="w-5 h-5" />,
    clinic: <Clock className="w-5 h-5" />,
    ehr: <FileText className="w-5 h-5" />,
    ai: <Brain className="w-5 h-5" />,
    app: <Smartphone className="w-5 h-5" />,
    integrations: <Network className="w-5 h-5" />,
  };

  const moduleIds: ModuleId[] = ['queue', 'app', 'clinic', 'ai', 'ehr', 'integrations'];

  const modulesData = moduleIds.map((id) => ({
    id,
    icon: moduleIcons[id],
    title: t.product.modules[id].title,
    desc: t.product.modules[id].desc,
    benefits: t.product.modules[id].benefits as string[],
  }));

  const activeData = modulesData.find((m) => m.id === activeModule) || modulesData[0];
  const m = t.product.dashboardMockup;

  return (
    <div className="bg-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-left space-y-3 mb-12 md:mb-16 max-w-3xl">
        <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#DBEAFE]">
          {t.nav.product}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A]">
          <span className="text-[#2563EB]">{t.product.headline}</span>
        </h1>
        <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
          {t.product.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 space-y-3">
          {modulesData.map((item) => {
            const isSelected = activeModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#EFF6FF] border-[#2563EB]/30 text-[#0F172A] shadow-sm'
                    : 'bg-white border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg border shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#2563EB]/10 border-[#2563EB]/20 text-[#2563EB]'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]'
                  }`}
                >
                  {item.icon}
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className={`text-sm font-semibold tracking-tight ${isSelected ? 'text-[#2563EB]' : 'text-[#0F172A]'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7 bg-[#0F172A] border border-[#1E293B] rounded-2xl p-4 md:p-6 shadow-sm relative min-h-[430px] md:min-h-[500px] flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-slate-300 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="truncate">{t.common.moduleLabel} // {activeData.title}</span>
            </div>
            <div className="text-[10px] text-slate-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
              {m.osVersion}
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeModule === 'queue' && (
                <motion.div key="queue-screen" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="w-full space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <MetricCard label={m.waitingTime} value={m.waitingValue} note={m.waitingNote} />
                    <MetricCard label={m.queueHandled} value={m.queueValue} note={m.queueNote} accent />
                    <MetricCard label={m.nextToken} value={m.nextTokenValue} note={m.nextTokenNote} />
                  </div>
                  <div className="border border-[#2563EB]/30 rounded-xl bg-[#1E293B] p-3 text-left">
                    <span className="text-[8px] uppercase font-bold text-[#93C5FD] tracking-wider block mb-2">{m.liveAiQueue}</span>
                    <div className="space-y-2 text-[10px]">
                      <QueueRow time="14:00" name="Sardor Valiyev" status={m.checkedIn} />
                      <QueueRow time="14:15" name="Elena Pak" status={`${m.calling} (${m.roomLabel})`} active />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'clinic' && (
                <motion.div key="clinic-screen" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="w-full space-y-4 text-left">
                  <div className="flex items-center justify-between bg-[#1E293B] border border-white/10 p-3 rounded-xl mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-[#93C5FD]" />
                      <div>
                        <h4 className="text-white font-semibold text-xs">{m.revenueThisMonth}</h4>
                        <span className="text-[#93C5FD] font-mono text-sm font-bold">{m.revenueValue}</span>
                      </div>
                    </div>
                    <span className="text-[9px] bg-[#2563EB]/10 text-[#93C5FD] px-2 py-0.5 rounded font-medium border border-[#2563EB]/20">{m.revenueNote}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl border border-white/10 bg-[#1E293B] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] uppercase font-bold text-slate-300">{m.pharmacy}</span>
                        <Pill className="w-3.5 h-3.5 text-[#93C5FD]" />
                      </div>
                      <div className="space-y-1.5 text-[9px]">
                        <InventoryRow item={m.inventoryItem1} value={m.inventoryItem1Value} />
                        <InventoryRow item={m.inventoryItem2} value={m.inventoryItem2Value} warning />
                      </div>
                    </div>
                    <div className="p-3 rounded-xl border border-white/10 bg-[#1E293B] space-y-2">
                      <span className="text-[8px] uppercase font-bold text-slate-300 block">{m.occupancyRate}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white font-mono">{m.occupancyValue}</span>
                        <span className="text-[9px] text-slate-300">{m.occupancyLabel}</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-2/5 h-full bg-[#2563EB]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'ehr' && (
                <motion.div key="ehr-screen" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="w-full space-y-3 text-left">
                  <div className="flex items-center justify-between bg-[#1E293B] border border-white/10 px-3 py-2 rounded-lg">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span>{m.searchPatient}</span>
                    </div>
                    <span className="text-[8px] text-slate-300">{m.idLabel}</span>
                  </div>
                  <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 space-y-2">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div>
                        <h4 className="text-white text-xs font-semibold">Rustam Akhmedov</h4>
                        <p className="text-[9px] text-slate-300">{m.patientAge}</p>
                      </div>
                      <span className="text-[8px] bg-[#2563EB]/10 text-[#93C5FD] border border-[#2563EB]/20 px-2 py-0.5 rounded-full font-medium">{m.secureRecord}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-[9px] pt-1">
                      <div>
                        <span className="text-slate-300 block uppercase font-bold text-[8px]">{m.status}</span>
                        <span className="text-white font-medium">{m.chronicCondition}</span>
                      </div>
                      <div>
                        <span className="text-slate-300 block uppercase font-bold text-[8px]">{m.diagnose}</span>
                        <span className="text-[#93C5FD] font-semibold">{m.diagnoseCode}</span>
                      </div>
                    </div>
                    <div className="bg-[#0F172A] border border-white/10 rounded p-2 text-[9px] text-slate-300 flex items-center justify-between">
                      <span>{m.vitalSigns}</span>
                      <span className="text-white font-semibold">{m.vitalValues}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'ai' && (
                <motion.div key="ai-screen" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="w-full space-y-4 text-left">
                  <div className="p-4 rounded-xl border border-[#2563EB]/30 bg-[#1E293B] flex items-start gap-3">
                    <Brain className="w-5 h-5 text-[#93C5FD] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-white text-xs font-bold">{m.predictiveEngine}</h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{m.mondayForecast}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <MetricCard label={m.diagnosisMatch} value={m.insightVal} note={m.insightDesc} dark />
                    <MetricCard label={m.timeSaved} value={m.hrsPerDay} note={m.perPhysician} dark accent />
                  </div>
                </motion.div>
              )}

              {activeModule === 'app' && (
                <motion.div key="app-screen" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="flex items-center justify-center w-full">
                  <div className="w-[170px] h-[280px] bg-white border border-[#2563EB]/20 rounded-2xl p-3 flex flex-col justify-between text-left relative overflow-hidden shadow-sm">
                    <div>
                      <div className="w-14 h-3 bg-[#E2E8F0] rounded-full mx-auto mb-2" />
                      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2 text-center space-y-1 mb-2">
                        <span className="text-[6px] text-[#475569] block">{m.secureRecord}</span>
                        <div className="w-16 h-16 bg-white mx-auto p-1 rounded-sm border border-[#E2E8F0]">
                          <div className="w-full h-full bg-white grid grid-cols-4 gap-0.5 p-0.5">
                            <div className="bg-[#0F172A]" /><div className="bg-white" /><div className="bg-[#0F172A]" /><div className="bg-[#0F172A]" />
                            <div className="bg-[#0F172A]" /><div className="bg-[#0F172A]" /><div className="bg-white" /><div className="bg-white" />
                            <div className="bg-white" /><div className="bg-[#0F172A]" /><div className="bg-[#0F172A]" /><div className="bg-white" />
                            <div className="bg-[#0F172A]" /><div className="bg-white" /><div className="bg-white" /><div className="bg-[#0F172A]" />
                          </div>
                        </div>
                        <span className="text-[8px] text-[#0F172A] font-mono block">MED-098-UZ</span>
                      </div>
                    </div>
                    <div className="space-y-1 mt-auto">
                      <div className="h-px bg-[#E2E8F0] w-full" />
                      <span className="text-[6px] uppercase text-[#2563EB] block font-bold">{m.today}</span>
                      <p className="text-[8px] text-[#475569] font-medium">{m.todayAppointment}</p>
                      <p className="text-[8px] text-[#0F172A] font-semibold">{m.appAppointment}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === 'integrations' && (
                <motion.div key="integrations-screen" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="w-full space-y-4">
                  <div className="relative h-32 border border-white/10 bg-[#1E293B] rounded-xl flex items-center justify-around overflow-hidden">
                    <IntegrationNode label={m.labName} status={m.syncing} />
                    <div className="z-10 text-center space-y-1">
                      <BrandLogo size="lg" showText={false} className="justify-center" />
                      <span className="text-[7px] text-slate-300 font-mono">{m.coreApi}</span>
                    </div>
                    <IntegrationNode label={m.insuranceName} status={m.realtimeClaim} />
                  </div>
                  <p className="text-[10px] text-slate-300 text-left leading-relaxed">{m.apiDesc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-white/10 pt-4 mt-4 text-left">
            <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider block mb-2">{t.common.advantagesLabel}</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {activeData.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                  <BadgeCheck className="w-4 h-4 text-[#93C5FD] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 md:mt-16 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0F172A] mb-6">
          {t.product.workflow.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {t.product.workflow.steps.map((step: string, idx: number) => (
            <div key={step} className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-left">
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] flex items-center justify-center text-xs font-bold mb-3">
                {idx + 1}
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value, note, accent = false, dark = false }: { label: string; value: string; note: string; accent?: boolean; dark?: boolean }) {
  return (
    <div className={`${dark ? 'bg-[#1E293B] border-white/10' : 'bg-[#F8FAFC] border-[#E2E8F0]'} border p-3 rounded-xl`}>
      <span className={`${dark ? 'text-slate-300' : 'text-[#475569]'} text-[8px] uppercase font-bold block mb-1`}>{label}</span>
      <span className={`${accent ? 'text-[#2563EB]' : dark ? 'text-white' : 'text-[#0F172A]'} text-lg font-bold block`}>{value}</span>
      <small className={`${accent ? 'text-[#93C5FD]' : dark ? 'text-slate-300' : 'text-[#475569]'} text-[8px] font-medium`}>{note}</small>
    </div>
  );
}

function QueueRow({ time, name, status, active = false }: { time: string; name: string; status: string; active?: boolean }) {
  return (
    <div className={`flex items-center justify-between p-2 rounded border ${active ? 'bg-[#2563EB]/10 border-[#2563EB]/20' : 'bg-[#0F172A] border-white/10'}`}>
      <span className="font-semibold text-white">{time} - {name}</span>
      <span className={active ? 'text-[#93C5FD] font-bold' : 'text-slate-300'}>{status}</span>
    </div>
  );
}

function InventoryRow({ item, value, warning = false }: { item: string; value: string; warning?: boolean }) {
  return (
    <div className="flex justify-between text-slate-300">
      <span>{item}</span>
      <span className={warning ? 'text-amber-400 font-semibold' : 'text-[#93C5FD] font-semibold'}>{value}</span>
    </div>
  );
}

function IntegrationNode({ label, status }: { label: string; status: string }) {
  return (
    <div className="z-10 text-center space-y-1">
      <span className="text-[7px] text-slate-300 uppercase font-bold block">{label}</span>
      <div className="bg-[#0F172A] border border-white/10 text-[#93C5FD] rounded-lg p-2 text-xs font-bold leading-none">{label}</div>
      <span className="text-[6px] text-[#93C5FD]">{status}</span>
    </div>
  );
}
