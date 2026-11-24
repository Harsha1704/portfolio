import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "live" | "dev" | "research" | "neutral" | "blue";
  size?: "sm" | "md";
  showDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "neutral",
  size = "md",
  showDot = false,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-medium font-mono tracking-tight transition-colors duration-150 select-none";

  const variants = {
    live: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    dev: "bg-amber-50 text-amber-800 border border-amber-200",
    research: "bg-indigo-50 text-indigo-800 border border-indigo-200",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
  };

  const dots = {
    live: "bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]",
    dev: "bg-amber-500 shadow-[0_0_0_2px_rgba(245,158,11,0.2)]",
    research: "bg-indigo-500 shadow-[0_0_0_2px_rgba(99,102,241,0.2)]",
    neutral: "bg-slate-400",
    blue: "bg-blue-500 shadow-[0_0_0_2px_rgba(37,99,235,0.2)]",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 rounded-md gap-1.5",
    md: "text-xs px-2.5 py-1 rounded-full gap-2",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {showDot && (
        <span className={cn("inline-block h-1.5 w-1.5 rounded-full shrink-0", dots[variant])} />
      )}
      <span>{children}</span>
    </span>
  );
};
