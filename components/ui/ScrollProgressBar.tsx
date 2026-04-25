"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 z-50"
      style={{ width: `${scrollProgress}%` }}
      transition={{ type: "tween", duration: 0.1 }}
    />
  );
}
