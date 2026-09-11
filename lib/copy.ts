import { trip } from "@/lib/trip";

/** CONTENT_POLISH_V1 — den-leader copy. Do not invent extra program. */
export const copy = {
  hero: {
    shout: "Last camping trip of the year!",
    den: "Arrow of Light den · Dads and Scouts",
    river: trip.river,
    place: `${trip.outfitter}, ${trip.city}`,
    dates: trip.dates,
    cta: "Earn the Cub rafting patch",
    hold: `Soft hold only · about $${trip.scoutDadApprox} for Scout + Dad · nothing booked until the den says go`,
  },
  // WHY_THIS_TRIP_V1 — Gene locked. Do not paraphrase, shorten, or rewrite.
  why: {
    title: "Why this trip",
    p1: "This is the last overnight our boys will have as Cub Scouts before they cross into Scouts BSA, and it feels like the right way to mark that. We'd spend two nights at Whitewater Excitement's private river camp, where we'll have real bathrooms, hot showers, and the South Fork running right alongside us. On Saturday morning the boys earn their Cub Scout rafting patch, which the outfitter certifies and awards on site, and then we push off for about fourteen miles down the river, stopping to eat lunch out on the water. Nothing has been booked yet and is currently under a soft hold, but I can confirm as soon as we're ready.",
    p2: "The camp itself has everything we'd need to keep things easy: bathrooms, hot showers, fire rings, picnic tables, and the sound of the river never far off. Saturday is the big day, starting with the rafting patch lesson and award and building into those fourteen miles on the South Fork with lunch along the way. When we come back from rafting we can keep the fun going with some activities and food around the camp fire. We can come up with some activities that acknowledge their final year in cub scouts and are a fun way to spend time together as a den.",
    p3: "For cost, a Scout and dad together come to around $327. That breaks down to camping at $15 per person per night for two nights, $129 for the Scout's raft, and $138 for the adult's. We would need to plan breakfast and dinner as a group, they provide lunch during the rafting trip. Again, this is all still just a soft hold for now.",
  },
  patch: {
    kicker: "Sat 9am",
    title: "Earn the Cub rafting patch",
    lesson: "Lesson Saturday at 9am.",
    award: `${trip.outfitter} certifies and awards the Cub Scout rafting patch.`,
    river: "Then about fourteen miles on the South Fork — plus lunch.",
    honest:
      "This is the Whitewater Rafting patch Whitewater Excitement certifies and awards. Phone-confirmed with the outfitter. Their public site lists the troop Merit Badge.",
  },
  gettingThere: {
    title: "Getting there · Lafayette to Lotus",
    captionBefore: "About ",
    captionFact: "120 miles / 2–2½ hours",
    captionAfter:
      " non-rush from Lafayette to Whitewater Excitement in Lotus (6580 Highway 49, Lotus, CA 95651).",
    caveat: "Friday/weekend US-50 can run longer. Not a live traffic quote.",
    mapsLabel: "Open in Maps",
    osmLabel: "View larger map",
    frameTitle:
      "OpenStreetMap of Lafayette, California to Whitewater Excitement at 6580 Highway 49, Lotus",
  },
  logistics: {
    title: "Logistics & costs",
    hold: `Soft hold · ${trip.dates}. Nothing is booked until the den says go.`,
    rows: [
      {
        label: "Camp",
        value: `$${trip.campPerPersonNight}/person/night × ${trip.campNights} nights`,
      },
      { label: "Scout raft", value: `$${trip.scoutRaft}` },
      { label: "Adult raft", value: `$${trip.adultRaft}` },
    ],
    totalLabel: "Scout + Dad",
    totalValue: `≈ $${trip.scoutDadApprox}`,
    meals: trip.mealsNote,
    outfitter: `${trip.outfitter} · ${trip.city}`,
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

export const activitiesIntro =
  "These are a few ideas to start the brainstorm — not a fixed program. The den can keep, swap, or invent whatever fits the weekend.";

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
