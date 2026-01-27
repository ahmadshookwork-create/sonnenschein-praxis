"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import {
  ShieldCheck,
  Eye,
  Database,
  UserCheck,
  Cookie,
  Lock,
  RefreshCw,
} from "lucide-react";
import { useTranslation } from "@/i18n";

export default function DatenschutzContent() {
  const { t } = useTranslation();

  const rights = [
    { key: "information" },
    { key: "correction" },
    { key: "deletion" },
    { key: "restriction" },
    { key: "portability" },
    { key: "objection" },
  ];

  const logItems = [
    "browserType",
    "operatingSystem",
    "referrerUrl",
    "hostname",
    "serverTime",
    "ipAddress",
  ];

  const patientNotes = [
    "dataCollection",
    "legalBasis",
    "retention",
    "disclosure",
  ];

  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--secondary-light)] rounded-full blur-[128px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--primary)]/10 border border-[var(--secondary)]/20 text-[var(--secondary-dark)] text-sm font-medium mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>{t("privacy.privacy.header.badge")}</span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--foreground)]">
              {t("privacy.privacy.header.title")}
            </h1>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl mx-auto">
              {t("privacy.privacy.header.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="secondary">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 sm:p-12">
            <div className="prose-warm max-w-none space-y-10">
              {/* Section 1 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("privacy.privacy.section1.title")}
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                    {t("privacy.privacy.section1.generalNotice.title")}
                  </h3>
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                    {t("privacy.privacy.section1.generalNotice.content")}
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("privacy.privacy.section2.title")}
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] leading-relaxed m-0">
                    {t("privacy.privacy.section2.content")}
                    <br /><br />
                    <strong className="text-[var(--foreground)]">
                      {t("privacy.privacy.section2.practiceName")}
                    </strong>
                    <br />
                    {t("privacy.privacy.section2.doctorName")}
                    <br />
                    Blücherstraße 55
                    <br />
                    10961 Berlin
                    <br /><br />
                    {t("privacy.privacy.section2.phone")} +49 (0)30 615 85 20
                    <br />
                    {t("privacy.privacy.section2.email")} praxis@baselallozy.de
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {t("privacy.privacy.section3.title")}
                </h2>

                <div className="space-y-4">
                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      {t("privacy.privacy.section3.serverLogs.title")}
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-3">
                      {t("privacy.privacy.section3.serverLogs.content")}
                    </p>
                    <ul className="list-none space-y-1 text-[var(--foreground-muted)] text-sm m-0 p-0">
                      {logItems.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                          {t(`privacy.privacy.section3.serverLogs.items.${item}`)}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[var(--foreground-muted)] text-sm mt-3 m-0">
                      {t("privacy.privacy.section3.serverLogs.legalBasis")}
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      {t("privacy.privacy.section3.contactForm.title")}
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      {t("privacy.privacy.section3.contactForm.content")}
                      <br /><br />
                      {t("privacy.privacy.section3.contactForm.legalBasis")}
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      {t("privacy.privacy.section3.applicationForm.title")}
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      {t("privacy.privacy.section3.applicationForm.content")}
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("privacy.privacy.section4.title")}
                  </h2>
                </div>
                <div className="bg-gradient-to-r from-[var(--tertiary)]/5 to-[var(--primary)]/5 rounded-xl p-5 border border-[var(--tertiary)]/20">
                  <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                    {t("privacy.privacy.section4.intro")}
                  </p>
                  <p className="font-medium text-[var(--foreground)] mb-2">
                    {t("privacy.privacy.section4.importantNotes.title")}
                  </p>
                  <ul className="list-none space-y-2 text-[var(--foreground-muted)] text-sm m-0 p-0">
                    {patientNotes.map((note) => (
                      <li key={note} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 flex-shrink-0"></span>
                        <span>{t(`privacy.privacy.section4.importantNotes.items.${note}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("privacy.privacy.section5.title")}
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] mb-4">
                  {t("privacy.privacy.section5.intro")}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {rights.map((item) => (
                    <div
                      key={item.key}
                      className="bg-white/50 rounded-xl p-4 border border-[var(--card-border)]"
                    >
                      <p className="m-0">
                        <strong className="text-[var(--foreground)]">
                          {t(`privacy.privacy.section5.rights.${item.key}.title`)}
                        </strong>
                        <span className="text-[var(--foreground-muted)] text-sm block mt-1">
                          {t(`privacy.privacy.section5.rights.${item.key}.desc`)}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--foreground-muted)] text-sm mt-4">
                  {t("privacy.privacy.section5.supervisoryAuthority")}
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("privacy.privacy.section6.title")}
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] leading-relaxed m-0">
                    {t("privacy.privacy.section6.content")}
                    <br /><br />
                    <strong className="text-[var(--foreground)]">
                      {t("privacy.privacy.section6.noMarketing")}
                    </strong>
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("privacy.privacy.section7.title")}
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {t("privacy.privacy.section7.content")}
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("privacy.privacy.section8.title")}
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {t("privacy.privacy.section8.content")}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary-dark)] text-sm font-medium">
                  <RefreshCw className="w-4 h-4" />
                  <span>{t("privacy.privacy.section8.lastUpdated")}</span>
                </div>
              </section>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </>
  );
}
