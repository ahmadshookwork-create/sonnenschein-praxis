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
import { useTranslation } from "@/i18n";

interface LeaderSpotlightProps {
  member: TeamMember;
}

export default function LeaderSpotlight({ member }: LeaderSpotlightProps) {
  const { t, lang } = useTranslation();
  const [imageError, setImageError] = useState(false);
  const [showFullTimeline, setShowFullTimeline] = useState(false);
  const languages = member.languages ?? [];
  const isRTL = lang === "ar";

  // Get translated member data
  const memberKey = `team.team.members.${member.id}`;
  const translatedName = t(`${memberKey}.name`) || member.name;
  const translatedRole = t(`${memberKey}.role`) || member.role;
  const translatedSubtitle = t(`${memberKey}.subtitle`) || member.subtitle;
  const translatedFullBio = t(`${memberKey}.fullBio`) || member.fullBio;
  
  // Get translated highlights array
  const translatedHighlights = t(`${memberKey}.highlights`) || member.highlights || [];

  // Get translated language names
  const getTranslatedLanguage = (langName: string) => {
    return t(`team.team.languageNames.${langName}`) || langName;
  };

  // Kurzprofil Bullets (translated)
  const profileBullets = [
    { icon: Stethoscope, text: t("team.team.leader.bullets.specialist") },
    { icon: Heart, text: t("team.team.leader.bullets.psychotherapy") },
    { icon: Sparkles, text: t("team.team.leader.bullets.integrative") },
    { icon: HandHeart, text: t("team.team.leader.bullets.cultureSensitive") },
  ];

  // Mini-Timeline Werdegang (translated)
  const timelineItems = [
    { year: "2006", text: t("team.team.leader.timeline.2006") },
    { year: "2012", text: t("team.team.leader.timeline.2012") },
    { year: "2013", text: t("team.team.leader.timeline.2013") },
    { year: "2017", text: t("team.team.leader.timeline.2017") },
    { year: "2019", text: t("team.team.leader.timeline.2019") },
    { year: "2021", text: t("team.team.leader.timeline.2021") },
  ];

  const visibleTimeline = showFullTimeline
    ? timelineItems
    : timelineItems.slice(0, 3);

  // Badges (translated)
  const badges = [
    t("team.team.leader.badges.specialist"),
    t("team.team.leader.badges.dgsf"),
    t("team.team.leader.badges.emdr"),
    t("team.team.leader.badges.tfpKip"),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Premium Profile Card */}
      <div className="relative max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-[var(--primary)]/[0.02] backdrop-blur-md border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className={`absolute -top-40 ${isRTL ? '-left-40' : '-right-40'} w-96 h-96 bg-[var(--primary)]/[0.04] rounded-full blur-3xl pointer-events-none`} />
        <div className={`absolute -bottom-40 ${isRTL ? '-right-40' : '-left-40'} w-80 h-80 bg-[var(--secondary)]/[0.04] rounded-full blur-3xl pointer-events-none`} />

        {/* Main Grid: 2 Columns Desktop, Stack Mobile */}
        <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0`}>
          {/* LEFT COLUMN: Avatar + Quick Facts + CTAs (Desktop) */}
          <div className={`flex flex-col items-center lg:items-center p-6 sm:p-8 lg:p-10 ${isRTL ? 'lg:border-l' : 'lg:border-r'} border-[var(--card-border)]/50 bg-gradient-to-b from-transparent to-[var(--background-secondary)]/30`}>
            {/* Avatar Container */}
            <div className="relative mb-5">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/15 rounded-full blur-2xl scale-110 opacity-60" />

              {/* Full-Bleed Circle Avatar */}
              <div className="relative w-[168px] h-[168px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden ring-4 ring-white/70 shadow-lg">
                {member.imageSrc && !imageError ? (
                  <Image
                    src={member.imageSrc}
                    alt={translatedName}
                    fill
                    sizes="(max-width: 768px) 168px, (max-width: 1024px) 220px, 260px"
                    quality={90}
                    priority
                    className="object-cover scale-[1.03]"
                    style={{ objectPosition: "50% 18%" }}
                    onError={() => setImageError(true)}
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
                {t("team.team.leader.badge")}
              </span>
            </div>

            {/* Name & Title (Mobile only) */}
            <div className="lg:hidden text-center mb-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-1 leading-tight">
                {translatedName}
              </h2>
              <p className="text-base text-[var(--primary-dark)] font-medium">
                {translatedRole}
              </p>
            </div>

            {/* Languages */}
            {languages.length > 0 && (
              <div className="flex items-center gap-3 mb-5">
                <Globe className="w-4 h-4 text-[var(--foreground-muted)]" />
                {languages.map((langName) => (
                  <span
                    key={langName}
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground)]"
                  >
                    <span className="text-base">
                      {languageFlags[langName] || "🌍"}
                    </span>
                    {getTranslatedLanguage(langName)}
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
                  {t("team.team.leader.stats.experience")}
                </div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/60 border border-[var(--card-border)]/50">
                <div className="text-2xl font-bold text-[var(--primary-dark)]">
                  2021
                </div>
                <div className="text-xs text-[var(--foreground-muted)]">
                  {t("team.team.leader.stats.founded")}
                </div>
              </div>
            </div>

            {/* CTAs - visible on left column for desktop */}
            <div className="hidden lg:flex flex-col gap-3 w-full max-w-[280px]">
              <Link href="/kontakt" className="block">
                <Button size="lg" className="w-full justify-center">
                  {t("team.team.leader.cta.appointment")}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
                </Button>
              </Link>
              <Link href="/leistungen" className="block">
                <Button variant="secondary" size="lg" className="w-full justify-center">
                  {t("team.team.leader.cta.services")}
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Profile Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Name & Title (Desktop only) */}
            <div className="hidden lg:block mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-2 leading-tight tracking-tight">
                {translatedName}
              </h2>
              <p className="text-lg text-[var(--primary-dark)] font-medium">
                {translatedRole}
              </p>
              {translatedSubtitle && (
                <p className="text-sm text-[var(--foreground-muted)] mt-1">
                  {translatedSubtitle}
                </p>
              )}
            </div>

            {/* Profile Bullets */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-3">
                {t("team.team.leader.sections.focus")}
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
                {t("team.team.leader.sections.career")}
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className={`absolute ${isRTL ? 'right-[11px]' : 'left-[11px]'} top-2 bottom-2 w-0.5 bg-gradient-to-b from-[var(--primary)]/30 to-[var(--secondary)]/20`} />

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
                    className={`mt-3 ${isRTL ? 'mr-9' : 'ml-9'} inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded`}
                  >
                    {showFullTimeline ? t("team.team.leader.showLess") : t("team.team.leader.showMore")}
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
                    {t("team.team.leader.sections.engagement")}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {t("team.team.leader.engagementText")}
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
              <span>{t("team.team.leader.memberships")}</span>
            </div>

            {/* CTAs - Mobile only */}
            <div className="lg:hidden flex flex-col sm:flex-row gap-3">
              <Link href="/kontakt" className="block flex-1">
                <Button size="lg" className="w-full justify-center">
                  {t("team.team.leader.cta.appointment")}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
                </Button>
              </Link>
              <Link href="/leistungen" className="block flex-1">
                <Button variant="secondary" size="lg" className="w-full justify-center">
                  {t("team.team.leader.cta.services")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
