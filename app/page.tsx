import React from 'react';
import { WatercolorMesh } from '@/components/WatercolorMesh';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import dynamic from 'next/dynamic';

// Below-the-fold components split dynamically to reduce initial JavaScript payload
const AboutSection = dynamic(() => import('@/components/AboutSection').then((mod) => mod.AboutSection));
const SkillsSection = dynamic(() => import('@/components/SkillsSection').then((mod) => mod.SkillsSection));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection').then((mod) => mod.ProjectsSection));
const CertificatesSection = dynamic(() => import('@/components/CertificatesSection').then((mod) => mod.CertificatesSection));
const ContactSection = dynamic(() => import('@/components/ContactSection').then((mod) => mod.ContactSection));
const SocialSection = dynamic(() => import('@/components/SocialSection').then((mod) => mod.SocialSection));
const FooterSection = dynamic(() => import('@/components/FooterSection').then((mod) => mod.FooterSection));

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
