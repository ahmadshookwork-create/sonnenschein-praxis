export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  targetGroups: ("kinder" | "jugendliche" | "eltern" | "familien")[];
  details: string[];
}

export const services: Service[] = [
  {
    id: "diagnostik",
    title: "Psychiatrische Diagnostik",
    description:
      "Umfassende Diagnostik von psychischen Erkrankungen bei Kindern und Jugendlichen nach aktuellen wissenschaftlichen Standards.",
    icon: "Stethoscope",
    targetGroups: ["kinder", "jugendliche"],
    details: [
      "Ausführliche Anamnese und Exploration",
      "Standardisierte Testverfahren",
      "Autismusdiagnostik (ASS)",
      "Teilleistungsstörungsdiagnostik (LRS, Dyskalkulie)",
      "Entwicklungsdiagnostik",
      "Intelligenz- und Leistungsdiagnostik",
      "Aufmerksamkeits- und Konzentrationstests",
      "Persönlichkeitsdiagnostik",
    ],
  },
  {
    id: "einzeltherapie",
    title: "Einzeltherapie",
    description:
      "Individuelle psychotherapeutische Behandlung für Kinder und Jugendliche mit verschiedenen psychischen Störungsbildern.",
    icon: "User",
    targetGroups: ["kinder", "jugendliche"],
    details: [
      "Verhaltenstherapie",
      "Spieltherapeutische Elemente",
      "Kognitive Therapieverfahren",
      "Traumatherapie",
      "Angst- und Zwangsstörungen",
      "ADHS-Behandlung",
    ],
  },
  {
    id: "gruppentherapie",
    title: "Gruppentherapie",
    description:
      "Therapeutische Gruppen für Kinder und Jugendliche zur Förderung sozialer Kompetenzen und gegenseitiger Unterstützung.",
    icon: "Users",
    targetGroups: ["kinder", "jugendliche"],
    details: [
      "Soziales Kompetenztraining",
      "Emotionsregulationsgruppen",
      "ADHS-Gruppen",
      "Angstbewältigungsgruppen",
      "Selbstwertgruppen",
      "Altersgerechte Gruppeneinteilung",
    ],
  },
  {
    id: "elternberatung",
    title: "Elternberatung",
    description:
      "Professionelle Beratung und Unterstützung für Eltern bei Erziehungsfragen und im Umgang mit psychischen Belastungen ihrer Kinder.",
    icon: "Heart",
    targetGroups: ["eltern"],
    details: [
      "Erziehungsberatung",
      "Psychoedukation",
      "Unterstützung bei familiären Belastungen",
      "Anleitung zu therapeutischen Übungen",
      "Netzwerkgespräche mit Schule/Kita",
      "Krisenintervention",
    ],
  },
  {
    id: "familientherapie",
    title: "Familientherapie",
    description:
      "Systemische Arbeit mit der gesamten Familie zur Verbesserung der Kommunikation und Lösung von Konflikten.",
    icon: "Home",
    targetGroups: ["familien", "eltern"],
    details: [
      "Systemische Familientherapie",
      "Kommunikationstraining",
      "Konfliktlösung",
      "Stärkung familiärer Ressourcen",
      "Begleitung bei Trennungssituationen",
      "Interkulturelle Familienberatung",
    ],
  },
  {
    id: "kunsttherapie",
    title: "Kunsttherapie",
    description:
      "Kreative Therapiemethoden für Kinder und Jugendliche, die über künstlerischen Ausdruck Zugang zu Emotionen finden.",
    icon: "Palette",
    targetGroups: ["kinder", "jugendliche"],
    details: [
      "Malen und Zeichnen",
      "Plastisches Gestalten",
      "Collage-Techniken",
      "Nonverbale Ausdrucksmöglichkeiten",
      "Förderung von Kreativität",
      "Verarbeitung von Traumata",
    ],
  },
  {
    id: "logopaedie",
    title: "Logopädie",
    description:
      "Behandlung von Sprach-, Sprech- und Kommunikationsstörungen bei Kindern und Jugendlichen.",
    icon: "MessageCircle",
    targetGroups: ["kinder", "jugendliche"],
    details: [
      "Sprachentwicklungsstörungen",
      "Artikulationsstörungen",
      "Stottern und Poltern",
      "Mutismus",
      "Sprachförderung",
      "Mehrsprachige Therapie",
    ],
  },
  {
    id: "medikation",
    title: "Medikamentöse Behandlung",
    description:
      "Bei Bedarf sorgfältig abgewogene medikamentöse Therapie als Teil eines ganzheitlichen Behandlungskonzepts.",
    icon: "Pill",
    targetGroups: ["kinder", "jugendliche"],
    details: [
      "ADHS-Medikation",
      "Antidepressiva bei Jugendlichen",
      "Angstlösende Medikamente",
      "Regelmäßige Kontrollen",
      "Engmaschige Betreuung",
      "Aufklärung über Nebenwirkungen",
    ],
  },
];

export const targetGroupDescriptions = {
  kinder: {
    title: "Kinder",
    ageRange: "0–12 Jahre",
    description:
      "Behandlung von psychischen Störungen im Kindesalter mit altersgerechten, spielerischen Methoden und enger Einbeziehung der Eltern.",
    commonIssues: [
      "ADHS und Konzentrationsprobleme",
      "Ängste und Phobien",
      "Trennungsängste",
      "Entwicklungsverzögerungen",
      "Emotionale Störungen",
      "Verhaltensauffälligkeiten",
    ],
  },
  jugendliche: {
    title: "Jugendliche",
    ageRange: "13–21 Jahre",
    description:
      "Spezialisierte Behandlung für Jugendliche und junge Erwachsene mit Verständnis für die besonderen Herausforderungen dieser Lebensphase.",
    commonIssues: [
      "Depressionen",
      "Angststörungen",
      "Essstörungen",
      "Selbstverletzendes Verhalten",
      "Schulvermeidung",
      "Identitätsfragen",
    ],
  },
  eltern: {
    title: "Eltern",
    ageRange: "",
    description:
      "Umfassende Beratung und Unterstützung für Eltern, um sie in ihrer Erziehungsrolle zu stärken und bei Belastungen zu entlasten.",
    commonIssues: [
      "Erziehungsunsicherheiten",
      "Umgang mit Verhaltensauffälligkeiten",
      "Überlastung und Burnout",
      "Konflikte mit Kindern/Jugendlichen",
      "Trennungssituationen",
      "Psychische Erkrankung des Kindes",
    ],
  },
  familien: {
    title: "Familien",
    ageRange: "",
    description:
      "Systemische Arbeit mit dem gesamten Familiensystem zur Verbesserung des Zusammenlebens und der Kommunikation.",
    commonIssues: [
      "Kommunikationsprobleme",
      "Familiäre Konflikte",
      "Geschwisterrivalität",
      "Patchwork-Situationen",
      "Kulturelle Herausforderungen",
      "Belastende Lebensereignisse",
    ],
  },
};
