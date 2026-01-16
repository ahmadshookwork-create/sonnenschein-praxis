import { Metadata } from "next";
import LeistungenContent from "./LeistungenContent";

export const metadata: Metadata = {
  title: "Leistungen & Zielgruppen",
  description:
    "Psychiatrische und psychotherapeutische Leistungen für Kinder, Jugendliche, Eltern und Familien. Diagnostik, Therapie, Beratung in der Sonnenschein Praxis Berlin.",
};

export default function LeistungenPage() {
  return <LeistungenContent />;
}
