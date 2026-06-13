import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/92 backdrop-blur">
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-visible:brand-focus">
          <Image
            src="/assets/PetVitalsLogo.png"
            width={125}
            height={87}
            alt="PetVitals"
            priority
            className="h-16 w-auto"
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--brand-blue-dark)] focus-visible:brand-focus"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#download"
          className="hidden rounded-lg bg-[var(--brand-orange)] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-orange-dark)] focus-visible:brand-focus md:inline-flex"
        >
          Download
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}
