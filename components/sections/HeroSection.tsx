"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const HeroSection: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse offset within window ([-1, 1])
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 28;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReduced]);

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle Ambient Radial Glow with Gentle Inertial Tracking */}
      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                x: `calc(-50% + ${mousePos.x}px)`,
                y: `${mousePos.y}px`,
              }
        }
        transition={{ type: "spring", stiffness: 45, damping: 25 }}
        className="absolute top-0 left-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-b from-blue-100/40 via-blue-50/25 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Action Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Badge */}
            <RevealOnScroll delay={0.04}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/90 text-emerald-800 text-xs font-mono font-medium mb-6 shadow-2xs hover:bg-emerald-100/70 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{profileData.availability}</span>
              </div>
            </RevealOnScroll>

            {/* H1 Heading with Refined Motion Entrance */}
            <RevealOnScroll delay={0.08}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
                Hi, I&apos;m <span className="text-slate-900">{profileData.name}</span>.
                <br />
                <span className="text-blue-600 font-bold inline-block hover:brightness-105 transition-all">
                  I build intelligent AI systems
                </span>{" "}
                and ship production software.
              </h1>
            </RevealOnScroll>

            {/* Sub-headline Position Statement */}
            <RevealOnScroll delay={0.12}>
              <div className="flex items-center gap-2 text-sm sm:text-base font-semibold font-mono text-slate-700 uppercase tracking-wide mb-5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{profileData.headline}</span>
              </div>
            </RevealOnScroll>

            {/* Narrative Bio */}
            <RevealOnScroll delay={0.16}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Computer Science & Engineering undergraduate specializing in{" "}
                <strong className="text-slate-900 font-semibold">AI & Machine Learning</strong> at{" "}
                Lovely Professional University (<span className="text-blue-700 font-semibold font-mono">8.51 CGPA</span>, Aug 2024 – Present). 
                Passionate about bridging multimodal vision-language models with resilient, full-stack software architectures.
              </p>
            </RevealOnScroll>

            {/* Action Buttons & Socials */}
            <RevealOnScroll delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/projects"
                  className={buttonVariants({ variant: "primary", size: "md" })}
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/about"
                  className={buttonVariants({ variant: "outline", size: "md" })}
                >
                  About Me
                </Link>
                <a
                  href="/Sri_Harsha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sri_Harsha_Resume.pdf"
                  aria-label="Download Sri Harsha CV / Resume (PDF)"
                  className={buttonVariants({ variant: "secondary", size: "md" })}
                >
                  <FileText className="w-4 h-4 mr-2 shrink-0" />
                  <span>CV / Resume</span>
                </a>

                {/* Social Profile Links */}
                <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                  <a
                    href="https://github.com/Harsha1704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 transition-colors"
                    aria-label="Sri Harsha on GitHub (@Harsha1704)"
                    title="GitHub: github.com/Harsha1704"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sriharsha-jilla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                    aria-label="Sri Harsha on LinkedIn"
                    title="LinkedIn: linkedin.com/in/sriharsha-jilla"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Credibility Metrics Bar */}
            <RevealOnScroll delay={0.24} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200 w-full">
                {profileData.metrics.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col p-2.5 rounded-xl transition-all hover:bg-slate-50/80 border border-transparent hover:border-slate-100"
                  >
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {item.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {item.context}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Architectural Telemetry Visual Card with Refined Depth */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.18} direction="left">
              <Card className="p-6 md:p-8 bg-slate-900 text-slate-100 shadow-2xl rounded-3xl border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
                {/* Subtle Ambient Backlight Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

                {/* Visual Window Chrome */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 group-hover:brightness-110 transition-all" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80 group-hover:brightness-110 transition-all" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 group-hover:brightness-110 transition-all" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>satquery-multimodal.ts</span>
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">pipeline</span> ={" "}
                    <span className="text-amber-300">new</span>{" "}
                    <span className="text-emerald-300">MultimodalVisionAssistant</span>({`{`}
                  </div>
                  <div className="pl-4 text-slate-300 space-y-1">
                    <div>
                      backbone: <span className="text-emerald-400">&quot;remote-sensing-v2&quot;</span>,
                    </div>
                    <div>
                      crossAttention: <span className="text-blue-400">true</span>,
                    </div>
                    <div>
                      resolution: <span className="text-amber-400">&quot;4K-Tiled&quot;</span>,
                    </div>
                    <div>
                      latencyBudget: <span className="text-purple-300">150</span> <span className="text-slate-500">{"// ms"}</span>
                    </div>
                  </div>
                  <div>{`});`}</div>

                  <div className="pt-2 text-slate-400 border-t border-slate-800 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-400">✓</span> Ingested high-resolution raster tile
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-400">✓</span> Cross-attention spatial alignment: <span className="text-blue-300">0.942 IoU</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-blue-400">⚡</span> Full-stack API: <span className="text-slate-200">Flask + React.js</span>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Status: <span className="text-emerald-400 font-semibold">Active Pipeline</span>
                  </span>
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
                    Dual-Domain Stack
                  </span>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
};
