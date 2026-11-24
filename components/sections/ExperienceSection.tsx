"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Lock,
  GitBranch,
  Activity,
  Layers,
} from "lucide-react";
import { experienceData } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export const ExperienceSection: React.FC = () => {
  return (
    <Section
      id="experience"
      badge="Industry Experience"
      title="Professional Experience & Engineering Internship"
      titleAs="h1"
      subtitle="Practical software and machine learning engineering applied to production pipelines, model evaluation routines, and agile workflows."
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Editorial Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {/* Timeline Bullet Anchor */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow-xs flex items-center justify-center text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <RevealOnScroll delay={idx * 0.1}>
                <Card className="p-6 sm:p-8 md:p-10 bg-white border border-slate-200 relative overflow-hidden shadow-sm hover:border-blue-200 transition-all">
                  {/* Header: Company, Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                            {exp.role}
                          </h3>
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-base font-semibold text-blue-600 font-mono mt-1">
                          {exp.company}
                        </p>
                        {exp.location && (
                          <span className="text-xs text-slate-400 font-mono block mt-0.5">
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 self-start sm:self-auto shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Role Overview & Scope
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Responsibilities & Deliverables */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      Key Technical Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-3.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-xs sm:text-sm text-slate-700 flex items-start gap-3 bg-slate-50/60 p-3 rounded-xl border border-slate-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applied Technologies Grid */}
                  <div className="pt-6 border-t border-slate-100 mb-6">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Technologies & Engineering Tooling
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono font-medium bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-slate-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Confidentiality & Verification Disclosure Note */}
                  {exp.confidentialityNote && (
                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
                      <Lock className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold block mb-0.5">
                          Professional Confidentiality Disclosure:
                        </span>
                        <span>{exp.confidentialityNote}</span>
                      </div>
                    </div>
                  )}
                </Card>
              </RevealOnScroll>
            </div>
          ))}
        </div>

        {/* Engineering Methodology Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Data Pipeline Engineering
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Experience with end-to-end data cleaning, handling missing observations, and engineering robust numerical and categorical features.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Rigorous Model Benchmarking
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Evaluating classification performance through precision, recall, and ROC-AUC curves rather than superficial accuracy metrics alone.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <GitBranch className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Agile Collaboration
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Collaborative engineering in Scrum sprints, branch protection on Git, transparent task decomposition, and active code reviews.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
