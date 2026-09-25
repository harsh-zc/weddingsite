"use client";

import { FormEvent, useState } from "react";

export default function RsvpForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="mt-8 text-center font-[family-name:var(--font-display)] text-2xl text-forest">
        Thank you — we can&apos;t wait to celebrate with you.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 grid max-w-xl gap-4 text-left"
    >
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-sage">
          Your name
        </span>
        <input
          required
          name="name"
          type="text"
          className="w-full border-b border-sage/40 bg-transparent py-3 text-ink outline-none transition focus:border-champagne"
          placeholder="Full name"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-sage">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          className="w-full border-b border-sage/40 bg-transparent py-3 text-ink outline-none transition focus:border-champagne"
          placeholder="you@email.com"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-sage">
          Will you join us?
        </span>
        <select
          name="attendance"
          className="w-full border-b border-sage/40 bg-transparent py-3 text-ink outline-none transition focus:border-champagne"
          defaultValue="yes"
        >
          <option value="yes">Joyfully attending</option>
          <option value="no">Regretfully decline</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-sage">
          Message (optional)
        </span>
        <textarea
          name="message"
          rows={3}
          className="w-full resize-none border-b border-sage/40 bg-transparent py-3 text-ink outline-none transition focus:border-champagne"
          placeholder="A note for the couple…"
        />
      </label>
      <button
        type="submit"
        className="mt-4 justify-self-center bg-forest px-10 py-3.5 text-sm uppercase tracking-[0.22em] text-pearl transition hover:bg-ink"
      >
        Send RSVP
      </button>
    </form>
  );
}
