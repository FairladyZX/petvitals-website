import { AppStoreButtons } from "./AppStoreButtons";

export function CTASection() {
  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="overflow-hidden rounded-lg bg-white/70 p-6 shadow-[0_24px_70px_rgba(8,103,201,0.14)] ring-1 ring-white/80 backdrop-blur sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div className="relative">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
            Ready to get started?
          </p>
          <h2
            id="download-title"
            className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-[var(--foreground)] drop-shadow-[0_14px_30px_rgba(8,103,201,0.12)] sm:text-5xl"
          >
            Start your 7-day free trial of PetVitals.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
            Keep routines, reminders, records, and everyday pet care organized
            in one calm place. Cancel anytime before the trial ends.
          </p>
          <AppStoreButtons className="mt-6" />
        </div>

        <div className="grid gap-4">
          <div className="relative rounded-lg border-2 border-[var(--brand-blue-dark)] bg-white p-6 shadow-xl shadow-[rgba(8,103,201,0.12)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-lg bg-[var(--brand-orange)] px-5 py-2 text-sm font-extrabold text-white shadow-lg shadow-[rgba(255,90,31,0.22)]">
              7-day free trial
            </div>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-3xl font-extrabold text-[var(--foreground)]">
                  Yearly
                </h3>
                <p className="mt-3 text-lg font-bold text-[var(--muted)]">
                  $49.99/year
                </p>
              </div>
              <p className="text-4xl font-extrabold text-[var(--foreground)]">
                $4.16
                <span className="text-xl text-[var(--muted)]">/mo</span>
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--line)] bg-white/85 p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-3xl font-extrabold text-[var(--foreground)]">
                  Monthly
                </h3>
                <p className="mt-3 text-base font-semibold text-[var(--muted)]">
                  Flexible month-to-month care.
                </p>
              </div>
              <p className="text-4xl font-extrabold text-[var(--foreground)]">
                $4.99
                <span className="text-xl text-[var(--muted)]">/mo</span>
              </p>
            </div>
          </div>

          <p className="text-center text-sm font-semibold leading-6 text-[var(--muted)]">
            After the 7-day free trial, your selected subscription renews
            automatically unless cancelled.
          </p>
        </div>
      </div>
    </section>
  );
}
