"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "success" | "warning";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        // Sizes
        size === "sm" && "px-2.5 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        // Variants
        variant === "default" &&
          "bg-[var(--background-tertiary)] text-[var(--foreground-muted)] border border-[var(--card-border)]",
        variant === "primary" &&
          "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30",
        variant === "secondary" &&
          "bg-[var(--secondary)]/10 text-[var(--secondary-light)] border border-[var(--secondary)]/30",
        variant === "success" &&
          "bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/30",
        variant === "warning" &&
          "bg-[var(--warning)]/10 text-[var(--warning)] border border-[var(--warning)]/30",
        className
      )}
    >
      {children}
    </span>
  );
}
