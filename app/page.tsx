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

      <section className="container-px bg-[var(--brand-sky)] py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="flex h-full flex-col justify-center rounded-lg bg-[#fff8f4] p-8 shadow-sm sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
                We simplify
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--brand-orange)] sm:text-4xl">
                No clutter. Just the pet details that matter.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--brand-orange)]">
                PetVitals focuses on an intuitive app experience, clear
                routines, and quick access to the health information you need
                when care decisions matter.
              </p>
            </div>
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-sky)] p-6 before:absolute before:left-1/2 before:top-1/2 before:h-72 before:w-64 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[var(--brand-blue-dark)] before:opacity-25 before:blur-3xl before:content-['']">
              <Image
                src="/assets/simplifiedImage.png"
                width={720}
                height={720}
                alt="PetVitals simplified app interface preview"
                className="relative z-10 mx-auto max-h-[420px] w-auto -rotate-3 object-contain drop-shadow-2xl"
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
