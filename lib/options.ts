import type { ScheduleIcon } from "@/lib/copy";
import { photos, type ImageAsset } from "@/lib/trip";

export type CaptionPhoto = ImageAsset & {
  caption: string;
  credit: string;
  creditHref: string;
};

export type Beat = {
  time: string;
  title: string;
  detail: string;
  icon: ScheduleIcon;
};

export type DayPlan = {
  id: string;
  label: string;
  beats: Beat[];
};

export type Fact = { label: string; value: string };
export type LinkItem = { label: string; href: string };
export type CostLine = { label: string; amount: string };

export type FamilyAddon = {
  kicker: string;
  title: string;
  paragraphs: string[];
  prices: { name: string; detail: string; price: string }[];
  extra: string;
  photo: CaptionPhoto;
  links: LinkItem[];
};

export type TripOption = {
  id: string;
  number: string;
  kicker: string;
  title: string;
  place: string;
  lede: string;
  why: string[];
  photo: CaptionPhoto;
  days: DayPlan[];
  afterDaysNote?: string;
  addon?: FamilyAddon;
  logistics: Fact[];
  gear: string[];
  maps: LinkItem[];
  costs: CostLine[];
  costTotal: string;
  costNote: string;
  aol: string;
  pros: string[];
  cons: string[];
  questions: string[];
  sources: LinkItem[];
};

const outdoorAdventurer: LinkItem = {
  label: "Outdoor Adventurer",
  href: "https://www.scouting.org/cub-scout-adventures/outdoor-adventurer/",
};

const aolAdventures: LinkItem = {
  label: "Arrow of Light adventures",
  href: "https://www.scouting.org/programs/cub-scouts/adventures/arrow-of-light/",
};

const baloo: LinkItem = {
  label: "Cub Scout outdoor program and BALOO",
  href: "https://www.scouting.org/programs/cub-scouts/leader-resources/pack-meeting-resources/outdoors/",
};

const ageChart: LinkItem = {
  label: "BSA Age-Appropriate Guidelines, form 680-685 (August 2024)",
  href: "https://filestore.scouting.org/filestore/HealthSafety/pdf/680-685.pdf",
};

