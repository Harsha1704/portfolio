import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonVariantOptions {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "copy";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: ButtonVariantOptions = {}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] hover:shadow-md",
    secondary:
      "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100/80 hover:text-blue-800 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 active:bg-slate-100",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200/70",
    copy:
      "bg-slate-50 text-slate-800 border border-slate-200 hover:bg-white hover:border-blue-200 active:scale-[0.98]",
  };

  const sizes = {
    sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
    md: "h-11 px-5 text-sm rounded-xl gap-2",
    lg: "h-13 px-6 text-base rounded-xl gap-2.5",
  };

  return cn(baseStyles, variants[variant], sizes[size], className);
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "copy";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
