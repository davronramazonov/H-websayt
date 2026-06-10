import { AnimatePresence, motion } from 'motion/react';
import { FileText, ShieldCheck, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

export type LegalDocument = 'privacy' | 'terms';

interface LegalModalProps {
  document: LegalDocument | null;
  onClose: () => void;
  lang: Language;
}

export default function LegalModal({ document, onClose, lang }: LegalModalProps) {
  const t = translations[lang];
  const content = document ? t.footer.legalDocuments[document] : null;
  const Icon = document === 'privacy' ? ShieldCheck : FileText;

  return (
    <AnimatePresence>
      {document && content && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-4">
          <motion.button
            type="button"
            aria-label={t.common.close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 w-full h-full bg-[#0F172A]/60 backdrop-blur-sm cursor-default"
          />
          <motion.article
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="relative my-auto w-full max-w-2xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-xl sm:rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-6 md:p-8 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E2E8F0] pb-5">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">{content.title}</h2>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">{content.updated}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="sticky top-0 shrink-0 rounded-full bg-white p-1.5 text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
                aria-label={t.common.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#475569] mt-5">{content.intro}</p>
            <div className="space-y-5 mt-6">
              {content.sections.map((section: { title: string; body: string }) => (
                <section key={section.title}>
                  <h3 className="font-bold text-[#0F172A] text-base">{section.title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569] mt-2">{section.body}</p>
                </section>
              ))}
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}
