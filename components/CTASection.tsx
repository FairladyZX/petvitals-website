import Image from "next/image";
import { AppStoreButtons } from "./AppStoreButtons";

type CTASectionProps = {
  showImage?: boolean;
};

export function CTASection({ showImage = true }: CTASectionProps) {
  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="rounded-lg bg-[var(--foreground)] p-8 text-white sm:p-10"
    >
      <div className="grid gap-8 sm:grid-cols-[1fr_160px] sm:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#8fd0ff]">
            Ready to get started?
          </p>
          <h2 id="download-title" className="mt-4 text-3xl font-extrabold">
            Download PetVitals and bring your pet's care into focus.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            Start with the app your pet routines, reminders, and important
            records can call home.
          </p>
          <AppStoreButtons className="mt-6" />
        </div>
        {showImage ? (
          <Image
            src="/assets/Yellow-Simple-Download-Our-Apps-Now-Instagram-Post-10.png"
            width={200}
            height={200}
            alt="PetVitals mobile app preview"
            className="mx-auto h-auto w-40"
          />
        ) : null}
      </div>
    </section>
  );
}
