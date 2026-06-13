import { SectionHeading } from "./SectionHeading";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section id="faq" className="container-px bg-[var(--brand-sky)] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="A few things pet owners commonly ask."
          description="Here are the essentials from the current PetVitals site, tightened for a faster and clearer homepage."
        />

        <div className="mt-10 divide-y divide-[var(--line)] rounded-lg border border-[var(--line)] bg-white">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left font-bold text-[var(--foreground)] focus-visible:brand-focus">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--brand-sky)] text-lg text-[var(--brand-blue-dark)] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-7 text-[var(--muted)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
