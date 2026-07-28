'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, CheckCircle2, Mail, Loader2 } from 'lucide-react';

// ==========================================
// GOOGLE FORM CONFIGURATION SECTION
// ==========================================
// We have programmatically scanned and extracted the field configurations
// from your official Google Form URL:
// https://docs.google.com/forms/d/e/1FAIpQLSfuzwTk6r0DlMd4SNlvHagj3FFKraI5FbcaMFwz41stOqUwkw/viewform
//
// Since your Google Form has 3 fields ("Your Name", "Your Email", "Message "),
// we map Name to field 1, Email to field 2, and we combine Subject + Message
// into field 3. This ensures all input data is perfectly preserved in your responses spreadsheet!
const GOOGLE_FORM_CONFIG = {
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuzwTk6r0DlMd4SNlvHagj3FFKraI5FbcaMFwz41stOqUwkw/formResponse',
  fields: {
    fullName: 'entry.504474571',   // Map to "Your Name" (Field 1)
    email: 'entry.1128291873',      // Map to "Your Email" (Field 2)
    message: 'entry.870844560',    // Map to "Message " (Field 3)
  }
};

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
        ? 'top-2.5 text-[10px] font-semibold text-[#1d1d1f]/60 uppercase tracking-widest'
        : 'top-1/2 -translate-y-1/2 text-sm text-[#86868b]'
    }`;
  };

  const getTextAreaLabelClass = () => {
    const isActive = isFieldActive('message');
    return `absolute left-4 pointer-events-none transition-all duration-300 ease-out font-sans ${
      isActive
        ? 'top-2.5 text-[10px] font-semibold text-[#1d1d1f]/60 uppercase tracking-widest'
        : 'top-4 text-sm text-[#86868b]'
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
      // 3. Prepare silent Google Form background submission
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append(GOOGLE_FORM_CONFIG.fields.fullName, nameVal);
      urlEncodedData.append(GOOGLE_FORM_CONFIG.fields.email, emailVal);
      
      // Since Google Form does not have a separate field for Subject,
      // we format the message field to contain both Subject and Message
      const formattedMessage = `Subject: ${subjectVal}\n\n${messageVal}`;
      urlEncodedData.append(GOOGLE_FORM_CONFIG.fields.message, formattedMessage);

      // Temporary debug logging in development environment
      if (process.env.NODE_ENV !== 'production') {
        console.log('--- GOOGLE FORM SUBMISSION AUDIT ---');
        console.log('Target Endpoint:', GOOGLE_FORM_CONFIG.formUrl);
        console.log('Mapped Fields & Payloads:');
        console.log(`- ${GOOGLE_FORM_CONFIG.fields.fullName} (Full Name):`, nameVal);
        console.log(`- ${GOOGLE_FORM_CONFIG.fields.email} (Email Address):`, emailVal);
        console.log(`- ${GOOGLE_FORM_CONFIG.fields.message} (Formatted Message with Subject):`, formattedMessage);
      }

      // Perform POST submission to the formResponse endpoint with mode: 'no-cors'
      // This allows silent submission from any origin without browser CORS blocks.
      const response = await fetch(GOOGLE_FORM_CONFIG.formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData.toString(),
      });

      if (process.env.NODE_ENV !== 'production') {
        console.log('Submission completed. Response metadata:', response);
      }

      // Clear the form only on successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLastSubmittedTime(Date.now());
      showToastMessage("Message sent successfully.", "success");
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error("Google Forms submission integration error:", error);
      }
      // On failure, do NOT clear the form so user doesn't lose their message!
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
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Contact Me
        </h2>
        <p className="text-base text-[#86868b] max-w-xl font-normal">
          Have a question or want to collaborate on a design or development project? Send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Location & Direct Contact Info */}
        <div className="md:col-span-5 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-black/5 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">Location</span>
                <h3 className="text-sm font-semibold text-[#1d1d1f]">Kozhikode, Kerala, India</h3>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-black/5">
              <div className="w-10 h-10 rounded-2xl bg-[#1d1d1f]/10 text-[#1d1d1f] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">Email</span>
                <a
                  href="mailto:musthafacz13@gmail.com"
                  className="text-sm font-semibold text-[#0071e3] hover:underline block truncate"
                >
                  musthafacz13@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Apple-inspired Contact Form */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
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
                <div className="relative rounded-2xl bg-[#f5f5f7] border border-black/[0.04] focus-within:border-[#1d1d1f] focus-within:bg-white focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300">
                  <input
                    type="text"
                    required
                    name="fullName"
                    id="contact-full-name"
                    value={formData.name}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] focus:outline-none focus:ring-0 transition-all duration-200"
                    suppressHydrationWarning
                  />
                  <label htmlFor="contact-full-name" className={getLabelClass('name')}>
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                </div>

                {/* Email Address Input */}
                <div className="relative rounded-2xl bg-[#f5f5f7] border border-black/[0.04] focus-within:border-[#1d1d1f] focus-within:bg-white focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300">
                  <input
                    type="email"
                    required
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] focus:outline-none focus:ring-0 transition-all duration-200"
                    suppressHydrationWarning
                  />
                  <label htmlFor="contact-email" className={getLabelClass('email')}>
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative rounded-2xl bg-[#f5f5f7] border border-black/[0.04] focus-within:border-[#1d1d1f] focus-within:bg-white focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300">
                <input
                  type="text"
                  required
                  name="subject"
                  id="contact-subject"
                  value={formData.subject}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] focus:outline-none focus:ring-0 transition-all duration-200"
                  suppressHydrationWarning
                />
                <label htmlFor="contact-subject" className={getLabelClass('subject')}>
                  Subject <span className="text-rose-500">*</span>
                </label>
              </div>

              {/* Message Input */}
              <div className="relative rounded-2xl bg-[#f5f5f7] border border-black/[0.04] focus-within:border-[#1d1d1f] focus-within:bg-white focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300">
                <textarea
                  required
                  rows={4}
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 pt-6 pb-2 bg-transparent border-none text-sm text-[#1d1d1f] focus:outline-none focus:ring-0 transition-all duration-200 resize-none min-h-[120px]"
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
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-[#2d2d2f] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
      </div>

      {/* Premium Apple-style Success / Error Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
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
