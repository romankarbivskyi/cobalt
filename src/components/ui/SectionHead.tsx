import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadProps {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "half" | "wide";
  center?: boolean;
}

const variants = {
  default: "max-w-3xl flex-col gap-6",
  half: "max-w-1/2 flex-col gap-4.5",
  wide: "max-w-none gap-5 sm:gap-10 md:gap-16 flex-col md:flex-row",
};

const SectionHead = ({
  children,
  className,
  variant = "default",
  center = false,
}: SectionHeadProps) => {
  return (
    <div
      className={cn(
        className,
        variants[variant],
        center && "items-center text-center",
        "flex",
      )}
    >
      {children}
    </div>
  );
};

export default SectionHead;
