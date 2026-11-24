import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";
import { Project } from "@/types";

export interface ProjectNavigationProps {
  currentProject: Project;
  allProjects: Project[];
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  currentProject,
  allProjects,
}) => {
  const sortedProjects = [...allProjects].sort((a, b) => a.order - b.order);
  const currentIndex = sortedProjects.findIndex((p) => p.slug === currentProject.slug);

  const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;

  // Find related projects (different project, prioritize same category or other projects)
  const relatedProjects = sortedProjects
    .filter((p) => p.slug !== currentProject.slug)
    .slice(0, 2);

  return (
    <nav className="mt-16 pt-12 border-t border-slate-200" aria-label="Project Case Study Navigation">
      {/* Previous / Next Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all flex flex-col items-start"
          >
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mb-1 group-hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Case Study</span>
            </span>
            <span className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {prevProject.title}
            </span>
            <span className="text-xs text-slate-500 font-mono mt-0.5">
              {prevProject.category}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all flex flex-col items-end text-right sm:col-start-2"
          >
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mb-1 group-hover:text-blue-600 transition-colors">
              <span>Next Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {nextProject.title}
            </span>
            <span className="text-xs text-slate-500 font-mono mt-0.5">
              {nextProject.category}
            </span>
          </Link>
        )}
      </div>

      {/* Related Explorations */}
      {relatedProjects.length > 0 && (
        <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Continue Exploring Engineering Case Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {rel.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {rel.timeline}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.summary}
                  </p>
                </div>
                <div className="mt-3 text-xs font-semibold text-blue-600 flex items-center gap-1">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
