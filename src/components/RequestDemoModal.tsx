import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Landmark, ArrowRight } from 'lucide-react';
import { Language, DemoRequest } from '../types';
import { translations } from '../translations';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function RequestDemoModal({ isOpen, onClose, lang }: RequestDemoModalProps) {
  const t = translations[lang];
  const [formData, setFormData] = useState<DemoRequest>({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    country: 'Uzbekistan',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.organization || !formData.role) {
      setError(t.demoModal.submitError);
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Simulate reliable endpoint logging and receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Premium H+ Demo requested:', formData);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      role: '',
      country: 'Uzbekistan',
      message: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050B14]/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            id="demo-modal-container"
            className="relative w-full max-w-xl bg-[#0D1527] border border-sky-500/20 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(14,165,233,0.15)] overflow-hidden"
          >
            {/* Subtle glow effect in top corner */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 id="modal-title" className="text-xl md:text-2xl font-sans font-bold tracking-tight text-white flex items-center gap-2">
                  <span className="text-sky-400">H+</span> {t.demoModal.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">{t.demoModal.subtitle}</p>
              </div>
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-8 text-center flex flex-col items-center"
                  id="demo-success-view"
                >
                  <div className="w-16 h-16 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center mb-4 border border-sky-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg font-semibold tracking-tight mb-2">
                    {t.common.success}
                  </h4>
                  <p className="text-gray-400 text-sm max-w-sm mb-6">
                    {t.demoModal.submitSuccess}
                  </p>
                  <button
                    id="success-close-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(14,165,233,0.2)] flex items-center gap-2"
                  >
                    <span>{t.common.close}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="demo-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  id="demo-request-form"
                >
                  {error && (
                    <div id="demo-error" className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-2 px-3 rounded-md">
                      {error}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="full-name">
                      {t.demoModal.fullName} <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Elyor Rustamov"
                      className="w-full bg-[#131B2D] border border-sky-500/10 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="demo-email">
                      {t.demoModal.email} <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="demo-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. director@hplus.uz"
                      className="w-full bg-[#131B2D] border border-sky-500/10 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="demo-org">
                        {t.demoModal.orgName} <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="demo-org"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Med Center Tashkent"
                        className="w-full bg-[#131B2D] border border-sky-500/10 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="demo-role">
                        {t.demoModal.role} <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="demo-role"
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Chief Physician / Partner"
                        className="w-full bg-[#131B2D] border border-sky-500/10 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  {/* Country Selection */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="demo-country">
                      {t.demoModal.country}
                    </label>
                    <select
                      id="demo-country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#131B2D] border border-sky-500/10 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all"
                    >
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Other">Other Region</option>
                    </select>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="demo-msg">
                      {t.demoModal.message}
                    </label>
                    <textarea
                      id="demo-msg"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What other specifics can we customize for your clinic?"
                      className="w-full bg-[#131B2D] border border-sky-500/10 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  {/* Action Button */}
                  <button
                    id="submit-demo-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(14,165,233,0.15)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
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
