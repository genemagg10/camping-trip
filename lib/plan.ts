import type { ScheduleIcon } from "@/lib/copy";
import { campout } from "@/lib/campout";

/**
 * Final campout plan for the booked Pinnacles weekend.
 * Adventure status stays "tbd" until Gene marks a line done.
 * Do not infer completion from the roster, Scoutbook, or a packing list.
 */

export type AdventureStatus = "tbd" | "done";

export type PlanGoal = {
  id: string;
  title: string;
  ref: string;
  summary: string;
  detail: string;
  status: AdventureStatus;
};

export type PlanBeat = {
  time: string;
  title: string;
  detail: string;
  icon: ScheduleIcon;
};

export type PlanDay = {
  id: string;
  label: string;
  date: string;
  summary: string;
  beats: PlanBeat[];
};

export const planMeta = {
  kicker: "Arrow of Light final campout",
  shout: "The last Cub weekend",
  title: "What this weekend is for",
  lede: "Pinnacles Campground is booked for April 30 to May 2. The pitch still compares April 23 to 25. This is the Arrow of Light plan for the reserved weekend, written in the adventures Scouting America published for 5th grade after June 2024. Webelos is 4th grade now. The two ranks do not share electives, and this is not the old Webelos Camper list.",
  statusNote:
    "Every gold stamp says TBD. That is on purpose. Nothing on this page is a claim that an adventure is finished. Gene can mark a line done later, when he knows what the den has already signed off.",
} as const;

export const bookingFacts: { label: string; value: string }[] = [
  { label: "Dates", value: `${campout.datesLong}. Two nights, which is the Cub overnight maximum.` },
  {
    label: "Group site",
    value: `${campout.site} in ${campout.siteLoop}. It holds ${campout.peopleCap} people and ${campout.groupVehicles} vehicles. Tents only.`,
  },
  {
    label: "Tent site",
    value: `${campout.tentSite} is booked ${campout.tentDistance} from the group site, in the cluster of ${campout.tentCluster}. ${campout.otherLoop} is a different loop, and it is not our booking. A regular tent site holds ${campout.regularSitePeople}.`,
  },
  {
    label: "Reservation",
    value: `${campout.reservation}. Free to cancel until ${campout.cancelBy}.`,
  },
];

export const rank = {
  title: "The rank, in the current program",
  body: "Arrow of Light is the 5th-grade Cub den or patrol. It is not a troop. Crossover into Scouts BSA comes after the rank is earned. To earn it, a Scout completes 6 required adventures and any 2 electives. The required adventures are Bobcat, Outdoor Adventurer, Personal Fitness, Citizenship, First Aid, and Duty to God. Outdoor Adventurer is the only required adventure that needs an overnight.",
} as const;

export const campoutJobs: PlanGoal[] = [
  {
    id: "oa-5-8",
    title: "Outdoor Adventurer, on the campout",
    ref: "Required · requirements 5 to 8",
    summary:
      "Camp with the patrol, set the site with patrol gear first, run the three-pot wash, and close with Start, Stop, Continue.",
    detail:
      "Requirement 5 is the campout itself, with this patrol or with a Scouts BSA troop. Requirement 6 is the layout on arrival: kitchen, eating area, tents, and the fire pit, and the patrol gear goes up before anyone's own tent. Requirement 7 is food safety and a sanitary kitchen, shown on the trip. The activity for that is the three-pot wash. Requirement 8 is after camp: what to start, what to stop, what to continue, and how the patrol followed the Outdoor Code and the Leave No Trace Principles for Kids. Requirements 1 to 4 happen at home before we leave.",
    status: "tbd",
  },
  {
    id: "pf-1",
    title: "A balanced meal the Scouts cook",
    ref: "Personal Fitness · requirement 1",
    summary:
      "Plan it, then cook it on camp gear. The den meal is celiac-safe. A pocketknife waits until Knife Safety is earned.",
    detail:
      "Plan a balanced meal you would actually eat while camping, then prepare it with camp gear. Saturday dinner is that meal. It is gluten-free on purpose: labeled ingredients, a clean pan, and a board that has not touched regular bread. The den pot is the safe meal, not a side plate after someone else's pasta. If a Scout has not earned Knife Safety, an adult does the cutting. Personal Fitness also asks for a 30-minute stretch-and-move (requirement 3). The 14-day fitness log is requirement 2, and it does not fit this weekend. The health form is requirement 4, and it is a home job.",
    status: "tbd",
  },
  {
    id: "bobcat-7",
    title: "A troop visit, only if it is still open",
    ref: "Bobcat · requirement 7",
    summary:
      "Visit a Scouts BSA troop for a day or an overnight. A joint troop overnight can pair with Outdoor Adventurer 5. Skip it if Bobcat 7 is already signed off.",
    detail:
      "With the patrol, or with a parent or legal guardian, visit a Scouting America troop. A daytime activity counts. An overnight with a troop also counts, and it can be the same night as Outdoor Adventurer 5. Arrow of Light Scouts on a troop overnight still follow Cub camping rules, with two-deep leadership from this den or pack and a BALOO-trained adult. If this requirement is already done, we do not invent a troop visit for the weekend. Bobcat 8, the parent guide, stays at home.",
    status: "tbd",
  },
  {
    id: "knife-4",
    title: "A useful thing made with a pocketknife",
    ref: "Knife Safety · requirement 4 · elective",
    summary:
      "Only if Knife Safety is the elective in progress, and only after requirements 1 to 3. An older Whittling or Chef's Knife adventure does not count.",
    detail:
      "Requirement 4 is the one that has to happen on a campout: use a pocketknife properly to make a useful object. A walking stick or a roasting stick is the shape of the published activities. Do it only if this elective is one of the two the den is actually finishing, and only after requirements 1 to 3 (the rules, the safety circle, and care of the knife). Bear Whittling and Webelos Chef's Knife do not grant knife use for Arrow of Light. If the elective is not in progress, knives stay with the adults and this block comes off the afternoon.",
    status: "tbd",
  },
];

