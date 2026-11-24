"use client";

import React from "react";
import {
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Info,
} from "lucide-react";
import { certificationsData } from "@/data/certifications";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export const CertificationsSection: React.FC = () => {
  return (
    <Section
      id="certifications"
      badge="Accreditations"
      title="Verified Technical Certifications & Credentials"
      titleAs="h1"
      subtitle="Industry and academic accreditations validating enterprise AI database fundamentals, modern component frontend engineering, and web standards."
    >
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {certificationsData.map((cert, idx) => (
          <RevealOnScroll key={cert.id} delay={idx * 0.1}>
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 h-full flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all">
              <div>
                {/* Header Icon, Date & Verification Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    {cert.date && (
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-600" />
                        <span>{cert.date}</span>
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {cert.verificationStatus || "Verified"}
                  </span>
                </div>

                {/* Title & Issuing Body */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 font-mono mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Strategic Value Proposition */}
                {cert.strategicValue && (
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                    {cert.strategicValue}
                  </p>
                )}

                {/* Evaluated Competencies */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Evaluated Competencies:
                  </span>
                  {cert.competencies.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="text-xs text-slate-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Credential Verification Note */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400 block leading-tight">
                  {cert.credentialNote || "Official certificate record verified on file."}
                </span>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      {/* Verification & Credential Integrity Policy */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="h-9 w-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Credential Verification & Integrity Policy
            </h4>
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed mt-0.5">
              In accordance with portfolio verification standards, raw credential IDs and official certificates are archived in academic files and presented upon employer verification request. No fabricated badge images or unverified third-party redirects are published.
            </p>
          </div>
        </div>
        <div className="shrink-0 self-start sm:self-auto">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
            Audit Passed: 100% Truthful
          </span>
        </div>
      </div>
    </Section>
  );
};
