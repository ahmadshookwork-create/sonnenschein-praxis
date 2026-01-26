"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  User,
  Users,
  Heart,
  Home,
  Palette,
  MessageCircle,
  Pill,
  ArrowRight,
  Baby,
  GraduationCap,
  HeartHandshake,
  Users2,
  CheckCircle2,
  Brain,
  BookOpen,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { services, targetGroupDescriptions } from "@/data/services";
import { useTranslation } from "@/i18n";

const iconMap: Record<string, typeof Stethoscope> = {
  Stethoscope,
  User,
  Users,
  Heart,
  Home,
  Palette,
  MessageCircle,
  Pill,
};

const targetGroupIcons = {
  kinder: Baby,
  jugendliche: GraduationCap,
  eltern: HeartHandshake,
  familien: Users2,
};

type TargetGroup = "kinder" | "jugendliche" | "eltern" | "familien";

export default function LeistungenContent() {
  const [activeTab, setActiveTab] = useState<TargetGroup>("kinder");
  const { t } = useTranslation();

  // Helper to get translated items array
  const getTranslatedItems = (basePath: string, count: number): string[] => {
    const items: string[] = [];
    for (let i = 0; i < count; i++) {
      items.push(t(`${basePath}.${i}`));
    }
    return items;
  };

  // Get autism diagnostics items (6 items)
  const autismDiagnosticsItems = getTranslatedItems(
    "services.services.specializations.autismDiagnostics.items",
    6
  );

  // Get partial performance disorders items (6 items)
  const partialPerformanceDisordersItems = getTranslatedItems(
    "services.services.specializations.partialPerformanceDisorders.items",
    6
  );

  // Get translated target group info
  const getTargetGroupInfo = (group: TargetGroup) => ({
    title: t(`services.services.targetGroupDescriptions.${group}.title`),
    ageRange: t(`services.services.targetGroupDescriptions.${group}.ageRange`),
    description: t(`services.services.targetGroupDescriptions.${group}.description`),
    commonIssues: getTranslatedItems(
      `services.services.targetGroupDescriptions.${group}.commonIssues`,
      6
    ),
  });

  // Get translated service item
  const getServiceItem = (index: number) => ({
    title: t(`services.services.items.${index}.title`),
    description: t(`services.services.items.${index}.description`),
    details: getTranslatedItems(`services.services.items.${index}.details`, 8),
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[var(--primary)] rounded-full blur-[128px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              <span>{t("services.services.pageTitle")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              {t("services.services.heroTitle").split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-gradient">
                {t("services.services.heroTitle").split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("services.services.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diagnostik-Schwerpunkte - Hervorgehoben */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{t("services.services.specializations.sectionBadge")}</span>
          </div>
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("services.services.specializations.title").split(" ")[0]}{" "}
            <span className="text-gradient">
              {t("services.services.specializations.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("services.services.specializations.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Autismusdiagnostik */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-8 relative overflow-hidden" gradient>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-6 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                  {t("services.services.specializations.autismDiagnostics.title")}
                </h3>
                <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                  {t("services.services.specializations.autismDiagnostics.description")}
                </p>
                <ul className="space-y-3">
                  {autismDiagnosticsItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--foreground)]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>

          {/* Teilleistungsstörungsdiagnostik */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-8 relative overflow-hidden" gradient>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--secondary)]/20 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] flex items-center justify-center mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                  {t("services.services.specializations.partialPerformanceDisorders.title")}
                </h3>
                <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                  {t("services.services.specializations.partialPerformanceDisorders.description")}
                </p>
                <ul className="space-y-3">
                  {partialPerformanceDisordersItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--foreground)]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("services.services.treatmentOffers.title").split(" ")[0]}{" "}
            <span className="text-gradient">
              {t("services.services.treatmentOffers.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("services.services.treatmentOffers.description")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            const translatedService = getServiceItem(index);
            return (
              <GlassCard
                key={service.id}
                delay={index * 0.1}
                className="h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  {translatedService.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  {translatedService.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.targetGroups.map((group) => (
                    <Badge key={group} variant="default" size="sm">
                      {t(`services.services.targetGroupDescriptions.${group}.title`)}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2">
                  {translatedService.details.slice(0, 4).map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-[var(--foreground-muted)]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Target Groups */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("services.services.targetGroups.sectionTitle").split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient">
              {t("services.services.targetGroups.sectionTitle").split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("services.services.targetGroups.sectionDescription")}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(Object.keys(targetGroupDescriptions) as TargetGroup[]).map(
            (group) => {
              const Icon = targetGroupIcons[group];
              const info = getTargetGroupInfo(group);
              return (
                <button
                  key={group}
                  onClick={() => setActiveTab(group)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    activeTab === group
                      ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-[var(--background)]"
                      : "glass-card text-[var(--foreground)] hover:border-[var(--primary)]/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {info.title}
                </button>
              );
            },
          )}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard className="p-8 lg:p-12" gradient>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                {(() => {
                  const Icon = targetGroupIcons[activeTab];
                  const info = getTargetGroupInfo(activeTab);
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[var(--primary)]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[var(--foreground)]">
                            {info.title}
                          </h3>
                          {info.ageRange && (
                            <Badge variant="primary" size="md">
                              {info.ageRange}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-6">
                        {info.description}
                      </p>
                    </>
                  );
                })()}
              </div>

              <div>
                <h4 className="font-semibold text-[var(--foreground)] mb-4">
                  {t("services.services.targetGroups.commonIssuesTitle")}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {getTargetGroupInfo(activeTab).commonIssues.map(
                    (issue, index) => (
                      <motion.li
                        key={issue}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                        <span className="text-sm text-[var(--foreground)]">
                          {issue}
                        </span>
                      </motion.li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Relevant Services */}
        <div className="mt-8">
          <h4 className="text-center text-lg font-semibold text-[var(--foreground)] mb-6">
            {t("services.services.targetGroups.matchingServicesTitle")} {getTargetGroupInfo(activeTab).title}
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.targetGroups.includes(activeTab))
              .map((service, index) => {
                const Icon = iconMap[service.icon] || Stethoscope;
                const serviceIndex = services.findIndex((s) => s.id === service.id);
                const translatedService = getServiceItem(serviceIndex);
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <GlassCard className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[var(--primary)]" />
                      </div>
                      <span className="font-medium text-sm text-[var(--foreground)]">
                        {translatedService.title}
                      </span>
                    </GlassCard>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="secondary">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("services.services.cta.title")}
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8">
            {t("services.services.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt">
              <Button size="lg">
                {t("services.services.cta.primaryButton")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5" />
                {t("services.services.cta.secondaryButton")}
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
