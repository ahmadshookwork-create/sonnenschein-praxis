import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baselallozy.de"),
  title: {
    default:
      "Praxis Dr. Allozy | Dr. med. Basel Allozy - Kinder- und Jugendpsychiatrie Berlin",
    template: "%s | Praxis Dr. Allozy",
  },
  description:
    "Fachärztliche Kinder- und Jugendpsychiatrie in Berlin. Mehrsprachiges Team, kultursensible Behandlung. Diagnostik, Psychotherapie, Elternberatung. GKV & Privatpraxis.",
  keywords: [
    "Kinder- und Jugendpsychiatrie Berlin",
    "Kinderpsychiater Berlin",
    "Jugendpsychiater",
    "ADHS Behandlung Kinder",
    "Kinderpsychotherapie",
    "Dr. Basel Allozy",
    "arabischsprachiger Kinderpsychiater",
    "mehrsprachige Psychiatrie Berlin",
    "Privatpraxis Kinder- und Jugendpsychiatrie",
  ],
  authors: [{ name: "Dr. med. Basel Allozy" }],
  creator: "Praxis Dr. Allozy",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://baselallozy.de",
    siteName: "Praxis Dr. Allozy",
    title: "Praxis Dr. Allozy | Kinder- und Jugendpsychiatrie Berlin",
    description:
      "Mehrsprachige, kultursensible psychiatrische Behandlung für Kinder und Jugendliche in Berlin.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Praxis Dr. Allozy - Kinder- und Jugendpsychiatrie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxis Dr. Allozy | Kinder- und Jugendpsychiatrie Berlin",
    description:
      "Mehrsprachige, kultursensible psychiatrische Behandlung für Kinder und Jugendliche.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification if available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/sonnenschein-praxis/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/sonnenschein-praxis/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/sonnenschein-praxis/apple-touch-icon.png" />
        {/* Schema.org JSON-LD for Medical Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Praxis Dr. Allozy",
              description:
                "Fachärztliche Praxis für Kinder- und Jugendpsychiatrie und Psychotherapie in Berlin",
              url: "https://baselallozy.de",
              telephone: "+49 30 6158520",
              email: "praxis@baselallozy.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blücherstraße 55",
                addressLocality: "Berlin",
                addressRegion: "Berlin",
                postalCode: "10961",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.5316,
                longitude: 13.3844,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Thursday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Wednesday", "Friday"],
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              medicalSpecialty: "Psychiatry",
              availableService: [
                {
                  "@type": "MedicalTherapy",
                  name: "Kinder- und Jugendpsychiatrie",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Psychotherapie",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Familientherapie",
                },
              ],
              founder: {
                "@type": "Physician",
                name: "Dr. med. Basel Allozy",
                medicalSpecialty: "Kinder- und Jugendpsychiatrie",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Providers>
          <Navigation />
          <ScrollToTop />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
