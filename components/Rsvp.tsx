"use client";

import { FormEvent, useEffect, useState, useSyncExternalStore } from "react";
import {
  clearRsvp,
  emptyRsvp,
  readRsvp,
  subscribeRsvp,
  writeRsvp,
  type Interest,
  type RsvpRecord,
} from "@/lib/rsvp";
import { trip } from "@/lib/trip";

const labels: Record<Interest, string> = {
  in: "We're in",
  maybe: "Leaning yes",
  out: "Not this time",
};

export function Rsvp() {
  const saved = useSyncExternalStore(subscribeRsvp, readRsvp, () => null);
  const [form, setForm] = useState<RsvpRecord>(emptyRsvp);
  const [ctaNode, setCtaNode] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!ctaNode) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      ctaNode.classList.add("cta-ready");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          ctaNode.classList.add("cta-ready");
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ctaNode);
    return () => io.disconnect();
  }, [ctaNode]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: RsvpRecord = {
      ...form,
      family: form.family.trim(),
      notes: form.notes.trim(),
      savedAt: new Date().toISOString(),
    };
    if (!next.family) return;
    writeRsvp(next);
  }

  return (
    <section id="rsvp" className="mx-auto w-full max-w-3xl px-4 py-14">
      <div className="paper-card rounded-[1.6rem] border-4 border-ink/10 p-5 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-stamp uppercase">
          Interest card · lives on this device
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Raise a hand. We are not taking deposits.
        </h2>
        <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">
          {trip.holdLine} This form stays in your browser (
          <code className="text-sm">localStorage</code>
          ). It feels like an RSVP because den dads need a button that does
          something. It does not email the outfitter or lock a raft.
        </p>

        {saved ? (
          <div className="mt-6 rounded-xl bg-foam px-4 py-5">
            <p className="font-display text-2xl text-pine">
              {labels[saved.interest]} — {saved.family}
            </p>
            <p className="mt-2 text-ink-soft">
              {saved.scouts} Scout{saved.scouts === 1 ? "" : "s"} · {saved.adults}{" "}
              adult{saved.adults === 1 ? "" : "s"}
              {saved.notes ? ` · “${saved.notes}”` : ""}
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Saved on this phone or laptop only. Change your mind anytime —
              this is still a soft hold.
            </p>
            <button
              type="button"
              onClick={() => {
                clearRsvp();
                setForm({ ...saved, savedAt: "" });
              }}
              className="mt-4 text-sm font-semibold text-river underline decoration-2 underline-offset-4"
            >
              Rewrite the card
            </button>
          </div>
        ) : (
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <label className="grid gap-1 text-sm font-semibold">
              Family name
              <input
                required
                value={form.family}
                onChange={(e) => setForm({ ...form, family: e.target.value })}
                name="family"
                autoComplete="name"
                placeholder="The River Household"
                className="rounded-xl border border-ink/15 bg-cream px-3 py-3 text-base font-normal outline-none ring-amber/40 focus:ring-4"
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="grid gap-1 text-sm font-semibold">
                Scouts
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={form.scouts}
                  onChange={(e) =>
                    setForm({ ...form, scouts: Number(e.target.value) })
                  }
                  className="rounded-xl border border-ink/15 bg-cream px-3 py-3 text-base font-normal outline-none ring-amber/40 focus:ring-4"
                />
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Adults
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={form.adults}
                  onChange={(e) =>
                    setForm({ ...form, adults: Number(e.target.value) })
                  }
                  className="rounded-xl border border-ink/15 bg-cream px-3 py-3 text-base font-normal outline-none ring-amber/40 focus:ring-4"
                />
              </label>
            </div>
            <fieldset className="grid gap-2">
              <legend className="text-sm font-semibold">How in are you?</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {(["in", "maybe", "out"] as const).map((value) => (
                  <label
                    key={value}
                    className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-semibold ${
                      form.interest === value
                        ? "border-amber bg-gold/30"
                        : "border-ink/15 bg-cream"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value={value}
                      checked={form.interest === value}
                      onChange={() => setForm({ ...form, interest: value })}
                      className="sr-only"
                    />
                    {labels[value]}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="grid gap-1 text-sm font-semibold">
              Notes for the den dad (optional)
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                placeholder="Need a ride share, allergic to river lunch mystery pasta, etc."
                className="rounded-xl border border-ink/15 bg-cream px-3 py-3 text-base font-normal outline-none ring-amber/40 focus:ring-4"
              />
            </label>
            <button
              ref={setCtaNode}
              type="submit"
              className="rounded-full bg-amber px-6 py-3.5 text-base font-semibold text-cream shadow-[0_6px_0_#9a4f12]"
            >
              Save our interest
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
