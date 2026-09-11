"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
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
  in: "I'm interested",
  maybe: "Leaning yes",
  out: "Not this time",
};

export function Rsvp() {
  const saved = useSyncExternalStore(subscribeRsvp, readRsvp, () => null);
  const [form, setForm] = useState<RsvpRecord>(emptyRsvp);

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
    <section id="rsvp" className="mx-auto w-full max-w-xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-2xl font-bold tracking-wide text-river uppercase">
        Leave a hand-raise
      </h2>
      <p className="mt-2 text-[1.02rem] leading-relaxed text-ink/80">
        {trip.holdLine} Saved in this browser only — not a booking.
      </p>

      {saved ? (
        <div className="mt-5 rounded-xl bg-mist px-4 py-4">
          <p className="font-display text-xl font-bold text-forest uppercase">
            {labels[saved.interest]} — {saved.family}
          </p>
          <p className="mt-1 text-sm text-ink/75">
            {saved.scouts} Scout{saved.scouts === 1 ? "" : "s"} · {saved.adults}{" "}
            adult{saved.adults === 1 ? "" : "s"}
            {saved.notes ? ` · “${saved.notes}”` : ""}
          </p>
          <button
            type="button"
            onClick={() => {
              clearRsvp();
              setForm({ ...saved, savedAt: "" });
            }}
            className="mt-3 text-sm font-semibold text-river underline underline-offset-4"
          >
            Rewrite the card
          </button>
        </div>
      ) : (
        <form className="mt-5 grid gap-3" onSubmit={onSubmit}>
          <label className="grid gap-1 text-sm font-semibold">
            Family name
            <input
              required
              value={form.family}
              onChange={(e) => setForm({ ...form, family: e.target.value })}
              name="family"
              autoComplete="name"
              placeholder="The River Household"
              className="rounded-lg border border-mist bg-foam px-3 py-3 text-base font-normal outline-none focus:border-sky"
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
                className="rounded-lg border border-mist bg-foam px-3 py-3 text-base font-normal outline-none focus:border-sky"
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
                className="rounded-lg border border-mist bg-foam px-3 py-3 text-base font-normal outline-none focus:border-sky"
              />
            </label>
          </div>
          <fieldset className="grid gap-2">
            <legend className="text-sm font-semibold">How in are you?</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {(["in", "maybe", "out"] as const).map((value) => (
                <label
                  key={value}
                  className={`cursor-pointer rounded-lg border px-3 py-2.5 text-center text-sm font-semibold ${
                    form.interest === value
                      ? "border-gold bg-gold/20"
                      : "border-mist bg-foam"
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
            Notes (optional)
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={2}
              className="rounded-lg border border-mist bg-foam px-3 py-3 text-base font-normal outline-none focus:border-sky"
            />
          </label>
          <button
            type="submit"
            className="min-h-11 justify-self-start rounded-full border border-mist px-5 text-sm font-semibold text-ink"
          >
            Save on this device
          </button>
        </form>
      )}
    </section>
  );
}
