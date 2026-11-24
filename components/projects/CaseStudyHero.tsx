import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

export interface CaseStudyHeroProps {
  project: Project;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ project }) => {
  const statusBadgeVariant =
    project.status === "live"
      ? "live"
      : project.status === "prototype"
      ? "dev"
      : "research";

  return (
    <header className="border-b border-slate-200 pb-12 mb-12">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Overview</span>
        </Link>
      </div>

      {/* Meta Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className="text-xs font-mono font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
          {project.category}
        </span>
        <Badge variant={statusBadgeVariant} size="md" showDot>
          {project.statusLabel}
        </Badge>
        <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
          Timeline: {project.timeline}
        </span>
      </div>

      {/* Title & Subtitle */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
        {project.title}
      </h1>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
        {project.subtitle}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {project.liveUrl ? (
          <>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span>Launch Live Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-700 font-medium text-sm px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>
            )}
          </>
        ) : (
          <>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 px-3.5 py-2.5 rounded-xl border border-slate-200">
              <span>Demo not currently available</span>
            </span>
          </>
        )}
      </div>

      {/* Key Metric Tiles */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors"
            >
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                {metric.label}
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-slate-900">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
