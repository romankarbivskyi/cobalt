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
  half: "md:items-start md:text-start mx-auto md:mx-0 w-full md:max-w-2/3 lg:max-w-1/2 flex-col gap-5",
  wide: "lg:items-start lg:text-start mx-auto lg:mx-0 w-full justify-between max-w-none gap-5 md:gap-10 lg:gap-16 flex-col lg:flex-row",
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