export const weave: PlanGoal[] = [
  {
    id: "pf-3",
    title: "Thirty minutes of stretch and move",
    ref: "Personal Fitness · requirement 3",
    summary: "A Saturday opening block with the patrol. Stretching and moving. It is not the same thing as the Bear Gulch hike.",
    detail:
      "Be active for 30 minutes with the patrol in a way that includes both stretching and moving. We will do that after flags, as its own block. The Bear Gulch hike is longer than 30 minutes, and it is the nature elective, not a substitute for the stretch.",
    status: "tbd",
  },
  {
    id: "citizenship-2",
    title: "Service, only if the plan already exists",
    ref: "Citizenship · requirement 2",
    summary:
      "Two hours total, at camp only if requirement 1 was planned before we left. A Leave No Trace job can be the work.",
    detail:
      "Requirement 1 is identifying the project and planning it with the SAFE checklist. That happens before the drive. Requirement 2 is taking part for at least two hours, and the hours can be split across projects. If the plan exists, Sunday can be a Leave No Trace or conservation job at camp. If nobody planned it, we do not start the clock on a cleanup and call it Citizenship.",
    status: "tbd",
  },
  {
    id: "nature",
    title: "One nature elective",
    ref: "Into the Woods or Into the Wild",
    summary:
      "Pick one, if the den still needs an elective. Bear Gulch is a hike on a park trail, not a caving trip.",
    detail:
      "The den needs any two electives, not every elective. One of them can be Into the Woods or Into the Wild, and Saturday morning is the place for it. Moses Spring to the rim is about 2.2 miles and about 500 feet of gain, and it is the way to the Bear Gulch talus cave trail when the park has it open. Every person carries a flashlight. If the cave is closed, we still hike to the reservoir. We stay on the trail. Condors and bats are watched and left alone. We do not write caving on any advancement report.",
    status: "tbd",
  },
  {
    id: "first-aid",
    title: "A short First Aid refresh",
    ref: "First Aid · only if it is still open",
    summary: "A reminder of what the den already learned. Not a first teach from scratch, and not the whole adventure in one afternoon.",
    detail:
      "If First Aid is not signed off, the afternoon skill block can be a short refresh of the pieces the patrol already knows. It is not a full teach, and it does not share the afternoon with Knife Safety and the service project. One block.",
    status: "tbd",
  },
];

export const notThisWeekend: string[] = [
  "Duty to God. A reverent minute at the campfire, or a Scout's Own on Sunday, is not a sign-off.",
  "Bobcat 8, the booklet How to Protect Your Children from Child Abuse: A Parent's Guide. That is a home conversation.",
  "The Protect Yourself Rules video.",
  "Personal Fitness requirement 2, the 14-day log of being active for 30 minutes.",
  "Stuffing the rest of the electives into one weekend. Two electives finish the rank. More can wait.",
];

