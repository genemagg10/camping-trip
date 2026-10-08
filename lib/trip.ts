import { asset } from "@/lib/asset";

/** Soft-hold weekend shared by all three options. Nothing is booked. */
export const trip = {
  den: "Arrow of Light den",
  dates: "Fri Apr 23 to Sun Apr 25, 2027",
  datesShort: "Fri Apr 23 to Sun Apr 25, 2027",
  homeTown: "Lafayette, CA",
  hold: "Soft hold on the dates only. Nothing is booked.",
  headcount:
    "Costs assume six Scouts and six dads (one adult with each Scout) unless a line says otherwise.",
} as const;

export type ImageAsset = {
  src: string;
  alt: string;
};

export const photos = {
  angel: {
    src: asset("/photos/angel-island.jpg"),
    alt: "Aerial of Angel Island in San Francisco Bay, with Ayala Cove on the near shore and the San Francisco skyline beyond",
  },
  camp: {
    src: asset("/photos/cabin-tents.jpg"),
    alt: "Canvas cabin tents and picnic tables at the Whitewater Excitement camp in Lotus",
  },
  pinnacles: {
    src: asset("/photos/pinnacles-bear-gulch.jpg"),
    alt: "Rock spires and spring hills along the Bear Gulch trail in Pinnacles National Park",
  },
  familyRaft: {
    src: asset("/photos/half-day-raft.jpg"),
    alt: "Guides and guests paddling a blue raft through whitewater on a Whitewater Excitement family trip",
  },
} as const satisfies Record<string, ImageAsset>;
