"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Next.js App Router Template for lightweight, GPU-composited page transitions.
 * Unlike layout.tsx which persists across navigations, template.tsx creates a new
 * instance on route change, allowing smooth, accessible route transitions.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <main className="flex-1 flex flex-col">{children}</main>;
  }

  return (
    <motion.main
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1], // Editorial out curve
      }}
    >
      {children}
    </motion.main>
  );
}
