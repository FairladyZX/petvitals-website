"use client";

import Image from "next/image";
import { useState } from "react";
import type { InteractiveFeature } from "@/data/home";

type InteractiveFeatureShowcaseProps = {
  features: InteractiveFeature[];
};

function PawPrint({ direction }: { direction: InteractiveFeature["pawDirection"] }) {
  return (
    <span className={`paw-print paw-print--${direction}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function InteractiveFeatureShowcase({
  features,
}: InteractiveFeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex] ?? features[0];

  if (!activeFeature) return null;

  return (
    <section
      id="features"
      className="container-px overflow-hidden bg-[var(--brand-sky)] pb-20 pt-10 sm:pb-24 sm:pt-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
            Pet health made easy
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Pet care tools that move with real life.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Hover or tap a care moment to preview how PetVitals keeps each
            detail organized, clear, and ready when you need it.
          </p>
        </div>

        <div className="relative mt-14 lg:min-h-[860px]">
          <div
            key={activeFeature.title}
            aria-hidden="true"
            className={[
              "pointer-events-none hidden lg:absolute lg:z-10 lg:flex lg:items-center lg:justify-between",
              activeFeature.trailClass,
            ].join(" ")}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <span
                key={index}
                className="paw-step"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <PawPrint direction={activeFeature.pawDirection} />
              </span>
            ))}
          </div>

          <div className="relative z-20 mb-10 grid gap-3 sm:grid-cols-2 lg:static lg:mb-0 lg:block">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={[
                    "group overflow-hidden rounded-[1.6rem] border px-5 py-3 text-left text-sm font-extrabold shadow-sm backdrop-blur transition-all duration-300 ease-out focus-visible:brand-focus lg:absolute lg:z-20 lg:w-56",
                    feature.positionClass,
                    isActive
                      ? "border-[var(--brand-orange)] bg-[#fff8f4] text-[var(--foreground)] shadow-xl shadow-[rgba(255,90,31,0.18)] ring-2 ring-[rgba(255,90,31,0.16)] lg:w-80"
                      : "border-white/90 bg-white/85 text-[var(--foreground)] hover:-translate-y-1 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] hover:shadow-md",
                  ].join(" ")}
                  aria-pressed={isActive}
                  aria-expanded={isActive}
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={[
                        "size-2 rounded-full transition",
                        isActive
                          ? "scale-125 bg-[var(--brand-orange)]"
                          : "bg-[var(--brand-orange)] group-hover:scale-125",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "transition-colors duration-300",
                        isActive ? "text-[var(--brand-orange)]" : "",
                      ].join(" ")}
                    >
                      {feature.title}
                    </span>
                  </span>
                  <span
                    className={[
                      "block overflow-hidden pl-5 text-xs font-semibold leading-5 text-[var(--muted)] transition-all duration-300 ease-out",
                      isActive
                        ? "mt-2.5 max-h-28 translate-y-0 opacity-100"
                        : "max-h-0 -translate-y-1 opacity-0",
                    ].join(" ")}
                  >
                    {feature.description}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center">
            <div className="mb-6 rounded-full border border-white/80 bg-white/80 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-orange)] shadow-sm backdrop-blur">
              We care
            </div>

            <div className="relative flex min-h-[630px] w-full items-center justify-center sm:min-h-[760px]">
              <div className="absolute inset-x-0 top-16 h-96 rounded-full bg-[rgba(8,103,201,0.20)] blur-3xl" />
              <Image
                key={activeFeature.image}
                src={activeFeature.image}
                width={1080}
                height={1350}
                alt={`${activeFeature.title} screen in PetVitals`}
                className="relative z-10 h-[610px] w-auto object-contain drop-shadow-2xl transition duration-500 ease-out sm:h-[740px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
