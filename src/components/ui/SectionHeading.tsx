import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "section-heading",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-6 text-navy-deep font-bold">{title}</h2>
      <p className="section-subtitle mt-6 text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
