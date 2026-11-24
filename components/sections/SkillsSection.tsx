"use client";

import React, { useState, useMemo } from "react";
import {
  Brain,
  Cpu,
  Sparkles,
  Layout,
  Server,
  Database,
  Code2,
  Terminal,
  Search,
  X,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { skillClustersData } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { cn } from "@/lib/utils";

const ICONS_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Calculate metrics across all clusters
  const metrics = useMemo(() => {
    let totalSkills = 0;
    let proficient = 0;
    let working = 0;
    let familiar = 0;

    skillClustersData.forEach((c) => {
      c.skills.forEach((s) => {
        totalSkills += 1;
        if (s.tier === "proficient") proficient += 1;
        else if (s.tier === "working_knowledge") working += 1;
        else if (s.tier === "familiar") familiar += 1;
      });
    });

    return { totalSkills, proficient, working, familiar };
  }, []);

  // Filter clusters and individual skills based on category and search query
  const filteredClusters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return skillClustersData
      .map((cluster) => {
        // If a specific category is selected, skip others
        if (selectedCategory !== "all" && cluster.id !== selectedCategory) {
          return null;
        }

        // If no search query, return full cluster
        if (!q) {
          return cluster;
        }

        // Filter skills within cluster that match query
        const matchingSkills = cluster.skills.filter((skill) => {
          const nameMatch = skill.name.toLowerCase().includes(q);
          const evidenceMatch = skill.evidence?.toLowerCase().includes(q);
          const tierMatch = skill.tierLabel.toLowerCase().includes(q);
          const keywordMatch = skill.keywords?.some((k) =>
            k.toLowerCase().includes(q)
          );
          return nameMatch || evidenceMatch || tierMatch || keywordMatch;
        });

        // If category title matches query, keep all skills in cluster
        if (cluster.title.toLowerCase().includes(q)) {
          return cluster;
        }

        if (matchingSkills.length > 0) {
          return {
            ...cluster,
            skills: matchingSkills,
          };
        }

        return null;
      })
      .filter((cluster): cluster is typeof skillClustersData[0] => cluster !== null);
  }, [selectedCategory, searchQuery]);

  const totalFilteredSkills = useMemo(() => {
    return filteredClusters.reduce((acc, c) => acc + c.skills.length, 0);
  }, [filteredClusters]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <Section
      id="skills"
      badge="Competency Architecture"
      title="Technical Skills Matrix & Stacks"
      titleAs="h1"
      subtitle="Organized across eight core functional domains based on SKILLS_MATRIX.md. Every skill is classified by transparent proficiency tiers with verified project and coursework evidence."
    >
      {/* High-Level Competency Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
            <span>Total Stack</span>
            <Layers className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">
            {metrics.totalSkills}
          </div>
          <div className="text-[11px] text-slate-500">Categorized competencies</div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-700 mb-1">
            <span>Proficient</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-800">
            {metrics.proficient}
          </div>
          <div className="text-[11px] text-emerald-600/90">Production & project applied</div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-blue-200/80 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono text-blue-700 mb-1">
            <span>Working Knowledge</span>
            <span className="h-2 w-2 rounded-full bg-blue-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-blue-800">
            {metrics.working}
          </div>
          <div className="text-[11px] text-blue-600/90">Coursework & functional builds</div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-1">
            <span>Familiar / Emerging</span>
            <span className="h-2 w-2 rounded-full bg-slate-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-800">
            {metrics.familiar}
          </div>
          <div className="text-[11px] text-slate-500">Tooling & API integration</div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-4 mb-8 w-full max-w-full min-w-0">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills, tools, or frameworks (e.g. Python, Scikit-learn, React, SQL)..."
            className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search input"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 8-Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full max-w-full min-w-0">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "text-xs font-medium px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all border shrink-0",
              selectedCategory === "all"
                ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            )}
          >
            All Categories ({skillClustersData.length})
          </button>

          {skillClustersData.map((cluster) => {
            const isSelected = selectedCategory === cluster.id;
            return (
              <button
                key={cluster.id}
                type="button"
                onClick={() => setSelectedCategory(cluster.id)}
                className={cn(
                  "text-xs font-medium px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all border flex items-center gap-1.5 shrink-0",
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                )}
              >
                <span>{cluster.title}</span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                    isSelected ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-500"
                  )}
                >
                  {cluster.skills.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Search & Filter Status */}
      {(searchQuery || selectedCategory !== "all") && (
        <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Showing:</span>
            <span>
              {totalFilteredSkills} {totalFilteredSkills === 1 ? "skill" : "skills"} across{" "}
              {filteredClusters.length} {filteredClusters.length === 1 ? "category" : "categories"}
            </span>
            {searchQuery && (
              <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-200 text-blue-700">
                &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2 shrink-0"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* No Results Fallback */}
      {filteredClusters.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 mb-12">
          <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">
            No matching competencies found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
            No skills matched your search for &ldquo;{searchQuery}&rdquo; in the selected category.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-medium px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Clear Search & Filters
          </button>
        </div>
      )}

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredClusters.map((cluster, idx) => (
          <RevealOnScroll key={cluster.id} delay={idx * 0.04}>
            <Card className="p-6 bg-white border border-slate-200 h-full flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all">
              <div>
                {/* Cluster Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    {ICONS_MAP[cluster.iconName] || <Code2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {cluster.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cluster.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill List with Explicit Proficiency Tiers */}
                <div className="space-y-3">
                  {cluster.skills.map((skill) => {
                    const isProficient = skill.tier === "proficient";
                    const isWorking = skill.tier === "working_knowledge";

                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50/70 border border-slate-100/90 hover:bg-white hover:border-slate-200 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold text-slate-800">
                            {skill.name}
                          </span>
                          <span
                            className={cn(
                              "text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border shrink-0",
                              isProficient
                                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                : isWorking
                                ? "bg-blue-50 text-blue-800 border-blue-200"
                                : "bg-slate-100 text-slate-700 border-slate-200"
                            )}
                          >
                            {skill.tierLabel}
                          </span>
                        </div>
                        {skill.evidence && (
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            {skill.evidence}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Domain Focus</span>
                <span className="text-slate-600 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified Evidence
                </span>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      {/* Transparent Proficiency Legend Bar */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs w-full max-w-full min-w-0">
        <div>
          <span className="font-bold text-slate-900 block mb-0.5">
            Proficiency Tiering Standard (SKILLS_MATRIX.md)
          </span>
          <span className="text-[11px] text-slate-500">
            Transparently grounded in tangible software implementations, competitive problem solving, and coursework.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5 font-mono text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span><strong>Proficient:</strong> Production & project applied</span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" />
            <span><strong>Working Knowledge:</strong> Academic & functional prototypes</span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 shrink-0" />
            <span><strong>Familiar:</strong> Tooling & API integration</span>
          </span>
        </div>
      </div>
    </Section>
  );
};
