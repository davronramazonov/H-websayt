import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Solutions from './components/Solutions';
import Market from './components/Market';
import Traction from './components/Traction';
import Pricing from './components/Pricing';
import Company from './components/Company';
import Investors from './components/Investors';
import RequestDemoModal from './components/RequestDemoModal';

import { Language, PageId } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div id="hplus-ecosystem-root" className="min-h-screen bg-[#050B14] font-sans text-white select-none selection:bg-[#0099FF]/30 selection:text-white flex flex-col justify-between">
      
      {/* Premium Header */}
      <Header
        lang={lang}
        setLang={setLang}
        activePage={activePage}
        setActivePage={setActivePage}
        onRequestDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Pages with Smooth Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            id="page-render-container"
            className="w-full bg-[#050B14]"
          >
            {activePage === 'home' && (
              <Home 
                lang={lang} 
                setActivePage={setActivePage} 
                onRequestDemo={() => setIsDemoModalOpen(true)} 
              />
            )}
            
            {activePage === 'product' && (
              <Product lang={lang} />
            )}

            {activePage === 'solutions' && (
              <Solutions 
                lang={lang} 
                onRequestDemo={() => setIsDemoModalOpen(true)} 
              />
            )}

            {activePage === 'market' && (
              <Market lang={lang} />
            )}

            {activePage === 'traction' && (
              <Traction lang={lang} />
            )}

            {activePage === 'pricing' && (
              <Pricing 
                lang={lang} 
                onRequestDemo={() => setIsDemoModalOpen(true)} 
              />
            )}

            {activePage === 'company' && (
              <Company lang={lang} />
            )}

            {activePage === 'investors' && (
              <Investors lang={lang} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Interactive Footer */}
      <Footer
        lang={lang}
        setActivePage={setActivePage}
        onRequestDemo={() => setIsDemoModalOpen(true)}
      />

      {/* High-Fidelity Demo Request Dialog Overlay */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
