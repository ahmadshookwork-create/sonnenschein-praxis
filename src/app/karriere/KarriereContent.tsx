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
import { useTranslation } from "@/i18n";

const benefitIcons = [Users, Globe, GraduationCap, Heart];

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
  const { t } = useTranslation();

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

  // Build position options from translations
  const positionOptions = [
    { value: "", label: t("career.career.positionOptions.0.label") },
    { value: "mfa", label: t("career.career.positionOptions.1.label") },
    { value: "kjp-therapeut", label: t("career.career.positionOptions.2.label") },
    { value: "andere", label: t("career.career.positionOptions.3.label") },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("career.career.form.validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("career.career.form.validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("career.career.form.validation.emailInvalid");
    }

    if (!formData.position) {
      newErrors.position = t("career.career.form.validation.positionRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("career.career.form.validation.messageRequired");
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
        newErrors.files = t("career.career.form.validation.fileTooLarge");
        break;
      }
      if (!allowedTypes.includes(file.type)) {
        newErrors.files = t("career.career.form.validation.fileTypeNotAllowed");
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
        t("career.career.form.email.subject").replace("{position}", positionLabel),
      );
      const mailtoBody = encodeURIComponent(
        `${t("career.career.form.email.body.applicationFor")}: ${positionLabel}\n\n` +
          `${t("career.career.form.email.body.name")}: ${formData.name}\n` +
          `${t("career.career.form.email.body.email")}: ${formData.email}\n` +
          `${t("career.career.form.email.body.phone")}: ${formData.phone || t("career.career.form.email.body.notProvided")}\n` +
          `${t("career.career.form.email.body.languageSkills")}: ${formData.languages || t("career.career.form.email.body.notProvided")}\n\n` +
          `${t("career.career.form.email.body.coverLetter")}:\n${formData.message}\n\n` +
          `---\n` +
          (files.length > 0
            ? `${t("career.career.form.email.body.attachFilesNote")}\n${files.map((f) => `- ${f.name}`).join("\n")}`
            : t("career.career.form.email.body.attachDocumentsNote")),
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
              <span>{t("career.career.badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              {t("career.career.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient">{t("career.career.title").split(" ").slice(-1)}</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {t("career.career.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper background="secondary">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((index) => {
            const Icon = benefitIcons[index];
            return (
              <GlassCard
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl icon-container-secondary flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  {t(`career.career.benefits.${index}.title`)}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t(`career.career.benefits.${index}.description`)}
                </p>
              </GlassCard>
            );
          })}
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
            {t("career.career.positions.sectionTitle").split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-gradient">{t("career.career.positions.sectionTitle").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("career.career.positions.sectionSubtitle")}
          </p>
        </motion.div>

        <div className="space-y-6">
          {[0, 1].map((index) => (
            <motion.div
              key={index}
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
                        {t(`career.career.positions.items.${index}.title`)}
                      </h3>
                      <Badge variant="primary">
                        {t(`career.career.positions.items.${index}.type`)}
                      </Badge>
                    </div>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      {t(`career.career.positions.items.${index}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[0, 1, 2, 3, 4].map((reqIndex) => {
                        const reqText = t(`career.career.positions.items.${index}.requirements.${reqIndex}`);
                        // Only render if translation exists (not returning the key)
                        if (reqText.includes("career.career.positions")) return null;
                        return (
                          <span
                            key={reqIndex}
                            className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground)]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                            {reqText}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <a
                    href="#bewerbung"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormData((prev) => ({
                        ...prev,
                        position: index === 0 ? "mfa" : "kjp-therapeut",
                      }));
                      document
                        .getElementById("bewerbung")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Button variant="secondary">
                      {t("career.career.positions.applyNow")}
                    </Button>
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
              <span className="text-gradient">{t("career.career.form.title").split(" ")[0]}</span>{" "}
              {t("career.career.form.title").split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-[var(--foreground-muted)]">
              {t("career.career.form.subtitle")}
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
                  {t("career.career.form.success.title")}
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  {t("career.career.form.success.message")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    id="name"
                    label={t("career.career.form.fields.name.label")}
                    placeholder={t("career.career.form.fields.name.placeholder")}
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
                    label={t("career.career.form.fields.email.label")}
                    placeholder={t("career.career.form.fields.email.placeholder")}
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
                    label={t("career.career.form.fields.phone.label")}
                    placeholder={t("career.career.form.fields.phone.placeholder")}
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
                    label={t("career.career.form.fields.position.label")}
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
                  label={t("career.career.form.fields.languages.label")}
                  placeholder={t("career.career.form.fields.languages.placeholder")}
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
                  label={t("career.career.form.fields.message.label")}
                  placeholder={t("career.career.form.fields.message.placeholder")}
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
                    {t("career.career.form.fields.files.label")}
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
                      {t("career.career.form.fields.files.dropzone")}
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)]">
                      {t("career.career.form.fields.files.hint")}
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
                      {t("career.career.form.error")}
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
                      {t("career.career.form.submitting")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("career.career.form.submit")}
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
