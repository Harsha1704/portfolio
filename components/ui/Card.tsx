import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive";
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  const baseStyles =
    "bg-white rounded-2xl border border-slate-200/80 transition-all duration-200";

  const variants = {
    default: "shadow-[0_1px_3px_0_rgba(15,23,42,0.05)]",
    elevated:
      "shadow-[0_8px_30px_-8px_rgba(15,23,42,0.08)] border-slate-200",
    interactive:
      "shadow-[0_1px_3px_0_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_-10px_rgba(15,23,42,0.08),0_4px_10px_-4px_rgba(37,99,235,0.04)] hover:border-blue-200 hover:-translate-y-1 cursor-pointer",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
