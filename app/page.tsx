'use client';

import React from 'react';
import { WatercolorMesh } from '@/components/WatercolorMesh';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
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

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Design Philosophy Section */}
      <PhilosophySection />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Experience Section */}
      <ExperienceSection />

      {/* 7. Certificates Section */}
      <CertificatesSection />

      {/* 8. Contact Section */}
      <ContactSection />

      {/* 9. Social Section */}
      <SocialSection />

      {/* 10. Footer Section */}
      <FooterSection />
    </main>
  );
}
