import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export const brandButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-blue text-primary-foreground shadow-soft hover:bg-brand-blue-deep hover:shadow-brand",
        yellow:
          "bg-brand-yellow text-brand-blue-deep shadow-soft hover:brightness-105 hover:shadow-brand",
        whatsapp: "bg-whatsapp text-primary-foreground shadow-soft hover:brightness-105",
        outline:
          "border-2 border-brand-blue/25 bg-background text-brand-blue-deep hover:border-brand-blue hover:bg-accent",
        ghostLight:
          "border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BrandButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & VariantProps<typeof brandButtonVariants> &
  Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function BrandButton<T extends ElementType = "button">({
  as,
  variant,
  size,
  className,
  children,
  ...rest
}: BrandButtonProps<T>) {
  const Comp = (as ?? "button") as ElementType;
  return (
    <Comp className={cn(brandButtonVariants({ variant, size }), className)} {...rest}>
      {children}
    </Comp>
  );
}
