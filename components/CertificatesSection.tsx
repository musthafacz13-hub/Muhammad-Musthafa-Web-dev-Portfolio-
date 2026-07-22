'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-1.5 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Certifications
        </h2>
      </div>

      {/* Certifications Coming Soon Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-10 rounded-3xl border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
              Coming Soon
            </span>
            <h3 className="text-lg font-bold text-[#1d1d1f]">
              Verified Certifications
            </h3>
            <p className="text-sm text-[#86868b] mt-1">
              Verified certificates and course credentials will be published here upon completion.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
