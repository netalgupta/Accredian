"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroStats } from "@/lib/data";

function CountUp({ end, duration = 2, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };
  const scrollToPrograms = () => {
    const el = document.getElementById("programs");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      aria-label="Hero section"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-600/15 blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2">
            <span className="px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-sm font-semibold tracking-wide">
              🚀 Trusted by 500+ Companies
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          >
            Upskill Your Teams.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-brand-300 animate-gradient-shift bg-[length:200%_auto]">
              Accelerate Your Business.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10"
          >
            India&apos;s leading enterprise learning platform — custom-built programs, world-class mentors,
            and measurable ROI for 500+ companies and 50,000+ learners.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              variant="primary"
              size="xl"
              onClick={scrollToContact}
              aria-label="Talk to our team"
              id="hero-cta-primary"
            >
              Talk to Us <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="xl"
              onClick={scrollToPrograms}
              aria-label="View programs"
              id="hero-cta-secondary"
            >
              <Play className="w-4 h-4 fill-current" /> View Programs
            </Button>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="animate-float" style={{ animationDelay: `${i * 2}s` }}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:border-brand-400/40 hover:bg-white/8 transition-all duration-300 hover:shadow-glow-brand">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1">
                      <CountUp
                        end={typeof stat.value === 'number' ? stat.value : parseFloat(String(stat.value))}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
