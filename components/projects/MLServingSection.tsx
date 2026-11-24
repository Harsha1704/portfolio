"use client";

import React from "react";
import {
  Cpu,
  Database,
  Server,
  Globe,
  Sliders,
  AlertCircle,
} from "lucide-react";
import { MLServingArchitecture } from "@/types";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export interface MLServingSectionProps {
  mlServing?: MLServingArchitecture;
}

export const MLServingSection: React.FC<MLServingSectionProps> = ({ mlServing }) => {
  if (!mlServing) return null;

  const servingSteps = [
    {
      num: "01",
      icon: <Database className="w-4 h-4 text-blue-600" />,
      label: "Input Ingestion & Preprocessing",
      title: mlServing.dataInput.title,
      description: mlServing.dataInput.description,
      borderAccent: "border-blue-200",
      bgAccent: "bg-blue-50/50",
    },
    {
      num: "02",
      icon: <Cpu className="w-4 h-4 text-purple-600" />,
      label: "Feature Extraction & Inference",
      title: mlServing.featureAndInference.title,
      description: mlServing.featureAndInference.description,
      borderAccent: "border-purple-200",
      bgAccent: "bg-purple-50/50",
    },
    {
      num: "03",
      icon: <Server className="w-4 h-4 text-indigo-600" />,
      label: "Backend & API Integration",
      title: mlServing.backendIntegration.title,
      description: mlServing.backendIntegration.description,
      borderAccent: "border-indigo-200",
      bgAccent: "bg-indigo-50/50",
    },
    {
      num: "04",
      icon: <Globe className="w-4 h-4 text-emerald-600" />,
      label: "Frontend Client Communication",
      title: mlServing.frontendCommunication.title,
      description: mlServing.frontendCommunication.description,
      borderAccent: "border-emerald-200",
      bgAccent: "bg-emerald-50/50",
    },
    {
      num: "05",
      icon: <Sliders className="w-4 h-4 text-amber-600" />,
      label: "Telemetry & Output Visualization",
      title: mlServing.outputVisualization.title,
      description: mlServing.outputVisualization.description,
      borderAccent: "border-amber-200",
      bgAccent: "bg-amber-50/50",
    },
  ];

  return (
    <section className="mb-14">
      <RevealOnScroll delay={0.08}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">
              {mlServing.pipelineTitle}
            </h2>
          </div>
          <span className="text-xs font-mono font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            ML-to-Web Serving Architecture
          </span>
        </div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          {mlServing.pipelineDescription}
        </p>

        {/* 5-Stage Serving Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {servingSteps.map((step, idx) => (
            <Card
              key={idx}
              className={`p-5 border ${step.borderAccent} ${step.bgAccent} hover:bg-white hover:shadow-xs transition-all`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                    Stage {step.num}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-medium text-slate-400">
                  Pipeline Step
                </span>
              </div>

              <span className="text-[11px] font-mono font-semibold text-blue-700 block mb-1">
                {step.label}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Operational Scope & Caveat Note */}
        {mlServing.operationalCaveat && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <strong className="text-slate-800 font-semibold block mb-0.5">
                Operational Infrastructure Note:
              </strong>
              {mlServing.operationalCaveat}
            </div>
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
};
