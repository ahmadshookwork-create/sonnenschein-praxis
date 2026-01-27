import { Metadata } from "next";
import ImpressumContent from "./ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Praxis Dr. Allozy Dr. med. Basel Allozy - Kinder- und Jugendpsychiatrie Berlin.",
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
