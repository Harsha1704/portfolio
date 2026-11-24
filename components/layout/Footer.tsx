"use client";

import React, { useSyncExternalStore } from "react";
import { Container } from "@/components/ui/Container";

const emptySubscribe = () => () => {};

export const Footer: React.FC = () => {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="border-t border-slate-200 bg-white py-12 md:py-16 text-slate-600">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-6 w-6 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                SH
              </span>
              <span className="font-semibold text-slate-900 text-base">
                Sri Harsha
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Aspiring Machine Learning Engineer | Full-Stack Developer | Lovely Professional University
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <a
              href="https://github.com/Harsha1704"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub (@Harsha1704)
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://linkedin.com/in/sriharsha-jilla/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="/Sri_Harsha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Resume (PDF)
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© <span suppressHydrationWarning>{currentYear}</span> Sri Harsha. Designed & Engineered with precision.</p>
          <p className="font-mono text-[11px]">
            Next.js App Router • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
};
