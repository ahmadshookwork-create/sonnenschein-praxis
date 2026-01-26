"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Train,
  Bus,
  Car,
  Accessibility,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Star,
  ExternalLink,
  Heart,
  Calendar,
  CalendarX,
  AlertTriangle,
  PhoneCall,
  Shield,
  Info,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import { contactInfo, insuranceTypes } from "@/data/contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function KontaktContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie eine Nachricht ein";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Web3Forms für statisches Hosting (kein Backend erforderlich)
      const web3FormData = new FormData();
      web3FormData.append("access_key", "YOUR_WEB3FORMS_KEY"); // Ersetzen Sie dies mit Ihrem Web3Forms Access Key
      web3FormData.append(
        "subject",
        "Neue Kontaktanfrage - Praxis Dr. Allozy",
      );
      web3FormData.append("from_name", "Praxis Dr. Allozy Website");
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("phone", formData.phone || "Nicht angegeben");
      web3FormData.append(
        "insuranceType",
        formData.insuranceType || "Nicht angegeben",
      );
      web3FormData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          insuranceType: "",
          message: "",
        });
      } else {
        // Fallback: Öffne E-Mail-Client
        const mailtoSubject = encodeURIComponent(
          "Kontaktanfrage - Praxis Dr. Allozy",
        );
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone || "Nicht angegeben"}\nVersicherungsart: ${formData.insuranceType || "Nicht angegeben"}\n\nNachricht:\n${formData.message}`,
        );
        window.location.href = `mailto:praxis@baselallozy.de?subject=${mailtoSubject}&body=${mailtoBody}`;
        setSubmitStatus("success");
      }
    } catch {
      // Fallback: Öffne E-Mail-Client bei Fehler
      const mailtoSubject = encodeURIComponent(
        "Kontaktanfrage - Praxis Dr. Allozy",
      );
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone || "Nicht angegeben"}\nVersicherungsart: ${formData.insuranceType || "Nicht angegeben"}\n\nNachricht:\n${formData.message}`,
      );
      window.location.href = `mailto:praxis@baselallozy.de?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSubmitStatus("success");
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

        {/* Decorative Elements */}
        <div className="absolute top-24 right-20 w-12 h-12 opacity-20 animate-float">
          <Heart className="w-full h-full text-[var(--tertiary)]" />
        </div>
        <div className="absolute bottom-20 left-16 w-10 h-10 opacity-15 animate-float-delayed">
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>

        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[var(--primary-light)] rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-[var(--secondary-light)] rounded-full blur-[100px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-[var(--primary-dark)] text-sm font-medium mb-6 shadow-sm">
              <MapPin className="w-4 h-4" />
              <span>Kontakt</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Wir freuen uns auf{" "}
              <span className="text-gradient">Ihre Nachricht</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?
              Kontaktieren Sie uns – wir sind gerne für Sie da.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions: Terminbuchung & Terminabsage */}
      <SectionWrapper className="!pt-0 -mt-8 !pb-0">
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.a
            href="mailto:praxis@baselallozy.de?subject=Terminbuchung"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                Termin buchen
              </h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Per E-Mail anfragen
              </p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:praxis@baselallozy.de?subject=Terminabsage"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200/50 hover:border-rose-300 hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <CalendarX className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-rose-600 transition-colors">
                Termin absagen
              </h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Bitte frühzeitig melden
              </p>
            </div>
          </motion.a>
        </div>
      </SectionWrapper>

      {/* Contact Form & Info */}
      <SectionWrapper background="secondary">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 sm:p-8" gradient>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                Terminanfrage / Nachricht
              </h2>

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
                    Nachricht erfolgreich gesendet!
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Vielen Dank für Ihre Anfrage. Wir melden uns
                    schnellstmöglich bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    id="name"
                    label="Name *"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    error={errors.name}
                    required
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
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
                  </div>

                  <Select
                    id="insuranceType"
                    label="Versicherungsart"
                    options={[
                      { value: "", label: "Bitte wählen..." },
                      ...insuranceTypes,
                    ]}
                    value={formData.insuranceType}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        insuranceType: e.target.value,
                      }))
                    }
                  />

                  <Textarea
                    id="message"
                    label="Ihr Anliegen *"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder nennen Sie uns Terminwünsche..."
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

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-[var(--error)]/10 border border-[var(--error)]/30 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-[var(--error)]" />
                      <p className="text-sm text-[var(--error)]">
                        Es ist ein Fehler aufgetreten. Bitte versuchen Sie es
                        erneut oder rufen Sie uns an.
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
                        Jetzt Kontakt aufnehmen
                      </>
                    )}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address & Phone */}
            <GlassCard className="p-6">
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-4">
                Kontaktdaten
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl icon-container-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">
                      Adresse
                    </p>
                    <p className="text-[var(--foreground-muted)]">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.zip} {contactInfo.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl icon-container-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">
                      Telefon
                    </p>
                    <a
                      href={`tel:${contactInfo.phone.main}`}
                      className="text-[var(--primary-dark)] hover:text-[var(--primary)] font-medium transition-colors"
                    >
                      {contactInfo.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl icon-container-tertiary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">
                      E-Mail
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-[var(--primary-dark)] hover:text-[var(--primary)] font-medium transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Opening Hours */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)]">
                  Öffnungszeiten
                </h3>
              </div>
              <div className="space-y-2">
                {contactInfo.openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between text-sm py-1"
                  >
                    <span className="text-[var(--foreground-muted)]">
                      {item.day}
                    </span>
                    <span
                      className={
                        item.hours === "Geschlossen"
                          ? "text-[var(--foreground-muted)]"
                          : "text-[var(--foreground)] font-medium"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Telefonische Sprechzeiten */}
              <div className="mt-5 pt-5 border-t border-[var(--card-border)]">
                <div className="flex items-center gap-2 mb-2">
                  <PhoneCall className="w-4 h-4 text-[var(--primary)]" />
                  <span className="font-medium text-sm text-[var(--foreground)]">
                    Telefonische Sprechzeiten
                  </span>
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {contactInfo.phoneConsultation}
                </p>
              </div>
            </GlassCard>

            {/* Google Reviews Only */}
            <GlassCard className="p-6">
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-4">
                Bewertungen
              </h3>
              <a
                href={contactInfo.reviewLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md border border-[var(--card-border)] hover:border-[var(--primary)]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-base font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors block">
                    Google Bewertungen ansehen
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[var(--primary)] fill-[var(--primary)]"
                      />
                    ))}
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-[var(--foreground-muted)] group-hover:text-[var(--primary)] transition-colors" />
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-3">
                Teilen Sie Ihre Erfahrungen mit anderen Familien!
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Map & Directions */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            <span className="text-gradient">Anfahrt</span> & Lage
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-xl mx-auto">
            Unsere Praxis ist gut mit öffentlichen Verkehrsmitteln erreichbar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <GlassCard className="p-0 overflow-hidden aspect-video lg:aspect-auto lg:h-full">
              <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl icon-container-primary flex items-center justify-center mb-4">
                    <MapPin className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-medium text-[var(--foreground)] mb-2">
                    {contactInfo.address.street}
                  </p>
                  <p className="text-[var(--foreground-muted)] mb-4">
                    {contactInfo.address.zip} {contactInfo.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${contactInfo.address.street}, ${contactInfo.address.zip} ${contactInfo.address.city}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Transport Info */}
          <div className="space-y-4">
            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                  <Train className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">
                  U-Bahn & S-Bahn
                </h4>
              </div>
              {contactInfo.publicTransport
                .filter((t) => t.type === "U-Bahn" || t.type === "S-Bahn")
                .map((transport) => (
                  <div key={transport.type} className="mb-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[var(--foreground-muted)]">
                        {transport.type}:
                      </span>
                      <span className="text-[var(--foreground)] font-medium">
                        {transport.lines.join(", ")} – {transport.station}
                      </span>
                    </div>
                  </div>
                ))}
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                  <Bus className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">Bus</h4>
              </div>
              {contactInfo.publicTransport
                .filter((t) => t.type === "Bus")
                .map((transport) => (
                  <div key={transport.type} className="text-sm">
                    <span className="text-[var(--foreground-muted)]">
                      Linien:
                    </span>{" "}
                    <span className="text-[var(--foreground)] font-medium">
                      {transport.lines.join(", ")} – {transport.station}
                    </span>
                  </div>
                ))}
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">
                  Parken
                </h4>
              </div>
              <p className="text-sm text-[var(--foreground-muted)]">
                {contactInfo.parking}
              </p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                  <Accessibility className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">
                  Barrierefreiheit
                </h4>
              </div>
              <p className="text-sm text-[var(--foreground-muted)]">
                {contactInfo.accessibility}
              </p>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Notfallnummern */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Im Notfall</span>
          </div>
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            <span className="text-gradient">Notfallnummern</span> & Hilfe
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-xl mx-auto">
            Bei akuten Krisen oder Notfällen außerhalb unserer Sprechzeiten
            erreichen Sie folgende Stellen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Feuerwehr / Rettungsdienst */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-5 h-full border-rose-200/50 bg-gradient-to-br from-rose-50/50 to-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Feuerwehr / Rettungsdienst
                  </h4>
                </div>
              </div>
              <a
                href="tel:112"
                className="text-2xl font-bold text-rose-600 hover:text-rose-700 transition-colors"
              >
                112
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Bei akuter Lebensgefahr
              </p>
            </GlassCard>
          </motion.div>

          {/* Vivantes Kinder-Notaufnahme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Vivantes Kinder-Psychiatrie
                  </h4>
                </div>
              </div>
              <a
                href="tel:+4930130238011"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
              >
                030 / 130 238 011
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Kinder-Notaufnahme Neukölln
              </p>
            </GlassCard>
          </motion.div>

          {/* Berliner Krisendienst */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Berliner Krisendienst
                  </h4>
                </div>
              </div>
              <a
                href="tel:03039063-00"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
              >
                030 / 390 63-00
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                24h erreichbar, alle Bezirke
              </p>
            </GlassCard>
          </motion.div>

          {/* Kindernotdienst */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Kindernotdienst
                  </h4>
                </div>
              </div>
              <a
                href="tel:030610061"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
              >
                030 / 61 00 61
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Für Kinder in Notlagen
              </p>
            </GlassCard>
          </motion.div>

          {/* Jugendnotdienst */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Jugendnotdienst
                  </h4>
                </div>
              </div>
              <a
                href="tel:030610062"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
              >
                030 / 61 00 62
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Für Jugendliche in Krisen
              </p>
            </GlassCard>
          </motion.div>

          {/* Mädchennotdienst */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Mädchennotdienst
                  </h4>
                </div>
              </div>
              <a
                href="tel:030610063"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
              >
                030 / 61 00 63
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Für Mädchen und junge Frauen
              </p>
            </GlassCard>
          </motion.div>

          {/* Kinderschutz-Hotline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Kinderschutz-Hotline
                  </h4>
                </div>
              </div>
              <a
                href="tel:030610066"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
              >
                030 / 61 00 66
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Bei Verdacht auf Kindeswohlgefährdung
              </p>
            </GlassCard>
          </motion.div>

          {/* Nummer gegen Kummer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <GlassCard className="p-5 h-full bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Nummer gegen Kummer
                  </h4>
                </div>
              </div>
              <a
                href="tel:08001110333"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
              >
                0800 / 111 0 333
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Kostenlos & anonym für Kinder
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Elterntelefon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <GlassCard className="p-6 text-center">
            <h4 className="font-semibold text-[var(--foreground)] mb-2">
              Elterntelefon
            </h4>
            <a
              href="tel:08001110550"
              className="text-xl font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
            >
              0800 / 111 0 550
            </a>
            <p className="text-sm text-[var(--foreground-muted)] mt-2">
              Kostenlose Beratung für Eltern – Mo–Fr 9–17 Uhr, Di+Do bis 19 Uhr
            </p>
          </GlassCard>
        </motion.div>

        {/* Religiöse Notfallseelsorge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-[var(--foreground)] text-center mb-6">
            Religiöse Notfallseelsorge
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Muslimische Seelsorge */}
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Muslimische Seelsorge
                  </h4>
                </div>
              </div>
              <a
                href="tel:030443509821"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors block"
              >
                030 / 44 35 09 821
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Muslimisches SeelsorgeTelefon (MuTeS)
              </p>
              <p className="text-xs text-[var(--foreground-muted)] mt-1">
                täglich 16–23 Uhr
              </p>
            </GlassCard>

            {/* Jüdische Seelsorge */}
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Jüdische Seelsorge
                  </h4>
                </div>
              </div>
              <a
                href="tel:08001110113"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors block"
              >
                0800 / 111 0 113
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Zentralwohlfahrtsstelle der Juden
              </p>
              <p className="text-xs text-[var(--foreground-muted)] mt-1">
                24h erreichbar, kostenlos
              </p>
            </GlassCard>

            {/* Christliche Seelsorge */}
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">
                    Christliche Seelsorge
                  </h4>
                </div>
              </div>
              <a
                href="tel:08001110111"
                className="text-lg font-bold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors block"
              >
                0800 / 111 0 111
              </a>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Telefonseelsorge (ev. & kath.)
              </p>
              <p className="text-xs text-[var(--foreground-muted)] mt-1">
                24h erreichbar, kostenlos
              </p>
            </GlassCard>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
