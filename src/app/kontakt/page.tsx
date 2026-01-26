import { Metadata } from "next";
import KontaktContent from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Kontaktieren Sie die Praxis Dr. Allozy in Berlin. Terminanfrage, Anfahrt, Öffnungszeiten. Kinder- und Jugendpsychiatrie Dr. Basel Allozy.",
};

export default function KontaktPage() {
  return <KontaktContent />;
}
