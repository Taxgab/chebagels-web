import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "whatsapp" | "ghost" | "light" | "outlineLight";
type Size = "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-wine text-paper hover:bg-wine-deep focus-visible:ring-wine focus-visible:ring-offset-paper",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 focus-visible:ring-ink focus-visible:ring-offset-paper",
  whatsapp:
    "bg-whatsapp text-white hover:brightness-110 focus-visible:ring-whatsapp focus-visible:ring-offset-paper",
  ghost:
    "px-0 py-1 text-ink underline decoration-1 underline-offset-4 hover:text-wine focus-visible:ring-wine focus-visible:ring-offset-paper",
  light:
    "bg-paper text-ink hover:bg-white focus-visible:ring-paper focus-visible:ring-offset-wine-deep",
  outlineLight:
    "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10 focus-visible:ring-paper focus-visible:ring-offset-wine-deep",
};

const SIZE: Record<Size, string> = {
  md: "px-6 py-3.5 text-xs",
  lg: "px-8 py-4.5 text-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const isGhost = variant === "ghost";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 font-semibold uppercase tracking-[0.12em] transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        !isGhost && "rounded-sm",
        VARIANT[variant],
        isGhost ? "text-xs" : SIZE[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
