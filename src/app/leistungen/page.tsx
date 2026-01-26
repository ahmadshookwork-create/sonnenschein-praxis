import { Metadata } from "next";
import LeistungenContent from "./LeistungenContent";

export const metadata: Metadata = {
  title: "Leistungen & Zielgruppen",
  description:
    "Psychiatrische und psychotherapeutische Leistungen für Kinder, Jugendliche, Eltern und Familien. Diagnostik, Therapie, Beratung in der Praxis Dr. Allozy Berlin.",
};

export default function LeistungenPage() {
  return <LeistungenContent />;
}
