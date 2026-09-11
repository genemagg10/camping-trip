import { trip } from "@/lib/trip";

export function SiteFooter() {
  return (
    <footer className="border-t border-mist px-4 py-8 text-sm text-ink/75 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-bold tracking-wide text-river uppercase">
            {trip.outfitter}
          </p>
          <p>
            {trip.city} ·{" "}
            <a className="underline underline-offset-2" href={trip.website}>
              whitewaterexcitement.com
            </a>{" "}
            ·{" "}
            <a className="underline underline-offset-2" href={trip.phoneHref}>
              {trip.phone}
            </a>
          </p>
        </div>
        <p className="max-w-sm sm:text-right">
          {trip.holdLine} Photos from the outfitter’s public pages —{" "}
          <a
            className="underline underline-offset-2"
            href="https://github.com/genemagg10/camping-trip/blob/main/SOURCE.md"
          >
            SOURCE cites
          </a>
          . They certify the Cub Scout rafting patch (phone-confirmed).
          Achievement stamp is den-made — not a BSA emblem.
        </p>
      </div>
    </footer>
  );
}
