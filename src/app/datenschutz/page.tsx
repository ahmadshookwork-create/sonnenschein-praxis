import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Sonnenschein Praxis Dr. med. Basel Allozy - Kinder- und Jugendpsychiatrie Berlin.",
};

export default function DatenschutzPage() {
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
              <span>Datenschutz</span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--foreground)]">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl mx-auto">
              Informationen zum Schutz Ihrer persönlichen Daten bei der Nutzung
              unserer Website.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="secondary">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 sm:p-12">
            <div className="prose-warm max-w-none space-y-10">
              {/* Einleitung */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    1. Datenschutz auf einen Blick
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                    Die folgenden Hinweise geben einen einfachen Überblick
                    darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind
                    alle Daten, mit denen Sie persönlich identifiziert werden
                    können.
                  </p>
                </div>
              </section>

              {/* Verantwortlicher */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    2. Verantwortliche Stelle
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] leading-relaxed m-0">
                    Verantwortliche Stelle für die Datenverarbeitung auf dieser
                    Website ist:
                    <br />
                    <br />
                    <strong className="text-[var(--foreground)]">
                      Sonnenschein Praxis
                    </strong>
                    <br />
                    Dr. med. Basel Allozy
                    <br />
                    Blücherstraße 55
                    <br />
                    10961 Berlin
                    <br />
                    <br />
                    Telefon: +49 (0)30 615 85 20
                    <br />
                    E-Mail: praxis@baselallozy.de
                  </p>
                </div>
              </section>

              {/* Datenerfassung */}
              <section>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>

                <div className="space-y-4">
                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      Server-Log-Dateien
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-3">
                      Der Provider dieser Seiten erhebt und speichert
                      automatisch Informationen in sogenannten
                      Server-Log-Dateien, die Ihr Browser automatisch an uns
                      übermittelt. Dies sind:
                    </p>
                    <ul className="list-none space-y-1 text-[var(--foreground-muted)] text-sm m-0 p-0">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                        Browsertyp und Browserversion
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                        Verwendetes Betriebssystem
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                        Referrer URL
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                        Hostname des zugreifenden Rechners
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                        Uhrzeit der Serveranfrage
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                        IP-Adresse
                      </li>
                    </ul>
                    <p className="text-[var(--foreground-muted)] text-sm mt-3 m-0">
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen
                      wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt
                      auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      Kontaktformular
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                      werden Ihre Angaben aus dem Anfrageformular inklusive der
                      von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                      der Anfrage und für den Fall von Anschlussfragen bei uns
                      gespeichert. Diese Daten geben wir nicht ohne Ihre
                      Einwilligung weiter.
                      <br />
                      <br />
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                      Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                      Erfüllung eines Vertrags zusammenhängt oder zur
                      Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                      Bewerbungsformular
                    </h3>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed m-0">
                      Die über das Bewerbungsformular übermittelten Daten werden
                      ausschließlich zur Bearbeitung Ihrer Bewerbung verwendet.
                      Die Daten werden nach Abschluss des Bewerbungsverfahrens
                      gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
                      entgegenstehen.
                    </p>
                  </div>
                </div>
              </section>

              {/* Patientendaten */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    4. Besondere Kategorien personenbezogener Daten
                    (Patientendaten)
                  </h2>
                </div>
                <div className="bg-gradient-to-r from-[var(--tertiary)]/5 to-[var(--primary)]/5 rounded-xl p-5 border border-[var(--tertiary)]/20">
                  <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                    Als ärztliche Praxis verarbeiten wir Gesundheitsdaten
                    unserer Patienten. Diese unterliegen einem besonderen Schutz
                    nach Art. 9 DSGVO und der ärztlichen Schweigepflicht (§ 203
                    StGB).
                  </p>
                  <p className="font-medium text-[var(--foreground)] mb-2">
                    Wichtige Hinweise:
                  </p>
                  <ul className="list-none space-y-2 text-[var(--foreground-muted)] text-sm m-0 p-0">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 flex-shrink-0"></span>
                      <span>
                        Patientendaten werden ausschließlich im Rahmen der
                        ärztlichen Behandlung erhoben und verarbeitet.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 flex-shrink-0"></span>
                      <span>
                        Die Verarbeitung erfolgt auf Grundlage von Art. 9 Abs. 2
                        lit. h DSGVO (Gesundheitsversorgung).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 flex-shrink-0"></span>
                      <span>
                        Patientendaten werden nach den gesetzlichen
                        Aufbewahrungsfristen (mind. 10 Jahre) gespeichert.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 flex-shrink-0"></span>
                      <span>
                        Eine Weitergabe erfolgt nur mit Ihrer Einwilligung oder
                        wenn gesetzlich vorgeschrieben.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Rechte der Betroffenen */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    5. Ihre Rechte
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] mb-4">
                  Sie haben jederzeit das Recht:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: "Auskunft",
                      desc: "über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)",
                    },
                    {
                      title: "Berichtigung",
                      desc: "unrichtiger Daten zu verlangen (Art. 16 DSGVO)",
                    },
                    {
                      title: "Löschung",
                      desc: "Ihrer Daten zu verlangen (Art. 17 DSGVO)",
                    },
                    {
                      title: "Einschränkung",
                      desc: "der Verarbeitung zu verlangen (Art. 18 DSGVO)",
                    },
                    {
                      title: "Datenübertragbarkeit",
                      desc: "zu verlangen (Art. 20 DSGVO)",
                    },
                    {
                      title: "Widerspruch",
                      desc: "gegen die Verarbeitung einzulegen (Art. 21 DSGVO)",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/50 rounded-xl p-4 border border-[var(--card-border)]"
                    >
                      <p className="m-0">
                        <strong className="text-[var(--foreground)]">
                          {item.title}
                        </strong>
                        <span className="text-[var(--foreground-muted)] text-sm block mt-1">
                          {item.desc}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--foreground-muted)] text-sm mt-4">
                  Sie haben außerdem das Recht, sich bei einer{" "}
                  <strong className="text-[var(--foreground)]">
                    Aufsichtsbehörde
                  </strong>{" "}
                  zu beschweren (Art. 77 DSGVO).
                </p>
              </section>

              {/* Cookies */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    6. Cookies
                  </h2>
                </div>
                <div className="bg-white/50 rounded-xl p-5 border border-[var(--card-border)]">
                  <p className="text-[var(--foreground-muted)] leading-relaxed m-0">
                    Diese Website verwendet technisch notwendige Cookies, die
                    für den Betrieb der Website erforderlich sind. Eine
                    gesonderte Einwilligung ist hierfür nicht erforderlich (Art.
                    6 Abs. 1 lit. f DSGVO).
                    <br />
                    <br />
                    <strong className="text-[var(--foreground)]">
                      Wir verwenden keine Marketing- oder Analyse-Cookies.
                    </strong>
                  </p>
                </div>
              </section>

              {/* SSL */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    7. SSL-/TLS-Verschlüsselung
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte eine
                  SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                  erkennen Sie daran, dass die Adresszeile des Browsers von
                  &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in
                  Ihrer Browserzeile.
                </p>
              </section>

              {/* Änderungen */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--foreground)] m-0">
                    8. Änderungen dieser Datenschutzerklärung
                  </h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                  damit sie stets den aktuellen rechtlichen Anforderungen
                  entspricht oder um Änderungen unserer Leistungen umzusetzen.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary-dark)] text-sm font-medium">
                  <RefreshCw className="w-4 h-4" />
                  <span>Stand: Dezember 2024</span>
                </div>
              </section>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </>
  );
}
