"use client";

import { partners } from "@/lib/data";

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="py-16 bg-slate-950 border-y border-white/5"
      aria-label="Trusted by companies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          Trusted by industry leaders worldwide
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className="flex items-center justify-center bg-white/5 border border-white/8 rounded-xl px-8 py-4 min-w-[160px] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
            >
              <span className="text-gray-300 font-semibold text-base whitespace-nowrap tracking-wide hover:text-white transition-colors">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
