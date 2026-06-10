import { useState } from 'react';
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
import LegalModal, { type LegalDocument } from './components/LegalModal';
import { Language, PageId } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [legalDocument, setLegalDocument] = useState<LegalDocument | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A] selection:bg-[#2563EB]/20 selection:text-[#0F172A] flex flex-col">
      <Header
        lang={lang}
        setLang={setLang}
        activePage={activePage}
        setActivePage={setActivePage}
        onRequestDemo={() => setIsDemoModalOpen(true)}
      />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full bg-white"
          >
            {activePage === 'home' && <Home lang={lang} setActivePage={setActivePage} onRequestDemo={() => setIsDemoModalOpen(true)} />}
            {activePage === 'product' && <Product lang={lang} />}
            {activePage === 'solutions' && <Solutions lang={lang} onRequestDemo={() => setIsDemoModalOpen(true)} />}
            {activePage === 'market' && <Market lang={lang} />}
            {activePage === 'traction' && <Traction lang={lang} />}
            {activePage === 'pricing' && <Pricing lang={lang} onRequestDemo={() => setIsDemoModalOpen(true)} />}
            {activePage === 'company' && <Company lang={lang} />}
            {activePage === 'investors' && <Investors lang={lang} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer lang={lang} setActivePage={setActivePage} onRequestDemo={() => setIsDemoModalOpen(true)} onOpenLegal={setLegalDocument} />
      <RequestDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} lang={lang} />
      <LegalModal document={legalDocument} onClose={() => setLegalDocument(null)} lang={lang} />
    </div>
  );
}
