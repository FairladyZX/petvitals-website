export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
};

type LegalContentProps = {
  sections: LegalSection[];
};

export function LegalContent({ sections }: LegalContentProps) {
  return (
    <section className="container-px py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav
            aria-label="Page sections"
            className="rounded-lg border border-[var(--line)] bg-white p-4 shadow-sm"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-md px-3 py-2 text-sm font-semibold text-[var(--muted)] hover:bg-[var(--brand-sky)] hover:text-[var(--brand-blue-dark)]"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm sm:p-10">
          {sections.map((section) => (
            <section
              id={section.id}
              key={section.id}
              className="scroll-mt-28 border-b border-[var(--line)] py-8 first:pt-0 last:border-b-0 last:pb-0"
            >
              <h2 className="text-2xl font-extrabold tracking-tight text-[var(--foreground)]">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 whitespace-pre-line text-base leading-8 text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-4 grid gap-2 pl-5 text-base leading-8 text-[var(--muted)]">
                  {section.list.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
