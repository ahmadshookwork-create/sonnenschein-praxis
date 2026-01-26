import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Praxis Dr. Allozy Dr. med. Basel Allozy - Kinder- und Jugendpsychiatrie Berlin.",
};

export default function ImpressumPage() {
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
              <span>Rechtliches</span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--foreground)]">
              Impressum
            </h1>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl mx-auto">
              Angaben gemäß § 5 TMG und weitere rechtliche Informationen zur
              Praxis Dr. Allozy.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="secondary">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 sm:p-12">
            <div className="prose-warm max-w-none space-y-10">
              {/* Anbieter */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    Angaben gemäß § 5 TMG
                  </h2>
                </div>
                <div className="ml-13 pl-13">
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    <strong className="text-[var(--foreground)] text-lg">
                      Praxis Dr. Allozy
                    </strong>
                    <br />
                    <strong className="text-[var(--foreground)]">
                      Praxisleiter:
                    </strong>{" "}
                    Dr. med. Basel Allozy
                    <br />
                    Facharzt für Kinder- und Jugendpsychiatrie und
                    -psychotherapie
                    <br />
                    <br />
                    Blücherstraße 55
                    <br />
                    10961 Berlin
                  </p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    Kontakt
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-4 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] m-0">
                    <span className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-[var(--primary)]" />
                      <span>Telefon: +49 (0)30 615 85 20</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[var(--primary)]" />
                      <span>E-Mail: praxis@baselallozy.de</span>
                    </span>
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)] mt-3 italic">
                    Hinweis: Per E-Mail erfolgt keine Beratung zu medizinischen
                    Behandlungen.
                  </p>
                </div>
              </section>

              {/* Berufsbezeichnung */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    Berufsbezeichnung und berufsrechtliche Regelungen
                  </h2>
                </div>
                <div className="space-y-4 text-[var(--foreground-muted)]">
                  <p>
                    <strong className="text-[var(--foreground)]">
                      Berufsbezeichnung:
                    </strong>
                    <br />
                    Facharzt für Kinder- und Jugendpsychiatrie und
                    -psychotherapie
                  </p>
                  <p>
                    <strong className="text-[var(--foreground)]">
                      Verleihungsstaat:
                    </strong>
                    <br />
                    Bundesrepublik Deutschland
                  </p>
                </div>
              </section>

              {/* Zuständige Kammer */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    Zuständige Kammer
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] m-0">
                    <strong className="text-[var(--foreground)]">
                      Ärztekammer Berlin
                    </strong>
                    <br />
                    Friedrichstraße 16
                    <br />
                    10969 Berlin
                    <br />
                    Telefon: (030) 40806-0
                  </p>
                </div>
              </section>

              {/* Aufsichtsbehörde */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  Zuständige Aufsichtsbehörde
                </h2>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] m-0">
                    <strong className="text-[var(--foreground)]">
                      Landesamt für Gesundheit und Soziales Berlin (LAGeSo)
                    </strong>
                    <br />
                    Postfach 31 09 29
                    <br />
                    10639 Berlin
                    <br />
                    Telefon: (030) 90229-0
                  </p>
                </div>
              </section>

              {/* Berufsordnung */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  Berufsrechtliche Regelung
                </h2>
                <p className="text-[var(--foreground-muted)]">
                  Es gilt die Berufsordnung der Ärztekammer Berlin, einsehbar
                  unter:{" "}
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

              {/* Umsatzsteuer */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-[var(--foreground-muted)]">
                  Umsatzsteuer-Identifikationsnummer:{" "}
                  <strong className="text-[var(--foreground)]">
                    56912337041
                  </strong>
                </p>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    Haftungsausschluss
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      Haftung für Inhalte
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für
                      eigene Inhalte auf diesen Seiten nach den allgemeinen
                      Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                      Diensteanbieter jedoch nicht verpflichtet, übermittelte
                      oder gespeicherte fremde Informationen zu überwachen oder
                      nach Umständen zu forschen, die auf eine rechtswidrige
                      Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      Haftung für Links
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      Unser Angebot enthält Links zu externen Webseiten Dritter,
                      auf deren Inhalte wir keinen Einfluss haben. Deshalb
                      können wir für diese fremden Inhalte auch keine Gewähr
                      übernehmen. Für die Inhalte der verlinkten Seiten ist
                      stets der jeweilige Anbieter oder Betreiber der Seiten
                      verantwortlich.
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      Urheberrecht
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke
                      auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede
                      Art der Verwertung außerhalb der Grenzen des
                      Urheberrechtes bedürfen der schriftlichen Zustimmung des
                      jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Streitbeilegung */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  Streitbeilegung
                </h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
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
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </>
  );
}
