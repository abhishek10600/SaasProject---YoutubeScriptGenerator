import React from "react";

const Benefit = () => {
  return (
    <section className="md:px-8 px-4 md:py-16 py-14 max-w-6xl mx-auto space-y-6">
      <h3 className="md:text-3xl text-2xl font-extrabold">
        Creating Content Shouldn’t Feel This Hard…
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-red-600/40 transition">
          <ul className="space-y-3 text-gray-300 text-lg leading-relaxed">
            <li>❌ Staring at a blank screen</li>
            <li>❌ Robotic, boring scripts</li>
            <li>❌ Takes too long to stay consistent</li>
            <li>❌ Videos flop due to weak storytelling</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-red-600/10 border border-red-600 hover:bg-red-600/20 transition">
          <h4 className="text-xl font-bold mb-3 text-red-500">
            Meet Your New Content Team… in One Tool
          </h4>
          <ul className="space-y-3 text-gray-300 text-lg leading-relaxed">
            <li>🔥 Human-like engaging narration</li>
            <li>🔥 Viral hook engine</li>
            <li>🔥 Retention-optimized storytelling</li>
            <li>🔥 Ready to record instantly</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
