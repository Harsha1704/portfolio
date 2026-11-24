"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  initial,
  animate,
  transition,
  ...props
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};
