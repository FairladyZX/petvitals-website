import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the PetVitals Privacy Policy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How PetVitals describes privacy, data, app usage, location data, deletion requests, and consent."
      />
      <LegalContent sections={privacySections} />
    </main>
  );
}
