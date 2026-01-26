"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Brain,
  BookOpen,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen", hasDropdown: true },
  { href: "/team", label: "Team" },
  { href: "/gkv", label: "GKV" },
  { href: "/privatpraxis", label: "Privatpraxis" },
  { href: "/anmeldeformulare", label: "Formulare" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
];

const diagnostikSchwerpunkte = [
  {
    icon: Brain,
    title: "Autismusdiagnostik",
    description:
      "Umfassende ASS-Diagnostik nach Leitlinien mit ADOS-2 und ADI-R",
    href: "/leistungen#autismus",
  },
  {
    icon: BookOpen,
    title: "Teilleistungsstörungen",
    description: "LRS- und Dyskalkulie-Diagnostik für gezielte Förderung",
    href: "/leistungen#teilleistung",
  },
  {
    icon: Stethoscope,
    title: "Alle Leistungen",
    description: "Unser vollständiges Behandlungsspektrum im Überblick",
    href: "/leistungen",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[var(--primary)]/10 shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 relative">
                <Image
                  src="/sonnenschein-praxis/logo.png"
                  alt="Praxis Dr. Allozy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-gradient">
                  Praxis Dr. Allozy
                </span>
                <span className="block text-xs text-[var(--foreground-muted)]">
                  Kinder- & Jugendpsychiatrie
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setLeistungenOpen(true)}
                    onMouseLeave={() => setLeistungenOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        pathname === link.href ||
                          pathname.startsWith("/leistungen")
                          ? "text-[var(--primary-dark)] bg-[var(--primary)]/10"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--primary)]/5",
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          leistungenOpen && "rotate-180",
                        )}
                      />
                    </Link>

                    <AnimatePresence>
                      {leistungenOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[var(--primary)]/10 overflow-hidden"
                        >
                          <div className="p-2">
                            <div className="px-3 py-2 mb-1">
                              <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">
                                Unsere Schwerpunkte
                              </span>
                            </div>
                            {diagnostikSchwerpunkte.map((item, index) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--primary)]/5 transition-colors group"
                                  onClick={() => setLeistungenOpen(false)}
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[var(--primary)]/20 group-hover:to-[var(--secondary)]/20 transition-colors">
                                    <Icon className="w-5 h-5 text-[var(--primary)]" />
                                  </div>
                                  <div>
                                    <span className="block font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                                      {item.title}
                                    </span>
                                    <span className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                                      {item.description}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-[var(--primary-dark)] bg-[var(--primary)]/10"
                        : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--primary)]/5",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            {/* CTA Button + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/kontakt"
                className="hidden sm:flex items-center gap-2 btn-primary text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Termin anfragen</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl text-[var(--foreground)] hover:bg-[var(--primary)]/10 transition-colors"
                aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-[var(--primary)]/10 shadow-lg"
            >
              <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.hasDropdown ? (
                      <>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                            pathname === link.href ||
                              pathname.startsWith("/leistungen")
                              ? "text-[var(--primary-dark)] bg-[var(--primary)]/10"
                              : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--primary)]/5",
                          )}
                        >
                          {link.label}
                        </Link>
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-[var(--primary)]/20 pl-4">
                          {diagnostikSchwerpunkte.slice(0, 2).map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--primary)]/5 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-[var(--primary)]" />
                                <span className="text-sm text-[var(--foreground-muted)]">
                                  {item.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                          pathname === link.href
                            ? "text-[var(--primary-dark)] bg-[var(--primary)]/10"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--primary)]/5",
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    href="/kontakt"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 btn-primary w-full"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Termin anfragen</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
