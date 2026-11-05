import Link from "next/link";
import { campout } from "@/lib/campout";

export function RsvpBanner() {
  return (
    <aside className="border-y-4 border-gold bg-forest text-foam">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-3xl text-pretty text-base leading-snug">
          <span className="font-extrabold tracking-wide text-gold uppercase">Booked. </span>
          {campout.place}, {campout.site} in {campout.siteLoop}, plus {campout.tentSite.toLowerCase()}{" "}
          {campout.tentDistance} away. {campout.dates}. The group site holds {campout.peopleCap}.
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Link
            href="/plan"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-gold px-5 font-extrabold text-gold"
          >
            The plan
          </Link>
          <Link
            href="/rsvp"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 font-extrabold text-ink"
          >
            RSVP
          </Link>
        </div>
      </div>
    </aside>
  );
}
