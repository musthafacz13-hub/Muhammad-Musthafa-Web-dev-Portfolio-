'use client';

import React from 'react';
import { WatercolorMesh } from '@/components/WatercolorMesh';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { ContactSection } from '@/components/ContactSection';
import { SocialSection } from '@/components/SocialSection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-[#1d1d1f] overflow-hidden selection:bg-[#0071e3]/10 selection:text-[#0071e3]">
      {/* Animated WWDC Watercolor Background Mesh */}
      <WatercolorMesh />

      {/* Floating Glass Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services & Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Certifications Section */}
      <CertificatesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Social Section */}
      <SocialSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
