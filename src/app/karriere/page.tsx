import { Metadata } from "next";
import KarriereContent from "./KarriereContent";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Werden Sie Teil unseres Teams! Stellenangebote für Ärzte, Psychotherapeuten und therapeutische Fachkräfte in der Sonnenschein Praxis Berlin.",
};

export default function KarrierePage() {
  return <KarriereContent />;
}
