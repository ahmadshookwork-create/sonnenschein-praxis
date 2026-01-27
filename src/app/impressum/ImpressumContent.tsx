"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import {
  FileText,
  Building2,
  Phone,
  Mail,
  Scale,
  Shield,
  ExternalLink,
  Landmark,
} from "lucide-react";
import { useTranslation } from "@/i18n";

export default function ImpressumContent() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[var(--primary-light)] rounded-full blur-[128px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-[var(--primary-dark)] text-sm font-medium mb-6 shadow-sm">
              <FileText className="w-4 h-4" />
              <span>{t("imprint.imprint.badge")}</span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--foreground)]">
              {t("imprint.imprint.title")}
            </h1>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl mx-auto">
              {t("imprint.imprint.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="secondary">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 sm:p-12">
            <div className="prose-warm max-w-none space-y-10">
              {/* Provider */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("imprint.imprint.sections.provider.title")}
                  </h2>
                </div>
                <div className="ml-13 pl-13">
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    <strong className="text-[var(--foreground)] text-lg">
                      {t("imprint.imprint.sections.provider.practiceName")}
                    </strong>
                    <br />
                    <strong className="text-[var(--foreground)]">
                      {t("imprint.imprint.sections.provider.director.label")}
                    </strong>{" "}
                    {t("imprint.imprint.sections.provider.director.name")}
                    <br />
                    {t("imprint.imprint.sections.provider.specialty")}
                    <br /><br />
                    Blücherstraße 55
                    <br />
                    10961 Berlin
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("imprint.imprint.sections.contact.title")}
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-4 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] m-0">
                    <span className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-[var(--primary)]" />
                      <span>{t("imprint.imprint.sections.contact.phone.label")} +49 (0)30 615 85 20</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[var(--primary)]" />
                      <span>{t("imprint.imprint.sections.contact.email.label")} praxis@baselallozy.de</span>
                    </span>
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)] mt-3 italic">
                    {t("imprint.imprint.sections.contact.notice")}
                  </p>
                </div>
              </section>

              {/* Professional Designation */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("imprint.imprint.sections.professionalTitle.title")}
                  </h2>
                </div>
                <div className="space-y-4 text-[var(--foreground-muted)]">
                  <p>
                    <strong className="text-[var(--foreground)]">
                      {t("imprint.imprint.sections.professionalTitle.designation.label")}
                    </strong>
                    <br />
                    {t("imprint.imprint.sections.professionalTitle.designation.value")}
                  </p>
                  <p>
                    <strong className="text-[var(--foreground)]">
                      {t("imprint.imprint.sections.professionalTitle.grantingState.label")}
                    </strong>
                    <br />
                    {t("imprint.imprint.sections.professionalTitle.grantingState.value")}
                  </p>
                </div>
              </section>

              {/* Chamber */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("imprint.imprint.sections.chamber.title")}
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] m-0">
                    <strong className="text-[var(--foreground)]">
                      {t("imprint.imprint.sections.chamber.name")}
                    </strong>
                    <br />
                    Friedrichstraße 16
                    <br />
                    10969 Berlin
                    <br />
                    {t("imprint.imprint.sections.chamber.phone")}
                  </p>
                </div>
              </section>

              {/* Supervisory Authority */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {t("imprint.imprint.sections.supervisoryAuthority.title")}
                </h2>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] m-0">
                    <strong className="text-[var(--foreground)]">
                      {t("imprint.imprint.sections.supervisoryAuthority.name")}
                    </strong>
                    <br />
                    Postfach 31 09 29
                    <br />
                    10639 Berlin
                    <br />
                    {t("imprint.imprint.sections.supervisoryAuthority.phone")}
                  </p>
                </div>
              </section>

              {/* Professional Regulation */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {t("imprint.imprint.sections.professionalRegulation.title")}
                </h2>
                <p className="text-[var(--foreground-muted)]">
                  {t("imprint.imprint.sections.professionalRegulation.content")}{" "}
                  <a
                    href="https://www.aerztekammer-berlin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
                  >
                    www.aerztekammer-berlin.de
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </section>

              {/* VAT ID */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {t("imprint.imprint.sections.vatId.title")}
                </h2>
                <p className="text-[var(--foreground-muted)]">
                  {t("imprint.imprint.sections.vatId.label")}{" "}
                  <strong className="text-[var(--foreground)]">
                    56912337041
                  </strong>
                </p>
              </section>

              {/* Disclaimer */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    {t("imprint.imprint.sections.disclaimer.title")}
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      {t("imprint.imprint.sections.disclaimer.contentLiability.title")}
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      {t("imprint.imprint.sections.disclaimer.contentLiability.content")}
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      {t("imprint.imprint.sections.disclaimer.linkLiability.title")}
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      {t("imprint.imprint.sections.disclaimer.linkLiability.content")}
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      {t("imprint.imprint.sections.disclaimer.copyright.title")}
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      {t("imprint.imprint.sections.disclaimer.copyright.content")}
                    </p>
                  </div>
                </div>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {t("imprint.imprint.sections.disputeResolution.title")}
                </h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {t("imprint.imprint.sections.disputeResolution.content")}{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
                  >
                    https://ec.europa.eu/consumers/odr
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
                <p className="text-[var(--foreground-muted)] mt-3">
                  {t("imprint.imprint.sections.disputeResolution.notice")}
                </p>
              </section>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </>
  );
}
