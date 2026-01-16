"use client";

import { motion } from "framer-motion";
import { Eye, Play } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function VRTour() {
  return (
    <section className="section-padding bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto">
        <GlassCard className="p-8 lg:p-12 overflow-hidden relative" gradient>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-[var(--primary)] text-sm font-semibold uppercase tracking-wider mb-4">
                <Eye className="w-4 h-4" />
                Virtueller Rundgang
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
                Praxis <span className="text-gradient">virtuell erleben</span>
              </h2>
              <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-6">
                Lernen Sie unsere Räumlichkeiten schon vor Ihrem ersten Besuch kennen.
                Unser virtueller 360°-Rundgang gibt Ihnen einen authentischen Eindruck
                unserer kindgerechten Praxisräume.
              </p>
              <Button size="lg" className="gap-3">
                <Play className="w-5 h-5" />
                Rundgang starten
              </Button>
            </motion.div>

            {/* VR Preview Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/*
                VR/360° TOUR PLACEHOLDER
                -------------------------
                This container is prepared for embedding a 360° virtual tour.
                Replace this placeholder with an iframe or embed code from:
                - Matterport
                - Google Street View 360
                - Kuula
                - ThingLink
                - Or any other 360° tour provider

                Example:
                <iframe
                  src="https://my.matterport.com/show/?m=YOUR_TOUR_ID"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                />
              */}
              <div className="aspect-video rounded-2xl bg-[var(--background-tertiary)] border border-[var(--glass-border)] overflow-hidden relative group cursor-pointer">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    360° Tour wird geladen...
                  </p>
                </div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-grid opacity-30" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-tertiary)] via-transparent to-transparent opacity-50" />
              </div>

              {/* Feature badges */}
              <div className="absolute -bottom-4 left-4 right-4 flex justify-center gap-3">
                <span className="glass-card px-3 py-1.5 rounded-full text-xs font-medium text-[var(--foreground)]">
                  360° Ansicht
                </span>
                <span className="glass-card px-3 py-1.5 rounded-full text-xs font-medium text-[var(--foreground)]">
                  Interaktiv
                </span>
                <span className="glass-card px-3 py-1.5 rounded-full text-xs font-medium text-[var(--foreground)]">
                  VR-kompatibel
                </span>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
