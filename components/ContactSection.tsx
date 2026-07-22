'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, CheckCircle2, Clock, Mail, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Apple-like smooth submission delay
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          07 — Get In Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
          Let&apos;s Connect
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-xl mt-1 font-normal">
          Interested in discussing UI/UX design, web development, or creative collaborations? Send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Location & Contact Info Banner */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-black/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Location</span>
                <h3 className="text-lg font-bold text-[#1d1d1f]">Kozhikode, Kerala, India</h3>
              </div>
            </div>

            <p className="text-sm text-[#86868b] leading-relaxed mb-6">
              Always open to connecting with fellow designers, developers, and founders around the globe.
            </p>

            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#0071e3] shrink-0" />
              <div className="text-xs text-[#1d1d1f]">
                <p className="font-semibold">Local Time Zone</p>
                <p className="text-[#86868b]">Indian Standard Time (IST — UTC+5:30)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-3xl bg-[#f5f5f7] border border-black/5"
          >
            <div className="flex items-center gap-3 text-xs text-[#86868b]">
              <Mail className="w-4 h-4 text-[#0071e3]" />
              <span>Direct contact details will be populated soon.</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Apple-Style Form UI */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-black/5 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                    Thank You for Your Message
                  </h3>
                  <p className="text-sm text-[#86868b] max-w-md leading-relaxed">
                    Your inquiry has been captured in the UI preview. Muhammed will review incoming messages promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#1d1d1f] text-white text-xs font-medium hover:bg-[#2d2d2f] transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="UI/UX Inquiry or Web Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your thoughts or project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#2d2d2f] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 opacity-80" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
