import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions or feedback about PetVitals? Contact the PetVitals team.",
  alternates: { canonical: "/contactus" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="We value your inquiries and feedback. Reach out using the contact form or email below, and the team will get back to you as soon as possible."
      />
      <section className="container-px py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-[var(--brand-sky)] p-8">
            <h2 className="text-2xl font-extrabold">Email</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-lg font-bold text-[var(--brand-blue-dark)]"
            >
              {siteConfig.email}
            </a>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              The form uses a self-hosted Next.js API route and Nodemailer SMTP.
              Configure SMTP settings in production with the values documented
              in `.env.example`.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
