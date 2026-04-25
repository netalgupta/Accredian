import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Accredian Enterprise",
  description: "Oops! The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg">
        {/* 404 number */}
        <div className="text-8xl sm:text-9xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400 mb-4 leading-none">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
          Oops! Page not found
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold hover:from-brand-500 hover:to-brand-400 shadow-lg shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            ← Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
