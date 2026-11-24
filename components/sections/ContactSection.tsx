"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Info,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/ui/Icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleCopyChannel = () => {
    if (!profileData.email || !profileData.emailVerified) return;
    
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <Section
      id="contact"
      background="subtle"
      badge="Direct Engagement"
      title="Let's Connect & Collaborate"
      titleAs="h1"
      subtitle="Open to AI/ML engineering opportunities, full-stack software development roles, and high-impact technical discussions."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column: Communication Status & Verified Platforms */}
        <div className="lg:col-span-5 space-y-6">
          <RevealOnScroll delay={0.05}>
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Contact & Channels
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Direct engagement channels for recruitment, technical collaborations, and engineering discussions.
              </p>

              {/* Status Note on Direct Email */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Official Email Channel
                  </span>
                  {profileData.email && profileData.emailVerified ? (
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-semibold text-blue-600 hover:underline font-mono truncate block"
                    >
                      {profileData.email}
                    </a>
                  ) : (
                    <div className="flex items-start gap-2 text-xs font-mono text-slate-600">
                      <span className="h-2 w-2 rounded-full bg-amber-400 mt-1 shrink-0" />
                      <span className="truncate">Status: Pending Candidate Confirmation</span>
                    </div>
                  )}
                </div>

                {profileData.email && profileData.emailVerified ? (
                  <motion.button
                    type="button"
                    onClick={handleCopyChannel}
                    whileTap={prefersReduced ? undefined : { scale: 0.94 }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border shrink-0 transition-colors cursor-pointer self-start sm:self-auto ${
                      copied
                        ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60"
                    }`}
                    aria-label="Copy official email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied! ✓</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </motion.button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200 shrink-0 self-start sm:self-auto">
                    Pending Activation
                  </span>
                )}
              </div>

              {/* Verified Professional Handles Status */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  Online Profiles & Repositories
                </span>

                <a
                  href="https://linkedin.com/in/sriharsha-jilla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-slate-700 group"
                  aria-label="Sri Harsha LinkedIn Profile"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-blue-700 transition-colors">
                        LinkedIn Profile
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        linkedin.com/in/sriharsha-jilla
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-100/70 text-blue-700 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                    Connected <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </a>

                <a
                  href="https://github.com/Harsha1704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center justify-between text-slate-700 group"
                  aria-label="Sri Harsha GitHub Profile (@Harsha1704)"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-slate-950 transition-colors">
                        GitHub Profile
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        github.com/Harsha1704
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                    Connected <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </a>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                      <LeetCodeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        LeetCode & HackerRank
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        250+ Solved • 4-Star Badges
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-amber-100/70 text-amber-800 px-2 py-0.5 rounded font-medium">
                    Verified Stats
                  </span>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        </div>

        {/* Right Column: Honest Demo Message Form */}
        <div className="lg:col-span-7">
          <RevealOnScroll delay={0.1}>
            <Card className="p-6 sm:p-8 md:p-10 bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
                <MessageSquare className="w-4 h-4" />
                <span>Direct Inquiry Form</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Message Interface
              </h3>

              {/* Transparent Delivery Notice */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 mb-6 flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <p className="text-xs text-blue-800 leading-relaxed">
                  <strong>Interface Demo Mode:</strong> Direct submission is temporarily disabled pending live delivery service configuration (e.g. Resend or Formspree). Please check back once official contact endpoints are activated.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g., Alex Reed"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Your Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g., alex@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Engineering role discussions, technical collaborations..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    className="w-full opacity-60 cursor-not-allowed"
                    disabled
                  >
                    Submission Disabled (Integration Pending)
                  </Button>
                  <p className="text-[11px] font-mono text-center text-slate-400 mt-2">
                    Direct transmission disabled until verified backend routing is activated.
                  </p>
                </div>
              </form>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
};
