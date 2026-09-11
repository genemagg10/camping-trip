import { asset } from "@/lib/asset";

/** Locked trip facts — do not invent different dates, prices, or itinerary. */
export const trip = {
  den: "Arrow of Light den",
  title: "Cub Scout Arrow of Light den trip",
  outfitter: "Whitewater Excitement",
  river: "South Fork American River",
  camp: "private campground (bathrooms + hot showers)",
  dates: "Fri Apr 23 – Sun Apr 25",
  holdLine:
    "Soft hold only — nothing is committed. This page gauges den interest.",
  friday: "Arrive, tent camp, easy dinner (own gear / own food).",
  saturdayMorning:
    "Sat 9am Cub Scout rafting patch lesson; they certify/award the Cub Scout rafting patch, then ~14 miles of rafting + lunch.",
  saturdayRiver: "Then ~14 miles of rafting + lunch.",
  saturdayNight: "Camp dinner.",
  patchClaim:
    "Whitewater Excitement certifies and awards the Cub Scout rafting patch (phone-confirmed; their public site lists troop Merit Badge).",
  patchBeat: "Earn the Cub Scout rafting patch.",
  sunday: "Breakfast, pack, home.",
  campPerPersonNight: 15,
  campNights: 2,
  scoutRaft: 129,
  adultRaft: 138,
  scoutDadApprox: 327,
  mealsNote: "Families still share meals and snacks.",
  website: "https://whitewaterexcitement.com",
  phone: "800.750.2386",
  phoneHref: "tel:8007502386",
  city: "Lotus, CA",
} as const;

export const photos = {
  hero: {
    src: asset("/photos/satans-cesspool.jpg"),
    alt: "A Whitewater Excitement raft punching through a splashy South Fork rapid",
    width: 2048,
    height: 1360,
  },
  scouts: {
    src: asset("/photos/scout-group.jpg"),
    alt: "A youth group in helmets and life jackets, paddles up, ready for the river",
    width: 2048,
    height: 1536,
  },
  family: {
    src: asset("/photos/family-raft.jpg"),
    alt: "A smiling family in yellow life jackets on a calm stretch of river",
    width: 2048,
    height: 1365,
  },
  halfDay: {
    src: asset("/photos/half-day-raft.jpg"),
    alt: "Guides and guests paddling a blue raft through whitewater",
    width: 2048,
    height: 1360,
  },
  chiliBar: {
    src: asset("/photos/chili-bar.jpg"),
    alt: "A raft crew working a lively rapid on the American River",
    width: 1800,
    height: 1196,
  },
  wholeRiver: {
    src: asset("/photos/whole-river.jpg"),
    alt: "Paddles high as a Whitewater Excitement raft drops into a rapid",
    width: 2548,
    height: 1699,
  },
  riverLine: {
    src: asset("/photos/river-portrait.jpg"),
    alt: "A line of blue rafts running whitewater on the South Fork",
    width: 1800,
    height: 1196,
  },
  tents: {
    src: asset("/photos/cabin-tents.jpg"),
    alt: "Canvas cabin tents under oak shade at the private riverside camp",
    width: 1350,
    height: 1800,
  },
  dining: {
    src: asset("/photos/dining-area.jpg"),
    alt: "Picnic tables under a dining canopy at camp",
    width: 1800,
    height: 1350,
  },
  tentInside: {
    src: asset("/photos/camp-scene.jpg"),
    alt: "Inside a platform tent: wood bunks and a made bed",
    width: 1800,
    height: 1350,
  },
  riversideTent: {
    src: asset("/photos/two-day.jpg"),
    alt: "Two campers sitting by a tent on the grassy riverbank",
    width: 2048,
    height: 1536,
  },
  riverView: {
    src: asset("/photos/river-view.jpg"),
    alt: "Morning light on the South Fork American River from camp",
    width: 1350,
    height: 1800,
  },
  gear: {
    src: asset("/photos/gear.jpg"),
    alt: "Rafts, paddles, and river gear staged at the outfitter",
    width: 2048,
    height: 1536,
  },
} as const;
