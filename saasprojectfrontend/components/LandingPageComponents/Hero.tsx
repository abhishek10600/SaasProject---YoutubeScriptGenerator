import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="md:px-8 md:py-20 px-3 py-18 text-center max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-6xl font-extrabold leading-tight">
        Turn Your Faceless YouTube Ideas Into{" "}
        <span className="text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]">
          Viral-Ready Scripts{" "}
        </span>
        In Seconds
      </h2>

      <p className="md:mt-6 mt-5 text-xs text-gray-400 md:text-lg max-w-3xl mx-auto leading-relaxed">
        No writer’s block. No overthinking. Just highly engaging scripts crafted
        to boost watch time, retention, and growth.
      </p>

      <div className="mt-8 flex justify-center md:gap-4 gap-2">
        <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-lg font-bold shadow-xl shadow-red-600/40 transition">
          Start Free
        </Button>

        <Button size="lg" className="border border-white/20 hover:bg-white hover:text-black rounded-lg font-bold transition">
          See Example Scripts
        </Button>
      </div>

      <p className="mt-6 text-gray-500 text-xs md:text-sm tracking-wide uppercase">
        Trusted by creators, theme pages & faceless YouTube brands
      </p>
    </section>
  );
};

export default Hero;
