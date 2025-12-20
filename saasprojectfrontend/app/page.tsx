import Footer from "@/components/Footer";
import Benefit from "@/components/LandingPageComponents/Benefit";
import CTA from "@/components/LandingPageComponents/CTA";
import Features from "@/components/LandingPageComponents/Features";
import Hero from "@/components/LandingPageComponents/Hero";
import Pricing from "@/components/LandingPageComponents/Pricing";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Benefit />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
