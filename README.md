# Arrow of Light den weekends

Warm dad-postcard pitch for an Arrow of Light den (Cub Scouts, about 10 to 11).
The weekend on the calendar is **Fri Apr 23 to Sun Apr 25, 2027**. Nothing is booked.
There is no RSVP form.

The den is not going whitewater rafting. The BSA Age-Appropriate Guidelines
(form 680-685, August 2024) check guided whitewater, and youth-operated Class I
or II whitewater, for Scouts BSA and older. Arrow of Light is still Cub Scouts.
Cub boating stays on calm water. This page asks the dads to compare three
weekends they can actually run.

## Three options

Costs below are ballparks for one Scout and one Dad, assuming six pairs.
Sources and the open questions are on the page. Photo credits are in
[`SOURCE.md`](./SOURCE.md).

1. **Angel Island.** Environmental campsites, ferry from Tiburon (SF Ferry
   Building as backup), Mt. Livermore, Immigration Station, no wood fires.
   About **$140 to $170**. ReserveCalifornia opens April 23, 2027 on
   **Friday, October 23, 2026, at 8:00 a.m. Pacific**.
2. **Coloma campout.** Official den camp at Whitewater Excitement in Lotus
   ($15 a person a night) with gold panning at Marshall Gold Discovery.
   About **$170 to $200** for the den. After the den campout ends Sunday
   late morning, a family may book its own Class II-III raft. That boat is
   not a Scout event. Each family pays the outfitter. A Sunday PM half-day
   is about **$99 to $119** a person extra. No Cub rafting patch, no den
   branding on the water.
3. **Pinnacles (the pick).** East-side campground and a Bear Gulch day hike
   through the talus cave trail, if the park has it open. This is a hike,
   not a caving trip. About **$150 to $200**. Group sites can be reserved
   up to 12 months ahead, so check recreation.gov now. Tent sites for an
   April 23 arrival open **October 23, 2026**.

A comparison table (cost, drive, booking, wow, rules fit, weather) sits
after the three write-ups, then a single list of what we still need to
figure out.

## Retired locks

The earlier pitch was a South Fork rafting weekend with Whitewater Excitement,
a Cub rafting patch call to action, and a yellow-helmet raft photo as the
hero. Those locks (WHY_THIS_TRIP_V1, the patch beat, HERO_FOCAL on that
still) are retired. The patch file can stay in the repo. It is not shown.
Do not put official BSA or Cub insignia back on the page. Paddle-gold
stamps and neutral icons only.

## Live

Public pitch (GitHub Pages):
[https://genemagg10.github.io/camping-trip/](https://genemagg10.github.io/camping-trip/)

Public URL is GitHub Pages from **`main` `/`** (already enabled).
A static export is committed at the repo root (`index.html`, `_next/`,
`photos/`, `.nojekyll`) so Jekyll is skipped and the pitch loads.

Refresh those files after source edits:

```bash
GITHUB_PAGES=true npm run build
./scripts/publish-pages.sh
```

`.github/workflows/pages.yml` is ready if Pages is later switched to Actions.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · static export for
GitHub Pages.

No RSVP. Soft hold is prose only.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

`next start` is not used. The production build is a static `out/` folder.
The Pages build sets `GITHUB_PAGES=true` so assets use the `/camping-trip`
base path.

## Design notes

Dieter postcard tokens v1.1 stay locked in `app/globals.css`
(`:root` + Tailwind `@theme`): foam `#F4F7F5`, river `#1F6F8B`,
raft cyan `#2896D2`, sky `#7EC8E3`, forest `#2F4F3E`, ink `#1A2420`,
paddle gold `#E6B422` (hero CTA, schedule rail, option numbers),
ember `#E07A3D`, mist `#D7E4EA`.

Hero type is fluid (`clamp`) with safe padding so the shout, gold CTA,
and soft-hold line wrap instead of clipping. Bangers is the hero shout
only. Body copy is Source Sans 3.

One scrolling pitch. The hero is still a left-half photo at every width.
Below 1024px the plan half scrolls under it. From 1024px the halves sit
side by side. The photo is the Angel Island aerial, held with
`object-position: 42% 48%` so the island stays in a tall crop. The gold
CTA scrolls to the three options. No booking button.

Each option has a draft weekend, logistics, a per-pair cost card, an
Arrow of Light note, pros, cons, and open questions. The Coloma private
raft sits in a dashed box after a line that the den campout has ended.
The comparison is a real table. On a phone it scrolls sideways and the
topic column sticks.
