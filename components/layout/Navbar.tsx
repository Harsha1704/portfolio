"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/Icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NAV_ROUTES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certifications", label: "Certifications" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Accessibility: Focus management, focus trap & Escape dismissal
  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Focus first navigation item when opened
    const timer = setTimeout(() => {
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>("a, button");
      firstFocusable?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Trap focus within drawer
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isRouteActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Floating Dynamic Island Header (Desktop) */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none w-full max-w-full">
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto flex items-center justify-between w-full max-w-5xl h-14 px-4 sm:px-6 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] transition-shadow duration-300 min-w-0"
        >
          {/* Logo / Monogram with Micro-Interaction */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <motion.span
              whileHover={prefersReduced ? undefined : { scale: 1.08 }}
              whileTap={prefersReduced ? undefined : { scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-8 w-8 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-xs"
            >
              SH
            </motion.span>
            <span className="font-semibold text-sm tracking-tight text-slate-900 hidden sm:inline group-hover:text-blue-600 transition-colors">
              Sri Harsha
            </span>
          </Link>

          {/* Desktop Navigation Links with Animated Active Indicator Pill */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {NAV_ROUTES.map((route) => {
              const active = isRouteActive(route.href);
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                    active
                      ? "text-blue-700 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId={prefersReduced ? undefined : "active-nav-pill"}
                      className="absolute inset-0 bg-blue-50 border border-blue-200/60 rounded-full -z-10 shadow-2xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {route.label}
                </Link>
              );
            })}
          </div>

          {/* Medium Screen Compact Links (Tablets / Laptops) */}
          <div className="hidden md:flex lg:hidden items-center gap-1 relative">
            {NAV_ROUTES.slice(0, 5).map((route) => {
              const active = isRouteActive(route.href);
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "relative px-2.5 py-1 text-xs font-medium rounded-full transition-colors",
                    active
                      ? "text-blue-700 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId={prefersReduced ? undefined : "active-tablet-nav-pill"}
                      className="absolute inset-0 bg-blue-50 border border-blue-200/60 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {route.label}
                </Link>
              );
            })}
          </div>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={buttonVariants({
                variant: isRouteActive("/contact") ? "secondary" : "primary",
                size: "sm",
                className: "text-xs font-semibold h-8 px-3 rounded-full",
              })}
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-dialog"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay with Smooth Framer Motion AnimatePresence & Dialog Semantics */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            id="mobile-nav-dialog"
            aria-label="Mobile Navigation Menu"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-1 overflow-y-auto max-h-[75vh]">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Website Directory
              </p>
              {[...NAV_ROUTES, { href: "/contact", label: "Contact" }].map((route, idx) => {
                const active = isRouteActive(route.href);
                return (
                  <motion.div
                    key={route.href}
                    initial={prefersReduced ? undefined : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: prefersReduced ? 0 : 0.03 * idx,
                      duration: 0.2,
                    }}
                  >
                    <Link
                      href={route.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-semibold py-2.5 border-b border-slate-100 flex items-center justify-between transition-colors",
                        active
                          ? "text-blue-600 font-bold"
                          : "text-slate-900 hover:text-blue-600"
                      )}
                    >
                      <span>{route.label}</span>
                      <span className="text-xs font-mono text-slate-400">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-medium text-sm rounded-xl shadow-sm transition-all"
              >
                Get in Touch with Sri Harsha
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="/Sri_Harsha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sri_Harsha_Resume.pdf"
                  className="flex-1 text-center py-2 px-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-xs rounded-xl shadow-2xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Download CV</span>
                </a>
                <a
                  href="https://linkedin.com/in/sriharsha-jilla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-3 bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
