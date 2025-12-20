import React from "react";

const Pricing = () => {
  return (
    <section className="md:px-8 md:py-24 px-6 py-24 max-w-6xl mx-auto relative">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-red-600/20 blur-[160px] rounded-full"></div>
      </div>

      <h3 className="md:text-4xl text-2xl font-extrabold text-center mb-4">
        Simple, Creator-Friendly Pricing
      </h3>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Choose the plan that helps you create consistently and grow faster.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Starter */}
        <div
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
                        hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
        >
          <h4 className="text-2xl font-bold mb-1">Starter</h4>
          <p className="text-gray-400 mb-6">Perfect to test the power</p>

          <div className="text-4xl font-extrabold mb-6">Free</div>

          <ul className="text-gray-300 space-y-3 mb-8 text-[15px]">
            <li>✔ 3 scripts / month</li>
            <li>✔ Basic hooks</li>
            <li>✔ Standard quality</li>
            <li>✔ Instant generation</li>
          </ul>

          <button
            className="w-full px-6 py-3 border border-gray-500 
                             rounded-xl hover:bg-white hover:text-black transition font-semibold"
          >
            Get Started
          </button>
        </div>

        {/* Creator */}
        <div
          className="relative p-8 rounded-2xl bg-gradient-to-br from-red-600 to-red-700
                        text-black shadow-[0_0_80px_rgba(255,0,0,0.4)]
                        hover:-translate-y-1 transition-all duration-300 scale-[1.02]"
        >
          {/* badge */}
          <span className="absolute -top-4 right-6 bg-black text-white text-sm px-4 py-1 rounded-full border border-white/20">
            Most Popular
          </span>

          <h4 className="text-2xl font-extrabold mb-1">Creator</h4>
          <p className="mb-6 opacity-80 font-medium">
            Built for serious uploaders
          </p>

          <div className="text-4xl font-extrabold mb-6">
            $5 <span className="text-sm font-bold opacity-80">/ month</span>
          </div>

          <ul className="space-y-3 mb-8 font-semibold text-[15px]">
            <li>✔ Unlimited scripts</li>
            <li>✔ Advanced viral hook engine</li>
            <li>✔ Premium storytelling quality</li>
            <li>✔ Priority generation speed</li>
          </ul>

          <button className="w-full px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition font-bold">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
