import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { featureSections, reasons } from "@/data/pages";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the robust features of PetVitals, the ultimate pet health companion app.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="Pet Health Made Easy"
        description="Centralize your pet's vital information, track medical history, manage diet, set vet visit reminders, and schedule playtime all in one user-friendly application."
      />
      <section className="container-px bg-[var(--brand-sky)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10">
          {featureSections.map((section, index) => (
            <article
              key={section.title}
              className="grid gap-8 rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:items-center lg:p-8"
            >
              <div className={`overflow-visible py-8 ${index % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={section.image}
                  width={569}
                  height={569}
                  alt={`${section.title} in PetVitals`}
                  className="mx-auto aspect-square w-full max-w-[569px] object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  {section.body}
                </p>
                {section.bullets.length > 0 ? (
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--muted)]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-lg bg-[var(--brand-sky)] p-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container-px bg-[var(--brand-sky)] py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why PetVitals" title="6 reasons why you need PetVitals" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, body]) => (
              <article key={title} className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="text-lg font-extrabold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container-px py-20">
        <div className="mx-auto max-w-4xl">
          <CTASection />
        </div>
      </section>
    </main>
  );
}
