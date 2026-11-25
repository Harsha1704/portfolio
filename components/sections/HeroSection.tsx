"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, GraduationCap, Award, Code2, Briefcase, CheckCircle2, Eye, Download } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ResumePreviewModal } from "@/components/ui/ResumePreviewModal";

export const HeroSection: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

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
            <RevealOnScroll delay={0.15}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-6">
                Computer Science & Engineering undergraduate specializing in{" "}
                <strong className="text-slate-900 font-semibold">AI & Machine Learning</strong> at{" "}
                Lovely Professional University (<span className="text-blue-700 font-semibold font-mono">8.51 CGPA</span>, Aug 2024 – Present). 
                Passionate about bridging multimodal vision-language models with resilient, full-stack software architectures.
              </p>
            </RevealOnScroll>

            {/* Compact Recruiter Credential Bar */}
            <RevealOnScroll delay={0.18}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>B.Tech CSE (AI & ML), LPU</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-xs font-semibold text-blue-900 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>CGPA: 8.51</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-xs font-semibold text-emerald-900 shadow-2xs">
                  <Code2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>250+ Problems Solved</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50/80 border border-indigo-200/80 text-xs font-semibold text-indigo-900 shadow-2xs">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Edufiy ML Internship</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-xs font-semibold text-amber-900 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Oracle MySQL Certified</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Action Buttons: Clear Recruiter Primary Actions */}
            <RevealOnScroll delay={0.21}>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
                {/* 1. Explore Projects */}
                <Link
                  href="/projects"
                  className={buttonVariants({ variant: "primary", size: "md" })}
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* 2. Preview CV Modal */}
                <button
                  type="button"
                  onClick={() => setIsCvModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 rounded-xl shadow-2xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  aria-label="Preview Sri Harsha CV in modal dialog"
                  title="Preview CV in modal"
                >
                  <Eye className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Preview CV</span>
                </button>

                {/* 3. Direct Download CV */}
                <a
                  href="/Sri_Harsha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sri_Harsha_Resume.pdf"
                  aria-label="Download Sri Harsha CV / Resume (PDF)"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 rounded-xl shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  title="Direct Download (PDF)"
                >
                  <Download className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Download CV</span>
                </a>

                {/* 4. Prominent LinkedIn CTA */}
                <a
                  href="https://linkedin.com/in/sriharsha-jilla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl bg-[#0a66c2] text-white hover:bg-[#004182] focus:ring-[#0a66c2] shadow-xs px-4 py-2.5 text-sm gap-2"
                  aria-label="Connect with Sri Harsha on LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 shrink-0 fill-current" />
                  <span>LinkedIn</span>
                </a>

                {/* Secondary Navigation */}
                <Link
                  href="/about"
                  className={buttonVariants({ variant: "ghost", size: "md" })}
                >
                  About Me
                </Link>

                {/* GitHub Social Profile Link */}
                <div className="flex items-center pl-1 sm:pl-2 border-l border-slate-200">
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

          {/* Right Column: Approved Candidate Portrait alongside introduction */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <RevealOnScroll delay={0.18} direction="left" className="w-full max-w-md">
              <div className="relative group">
                {/* Subtle ambient cobalt glow behind portrait */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-blue-400/20 rounded-[28px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Portrait Card Container */}
                <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200/90 bg-white shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/profile/profile-photo.png"
                      alt="Sri Harsha — B.Tech CSE (AI & ML) at Lovely Professional University"
                      fill
                      priority
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 450px, 420px"
                      className="object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Subtle gradient overlay at bottom for clean badge contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent pointer-events-none" />

                    {/* Floating recruiter status card */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white shadow-lg flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-white tracking-tight">Sri Harsha</p>
                          <p className="text-[10px] sm:text-[11px] font-mono text-slate-300">
                            B.Tech CSE (AI &amp; ML) • <span className="whitespace-nowrap">8.51 CGPA</span>
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-blue-300 bg-blue-950/80 px-2.5 py-1 rounded-lg border border-blue-800/60">
                        LPU
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>

      {/* Accessible In-Browser CV Preview Modal */}
      <ResumePreviewModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </section>
  );
};
