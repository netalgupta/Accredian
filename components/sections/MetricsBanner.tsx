"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { metrics } from "@/lib/data";

function CountUp({ end, suffix, prefix, duration = 2.5 }: { end: number; suffix: string; prefix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = eased * end;
      setVal(Number.isInteger(end) ? Math.floor(v) : parseFloat(v.toFixed(1)));
      if (p < 1) requestAnimationFrame(animate);
      else setVal(end);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
}

export default function MetricsBanner() {
  return (
    <section
      id="metrics"
      className="py-20 relative overflow-hidden"
      aria-label="Key metrics"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-slate-900 to-brand-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-accent-600/20" />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-2"
                style={{ textShadow: "0 0 40px rgba(26,92,247,0.5)" }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} duration={2 + i * 0.3} />
              </div>
              <p className="text-gray-400 text-sm font-medium tracking-wide">{stat.label}</p>
              <div className="mt-3 mx-auto w-12 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
