import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TitleProps {
  level?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
}

const levels = {
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight",
  h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight",
  h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight",
};

const Title = ({ level = "h1", className, children }: TitleProps) => {
  const Level = level;

  return (
    <Level className={cn("title flex-1 font-bold", levels[level], className)}>
      {children}
    </Level>
  );
};

export default Title;
