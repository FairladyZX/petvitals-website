import Image from "next/image";
import Link from "next/link";
import { AppStoreButtons } from "./AppStoreButtons";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/petvitalsapp/" },
  { label: "Facebook", href: "https://www.facebook.com/petvitalsapp/" },
  { label: "Twitter", href: "https://twitter.com/petvitalsapp" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#f8fbff]">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
        <div>
          <Image
            src="/assets/PetVitalsLogo.png"
            width={125}
            height={87}
            alt="PetVitals"
            className="h-24 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
            {siteConfig.tagline}. A friendly pet health organizer for records,
            reminders, routines, and everyday care.
          </p>
          <AppStoreButtons className="mt-6" />
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--foreground)]">
            Product
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            <Link href="/features" className="hover:text-[var(--brand-blue-dark)]">
              Features
            </Link>
            <Link href="/blog" className="hover:text-[var(--brand-blue-dark)]">
              Blog
            </Link>
            <Link href="/#faq" className="hover:text-[var(--brand-blue-dark)]">
              F.A.Q.
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--foreground)]">
            Company
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            {siteConfig.companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[var(--brand-blue-dark)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-px mx-auto flex max-w-7xl flex-col gap-4 border-t border-[var(--line)] py-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 PetVitals. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--brand-blue-dark)]">
            {siteConfig.email}
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--brand-blue-dark)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
