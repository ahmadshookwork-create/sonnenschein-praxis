import { Metadata } from "next";
import AnmeldeformulareContent from "./AnmeldeformulareContent";

export const metadata: Metadata = {
  title: "Anmeldeformulare",
  description:
    "Anmeldeformulare und Fragebögen der Praxis Dr. Allozy. Laden Sie die benötigten Formulare vor Ihrem Ersttermin herunter.",
};

export default function AnmeldeformularePage() {
  return <AnmeldeformulareContent />;
}
