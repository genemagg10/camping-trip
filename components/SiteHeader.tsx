import { trip } from "@/lib/trip";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4">
      <p className="font-display text-[0.95rem] font-semibold tracking-[0.14em] text-pine uppercase">
        {trip.den}
        <span className="mt-0.5 block text-[0.72rem] tracking-[0.18em] text-ink-soft">
          neighborhood trip flyer
        </span>
      </p>
      <a
        href="#rsvp"
        className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-cream shadow-[0_6px_0_#9a4f12] transition hover:-translate-y-0.5"
      >
        We&apos;re in
      </a>
    </header>
  );
}
