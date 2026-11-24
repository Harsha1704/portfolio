"use client";

import React from "react";
import { Brain, Code2, GraduationCap, Layers, Target } from "lucide-react";
import { profileData } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export const AboutSection: React.FC = () => {
  return (
    <Section
      id="about"
      background="subtle"
      badge="About Me"
      title="Engineering at the Intersection of Intelligence & Systems"
      titleAs="h1"
      subtitle="Bridging theoretical machine learning models with resilient, production-ready full-stack software architectures."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Academic & Brand Spotlight */}
        <div className="lg:col-span-5 space-y-6">
          <RevealOnScroll delay={0.1}>
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Lovely Professional University
              </h3>
              <p className="text-sm font-semibold text-blue-700 font-mono mb-4">
                B.Tech Computer Science & Engineering (AI & ML)
              </p>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 font-mono">
                    8.51
                  </span>
                  <span className="text-xs text-slate-500 font-mono"> / 10.0</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <span className="text-xs font-medium text-slate-600">
                  August 2024 – Present • High Academic Standing (CGPA 8.51)
                </span>
              </div>

              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Core Coursework
              </p>
              <div className="flex flex-wrap gap-1.5">
                {profileData.education.coursework?.slice(0, 5).map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono bg-slate-100/80 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <Card className="p-6 bg-blue-600 text-white rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Target className="w-4 h-4 text-blue-200" />
                <span>Career Objective</span>
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">
                {profileData.careerObjective}
              </p>
            </Card>
          </RevealOnScroll>
        </div>

        {/* Right Column: Three Pillars of Competency */}
        <div className="lg:col-span-7 space-y-6">
          <RevealOnScroll delay={0.1}>
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Applied Machine Learning & Vision-Language
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Rather than treating machine learning as isolated notebook scripts, I engineer models that solve concrete visual and semantic problems. From remote sensing satellite tile analysis in <strong>SatQuery AI</strong> to convolutional emotion recognition in <strong>MoodMate</strong>, I focus on data preprocessing, cross-attention alignment, and model evaluation metrics.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs font-mono bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded border border-emerald-100">
                  Computer Vision
                </span>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded border border-emerald-100">
                  Multimodal LLMs
                </span>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded border border-emerald-100">
                  Scikit-learn & OpenCV
                </span>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Production-Ready Full-Stack Engineering
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                An intelligent model requires a resilient software architecture to deliver value. I build reactive client applications with <strong>React.js</strong> and modern TypeScript, connect lightweight inference microservices using <strong>Python Flask</strong> and Node.js, and organize data schemas with <strong>PostgreSQL & MySQL</strong>.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded border border-blue-100">
                  React.js & TypeScript
                </span>
                <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded border border-blue-100">
                  Python Flask REST APIs
                </span>
                <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded border border-blue-100">
                  Relational SQL Schemas
                </span>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Algorithmic Rigor & Agile Collaboration
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                I invest disciplined effort in core computational problem solving—demonstrated by <strong>250+ solved problems across LeetCode, GFG, Codeforces & HackerRank</strong>, 4-star language badges, and competitive hackathons like CODE STORM (8th rank among 50 teams). During my internship at Edufiy Tech Solutions, I honed agile development practices, code review hygiene, and sprint delivery.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs font-mono bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded border border-purple-100">
                  DSA & Complexity Analysis
                </span>
                <span className="text-xs font-mono bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded border border-purple-100">
                  Agile / Jira
                </span>
                <span className="text-xs font-mono bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded border border-purple-100">
                  Git Workflows
                </span>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
};
