export interface PriceItem {
  id: string;
  service: string;
  description: string;
  pkvPrice: string;
  selfPayPrice: string;
  duration?: string;
  goaeReference?: string;
}

export const pricingData: PriceItem[] = [
  {
    id: "erstgespraech",
    service: "Erstgespräch / Anamnese",
    description:
      "Ausführliches Erstgespräch mit Erhebung der Vorgeschichte, aktueller Symptomatik und Behandlungszielen.",
    pkvPrice: "120–180 €",
    selfPayPrice: "150 €",
    duration: "50–60 Min.",
    goaeReference: "GOÄ 1, 4, 34",
  },
  {
    id: "diagnostik",
    service: "Psychiatrische Diagnostik",
    description:
      "Umfassende diagnostische Abklärung inkl. standardisierter Testverfahren.",
    pkvPrice: "200–400 €",
    selfPayPrice: "300 €",
    duration: "90–120 Min.",
    goaeReference: "GOÄ 801, 855, 856, 857",
  },
  {
    id: "einzeltherapie",
    service: "Einzeltherapie",
    description:
      "Psychotherapeutische Einzelsitzung für Kinder oder Jugendliche.",
    pkvPrice: "100–140 €",
    selfPayPrice: "120 €",
    duration: "50 Min.",
    goaeReference: "GOÄ 870",
  },
  {
    id: "gruppentherapie",
    service: "Gruppentherapie",
    description: "Therapeutische Gruppensitzung mit 4–8 Teilnehmern.",
    pkvPrice: "50–70 €",
    selfPayPrice: "60 €",
    duration: "90 Min.",
    goaeReference: "GOÄ 871",
  },
  {
    id: "elternberatung",
    service: "Elternberatung",
    description: "Beratungsgespräch mit den Eltern (ohne Kind).",
    pkvPrice: "80–120 €",
    selfPayPrice: "100 €",
    duration: "50 Min.",
    goaeReference: "GOÄ 4, 34",
  },
  {
    id: "familiengespraech",
    service: "Familiengespräch",
    description: "Therapeutisches Gespräch mit der gesamten Familie.",
    pkvPrice: "150–200 €",
    selfPayPrice: "180 €",
    duration: "60–90 Min.",
    goaeReference: "GOÄ 817",
  },
  {
    id: "kunsttherapie",
    service: "Kunsttherapie",
    description: "Kreativtherapeutische Einzelsitzung.",
    pkvPrice: "80–100 €",
    selfPayPrice: "90 €",
    duration: "50 Min.",
  },
  {
    id: "logopaedie",
    service: "Logopädie",
    description: "Logopädische Behandlung bei Sprach- und Sprechstörungen.",
    pkvPrice: "60–80 €",
    selfPayPrice: "70 €",
    duration: "45 Min.",
  },
  {
    id: "attest",
    service: "Ärztliches Attest",
    description: "Ausstellung eines ärztlichen Attests oder Gutachtens.",
    pkvPrice: "30–50 €",
    selfPayPrice: "40 €",
    goaeReference: "GOÄ 70, 75",
  },
  {
    id: "bericht",
    service: "Ausführlicher Bericht",
    description:
      "Erstellung eines ausführlichen ärztlichen Berichts für Schule, Jugendamt o. ä.",
    pkvPrice: "80–150 €",
    selfPayPrice: "100 €",
    goaeReference: "GOÄ 75, 80",
  },
];

// VR-Therapie Angebote (Zusatzleistung, nicht KV)
export interface VRTherapyItem {
  id: string;
  title: string;
  description: string;
  basePrice: string;
  vrSurcharge: string;
}

export const vrTherapyData: VRTherapyItem[] = [
  {
    id: "vr-konfrontation",
    title: "VR-Konfrontationstherapie",
    description:
      "Behandlung von Ängsten und Phobien in einer sicheren, virtuellen Umgebung.",
    basePrice: "120 €",
    vrSurcharge: "+35 €",
  },
  {
    id: "vr-emdr",
    title: "VR-EMDR",
    description:
      "Eye Movement Desensitization & Reprocessing – effektive Trauma-Verarbeitung mit VR-Unterstützung.",
    basePrice: "120 €",
    vrSurcharge: "+35 €",
  },
  {
    id: "vr-kip",
    title: "VR-KIP",
    description:
      "Katathym-imaginative Psychotherapie – Arbeit mit inneren Bildern zur Bewältigung von Blockaden.",
    basePrice: "120 €",
    vrSurcharge: "+35 €",
  },
];

export const billingFAQ = [
  {
    question: "Wie erfolgt die Abrechnung bei privat Versicherten (PKV)?",
    answer:
      "Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ). Sie erhalten eine Rechnung, die Sie bei Ihrer privaten Krankenversicherung zur Erstattung einreichen. Die Erstattungshöhe hängt von Ihrem Versicherungstarif ab. Wir empfehlen, vor Behandlungsbeginn die Kostenübernahme mit Ihrer Versicherung zu klären.",
  },
  {
    question: "Was kostet die Behandlung für Selbstzahler?",
    answer:
      "Als Selbstzahler erhalten Sie unsere Leistungen zu festgelegten Honorarsätzen. Die genauen Kosten hängen von Art und Umfang der Behandlung ab. Gerne erstellen wir Ihnen vor Behandlungsbeginn einen Kostenvoranschlag.",
  },
  {
    question:
      "Übernimmt die private Krankenversicherung die Kosten vollständig?",
    answer:
      "Die Kostenerstattung hängt von Ihrem individuellen Versicherungstarif ab. In der Regel werden die Kosten für ärztliche und psychotherapeutische Leistungen anteilig oder vollständig erstattet. Psychiatrische Behandlungen sind meist ohne vorherige Genehmigung möglich.",
  },
  {
    question: "Muss ich in Vorleistung gehen?",
    answer:
      "Ja, als PKV-Patient oder Selbstzahler begleichen Sie zunächst unsere Rechnung. Die Erstattung erfolgt dann durch Ihre Versicherung. Wir stellen Ihnen eine detaillierte Rechnung aus, die Sie einreichen können.",
  },
  {
    question: "Kann ich als Beihilfeberechtigter behandelt werden?",
    answer:
      "Ja, selbstverständlich. Die Abrechnung erfolgt ebenfalls nach GOÄ. Sie reichen unsere Rechnung bei Ihrer Beihilfestelle und ggf. Ihrer privaten Zusatzversicherung ein.",
  },
  {
    question: "Was ist bei nicht wahrgenommenen Terminen?",
    answer:
      "Bitte sagen Sie vereinbarte Termine mindestens 24 Stunden vorher ab. Bei kurzfristiger Absage oder Nichterscheinen ohne Absage berechnen wir ein Ausfallhonorar, das nicht von der Versicherung erstattet wird.",
  },
  {
    question: "Gibt es die Möglichkeit von Ratenzahlung?",
    answer:
      "In besonderen Situationen können wir individuelle Zahlungsvereinbarungen treffen. Sprechen Sie uns gerne darauf an.",
  },
];
