'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Sparkles, Lock } from 'lucide-react';

const CERTIFICATE_SLOTS = [
  {
    id: 1,
    category: 'UI/UX Design',
    title: 'Professional UI/UX Architecture Certification',
    issuer: 'Upcoming Verification',
  },
  {
    id: 2,
    category: 'Web Development',
    title: 'Full-Stack Web Engineering Mastery',
    issuer: 'Upcoming Verification',
  },
  {
    id: 3,
    category: 'Frontend Engineering',
    title: 'Modern TypeScript & React Ecosystem',
    issuer: 'Upcoming Verification',
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          06 — Credentials
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
          Certificates
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-xl mt-1 font-normal">
          Formal credentials and verified course achievements will be presented here upon completion.
        </p>
      </div>

      {/* Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CERTIFICATE_SLOTS.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl border border-black/5 hover:border-black/15 transition-all duration-300 relative group flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-[#86868b]">
                  {cert.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                {cert.title}
              </h3>
              <p className="text-xs text-[#86868b] font-medium">
                {cert.issuer}
              </p>
            </div>

            {/* Apple Glass Badge Container */}
            <div className="mt-8 pt-6 border-t border-black/5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#f5f5f7]/80 border border-black/5">
              <div className="glass-pill px-5 py-2.5 rounded-full flex items-center gap-2 border border-black/10 shadow-xs mb-2">
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-bold text-[#1d1d1f] tracking-tight">
                  Certificate Coming Soon
                </span>
              </div>
              <span className="text-[11px] text-[#86868b] font-mono">Status: In Progress</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
