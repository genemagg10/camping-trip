import { ExtLink } from "@/components/ExtLink";
import { trip } from "@/lib/trip";

export function SiteFooter() {
  return (
    <footer className="border-t border-mist px-4 py-8 text-sm text-ink/75 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-bold tracking-wide text-river uppercase">
            {trip.den}
          </p>
          <p>
            {trip.datesShort} · {trip.homeTown}
          </p>
          <p className="mt-1 max-w-md text-pretty">{trip.hold} No RSVP on this page.</p>
        </div>
        <p className="max-w-sm text-pretty sm:text-right">
          The den is not going rafting. Photo credits and the price sources live in{" "}
          <ExtLink href="https://github.com/genemagg10/camping-trip/blob/main/SOURCE.md">
            SOURCE.md
          </ExtLink>
          .
        </p>
      </div>
    </footer>
  );
}
