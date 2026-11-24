import React from "react";
import { Award, AlertCircle } from "lucide-react";
import { ResultsAndLimitations } from "@/types";

export interface ResultsAndLimitationsViewProps {
  data?: ResultsAndLimitations;
}

export const ResultsAndLimitationsView: React.FC<ResultsAndLimitationsViewProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="mb-14">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Verified Results & Engineering Limitations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Results */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">
              Verified Results & Key Outcomes
            </h3>
          </div>
          <ul className="space-y-3">
            {data.results.map((result, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations */}
        <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/70">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-amber-950">
              Known Constraints & Limitations
            </h3>
          </div>
          <ul className="space-y-3">
            {data.limitations.map((limit, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span className="leading-relaxed">{limit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
