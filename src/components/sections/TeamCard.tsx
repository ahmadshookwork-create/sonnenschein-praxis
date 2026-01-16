"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { TeamMember, languageFlags, DEFAULT_IMAGE_FOCUS } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);
  const languages = member.languages ?? [];
  const focus = member.imageFocus ?? DEFAULT_IMAGE_FOCUS;
  const objectPosition = `${focus.x * 100}% ${focus.y * 100}%`;

  const imageSrc = imageError || !member.imageSrc 
    ? "/team/placeholder.jpg" 
    : member.imageSrc;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] group hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300"
    >
      {/* Avatar Container - Consistent aspect ratio */}
      <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 overflow-hidden">
        <Image
          src={imageSrc}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={90}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition }}
          priority={index < 4}
          onError={() => setImageError(true)}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-gradient transition-all leading-tight">
            {member.name}
          </h3>
          <p className="text-sm text-[var(--primary)] mt-1 font-medium">
            {member.role}
          </p>
          {member.subtitle && (
            <p className="text-xs text-[var(--foreground-muted)] mt-0.5">
              {member.subtitle}
            </p>
          )}
        </div>

        {member.bio && (
          <p className="text-sm text-[var(--foreground-muted)] leading-relaxed line-clamp-2">
            {member.bio}
          </p>
        )}

        {/* Languages - nur anzeigen wenn vorhanden */}
        {languages.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <p className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider">
              Sprachen
            </p>
            <div className="flex flex-wrap gap-1.5">
              {languages.map((lang) => (
                <Badge key={lang} variant="primary" size="sm">
                  <span className="mr-1">{languageFlags[lang] || ""}</span>
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
