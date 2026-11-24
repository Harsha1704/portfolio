"use client";

import React, { useEffect, useRef } from "react";
import { X, Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

export interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility: Escape to close and focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-preview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
    >
      {/* Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 flex items-center justify-between gap-3 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h2
                id="resume-preview-title"
                className="text-sm sm:text-base font-bold text-slate-900 truncate"
              >
                Sri Harsha — Curriculum Vitae
              </h2>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <span>1 Page (PDF)</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Public &amp; Verified</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/Sri_Harsha_Resume.pdf"
              download="Sri_Harsha_Resume.pdf"
              className={buttonVariants({ variant: "primary", size: "sm" })}
              title="Download Sri_Harsha_Resume.pdf"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </a>

            <a
              href="/Sri_Harsha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="sr-only">Open PDF in new tab</span>
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
              aria-label="Close preview modal (Escape)"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Canvas */}
        <div className="flex-1 w-full bg-slate-100 relative overflow-hidden flex flex-col">
          <iframe
            src="/Sri_Harsha_Resume.pdf#view=FitH&toolbar=0&navpanes=0"
            title="Sri Harsha CV Document Preview"
            className="w-full h-full border-0 flex-1"
          />

          {/* Direct Fallback Bar (Essential for Mobile Browsers without inline PDF support) */}
          <div className="p-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 shrink-0">
            <span className="text-[11px] sm:text-xs text-center sm:text-left">
              Mobile device or browser not rendering embedded PDF?
            </span>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/Sri_Harsha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 inline-flex items-center gap-1"
              >
                <span>Open in Full Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="/Sri_Harsha_Resume.pdf"
                download="Sri_Harsha_Resume.pdf"
                className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 inline-flex items-center gap-1"
              >
                <span>Direct Download</span>
                <Download className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
