"use client";

import React from "react";
import { Cpu, CheckCircle2, Clock, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { ArchitectureLayerItem } from "@/types";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface ArchitectureDiagramProps {
  summary?: string;
  layers?: ArchitectureLayerItem[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ summary, layers }) => {
  const prefersReduced = useReducedMotion();

  if (!layers || layers.length === 0) return null;

  return (
    <section className="mb-14">
      <div className="flex items-center gap-2 mb-4">
        <Cpu className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-slate-900">System Architecture & Pipeline Topology</h2>
      </div>

      {summary && (
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          {summary}
        </p>
      )}

      {/* Layered Architectural Flow with Staggered Entrance */}
      <div className="space-y-3">
        {layers.map((layer, index) => {
          const isImplemented = layer.status === "implemented";
          return (
            <div key={index} className="relative">
              <motion.div
                initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
                whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.45,
                  delay: prefersReduced ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`p-5 rounded-2xl border transition-all duration-200 ${
                  isImplemented
                    ? "bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-sm"
                    : "bg-slate-50/70 border-dashed border-slate-300 hover:border-slate-400"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Tier 0{index + 1}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-mono font-semibold text-blue-600">
                      {layer.layer}
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full border self-start sm:self-auto transition-colors ${
                      isImplemented
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {isImplemented ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Implemented</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Planned / In Scoping</span>
                      </>
                    )}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {layer.component}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {layer.details}
                </p>
              </motion.div>

              {index < layers.length - 1 && (
                <div className="flex justify-center my-1.5">
                  <div className="p-1 rounded-full bg-slate-100 text-slate-400">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
