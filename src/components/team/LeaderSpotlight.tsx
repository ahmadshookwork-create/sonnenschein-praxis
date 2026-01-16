"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  GraduationCap,
  Heart,
  Briefcase,
  Globe,
  ChevronDown,
  Stethoscope,
  Building2,
  Sparkles,
  HandHeart,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { TeamMember, languageFlags } from "@/data/team";

interface LeaderSpotlightProps {
  member: TeamMember;
}

export default function LeaderSpotlight({ member }: LeaderSpotlightProps) {
  const [imageError, setImageError] = useState(false);
  const [showFullTimeline, setShowFullTimeline] = useState(false);
  const languages = member.languages ?? [];

  // Kurzprofil Bullets (prägnant, 1 Zeile)
  const profileBullets = [
    { icon: Stethoscope, text: "Facharzt für Kinder- und Jugendpsychiatrie" },
    { icon: Heart, text: "Tiefenpsychologisch fundierte Psychotherapie" },
    { icon: Sparkles, text: "Integrative, individualisierte Therapiekonzepte" },
    { icon: HandHeart, text: "Kultursensible Versorgung für Familien" },
  ];

  // Mini-Timeline Werdegang
  const timelineItems = [
    { year: "2006", text: "Medizinstudium Charité Berlin abgeschlossen" },
    { year: "2012", text: "Facharztanerkennung KJP + Psychotherapie" },
    { year: "2013", text: "Promotion zum Dr. med." },
    { year: "2017", text: "DGSF Supervisor (Systemische Therapie)" },
    { year: "2019", text: "EMDR-Therapeut (Traumatherapie)" },
    { year: "2021", text: "Gründung Sonnenschein Praxis Berlin" },
  ];

  const visibleTimeline = showFullTimeline
    ? timelineItems
    : timelineItems.slice(0, 3);

  // Badges
  const badges = [
    "Facharzt seit 2012",
    "DGSF Supervisor",
    "EMDR",
    "TFP / KIP",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Premium Profile Card */}
      <div className="relative max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-[var(--primary)]/[0.02] backdrop-blur-md border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--primary)]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--secondary)]/[0.04] rounded-full blur-3xl pointer-events-none" />

        {/* Main Grid: 2 Columns Desktop, Stack Mobile */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0">
          {/* LEFT COLUMN: Avatar + Quick Facts + CTAs (Desktop) */}
          <div className="flex flex-col items-center lg:items-center p-6 sm:p-8 lg:p-10 lg:border-r border-[var(--card-border)]/50 bg-gradient-to-b from-transparent to-[var(--background-secondary)]/30">
            {/* Avatar Container */}
            <div className="relative mb-5">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/15 rounded-full blur-2xl scale-110 opacity-60" />

              {/* Full-Bleed Circle Avatar */}
              <div className="relative w-[168px] h-[168px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden ring-4 ring-white/70 shadow-lg">
                {member.imageSrc && !imageError ? (
                  <Image
                    src={member.imageSrc}
                    alt={`Portrait von ${member.name}, Praxisleitung`}
                    fill
                    sizes="(max-width: 768px) 168px, (max-width: 1024px) 220px, 260px"
                    quality={90}
                    priority
                    className="object-cover scale-[1.03]"
                    style={{ objectPosition: "50% 18%" }} onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                    <Award className="w-20 h-20 text-[var(--primary)]" />
                  </div>
                )}
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 shadow-sm mb-5">
              <Award className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-sm font-semibold text-[var(--primary-dark)]">
                Praxisleitung
              </span>
            </div>

            {/* Name & Title (Mobile only) */}
            <div className="lg:hidden text-center mb-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-1 leading-tight">
                {member.name}
              </h2>
              <p className="text-base text-[var(--primary-dark)] font-medium">
                {member.role}
              </p>
            </div>

            {/* Languages */}
            {languages.length > 0 && (
              <div className="flex items-center gap-3 mb-5">
                <Globe className="w-4 h-4 text-[var(--foreground-muted)]" />
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground)]"
                  >
                    <span className="text-base">
                      {languageFlags[lang] || "🌍"}
                    </span>
                    {lang}
                  </span>
                ))}
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[280px] mb-6">
              <div className="text-center p-3 rounded-xl bg-white/60 border border-[var(--card-border)]/50">
                <div className="text-2xl font-bold text-[var(--primary-dark)]">
                  15+
                </div>
                <div className="text-xs text-[var(--foreground-muted)]">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/60 border border-[var(--card-border)]/50">
                <div className="text-2xl font-bold text-[var(--primary-dark)]">
                  2021
                </div>
                <div className="text-xs text-[var(--foreground-muted)]">
                  Praxisgründung
                </div>
              </div>
            </div>

            {/* CTAs - visible on left column for desktop */}
            <div className="hidden lg:flex flex-col gap-3 w-full max-w-[280px]">
              <Link href="/kontakt" className="block">
                <Button size="lg" className="w-full justify-center">
                  Termin anfragen
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/leistungen" className="block">
                <Button variant="secondary" size="lg" className="w-full justify-center">
                  Leistungen ansehen
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Profile Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Name & Title (Desktop only) */}
            <div className="hidden lg:block mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-2 leading-tight tracking-tight">
                {member.name}
              </h2>
              <p className="text-lg text-[var(--primary-dark)] font-medium">
                {member.role}
              </p>
              {member.subtitle && (
                <p className="text-sm text-[var(--foreground-muted)] mt-1">
                  {member.subtitle}
                </p>
              )}
            </div>

            {/* Profile Bullets */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-3">
                Schwerpunkte
              </h3>
              <ul className="space-y-2.5">
                {profileBullets.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[var(--foreground)] text-sm md:text-[15px]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini-Timeline Werdegang */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-3">
                Werdegang
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[var(--primary)]/30 to-[var(--secondary)]/20" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={showFullTimeline ? "full" : "short"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {visibleTimeline.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 relative">
                        <div className="w-6 h-6 rounded-full bg-white border-2 border-[var(--primary)]/40 flex items-center justify-center flex-shrink-0 z-10">
                          <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                        </div>
                        <div className="flex-1 pb-1">
                          <span className="text-xs font-semibold text-[var(--primary-dark)] bg-[var(--primary)]/10 px-2 py-0.5 rounded">
                            {item.year}
                          </span>
                          <p className="text-sm text-[var(--foreground-muted)] mt-1">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Expand/Collapse Button */}
                {timelineItems.length > 3 && (
                  <button
                    onClick={() => setShowFullTimeline(!showFullTimeline)}
                    className="mt-3 ml-9 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded"
                  >
                    {showFullTimeline ? "Weniger anzeigen" : "Mehr anzeigen"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        showFullTimeline ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Engagement Note */}
            <div className="mb-6 p-4 rounded-xl bg-[var(--secondary)]/5 border border-[var(--secondary)]/15">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)] mb-1">
                    Engagement & Forschung
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    Mitgründer BALSAM (DAGP e.V.) – Rehabilitation traumatisierter
                    geflüchteter Kinder. Forschungsfokus auf integrative,
                    methodenübergreifende Psychotherapiekonzepte.
                  </p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--foreground-muted)] bg-white/80 rounded-full border border-[var(--card-border)]"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--primary)]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Memberships */}
            <div className="flex items-center gap-2 text-xs text-[var(--foreground-muted)] mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Mitglied: IASE e.V., NKJPP e.V.</span>
            </div>

            {/* CTAs - Mobile only */}
            <div className="lg:hidden flex flex-col sm:flex-row gap-3">
              <Link href="/kontakt" className="block flex-1">
                <Button size="lg" className="w-full justify-center">
                  Termin anfragen
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/leistungen" className="block flex-1">
                <Button variant="secondary" size="lg" className="w-full justify-center">
                  Leistungen ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
