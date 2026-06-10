import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, ArrowRight } from 'lucide-react';
import { Language, DemoRequest } from '../types';
import { translations } from '../translations';
import BrandLogo from './BrandLogo';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function RequestDemoModal({ isOpen, onClose, lang }: RequestDemoModalProps) {
  const t = translations[lang];
  const [formData, setFormData] = useState<DemoRequest>({
    fullName: '', email: '', organization: '', role: '', country: 'Uzbekistan', message: ''
  }); // country default kept as value for backend submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.organization || !formData.role) {
      setError(t.demoModal.submitError);
      return;
    }
    setError(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', organization: '', role: '', country: 'Uzbekistan', message: '' });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative my-auto w-full max-w-xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
          >
            <div className="flex justify-between items-start gap-4 mb-5 sm:mb-6">
              <div>
                <BrandLogo size="sm" showText={false} className="mb-3" />
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0F172A]">
                  {t.demoModal.title}
                </h3>
                <p className="text-[#475569] text-xs md:text-sm mt-1">{t.demoModal.subtitle}</p>
              </div>
              <button onClick={onClose} className="sticky top-0 z-10 shrink-0 text-[#475569] hover:text-[#0F172A] p-1.5 rounded-full bg-white hover:bg-[#F8FAFC] transition-colors cursor-pointer" aria-label="Close dialog">
                <X className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-8 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#EFF6FF] text-[#2563EB] rounded-full flex items-center justify-center mb-4 border border-[#DBEAFE]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-[#0F172A] text-lg font-semibold tracking-tight mb-2">{t.common.success}</h4>
                  <p className="text-[#475569] text-sm max-w-sm mb-6">{t.demoModal.submitSuccess}</p>
                  <button onClick={handleReset} className="px-6 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer">
                    <span>{t.common.close}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="demo-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-xs py-2 px-3 rounded-md">{error}</div>
                  )}
                  <div>
                    <label className="block text-[#475569] text-xs font-medium mb-1.5" htmlFor="full-name">
                      {t.demoModal.fullName} <span className="text-[#2563EB]">*</span>
                    </label>
                    <input id="full-name" type="text" required value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t.demoModal.fullName}
                      className="w-full bg-white border border-[#E2E8F0] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 rounded-lg px-4 py-2.5 text-[#0F172A] text-sm outline-none transition-all placeholder:text-[#94A3B8]" />
                  </div>
                  <div>
                    <label className="block text-[#475569] text-xs font-medium mb-1.5" htmlFor="demo-email">
                      {t.demoModal.email} <span className="text-[#2563EB]">*</span>
                    </label>
                    <input id="demo-email" type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.demoModal.email}
                      className="w-full bg-white border border-[#E2E8F0] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 rounded-lg px-4 py-2.5 text-[#0F172A] text-sm outline-none transition-all placeholder:text-[#94A3B8]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#475569] text-xs font-medium mb-1.5" htmlFor="demo-org">
                        {t.demoModal.orgName} <span className="text-[#2563EB]">*</span>
                      </label>
                      <input id="demo-org" type="text" required value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={t.demoModal.orgName}
                        className="w-full bg-white border border-[#E2E8F0] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 rounded-lg px-4 py-2.5 text-[#0F172A] text-sm outline-none transition-all placeholder:text-[#94A3B8]" />
                    </div>
                    <div>
                      <label className="block text-[#475569] text-xs font-medium mb-1.5" htmlFor="demo-role">
                        {t.demoModal.role} <span className="text-[#2563EB]">*</span>
                      </label>
                      <input id="demo-role" type="text" required value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder={t.demoModal.role}
                        className="w-full bg-white border border-[#E2E8F0] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 rounded-lg px-4 py-2.5 text-[#0F172A] text-sm outline-none transition-all placeholder:text-[#94A3B8]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#475569] text-xs font-medium mb-1.5" htmlFor="demo-country">{t.demoModal.country}</label>
                    <select id="demo-country" value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 rounded-lg px-4 py-2.5 text-[#0F172A] text-sm outline-none transition-all">
                      <option value="Uzbekistan">{t.common.demoModalCountries.uzbekistan}</option>
                      <option value="Kazakhstan">{t.common.demoModalCountries.kazakhstan}</option>
                      <option value="Kyrgyzstan">{t.common.demoModalCountries.kyrgyzstan}</option>
                      <option value="Tajikistan">{t.common.demoModalCountries.tajikistan}</option>
                      <option value="UAE">{t.common.demoModalCountries.uae}</option>
                      <option value="Other">{t.common.demoModalCountries.other}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#475569] text-xs font-medium mb-1.5" htmlFor="demo-msg">{t.demoModal.message}</label>
                    <textarea id="demo-msg" rows={3} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.demoModal.message}
                      className="w-full bg-white border border-[#E2E8F0] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 rounded-lg px-4 py-2.5 text-[#0F172A] text-sm outline-none transition-all placeholder:text-[#94A3B8] resize-none" />
                  </div>
                  <button id="submit-demo-btn" type="submit" disabled={isSubmitting}
                    className="w-full mt-2 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50">
                    <span>{isSubmitting ? t.common.submitting : t.common.demoBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
