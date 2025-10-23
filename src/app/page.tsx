"use client";

import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhotographySessionsSection from "@/components/PhotographySessionsSection";
import InvestmentSection from "@/components/InvestmentSection";
import PoliciesSection from "@/components/PoliciesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <HeroSection />
      <AboutSection />
      <PhotographySessionsSection />
      <InvestmentSection />
      <PoliciesSection />
      <FAQSection />
      <ContactSection />
    </ScrollAnimationProvider>
  );
}