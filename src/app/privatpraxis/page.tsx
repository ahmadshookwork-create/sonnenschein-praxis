import { Metadata } from "next";
import PrivatpraxisContent from "./PrivatpraxisContent";

export const metadata: Metadata = {
  title: "Privatpraxis & Selbstzahler",
  description:
    "Privatpraxis für Kinder- und Jugendpsychiatrie in Berlin. PKV, Beihilfe und Selbstzahler. Preise, Leistungen und Abrechnungsinformationen nach GOÄ.",
};

export default function PrivatpraxisPage() {
  return <PrivatpraxisContent />;
}
