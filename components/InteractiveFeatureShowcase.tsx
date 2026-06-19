"use client";

import Image from "next/image";
import { useState } from "react";
import type { InteractiveFeature } from "@/data/home";

type InteractiveFeatureShowcaseProps = {
  features: InteractiveFeature[];
};

export function InteractiveFeatureShowcase({
  features,
}: InteractiveFeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!features.length) return null;

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

        <div className="relative mt-24 lg:mt-32 lg:min-h-[1040px]">
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
                    "group overflow-hidden rounded-[1.6rem] border px-5 py-3 text-left text-base font-extrabold shadow-sm backdrop-blur transition-all duration-300 ease-out focus-visible:brand-focus lg:absolute lg:z-20 lg:w-60",
                    feature.positionClass,
                    isActive
                      ? "border-[var(--brand-orange)] bg-[#fff8f4] text-[var(--foreground)] shadow-xl shadow-[rgba(255,90,31,0.18)] ring-2 ring-[rgba(255,90,31,0.16)] lg:w-[21rem]"
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

          <div className="relative z-10 mx-auto mt-2 flex max-w-lg flex-col items-center lg:mt-8">
            <Image
              src="/assets/personPets-transparent.png"
              width={1024}
              height={1024}
              alt="PetVitals pet parent with pets"
              className="mb-2 h-auto w-56 -translate-y-16 object-contain drop-shadow-xl sm:w-72 sm:-translate-y-20 lg:-mt-4 lg:-translate-y-28"
              sizes="(min-width: 640px) 288px, 224px"
            />
            <div className="group relative z-20 mb-16 -mt-3 inline-flex flex-col items-center text-3xl font-extrabold uppercase tracking-[0.2em] text-[var(--brand-orange)] sm:text-4xl lg:mb-20 lg:-mt-8">
              <span className="relative drop-shadow-[0_10px_24px_rgba(255,90,31,0.18)] transition-transform duration-300 group-hover:-translate-y-1">
                We care
              </span>
              <span
                aria-hidden="true"
                className="mt-3 h-1.5 w-24 rounded-full bg-[var(--brand-orange)] shadow-[0_10px_28px_rgba(255,90,31,0.28)] transition-all duration-300 group-hover:w-32"
              />
            </div>

            <div className="relative -mt-16 flex min-h-[720px] w-full items-center justify-center sm:-mt-28 sm:min-h-[900px] lg:-mt-56">
              <div className="absolute inset-x-0 top-16 h-96 rounded-full bg-[rgba(8,103,201,0.20)] blur-3xl" />
              <div className="relative z-10 h-[700px] w-[min(92vw,384px)] sm:h-[880px] sm:w-[483px]">
                {features.map((feature, index) => (
                  <Image
                    key={feature.image}
                    src={feature.image}
                    width={1080}
                    height={1350}
                    alt={
                      index === activeIndex
                        ? `${feature.title} screen in PetVitals`
                        : ""
                    }
                    aria-hidden={index !== activeIndex}
                    className={[
                      "absolute inset-0 h-full w-full object-contain drop-shadow-2xl transition-opacity duration-300 ease-out",
                      index === activeIndex ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    loading="eager"
                    sizes="(min-width: 640px) 483px, 384px"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
