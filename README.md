# Sonnenschein Praxis

Website der Sonnenschein Praxis - Kinder- und Jugendpsychiatrie Berlin.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D:** React Three Fiber / Drei
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Email:** Nodemailer

## Installation

```bash
# Dependencies installieren
npm install

# Umgebungsvariablen konfigurieren
cp .env.example .env.local
# Dann .env.local mit echten Werten ausfüllen
```

## Development

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Projektstruktur

```
src/
├── app/              # Next.js App Router Seiten
│   ├── api/          # API Routes (Kontakt, Karriere)
│   ├── datenschutz/  # Datenschutz-Seite
│   ├── gkv/          # GKV-Patienten
│   ├── impressum/    # Impressum
│   ├── karriere/     # Stellenangebote
│   ├── kontakt/      # Kontaktformular
│   ├── leistungen/   # Leistungsübersicht
│   ├── privatpraxis/ # Privatpraxis & VR-Therapien
│   └── team/         # Team-Übersicht
├── components/       # React Komponenten
│   ├── layout/       # Layout-Komponenten (Navigation, Footer)
│   ├── sections/     # Sektions-Komponenten (Hero, Team, etc.)
│   ├── therapy/      # 3D VR-Brille Komponenten
│   └── ui/           # UI-Komponenten (Button, Card, etc.)
├── data/             # Statische Daten (Team, Preise)
└── lib/              # Utilities
```

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DEIN-USERNAME/sonnenschein-praxis)

1. Repository auf GitHub pushen
2. In Vercel importieren
3. Umgebungsvariablen in Vercel Dashboard setzen:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `PRAXIS_EMAIL`
4. Deploy!

## Lizenz

Privat - Alle Rechte vorbehalten.
