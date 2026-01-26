"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Globe,
  Heart,
  GraduationCap,
  CheckCircle2,
  Send,
  Upload,
  AlertCircle,
  Loader2,
  FileText,
  X,
  File,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Badge from "@/components/ui/Badge";

const openPositions = [
  {
    id: "mfa",
    title: "Medizinische/r Fachangestellte/r (MFA) bzw. Arzthelfer/in",
    type: "Vollzeit/Teilzeit",
    description:
      "Für Kinder- und Jugendpsychiater und -psychotherapeuten in eigener Praxis gesucht.",
    requirements: [
      "Abgeschlossene MFA-Ausbildung",
      "Erfahrung in der Arztpraxis von Vorteil",
      "Freundliches und einfühlsames Auftreten",
      "Gute Kommunikationsfähigkeiten",
      "EDV-Kenntnisse",
    ],
  },
  {
    id: "kjp-therapeut",
    title: "Kinder- und Jugendlichenpsychotherapeut*in (m/w/d)",
    type: "Vollzeit/Teilzeit",
    description:
      "Mit Approbation oder in fortgeschrittener Ausbildung (MIT Behandlungserlaubnis) gesucht.",
    requirements: [
      "Approbation als KJ-Psychotherapeut*in oder fortgeschrittene Ausbildung",
      "Behandlungserlaubnis erforderlich",
      "Freude an der Arbeit mit Kindern und Jugendlichen",
      "Teamorientierte Arbeitsweise",
      "Interesse an kultursensible Therapie",
    ],
  },
];

const positionOptions = [
  { value: "", label: "Bitte wählen..." },
  { value: "mfa", label: "Medizinische/r Fachangestellte/r (MFA)" },
  {
    value: "kjp-therapeut",
    label: "Kinder- und Jugendlichenpsychotherapeut*in",
  },
  { value: "andere", label: "Andere / Initiativbewerbung" },
];

