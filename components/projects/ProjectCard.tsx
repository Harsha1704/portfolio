"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";

export interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  const statusBadgeVariant =
    project.status === "live"
      ? "live"
      : project.status === "prototype"
      ? "dev"
      : "research";

  return (
    <Card
      variant="interactive"
      className="flex flex-col justify-between p-6 sm:p-8 h-full group transition-all duration-300 hover:border-blue-200 hover:shadow-[0_14px_34px_-10px_rgba(15,23,42,0.09)]"
    >
      <div>
        {/* Header: Category & Status */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono font-medium text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100 group-hover:bg-blue-100/70 transition-colors">
            {project.category}
          </span>
          <Badge variant={statusBadgeVariant} size="sm" showDot>
            {project.statusLabel}
          </Badge>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-slate-500 mb-4 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Summary Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-slate-100/80 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Row */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1.5 group/link"
        >
          <BookOpen className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5" />
          <span>Case Study</span>
        </Link>

        {project.liveUrl ? (
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 py-1.5 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 py-1.5 group/demo"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
            </a>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 py-1.5 group/repo"
                aria-label={`View ${project.title} repository on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5" />
              </a>
            )}
            <span className="text-[11px] font-mono text-slate-400">
              Demo not currently available
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};
