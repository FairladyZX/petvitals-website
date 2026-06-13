import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutTimeline } from "@/data/pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story behind PetVitals, your ultimate pet health companion app.",
  alternates: { canonical: "/about" },
};

function PawStep({ step }: { step: string }) {
  return (
    <div
      className="relative mx-auto h-24 w-28 drop-shadow-md"
      aria-label={`Timeline step ${step}`}
    >
      <svg
        aria-hidden="true"
        className="h-full w-full overflow-visible"
        viewBox="0 0 112 96"
      >
        <ellipse
          cx="25"
          cy="34"
          fill="#347af0"
          rx="12"
          ry="18"
          transform="rotate(-16 25 34)"
        />
        <ellipse
          cx="43"
          cy="18"
          fill="#347af0"
          rx="12"
          ry="19"
          transform="rotate(-4 43 18)"
        />
        <ellipse
          cx="69"
          cy="18"
          fill="#347af0"
          rx="12"
          ry="19"
          transform="rotate(4 69 18)"
        />
        <ellipse
          cx="87"
          cy="34"
          fill="#347af0"
          rx="12"
          ry="18"
          transform="rotate(16 87 34)"
        />
        <path
          d="M56 36c-18 0-36 19-36 37 0 13 10 21 24 17 5-1 9-3 12-3s7 2 12 3c14 4 24-4 24-17 0-18-18-37-36-37Z"
          fill="#347af0"
        />
        <text
          fill="white"
          fontFamily="Kanit, sans-serif"
          fontSize="38"
          fontWeight="800"
          textAnchor="middle"
          x="56"
          y="77"
        >
          {step}
        </text>
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About PetVitals"
        title="Who is PetVitals?"
        description="PetVitals is your ultimate pet health companion, an innovative app designed to safeguard your pet's well-being and medical history."
      />
      <section className="container-px py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Pet's Wingman"
              title="Built to simplify care for people who love their pets."
              description="Our mission is to ensure your furry friend's health and happiness by keeping vital information and medical records in one secure place."
            />
            <p className="mt-6 text-base leading-8 text-[var(--muted)]">
              With PetVitals, you can effortlessly manage your pet's health, set
              reminders for important appointments and medications, and gain
              valuable insights into their overall well-being.
            </p>
          </div>
          <Image
            src="/assets/8b2d48d6-a62a-4ad0-a543-444579bc9933.png"
            width={1037}
            height={582}
            alt="Pet owner using a phone while holding a dog"
            className="rounded-lg shadow-sm"
          />
        </div>
      </section>
      <section className="container-px bg-[var(--brand-sky)] py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How did we get here?"
            title="From sanctuary problem to pet-owner companion."
          />
          <div className="relative mt-16 grid gap-14 md:gap-0">
            <div
              aria-hidden="true"
              className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-slate-500/60 md:left-1/2 md:block md:-translate-x-1/2"
            />
            {aboutTimeline.map((item, index) => {
              const image = (
                <div
                  className={`relative z-10 flex ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={
                      index === 2
                        ? "w-full max-w-lg"
                        : "w-full max-w-lg rounded-lg border border-[var(--line)] bg-white/65 p-3 shadow-xl shadow-slate-900/15"
                    }
                  >
                    <Image
                      src={item.image}
                      width={index === 1 ? 600 : 460}
                      height={index === 1 ? 338 : 460}
                      alt={item.imageAlt}
                      className={`mx-auto h-auto w-full ${
                        index === 1
                          ? "object-cover"
                          : index === 2
                            ? "max-w-md object-contain"
                            : "object-contain"
                      }`}
                    />
                  </div>
                </div>
              );

              const copy = (
                <article
                  className={`relative z-10 mx-auto max-w-xl text-center ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <h2 className="text-3xl font-extrabold text-[#544848] sm:text-4xl">
                    {item.title}
                  </h2>
                  <div className="mx-auto mt-7 h-0.5 w-24 rounded-full bg-slate-500/70" />
                  <div className="mt-8 grid gap-6 text-base font-semibold leading-8 text-[#544848]/90">
                    {item.body.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              );

              return (
                <div
                  key={item.step}
                  className="relative grid gap-8 md:grid-cols-[1fr_7rem_1fr] md:items-center md:py-14"
                >
                  <div className="hidden md:block">
                    {index % 2 === 0 ? image : copy}
                  </div>
                  <div className="relative z-20 md:col-start-2">
                    <PawStep step={item.step} />
                  </div>
                  <div className="hidden md:block">
                    {index % 2 === 0 ? copy : image}
                  </div>
                  <div className="grid gap-8 md:hidden">
                    {image}
                    {copy}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container-px py-20">
        <div className="mx-auto grid max-w-4xl gap-6">
          <div className="rounded-lg bg-[var(--brand-mint)] p-8 sm:p-10">
            <h2 className="text-3xl font-extrabold">Why did we develop PetVitals?</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              To simplify the lives of pet owners by centralizing pet medical
              history, information, reminders, and health tracking, so pet
              owners can provide the best possible care for their beloved
              companions.
            </p>
          </div>
          <CTASection />
        </div>
      </section>
    </main>
  );
}
