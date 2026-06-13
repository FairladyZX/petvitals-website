import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { termsSections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the PetVitals Terms and Conditions.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="The rules and regulations for using PetVitals."
      />
      <LegalContent sections={termsSections} />
    </main>
  );
}
