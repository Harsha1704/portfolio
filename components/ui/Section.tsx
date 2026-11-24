import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  titleAs?: "h1" | "h2";
  containerSize?: "default" | "tight" | "wide";
  background?: "page" | "subtle";
}

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  badge,
  title,
  subtitle,
  titleAs = "h2",
  containerSize = "default",
  background = "page",
  children,
  ...props
}) => {
  const backgrounds = {
    page: "bg-white",
    subtle: "bg-slate-50/70 border-y border-slate-100",
  };

  const HeadingTag = titleAs;

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 relative overflow-hidden", backgrounds[background], className)}
      {...props}
    >
      <Container size={containerSize}>
        {(badge || title || subtitle) && (
          <div className="mb-14 md:mb-20 max-w-2xl">
            {badge && (
              <span className="inline-block text-xs font-mono font-semibold tracking-wider uppercase text-blue-600 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100 mb-3">
                {badge}
              </span>
            )}
            {title && (
              <HeadingTag className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                {title}
              </HeadingTag>
            )}
            {subtitle && (
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
