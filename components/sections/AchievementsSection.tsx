"use client";

import React from "react";
import {
  Trophy,
  Code2,
  Award,
  CheckCircle2,
  Flame,
  Globe,
} from "lucide-react";
import { achievementsData } from "@/data/achievements";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  LeetCode: <Code2 className="w-4 h-4 text-amber-500" />,
  "HackerRank Orchestrate": <Globe className="w-4 h-4 text-emerald-600" />,
  "HackerRank Skill Badges": <Award className="w-4 h-4 text-emerald-600" />,
  "Competitive Hackathon": <Trophy className="w-4 h-4 text-blue-600" />,
};

export const AchievementsSection: React.FC = () => {
  return (
    <Section
      id="achievements"
      badge="Proven Competence"
      title="Competitive Achievements & Algorithmic Milestones"
      titleAs="h1"
      subtitle="Demonstrated problem solving under timed constraints, algorithmic benchmarks, and collaborative hackathons."
    >
      {/* 4 Core Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 w-full max-w-full min-w-0">
        {achievementsData.map((item, idx) => {
          return (
            <RevealOnScroll key={item.id} delay={idx * 0.08}>
              <Card className="p-6 sm:p-8 bg-white border border-slate-200 h-full flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all min-w-0">
                <div>
                  {/* Platform Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-slate-50 border border-slate-200">
                        {PLATFORM_ICONS[item.platform] || <Trophy className="w-4 h-4 text-amber-500" />}
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-700">
                        {item.platform}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                      Verified Milestone
                    </span>
                  </div>

                  {/* Primary Metric Number & Title */}
                  <div className="mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                        {item.metric}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 font-mono mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Granular Milestone Details */}
                  {item.details && (
                    <div className="space-y-2 mb-6 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                        Technical Execution:
                      </span>
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Badges / Tags */}
                <div>
                  {item.badges && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-[11px] font-mono font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Algorithmic Commitment & Competitive Focus Statement */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs w-full max-w-full min-w-0">
        <div className="flex items-start sm:items-center gap-4 min-w-0">
          <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <Flame className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h4 className="text-base font-bold text-slate-900">
              Disciplined Algorithmic Training & Problem Solving
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed mt-0.5">
              Consistently sharpening core computational skills with pattern-based problem solving across Two Pointers, Trees, Graphs, and Dynamic Programming in Python, C++, and Java.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
            LeetCode • HackerRank • Hackathons
          </span>
        </div>
      </div>
    </Section>
  );
};
