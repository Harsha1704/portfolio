"use client";

import React from "react";
import {
  Layers,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Clock,
  Database,
  Cpu,
  Server,
  Monitor,
} from "lucide-react";
import { SystemFlowDiagramData } from "@/types";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export interface SystemFlowDiagramProps {
  diagram?: SystemFlowDiagramData;
}

const STAGE_ICONS: Record<number, React.ReactNode> = {
  0: <Database className="w-4 h-4 text-blue-600" />,
  1: <Layers className="w-4 h-4 text-indigo-600" />,
  2: <Cpu className="w-4 h-4 text-purple-600" />,
  3: <Server className="w-4 h-4 text-emerald-600" />,
  4: <Monitor className="w-4 h-4 text-amber-600" />,
};

export const SystemFlowDiagram: React.FC<SystemFlowDiagramProps> = ({ diagram }) => {
  if (!diagram || !diagram.steps || diagram.steps.length === 0) return null;

  return (
    <section className="mb-14">
      <RevealOnScroll delay={0.06}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">{diagram.title}</h2>
          </div>
          <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            End-to-End Pipeline Flow
          </span>
        </div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          {diagram.caption}
        </p>

        {/* Visual Pipeline Grid / Diagram Canvas */}
        <div className="p-5 sm:p-7 rounded-2xl bg-slate-900 text-white shadow-md border border-slate-800 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            {diagram.steps.map((step, idx) => {
              const isImplemented = step.status === "implemented";
              const isLast = idx === diagram.steps.length - 1;

              return (
                <div key={idx} className="flex flex-col justify-between relative group">
                  {/* Step Card */}
                  <div
                    className={`p-4 rounded-xl border flex flex-col justify-between h-full transition-all duration-200 ${
                      isImplemented
                        ? "bg-slate-800/90 border-slate-700/80 hover:border-blue-500/80 hover:bg-slate-800"
                        : "bg-slate-800/40 border-dashed border-slate-700/60 opacity-80"
                    }`}
                  >
                    <div>
                      {/* Top Meta: Stage Number & Status */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-700/60">
                            {STAGE_ICONS[idx] || <Layers className="w-3.5 h-3.5 text-blue-400" />}
                          </div>
                          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                            Step 0{idx + 1}
                          </span>
                        </div>

                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            isImplemented
                              ? "bg-emerald-950/80 text-emerald-400 border-emerald-800/60"
                              : "bg-amber-950/80 text-amber-400 border-amber-800/60"
                          }`}
                        >
                          {isImplemented ? (
                            <>
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                              <span>Live</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-2.5 h-2.5 text-amber-400" />
                              <span>Roadmap</span>
                            </>
                          )}
                        </span>
                      </div>

                      {/* Stage Name & Component Title */}
                      <span className="text-[11px] font-mono font-semibold text-blue-400 block mb-0.5">
                        {step.stage}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                        {step.title}
                      </h3>

                      {/* Component Descriptor */}
                      <p className="text-[11px] text-slate-300 leading-relaxed font-mono bg-slate-950/50 p-2 rounded-lg border border-slate-800 mb-2">
                        {step.component}
                      </p>

                      {/* Technical Description */}
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {step.badgeText && (
                      <div className="mt-3 pt-2 border-t border-slate-700/60">
                        <span className="text-[10px] font-mono text-slate-400">
                          {step.badgeText}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Flow Arrow (Desktop: Right arrow; Mobile: Down arrow) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-slate-950 border border-slate-700 text-blue-400 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {!isLast && (
                    <div className="flex lg:hidden justify-center my-1 text-slate-600">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Short Technical Explanation Box Below Diagram */}
        <div className="p-4 sm:p-5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className="text-blue-900 font-semibold block mb-1">
            Architectural Summary &amp; Implementation Integrity:
          </strong>
          {diagram.explanation}
        </div>
      </RevealOnScroll>
    </section>
  );
};