export const options: TripOption[] = [
  {
    id: "angel-island",
    number: "1",
    kicker: "Option 1 · Bay overnight",
    title: "Angel Island",
    place: "Angel Island State Park",
    lede: "An overnight den campout on Angel Island, in the middle of San Francisco Bay. We get there by ferry, haul the gear to an environmental campsite, and spend Saturday on the summit and the history.",
    why: [
      "An island, a ferry before the tents, and a hike to 788 feet with the bridge and the city in view. For 10 and 11 year olds that is a last-Cub story they will actually remember. The perimeter road is about 5 paved miles, shared with bikes, and the park welcomes wagons on it. Mt. Livermore is the hike. We do not try to do both in one day.",
      "These are environmental campsites, not a lodge and not a car camp. Each numbered site has a table, a food locker, running water, a pit toilet, and a barbecue. No showers. Nine numbered sites hold up to 8 people. Sunrise sites 7, 8, and 9 sit together and can be combined for up to 24. East Bay sites 1, 2, and 3 are more sheltered from the wind. Ridge sites 4, 5, and 6 are windier, with Golden Gate views. Kayak Camp, near Camp Reynolds on the west side, holds up to 20 and you do not have to arrive by kayak. The ADA site is only if someone in the party qualifies. The service campsite is for a service project arranged with the park, not our path.",
      "There is no wood fire anywhere on the island. Charcoal or a camp stove only, and the dads run it. April nights on the bay are cold. That is a real trade, not a footnote. Battery lanterns. Food goes in the locker, because the raccoons are experienced.",
    ],
    photo: {
      ...photos.angel,
      caption:
        "Angel Island from the air, Ayala Cove on the near shore and the San Francisco skyline beyond.",
      credit: "Taras Bobrovytsky, CC0, via Wikimedia Commons",
      creditHref:
        "https://commons.wikimedia.org/wiki/File:Angel_Island_(California).jpg",
    },
    days: [
      {
        id: "angel-fri",
        label: "Friday",
        beats: [
          {
            time: "Afternoon",
            title: "Drive to Tiburon",
            detail:
              "About 40 miles from Lafayette, roughly 55 to 60 minutes when the roads are kind. A Friday afternoon is not kind. Angel Island Tiburon Ferry is at 21 Main Street. Lot A, if the 2021 parking sheet still matches the machine, is $15 for three days.",
            icon: "pack",
          },
          {
            time: "Ferry",
            title: "Campers' boat, if it exists",
            detail:
              "The April 2027 Tiburon timetable is not posted. A September shoulder schedule had weekday boats at 10 a.m., 11 a.m., and 1 p.m., plus a 3 p.m. campers-only boat. We do not count on a Friday boat until the spring calendar is up. Golden Gate Ferry from the San Francisco Ferry Building is the backup. Buy that round trip before you board. Tickets are not sold on the island, and Blue and Gold tickets are not valid on the Golden Gate run.",
            icon: "ferry",
          },
          {
            time: "Hike-in",
            title: "Wagons, then tents",
            detail:
              "There is no park cart fleet we can count on. Bring a folding wagon. Sites can sit up to about 2.5 miles from the dock, some of it uphill, and the climb can be over 300 feet. Sunrise 7, 8, and 9 are the ones that sit together if we booked two of them.",
            icon: "tent",
          },
          {
            time: "Evening",
            title: "Dinner, no wood fire",
            detail:
              "Charcoal on the site barbecue, or a stove, and an adult owns the match. Battery lanterns. Dinner the den packed. Stories if people still have voices. Historic buildings are not a night hike. Some of those areas are closed after sunset.",
            icon: "lantern",
          },
        ],
      },
      {
        id: "angel-sat",
        label: "Saturday",
        beats: [
          {
            time: "Morning",
            title: "Mt. Livermore",
            detail:
              "Sunset Trail is a little over 3 miles one way and about 800 feet of gain, to the Caroline Livermore summit at 788 feet. North Ridge is the steeper cousin, about 3.5 miles with a long stair. Pick one. That is the day.",
            icon: "hike",
          },
          {
            time: "Afternoon",
            title: "Immigration Station, or Camp Reynolds",
            detail:
              "The barracks museum is $5 for an adult and $3 for youth ages 5 to 17, under 5 free, and the hours are limited. A group of 10 or more should reserve. Camp Reynolds, the old West Garrison, is a free walk if the museum is full or closed. The Nike missile site on the south side is a Sunday idea, not a second Saturday summit.",
            icon: "hunt",
          },
          {
            time: "Evening",
            title: "Second dinner at camp",
            detail:
              "Same kitchen, same locker, same lack of a campfire. A paper time capsule if we want one: a short letter, sealed, opened later when the den decides. Paper, not a speech.",
            icon: "letter",
          },
        ],
      },
      {
        id: "angel-sun",
        label: "Sunday",
        beats: [
          {
            time: "Morning",
            title: "A short piece of the road",
            detail:
              "Pack first. If legs are willing, walk toward the Nike site. The grounds are walkable. Inside tours are occasional, so we check the week of the trip. Bikes only if we brought them, and anyone under 18 wears a helmet. The tram, when it runs, is an Angel Island Company extra and it is not in the budget.",
            icon: "bike",
          },
          {
            time: "Late morn",
            title: "Ferry home",
            detail:
              "Back to Tiburon or to the San Francisco Ferry Building, depending on which boat we trusted on Friday. Soft hold ends at the dock.",
            icon: "ferry",
          },
        ],
      },
    ],
    logistics: [
      {
        label: "Drive",
        value:
          "Tiburon: about 40 miles and 55 to 60 minutes. San Francisco Ferry Building: about 20 miles and 30 to 50 minutes. Both are a routing estimate from Lafayette, not a live traffic quote. Friday afternoon runs longer.",
      },
      {
        label: "Lodging",
        value:
          "Two environmental campsites (up to 8 people each) for Friday and Saturday night, or one Kayak Camp reservation (up to 20). ReserveCalifornia. A new arrival date opens six months to the day, at 8:00 a.m. Pacific. April 23, 2027 opens Friday, October 23, 2026. The parks page labels that hour PST, so be logged in a few minutes early and stay a few minutes. Reservation fee is $8.25. These sites go fast.",
      },
      {
        label: "Site price",
        value:
          "State Parks lists environmental camping starting at $25 a night. This worksheet uses $30, because published notes from campers sit nearer $30, and Kayak Camp's exact rate is not in that same 'starting at' line. Max stay is 7 nights. We need two.",
      },
      {
        label: "Water and fire",
        value:
          "Running water and a pit toilet at each site. No showers. No wood fires anywhere on the island. Charcoal or a camp stove only.",
      },
      {
        label: "Tiburon ferry",
        value:
          "Angel Island Tiburon Ferry, (415) 435-2131. Round trip fares posted since August 1, 2023: adult 13 to 64 is $18, child 6 to 12 is $15, ages 3 to 5 are $6, under 2 free. The ticket includes park admission. No Clipper. Buy the round trip. November and December weekday service from Tiburon has been thin, which is why the Friday boat is an open question for April.",
      },
      {
        label: "SF ferry",
        value:
          "Golden Gate Ferry from the Ferry Building. One way: adult 19 to 64 is $15.50, youth is $8, and park entrance is included. A pair's round trip is about $47, bought before boarding. Do not buy a Blue and Gold ticket for this run.",
      },
      {
        label: "Gear haul",
        value:
          "Up to about 2.5 miles from the dock, some of it uphill. Bring a folding wagon. Perimeter Road is paved, about 5 miles, and wagons are welcome on it.",
      },
    ],
    gear: [
      "Tent, sleeping bag, pad, and a warmer layer than you think. There is no wood fire, and the bay wind is real.",
      "A folding wagon or a backpack that can take a hike-in of up to 2.5 miles, some of it uphill.",
      "A cooler that fits the wagon. Food goes in the site locker, not the tent.",
      "Charcoal and a chimney, or a stove the dads run. No firewood. Battery lanterns.",
      "Water bottles. There is a spigot at the site and there is no shower.",
      "The Friday ferry time, written down. Phones are patchy on the island.",
      "Bikes and helmets only if we commit to bikes. Anyone under 18 wears a helmet.",
    ],
    maps: [
      {
        label: "Directions to the Tiburon ferry",
        href: "https://www.google.com/maps/dir/Lafayette,+CA/21+Main+Street,+Tiburon,+CA",
      },
      {
        label: "Directions to the SF Ferry Building",
        href: "https://www.google.com/maps/dir/Lafayette,+CA/San+Francisco+Ferry+Building",
      },
    ],
    costs: [
      { label: "Two sites, 2 nights, at $30", amount: "$20" },
      { label: "Two reservation fees, $8.25 each", amount: "$3" },
      { label: "Tiburon ferry, adult $18 + child $15", amount: "$33" },
      { label: "Lot A parking, three-day rate", amount: "$15" },
      { label: "Food we pack", amount: "$50" },
      { label: "Immigration Station, adult $5 + youth $3", amount: "$8" },
      { label: "Gas, about 80 miles round trip", amount: "$15" },
    ],
    costTotal: "About $145",
    costNote:
      "The honest range is $140 to $170 for one Scout and one adult, each pair driving to Tiburon. Six pairs assumed, so the site fee and the two $8.25 reservation fees are already split. A second adult adds a ferry ticket and food, and parking if they bring their own car. The San Francisco ferry backup is about $47 a pair before parking, so it costs more. A cafe meal, a bike rental, or the tram is seasonal and not in this number. The 2021 parking sheet ($5 a day, $10 for two days, $15 for three in Lot A) needs a confirm before we treat $15 as fact.",
    aol: "This can cover the campout pieces of Outdoor Adventurer: a gear list, the Scout Basic Essentials, finding the site on a map before we go, setting up the kitchen and the tents, food in the locker, and a Leave No Trace conversation after. It counts only if a BALOO-trained adult is with the den and we plan those pieces on purpose. It does not finish the rank. The hike or a bike loop can feed an elective such as Into the Woods or Into the Wild if one is still open. Six required adventures and two electives make the rank. A weekend does not.",
    pros: [
      "Closest drive of the three, and the ferry makes the trip feel started before the tents go up.",
      "A real summit, history they can walk through, and the bay from the campsite.",
      "Running water and a toilet at the site.",
      "Clean rules fit: day hike, day bike, a commercial ferry, and a den campout.",
    ],
    cons: [
      "No wood fire, and April nights on the bay are cold.",
      "Gear haul with wagons, some of it uphill.",
      "A numbered site holds 8, so the den needs two reservations, or Kayak Camp as one.",
      "Wind, fog, and a Friday boat that is not on a calendar yet.",
      "The booking morning will be crowded. Miss 8 a.m. and the good sites are gone.",
    ],
    questions: [
      "Two Sunrise or East Bay sites, or one Kayak Camp reservation for the whole den?",
      "Does the spring timetable include a Friday boat from Tiburon?",
      "Is Angel Island on our council's approved camping list, or do we need a tour plan?",
      "Who is the BALOO-trained adult?",
      "Is the tram running that weekend, or are we on foot and, if we choose, bikes?",
      "Does the 2021 Tiburon parking sheet still match the machine?",
    ],
    sources: [
      {
        label: "Angel Island State Park",
        href: "https://www.parks.ca.gov/?page_id=468",
      },
      {
        label: "Angel Island Conservancy, camping",
        href: "https://angelisland.org/visitor-information/boating-camping/",
      },
      {
        label: "State Parks reservation FAQ (six-month window, 8:00 a.m.)",
        href: "https://www.parks.ca.gov/?page_id=29676",
      },
      {
        label: "ReserveCalifornia",
        href: "https://www.reservecalifornia.com/",
      },
      {
        label: "Perimeter Road",
        href: "https://www.parks.ca.gov/?page_id=1313",
      },
      {
        label: "Angel Island Tiburon Ferry fares",
        href: "https://angelislandferry.com/tickets-fares",
      },
      {
        label: "Tiburon ferry parking sheet (2021, confirm)",
        href: "https://angelislandferry.com/wp-content/uploads/2021/10/AITFerry-Parking.pdf",
      },
      {
        label: "Golden Gate Ferry, Angel Island",
        href: "https://www.goldengate.org/ferry/angel-island-ferry/",
      },
      outdoorAdventurer,
      baloo,
      ageChart,
    ],
  },
  {
    id: "coloma",
    number: "2",
    kicker: "Option 2 · Den camp, private boat after",
    title: "Coloma campout",
    place: "Lotus and Marshall Gold Discovery",
    lede: "An official den campout at the Whitewater Excitement camp in Lotus. Saturday is gold panning and a hike at Marshall Gold Discovery State Historic Park. After the den campout ends, a family that wants a raft can book one on its own. That boat is not a Scout event.",
    why: [
      "The Scouts still get a river weekend: a real camp, a pan of gravel, and a Saturday about the gold rush. Marshall Gold is where the 1848 discovery is interpreted. Recreational panning on the east side of the river is included with day-use admission. Hands and pans only. No dredge, no extra river fee.",
      "The camp is the one this weekend used to point at. Whitewater Excitement, 6580 Highway 49, Lotus, CA 95651. Camping is $15 a person a night, by phone, with shared bathrooms, hot showers, and flush toilets across five camp areas. Check-in is 5:30 p.m., or the night before if they agree. Quiet time is 10 p.m. Campfires are allowed when their fire permit is on, and that permit can be pulled. Tent rentals are extra and not in the base price: a 2-person dome is $15 a night, a 4-person is $25, a cabin tent is $80.",
      "The raft comes off the den. The outfitter still runs family Class II-III trips, and the ages and prices are written below so a dad can decide for his own kids. No den flag, no uniforms, and no group booking dressed up as a pack event. Each family pays the outfitter. Parents are responsible for their own kids.",
    ],
    photo: {
      ...photos.camp,
      caption: "Canvas tents at the Whitewater Excitement camp in Lotus.",
      credit: "Whitewater Excitement marketing photo",
      creditHref:
        "https://whitewaterexcitement.com/our-american-river-private-camp-beautiful/",
    },
    days: [
      {
        id: "coloma-fri",
        label: "Friday · den",
        beats: [
          {
            time: "Afternoon",
            title: "Drive to Lotus",
            detail:
              "About 120 miles, about 2 to 2.5 hours when US-50 is moving. A Friday can run longer. This is a routing estimate, not a live traffic quote.",
            icon: "pack",
          },
          {
            time: "5:30 p.m.",
            title: "Check in and set up",
            detail:
              "Their private camp, not a state park site. Hot showers and flush toilets. Bring the den's own tents unless we decide to rent theirs.",
            icon: "tent",
          },
          {
            time: "Evening",
            title: "Den dinner, and a fire if the permit is on",
            detail:
              "Dads tend the fire. The Scouts can help build it. Fire building and cooking outdoors are on the age chart for Arrow of Light. A stove or a lantern that burns fuel stays in adult hands. The age chart marks fueled devices for Scouts BSA and older.",
            icon: "camp",
          },
        ],
      },
      {
        id: "coloma-sat",
        label: "Saturday · den",
        beats: [
          {
            time: "Morning",
            title: "Gold panning at Marshall Gold",
            detail:
              "A short hop from Lotus. Day use is $10 a car. Pan on the east side of the river, across the Mount Murphy Bridge, during park hours. Trough lessons run most days at 10, 11, 1, 2, and 3, at $12 a person, first come. Spring school groups can fill them. Call the park at (530) 622-3069 before we count on a lesson. The museum desk is (530) 622-3470.",
            icon: "pan",
          },
          {
            time: "Afternoon",
            title: "Mill, town, maybe a ridge",
            detail:
              "Spring hours, March 1 through the Friday before Memorial Day, are 8 a.m. to 6 p.m. The museum is 9 a.m. to 5 p.m. from March through October. Walk the mill and the town. A Monroe Ridge hike only if we confirm the distance and the heat the week of the trip.",
            icon: "hike",
          },
          {
            time: "Evening",
            title: "Last den campfire of the Cub years",
            detail:
              "If the permit allows. Time-capsule letters on paper, sealed, opened later when the den decides. No ceremony built around a paddle.",
            icon: "letter",
          },
        ],
      },
      {
        id: "coloma-sun",
        label: "Sunday · den ends",
        beats: [
          {
            time: "Morning",
            title: "Breakfast and Leave No Trace",
            detail:
              "Eat, pack the den gear, and leave the site better than we found it. That reflection is part of the campout requirement if we are using the weekend for Outdoor Adventurer.",
            icon: "utensils",
          },
          {
            time: "Late morn",
            title: "The den campout ends",
            detail:
              "Families headed home, head home. A family that booked its own Sunday afternoon raft stays as a private customer of the outfitter. The den event is over.",
            icon: "pack",
          },
        ],
      },
    ],
    afterDaysNote:
      "The den campout ends late Sunday morning. What follows is not a Scout event.",
    addon: {
      kicker: "Private family add-on · not a den activity",
      title: "A raft only if your own family books it",
      paragraphs: [
        "A family may book Whitewater Excitement on its own, after this campout is over. No uniforms, no den flag, and no den name on the reservation. Each family pays the outfitter. Parents are responsible for their own kids.",
        "These are published family prices for Class II-III trips, ages 7 and up, not a den package. From early March through Memorial Day they may raise the minimum age to 12 when the water is up. April 23 sits inside that window. They issue wetsuits and splash jackets before Memorial Day when the water wants them. Confirm the live price and the live age minimum before anyone pays.",
        "A Sunday afternoon half-day is the trip that can follow a late-morning ending. A full-day Gorge trip or the Whole River trip puts in during the morning, so that family would leave the den event on Saturday night.",
        "Checkout discounts on their site (5% at 6 people, 10% at 12, 15% at 24) belong to whoever is on that private reservation. They are not a den rate, and they are not a reason to book as a unit.",
      ],
      prices: [
        {
          name: "Gorge, 1 day",
          detail: "Class II-III, ages 7 and up",
          price: "$119 to $149",
        },
        {
          name: "PM half day",
          detail: "Class II-III, ages 7 and up",
          price: "$99 to $119",
        },
        {
          name: "Whole River",
          detail: "Class II-III, ages 7 and up",
          price: "$139 to $169",
        },
      ],
      extra:
        "A Scout and a Dad on the PM half-day is about $198 to $238 extra, on top of the den weekend. A family that adds it is roughly $370 to $440 all-in. That number is theirs, not the den's.",
      photo: {
        ...photos.familyRaft,
        caption:
          "A Whitewater Excitement family trip on the South Fork. This is a private booking, not a den activity.",
        credit: "Whitewater Excitement marketing photo",
        creditHref:
          "https://whitewaterexcitement.com/river/south-fork-american-river-rafting-trips/",
      },
      links: [
        {
          label: "South Fork family trips and prices",
          href: "https://whitewaterexcitement.com/river/south-fork-american-river-rafting-trips/",
        },
        {
          label: "Call the camp, 800.750.2386",
          href: "tel:8007502386",
        },
      ],
    },
    logistics: [
      {
        label: "Drive",
        value:
          "About 120 miles and 2 to 2.5 hours from Lafayette to Lotus, when US-50 is moving. Routing estimate, not a live traffic quote. Coloma is a similar drive. Marshall Gold is a short hop from the camp.",
      },
      {
        label: "Den lodging",
        value:
          "Whitewater Excitement private campground, GPS 38.817646, -120.928499. $15 a person a night. Call 800.750.2386. Reservations required. Open question, and it matters: will they rent the camp to a den that is not booking rafts?",
      },
      {
        label: "Backup beds",
        value:
          "Camp Lotus or another private campground in Coloma. Marshall Gold Discovery State Historic Park does not offer camping.",
      },
      {
        label: "Saturday program",
        value:
          "Marshall Gold Discovery. Day use $10 a car ($9 for seniors 62 and older). Bring a pan or buy one at the Marshall Gold Mercantile. Park phone (530) 622-3470. Group questions (530) 622-3069.",
      },
      {
        label: "Fire",
        value:
          "Only when the outfitter's fire permit is on. Dads tend it. Have a no-fire version of Saturday night ready.",
      },
      {
        label: "Den window",
        value:
          "Friday afternoon through Sunday late morning. The den event is over before any private boat.",
      },
    ],
    gear: [
      "Ordinary car-camping kit. The camp has bathrooms and hot showers.",
      "The den's own tents, unless we pay extra to rent theirs.",
      "A gold pan, or cash for one at the mercantile, plus clothes that can get muddy.",
      "Layers. April in the foothills can be hot at 2 p.m. and cold at 8.",
      "Den food for Friday dinner through Sunday breakfast.",
      "Firewood only if their permit is on and they are not already selling bundles. Ask when we call.",
      "If a family stays for a private raft, that family packs as customers of the outfitter. The den does not bring a flag, and the Scouts do not stay in uniform for a boat that is not ours.",
    ],
    maps: [
      {
        label: "Directions to the Whitewater Excitement camp",
        href: "https://www.google.com/maps/dir/Lafayette,+CA/6580+Highway+49,+Lotus,+CA+95651",
      },
      {
        label: "Marshall Gold Discovery State Historic Park",
        href: "https://www.google.com/maps/dir/Lafayette,+CA/Marshall+Gold+Discovery+State+Historic+Park",
      },
    ],
    costs: [
      { label: "Camp, $15 x 2 nights x 2 people", amount: "$60" },
      { label: "Food we pack", amount: "$50" },
      { label: "Marshall Gold day use, one car", amount: "$10" },
      { label: "Pan or a trough lesson", amount: "$12" },
      { label: "Gas, about 240 miles", amount: "$50" },
    ],
    costTotal: "About $180",
    costNote:
      "Range about $170 to $200 for the den campout, one Scout and one adult, each pair driving. Six pairs assumed. Carpooling cuts the day-use line and the gas line. A rented 4-person tent at $25 a night is extra and not included. A private raft is not included. Add about $198 to $238 if a family puts one Scout and one Dad on the Sunday PM half-day, and remember the spring age minimum may be 12.",
    aol: "Same Outdoor Adventurer campout pieces as the island: gear, map, kitchen, tents, food safety, and a Leave No Trace reflection after, with a BALOO-trained adult and a plan. Gold panning and a ridge hike can support Into the Wild or Into the Woods if an elective is still open. Fire building and cooking outdoors are checked for Webelos and Arrow of Light. None of that attaches to a boat. The rank is six required adventures plus two electives. This weekend can feed the campout. It does not finish Arrow of Light by itself.",
    pros: [
      "Gold in a pan is the kind of Saturday a 10-year-old retells.",
      "We already know this camp and this drive.",
      "A real campfire is possible, if the permit holds.",
      "A family that wants a boat can still have one, on their own, after the den is done.",
    ],
    cons: [
      "The rafting wow is not a den wow. The den wow is the gold and the camp.",
      "Two nights at $15 a person adds up faster than a site we split.",
      "Spring water can bump a private trip's minimum age to 12.",
      "We have to ask, out loud, whether the camp is available without a raft booking.",
      "Friday traffic on US-50 does not care about our soft hold.",
    ],
    questions: [
      "Will Whitewater Excitement rent the camp to a group that is not buying raft seats?",
      "If they will not, is Camp Lotus or another Coloma campground open that weekend?",
      "Do we want trough lessons, and can they hold a group, or do we just pan on our own?",
      "Which ridge hike is the right length once we see the heat?",
      "Who is the BALOO-trained adult, and is this camp on the council list?",
      "Which families, if any, are staying after the den ends, and do they understand the booking is theirs?",
    ],
    sources: [
      {
        label: "Whitewater Excitement, South Fork trips",
        href: "https://whitewaterexcitement.com/river/south-fork-american-river-rafting-trips/",
      },
      {
        label: "Whitewater Excitement camp",
        href: "https://whitewaterexcitement.com/our-american-river-private-camp-beautiful/",
      },
      {
        label: "Marshall Gold Discovery State Historic Park",
        href: "https://www.parks.ca.gov/?page_id=484",
      },
      {
        label: "Gold panning at Marshall Gold",
        href: "https://www.parks.ca.gov/?page_id=26840",
      },
      outdoorAdventurer,
      aolAdventures,
      baloo,
      ageChart,
    ],
  },
  {
    id: "pinnacles",
    number: "3",
    kicker: "Option 3 · The one I would pick",
    title: "Pinnacles",
    place: "East side campground, Pinnacles National Park",
    lede: "A den campout on the east side of Pinnacles National Park, then a day hike through Bear Gulch, the talus cave trail under the rockfall, if the park has it open. This is a maintained trail with a flashlight. It is not a caving trip.",
    why: [
      "Late April is the Pinnacles window. The lower Bear Gulch cave may be open from April 1 to about mid-May. It then closes for Townsend's big-eared bat pups, and a warm spring can close the whole cave earlier. Wildflowers and California condors are the bonus. The campground pool, when it is open, is not on our plan.",
      "I looked hard at the other ideas before landing here. USS Hornet in Alameda is closer, and a weekend group of 10 or more is $100 a person with dinner and breakfast included. It is one night on the ship, not a Friday-to-Sunday campout. Organized Scout groups need a $1 million certificate of insurance naming the Aircraft Carrier Hornet Foundation, plus a council tour permit, and they ask for 1 adult to 6 youth once the kids are 10 or older. Great program. Wrong shape for this weekend. Point Reyes hike-in camps are overnight backcountry, and that row on the age chart is Scouts BSA and older. A canoe weekend sounds right until you read Cub Paddle Craft: council or district events, flat water, warm air, warm water, no real wind, and not run as a trip. Late April on a Bay Area lake usually fails that test. Redwoods are legal and beautiful, and they are a quieter story than walking a trail the park built through a cave.",
      "So this is the one I would pick if we want the most adventure that still fits. The campground is on the east side only. There is no road between the east entrance and the west. Group sites hold up to 20 people and 5 vehicles, tents only, a short walk of about 50 to 250 feet from the parking. If the group sites are already gone, ordinary tent sites are the backup, and those book on a later calendar.",
      "Bear Gulch stays a hike. The age chart reserves caving, other than simple novice activities, for older Scouts. We stay on the trail, every person carries a flashlight, and we turn around if a section is closed or flooded. Low ceilings and slippery rock are in the park's trail notes. They are not an invitation to explore off the trail.",
    ],
    photo: {
      ...photos.pinnacles,
      caption:
        "Rock spires and spring hills along the Bear Gulch trail. This frame is the hike, not the cave interior.",
      credit: "Ken Lund, CC BY-SA 2.0, via Wikimedia Commons",
      creditHref:
        "https://commons.wikimedia.org/wiki/File:Bear_Gulch_Cave_Trail,_Pinnacles_National_Park,_California_(13414046363).jpg",
    },
    days: [
      {
        id: "pinn-fri",
        label: "Friday",
        beats: [
          {
            time: "Midday",
            title: "Leave Lafayette",
            detail:
              "About 130 miles and roughly 3 hours to the east entrance at 5000 East Entrance Road, Paicines. Friday traffic on 680 and 101 can add 30 to 60 minutes. Routing estimate, not a live quote. There is no shortcut to the east side through the west entrance. The park roads do not connect.",
            icon: "pack",
          },
          {
            time: "1:00 p.m.",
            title: "Check in",
            detail:
              "Group site if we got one. Tents only. No RVs, trailers, or motorhomes on a group site. Five vehicles, and extra cars use the overnight lot. Picnic table, fire ring, water nearby. The camp store is open about 9:30 to 5. Camping questions go to Pinnacles Recreation Company at (831) 200-1722. The park is (831) 389-4486.",
            icon: "tent",
          },
          {
            time: "Evening",
            title: "Den dinner",
            detail:
              "A fire in the ring only if current conditions allow it. Buy wood at the store. Do not collect it. Battery lanterns either way. Dads run any stove that burns fuel.",
            icon: "lantern",
          },
        ],
      },
      {
        id: "pinn-sat",
        label: "Saturday",
        beats: [
          {
            time: "Morning",
            title: "Get to the Bear Gulch trailhead",
            detail:
              "The trailhead is about 4 miles up East Entrance Road from the gate, near the nature center. Drive, or ride a spring shuttle if one is running. Do not start the cave by hiking the 3-plus miles from camp and calling that the warm-up. Weekend parking at Bear Gulch fills.",
            icon: "pack",
          },
          {
            time: "Midday",
            title: "Moses Spring to Rim, about 2.2 miles",
            detail:
              "Moderate, about 500 feet of gain, and it is the way into Bear Gulch Cave. Every person carries a flashlight, with spare batteries in somebody's pack. If the cave is closed, we still hike to the reservoir on the rim. Check the cave status page the week of the trip. A page that says open today is not a promise for April 2027.",
            icon: "hike",
          },
          {
            time: "Afternoon",
            title: "Back to camp",
            detail:
              "Condor watch from the benches if any are up. Watch, and leave them alone. Rest. The pool stays off the plan even if it has opened for the season.",
            icon: "hunt",
          },
          {
            time: "Evening",
            title: "Second dinner",
            detail:
              "Same kitchen rules as Friday. Quiet hours are the park's. We do not invent a louder one.",
            icon: "utensils",
          },
        ],
      },
      {
        id: "pinn-sun",
        label: "Sunday",
        beats: [
          {
            time: "Morning",
            title: "A short walk, then out",
            detail:
              "South Wilderness is a short walk from camp. The Bench Trail is the other easy option. Then pack. Checkout is 11 a.m.",
            icon: "hike",
          },
          {
            time: "Midday",
            title: "Home",
            detail:
              "About 3 hours back to Lafayette, more if the Bay is stacked up.",
            icon: "pack",
          },
        ],
      },
    ],
    logistics: [
      {
        label: "Drive",
        value:
          "About 130 miles and roughly 3 hours from Lafayette to the east entrance. Routing estimate, not live traffic. East side only.",
      },
      {
        label: "Lodging",
        value:
          "Pinnacles Campground, operated by Pinnacles Recreation Company. Group site preferred: up to 20 people, 5 vehicles, tents only, in the group loop. Check-in 1 p.m., checkout 11 a.m. Coin showers, a dump station, and a store.",
      },
      {
        label: "Book",
        value:
          "recreation.gov campground 234015, or (877) 444-6777. No first-come sites. The National Park Service says group sites can be reserved up to 12 months ahead, so an April 23, 2027 arrival may have opened around April 23, 2026. Check this week. Tent and RV sites open up to 6 months ahead, so an April 23 arrival opens October 23, 2026. Recreation.gov often releases new dates at 7:00 a.m. Pacific. Confirm that clock on the campground page before anyone sets an alarm.",
      },
      {
        label: "Entrance",
        value:
          "$30 a vehicle, good for 7 days. An Interagency pass is accepted. Every Kid Outdoors is a 4th-grade pass, and these Scouts are in 5th, so it does not cover this trip.",
      },
      {
        label: "Cave",
        value:
          "Lower cave may be open from April 1 to about mid-May, then the cave closes for bat pups and can close earlier in a warm spring. The upper cave is rarely open. Flooding closes it too. Flashlights required. Check the status page the week of the trip.",
      },
      {
        label: "Fires",
        value:
          "Only when the park says so. Buy wood. Collecting firewood is prohibited. Pets may be in the campground on a leash. Pets are not allowed on the trails, so this is not a dog hike.",
      },
    ],
    gear: [
      "Car-camping kit. A group site is a short walk from the cars.",
      "A flashlight or headlamp for every person, plus spare batteries, if we hope to enter the cave.",
      "Sturdy shoes. The cave trail is rocky and can be wet.",
      "A warm bag. April nights in the rocks are real.",
      "Food for Friday dinner through Sunday breakfast. The store closes around 5 p.m.",
      "A few dollars for coin showers.",
      "Firewood only if the park says fires are allowed. Do not collect wood.",
      "An Interagency pass, if a family already has one. It covers the $30 vehicle entrance.",
    ],
    maps: [
      {
        label: "Directions to the east entrance campground",
        href: "https://www.google.com/maps/dir/Lafayette,+CA/5000+East+Entrance+Road,+Paicines,+CA+95043",
      },
    ],
    costs: [
      {
        label: "Group site, 2 nights, split six ways",
        amount: "$40 to $50",
      },
      { label: "Entrance, about three cars for six pairs", amount: "$15" },
      { label: "Food we pack", amount: "$55" },
      { label: "Gas, two pairs sharing a car", amount: "$30" },
    ],
    costTotal: "About $150 to $200",
    costNote:
      "One Scout and one adult. Six pairs sharing one group site and carpooling in about three cars lands near $150 when the site is around $110 a night. The recreation.gov gateway currently lists this campground from $44 to $139 a night, so two nights at the top of that range is about $46 a pair before entrance, food, and gas, and the total climbs toward $200. If each pair drives, add entrance and gas and expect the top of the range. The 2012 park fee table (tents $23, group sites $75 or $110) is stale. Do not budget from it. A 2026 camper note put group sites near $110 plus a weekend surcharge. Confirm the live rate on recreation.gov before we treat any of these dollars as final. Coin showers are extra and small.",
    aol: "Outdoor Adventurer again: the campout pieces, on purpose, with a BALOO-trained adult. Into the Wild is the elective that fits without stretching, if the den still needs one. Condors and bats are the lesson, watched and left alone. We do not write 'caving' on any advancement report. The age chart gives caving, other than simple novice activities, to older Scouts only. This is a day hike on a park trail.",
    pros: [
      "The most adventurous weekend on this list that still fits the rules.",
      "One reservation can hold the whole den, up to 20 people.",
      "Cars park close. No ferry, and no two-mile gear haul.",
      "Late April weather here is the kindest of the three.",
    ],
    cons: [
      "Group sites may already be gone. The 12-month window has been open for months.",
      "The cave can close for bats or high water, and the weekend still has to be good without it.",
      "About 3 hours each way.",
      "The published fee table is stale, so the budget stays a range until we see the live rate.",
      "We have to keep calling it a hike. The moment it becomes a caving trip, it is off the chart for these Scouts.",
    ],
    questions: [
      "Is a group site still open for April 23 to 25, 2027, and what is the live nightly rate?",
      "If the group site is gone, can we get enough tent sites when they open on October 23, 2026?",
      "What does the cave status page say the week of the trip?",
      "Is a spring shuttle running, or do we shuttle ourselves and leave the extra cars at camp?",
      "Are fires allowed that weekend?",
      "Council approved-campsite list, and who is the BALOO-trained adult?",
    ],
    sources: [
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
      {
        label: "USS Hornet Live Aboard (the option I did not pick)",
        href: "https://uss-hornet.org/tours-and-programs/live-aboard-adventure/",
      },
      {
        label: "Cub Paddle Craft (why a canoe weekend lost)",
        href: "https://www.scouting.org/cub-scout-adventures/paddle-craft/",
      },
      outdoorAdventurer,
      aolAdventures,
      baloo,
      ageChart,
    ],
  },
];