export const beforeWeLeave: string[] = [
  "Outdoor Adventurer 1 to 4: Scout Basic Essentials, what to pack and how to carry it, the four points of the SAFE checklist for this site, and the campsite found on a map.",
  "Personal Fitness 4: each Scout reviews the Scouting America Annual Health and Medical Record with a parent or legal guardian. Bring a copy. Note food allergies, including anyone who needs celiac-safe meals, and make sure a second adult knows an EpiPen if someone carries one.",
  "A BALOO-trained adult on the campout, two-deep leadership, and Hazardous Weather training current for at least one leader.",
  "Confirm the campground is on our council's designated Cub camping list. Cub overnight camping stays on council-designated sites. This page does not record that confirmation.",
  "Knife Safety 1 to 3, if any pocketknife is coming. Otherwise adults do every cut.",
  "Citizenship 1, if we want Sunday service hours to count.",
  "Gluten-free staples, a clean pan, and a separate board. Meals the Scouts cook are celiac-safe.",
  "This is a den overnight: the Arrow of Light Scouts in this den, their parents, and registered leaders. A sibling who is still in another Cub rank is not part of a den campout. A pack campout is the family format. Cub camping stops at two consecutive nights. Friday to Sunday is that maximum.",
];

export const rules: string[] = [
  "Fires only if the park allows them, and a Cub campfire stays adult-supervised. Buy wood at the store. Do not collect it. If the ring stays cold, we use the same circle with lanterns.",
  "Bear Gulch is a maintained hike. It is not a caving trip. Turn around if a section is closed, flooded, or beyond the group.",
  "Quiet hours are the park's. Checkout is 11 a.m. Check-in is 1 p.m.",
  "We still do not know the pack, troop, or den number, or how many people are coming past the 20 on the group site. Yes responses on the RSVP page are the headcount. Tent site #130 is the extra room we already hold.",
];

export const days: PlanDay[] = [
  {
    id: "fri",
    label: "Friday",
    date: "April 30",
    summary:
      "Arrive at Loop G, set patrol gear before personal tents, eat an easy gluten-free dinner, learn the three-pot wash, and turn in early.",
    beats: [
      {
        time: "Afternoon",
        title: "East entrance, then Loop G",
        detail:
          "About 130 miles and roughly 3 hours from Lafayette to 5000 East Entrance Road, Paicines. Friday traffic on 680 and 101 can add 30 to 60 minutes. There is no road from the west entrance to this campground. Check-in is 1 p.m.",
        icon: "pack",
      },
      {
        time: "Arrival",
        title: "Site layout, patrol gear first",
        detail:
          "Group site #127 is Loop G. Tent site #130 is about 90 meters away, with sites 130 to 134. Loop C, sites 57 to 61, is not us. Outdoor Adventurer 6: agree on the kitchen, the eating area, the tents, and the fire pit. Patrol gear goes up before personal tents. Five vehicles at the group site. Extra cars use the overnight lot.",
        icon: "tent",
      },
      {
        time: "Evening",
        title: "Easy dinner and the wash",
        detail:
          "A simple hot meal, gluten-free by default, with a clean pan and a board that has not touched regular bread. Then the three-pot wash, which is Outdoor Adventurer 7. Dads run any stove that burns fuel. The camp store closes around 5 p.m.",
        icon: "utensils",
      },
      {
        time: "Night",
        title: "A short opening, then lights out",
        detail:
          "Scout Oath, Scout Law, jobs, the weather, and buddies. Name who is BALOO and who the buddies are. Early lights out. Battery lanterns if the park has closed the fire ring.",
        icon: "lantern",
      },
    ],
  },
  {
    id: "sat",
    label: "Saturday",
    date: "May 1",
    summary:
      "Flags and a 30-minute stretch, Bear Gulch as a hike, one afternoon skill, a Scout-cooked dinner, and a campfire if the park allows it.",
    beats: [
      {
        time: "Morning",
        title: "Flags, then stretch and move",
        detail:
          "Personal Fitness 3 is 30 minutes with the patrol that includes stretching and moving. It stands on its own, before we drive to the trailhead. It is not absorbed into the hike.",
        icon: "hike",
      },
      {
        time: "Midday",
        title: "Bear Gulch, as a hike",
        detail:
          "The trailhead is about 4 miles up East Entrance Road, near the nature center. Drive, or ride a spring shuttle if one is running. Do not add a 3-mile walk from camp and call that the warm-up. Moses Spring to the rim is about 2.2 miles, moderate, about 500 feet of gain. Every person carries a flashlight, with spare batteries in a pack. If the talus cave is closed, we hike to the reservoir. Check the cave status page the week of the trip. This is Into the Woods or Into the Wild, one of them, and only if that elective is still open. It is not caving.",
        icon: "hike",
      },
      {
        time: "Afternoon",
        title: "One skill block",
        detail:
          "Pick one: Knife Safety 4, a short First Aid refresh, or the start of service hours that were planned at home. Not all three at full length. Rest after the rocks. The pool stays off the plan. Condors are watched and left alone.",
        icon: "hunt",
      },
      {
        time: "Evening",
        title: "The meal the Scouts cook",
        detail:
          "Personal Fitness 1, cooked with camp gear, and another pass at the sanitary kitchen for Outdoor Adventurer 7. Balanced, and celiac-safe: gluten-free ingredients, a dedicated pan, no shared bread on that surface. Adults cut if Knife Safety is not earned.",
        icon: "utensils",
      },
      {
        time: "Night",
        title: "Campfire, or a lantern circle",
        detail:
          "Only if the park says the ring is open, and an adult runs it. Songs, a Good Turn reflection, and an optional reverent minute. That minute is not Duty to God. If fires are banned, we do the same circle with lanterns. Quiet hours are the park's.",
        icon: "lantern",
      },
    ],
  },
  {
    id: "sun",
    label: "Sunday",
    date: "May 2",
    summary:
      "A gluten-free breakfast, service only if it was planned, Start / Stop / Continue, and a checkout that leaves time for a wet tent.",
    beats: [
      {
        time: "Morning",
        title: "Breakfast, and maybe a Scout's Own",
        detail:
          "Breakfast is celiac-safe, same kitchen rules as Saturday. A Scout's Own is optional. It is not a Duty to God sign-off.",
        icon: "utensils",
      },
      {
        time: "Morning",
        title: "Service, if Citizenship 1 is done",
        detail:
          "Leave No Trace or a conservation job at camp, toward the two hours, and only if the patrol planned the project before we left. If the plan was never made, we pack a clean site and we do not pretend the hour counted.",
        icon: "hunt",
      },
      {
        time: "Late morning",
        title: "Start, Stop, Continue",
        detail:
          "Outdoor Adventurer 8, before we are in the cars. What to start, what to stop, what to continue. Include the Outdoor Code and the Leave No Trace Principles for Kids. Then patrol gear comes down.",
        icon: "letter",
      },
      {
        time: "11 a.m.",
        title: "Checkout, with a wet-tent buffer",
        detail:
          "Checkout is 11 a.m. Leave time to dry or pack a wet tent. South Wilderness is the short walk from camp if the morning is ahead of schedule. It is not a second program. About 3 hours back to Lafayette, more if the Bay is stacked up.",
        icon: "pack",
      },
    ],
  },
];

