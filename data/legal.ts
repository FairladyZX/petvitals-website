import type { LegalSection } from "@/components/LegalContent";
import legalContent from "./legal-content.json";

export const privacySections = legalContent.privacy as LegalSection[];

export const termsSections = legalContent.terms as LegalSection[];

export const accountDeletionSections =
  legalContent.accountDeletion as LegalSection[];
