"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden"
      aria-label="Why Accredian Enterprise"
    >
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 text-accent-400 text-sm font-semibold tracking-wide mb-4"
          >
            Why Accredian
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-4"
          >
            Everything Your Teams Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-brand-400">
              Grow Faster
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            We don&apos;t sell generic courses. We build precision learning experiences that
            transform how your organization thinks, builds, and wins.
          </motion.p>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="group relative bg-white/3 border border-white/8 rounded-2xl p-7 cursor-pointer overflow-hidden
                         hover:-translate-y-2 hover:border-brand-400/40 hover:shadow-[0_8px_40px_rgba(26,92,247,0.18)]
                         transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-brand-500/5 to-accent-500/5 rounded-2xl" />

              {/* Icon */}
              <div className={`inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} mb-5 text-2xl shadow-lg`}>
                {feature.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-brand-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom line glow */}
              <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
