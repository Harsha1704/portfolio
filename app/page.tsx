import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Brain, Briefcase, GraduationCap, Trophy, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { buttonVariants } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export default function HomePage() {
  // Select top 2 featured projects for the landing preview
  const previewProjects = projectsData.slice(0, 2);

  return (
    <div className="pt-16 pb-16">
      {/* 1. Focused Premium Hero Section */}
      <HeroSection />

      {/* 2. Selected Project Previews (Top 2 Featured Projects) */}
      <Section
        id="featured-preview"
        background="subtle"
        badge="Engineering Showcase"
        title="Selected Project Previews"
        subtitle="A preview of intelligent vision-language systems and career telemetry engines. Explore the dedicated projects page for all architecture deep-dives."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Action to View All Projects */}
        <div className="text-center pt-2">
          <Link
            href="/projects"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "bg-white hover:bg-slate-50 border-slate-300 font-semibold text-slate-900 shadow-sm",
            })}
          >
            <span>View All {projectsData.length} Projects & Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </Section>

      {/* 3. Portfolio Directory Highlights (Navigation Hub to Dedicated Pages) */}
      <Section
        id="directory-overview"
        badge="Portfolio Directory"
        title="Explore Detailed Credentials & Experience"
        subtitle="Every dimension of my academic foundations, algorithmic problem solving, and professional work has a dedicated route."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Skills */}
          <RevealOnScroll delay={0.05}>
            <Link href="/skills" className="block group h-full">
              <Card className="p-6 bg-white border border-slate-200 h-full flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Technical Skills</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    8 functional domains: Multimodal AI, Generative LLMs, React.js, Python Flask, SQL, and core algorithms.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-blue-600">
                  <span>Explore Matrix</span>
                  <span>→</span>
                </div>
              </Card>
            </Link>
          </RevealOnScroll>

          {/* Card 2: Experience */}
          <RevealOnScroll delay={0.1}>
            <Link href="/experience" className="block group h-full">
              <Card className="p-6 bg-white border border-slate-200 h-full flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Work Experience</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI/ML Internship at Edufiy Tech Solutions (Jan – Mar 2025): data preprocessing and model evaluation.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-blue-600">
                  <span>View Timeline</span>
                  <span>→</span>
                </div>
              </Card>
            </Link>
          </RevealOnScroll>

          {/* Card 3: Education */}
          <RevealOnScroll delay={0.15}>
            <Link href="/education" className="block group h-full">
              <Card className="p-6 bg-white border border-slate-200 h-full flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Education Pedigree</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lovely Professional University B.Tech (8.51 CGPA), Narayana (94.9%), and Sri Chaitanya (92.67%).
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-blue-600">
                  <span>Academic History</span>
                  <span>→</span>
                </div>
              </Card>
            </Link>
          </RevealOnScroll>

          {/* Card 4: Achievements */}
          <RevealOnScroll delay={0.2}>
            <Link href="/achievements" className="block group h-full">
              <Card className="p-6 bg-white border border-slate-200 h-full flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Achievements</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    100+ LeetCode problems solved, HackerRank 4-Star Badges, and CODE STORM Hackathon 8th / 50 teams.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-blue-600">
                  <span>Competitive Milestones</span>
                  <span>→</span>
                </div>
              </Card>
            </Link>
          </RevealOnScroll>
        </div>

        {/* Compact Contact Callout Banner */}
        <RevealOnScroll delay={0.25}>
          <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Let&apos;s Build Impactful Systems</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Interested in Discussing Engineering Roles or Collaborations?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Open to AI/ML engineering internships, full-stack software development opportunities, and high-velocity teams.
              </p>
            </div>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "primary",
                size: "md",
                className: "bg-blue-600 hover:bg-blue-500 text-white font-semibold whitespace-nowrap shrink-0",
              })}
            >
              <span>Go to Contact Page</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </RevealOnScroll>
      </Section>
    </div>
  );
}
