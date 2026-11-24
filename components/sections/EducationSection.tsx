"use client";

import React from "react";
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { educationData } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export const EducationSection: React.FC = () => {
  return (
    <Section
      id="education"
      badge="Academic Pedigree"
      title="Education & Academic Excellence"
      titleAs="h1"
      subtitle="Consistent top-tier academic performance across undergraduate computing, intermediate science, and secondary education."
    >
      {/* Top Academic Highlights Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full max-w-full min-w-0">
        <div className="p-4 rounded-xl bg-white border border-blue-200/80 shadow-xs min-w-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            Undergraduate CGPA
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-600">
              8.51
            </span>
            <span className="text-xs font-mono text-slate-400">/ 10.0</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-0.5 block truncate">Lovely Professional Univ.</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-xs min-w-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            Intermediate (MPC)
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-700">
              94.9%
            </span>
          </div>
          <span className="text-[11px] text-emerald-600/90 mt-0.5 block truncate">Narayana Junior College</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs min-w-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            Matriculation (10th)
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-800">
              92.67%
            </span>
          </div>
          <span className="text-[11px] text-slate-500 mt-0.5 block truncate">Sri Chaitanya Techno</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs min-w-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            Specialization
          </span>
          <div className="text-sm sm:text-base font-bold text-slate-900 leading-tight mt-1">
            AI & Machine Learning
          </div>
          <span className="text-[11px] text-slate-500 mt-0.5 block truncate">B.Tech Honors Track</span>
        </div>
      </div>

      {/* Structured Academic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-full min-w-0">
        {educationData.map((item, idx) => {
          const isUndergrad = idx === 0;

          return (
            <RevealOnScroll key={item.id} delay={idx * 0.1}>
              <Card
                className={`p-6 sm:p-8 bg-white border h-full flex flex-col justify-between transition-all min-w-0 ${
                  isUndergrad
                    ? "border-blue-300 shadow-md ring-1 ring-blue-100 hover:border-blue-400"
                    : "border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Top Badge & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.period}</span>
                    </span>
                    <Badge variant={isUndergrad ? "blue" : "neutral"} size="sm">
                      {item.status}
                    </Badge>
                  </div>

                  {/* Degree & Institution */}
                  <div className="mb-5">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-semibold text-blue-700 mt-0.5">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    {item.specialization && (
                      <p className="text-xs text-slate-500 font-mono mt-2 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 inline-block">
                        {item.specialization}
                      </p>
                    )}
                  </div>

                  {/* Score Spotlight */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Academic Score
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-extrabold text-slate-900 font-mono">
                          {item.score}
                        </span>
                        {item.scoreLabel === "CGPA" && (
                          <span className="text-xs text-slate-400 font-mono">/ 10.0</span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700">
                      {item.scoreLabel}
                    </span>
                  </div>

                  {/* Academic Highlights */}
                  {item.highlights && (
                    <div className="mb-6">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                        Highlights & Foundation
                      </span>
                      <ul className="space-y-2.5">
                        {item.highlights.map((hl, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs text-slate-600 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Key Coursework (for B.Tech) */}
                {item.coursework && (
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                      Relevant Engineering Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((c) => (
                        <span
                          key={c}
                          className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/60"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Academic Philosophy Callout */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs w-full max-w-full min-w-0">
        <div className="flex items-start sm:items-center gap-4 min-w-0">
          <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900">
              Academic Theory Grounded in Applied Systems
            </h4>
            <p className="text-xs text-slate-500 max-w-xl leading-relaxed mt-0.5">
              Coursework in linear algebra, probability, data structures, and machine learning theory is directly implemented in projects like SatQuery AI and ResumeMatch AI.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
            LPU • B.Tech CSE (AI & ML)
          </span>
        </div>
      </div>
    </Section>
  );
};
