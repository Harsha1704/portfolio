"use client";

import React from "react";
import { CheckCircle2, Clock, Layers, Target, AlertTriangle, Lightbulb } from "lucide-react";
import { Project } from "@/types";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { CaseStudyHero } from "./CaseStudyHero";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ScreenshotGallery } from "./ScreenshotGallery";
import { ImplementationDetails } from "./ImplementationDetails";
import { ResultsAndLimitationsView } from "./ResultsAndLimitationsView";
import { ProjectRoadmap } from "./ProjectRoadmap";
import { ProjectNavigation } from "./ProjectNavigation";

export interface ProjectDetailViewProps {
  project: Project;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  return (
    <article className="py-12 md:py-20 bg-white min-h-screen">
      <Container size="tight">
        {/* Hero Section */}
        <CaseStudyHero project={project} />

        {/* Section 1: Executive Overview & Problem Statement */}
        <RevealOnScroll delay={0.05}>
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Problem Statement & Strategic Objectives</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {project.summary}
            </p>

            {project.problemStatement && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    01. Background Context
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.problemStatement.context}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 hover:border-amber-300 transition-colors">
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block mb-2">
                    02. Core Engineering Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.problemStatement.coreChallenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 hover:border-blue-300 transition-colors">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                    03. Target Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.problemStatement.engineeringGoal}
                  </p>
                </div>
              </div>
            )}

            {/* Technical Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span>Core Technical Objectives</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </RevealOnScroll>

        {/* Section 2: Visual Architecture & Pipeline Topology */}
        <ArchitectureDiagram
          summary={project.architectureSummary}
          layers={project.architectureLayers}
        />

        {/* Section 3: Visual Interface & System Demonstrations */}
        <ScreenshotGallery
          screenshots={project.screenshots}
          projectTitle={project.title}
        />

        {/* Section 4: Capabilities & Feature Matrix */}
        <RevealOnScroll delay={0.06}>
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Capabilities & Feature Matrix</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Implemented */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-200 transition-colors">
                <h3 className="text-sm font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Implemented & Verified Capabilities</span>
                </h3>
                <ul className="space-y-3">
                  {project.implementedFeatures.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Planned */}
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-200 transition-colors">
                <h3 className="text-sm font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Active Roadmap & Planned Enhancements</span>
                </h3>
                <ul className="space-y-3">
                  {project.plannedFeatures.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Section 5: Implementation Details & Technical Deep Dive */}
        <ImplementationDetails sections={project.implementationSections} />

        {/* Section 6: Engineering Challenges & Technical Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <RevealOnScroll delay={0.06}>
            <section className="mb-14">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>Engineering Challenges & Solutions</span>
              </h2>

              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors">
                    <div className="mb-3">
                      <span className="text-xs font-mono font-semibold text-rose-600 uppercase tracking-wider block mb-1">
                        Challenge 0{idx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.challenge}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-xs font-mono font-semibold text-emerald-600 uppercase tracking-wider block mb-1">
                        Engineering Resolution
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Section 7: Complete Technology Stack */}
        <RevealOnScroll delay={0.06}>
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Complete Technology Stack</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.techStack.map((category) => (
                <div key={category.category} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
                  <h3 className="text-xs font-mono font-semibold uppercase text-slate-400 mb-3">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* Section 8: Verified Results & Engineering Limitations */}
        <RevealOnScroll delay={0.06}>
          <ResultsAndLimitationsView data={project.resultsAndLimitations} />
        </RevealOnScroll>

        {/* Section 9: Development Roadmap & Milestones */}
        <RevealOnScroll delay={0.06}>
          <ProjectRoadmap roadmap={project.roadmap} />
        </RevealOnScroll>

        {/* Section 10: Previous/Next & Related Case Studies Navigation */}
        <RevealOnScroll delay={0.06}>
          <ProjectNavigation currentProject={project} allProjects={projectsData} />
        </RevealOnScroll>
      </Container>
    </article>
  );
};
