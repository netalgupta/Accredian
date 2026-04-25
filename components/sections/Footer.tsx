"use client";

import { Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  About: ["Our Story", "Team", "Careers", "Press", "Blog"],
  Programs: ["Tech Programs", "Business Programs", "Leadership", "Custom Programs", "Certifications"],
  Resources: ["Case Studies", "Whitepapers", "Webinars", "Learning Hub", "ROI Calculator"],
  Contact: ["Talk to Sales", "Support", "Partner With Us", "Privacy Policy", "Terms of Service"],
};

const SOCIAL = [
  { label: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com" },
  { label: "Twitter", Icon: Twitter, href: "https://twitter.com" },
  { label: "Instagram", Icon: Instagram, href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/8" aria-label="Site footer">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="text-white font-display font-bold text-base">
                Accredian{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                  Enterprise
                </span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              India&apos;s leading enterprise learning platform for high-growth companies.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">Terms</a>
            <a
              href="/admin"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors flex items-center gap-1"
            >
              Admin <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
