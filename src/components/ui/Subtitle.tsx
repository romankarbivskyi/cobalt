import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SubtitleProps {
  size?: "xl" | "lg";
  className?: string;
  children: ReactNode;
}

const sizes = {
  xl: "text-sm sm:text-xl",
  lg: "text-xs sm:text-lg",
};

const Subtitle = ({ size = "xl", className, children }: SubtitleProps) => {
  return (
    <p className={cn(className, sizes[size], "text-regular flex-1")}>
      {children}
    </p>
  );
};

export default Subtitle;
