import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Users, Compass, BarChart3, HelpCircle, Building } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface MarketProps {
  lang: Language;
}

type CountryId = 'uzbekistan' | 'kazakhstan' | 'kyrgyzstan' | 'tajikistan';

export default function Market({ lang }: MarketProps) {
  const t = translations[lang];
  const [selectedCountry, setSelectedCountry] = useState<CountryId>('uzbekistan');

  const stats = [
    {
      label: t.market.stats.tam,
      value: "TAM: $4.1B",
      desc: t.market.stats.tamDesc,
      glow: "shadow-[0_0_20px_rgba(0,193,106,0.15)]"
    },
    {
      label: t.market.stats.sam,
      value: "SAM: $680M",
      desc: t.market.stats.samDesc,
      glow: "shadow-[0_0_15px_rgba(20,184,166,0.1)]"
    },
    {
      label: t.market.stats.som,
      value: "SOM: $42M",
      desc: t.market.stats.somDesc,
      glow: "shadow-[0_0_15px_rgba(52,211,153,0.1)]"
    }
  ];

  const countryIds: CountryId[] = ['uzbekistan', 'kazakhstan', 'kyrgyzstan', 'tajikistan'];

  const getCountryColor = (id: CountryId) => {
    return selectedCountry === id 
      ? 'fill-emerald-500/20 stroke-[#00C16A] stroke-2 shadow-2xl'
      : 'fill-white/[0.02] hover:fill-emerald-500/10 stroke-white/10 hover:stroke-[#00C16A]/60 stroke-1';
  };

  return (
    <div className="relative bg-[#07110C] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow layers */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00C16A]/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Headings */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <span className="text-[#00C16A] text-xs font-bold uppercase tracking-widest block">{t.nav.market} UNTAPPED VALUE</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-white">
          {t.market.headline}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          {t.market.subheadline}
        </p>
      </div>

      {/* TAM / SAM / SOM Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" id="market-tam-sam-som">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl bg-[#09110d] border border-white/5 relative overflow-hidden flex flex-col justify-between ${s.glow}`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C16A]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-3">
              <span className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider block">{s.label}</span>
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono block">
                {s.value}
              </span>
              <p className="text-gray-400 text-xs leading-relaxed">
                {s.desc}
              </p>
            </div>
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-60 mt-6 rounded-full w-2/3" />
          </div>
        ))}
      </div>

      {/* Interactive Map & Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left COLUMN: Stylized vector visual map */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#09110d] border border-white/5 rounded-2xl p-6 relative shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-between">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-4">
              INTERACTIVE REGIONAL MATRIX INDEX
            </span>
            
            {/* Styled SVGs representing central asia regions simplified */}
            <div className="relative w-full max-w-md mx-auto aspect-video">
              <svg 
                viewBox="0 0 800 500" 
                className="w-full h-full"
                id="central-asia-svg-map"
              >
                {/* 1. KAZAKHSTAN PATH */}
                <path
                  id="map-path-kazakhstan"
                  d="M100,80 L700,80 C740,120 710,180 730,220 L580,240 C560,220 500,210 440,230 L380,200 L300,240 L180,240 L100,210 Z"
                  className={`${getCountryColor('kazakhstan')} transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedCountry('kazakhstan')}
                />
                
                {/* 2. UZBEKISTAN PATH */}
                <path
                  id="map-path-uzbekistan"
                  d="M180,240 L300,240 L380,200 L440,230 L550,230 L550,280 L490,300 L400,290 L320,330 L220,310 Z"
                  className={`${getCountryColor('uzbekistan')} transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedCountry('uzbekistan')}
                />
                
                {/* 3. KYRGYZSTAN PATH */}
                <path
                  id="map-path-kyrgyzstan"
                  d="M550,230 L730,220 L750,270 L600,290 L550,280 Z"
                  className={`${getCountryColor('kyrgyzstan')} transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedCountry('kyrgyzstan')}
                />
                
                {/* 4. TAJIKISTAN PATH */}
                <path
                  id="map-path-tajikistan"
                  d="M490,300 L550,280 L600,290 L590,340 L530,340 Z"
                  className={`${getCountryColor('tajikistan')} transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedCountry('tajikistan')}
                />

                {/* Direct SVG Labels overlay */}
                <text x="400" y="140" fill="white" fontSize="18" fontWeight="bold" className="pointer-events-none fill-white/80">KAZAKHSTAN</text>
                <text x="320" y="275" fill="#00C16A" fontSize="16" fontWeight="extrabold" className="pointer-events-none">UZBEKISTAN</text>
                <text x="610" y="260" fill="white" fontSize="12" className="pointer-events-none fill-white/80">KYRGYZSTAN</text>
                <text x="520" y="325" fill="white" fontSize="12" className="pointer-events-none fill-white/80">TAJIKISTAN</text>
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {countryIds.map((c) => (
                <button
                  key={c}
                  id={`btn-country-select-${c}`}
                  onClick={() => setSelectedCountry(c)}
                  className={`px-3 py-1 bg-white/5 hover:bg-white/10 border text-[11px] rounded transition-all capitalize font-semibold cursor-pointer ${
                    selectedCountry === c ? 'border-[#00C16A] text-emerald-400' : 'border-transparent text-gray-400'
                  }`}
                >
                  {t.market.countriesData[c].name}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Right COLUMN: Country Specific detail stats */}
        <div className="lg:col-span-5 h-full">
          <AnimatePresence mode="wait">
            {selectedCountry && (
              <motion.div
                key={selectedCountry}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                id="market-country-profile"
                className="bg-emerald-500/[0.02] border border-emerald-500/20 rounded-2xl p-6 md:p-8 shadow-3xl text-left h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {selectedCountry === 'uzbekistan' && "🇺🇿"}
                      {selectedCountry === 'kazakhstan' && "🇰🇿"}
                      {selectedCountry === 'kyrgyzstan' && "🇰🇬"}
                      {selectedCountry === 'tajikistan' && "🇹🇯"}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white font-sans">
                        {t.market.countriesData[selectedCountry].name}
                      </h3>
                      <span className="text-[10px] text-[#00C16A] uppercase font-bold tracking-widest block">
                        Target Market Profiles
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {t.market.countriesData[selectedCountry].desc}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-emerald-500/10 mt-6 text-xs text-gray-300">
                  <div className="flex justify-between items-center bg-white/[0.01] p-2.5 rounded-lg">
                    <span className="flex items-center gap-2 text-gray-400 shrink-0">
                      <Users className="w-4 h-4 text-[#00C16A]" />
                      <span>{t.market.population}</span>
                    </span>
                    <span className="font-bold text-white font-mono">{t.market.countriesData[selectedCountry].popVal}</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/[0.01] p-2.5 rounded-lg">
                    <span className="flex items-center gap-2 text-gray-400 shrink-0">
                      <Building className="w-4 h-4 text-[#00C16A]" />
                      <span>{t.market.clinicsCount}</span>
                    </span>
                    <span className="font-bold text-white font-mono">{t.market.countriesData[selectedCountry].clinicsVal}</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/[0.01] p-2.5 rounded-lg">
                    <span className="flex items-center gap-2 text-gray-400 shrink-0">
                      <TrendingUp className="w-4 h-4 text-[#00C16A]" />
                      <span>{t.market.growthPotential}</span>
                    </span>
                    <span className="font-bold text-emerald-400">{t.market.countriesData[selectedCountry].digitVal}</span>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
