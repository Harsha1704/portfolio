import React from "react";
import { Milestone } from "lucide-react";
import { RoadmapPhase } from "@/types";

export interface ProjectRoadmapProps {
  roadmap?: RoadmapPhase[];
}

export const ProjectRoadmap: React.FC<ProjectRoadmapProps> = ({ roadmap }) => {
  if (!roadmap || roadmap.length === 0) return null;

  return (
    <section className="mb-14">
      <div className="flex items-center gap-2 mb-4">
        <Milestone className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-slate-900">
          Development Roadmap & Next Milestones
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {roadmap.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 mb-3 inline-block">
                {item.phase}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
              Phase 0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
