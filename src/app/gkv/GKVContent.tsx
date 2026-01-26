"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  ArrowRight,
  Heart,
  AlertCircle,
  Stethoscope,
  Users,
  Brain,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/i18n";

const serviceIcons = [Stethoscope, Brain, Users, FileText];

export default function GKVContent() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--primary)] rounded-full blur-[128px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>{t('gkv.gkv.hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              {t('gkv.gkv.hero.title').split('gesetzlich Versicherte')[0]}
              <span className="text-gradient">gesetzlich Versicherte</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8">
              {t('gkv.gkv.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button size="lg">
                  {t('gkv.gkv.hero.buttons.requestAppointment')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/privatpraxis">
                <Button variant="secondary" size="lg">
                  <Heart className="w-5 h-5" />
                  {t('gkv.gkv.hero.buttons.privatePractice')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <SectionWrapper background="secondary">
        <GlassCard className="p-6 sm:p-8 border-l-4 border-l-[var(--warning)]">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-[var(--warning)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                {t('gkv.gkv.importantNotice.title')}
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                {t('gkv.gkv.importantNotice.description')}
              </p>
            </div>
          </div>
        </GlassCard>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t('gkv.gkv.services.sectionTitle').split('Kassenleistungen')[0]}
            <span className="text-gradient">Kassenleistungen</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t('gkv.gkv.services.sectionDescription')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((index) => {
            const Icon = serviceIcons[index];
            return (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  {t(`gkv.gkv.services.items.${index}.title`)}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t(`gkv.gkv.services.items.${index}.description`)}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Process Steps */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t('gkv.gkv.processSteps.sectionTitle').split('Behandlung')[0]}
            <span className="text-gradient">Behandlung</span>
            {t('gkv.gkv.processSteps.sectionTitle').split('Behandlung')[1]}
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t('gkv.gkv.processSteps.sectionDescription')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < 3 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--primary)]/50 to-transparent" />
              )}
              <GlassCard className="text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-xl font-bold text-[var(--background)] mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  {t(`gkv.gkv.processSteps.steps.${index}.title`)}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t(`gkv.gkv.processSteps.steps.${index}.description`)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* What to Bring */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
              {t('gkv.gkv.whatToBring.sectionTitle').split('Ersttermin')[0]}
              <span className="text-gradient">Ersttermin</span>
              {t('gkv.gkv.whatToBring.sectionTitle').split('Ersttermin')[1]}
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8">
              {t('gkv.gkv.whatToBring.sectionDescription')}
            </p>

            <ul className="space-y-4">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-[var(--foreground)]">
                    {t(`gkv.gkv.whatToBring.items.${index}`)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8" gradient>
              <Clock className="w-12 h-12 text-[var(--primary)] mb-6" />
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                {t('gkv.gkv.firstAppointmentInfo.title')}
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                {t('gkv.gkv.firstAppointmentInfo.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="flex-1">
                  <Button className="w-full">
                    <Phone className="w-4 h-4" />
                    {t('gkv.gkv.firstAppointmentInfo.button')}
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Link to Private Practice */}
      <SectionWrapper background="secondary">
        <GlassCard className="p-8 sm:p-12 text-center" gradient>
          <Heart className="w-16 h-16 mx-auto text-[var(--secondary-light)] mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
            {t('gkv.gkv.privatePracticeLink.title')}
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8">
            {t('gkv.gkv.privatePracticeLink.description')}
          </p>
          <Link href="/privatpraxis">
            <Button size="lg">
              {t('gkv.gkv.privatePracticeLink.button')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </GlassCard>
      </SectionWrapper>
    </>
  );
}
