"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";
import { User, Mail, Building2, Phone, Users, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Card";
import { leadSchema, type LeadFormData } from "@/lib/validations";

const TEAM_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];

async function launchConfetti() {
  const confetti = (await import("canvas-confetti")).default;
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#1a5cf7", "#c84ee8", "#3d80ff", "#eda9f8"],
  });
}

export default function LeadForm() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        await launchConfetti();
        toast.success("🎉 Request submitted!", {
          description: "Our team will reach out within 24 hours.",
          duration: 5000,
        });
        reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden"
      aria-label="Contact form"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/50 via-slate-950 to-accent-950/30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-sm font-semibold tracking-wide mb-5">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-5">
              Ready to Upskill{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                Your Enterprise?
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Talk to our enterprise learning consultants. We&apos;ll design a custom program
              for your team within 48 hours — no commitment required.
            </p>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                "Free 30-min needs assessment",
                "Custom curriculum in 48 hours",
                "No lock-in contracts",
                "Dedicated CSM from day one",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              id="lead-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-white/4 backdrop-blur-md border border-white/10 rounded-3xl p-7 sm:p-9 space-y-5"
              aria-label="Enterprise inquiry form"
            >
              <h3 className="text-white font-display font-bold text-xl mb-1">
                Talk to Our Team
              </h3>
              <p className="text-gray-400 text-sm mb-2">Fill in your details and we&apos;ll be in touch shortly.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="fullName"
                  label="Full Name *"
                  placeholder="Priya Sharma"
                  icon={<User className="w-4 h-4" />}
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />
                <Input
                  id="workEmail"
                  label="Work Email *"
                  type="email"
                  placeholder="priya@company.com"
                  icon={<Mail className="w-4 h-4" />}
                  error={errors.workEmail?.message}
                  {...register("workEmail")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="companyName"
                  label="Company Name *"
                  placeholder="Acme Corp"
                  icon={<Building2 className="w-4 h-4" />}
                  error={errors.companyName?.message}
                  {...register("companyName")}
                />
                <Input
                  id="phone"
                  label="Phone *"
                  type="tel"
                  placeholder="+91 98765 43210"
                  icon={<Phone className="w-4 h-4" />}
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>

              {/* Team Size */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="teamSize" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" /> Team Size *
                </label>
                <select
                  id="teamSize"
                  {...register("teamSize")}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 appearance-none cursor-pointer"
                  aria-label="Select team size"
                >
                  <option value="" className="bg-slate-900">Select team size</option>
                  {TEAM_SIZES.map((s) => (
                    <option key={s} value={s} className="bg-slate-900">{s} employees</option>
                  ))}
                </select>
                {errors.teamSize && (
                  <p className="text-xs text-red-400">{errors.teamSize.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-400" /> Message (optional)
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={3}
                  placeholder="Tell us about your team's learning goals..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
                id="form-submit-btn"
                aria-label="Submit inquiry"
              >
                <Send className="w-4 h-4" />
                {loading ? "Submitting..." : "Send My Request"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our Privacy Policy. We never spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
