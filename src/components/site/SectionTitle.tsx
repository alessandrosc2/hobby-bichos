import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            tone === "light"
              ? "bg-primary-foreground/15 text-primary-foreground"
              : "bg-brand-yellow text-brand-blue-deep",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance-title text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-primary-foreground" : "text-brand-blue-deep",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