const benefits = [
  {
    icon: Users,
    title: "Multiprofessionelles Team",
    description:
      "Arbeiten Sie mit Fachärzten, Psychologen, Therapeuten und Pädagogen zusammen.",
  },
  {
    icon: Globe,
    title: "Mehrsprachiges Umfeld",
    description:
      "Über 10 Sprachen in unserem Team – kulturelle Vielfalt als Stärke.",
  },
  {
    icon: GraduationCap,
    title: "Fortbildung & Supervision",
    description:
      "Regelmäßige Team-Supervisionen und Unterstützung bei Fortbildungen.",
  },
  {
    icon: Heart,
    title: "Wertschätzende Atmosphäre",
    description: "Respektvolles Miteinander und flache Hierarchien.",
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  languages: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  position?: string;
  message?: string;
  files?: string;
}

export default function KarriereContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    languages: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (!formData.position) {
      newErrors.position = "Bitte wählen Sie eine Position aus";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie eine kurze Nachricht ein";
    }

    // Datei-Validierung
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];

    for (const file of files) {
      if (file.size > maxFileSize) {
        newErrors.files = `Datei "${file.name}" ist zu groß (max. 10MB pro Datei)`;
        break;
      }
      if (!allowedTypes.includes(file.type)) {
        newErrors.files = `Dateityp von "${file.name}" nicht erlaubt`;
        break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selectedFiles]);
    // Reset input to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Für statisches Hosting: Öffne E-Mail-Client mit Bewerbungsdaten
      // Dateien müssen manuell angehängt werden
      const positionLabel =
        positionOptions.find((p) => p.value === formData.position)?.label ||
        formData.position;

      const mailtoSubject = encodeURIComponent(
        `Bewerbung: ${positionLabel} - Praxis Dr. Allozy`,
      );
      const mailtoBody = encodeURIComponent(
        `Bewerbung für: ${positionLabel}\n\n` +
          `Name: ${formData.name}\n` +
          `E-Mail: ${formData.email}\n` +
          `Telefon: ${formData.phone || "Nicht angegeben"}\n` +
          `Sprachkenntnisse: ${formData.languages || "Nicht angegeben"}\n\n` +
          `Anschreiben:\n${formData.message}\n\n` +
          `---\n` +
          (files.length > 0
            ? `HINWEIS: Bitte hängen Sie folgende Dateien manuell an diese E-Mail an:\n${files.map((f) => `- ${f.name}`).join("\n")}`
            : `HINWEIS: Bitte hängen Sie Ihren Lebenslauf und weitere Unterlagen an diese E-Mail an.`),
      );

      window.location.href = `mailto:praxis@baselallozy.de?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Zeige Erfolg nach kurzer Verzögerung (E-Mail-Client öffnet sich)
      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          languages: "",
          message: "",
        });
        setFiles([]);
      }, 500);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--secondary-light)] rounded-full blur-[128px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--primary)]/10 border border-[var(--secondary)]/20 text-[var(--secondary-dark)] text-sm font-medium mb-6 shadow-sm">
              <Briefcase className="w-4 h-4" />
              <span>Karriere</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Werden Sie Teil unseres{" "}
              <span className="text-gradient">Teams</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Wir suchen engagierte Kolleg:innen, die unser multiprofessionelles
              Team verstärken möchten. Bei uns arbeiten Sie in einem
              wertschätzenden, kulturell vielfältigen Umfeld.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper background="secondary">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <GlassCard
              key={benefit.title}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl icon-container-secondary flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                {benefit.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Aktuelle <span className="text-gradient">Stellenangebote</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Diese Positionen sind derzeit offen. Wir freuen uns auch über
            Initiativbewerbungen!
          </p>
        </motion.div>

        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-semibold text-xl text-[var(--foreground)]">
                        {position.title}
                      </h3>
                      <Badge variant="primary">{position.type}</Badge>
                    </div>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {position.requirements.map((req) => (
                        <span
                          key={req}
                          className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground)]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#bewerbung"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormData((prev) => ({
                        ...prev,
                        position: position.id,
                      }));
                      document
                        .getElementById("bewerbung")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Button variant="secondary">Jetzt bewerben</Button>
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Application Form */}
      <SectionWrapper background="secondary" id="bewerbung">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              <span className="text-gradient">Bewerbung</span> senden
            </h2>
            <p className="text-[var(--foreground-muted)]">
              Füllen Sie das Formular aus und laden Sie Ihre Unterlagen hoch.
            </p>
          </motion.div>

          <GlassCard className="p-6 sm:p-8" gradient>
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--success)]/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-[var(--success)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  Bewerbung erfolgreich gesendet!
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  Vielen Dank für Ihr Interesse. Wir werden uns zeitnah bei
                  Ihnen melden.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    id="name"
                    label="Name *"
                    placeholder="Ihr vollständiger Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    error={errors.name}
                    required
                  />
                  <Input
                    id="email"
                    type="email"
                    label="E-Mail *"
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    id="phone"
                    type="tel"
                    label="Telefon"
                    placeholder="+49 123 456789"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                  <Select
                    id="position"
                    label="Gewünschte Position *"
                    options={positionOptions}
                    value={formData.position}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        position: e.target.value,
                      }))
                    }
                    error={errors.position}
                    required
                  />
                </div>

                <Input
                  id="languages"
                  label="Sprachkenntnisse"
                  placeholder="z.B. Deutsch (Muttersprache), Englisch (fließend), Arabisch (gut)"
                  value={formData.languages}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      languages: e.target.value,
                    }))
                  }
                />

                <Textarea
                  id="message"
                  label="Anschreiben / Kurze Vorstellung *"
                  placeholder="Erzählen Sie uns kurz von sich und warum Sie bei uns arbeiten möchten..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  error={errors.message}
                  required
                />

                {/* File Upload */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-[var(--foreground)]">
                    Lebenslauf & Unterlagen
                  </label>

                  <div
                    className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer
                      ${
                        errors.files
                          ? "border-[var(--error)] bg-[var(--error)]/5"
                          : "border-[var(--card-border)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5"
                      }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-10 h-10 mx-auto text-[var(--primary)] mb-3" />
                    <p className="text-sm font-medium text-[var(--foreground)] mb-1">
                      Dateien hier ablegen oder klicken zum Hochladen
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)]">
                      PDF, DOC, DOCX, JPG, PNG (max. 10MB pro Datei)
                    </p>
                  </div>

                  {errors.files && (
                    <p className="text-sm text-[var(--error)]">
                      {errors.files}
                    </p>
                  )}

                  {/* Uploaded Files List */}
                  {files.length > 0 && (
                    <div className="space-y-2 mt-3">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-[var(--card-border)]"
                        >
                          <div className="w-10 h-10 rounded-lg icon-container-primary flex items-center justify-center flex-shrink-0">
                            {file.type === "application/pdf" ? (
                              <FileText className="w-5 h-5" />
                            ) : (
                              <File className="w-5 h-5" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-[var(--foreground)] truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-[var(--foreground-muted)]">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--error)] hover:bg-[var(--error)]/10 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {submitStatus === "error" && (
                  <div className="p-4 rounded-xl bg-[var(--error)]/10 border border-[var(--error)]/30 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-[var(--error)]" />
                    <p className="text-sm text-[var(--error)]">
                      Es ist ein Fehler aufgetreten. Bitte versuchen Sie es
                      erneut.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Bewerbung absenden
                    </>
                  )}
                </Button>
              </form>
            )}
          </GlassCard>
        </div>
      </SectionWrapper>
    </>
  );
}
