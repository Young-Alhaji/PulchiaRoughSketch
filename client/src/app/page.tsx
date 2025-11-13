"use client";

import { useEffect } from "react";
import {
  ScrollAnimationProvider,
  Navbar,
  HeroSection,
  AboutSection,
  PhotographySessionsSection,
  InvestmentSection,
  PoliciesSection,
  FAQSection,
  ContactSection,
  StructuredData,
} from "@/components";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation - lightweight and fast
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = window.innerWidth >= 768 ? 85 : 70;
          const elementPosition = element.offsetTop - navbarHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      });
    }
  }, []);
  return (
    <>
      <StructuredData />
      <Navbar />
      <ScrollAnimationProvider>
        <HeroSection />
        <AboutSection />
        {/* <PhotographySessionsSection /> */}
        <InvestmentSection />
        <PoliciesSection />
        <FAQSection />
        <ContactSection />
      </ScrollAnimationProvider>
    </>
  );
}
