import React from "react";

const Features = () => {
  return (
    <section className="md:px-8 px-4 md:py-20 py-18 max-w-6xl mx-auto">
      <h3 className="md:text-4xl text-3xl font-extrabold text-center mb-12">
        Built For Every Faceless Channel
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition hover:scale-[1.02]">
          <h4 className="font-bold mb-2 text-xl">🎯 Niche-Trained AI</h4>
          <p className="text-gray-400">
            Motivation, finance, dark facts, documentaries, shorts & more.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition hover:scale-[1.02]">
          <h4 className="font-bold mb-2 text-xl">🎬 Viral Hook Engine</h4>
          <p className="text-gray-400">
            Hooks engineered to instantly grab attention.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition hover:scale-[1.02]">
          <h4 className="font-bold mb-2 text-xl">⏱️ Create In Seconds</h4>
          <p className="text-gray-400">
            Type → Generate → Upload. It’s that simple.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
