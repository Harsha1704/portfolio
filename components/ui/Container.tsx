import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "tight" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  className,
  size = "default",
  children,
  ...props
}) => {
  const sizes = {
    tight: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  };

  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8 md:px-12", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
