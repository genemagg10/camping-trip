# Cub Scout Arrow of Light — den trip pitch

Warm dad postcard pitch for an Arrow of Light den rafting + camp weekend on
the South Fork American River with
[Whitewater Excitement](https://whitewaterexcitement.com) (Lotus, CA).

**Soft hold only** — nothing is booked yet. No RSVP form. Dream CTA sells the Cub rafting patch.

## Trip (locked)

- **When:** Fri Apr 23 – Sun Apr 25
- **Where:** Whitewater Excitement private campground (bathrooms + hot showers) · South Fork American River
- **Highlight:** Sat 9am Cub Scout rafting patch lesson; they certify/award the Cub Scout rafting patch, then ~14 miles of rafting + lunch. Phone-confirmed (their public site lists troop Merit Badge). No official BSA / Cub insignia art — paddle-gold stamp only.
- **Ballpark:** Scout + Dad ≈ **$327** (raft + lunch + 2 nights camp)
  - Camp $15/person/night × 2 nights
  - Scout raft $129 · adult raft $138
- **Meals:** Breakfast and dinner planned as a group. WWE provides lunch on the rafting trip.
- **Outfitter:** [whitewaterexcitement.com](https://whitewaterexcitement.com) · 800.750.2386 · Lotus, CA

Photo credits and source URLs live in [`SOURCE.md`](./SOURCE.md).

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

No RSVP / localStorage interest form. Soft hold is prose only.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

`next start` is not used — the production build is a static `out/` folder.
The Pages workflow sets `GITHUB_PAGES=true` so assets use the
`/camping-trip` base path.

## Design notes

Dieter postcard tokens v1.1 (photo truth) are locked in `app/globals.css`
(`:root` + Tailwind `@theme`): foam `#F4F7F5`, river `#1F6F8B` (headlines +
active day tab — not Florida teal), raft cyan `#2896D2` (boat / action
accent), sky `#7EC8E3`, forest `#2F4F3E`, ink `#1A2420`, paddle gold
`#E6B422` (hero CTA + schedule rail), ember `#E07A3D`, mist `#D7E4EA`.

Hero type is fluid (`clamp`) with safe padding so the shout, gold CTA,
and soft-hold line wrap instead of clipping from phone through wide.

One scrolling pitch. The hero is still B’s left half at every width:
full-bleed raft, title + den on the photo, paddle-gold “Earn the Cub
rafting patch” (anchors to the patch beat), soft-hold prose under the
button. **HERO_FOCAL_V1** keeps the yellow-helmet Cub + raft crew as the
optical center (`object-fit: cover` + near-center). Do not pan-crop to
clear type. No Soft Hold corner chip. No teal body CTA. No booking button.
Below 1024px the plan/camp half scrolls under that hero; from 1024px the
halves sit side by side. The patch beat shows the real Whitewater
Rafting emblem they award (Gene override for this asset only). Do not
invent other BSA / Cub badge art.

**PATCH_ASSET_V1** — the real Whitewater Rafting emblem
(`public/photos/wwe-whitewater-rafting-patch.png`) is the large
hero-adjacent patch visual: full merrow, contained in a square frame
with even padding. Den-made EARN IT is a small motion accent only.

**WHY_THIS_TRIP_V1** — Gene locked the three Why this trip paragraphs
verbatim in `lib/copy.ts`. Do not paraphrase.

**CONTENT_POLISH_V1** copy lives in `lib/copy.ts` (hero, why-this-trip,
patch beat, logistics, day intros, four activity cards). Legacy Roast
Skits and Youth-Led Cooking Challenge stay off the page.

**LOGISTICS_CTA_V1** kills the interest form. The gold CTA is dream-sell
only — it scrolls to the early Cub rafting patch beat. The old Who’s in?
block is **Logistics & costs** (soft hold, $327 breakdown, WWE contact).

**GETTING_THERE_V1** is a real OpenStreetMap `export/embed.html` iframe
(no API key) above Logistics on phone, beside it from 1280px if the
cost card still fits. Caption is the public approx:
**120 miles / 2–2½ hours** non-rush Lafayette → WWE at
6580 Highway 49, Lotus, CA 95651. “Open in Maps” is a secondary
directions link, not a live traffic quote. No schematic SVG.

**DESIGN_SCHEDULE_V1** is the Fri / Sat / Sun tabbed day card: gold
timeline, hollow river-teal dots, activity cards with a gold top rule.
Phone stacks the card then 1-col activities; mid is 2×2; wide sits
activities beside the schedule.
