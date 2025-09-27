import Hero from "@/components/landing/Hero";
import TrustSection from "@/components/landing/TrustSection";
import MissedCallsSection from "@/components/landing/MissedCallsSection";
import MissedMomentsSection from "@/components/landing/MissedMomentsSection";
import Benefits from "@/components/landing/Benefits";
import Testimonial from "@/components/landing/Testimonial";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <MissedCallsSection />
      <MissedMomentsSection />
      <Benefits />
      <Testimonial />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTASection />
    </>
  );
}