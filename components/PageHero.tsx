type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="container-px bg-gradient-to-b from-white to-[var(--brand-sky)] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-blue-dark)]">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>
      </div>
    </section>
  );
}
