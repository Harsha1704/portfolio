import React from "react";
import { Code2, CheckCircle } from "lucide-react";
import { ImplementationSection } from "@/types";

export interface ImplementationDetailsProps {
  sections?: ImplementationSection[];
}

export const ImplementationDetails: React.FC<ImplementationDetailsProps> = ({ sections }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <section className="mb-14">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-slate-900">
          Implementation Details & Technical Deep Dive
        </h2>
      </div>

      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors"
          >
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {section.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {section.description}
            </p>

            <ul className="space-y-2.5">
              {section.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
