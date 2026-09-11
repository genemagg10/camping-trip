import { trip } from "@/lib/trip";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink px-4 py-10 text-foam">
      <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-2xl text-cream">{trip.outfitter}</p>
          <p className="mt-2 max-w-md text-foam/85">
            {trip.city} · {trip.river} · {trip.camp}
          </p>
          <p className="mt-4 text-sm text-foam/70">{trip.holdLine}</p>
        </div>
        <div className="text-sm sm:text-right">
          <p>
            <a className="underline decoration-gold/70 underline-offset-3" href={trip.website}>
              whitewaterexcitement.com
            </a>
          </p>
          <p className="mt-2">
            <a className="underline decoration-gold/70 underline-offset-3" href={trip.phoneHref}>
              {trip.phone}
            </a>
          </p>
          <p className="mt-6 text-foam/60">
            Photos from the outfitter&apos;s public marketing pages. Patch art
            is den-made for this flyer — not an official BSA emblem.
          </p>
        </div>
      </div>
    </footer>
  );
}
