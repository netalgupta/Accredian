"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { programs } from "@/lib/data";
import { Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgramModal } from "@/components/ui/ProgramModal";
import { Clock, BarChart2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Program } from "@/types";

type Category = "All" | "Tech" | "Business" | "Leadership";
const TABS: Category[] = ["All", "Tech", "Business", "Leadership"];

export default function Programs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState<Category>("All");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = active === "All" ? programs : programs.filter((p) => p.category === active);

  const handleKnowMore = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleRequestBrochure = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="programs"
      ref={ref}
      className="py-24 lg:py-32 bg-slate-900/50 relative overflow-hidden"
      aria-label="Programs"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-sm font-semibold tracking-wide mb-4"
          >
            Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-4"
          >
            Programs Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
              Enterprise Scale
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-gray-400 text-lg"
          >
            From cutting-edge tech to leadership excellence — curated for modern business.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap" role="tablist" aria-label="Filter programs by category">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                active === tab
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((prog) => (
              <motion.div
                key={prog.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/3 border border-white/8 rounded-2xl p-6 overflow-hidden
                           hover:-translate-y-1 hover:border-white/20 hover:shadow-card-hover
                           transition-all duration-300 flex flex-col"
              >
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prog.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-xl shadow-lg`}>
                    {prog.icon}
                  </div>
                  <Badge color={prog.category}>{prog.category}</Badge>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-brand-300 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {prog.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-5 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {prog.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BarChart2 className="w-3.5 h-3.5" /> {prog.level}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleKnowMore(prog)}
                  className="w-full group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-200"
                  aria-label={`Know more about ${prog.title}`}
                >
                  Know More <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Program Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestBrochure={handleRequestBrochure}
      />
    </section>
  );
}
