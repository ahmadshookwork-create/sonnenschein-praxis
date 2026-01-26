import { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Unser Team",
  description:
    "Lernen Sie unser mehrsprachiges Team der Praxis Dr. Allozy kennen. Fachärzte, Psychotherapeuten und therapeutische Fachkräfte für Kinder- und Jugendpsychiatrie.",
};

export default function TeamPage() {
  return <TeamContent />;
}
