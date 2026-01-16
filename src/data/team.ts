export interface TeamMember {
  id: string;
  name: string;
  role: string;
  subtitle?: string;
  roleCategory: "arzt" | "therapeut" | "fachkraft" | "verwaltung" | "ausbildung";
  languages?: string[];
  bio?: string;
  imageSrc?: string;
  /** Fokuspunkt für Bildausschnitt (Gesichtszentrum). Default: { x: 0.5, y: 0.3 } */
  imageFocus?: { x: number; y: number };
  /** Ist diese Person der Praxisleiter (wird separat im Spotlight angezeigt) */
  isLead?: boolean;
  /** Ausführliche Biografie für Spotlight */
  fullBio?: string;
  /** Highlights/Qualifikationen für Spotlight */
  highlights?: string[];
}

/** Default Fokuspunkt für Porträts (Gesicht im oberen Drittel) */
export const DEFAULT_IMAGE_FOCUS = { x: 0.5, y: 0.3 };

export const teamMembers: TeamMember[] = [
  {
    id: "basel-allozy",
    name: "Dr. med. Basel Allozy",
    role: "Facharzt für Kinder- und Jugendpsychiatrie und Psychotherapie",
    subtitle: "Praxisinhaber, Systemischer Coach und Supervisor (DGSF)",
    roleCategory: "arzt",
    languages: ["Arabisch", "Deutsch"],
    bio: "Praxisleitung mit langjähriger Erfahrung in der Behandlung von Kindern und Jugendlichen. Spezialisiert auf kultursensible psychiatrische Versorgung.",
    imageSrc: "/team/basel-allozy.jpg",
    imageFocus: { x: 0.5, y: 0.15 },
    isLead: true,
    fullBio: "Dr. med. Basel Allozy leitet die Sonnenschein Praxis mit über 15 Jahren Erfahrung in der Kinder- und Jugendpsychiatrie. Als Facharzt und zertifizierter systemischer Coach (DGSF) verbindet er fundierte medizinische Expertise mit einem ganzheitlichen Therapieansatz. Seine Schwerpunkte umfassen tiefenpsychologisch fundierte Psychotherapie (TFP), Katathym Imaginative Psychotherapie (KIP) sowie EMDR-Behandlungen. Besonders am Herzen liegt ihm die kultursensible und mehrsprachige Versorgung von Familien mit Migrationshintergrund.",
    highlights: [
      "Über 15 Jahre Berufserfahrung",
      "Systemischer Coach & Supervisor (DGSF)",
      "Schwerpunkt TFP, KIP & EMDR",
      "Kultursensible Behandlung",
      "Mehrsprachig (Deutsch, Arabisch)",
      "Praxisinhaber seit 2015",
    ],
  },
  {
    id: "amira-muminovic",
    name: "Amira Muminovic",
    role: "Heilpädagogin",
    subtitle: "Elternberatung, Gruppentherapie",
    roleCategory: "therapeut",
    languages: ["Bosnisch", "Arabisch", "Polnisch", "Russisch", "Deutsch"],
    bio: "Spezialisiert auf heilpädagogische Förderung, Elternarbeit und therapeutische Gruppenangebote.",
    imageSrc: "/team/amira-muminovic.png",
    imageFocus: { x: 0.5, y: 0.2 },
  },
  {
    id: "anna-kosel",
    name: "Anna Kosel",
    role: "Kinder- und Jugendlichenpsychotherapeutin",
    roleCategory: "therapeut",
    languages: ["Deutsch"],
    bio: "Approbierte Psychotherapeutin mit Schwerpunkt auf verhaltenstherapeutische Behandlung von Kindern und Jugendlichen.",
    imageSrc: "/team/anna-kosel.jpg",
    imageFocus: { x: 0.5, y: 0.25 },
  },
  {
    id: "linus-sagert",
    name: "Linus Sagert",
    role: "Psychotherapeut",
    roleCategory: "therapeut",
    languages: ["Deutsch", "Englisch"],
    bio: "Psychotherapeut mit Fokus auf moderne, evidenzbasierte Therapieverfahren.",
    imageSrc: "/team/linus-sagert.jpg",
    imageFocus: { x: 0.5, y: 0.2 },
  },
  {
    id: "amina-jeleskovic-ozturk",
    name: "Amina Jeleskovic-Öztürk",
    role: "Psychologin B. Sc.",
    roleCategory: "fachkraft",
    languages: ["Bosnisch", "Kroatisch", "Serbisch", "Deutsch", "Englisch"],
    bio: "Psychologin mit Expertise in psychologischer Diagnostik und Beratung.",
    imageSrc: "/team/amina-jeleskovic-oztuerk.jpg",
    imageFocus: { x: 0.5, y: 0.3 },
  },
  {
    id: "nisreen-arja",
    name: "Nisreen Arja",
    role: "Sprach- und Kommunikationstherapeutin",
    roleCategory: "fachkraft",
    languages: ["Arabisch", "Englisch", "Deutsch"],
    bio: "Spezialisiert auf Sprach- und Sprechstörungen bei Kindern und Jugendlichen.",
    imageSrc: "/team/nisreen-arja.png",
    imageFocus: { x: 0.5, y: 0.25 },
  },
  {
    id: "sandra-loeser",
    name: "Sandra Löser",
    role: "ZFA – Privatsekretariat, Qualitätsmanagement",
    roleCategory: "verwaltung",
    languages: ["Deutsch"],
    bio: "Verantwortlich für das Privatsekretariat und Qualitätsmanagement der Praxis.",
    imageSrc: "/team/sandra-loeser.jpg",
    imageFocus: { x: 0.5, y: 0.2 },
  },
  {
    id: "mahmoud-alsioufy",
    name: "Mahmoud Alsiofy",
    role: "Psychologische Fachkraft",
    roleCategory: "fachkraft",
    languages: ["Arabisch", "Englisch", "Deutsch"],
    bio: "Unterstützung in psychologischer Betreuung und Beratung.",
    imageSrc: "/team/mahmoud-alsioufy.jpg",
    imageFocus: { x: 0.5, y: 0.3 },
  },
  {
    id: "christian-montivero",
    name: "Dr. C. Montivero",
    role: "Arzt in Weiterbildung",
    subtitle: "Weiterbildung zum FA für Kinder- und Jugendpsychiatrie",
    roleCategory: "ausbildung",
    languages: ["Spanisch", "Deutsch"],
    bio: "Arzt in der Facharztweiterbildung für Kinder- und Jugendpsychiatrie.",
    imageSrc: "/team/christian-montivero.png",
    imageFocus: { x: 0.5, y: 0.2 },
  },
  {
    id: "lina-prochaska",
    name: "L. Prochaska",
    role: "KJ-Psychotherapeutin VT i.A.",
    roleCategory: "ausbildung",
    languages: ["Deutsch", "Englisch", "Persisch"],
    bio: "Kinder- und Jugendlichenpsychotherapeutin in Ausbildung mit verhaltenstherapeutischer Ausrichtung.",
    imageSrc: "/team/lina-prochaska.png",
    imageFocus: { x: 0.5, y: 0.25 },
  },
  {
    id: "mustafa-algharraa",
    name: "M. Algharraa",
    role: "MFA-Helfer",
    roleCategory: "verwaltung",
    languages: ["Arabisch", "Englisch", "Türkisch", "Deutsch"],
    bio: "Unterstützung im Praxisalltag und Patientenbetreuung.",
    imageSrc: "/team/mustafa-algharraa.jpg",
    imageFocus: { x: 0.5, y: 0.3 },
  },
  {
    id: "sana-ammar",
    name: "S. Ammar",
    role: "Kunsttherapeutin i.A.",
    roleCategory: "ausbildung",
    languages: ["Deutsch", "Arabisch", "Französisch", "Englisch"],
    bio: "Kunsttherapeutin in Ausbildung mit Fokus auf kreative Therapiemethoden für Kinder und Jugendliche.",
    imageSrc: "/team/sana-ammar.jpg",
    imageFocus: { x: 0.5, y: 0.35 },
  },
];

// Berechne Sprachen nur wenn vorhanden (languages ist jetzt optional)
export const allLanguages = Array.from(
  new Set(teamMembers.flatMap((member) => member.languages ?? []))
).sort();

export const languageFlags: Record<string, string> = {
  Deutsch: "🇩🇪",
  Englisch: "🇬🇧",
  Arabisch: "🇸🇦",
  Türkisch: "🇹🇷",
  Russisch: "🇷🇺",
  Polnisch: "🇵🇱",
  Bosnisch: "🇧🇦",
  Kroatisch: "🇭🇷",
  Serbisch: "🇷🇸",
  Spanisch: "🇪🇸",
  Französisch: "🇫🇷",
  Persisch: "🇮🇷",
};
