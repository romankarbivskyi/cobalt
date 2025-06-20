import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TitleProps {
  level?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
}

const levels = {
  h1: "text-5xl sm:text-6xl md:text-7xl",
  h2: "text-3xl sm:text-4xl md:text-5xl",
  h3: "text-2xl sm:text-3xl md:text-[32px]",
};

const Title = ({ level = "h1", className, children }: TitleProps) => {
  const Level = level;

  return (
    <Level className={cn(className, levels[level], "title font-bold")}>
      {children}
    </Level>
  );
};

export default Title;
