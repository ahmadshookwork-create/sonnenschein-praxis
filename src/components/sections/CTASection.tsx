"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/i18n";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-[var(--background)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/kontakt">
              <Button size="lg">
                <Calendar className="w-5 h-5" />
                {t("cta.buttonAppointment")}
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5" />
                {t("cta.buttonTeam")}
              </Button>
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="flex items-center justify-center gap-2 text-[var(--foreground-muted)]">
            <Phone className="w-5 h-5 text-[var(--primary)]" />
            <span>{t("cta.callPrompt")}</span>
            <a
              href="tel:+493012345678"
              className="font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              {t("cta.phoneNumber")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