export const planSources: { label: string; href: string }[] = [
  {
    label: "Arrow of Light adventures",
    href: "https://www.scouting.org/programs/cub-scouts/adventures/arrow-of-light/",
  },
  {
    label: "Outdoor Adventurer",
    href: "https://www.scouting.org/cub-scout-adventures/outdoor-adventurer/",
  },
  {
    label: "Webelos and Arrow of Light at a glance (June 2024)",
    href: "https://www.scouting.org/program-updates/webelos-and-arrow-of-light-at-a-glance/",
  },
  {
    label: "Arrow of Light to Scouts BSA",
    href: "https://www.scouting.org/program-updates/arrow-of-light-to-scouts-bsa/",
  },
  {
    label: "Bobcat, Arrow of Light",
    href: "https://www.scouting.org/cub-scout-adventures/bobcat-aol/",
  },
  {
    label: "Personal Fitness",
    href: "https://www.scouting.org/cub-scout-adventures/personal-fitness/",
  },
  {
    label: "Citizenship",
    href: "https://www.scouting.org/cub-scout-adventures/citizenship/",
  },
  {
    label: "First Aid",
    href: "https://www.scouting.org/cub-scout-adventures/first-aid/",
  },
  {
    label: "Knife Safety",
    href: "https://www.scouting.org/cub-scout-adventures/knife-safety/",
  },
  {
    label: "Into the Woods",
    href: "https://www.scouting.org/cub-scout-adventures/into-the-woods/",
  },
  {
    label: "Into the Wild",
    href: "https://www.scouting.org/cub-scout-adventures/into-the-wild/",
  },
  {
    label: "Guide to Safe Scouting, camping",
    href: "https://www.scouting.org/health-and-safety/gss/gss03/",
  },
  {
    label: "Pinnacles camping",
    href: "https://www.nps.gov/pinn/planyourvisit/camping.htm",
  },
  {
    label: "Bear Gulch cave status",
    href: "https://www.nps.gov/pinn/planyourvisit/cavestatus.htm",
  },
  {
    label: "recreation.gov, Pinnacles Campground",
    href: "https://www.recreation.gov/camping/campgrounds/234015",
  },
];
