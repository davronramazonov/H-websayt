import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  BarChart3,
  Building2,
  Database,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import {
  centralAsiaBoundaryPaths,
  centralAsiaLabelPositions,
  type CentralAsiaCountryId,
} from '../data/centralAsiaBoundaries';

interface MarketProps {
  lang: Language;
}

type CountryId = CentralAsiaCountryId;

const countryIds = [
  'uzbekistan',
  'kazakhstan',
  'kyrgyzstan',
  'tajikistan',
  'turkmenistan',
] as const satisfies readonly CountryId[];

const countryColors: Record<CountryId, string> = {
  uzbekistan: '#059669',
  kazakhstan: '#0F766E',
  kyrgyzstan: '#0284C7',
  tajikistan: '#2563EB',
  turkmenistan: '#0D9488',
};

export default function Market({ lang }: MarketProps) {
  const t = translations[lang];
  const [selectedCountry, setSelectedCountry] = useState<CountryId>('uzbekistan');
  const selectedData = t.market.countriesData[selectedCountry];

  const profileItems: { label: string; value: string; icon: LucideIcon }[] = [
    { label: t.market.population, value: selectedData.popVal, icon: Users },
    { label: t.market.privateClinics, value: selectedData.privateClinicsVal, icon: Building2 },
    { label: t.market.annualGrowth, value: selectedData.growthVal, icon: TrendingUp },
    { label: t.market.confidence, value: selectedData.confidenceVal, icon: ShieldCheck },
    { label: t.market.marketReadiness, value: selectedData.digitVal, icon: BarChart3 },
  ];

  return (
    <div className="bg-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <section className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 md:gap-10 mb-10 md:mb-14 items-end">
        <div className="space-y-4 text-left min-w-0">
          <span className="text-emerald-700 text-xs sm:text-sm font-bold uppercase tracking-widest block">
            {t.market.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight">
            {t.market.headline}
          </h1>
        </div>
        <div className="space-y-4 min-w-0">
          <p className="text-[#475569] text-base leading-relaxed lg:text-left">
            {t.market.subheadline}
          </p>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-left">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
              <p className="text-sm text-[#475569] leading-relaxed">{t.market.estimateNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-start">
        <div className="lg:col-span-7 space-y-4 min-w-0">
          <div className="bg-white border border-[#CBD5E1] rounded-2xl p-3 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs sm:text-sm text-[#334155] font-bold uppercase tracking-wider">
                {t.market.mapLabel}
              </span>
            </div>

            <div className="relative w-full max-w-4xl mx-auto aspect-[1.78] min-h-[220px] sm:min-h-[300px] overflow-hidden rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <svg viewBox="28 58 812 440" role="img" aria-label={t.market.mapLabel} className="w-full h-full">
                <rect x="28" y="58" width="812" height="440" fill="#F8FAFC" />
                {countryIds.map((country) => {
                  const active = selectedCountry === country;
                  const baseColor = countryColors[country];

                  return (
                    <path
                      key={country}
                      d={centralAsiaBoundaryPaths[country]}
                      tabIndex={0}
                      onMouseEnter={() => setSelectedCountry(country)}
                      onFocus={() => setSelectedCountry(country)}
                      onClick={() => setSelectedCountry(country)}
                      className="cursor-pointer transition-all duration-200 outline-none"
                      fill={active ? baseColor : '#ECFDF5'}
                      stroke={active ? '#064E3B' : '#94A3B8'}
                      strokeWidth={active ? 2.8 : 1.4}
                      opacity={active ? 1 : 0.96}
                    />
                  );
                })}
                {countryIds.map((country) => {
                  const active = selectedCountry === country;
                  const label = centralAsiaLabelPositions[country];

                  return (
                    <text
                      key={`${country}-label`}
                      x={label.x}
                      y={label.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={active ? '#052E16' : '#334155'}
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      paintOrder="stroke"
                      fontSize={Math.max(label.size - 1, 11)}
                      fontWeight="800"
                      pointerEvents="none"
                    >
                      {t.market.countriesData[country].mapName}
                    </text>
                  );
                })}
              </svg>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-4">
              {countryIds.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`min-h-11 px-3 py-2 border text-xs sm:text-sm rounded-lg transition-all font-semibold cursor-pointer shadow-sm text-left ${
                    selectedCountry === country
                      ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                      : 'border-[#E2E8F0] text-[#334155] bg-white hover:border-emerald-300 hover:bg-emerald-50/50'
                  }`}
                >
                  {t.market.countriesData[country].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 min-w-0">
          <AnimatePresence mode="wait">
            <motion.article
              key={selectedCountry}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#CBD5E1] rounded-2xl p-5 md:p-7 shadow-sm text-left"
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm text-emerald-700 uppercase font-bold tracking-widest block">
                    {t.market.profileLabel}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0F172A] mt-1">
                    {selectedData.name}
                  </h3>
                </div>
              </div>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6">{selectedData.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-lg min-w-0">
                      <div className="flex items-center gap-2 text-[#475569] text-xs font-bold uppercase tracking-wider mb-1.5">
                        <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-sm font-semibold text-[#0F172A] leading-relaxed break-words">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#334155] text-xs font-bold uppercase tracking-wider mb-2">
                  <Database className="w-4 h-4 text-emerald-700" />
                  <span>{t.market.dataNoteLabel}</span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">{selectedData.dataNote}</p>
              </div>

              <div className="mt-4 border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {t.market.opportunityLabel}
                </span>
                <p className="text-sm text-[#0F172A] leading-relaxed mt-1">{selectedData.opportunity}</p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
