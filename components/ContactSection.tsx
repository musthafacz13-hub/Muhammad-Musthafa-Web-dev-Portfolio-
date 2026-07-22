'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, CheckCircle2, Mail } from 'lucide-react';

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

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 600);
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

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-black/5"
          >
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight">
                    Message Sent
                  </h3>
                  <p className="text-sm text-[#86868b] max-w-sm leading-relaxed">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-5 py-2 rounded-full bg-[#1d1d1f] text-white text-xs font-medium hover:bg-[#2d2d2f] transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="UI/UX Inquiry or Web Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] border border-black/5 focus:border-[#0071e3] focus:bg-white focus:outline-none text-sm text-[#1d1d1f] transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-[#2d2d2f] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5 opacity-80" />
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
