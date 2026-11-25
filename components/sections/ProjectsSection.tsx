"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const prefersReduced = useReducedMotion();

  const categories = [
    "All",
    "Multimodal AI",
    "Applied NLP & GenAI",
    "Intelligent Systems",
    "Computer Vision",
    "3D & Interactive Web",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <Section
      id="projects"
      badge="Portfolio Work"
      title="Featured Engineering Projects"
      titleAs="h1"
      subtitle="Multimodal vision-language assistants, intelligent career telemetry, 3D digital heritage graphics, and affective computing systems."
    >
      {/* Category Filter Pills with Tactile Motion Feedback */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <motion.button
              key={cat}
              type="button"
              whileTap={prefersReduced ? undefined : { scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap transition-all border cursor-pointer select-none",
                isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
              )}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid with Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {filteredProjects.map((project, idx) => (
          <RevealOnScroll key={project.id} delay={idx * 0.08}>
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>

      {/* Architecture Integrity Note */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <p className="text-xs text-slate-500 font-mono">
          All projects reflect verified implementations with clear separation of implemented and roadmap features.
          Click any card to read the complete technical case study.
        </p>
      </div>
    </Section>
  );
};
