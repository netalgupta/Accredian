"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { howItWorks } from "@/lib/data";

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden"
      aria-label="How it works"
    >
      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wide mb-4"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-4"
          >
            Get Started in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-400">
              3 Simple Steps
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-gray-400 text-lg"
          >
            From first conversation to full deployment — we make enterprise learning effortless.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(66%-4rem)] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
              className="h-full origin-left bg-gradient-to-r from-brand-500/40 via-accent-500/40 to-emerald-500/40 rounded-full"
            />
            {/* Dots */}
            {[0, 50].map((pos) => (
              <motion.div
                key={pos}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + pos * 0.005 }}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-400"
                style={{ left: `${pos}%` }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center lg:text-left"
              >
                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-2xl shadow-glow-brand">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {/* Mobile connector */}
                {i < howItWorks.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-brand-500/50 to-transparent rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
