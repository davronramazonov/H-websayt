import { motion } from 'motion/react';
import { Calendar, Clock, Brain, FileText, Smartphone, Network, MapPin, ArrowRight, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface HomeProps {
  lang: Language;
  setActivePage: (page: PageId) => void;
  onRequestDemo: () => void;
}

export default function Home({ lang, setActivePage, onRequestDemo }: HomeProps) {
  const t = translations[lang];

  const targetCountries = [
    { name: t.market.countriesData.uzbekistan.name, icon: <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />, status: t.common.openMarketOpportunity },
    { name: t.market.countriesData.kazakhstan.name, icon: <Globe className="w-3.5 h-3.5 text-[#2563EB]" />, status: t.common.openMarketOpportunity },
    { name: t.market.countriesData.kyrgyzstan.name, icon: <Globe className="w-3.5 h-3.5 text-[#2563EB]" />, status: t.common.openMarketOpportunity },
    { name: t.market.countriesData.tajikistan.name, icon: <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />, status: t.common.openMarketOpportunity },
    { name: t.market.countriesData.turkmenistan.name, icon: <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />, status: t.common.openMarketOpportunity }
  ];

  const features = [
    { icon: <Calendar className="w-5 h-5 text-[#2563EB]" />, title: t.product.modules.queue.title, desc: t.product.modules.queue.desc, page: 'product' as PageId },
    { icon: <Clock className="w-5 h-5 text-[#2563EB]" />, title: t.product.modules.clinic.title, desc: t.product.modules.clinic.desc, page: 'product' as PageId },
    { icon: <FileText className="w-5 h-5 text-[#2563EB]" />, title: t.product.modules.ehr.title, desc: t.product.modules.ehr.desc, page: 'product' as PageId },
    { icon: <Brain className="w-5 h-5 text-[#2563EB]" />, title: t.product.modules.ai.title, desc: t.product.modules.ai.desc, page: 'product' as PageId },
    { icon: <Smartphone className="w-5 h-5 text-[#2563EB]" />, title: t.product.modules.app.title, desc: t.product.modules.app.desc, page: 'product' as PageId },
    { icon: <Network className="w-5 h-5 text-[#2563EB]" />, title: t.product.modules.integrations.title, desc: t.product.modules.integrations.desc, page: 'product' as PageId }
  ];

  return (
    <div className="bg-white">
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-xs font-semibold tracking-wider"
            >
              <span className="flex h-2 w-2 relative">
                <span className="absolute inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
              </span>
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#0F172A]"
            >
              <span className="text-[#2563EB]">{t.hero.headline}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <button
                onClick={onRequestDemo}
                className="px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm tracking-tight transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {t.common.demoBtn}
              </button>
              <button
                onClick={() => setActivePage('investors')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] font-bold text-sm tracking-tight transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.common.partnerBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#2563EB]" />
              </button>
            </motion.div>

            <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
              <span className="text-xs uppercase font-bold text-[#475569] tracking-wider block">
                {t.common.countries}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {targetCountries.map((c, i) => (
                  <div key={i} onClick={() => setActivePage('market')}
                    className="p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-sm transition-all cursor-pointer text-left group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                        {c.icon}
                      </div>
                      <span className="text-xs font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{c.name}</span>
                    </div>
                    <span className="text-[10px] text-[#475569] bg-[#F8FAFC] px-1.5 py-0.5 rounded-md block w-fit mt-1.5">
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', duration: 0.8 }}
              className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[480px] rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 flex items-center justify-center overflow-hidden shadow-sm"
            >

              <div className="absolute inset-x-6 top-8 h-[260px] bg-white border border-[#E2E8F0] rounded-xl shadow-md p-4 overflow-hidden transform -rotate-2 select-none">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] text-[10px] text-[#475569]">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span className="font-mono text-[9px] bg-[#F8FAFC] px-2 py-0.5 rounded ml-2 text-[#475569]">h-operating-system.io</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
                    <span>H+ MVP Build</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="col-span-2 space-y-2">
                    <div className="h-10 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-2 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[8px] text-[#475569] uppercase font-bold tracking-wider">{t.home.mockup.activeQueue}</span>
                        <span className="text-[#0F172A] text-xs font-semibold">{t.home.mockup.patientsInLine}</span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center">
                        <ArrowRight className="w-2.5 h-2.5 text-[#2563EB]" />
                      </div>
                    </div>
                    <div className="h-10 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-2 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[8px] text-[#475569] uppercase font-bold tracking-wider">{t.home.mockup.doctorAvailability}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                          <span className="text-[10px] text-[#475569]">{t.home.mockup.cliniciansReady}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] p-2 text-center flex flex-col justify-between">
                    <span className="text-[8px] text-[#2563EB] font-bold uppercase">{t.home.mockup.uptime}</span>
                    <span className="text-xl font-bold text-[#0F172A] tracking-tight">MVP</span>
                    <span className="text-[7px] text-[#475569]">{t.home.mockup.securityStatus}</span>
                  </div>
                </div>

                <div className="mt-3 h-20 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-2 flex flex-col justify-between">
                  <span className="text-[7px] text-[#475569] uppercase font-bold tracking-wider">{t.home.mockup.clinicGrowthIndex}</span>
                  <div className="flex items-end gap-1.5 h-12 pt-2">
                    <div className="w-full bg-[#2563EB]/20 h-[20%] rounded-sm" />
                    <div className="w-full bg-[#2563EB]/30 h-[40%] rounded-sm" />
                    <div className="w-full bg-[#2563EB]/40 h-[35%] rounded-sm" />
                    <div className="w-full bg-[#2563EB]/50 h-[65%] rounded-sm" />
                    <div className="w-full bg-[#2563EB] h-[92%] rounded-sm shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="absolute right-6 bottom-4 w-[160px] h-[250px] bg-white border border-[#DBEAFE] rounded-2xl shadow-md p-3 transform rotate-6 select-none flex flex-col justify-between">
                <div>
                  <div className="w-16 h-3 bg-[#E2E8F0] rounded-full mx-auto mb-2" />
                  <div className="flex items-center justify-between text-[8px] text-[#475569] mb-2">
                    <span className="font-semibold text-[#0F172A]">{t.home.mockup.hPatientApp}</span>
                    <span>12:45</span>
                  </div>
                  <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-lg p-2 space-y-1">
                    <span className="text-[6px] uppercase font-bold text-[#2563EB]">{t.home.mockup.nextBooking}</span>
                    <span className="text-[9px] font-bold text-[#0F172A] block">{t.home.mockup.drName}</span>
                    <span className="text-[7px] text-[#475569] block">{t.home.mockup.drRole}</span>
                    <div className="flex gap-1 pt-1">
                      <span className="text-[7px] bg-[#2563EB] text-white font-semibold px-2 py-0.5 rounded-full">14:00</span>
                      <span className="text-[7px] bg-[#F8FAFC] text-[#475569] px-2 py-0.5 rounded-full border border-[#E2E8F0]">{t.home.mockup.tomorrow}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-px bg-[#E2E8F0] w-full" />
                  <div className="flex items-center justify-between text-[7px] text-[#475569]">
                    <span>{t.home.mockup.activeQueueLine}</span>
                    <span className="text-[#2563EB] font-semibold">2 {t.home.mockup.minWait}</span>
                  </div>
                  <div className="w-full h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-[#2563EB]" />
                  </div>
                </div>
              </div>

              <div className="absolute left-8 bottom-8 bg-white border border-[#E2E8F0] rounded-lg p-2.5 shadow-md flex items-center gap-2 transform -rotate-3">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <div className="flex flex-col text-[8px]">
                  <span className="font-bold text-[#0F172A]">{t.home.mockup.secureRecord}</span>
                  <span className="text-[#475569] font-mono">{t.home.mockup.ehrStandard}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase font-bold text-[#475569] tracking-widest mb-6">
            {t.hero.trustedClinics}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl sm:text-2xl font-bold text-[#0F172A] block">Pre-MVP</span>
              <span className="text-xs text-[#475569]">{t.hero.stats.registered}</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl sm:text-2xl font-bold text-[#2563EB] block">In dev</span>
              <span className="text-xs text-[#475569]">{t.hero.stats.clinics}</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl sm:text-2xl font-bold text-[#0F172A] block">Ongoing</span>
              <span className="text-xs text-[#475569]">{t.hero.stats.transactions}</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl sm:text-2xl font-bold text-[#2563EB] block">IT Park</span>
              <span className="text-xs text-[#475569]">{t.hero.stats.uptime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest block">{t.nav.product}</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            {t.product.headline}
          </h2>
          <p className="text-[#475569] text-sm sm:text-base">
            {t.product.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} onClick={() => setActivePage(f.page)}
              className="group p-6 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-md transition-all text-left duration-300 cursor-pointer shadow-sm"
            >
              <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center border border-[#DBEAFE] mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-[#0F172A] text-base font-semibold tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                {f.title}
              </h3>
              <p className="text-[#475569] text-xs md:text-sm leading-relaxed mb-4">
                {f.desc}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#2563EB] font-semibold group-hover:translate-x-1 transition-transform">
                <span>{t.common.learnMore}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-4 text-left">
            <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">{t.common.audience}</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
              {t.common.connectCloudHeadline}
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">
              {t.common.connectCloudDesc}
            </p>
            <div className="pt-2">
              <button onClick={() => setActivePage('solutions')}
                className="inline-flex items-center gap-1.5 text-sm text-[#2563EB] hover:underline font-semibold cursor-pointer"
              >
                <span>{t.common.checkSolutions}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: t.solutions.cards.clinics.title, desc: t.solutions.cards.clinics.desc },
              { title: t.solutions.cards.doctors.title, desc: t.solutions.cards.doctors.desc },
              { title: t.solutions.cards.patients.title, desc: t.solutions.cards.patients.desc },
              { title: t.solutions.cards.partners.title, desc: t.solutions.cards.partners.desc }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-[#E2E8F0] text-left shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] font-bold text-xs mb-3">
                  {i + 1}
                </div>
                <h4 className="text-[#0F172A] font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-[#475569] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
