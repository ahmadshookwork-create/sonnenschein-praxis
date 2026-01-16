"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  gradient = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        gradient ? "gradient-border" : "glass-card",
        hover && "hover:transform hover:-translate-y-1",
        glow && "glow-subtle",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
