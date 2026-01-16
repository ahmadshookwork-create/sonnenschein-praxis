"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  lightLine?: boolean;
  background?: "default" | "secondary" | "tertiary" | "gradient";
}

export default function SectionWrapper({
  children,
  className,
  id,
  lightLine = false,
  background = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative",
        lightLine && "light-line",
        background === "default" && "bg-[var(--background)]",
        background === "secondary" && "bg-[var(--background-secondary)]",
        background === "tertiary" && "bg-[var(--background-tertiary)]",
        background === "gradient" && "bg-gradient-animated",
        className
      )}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
