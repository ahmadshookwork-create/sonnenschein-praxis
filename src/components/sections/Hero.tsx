"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Heart,
  Users,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-animated" />
      <div className="absolute inset-0 bg-grid" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float">
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-32 right-20 w-12 h-12 opacity-15 animate-float-delayed">
        <Star className="w-full h-full text-[var(--secondary)]" />
      </div>
      <div className="absolute bottom-40 left-20 w-10 h-10 opacity-15 animate-float">
        <Heart className="w-full h-full text-[var(--tertiary)]" />
      </div>
      <div className="absolute bottom-32 right-16 w-14 h-14 opacity-20 animate-float-delayed">
        <Sparkles className="w-full h-full text-[var(--primary-light)]" />
      </div>

      {/* Soft Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--primary-light)] rounded-full blur-[128px] opacity-30" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--secondary-light)] rounded-full blur-[128px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--tertiary-light)] rounded-full blur-[200px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-[var(--primary-dark)] text-sm font-medium mb-8 shadow-sm"
          >
            <MapPin className="w-4 h-4" />
            <span>Kinder- und Jugendpsychiatrie in Berlin</span>
          </motion.div>

          {/* Sonnenschein Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-center mb-6"
          >
            <div className="w-28 h-28 relative">
              <Image
                src="/logo.png"
                alt="Sonnenschein Praxis Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-[var(--foreground)]">
              Sonnenschein Praxis
            </span>
            <br />
            <span className="text-gradient">Dr. med. Basel Allozy</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[var(--foreground-muted)] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Mehrsprachige, kultursensible psychiatrische und
            psychotherapeutische Behandlung für Kinder, Jugendliche und Familien
            in einem vertrauensvollen Umfeld.
          </motion.p>

          {/* Insurance Selection Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
          >
            <Link href="/gkv" className="group">
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl icon-container-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  Gesetzlich versichert
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  Informationen für Kassenpatient:innen (GKV)
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--primary-dark)] font-medium text-sm group-hover:gap-3 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/privatpraxis" className="group">
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl icon-container-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  Privat / Selbstzahler
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  Privatpraxis für PKV & Selbstzahler
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--secondary-dark)] font-medium text-sm group-hover:gap-3 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/kontakt">
              <Button size="lg">
                Termin anfragen
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5" />
                Team kennenlernen
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--foreground-muted)]/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-[var(--primary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
