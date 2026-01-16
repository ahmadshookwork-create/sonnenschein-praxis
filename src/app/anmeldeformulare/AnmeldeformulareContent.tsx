"use client";

/**
 * Anmeldeformulare-Seite
 * Inhalte abgeleitet von: https://baselallozy.de/anmeldeformulare/
 * HINWEIS: Der "Aufnahmestopp bis März 2025"-Hinweis wurde absichtlich NICHT übernommen.
 */

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  ClipboardList,
  CheckCircle2,
  FileCheck,
  PenLine,
  Calendar,
  CreditCard,
  FolderOpen,
  FileSignature,
  Users,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

// Formulare mit externen Links (aktuellste Versionen 2024)
const forms = [
  {
    id: "anmeldebogen",
    title: "Anmeldebogen",
    description:
      "Grundlegende Informationen zu Ihrem Kind und Ihrer Familie. Dieses Formular ist für alle Ersttermine erforderlich.",
    pdfUrl:
      "https://baselallozy.de/wp-content/uploads/2024/10/Anmeldebogen_Sonnenschein-2024.pdf",
    icon: ClipboardList,
    tag: "Pflicht",
    tagVariant: "primary" as const,
  },
  {
    id: "entwicklungsfragebogen",
    title: "Fragebogen zur Entwicklung des Kindes",
    description:
      "Detaillierte Fragen zur Entwicklungsgeschichte Ihres Kindes. Hilft uns, ein umfassendes Bild zu erhalten.",
    pdfUrl:
      "https://baselallozy.de/wp-content/uploads/2024/10/Fragebogen-zur-Entwicklung-des-Kindes_Sorgeberechtigte-2024.pdf",
    icon: FileText,
    tag: "Pflicht",
    tagVariant: "primary" as const,
  },
  {
    id: "schweigepflichtentbindung",
    title: "Schweigepflichtentbindung",
    description:
      "Ermöglicht den Austausch mit anderen behandelnden Ärzten, Therapeuten, Schulen oder Einrichtungen.",
    pdfUrl:
      "https://baselallozy.de/wp-content/uploads/2024/10/Schweigepflichtentbindung-2024.pdf",
    icon: FileSignature,
    tag: "Bei Bedarf",
    tagVariant: "secondary" as const,
  },
  {
    id: "vollmacht-sorgerecht",
    title: "Vollmacht bei gemeinsamem Sorgerecht",
    description:
      "Erforderlich, wenn nur ein Elternteil zum Termin erscheinen kann. Muss vom abwesenden Elternteil unterschrieben werden.",
    pdfUrl:
      "https://baselallozy.de/wp-content/uploads/2024/10/Vollmacht-bei-gemeinsamem-Sorgerecht-2024.pdf",
    icon: Users,
    tag: "Bei Bedarf",
    tagVariant: "secondary" as const,
  },
];

// Schritte "So funktioniert's"
const steps = [
  {
    icon: Download,
    title: "Herunterladen",
    description: "Laden Sie die benötigten Formulare als PDF herunter.",
  },
  {
    icon: PenLine,
    title: "Ausfüllen & Unterschreiben",
    description:
      "Füllen Sie die Formulare in Ruhe zu Hause aus. Beide Sorgeberechtigten sollten unterschreiben.",
  },
  {
    icon: Calendar,
    title: "Zum Termin mitbringen",
    description:
      "Bringen Sie die ausgefüllten Unterlagen zum Erstgespräch mit oder senden Sie diese vorab per Post.",
  },
];

// Checkliste für den Termin
const checklist = [
  {
    icon: CreditCard,
    text: "Elektronische Versicherungskarte des Kindes",
  },
  {
    icon: FileCheck,
    text: "Ausgefüllte Fragebögen und Zustimmung aller Sorgeberechtigten",
  },
  {
    icon: FileText,
    text: "Gelbes Untersuchungsheft (U-Heft)",
  },
  {
    icon: FolderOpen,
    text: "Vorbefunde (Krankenhausberichte, schulpsychologische Gutachten)",
  },
  {
    icon: ClipboardList,
    text: "Berichte aus Kita oder Schule (falls vorhanden)",
  },
  {
    icon: FileText,
    text: "Aktuelle Zeugnisse",
  },
  {
    icon: FileSignature,
    text: "Überweisung vom Kinderarzt/Hausarzt (falls vorhanden)",
  },
];

export default function AnmeldeformulareContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--primary-light)] rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[var(--secondary-light)] rounded-full blur-[128px] opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-[var(--primary-dark)] text-sm font-medium mb-6 shadow-sm">
              <FileText className="w-4 h-4" />
              <span>Formulare & Fragebögen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              <span className="text-gradient">Anmeldeformulare</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Für einen reibungslosen Ablauf bitten wir Sie, die erforderlichen
              Formulare vor Ihrem Ersttermin herunterzuladen und ausgefüllt
              mitzubringen. So können wir uns optimal auf Ihr Anliegen
              vorbereiten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hinweis: Beide Elternteile */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/20">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <div>
                <p className="font-medium text-[var(--foreground)] mb-1">
                  Wichtiger Hinweis
                </p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Wir empfehlen, dass möglichst beide Sorgeberechtigten gemeinsam
                  mit dem Kind zum Ersttermin erscheinen. Falls dies nicht
                  möglich ist, nutzen Sie bitte die Vollmacht für den abwesenden
                  Elternteil.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Download-Bereich */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Formulare <span className="text-gradient">herunterladen</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Klicken Sie auf die Schaltflächen, um die PDFs zu öffnen oder
            herunterzuladen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {forms.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl icon-container-primary flex items-center justify-center flex-shrink-0">
                      <form.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-semibold text-lg text-[var(--foreground)]">
                          {form.title}
                        </h3>
                        <span
                          className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                            form.tagVariant === "primary"
                              ? "bg-[var(--primary)]/10 text-[var(--primary-dark)]"
                              : "bg-[var(--secondary)]/10 text-[var(--secondary-dark)]"
                          }`}
                        >
                          {form.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--foreground-muted)] mb-5 flex-1">
                    {form.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={form.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="primary" className="w-full">
                        <ExternalLink className="w-4 h-4" />
                        PDF öffnen
                      </Button>
                    </a>
                    <a
                      href={form.pdfUrl}
                      download
                      className="flex-1"
                    >
                      <Button variant="secondary" className="w-full">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* So funktioniert's */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            So <span className="text-gradient">funktioniert&apos;s</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            In drei einfachen Schritten sind Sie bestens vorbereitet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="text-center h-full">
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[var(--primary)] text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 mx-auto rounded-2xl icon-container-primary flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Checkliste */}
      <SectionWrapper background="secondary">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Checkliste für den{" "}
              <span className="text-gradient">Ersttermin</span>
            </h2>
            <p className="text-[var(--foreground-muted)]">
              Diese Unterlagen sollten Sie zum Untersuchungstermin mitbringen.
            </p>
          </motion.div>

          <GlassCard className="p-6 sm:p-8" gradient>
            <ul className="space-y-4">
              {checklist.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <span className="text-[var(--foreground)] pt-1">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 sm:p-12 text-center" gradient>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
              Fragen zu den Formularen?
            </h2>
            <p className="text-[var(--foreground-muted)] mb-6 max-w-xl mx-auto">
              Bei Unklarheiten oder Fragen zu den Anmeldeunterlagen stehen wir
              Ihnen gerne zur Verfügung.
            </p>
            <a href="/kontakt">
              <Button size="lg">Kontakt aufnehmen</Button>
            </a>
          </GlassCard>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
