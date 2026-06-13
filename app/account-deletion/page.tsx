import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { accountDeletionSections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Account Deletion",
  description: "Request deletion of your PetVitals account and associated data.",
  alternates: { canonical: "/account-deletion" },
};

export default function AccountDeletionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Account deletion"
        title="PetVitals Account Deletion Request"
        description="Users of the PetVitals app may request deletion of their account and associated data at any time."
      />
      <LegalContent sections={accountDeletionSections} />
    </main>
  );
}
