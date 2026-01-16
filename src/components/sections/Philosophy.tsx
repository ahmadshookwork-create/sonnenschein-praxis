"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const philosophyPoints = [
  {
    title: "Kultursensible Behandlung",
    description:
      "Wir verstehen die Bedeutung kultureller Hintergründe und bieten Behandlung, die verschiedene kulturelle Kontexte respektiert und integriert.",
  },
  {
    title: "Wissenschaftlich fundiert",
    description:
      "Unsere Therapien basieren auf aktuellen wissenschaftlichen Erkenntnissen und bewährten Behandlungsmethoden der Kinder- und Jugendpsychiatrie.",
  },
  {
    title: "Ganzheitlicher Ansatz",
    description:
      "Wir betrachten das Kind im Kontext seiner Familie und seines sozialen Umfelds. Elternarbeit und Familientherapie sind feste Bestandteile unserer Behandlung.",
  },
  {
    title: "Vertrauensvolle Atmosphäre",
    description:
      "In unserer Praxis schaffen wir eine warme, einladende Umgebung, in der sich Kinder, Jugendliche und Eltern sicher und verstanden fühlen.",
  },
];

export default function Philosophy() {
  return (
    <section className="section-padding bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[var(--primary)] text-sm font-semibold uppercase tracking-wider mb-4">
              Unsere Philosophie
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">
              Professionelle Hilfe mit{" "}
              <span className="text-gradient">Herz und Verstand</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8">
              In der Sonnenschein Praxis verbinden wir fachärztliche Kompetenz
              mit einem tiefen Verständnis für die individuellen Bedürfnisse
              jeder Familie. Unser multiprofessionelles Team arbeitet Hand in Hand,
              um die bestmögliche Versorgung zu gewährleisten.
            </p>

            <div className="space-y-4">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Praxis Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[var(--primary)]/10">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/praxis-philosophie.jpg"
                  alt="Sonnenschein Praxis - Freundliches Sprechzimmer"
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <blockquote className="text-lg sm:text-xl font-medium leading-relaxed mb-2">
                  &bdquo;Jedes Kind verdient es, gehört und verstanden zu werden.&ldquo;
                </blockquote>
                <p className="text-white/80 text-sm">
                  — Dr. med. Basel Allozy
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--tertiary)]/20 rounded-full blur-2xl" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <GlassCard className="p-4 text-center">
                <span className="block text-2xl font-bold text-gradient">15+</span>
                <span className="text-xs text-[var(--foreground-muted)]">Team-Mitglieder</span>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <span className="block text-2xl font-bold text-gradient">10+</span>
                <span className="text-xs text-[var(--foreground-muted)]">Sprachen</span>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <span className="block text-2xl font-bold text-gradient">∞</span>
                <span className="text-xs text-[var(--foreground-muted)]">Engagement</span>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
