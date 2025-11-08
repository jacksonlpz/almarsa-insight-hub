import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AboutCardProps extends HTMLAttributes<HTMLDivElement> {
  badge: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export const AboutCard = ({
  badge,
  title,
  description,
  className,
  children,
  ...props
}: AboutCardProps) => {
  return (
    <div
      data-animate
      className={cn(
        "space-y-8 rounded-3xl bg-white p-12 shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="space-y-4">
        <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold uppercase tracking-wider text-primary">
          {badge}
        </div>
        <h3 className="text-3xl font-bold text-navy-deep">{title}</h3>
      </div>
      {description && (
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
};

export default AboutCard;
