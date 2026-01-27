import { Metadata } from "next";
import DatenschutzContent from "./DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Praxis Dr. Allozy Dr. med. Basel Allozy - Kinder- und Jugendpsychiatrie Berlin.",
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
