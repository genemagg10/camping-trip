import { trip } from "@/lib/trip";

/** CONTENT_POLISH_V1 — den-leader copy. Do not invent extra program. */
export const copy = {
  hero: {
    shout: "Last camping trip of the year!",
    den: "Arrow of Light den · Dads and Scouts",
    river: trip.river,
    place: `${trip.outfitter}, ${trip.city}`,
    dates: trip.dates,
    cta: "I'm interested",
    hold: `Soft hold only · about $${trip.scoutDadApprox} for Scout + Dad · nothing booked until the den says go`,
    paragraph: `This is the last overnight before these Scouts cross into Scouts BSA. Two nights at ${trip.outfitter}’s private river camp — bathrooms, hot showers, the South Fork right there. Saturday morning they earn the Cub Scout rafting patch (they certify and award it), then we paddle about fourteen miles and eat lunch on the water. Soft hold only. Nothing is booked until the den says go.`,
  },
  why: {
    title: "Why this trip",
    body: "We camp at their private river camp — bathrooms, hot showers, fire rings, picnic tables, the river in earshot. Saturday is the long day: Cub Scout rafting patch lesson and award, then about fourteen miles on the South Fork with lunch. Saturday night we keep at the fire — Passing the Paddle, then Time Capsule Letters. This is a den weekend, not a corporate flyer.",
  },
  cost: `Scout + Dad lands around $${trip.scoutDadApprox}: camp $${trip.campPerPersonNight} per person per night × ${trip.campNights} nights, Scout raft $${trip.scoutRaft}, adult raft $${trip.adultRaft}. Meals are shared separately. Soft hold only.`,
  rsvp: {
    title: "Who’s in?",
    body: `Raise a hand if this weekend should happen. Soft hold only — about $${trip.scoutDadApprox} for Scout + Dad, nothing booked until the den says go. Saved in this browser. Not a booking.`,
    cta: "I'm interested",
  },
} as const;

export type DayId = "fri" | "sat" | "sun";

export type ScheduleIcon =
  | "tent"
  | "utensils"
  | "lanyard"
  | "patch"
  | "raft"
  | "camp"
  | "paddle"
  | "letter"
  | "hunt"
  | "pack";

export type ScheduleRow = {
  time: string;
  title: string;
  place: string;
  icon: ScheduleIcon;
};

export type DayCard = {
  id: DayId;
  tab: string;
  heading: string;
  subtitle: string;
  intro: string;
  rows: ScheduleRow[];
};

export const days: readonly DayCard[] = [
  {
    id: "fri",
    tab: "Fri",
    heading: "Friday, April 23",
    subtitle: "Arrive & settle",
    intro:
      "Friday we roll into Whitewater Excitement’s private river camp, pitch tents, and find the showers. Dinner is easy — the den brings and shares. After the dishes, Paracord River Lanyards at the craft station. No hour-by-hour syllabus. Just arrive and settle.",
    rows: [
      {
        time: "3:00–5:00 PM",
        title: "Check-in & camp setup",
        place: "WWE private river camp",
        icon: "tent",
      },
      {
        time: "Evening",
        title: "Easy dinner",
        place: "Campsite",
        icon: "utensils",
      },
      {
        time: "After dinner",
        title: "Paracord River Lanyards",
        place: "Campsite craft station",
        icon: "lanyard",
      },
    ],
  },
  {
    id: "sat",
    tab: "Sat",
    heading: "Saturday, April 24",
    subtitle: "Patch, river, fire",
    intro:
      "Saturday earns the weekend. Morning Cub Scout rafting patch at Whitewater Excitement — they certify it and they award it — then about fourteen miles on the South Fork plus lunch. Back to camp to dry out. After dark: Passing the Paddle, then Time Capsule Letters at the fire.",
    rows: [
      {
        time: "9:00 AM",
        title: "Cub Scout rafting patch lesson & award",
        place: "Whitewater Excitement",
        icon: "patch",
      },
      {
        time: "Morning–afternoon",
        title: "~14 miles rafting + lunch",
        place: "South Fork American River",
        icon: "raft",
      },
      {
        time: "Afternoon",
        title: "Return to camp · dry out · free time",
        place: "Private river camp",
        icon: "camp",
      },
      {
        time: "Evening",
        title: "Passing the Paddle ceremony",
        place: "Campfire",
        icon: "paddle",
      },
      {
        time: "Evening",
        title: "Time Capsule Letters",
        place: "Campfire",
        icon: "letter",
      },
    ],
  },
  {
    id: "sun",
    tab: "Sun",
    heading: "Sunday, April 25",
    subtitle: "Leave No Trace & home",
    intro:
      "Sunday is Leave No Trace and home. Breakfast at camp, a Micro-Trash scavenger hunt on the grounds, then we pack and go. No fourth activity. The river already did the work.",
    rows: [
      {
        time: "Morning",
        title: "Breakfast",
        place: "Campsite",
        icon: "utensils",
      },
      {
        time: "After breakfast",
        title: "Micro-Trash Scavenger Hunt",
        place: "Camp grounds",
        icon: "hunt",
      },
      {
        time: "Late morning",
        title: "Pack up · head home",
        place: "",
        icon: "pack",
      },
    ],
  },
] as const;

export const activities = [
  {
    title: "Paracord River Lanyards",
    when: "Fri evening",
    body: "Friday after dinner, each Scout makes a paracord river lanyard — something that clips to a PFD or pack and comes home with them. Simple knots at a camp craft station. Hands busy while the river talks.",
  },
  {
    title: "Passing the Paddle",
    when: "Sat fire",
    body: "Saturday night at the fire we pass a paddle. A few words from dads and Scouts about the river day and what’s next — Arrow of Light heading toward Scouts BSA. Den-made. Not a script from a binder.",
  },
  {
    title: "Time Capsule Letters",
    when: "Sat fire",
    body: "Same fire. Write a short letter to the Scout these kids are becoming. Seal it. Open it later, when the den decides — after they cross, or whenever it matters. Paper, not a slide deck.",
  },
  {
    title: "Micro-Trash Scavenger Hunt",
    when: "Sun morning",
    body: "Sunday morning we walk the camp and grounds looking for the tiny trash other people miss. Pack it out. Leave the river camp cleaner than we found it. Leave No Trace as a game, then we go home.",
  },
] as const;
