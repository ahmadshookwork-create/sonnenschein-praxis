"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Star,
  ExternalLink,
  Heart,
  Handshake,
} from "lucide-react";
import { contactInfo } from "@/data/contact";
import { useTranslation } from "@/i18n";

// Kooperationspartner - später mit echten Daten ersetzen
const kooperationspartner = [
  {
    name: "Verein Balsam e.V.",
    url: "https://balsam-dag-ev.de/",
    descriptionKey: "deutschArabischeGesellschaft",
  },
  {
    name: "Vivantes Klinikum",
    url: "https://www.vivantes.de/",
    descriptionKey: "kinderJugendpsychiatrie",
  },
  {
    name: "Charité Berlin",
    url: "https://www.charite.de/",
    descriptionKey: "universitaetsmedizin",
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--primary)]/10">
      {/* Kooperationspartner Section */}
      <div className="border-b border-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-[var(--primary-dark)] text-sm font-medium mb-4">
              <Handshake className="w-4 h-4" />
              <span>{t('footer.footer.partners.badge')}</span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)]">
              {t('footer.footer.partners.title')}
            </h3>
            <p className="text-[var(--foreground-muted)] mt-2 max-w-xl mx-auto">
              {t('footer.footer.partners.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kooperationspartner.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-[var(--card-border)] hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Handshake className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors block truncate">
                    {partner.name}
                  </span>
                  <span className="text-sm text-[var(--foreground-muted)] block truncate">
                    {t(`footer.footer.partners.partnerDescriptions.${partner.descriptionKey}`)}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--primary)] transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 relative">
                <Image
                  src="/logo.png"
                  alt="Praxis Dr. Allozy Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-gradient">
                  {t('footer.footer.brand.practiceName')}
                </span>
                <span className="block text-xs text-[var(--foreground-muted)]">
                  {t('footer.footer.brand.doctorName')}
                </span>
              </div>
            </Link>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              {t('footer.footer.brand.description')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={contactInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:shadow-md hover:shadow-[var(--primary)]/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:shadow-md hover:shadow-[var(--primary)]/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:shadow-md hover:shadow-[var(--primary)]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:shadow-md hover:shadow-[var(--primary)]/10 transition-all"
                aria-label="X / Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">
              {t('footer.footer.quickLinks.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {t('footer.footer.quickLinks.links.startseite')}
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {t('footer.footer.quickLinks.links.leistungen')}
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {t('footer.footer.quickLinks.links.team')}
                </Link>
              </li>
              <li>
                <Link
                  href="/gkv"
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {t('footer.footer.quickLinks.links.gkv')}
                </Link>
              </li>
              <li>
                <Link
                  href="/privatpraxis"
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {t('footer.footer.quickLinks.links.privatpraxis')}
                </Link>
              </li>
              <li>
                <Link
                  href="/karriere"
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {t('footer.footer.quickLinks.links.karriere')}
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {t('footer.footer.quickLinks.links.kontakt')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">
              {t('footer.footer.contact.title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg icon-container-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm text-[var(--foreground-muted)]">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.zip} {contactInfo.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg icon-container-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${contactInfo.phone.main}`}
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {contactInfo.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg icon-container-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Google Reviews */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">
              {t('footer.footer.reviews.title')}
            </h3>
            <a
              href={contactInfo.reviewLinks.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md border border-[var(--card-border)] hover:border-[var(--primary)]/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
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
                <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors block">
                  {t('footer.footer.reviews.googleReviews')}
                </span>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[var(--primary)] fill-[var(--primary)]"
                    />
                  ))}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--primary)] transition-colors" />
            </a>

            <p className="text-xs text-[var(--foreground-muted)] mt-4 leading-relaxed">
              {t('footer.footer.reviews.feedbackMessage')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--foreground-muted)] flex items-center gap-1">
              &copy; {currentYear} {t('footer.footer.brand.practiceName')}. Mit{" "}
              <Heart className="w-4 h-4 text-[var(--tertiary)] fill-[var(--tertiary)]" />{" "}
              {t('footer.footer.bottomBar.forFamilies')}.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/impressum"
                className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
              >
                {t('footer.footer.bottomBar.impressum')}
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
              >
                {t('footer.footer.bottomBar.datenschutz')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
