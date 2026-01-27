export const contactInfo = {
  practice: {
    name: "Praxis Dr. Allozy",
    subtitle: "Dr. med. Basel Allozy",
    specialty: "Kinder- und Jugendpsychiatrie und Psychotherapie",
  },
  address: {
    street: "Blücherstraße 55",
    zip: "10961",
    city: "Berlin",
    district: "Kreuzberg",
  },
  phone: {
    main: "+49 30 6158520",
    display: "030 / 615 85 20",
  },
  email: "praxis@baselallozy.de",
  openingHours: [
    { day: "Montag", hours: "09:00 – 13:00, 14:00 – 19:00 Uhr" },
    { day: "Dienstag", hours: "09:00 – 13:00, 14:00 – 19:00 Uhr" },
    { day: "Mittwoch", hours: "nach Vereinbarung" },
    { day: "Donnerstag", hours: "09:00 – 13:00, 14:00 – 18:00 Uhr" },
    { day: "Freitag", hours: "09:00 – 12:00 Uhr" },
    { day: "Samstag", hours: "nach Vereinbarung" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  phoneConsultation: "Mo – Fr: 09:00 – 11:00, 14:00 – 16:00 Uhr",
  publicTransport: [
    { type: "U-Bahn", lines: ["U6", "U7"], station: "Mehringdamm" },
    { type: "Bus", lines: ["M19", "140"], station: "Blücherstraße" },
  ],
  parking: "Kostenpflichtige Parkplätze in der Umgebung verfügbar",
  accessibility:
    "Eingangsbreite 100 cm, 6 Stufen zum Eingang, Türbreite innen 80 cm",
  socialLinks: {
    instagram: "https://instagram.com/sonnenscheinpraxis",
    facebook: "https://facebook.com/sonnenscheinpraxis",
    linkedin: "https://linkedin.com/company/sonnenscheinpraxis",
    twitter: "https://twitter.com/sonnenscheinprx",
  },
  reviewLinks: {
    google: "https://share.google/5kM3tYfZa0oikMTNe",
  },
  mapEmbed: {
    lat: 52.4912,
    lng: 13.3922,
    zoom: 15,
  },
};

export const insuranceTypes = [
  { value: "gkv", label: "Gesetzlich versichert (GKV)" },
  { value: "pkv", label: "Privat versichert (PKV)" },
  { value: "selbstzahler", label: "Selbstzahler" },
  { value: "beihilfe", label: "Beihilfe" },
];
