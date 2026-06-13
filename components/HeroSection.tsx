import Image from "next/image";
import { AppStoreButtons } from "./AppStoreButtons";

export function HeroSection() {
  return (
    <section className="container-px overflow-hidden bg-gradient-to-b from-white to-[var(--brand-sky)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-blue-dark)]">
            Pet health made easy
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Keep your pet's medical history, health, and activities in one app.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Get organized with PetVitals. Track care activities, save essential
            records, and set reminders for checkups, medication, grooming,
            nutrition, and daily routines.
          </p>
          <AppStoreButtons className="mt-8" />
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-[var(--brand-orange)]">
                24/7
              </p>
              <p className="mt-1 text-[var(--muted)]">Records access</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-[var(--brand-blue-dark)]">
                All
              </p>
              <p className="mt-1 text-[var(--muted)]">Your pets</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-[var(--brand-orange)]">
                Easy
              </p>
              <p className="mt-1 text-[var(--muted)]">Reminders</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-x-8 bottom-6 top-12 rounded-full bg-[var(--brand-blue)]/15 blur-3xl" />
          <Image
            src="/assets/Untitled design-4.png"
            width={600}
            height={600}
            alt="Two PetVitals app screens showing pet profiles, reminders, and health records"
            priority
            className="relative z-10 mx-auto h-auto w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
