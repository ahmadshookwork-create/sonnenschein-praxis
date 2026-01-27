"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ArrowRight,
  Shield,
  Clock,
  CreditCard,
  CheckCircle2,
  ChevronDown,
  Stethoscope,
  User,
  Users,
  Home,
  Palette,
  MessageCircle,
  FileText,
  AlertTriangle,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  MousePointerClick,
  ShieldCheck,
  Train,
  Bus,
  Car,
  Accessibility,
  ExternalLink,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import { pricingData, billingFAQ, vrTherapyData } from "@/data/pricing";
import { privatpraxisLocation } from "@/data/locations";
import { useTranslation } from "@/i18n";

const serviceModuleIcons = [
  Stethoscope,
  User,
  Users,
  Home,
  Palette,
  MessageCircle,
];

interface PrivateFormData {
  name: string;
  email: string;
  phone: string;
  childName: string;
  insuranceType: string;
  message: string;
}

interface PrivateFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function PrivatpraxisContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { t } = useTranslation();

  const [formData, setFormData] = useState<PrivateFormData>({
    name: "",
    email: "",
    phone: "",
    childName: "",
    insuranceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<PrivateFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: PrivateFormErrors = {};
    if (!formData.name.trim()) newErrors.name = t("private.private.contactForm.name.error");
    if (!formData.email.trim()) {
      newErrors.email = t("private.private.contactForm.email.errors.required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("private.private.contactForm.email.errors.invalid");
    }
    if (!formData.message.trim()) newErrors.message = t("private.private.contactForm.message.error");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const form = new FormData();
      form.append("access_key", "privatpraxis-contact");
      form.append("subject", "Privatpraxis Anfrage - " + formData.name);
      form.append("from_name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone || "-");
      form.append("child_name", formData.childName || "-");
      form.append("insurance_type", formData.insuranceType || "-");
      form.append("message", formData.message);

      // Send via mailto as fallback
      const mailtoBody = `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone || "-"}\nKind: ${formData.childName || "-"}\nVersicherung: ${formData.insuranceType || "-"}\n\nNachricht:\n${formData.message}`;
      window.location.href = `mailto:Privatpraxis@baselallozy.de?subject=${encodeURIComponent("Privatpraxis Anfrage - " + formData.name)}&body=${encodeURIComponent(mailtoBody)}`;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", childName: "", insuranceType: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get service modules from translations
  const serviceModules = [0, 1, 2, 3, 4, 5].map((index) => ({
    icon: serviceModuleIcons[index],
    title: t(`private.private.serviceModules.modules.${index}.title`),
    description: t(`private.private.serviceModules.modules.${index}.description`),
    services: Object.keys(
      { 0: "", 1: "", 2: "", 3: "" }
    ).map((i) => t(`private.private.serviceModules.modules.${index}.services.${i}`)).filter(s => !s.includes('services')),
  }));

  // Get benefits from translations
  const benefits = [
    {
      icon: Clock,
      title: t("private.private.benefits.0.title"),
      description: t("private.private.benefits.0.description"),
    },
    {
      icon: CreditCard,
      title: t("private.private.benefits.1.title"),
      description: t("private.private.benefits.1.description"),
    },
    {
      icon: CheckCircle2,
      title: t("private.private.benefits.2.title"),
      description: t("private.private.benefits.2.description"),
    },
  ];

  // Get FAQ items from translations
  const faqItems = [0, 1, 2, 3, 4, 5, 6].map((index) => ({
    question: t(`private.private.faq.items.${index}.question`),
    answer: t(`private.private.faq.items.${index}.answer`),
  }));

  // Get pricing items from translations
  const pricingItems = pricingData.map((item, index) => ({
    ...item,
    service: t(`private.private.pricing.items.${index}.service`),
    description: t(`private.private.pricing.items.${index}.description`),
    duration: t(`private.private.pricing.items.${index}.duration`) !== `private.private.pricing.items.${index}.duration`
      ? t(`private.private.pricing.items.${index}.duration`)
      : item.duration,
  }));

  // Get VR therapies from translations
  const vrTherapies = vrTherapyData.map((therapy, index) => ({
    ...therapy,
    title: t(`private.private.vrTherapy.therapies.${index}.title`),
    description: t(`private.private.vrTherapy.therapies.${index}.description`),
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated" />
        <div className="absolute inset-0 bg-grid" />

        {/* Dezente Background-Ornamente (medizinisch, hochwertig) */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[var(--secondary-light)] rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-0 -left-24 w-72 h-72 bg-[var(--primary-light)] rounded-full blur-[100px] opacity-15" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-[var(--tertiary-light)] rounded-full blur-[80px] opacity-10" />

        {/* Subtle floating medical icons as accents */}
        <div className="absolute top-32 right-[15%] opacity-[0.08]">
          <Heart className="w-16 h-16 text-[var(--secondary)]" />
        </div>
        <div className="absolute bottom-24 right-[25%] opacity-[0.06]">
          <Shield className="w-12 h-12 text-[var(--primary)]" />
        </div>
        <div className="absolute top-1/2 right-[10%] opacity-[0.05]">
          <Stethoscope className="w-20 h-20 text-[var(--tertiary)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--tertiary)]/10 border border-[var(--secondary)]/20 text-[var(--secondary-dark)] text-sm font-medium mb-6 shadow-sm">
              <Heart className="w-4 h-4" />
              <span>{t("private.private.hero.badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              {t("private.private.hero.title").split("PKV")[0]}
              <span className="text-gradient">PKV & Selbstzahler</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8">
              {t("private.private.hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt-formular">
                <Button size="lg">
                  {t("private.private.hero.ctaPrimary")}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/gkv">
                <Button variant="secondary" size="lg">
                  <Shield className="w-5 h-5" />
                  {t("private.private.hero.ctaSecondary")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper background="secondary">
        <div className="grid sm:grid-cols-3 gap-6">
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

      {/* Standort Privatpraxis mit Google Maps */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            <span className="text-gradient">{t("private.private.location.sectionTitle").split(" ")[0]}</span> {t("private.private.location.sectionTitle").split(" ").slice(1).join(" ")}
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-xl mx-auto">
            {t("private.private.location.note")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <GlassCard className="p-0 overflow-hidden aspect-video lg:aspect-auto lg:h-full">
              <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--tertiary)] flex items-center justify-center mb-4 shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-medium text-[var(--foreground)] mb-2">
                    {privatpraxisLocation.address.street}
                  </p>
                  <p className="text-[var(--foreground-muted)] mb-6">
                    {privatpraxisLocation.address.zip}{" "}
                    {privatpraxisLocation.address.city}
                  </p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
                    <a
                      href={`tel:${privatpraxisLocation.phone.main}`}
                      className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[var(--primary)]" />
                      {privatpraxisLocation.phone.display}
                    </a>
                    <a
                      href={`mailto:${privatpraxisLocation.email}`}
                      className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[var(--primary)]" />
                      {privatpraxisLocation.email}
                    </a>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${privatpraxisLocation.address.street}, ${privatpraxisLocation.address.zip} ${privatpraxisLocation.address.city}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--tertiary)] text-white font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t("private.private.location.openInMaps")}
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Anfahrt & Verbindungen */}
          <div className="space-y-4">
            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                  <Train className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">
                  {t("private.private.location.transport.uBahn.title")}
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-[var(--foreground-muted)]">
                    {t("private.private.location.transport.uBahn.uBahnLabel")}
                  </span>
                  <span className="text-[var(--foreground)] font-medium">
                    {t("private.private.location.transport.uBahn.uBahnValue")}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--foreground-muted)]">
                    {t("private.private.location.transport.uBahn.sBahnLabel")}
                  </span>
                  <span className="text-[var(--foreground)] font-medium">
                    {t("private.private.location.transport.uBahn.sBahnValue")}
                  </span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                  <Bus className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">
                  {t("private.private.location.transport.bus.title")}
                </h4>
              </div>
              <div className="text-sm">
                <span className="text-[var(--foreground-muted)]">
                  {t("private.private.location.transport.bus.label")}
                </span>{" "}
                <span className="text-[var(--foreground)] font-medium">
                  {t("private.private.location.transport.bus.value")}
                </span>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">
                  {t("private.private.location.transport.parking.title")}
                </h4>
              </div>
              <p className="text-sm text-[var(--foreground-muted)]">
                {t("private.private.location.transport.parking.description")}
              </p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                  <Accessibility className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">
                  {t("private.private.location.transport.accessibility.title")}
                </h4>
              </div>
              <p className="text-sm text-[var(--foreground-muted)]">
                {t("private.private.location.transport.accessibility.description")}
              </p>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      {/* VR-Therapie Highlight Section */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Grosse weisse Hero-Card mit VR-Bild darin */}
          <div className="mx-auto max-w-5xl rounded-3xl bg-white/90 shadow-lg ring-1 ring-black/5 p-8 md:p-12 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/8 to-violet-500/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* VR-Bild zentriert im oberen Bereich */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full max-w-[520px] h-[220px] md:h-[260px] motion-reduce:animate-none"
                >
                  <Image
                    src="/sonnenschein-praxis/illustrations/vr-abstract.svg"
                    alt="Virtual Reality Therapie"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </motion.div>
              </div>

              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">
                  {t("private.private.vrTherapy.sectionTitle")}
                </h2>
                <p className="text-[var(--foreground-muted)]">
                  {t("private.private.vrTherapy.subtitle")}
                </p>
              </div>

              {/* Modern Feature Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("private.private.vrTherapy.badges.innovative")}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700">
                  <MousePointerClick className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("private.private.vrTherapy.badges.interactive")}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("private.private.vrTherapy.badges.gentle")}
                  </span>
                </div>
              </div>

              {/* Warning Notice */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--warning)]/10 border border-[var(--warning)]/30 mb-8">
                <AlertTriangle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[var(--foreground)]">
                    {t("private.private.vrTherapy.notice.title")}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {t("private.private.vrTherapy.notice.text")}
                  </p>
                </div>
              </div>

              {/* VR Surcharge Info */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--secondary)]/20 to-[var(--tertiary)]/20 border border-[var(--secondary)]/30 mb-8">
                <span className="text-sm font-semibold text-[var(--secondary-dark)]">
                  {t("private.private.vrTherapy.surcharge")}
                </span>
              </div>

              {/* VR Therapy Cards - Next Level Design */}
              <div className="grid sm:grid-cols-3 gap-6">
                {vrTherapies.map((therapy, index) => {
                  const variantStyles = {
                    "vr-konfrontation": {
                      bg: "from-violet-500/15 via-violet-400/5 to-transparent",
                      border: "border-violet-400/30 hover:border-violet-400/50",
                      accent: "text-violet-600",
                      badge: "bg-violet-500/15 text-violet-700",
                    },
                    "vr-emdr": {
                      bg: "from-cyan-500/15 via-cyan-400/5 to-transparent",
                      border: "border-cyan-400/30 hover:border-cyan-400/50",
                      accent: "text-cyan-600",
                      badge: "bg-cyan-500/15 text-cyan-700",
                    },
                    "vr-kip": {
                      bg: "from-amber-500/15 via-amber-400/5 to-transparent",
                      border: "border-amber-400/30 hover:border-amber-400/50",
                      accent: "text-amber-600",
                      badge: "bg-amber-500/15 text-amber-700",
                    },
                  } as const;
                  const style =
                    variantStyles[therapy.id as keyof typeof variantStyles];
                  return (
                    <motion.div
                      key={therapy.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className={`relative bg-gradient-to-br ${style.bg} backdrop-blur-sm rounded-2xl p-6 border ${style.border} shadow-sm hover:shadow-xl transition-all duration-300`}
                    >
                      {/* Glaseffekt Overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-white/40 pointer-events-none" />
                      <div className="relative z-10">
                        <h3
                          className={`font-semibold text-lg ${style.accent} mb-2`}
                        >
                          {therapy.title}
                        </h3>
                        <p className="text-sm text-[var(--foreground-muted)] mb-4 leading-relaxed">
                          {therapy.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-[var(--foreground)]">
                            {therapy.basePrice}
                          </span>
                          <span
                            className={`text-xs font-semibold ${style.badge} px-2.5 py-1 rounded-full`}
                          >
                            {therapy.vrSurcharge}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Service Modules */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("private.private.serviceModules.sectionTitle").split(" ")[0]}{" "}
            <span className="text-gradient">
              {t("private.private.serviceModules.sectionTitle").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("private.private.serviceModules.sectionDescription")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceModules.map((module, index) => (
            <GlassCard
              key={module.title}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="w-12 h-12 rounded-xl icon-container-primary flex items-center justify-center mb-4">
                <module.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                {module.description}
              </p>
              <ul className="space-y-2">
                {module.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-sm text-[var(--foreground)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing Table */}
      <SectionWrapper id="preise">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("private.private.pricing.sectionTitle").split("&")[0]}&{" "}
            <span className="text-gradient">
              {t("private.private.pricing.sectionTitle").split("&")[1]?.trim() || "Abrechnung"}
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("private.private.pricing.sectionDescription")}
          </p>
        </motion.div>

        {/* Patient Type Notice */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <GlassCard className="p-4 text-center border-l-4 border-l-[var(--primary)]">
            <h4 className="font-semibold text-[var(--foreground)] mb-1">
              {t("private.private.pricing.patientTypes.gkv.title")}
            </h4>
            <p className="text-sm text-[var(--foreground-muted)]">
              {t("private.private.pricing.patientTypes.gkv.description")}{" "}
              <Link
                href="/gkv"
                className="text-[var(--primary-dark)] hover:text-[var(--primary)] font-medium"
              >
                {t("private.private.pricing.patientTypes.gkv.link")}
              </Link>
            </p>
          </GlassCard>
          <GlassCard className="p-4 text-center border-l-4 border-l-[var(--secondary)]">
            <h4 className="font-semibold text-[var(--foreground)] mb-1">
              {t("private.private.pricing.patientTypes.pkv.title")}
            </h4>
            <p className="text-sm text-[var(--foreground-muted)]">
              {t("private.private.pricing.patientTypes.pkv.description")}
            </p>
          </GlassCard>
          <GlassCard className="p-4 text-center border-l-4 border-l-[var(--warning)]">
            <h4 className="font-semibold text-[var(--foreground)] mb-1">
              {t("private.private.pricing.patientTypes.selfPay.title")}
            </h4>
            <p className="text-sm text-[var(--foreground-muted)]">
              {t("private.private.pricing.patientTypes.selfPay.description")}
            </p>
          </GlassCard>
        </div>

        {/* Vorkasse-Hinweis */}
        <div className="mb-8">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--warning)]/10 border border-[var(--warning)]/30 max-w-3xl mx-auto">
            <div className="w-10 h-10 rounded-xl bg-[var(--warning)]/20 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-5 h-5 text-[var(--warning)]" />
            </div>
            <div>
              <p className="font-medium text-[var(--foreground)] mb-1">
                {t("private.private.pricing.prepaymentNotice.title")}
              </p>
              <p className="text-sm text-[var(--foreground-muted)]">
                {t("private.private.pricing.prepaymentNotice.text")}
              </p>
            </div>
          </div>
        </div>

        {/* Price Table */}
        <GlassCard className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--card-border)] bg-[var(--background-secondary)]">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--foreground)]">
                    {t("private.private.pricing.tableHeaders.service")}
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--foreground)]">
                    {t("private.private.pricing.tableHeaders.duration")}
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--secondary-dark)]">
                    {t("private.private.pricing.tableHeaders.pkv")}
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--warning)]">
                    {t("private.private.pricing.tableHeaders.selfPay")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className={
                      index % 2 === 0
                        ? "bg-white/50"
                        : "bg-[var(--background-secondary)]/30"
                    }
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-[var(--foreground)]">
                        {item.service}
                      </div>
                      <div className="text-sm text-[var(--foreground-muted)]">
                        {item.description}
                      </div>
                      {item.goaeReference && (
                        <div className="text-xs text-[var(--foreground-muted)] mt-1">
                          {item.goaeReference}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--foreground-muted)]">
                      {item.duration || "-"}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-[var(--secondary-dark)]">
                      {item.pkvPrice}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-[var(--warning)]">
                      {item.selfPayPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-[var(--background-secondary)]/50 border-t border-[var(--card-border)]">
            <p className="text-sm text-[var(--foreground-muted)]">
              <strong>Hinweis:</strong> {t("private.private.pricing.tableFooter")}
            </p>
          </div>
        </GlassCard>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("private.private.faq.sectionTitle").split("Fragen")[0]}
            <span className="text-gradient">Fragen</span>{" "}
            {t("private.private.faq.sectionTitle").split("Fragen")[1]}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="p-0 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openFAQ === index}
                >
                  <span className="font-medium text-[var(--foreground)] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--primary)] transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-[var(--foreground-muted)] leading-relaxed border-t border-[var(--card-border)] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="secondary">
        <GlassCard className="p-8 sm:p-12 text-center" gradient>
          <FileText className="w-16 h-16 mx-auto text-[var(--primary)] mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("private.private.cta.title")}
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8">
            {t("private.private.cta.description")}
          </p>
          <a href="#kontakt-formular">
            <Button size="lg">
              {t("private.private.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </GlassCard>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper id="kontakt-formular">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            {t("private.private.contactForm.sectionTitle").split(" ")[0]}{" "}
            <span className="text-gradient">
              {t("private.private.contactForm.sectionTitle").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("private.private.contactForm.sectionDescription")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6 sm:p-8">
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    {t("private.private.contactForm.success.title")}
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    {t("private.private.contactForm.success.text")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        {t("private.private.contactForm.name.label")} *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("private.private.contactForm.name.placeholder")}
                        error={errors.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        {t("private.private.contactForm.email.label")} *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("private.private.contactForm.email.placeholder")}
                        error={errors.email}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        {t("private.private.contactForm.phone.label")}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t("private.private.contactForm.phone.placeholder")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        {t("private.private.contactForm.childName.label")}
                      </label>
                      <Input
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        placeholder={t("private.private.contactForm.childName.placeholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      {t("private.private.contactForm.insuranceType.label")}
                    </label>
                    <Select
                      value={formData.insuranceType}
                      onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                      placeholder={t("private.private.contactForm.insuranceType.placeholder")}
                      options={[
                        { value: "PKV", label: t("private.private.contactForm.insuranceType.options.pkv") },
                        { value: "Selbstzahler", label: t("private.private.contactForm.insuranceType.options.selfPay") },
                        { value: "Beihilfe", label: t("private.private.contactForm.insuranceType.options.beihilfe") },
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      {t("private.private.contactForm.message.label")} *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("private.private.contactForm.message.placeholder")}
                      rows={5}
                      error={errors.message}
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-800">{t("private.private.contactForm.error.title")}</p>
                        <p className="text-sm text-red-600">{t("private.private.contactForm.error.text")}</p>
                      </div>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t("private.private.contactForm.submit.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t("private.private.contactForm.submit.default")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Direct Contact Sidebar */}
          <div className="space-y-4">
            <GlassCard className="p-5">
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-4">
                {t("private.private.contactForm.directContact.title")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl icon-container-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--foreground-muted)]">{t("private.private.contactForm.directContact.phone")}</p>
                    <a href="tel:+493061585520" className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                      030 / 615 85 20
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl icon-container-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--foreground-muted)]">{t("private.private.contactForm.directContact.email")}</p>
                    <a href="mailto:Privatpraxis@baselallozy.de" className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                      Privatpraxis@baselallozy.de
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl icon-container-tertiary flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--foreground-muted)]">{t("private.private.contactForm.directContact.hours")}</p>
                    <p className="font-medium text-[var(--foreground)]">
                      {t("private.private.contactForm.directContact.hoursValue")}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
