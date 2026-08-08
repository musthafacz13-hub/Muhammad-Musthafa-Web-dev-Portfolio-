'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

interface ToastState {
  message: string;
  type: 'success' | 'error';
}

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [lastSubmittedTime, setLastSubmittedTime] = useState<number>(0);
  const [hpWebsite, setHpWebsite] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const showToastMessage = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const isFieldActive = (fieldName: keyof typeof formData) => {
    return focusedField === fieldName || formData[fieldName].length > 0;
  };

  const getLabelClass = (fieldName: keyof typeof formData) => {
    const isActive = isFieldActive(fieldName);
    return `absolute left-4 pointer-events-none transition-all duration-300 ease-out font-sans ${
      isActive
        ? 'top-2.5 text-[10px] font-semibold text-[#1d1d1f]/60 dark:text-white/60 uppercase tracking-widest'
        : 'top-1/2 -translate-y-1/2 text-sm text-[#86868b] dark:text-[#a1a1a6]'
    }`;
  };

  const getTextAreaLabelClass = () => {
    const isActive = isFieldActive('message');
    return `absolute left-4 pointer-events-none transition-all duration-300 ease-out font-sans ${
      isActive
        ? 'top-2.5 text-[10px] font-semibold text-[#1d1d1f]/60 dark:text-white/60 uppercase tracking-widest'
        : 'top-4 text-sm text-[#86868b] dark:text-[#a1a1a6]'
    }`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submission block
    if (loading) return;

    // 1. Validation
    const nameVal = formData.name.trim();
    const emailVal = formData.email.trim();
    const subjectVal = formData.subject.trim();
    const messageVal = formData.message.trim();

    if (!nameVal || !emailVal || !subjectVal || !messageVal) {
      showToastMessage("Please fill in all fields.", "error");
      return;
    }

    // Honeypot spam protection check
    if (hpWebsite) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Spam submission detected via honeypot.');
      }
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setHpWebsite('');
      showToastMessage("Message sent successfully.", "success");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      showToastMessage("Please enter a valid email address.", "error");
      return;
    }

    // 2. Client-side Spam Prevention (cooldown check)
    const now = Date.now();
    if (now - lastSubmittedTime < 10000) {
      showToastMessage("Please wait a moment before sending another message.", "error");
      return;
    }

    setLoading(true);

    try {
      // Simulate form submission success
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Clear the form on successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLastSubmittedTime(Date.now());
      showToastMessage("Message sent successfully.", "success");
    } catch {
      showToastMessage("Unable to send your message. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-1.5 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
          Contact Me
        </h2>
        <p className="text-base text-[#515154] dark:text-[#d1d1d6] max-w-xl font-normal">
          Have a question or want to collaborate on a design or development project? Send a message below.
        </p>
      </div>

      {/* Interactive Apple-inspired Contact Form */}
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-6 sm:p-10 rounded-3xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
        >
            <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
              {/* Honeypot field (hidden from screen readers & users to trap bots) */}
              <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  id="contact-website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={hpWebsite}
                  onChange={(e) => setHpWebsite(e.target.value)}
                  suppressHydrationWarning
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name Input */}
                <div className="relative rounded-2xl bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.04] dark:border-white/[0.08] focus-within:border-[#1d1d1f] dark:focus-within:border-white focus-within:bg-white dark:focus-within:bg-[#2c2c2e] transition-all duration-300">
                  <input
                    type="text"
                    required
                    name="fullName"
                    id="contact-full-name"
                    value={formData.name}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] dark:text-white focus:outline-none focus:ring-0 transition-all duration-200"
                    suppressHydrationWarning
                  />
                  <label htmlFor="contact-full-name" className={getLabelClass('name')}>
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                </div>

                {/* Email Address Input */}
                <div className="relative rounded-2xl bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.04] dark:border-white/[0.08] focus-within:border-[#1d1d1f] dark:focus-within:border-white focus-within:bg-white dark:focus-within:bg-[#2c2c2e] transition-all duration-300">
                  <input
                    type="email"
                    required
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] dark:text-white focus:outline-none focus:ring-0 transition-all duration-200"
                    suppressHydrationWarning
                  />
                  <label htmlFor="contact-email" className={getLabelClass('email')}>
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative rounded-2xl bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.04] dark:border-white/[0.08] focus-within:border-[#1d1d1f] dark:focus-within:border-white focus-within:bg-white dark:focus-within:bg-[#2c2c2e] transition-all duration-300">
                <input
                  type="text"
                  required
                  name="subject"
                  id="contact-subject"
                  value={formData.subject}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] dark:text-white focus:outline-none focus:ring-0 transition-all duration-200"
                  suppressHydrationWarning
                />
                <label htmlFor="contact-subject" className={getLabelClass('subject')}>
                  Subject <span className="text-rose-500">*</span>
                </label>
              </div>

              {/* Message Input */}
              <div className="relative rounded-2xl bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.04] dark:border-white/[0.08] focus-within:border-[#1d1d1f] dark:focus-within:border-white focus-within:bg-white dark:focus-within:bg-[#2c2c2e] transition-all duration-300">
                <textarea
                  required
                  rows={4}
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] dark:text-white focus:outline-none focus:ring-0 transition-all duration-200 resize-none min-h-[120px]"
                  suppressHydrationWarning
                />
                <label htmlFor="contact-message" className={getTextAreaLabelClass()}>
                  Message <span className="text-rose-500">*</span>
                </label>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] text-xs font-semibold hover:bg-[#2d2d2f] dark:hover:bg-[#e8e8ed] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 opacity-80" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      {/* Premium Apple-style Success / Error Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#1d1d1f] text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-white/10"
          >
            {toast.type === 'success' ? (
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold font-sans">!</span>
              </div>
            )}
            <span className="text-xs font-medium tracking-tight whitespace-nowrap">
              {toast.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
