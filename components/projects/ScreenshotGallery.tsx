"use client";

import React, { useState, useEffect, useRef } from "react";
import { Maximize2, X, Tag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyScreenshot } from "@/types";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface ScreenshotGalleryProps {
  screenshots?: CaseStudyScreenshot[];
  projectTitle: string;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({
  screenshots,
  projectTitle,
}) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<CaseStudyScreenshot | null>(null);
  const prefersReduced = useReducedMotion();
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = (item: CaseStudyScreenshot, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedScreenshot(item);
  };

  const handleClose = () => {
    setSelectedScreenshot(null);
    // Return focus to the invoking button after dialog closes
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 40);
  };

  // WCAG 2.2: Focus Management, Focus Trap & Escape Dismissal
  useEffect(() => {
    if (!selectedScreenshot) return;

    // Move focus inside the dialog when opened
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      // Trap focus inside modal
      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedScreenshot]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <section className="mb-14 scroll-mt-24">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-slate-900">
          Conceptual Visualizations & Interface Wireframes
        </h2>
      </div>

      <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 mb-6">
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className="text-blue-900 font-semibold">Engineering Note:</strong> The preview panels below are{" "}
          <span className="font-semibold text-blue-800">conceptual visualizations and architectural interface wireframes</span>{" "}
          illustrating user experience specifications, model telemetry layouts, and dataflow flows for {projectTitle}. They are{" "}
          <span className="italic underline">not actual screenshots of a deployed production application</span>.
        </p>
      </div>

      {/* Grid of Demonstrations as Accessible Interactive Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {screenshots.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={(e) => handleOpen(item, e)}
            aria-haspopup="dialog"
            aria-expanded={selectedScreenshot?.id === item.id}
            aria-controls="screenshot-modal-dialog"
            className="group cursor-pointer rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all flex flex-col text-left w-full"
          >
            {/* Mockup Preview Canvas */}
            <div className="relative h-44 w-full bg-slate-900 overflow-hidden flex items-center justify-center p-4">
              <MockupCanvas type={item.placeholderType} />
              
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-800/90 text-blue-300 border border-slate-700 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="text-[9px] font-mono uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-800/60 px-1.5 py-0.5 rounded">
                  Conceptual Wireframe
                </span>
              </div>

              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white p-1.5 rounded-lg border border-slate-700">
                <Maximize2 className="w-4 h-4 text-slate-200" />
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="p-4 flex-1 flex flex-col justify-between w-full">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-amber-600 font-medium">Conceptual mockup</span>
                <span className="text-blue-600 font-semibold">Inspect Wireframe →</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal Lightbox with Focus Containment and Accessible Naming */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            id="screenshot-modal-dialog"
            aria-labelledby="screenshot-modal-title"
            aria-describedby="screenshot-modal-caption"
          >
            <motion.div
              ref={dialogRef}
              initial={prefersReduced ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={prefersReduced ? { scale: 1, opacity: 0 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-950 border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    {selectedScreenshot.tag}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900/60">
                    Conceptual Wireframe (Not Live Screenshot)
                  </span>
                </div>

                <button
                  ref={closeButtonRef}
                  onClick={handleClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
                  aria-label="Close wireframe viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Graphic Viewport */}
              <div className="h-64 sm:h-80 bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden">
                <MockupCanvas type={selectedScreenshot.placeholderType} isLarge />
              </div>

              {/* Modal Details Footer */}
              <div className="p-6 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 id="screenshot-modal-title" className="text-lg font-bold text-white">
                    {selectedScreenshot.title}
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                    Illustrative UI Design
                  </span>
                </div>
                <p id="screenshot-modal-caption" className="text-sm text-slate-300 leading-relaxed mb-4">
                  {selectedScreenshot.caption}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                  <span>Architectural Specification Concept • Unbenchmarked Layout</span>
                  <button
                    onClick={handleClose}
                    className="text-blue-400 hover:text-blue-300 font-semibold focus-visible:outline-none focus-visible:underline"
                  >
                    Close Viewer (Esc)
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface MockupCanvasProps {
  type?: "pipeline" | "dashboard" | "telemetry" | "model" | "geospatial";
  isLarge?: boolean;
}

const MockupCanvas: React.FC<MockupCanvasProps> = ({ type = "pipeline", isLarge = false }) => {
  const strokeColor = "#38bdf8"; // Light sky blue
  const accentColor = "#3b82f6"; // Blue 500

  switch (type) {
    case "geospatial":
      return (
        <svg
          viewBox="0 0 320 180"
          className={isLarge ? "w-full h-full max-h-72" : "w-full h-full"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          <rect width="320" height="180" fill="#090d16" />
          <path d="M0 45 H320 M0 90 H320 M0 135 H320" stroke="#1e293b" strokeDasharray="3 3" />
          <path d="M80 0 V180 M160 0 V180 M240 0 V180" stroke="#1e293b" strokeDasharray="3 3" />
          {/* Simulated Satellite Terrain */}
          <path
            d="M20 140 Q 90 80, 160 120 T 300 70"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M60 40 L 140 30 L 170 80 L 100 95 Z"
            fill="#3b82f6"
            fillOpacity="0.25"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />
          {/* Target Bounding Box */}
          <rect
            x="180"
            y="65"
            width="85"
            height="55"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="#38bdf8"
            fillOpacity="0.1"
          />
          <circle cx="222" cy="92" r="3" fill="#ef4444" />
          {/* Coordinate HUD */}
          <text x="185" y="60" fill="#38bdf8" fontSize="8" fontFamily="monospace">
            LAT 28.61° N | LON 77.20° E
          </text>
          <text x="10" y="170" fill="#64748b" fontSize="8" fontFamily="monospace">
            BAND: RGB_NIR | RESOLUTION: 0.5m GSD (CONCEPTUAL)
          </text>
        </svg>
      );

    case "dashboard":
      return (
        <svg
          viewBox="0 0 320 180"
          className={isLarge ? "w-full h-full max-h-72" : "w-full h-full"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="320" height="180" fill="#090d16" />
          {/* Card 1: Score Gauge */}
          <rect x="15" y="20" width="135" height="140" rx="8" fill="#0f172a" stroke="#1e293b" />
          <circle cx="82" cy="75" r="35" stroke="#1e293b" strokeWidth="6" />
          <circle
            cx="82"
            cy="75"
            r="35"
            stroke="#10b981"
            strokeWidth="6"
            strokeDasharray="220"
            strokeDashoffset="60"
            strokeLinecap="round"
          />
          <text x="82" y="80" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
            87%
          </text>
          <text x="82" y="135" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">
            TIER: GOOD FIT (SAMPLE)
          </text>

          {/* Card 2: Skill Overlap Bars */}
          <rect x="165" y="20" width="140" height="140" rx="8" fill="#0f172a" stroke="#1e293b" />
          <text x="175" y="40" fill="#94a3b8" fontSize="8" fontFamily="monospace">SKILL OVERLAP</text>
          <rect x="175" y="50" width="120" height="8" rx="4" fill="#1e293b" />
          <rect x="175" y="50" width="95" height="8" rx="4" fill="#3b82f6" />
          
          <text x="175" y="75" fill="#94a3b8" fontSize="8" fontFamily="monospace">JACCARD INDEX</text>
          <rect x="175" y="85" width="120" height="8" rx="4" fill="#1e293b" />
          <rect x="175" y="85" width="80" height="8" rx="4" fill="#10b981" />

          <text x="175" y="110" fill="#94a3b8" fontSize="8" fontFamily="monospace">EXPERIENCE FIT</text>
          <rect x="175" y="120" width="120" height="8" rx="4" fill="#1e293b" />
          <rect x="175" y="120" width="105" height="8" rx="4" fill="#8b5cf6" />
        </svg>
      );

    case "telemetry":
      return (
        <svg
          viewBox="0 0 320 180"
          className={isLarge ? "w-full h-full max-h-72" : "w-full h-full"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="320" height="180" fill="#090d16" />
          {/* Face ROI box */}
          <rect x="100" y="30" width="120" height="120" rx="12" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 3" />
          {/* Crosshairs */}
          <path d="M95 90 H105 M215 90 H225 M160 25 V35 M160 145 V155" stroke="#60a5fa" strokeWidth="2" />
          {/* Facial Landmark Points */}
          <circle cx="135" cy="75" r="3" fill="#38bdf8" />
          <circle cx="185" cy="75" r="3" fill="#38bdf8" />
          <circle cx="160" cy="100" r="2" fill="#38bdf8" />
          <path d="M140 120 Q160 135 180 120" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* HUD Status */}
          <text x="15" y="25" fill="#10b981" fontSize="9" fontFamily="monospace">● VIDEO FEED (CONCEPT)</text>
          <text x="15" y="42" fill="#94a3b8" fontSize="8" fontFamily="monospace">STATE: HAPPY (0.84)</text>
          <text x="15" y="56" fill="#94a3b8" fontSize="8" fontFamily="monospace">TRACK: UPBEAT INDIE</text>
          <text x="245" y="25" fill="#64748b" fontSize="8" fontFamily="monospace">ROI: 48x48</text>
        </svg>
      );

    case "model":
      return (
        <svg
          viewBox="0 0 320 180"
          className={isLarge ? "w-full h-full max-h-72" : "w-full h-full"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="320" height="180" fill="#090d16" />
          {/* Nodes Layer 1 */}
          <circle cx="50" cy="50" r="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="50" cy="90" r="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="50" cy="130" r="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Nodes Layer 2 */}
          <circle cx="160" cy="35" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="160" cy="72" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="160" cy="108" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="160" cy="145" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />

          {/* Nodes Layer 3 */}
          <circle cx="270" cy="70" r="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="270" cy="110" r="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />

          {/* Synapses */}
          <path d="M58 50 L152 35 M58 50 L152 72 M58 90 L152 72 M58 90 L152 108 M58 130 L152 108 M58 130 L152 145" stroke="#1e293b" strokeWidth="1" />
          <path d="M168 35 L262 70 M168 72 L262 70 M168 108 L262 110 M168 145 L262 110" stroke="#334155" strokeWidth="1" />

          <text x="50" y="165" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">INPUT</text>
          <text x="160" y="170" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">HIDDEN (RELU)</text>
          <text x="270" y="165" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">SOFTMAX</text>
        </svg>
      );

    case "pipeline":
    default:
      return (
        <svg
          viewBox="0 0 320 180"
          className={isLarge ? "w-full h-full max-h-72" : "w-full h-full"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="320" height="180" fill="#090d16" />
          {/* Step 1 */}
          <rect x="20" y="65" width="70" height="50" rx="6" fill="#0f172a" stroke="#1e293b" />
          <text x="55" y="88" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Ingestion</text>
          <text x="55" y="102" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">RAW BYTES</text>

          {/* Arrow 1 */}
          <path d="M90 90 H120" stroke={accentColor} strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Step 2 */}
          <rect x="125" y="65" width="70" height="50" rx="6" fill="#0f172a" stroke="#1e293b" />
          <text x="160" y="88" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Normalize</text>
          <text x="160" y="102" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">TENSOR</text>

          {/* Arrow 2 */}
          <path d="M195 90 H225" stroke={accentColor} strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Step 3 */}
          <rect x="230" y="65" width="70" height="50" rx="6" fill="#0f172a" stroke="#3b82f6" />
          <text x="265" y="88" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Inference</text>
          <text x="265" y="102" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="monospace">OUTPUT</text>
        </svg>
      );
  }
};
