"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-white text-[var(--foreground)] shadow-sm focus-visible:brand-focus"
      >
        <span className="grid gap-1.5" aria-hidden="true">
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-20 rounded-lg border border-[var(--line)] bg-white p-3 shadow-xl">
          <nav aria-label="Mobile navigation" className="grid">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--brand-sky)] focus-visible:brand-focus"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
