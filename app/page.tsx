import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { InteractiveFeatureShowcase } from "@/components/InteractiveFeatureShowcase";
import { faqs, interactiveFeatures } from "@/data/home";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <InteractiveFeatureShowcase features={interactiveFeatures} />

      <section className="container-px -mt-16 bg-[var(--brand-sky)] pb-20 pt-8 sm:-mt-24 sm:pb-24 sm:pt-10 lg:-mt-32">
        <div className="mx-auto grid max-w-6xl gap-8">
          <div className="group rounded-lg bg-white/70 p-5 shadow-sm ring-1 ring-white/70 backdrop-blur sm:p-7">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg shadow-xl shadow-[rgba(8,103,201,0.12)]">
              <Image
                src="/assets/clutter.png"
                width={1122}
                height={1402}
                alt="Pet care clutter organized into one simple PetVitals experience"
                className="h-auto w-full object-contain transition duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 1100px, 92vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[rgba(23,32,51,0.76)] via-[rgba(23,32,51,0.24)] to-transparent p-6 opacity-0 transition duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 sm:p-8">
                <p className="max-w-3xl translate-y-3 text-base font-semibold leading-8 text-white transition duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
                  PetVitals focuses on an intuitive app experience, clear
                  routines, and quick access to the health information you need
                  when care decisions matter.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center text-center">
              <p className="text-3xl font-extrabold uppercase tracking-[0.2em] text-[var(--brand-orange)] drop-shadow-[0_10px_24px_rgba(255,90,31,0.16)] sm:text-4xl">
                We simplify
              </p>
              <span
                aria-hidden="true"
                className="mt-3 h-1.5 w-28 rounded-full bg-[var(--brand-orange)] shadow-[0_10px_28px_rgba(255,90,31,0.24)] transition-all duration-300 group-hover:w-36"
              />
            </div>
          </div>
          <CTASection showImage={false} />
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
