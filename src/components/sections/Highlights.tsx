"use client";

import { motion } from "framer-motion";
import { Globe2, Award, HeartHandshake, Train } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const highlights = [
  {
    icon: Globe2,
    title: "Mehrsprachiges Team",
    description:
      "Behandlung in über 10 Sprachen: Deutsch, Arabisch, Englisch, Türkisch, Bosnisch, Russisch, Spanisch, Persisch und mehr.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Langjährige Erfahrung",
    description:
      "Fachärztliche Expertise in der Kinder- und Jugendpsychiatrie mit modernen, wissenschaftlich fundierten Therapiemethoden.",
    color: "secondary",
  },
  {
    icon: HeartHandshake,
    title: "Familien- & Elternarbeit",
    description:
      "Ganzheitliche Behandlung unter Einbeziehung der Familie. Elternberatung, Familientherapie und systemische Ansätze.",
    color: "primary",
  },
  {
    icon: Train,
    title: "Zentrale Lage",
    description:
      "Hervorragende ÖPNV-Anbindung in Berlin-Mitte. U-Bahn, S-Bahn und Bus direkt erreichbar. Barrierefreier Zugang.",
    color: "secondary",
  },
];

export default function Highlights() {
  return (
    <section className="section-padding bg-[var(--background-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-[200px] opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)] rounded-full blur-[200px] opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Warum <span className="text-gradient">Praxis Dr. Allozy</span>?
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Kultursensible, professionelle Behandlung für Kinder und Jugendliche
            in einer warmherzigen Atmosphäre.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <GlassCard
              key={highlight.title}
              delay={index * 0.1}
              glow
              className="text-center"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                  highlight.color === "primary"
                    ? "bg-[var(--primary)]/10"
                    : "bg-[var(--secondary)]/10"
                }`}
              >
                <highlight.icon
                  className={`w-8 h-8 ${
                    highlight.color === "primary"
                      ? "text-[var(--primary)]"
                      : "text-[var(--secondary-light)]"
                  }`}
                />
              </div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-3">
                {highlight.title}
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                {highlight.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
