"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Users, FolderOpen, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Program } from "@/types";

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestBrochure: () => void;
}

export function ProgramModal({ program, isOpen, onClose, onRequestBrochure }: ProgramModalProps) {
  if (!program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-white/10 shadow-2xl">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Header with icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}>
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{program.title}</h2>
                    <p className="text-sm px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 w-fit">
                      {program.category} • {program.level}
                    </p>
                  </div>
                </div>

                {/* Full Description */}
                <div className="mb-8">
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    {(program.fullDescription || program.description).split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Duration</div>
                      <div className="text-xl font-semibold text-white">{program.duration}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Level</div>
                      <div className="text-xl font-semibold text-white">{program.level}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Expert Mentors</span>
                      </div>
                      <div className="text-xl font-semibold text-white">{program.mentorsCount || 0}+</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <FolderOpen className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Live Projects</span>
                      </div>
                      <div className="text-xl font-semibold text-white">{program.projects || 0}</div>
                    </div>
                  </div>
                </div>

                {/* Curriculum Overview */}
                {program.modules && program.modules.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Curriculum Overview
                    </h3>
                    <div className="space-y-3">
                      {program.modules.map((module, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/8 transition-colors">
                          <Check className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      onRequestBrochure();
                      onClose();
                    }}
                    className="flex-1"
                  >
                    Request Brochure
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
