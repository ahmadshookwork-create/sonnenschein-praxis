import { Metadata } from "next";
import GKVContent from "./GKVContent";

export const metadata: Metadata = {
  title: "Gesetzlich Versicherte (GKV)",
  description:
    "Informationen für Kassenpatient:innen. Kinder- und Jugendpsychiatrie für gesetzlich Versicherte in Berlin. Überweisungswege, Leistungen und Ablauf.",
};

export default function GKVPage() {
  return <GKVContent />;
}
