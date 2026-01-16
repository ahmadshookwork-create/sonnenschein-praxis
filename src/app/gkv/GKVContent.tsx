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

const gkvServices = [
  {
    icon: Stethoscope,
    title: "Psychiatrische Diagnostik",
    description:
      "Umfassende Abklärung psychischer Störungen nach ICD-10/11 Kriterien.",
  },
  {
    icon: Brain,
    title: "Kinder- und Jugendpsychotherapie",
    description: "Verhaltenstherapie, tiefenpsychologisch fundierte Verfahren.",
  },
  {
    icon: Users,
    title: "Elternberatung",
    description: "Begleitende Elterngespräche als Teil der Behandlung.",
  },
  {
    icon: FileText,
    title: "Berichte & Atteste",
    description: "Schulberichte, Gutachten für Jugendamt, Eingliederungshilfe.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Überweisung einholen",
    description:
      "Lassen Sie sich von Ihrem Kinderarzt oder Hausarzt eine Überweisung zur Kinder- und Jugendpsychiatrie ausstellen.",
  },
  {
    step: "2",
    title: "Termin anfragen",
    description:
      "Kontaktieren Sie uns telefonisch oder über das Kontaktformular. Wir melden uns zeitnah bei Ihnen.",
  },
  {
    step: "3",
    title: "Erstgespräch",
    description:
      "Im Erstgespräch erheben wir die Vorgeschichte und besprechen das weitere Vorgehen gemeinsam.",
  },
  {
    step: "4",
    title: "Diagnostik & Therapie",
    description:
      "Nach der Diagnostik erstellen wir einen individuellen Behandlungsplan für Ihr Kind.",
  },
];

export default function GKVContent() {
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
              <span>Kassenpatient:innen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Behandlung für{" "}
              <span className="text-gradient">gesetzlich Versicherte</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8">
              Als Kassenpraxis bieten wir umfassende psychiatrische und
              psychotherapeutische Versorgung für Kinder und Jugendliche. Die
              Kosten werden von Ihrer gesetzlichen Krankenkasse übernommen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button size="lg">
                  Termin anfragen
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/privatpraxis">
                <Button variant="secondary" size="lg">
                  <Heart className="w-5 h-5" />
                  Privatpraxis / Selbstzahler
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
                Wichtiger Hinweis zur Wartezeit
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                Aufgrund der hohen Nachfrage kann es zu Wartezeiten für
                Ersttermine kommen. Wir bemühen uns, Ihnen schnellstmöglich
                einen Termin anzubieten. Bei akuten Notfällen wenden Sie sich
                bitte an den Kinder- und Jugendpsychiatrischen Notdienst oder
                die nächste Notaufnahme.
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
            Unsere <span className="text-gradient">Kassenleistungen</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Alle aufgeführten Leistungen werden von gesetzlichen Krankenkassen
            übernommen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gkvServices.map((service, index) => (
            <GlassCard key={service.title} delay={index * 0.1}>
              <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                {service.description}
              </p>
            </GlassCard>
          ))}
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
            So läuft die <span className="text-gradient">Behandlung</span> ab
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Von der Terminvereinbarung bis zum Therapiebeginn – wir begleiten
            Sie auf jedem Schritt.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--primary)]/50 to-transparent" />
              )}
              <GlassCard className="text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-xl font-bold text-[var(--background)] mb-4">
                  {step.step}
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
              Das bringen Sie zum{" "}
              <span className="text-gradient">Ersttermin</span> mit
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8">
              Um den Ersttermin effektiv zu nutzen, bitten wir Sie, folgende
              Unterlagen mitzubringen:
            </p>

            <ul className="space-y-4">
              {[
                "Versichertenkarte (eGK) des Kindes",
                "Überweisung vom Kinderarzt/Hausarzt",
                "Vorhandene Vorbefunde (z.B. vom SPZ, Psychologen)",
                "Schulzeugnisse oder Entwicklungsberichte",
                "Gelbes Untersuchungsheft (U-Heft)",
                "Liste aktueller Medikamente",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-[var(--foreground)]">{item}</span>
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
                Erstgespräch: ca. 50–60 Minuten
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                Im Erstgespräch nehmen wir uns ausreichend Zeit, um die
                Vorgeschichte Ihres Kindes zu erheben, aktuelle Beschwerden zu
                verstehen und gemeinsam die nächsten Schritte zu planen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="flex-1">
                  <Button className="w-full">
                    <Phone className="w-4 h-4" />
                    Termin vereinbaren
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
            Privat versichert oder Selbstzahler?
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8">
            In unserer Privatpraxis bieten wir kürzere Wartezeiten und
            erweiterte Leistungen für PKV-Versicherte und Selbstzahler.
          </p>
          <Link href="/privatpraxis">
            <Button size="lg">
              Zur Privatpraxis
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </GlassCard>
      </SectionWrapper>
    </>
  );
}
