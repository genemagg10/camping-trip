/** Decided Arrow of Light campout. The pitch page still compares the earlier weekends. */

export const campout = {
  place: "Pinnacles Campground",
  site: "Group site #127",
  dates: "Fri Apr 30 to Sun May 2, 2027",
  datesLong: "Friday, April 30 through Sunday, May 2, 2027",
  peopleCap: 20,
  regularSitePeople: 6,
  groupVehicles: 5,
  endpoint: "https://kcrhxkebazpospwljpit.supabase.co/functions/v1/campout-rsvp",
} as const;

export type Attending = "yes" | "maybe" | "no";
export type Tent = "own" | "share" | "need";

export type RsvpTally = {
  responses: number;
  yesFamilies: number;
  maybeFamilies: number;
  noFamilies: number;
  yesPeople: number;
  yesAdults: number;
  yesKids: number;
  yesCars: number;
  maybePeople: number;
  maybeCars: number;
};

export const emptyTally: RsvpTally = {
  responses: 0,
  yesFamilies: 0,
  maybeFamilies: 0,
  noFamilies: 0,
  yesPeople: 0,
  yesAdults: 0,
  yesKids: 0,
  yesCars: 0,
  maybePeople: 0,
  maybeCars: 0,
};

function asCount(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return null;
  return Math.round(value);
}

/** Accept only the aggregate payload. Ignore any extra fields. */
export function parseTally(body: unknown): RsvpTally | null {
  if (!body || typeof body !== "object") return null;
  const tally = (body as { tally?: unknown }).tally;
  if (!tally || typeof tally !== "object") return null;
  const row = tally as Record<string, unknown>;
  const responses = asCount(row.responses);
  const yesFamilies = asCount(row.yes_families);
  const maybeFamilies = asCount(row.maybe_families);
  const noFamilies = asCount(row.no_families);
  const yesPeople = asCount(row.yes_people);
  const yesAdults = asCount(row.yes_adults);
  const yesKids = asCount(row.yes_kids);
  const yesCars = asCount(row.yes_cars);
  const maybePeople = asCount(row.maybe_people);
  const maybeCars = asCount(row.maybe_cars);
  if (
    responses === null ||
    yesFamilies === null ||
    maybeFamilies === null ||
    noFamilies === null ||
    yesPeople === null ||
    yesAdults === null ||
    yesKids === null ||
    yesCars === null ||
    maybePeople === null ||
    maybeCars === null
  ) {
    return null;
  }
  return {
    responses,
    yesFamilies,
    maybeFamilies,
    noFamilies,
    yesPeople,
    yesAdults,
    yesKids,
    yesCars,
    maybePeople,
    maybeCars,
  };
}
