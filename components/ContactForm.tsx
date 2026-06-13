"use client";

import { FormEvent, useMemo, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useMemo(() => Date.now(), []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setMessage(data.message || "Thanks for submitting!");
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8"
    >
      <input type="hidden" name="startedAt" value={startedAt} />
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-[var(--foreground)]">
          Name
          <input
            required
            name="name"
            minLength={2}
            maxLength={120}
            className="rounded-lg border border-[var(--line)] px-4 py-3 text-base font-normal focus-visible:brand-focus"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--foreground)]">
          Email
          <input
            required
            name="email"
            type="email"
            maxLength={160}
            className="rounded-lg border border-[var(--line)] px-4 py-3 text-base font-normal focus-visible:brand-focus"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--foreground)]">
          Message
          <textarea
            required
            name="message"
            minLength={10}
            maxLength={4000}
            rows={6}
            className="resize-y rounded-lg border border-[var(--line)] px-4 py-3 text-base font-normal focus-visible:brand-focus"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full justify-center rounded-lg bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-orange-dark)] focus-visible:brand-focus disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>

      {message ? (
        <p
          className={`mt-4 text-sm font-semibold ${
            status === "success"
              ? "text-[var(--brand-blue-dark)]"
              : "text-[var(--brand-orange-dark)]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
