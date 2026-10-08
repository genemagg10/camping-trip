/** Visible site copy for the three-weekend pitch. No em dashes. */

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
  | "pack"
  | "ferry"
  | "hike"
  | "lantern"
  | "pan"
  | "bike";

export const copy = {
  hero: {
    shout: "Three ways to close out Cubs",
    den: "Arrow of Light den · Dads and Scouts",
    line1: "Three weekends to compare",
    line2: "Angel Island, Coloma, or Pinnacles",
    dates: "Fri Apr 23 to Sun Apr 25, 2027",
    cta: "See the three options",
    hold: "Soft hold on the dates only. Nothing is booked.",
  },
  why: {
    title: "What changed",
    p1: "I had this weekend pointed at the South Fork, with a raft trip as the thing we would bring home. Then I read the current age chart. Whitewater, even with a professional guide on the boat, is marked for Scouts BSA and older. Our Scouts are still Arrow of Light, which is still Cub Scouts. So the den is not going rafting.",
    p2: "The dates stay: Friday, April 23 through Sunday, April 25, 2027. What changed is the menu. Three real weekends, each one a den campout we can actually run, with the trade-offs written down so we can pick.",
    p3: "Nothing is booked. This is a soft hold on the calendar. Costs below assume six Scouts and six dads, one adult with each Scout, unless a line says otherwise. A smaller den moves the per-pair number. The comparison table is at the bottom, after each option has had a full say.",
  },
  rule: {
    title: "The rule, in one paragraph",
    before:
      "The BSA Age-Appropriate Guidelines (",
    linkLabel: "form 680-685, August 2024",
    href: "https://filestore.scouting.org/filestore/HealthSafety/pdf/680-685.pdf",
    middle:
      ") check \"Paddle Sports: Whitewater With Professional Guide on Board\" for Scouts BSA and older Scouts. Arrow of Light is not on that row. Youth-operated boats on Class I or II whitewater are the same: Scouts BSA and older. Cub boating, including ",
    paddleLabel: "Cub Paddle Craft",
    paddleHref: "https://www.scouting.org/cub-scout-adventures/paddle-craft/",
    after:
      ", stays on calm or gently flowing water and is not a river float trip. The Whitewater Rafting award is for Scouts BSA, Venturing, and Sea Scouts. Guide to Safe Scouting treats an activity that is off the current age chart as not allowed. We can still camp, hike, bike, ride a ferry, pan for gold, and cook outdoors.",
    moreLabel: "Whitewater Rafting award brochure (April 1, 2025)",
    moreHref:
      "https://www.scouting.org/wp-content/uploads/2025/12/WW-Rafting-brochure-4_1_25.pdf",
    gssLabel: "Guide to Safe Scouting, prohibited activities",
    gssHref: "https://www.scouting.org/health-and-safety/gss/gss07/",
  },
} as const;

export const jumps = [
  { href: "#angel-island", label: "Angel Island" },
  { href: "#coloma", label: "Coloma camp" },
  { href: "#pinnacles", label: "Pinnacles" },
  { href: "#compare", label: "Compare" },
] as const;

export const compare = {
  title: "Side by side",
  lede: "Same dates, three different weekends. Prices are per Scout plus one Dad, six pairs, and they are ranges on purpose.",
  swipe: "On a phone, swipe sideways. The topic column stays put.",
  columns: [
    { id: "angel-island", label: "Angel Island" },
    { id: "coloma", label: "Coloma camp" },
    { id: "pinnacles", label: "Pinnacles" },
  ],
  rows: [
    {
      label: "Cost, Scout + Dad",
      cells: [
        "About $140 to $170. Tiburon ferry, two sites, food we pack.",
        "Den campout about $170 to $200. A private Sunday half-day raft adds about $200 to $240, and that is not a den cost.",
        "About $150 to $200. One group site split six ways, plus entrance, food, and gas.",
      ],
    },
    {
      label: "Drive from Lafayette",
      cells: [
        "Tiburon about 40 miles and about an hour, then the ferry. SF Ferry Building about 20 miles and 30 to 50 minutes.",
        "About 120 miles and 2 to 2.5 hours to Lotus. A Friday on US-50 can run longer.",
        "About 130 miles and roughly 3 hours to the east entrance. 680 and 101 can add 30 to 60 minutes.",
      ],
    },
    {
      label: "Booking",
      cells: [
        "Hard. ReserveCalifornia opens Apr 23, 2027 on Fri Oct 23, 2026 at 8:00 a.m. Pacific.",
        "Medium. Call the camp. No release-day lottery. Ask if they will rent it without a raft booking.",
        "Group sites can book 12 months out, so check this week. Tent sites for an Apr 23 arrival open Oct 23, 2026.",
      ],
    },
    {
      label: "Wow",
      cells: [
        "High. An island, a summit, and the bay.",
        "Medium for the den: gold in a pan and a river camp. The raft is a private extra after we are done.",
        "Highest, if Bear Gulch is open. A cave trail and condors.",
      ],
    },
    {
      label: "Rules fit",
      cells: [
        "Strong. Hike, bike, ferry, camp. No whitewater. Confirm the council camping list.",
        "Strong for the campout, if the raft stays a private family trip after the den ends.",
        "Strong if we hike the trail and do not call it caving. Confirm the council camping list.",
      ],
    },
    {
      label: "Weather risk",
      cells: [
        "Wind, fog, and cold nights, with no wood fire. Ferries can cancel.",
        "Foothills can be warm or wet. Spring flow can raise a private trip's age minimum to 12. A fire permit can be pulled.",
        "Best odds of the three in late April. The cave can still close for bats or water. Fires only if the park allows them.",
      ],
    },
  ],
} as const;

export const still = {
  title: "What we still need to figure out",
  lede: "Nothing is booked. These are the questions that pick the weekend, or that block a reservation once we pick.",
  items: [
    "Which of the three we are actually doing.",
    "Headcount, so the per-pair math is real. Everything above assumes six Scouts and six dads.",
    "Who the BALOO-trained adult is. An Arrow of Light den campout needs one.",
    "Whether the campsite is on our council's approved list, or whether we need a tour plan. That question sits on all three.",
    "Angel Island: two environmental sites or Kayak Camp, and whether the spring timetable has a Friday Tiburon boat.",
    "Coloma: will Whitewater Excitement rent the camp to a den that is not booking rafts? If not, Camp Lotus or another Coloma campground.",
    "Pinnacles: is a group site still open for April 23 to 25, 2027, and what does it cost tonight on recreation.gov?",
    "If we need a release-day alarm, who is logged in at 8:00 a.m. Pacific on Friday, October 23, 2026. That morning opens Angel Island, and it opens Pinnacles tent sites. Pinnacles group sites will not wait for it.",
  ],
} as const;
