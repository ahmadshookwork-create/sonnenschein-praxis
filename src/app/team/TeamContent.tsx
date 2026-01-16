"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Globe, ArrowRight, Filter, X } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import TeamCard from "@/components/sections/TeamCard";
import LeaderSpotlight from "@/components/team/LeaderSpotlight";
import { teamMembers, allLanguages, languageFlags } from "@/data/team";

// Praxisleiter separat
const teamLead = teamMembers.find((m) => m.isLead);
// Team ohne Praxisleiter für das Grid
const teamWithoutLead = teamMembers.filter((m) => !m.isLead);

export default function TeamContent() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const filteredMembers = useMemo(() => {
    if (!selectedLanguage) return teamWithoutLead;
    return teamWithoutLead.filter((member) =>
      (member.languages ?? []).includes(selectedLanguage),
    );
  }, [selectedLanguage]);

  const languageStats = useMemo(() => {
    const stats: Record<string, number> = {};
    allLanguages.forEach((lang) => {
      stats[lang] = teamMembers.filter((m) =>
        (m.languages ?? []).includes(lang),
      ).length;
    });
    return stats;
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--primary)] rounded-full blur-[128px] opacity-10" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[var(--secondary)] rounded-full blur-[128px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Unser Team</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Ein <span className="text-gradient">multiprofessionelles</span>{" "}
              Team
              <br />
              für Ihre Familie
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Unser engagiertes Team vereint Fachärzte, Psychotherapeuten und
              therapeutische Fachkräfte mit unterschiedlichen Spezialisierungen
              und Sprachkenntnissen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Praxisleitung Spotlight */}
      {teamLead && (
        <SectionWrapper>
          <LeaderSpotlight member={teamLead} />
        </SectionWrapper>
      )}

      {/* Languages Overview */}
      <SectionWrapper background="secondary">
        <GlassCard className="p-6 sm:p-8" gradient>
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-[var(--primary)]" />
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)]">
                Sprachen unserer Praxis
              </h2>
              <p className="text-sm text-[var(--foreground-muted)]">
                Behandlung in über {allLanguages.length} Sprachen möglich
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {allLanguages.map((lang) => (
              <motion.button
                key={lang}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setSelectedLanguage(selectedLanguage === lang ? null : lang)
                }
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedLanguage === lang
                    ? "bg-[var(--primary)] text-[var(--background)]"
                    : "bg-[var(--background-tertiary)] text-[var(--foreground)] hover:bg-[var(--primary)]/20"
                }`}
              >
                <span className="text-lg">{languageFlags[lang] || "🌍"}</span>
                <span>{lang}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedLanguage === lang
                      ? "bg-white/20"
                      : "bg-[var(--primary)]/20 text-[var(--primary)]"
                  }`}
                >
                  {languageStats[lang]}
                </span>
              </motion.button>
            ))}
          </div>
        </GlassCard>
      </SectionWrapper>

      {/* Team Grid */}
      <SectionWrapper>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-3">
            Unser Team
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Fachärzte, Psychotherapeuten und therapeutische Fachkräfte mit vielfältigen Spezialisierungen
          </p>
        </motion.div>

        {/* Filter Status */}
        {selectedLanguage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8 p-4 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30"
          >
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-[var(--foreground)]">
                Zeige {filteredMembers.length} Teammitglieder mit
                Sprachkenntnissen in{" "}
                <strong className="text-[var(--primary)]">
                  {selectedLanguage}
                </strong>
              </span>
            </div>
            <button
              onClick={() => setSelectedLanguage(null)}
              className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            >
              <X className="w-4 h-4" />
              Filter entfernen
            </button>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--foreground-muted)]">
              Keine Teammitglieder mit dieser Sprache gefunden.
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* Team Stats */}
      <SectionWrapper background="secondary">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Teammitglieder", value: teamMembers.length, suffix: "+" },
            { label: "Sprachen", value: allLanguages.length, suffix: "" },
            { label: "Fachrichtungen", value: 6, suffix: "+" },
            { label: "Jahre Erfahrung", value: 15, suffix: "+" },
          ].map((stat, index) => (
            <GlassCard
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <span className="block text-4xl font-bold text-gradient mb-2">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="text-[var(--foreground-muted)]">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Career CTA */}
      <SectionWrapper>
        <GlassCard className="p-8 sm:p-12" gradient>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
                Teil unseres Teams werden?
              </h2>
              <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-6">
                Wir suchen engagierte Kolleg:innen, die unser
                multiprofessionelles Team verstärken möchten. Ob Facharzt,
                Psychotherapeut:in oder therapeutische Fachkraft – bei uns
                arbeiten Sie in einem wertschätzenden, vielfältigen Umfeld.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Supervision",
                  "Fortbildungen",
                  "Multiprofessionell",
                  "Mehrsprachig",
                ].map((tag) => (
                  <Badge key={tag} variant="primary" size="md">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href="/karriere">
                <Button size="lg">
                  Offene Stellen ansehen
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                  <Users className="w-24 h-24 text-[var(--primary)]" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[var(--primary)]/30 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[var(--secondary)]/30 blur-xl" />
              </div>
            </div>
          </div>
        </GlassCard>
      </SectionWrapper>
    </>
  );
}
