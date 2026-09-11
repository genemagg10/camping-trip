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
    "Soft hold only — about $327 for Scout + Dad, nothing booked until the den says go.",
  friday: "Arrive & settle at the private river camp; easy dinner the den brings and shares; Paracord River Lanyards after dinner.",
  saturdayMorning:
    "Sat 9am Cub Scout rafting patch lesson; they certify/award the Cub Scout rafting patch, then ~14 miles of rafting + lunch.",
  saturdayRiver: "Then ~14 miles of rafting + lunch.",
  saturdayNight: "Passing the Paddle ceremony and Time Capsule Letters at the campfire.",
  patchClaim:
    "Whitewater Excitement certifies and awards the Cub Scout rafting patch (phone-confirmed; their public site lists troop Merit Badge).",
  patchBeat: "Earn the Cub Scout rafting patch.",
  sunday: "Breakfast, Micro-Trash Scavenger Hunt, pack, home.",
  campPerPersonNight: 15,
  campNights: 2,
  scoutRaft: 129,
  adultRaft: 138,
  scoutDadApprox: 327,
  mealsNote:
    "Breakfast and dinner planned as a group. Whitewater Excitement provides lunch on the rafting trip.",
  website: "https://whitewaterexcitement.com",
  phone: "800.750.2386",
  phoneHref: "tel:8007502386",
  city: "Lotus, CA",
  address: "6580 Highway 49, Lotus, CA 95651",
  homeTown: "Lafayette, CA",
  /** WWE published camp GPS (not Camp Lotus on Bassi Rd). */
  destLat: 38.817646,
  destLon: -120.928499,
  mapsDirections:
    "https://www.google.com/maps/dir/Lafayette,+CA/6580+Highway+49,+Lotus,+CA+95651",
  /** Official OSM share embed: bbox covers Lafayette + Lotus; pin is WWE. */
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-122.62%2C37.58%2C-120.48%2C39.12&layer=mapnik&marker=38.817646%2C-120.928499",
  osmLarger:
    "https://www.openstreetmap.org/?mlat=38.817646&mlon=-120.928499#map=8/38.35/-121.55",
} as const;

export const photos = {
  heroYellow: {
    src: asset("/photos/hero-yellow-helmet.jpg"),
    alt: "A Cub-age paddler in a yellow helmet riding the right side of a Whitewater Excitement raft through a splashy South Fork rapid",
    width: 3216,
    height: 2136,
  },
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
  patch: {
    src: asset("/photos/wwe-whitewater-rafting-patch.png"),
    alt: "The Whitewater Rafting patch Whitewater Excitement certifies and awards — full circular emblem with paddles, raft, and fleur-de-lis",
    width: 1200,
    height: 1200,
  },
} as const;
