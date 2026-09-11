# Cub Scout Arrow of Light — den trip pitch

Warm dad postcard pitch for an Arrow of Light den rafting + camp weekend on
the South Fork American River with
[Whitewater Excitement](https://whitewaterexcitement.com) (Lotus, CA).

**Soft hold only** — nothing is booked yet. This site gauges family interest.

## Trip (locked)

- **When:** Fri Apr 23 – Sun Apr 25
- **Where:** Whitewater Excitement private campground (bathrooms + hot showers) · South Fork American River
- **Highlight:** Sat 9am Cub Scout rafting patch lesson; they certify/award the Cub Scout rafting patch, then ~14 miles of rafting + lunch. Phone-confirmed (their public site lists troop Merit Badge). No official BSA / Cub insignia art — paddle-gold stamp only.
- **Ballpark:** Scout + Dad ≈ **$327** (raft + lunch + 2 nights camp)
  - Camp $15/person/night × 2 nights
  - Scout raft $129 · adult raft $138
- **Meals:** Families still share meals and snacks. Friday dinner is own gear / own food.
- **Outfitter:** [whitewaterexcitement.com](https://whitewaterexcitement.com) · 800.750.2386 · Lotus, CA

Photo credits and source URLs live in [`SOURCE.md`](./SOURCE.md).

## Live

Public pitch (GitHub Pages):
[https://genemagg10.github.io/camping-trip/](https://genemagg10.github.io/camping-trip/)

Deploys from `main` via `.github/workflows/pages.yml` (static `next export`).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · static export for
GitHub Pages.

Interest RSVP is local-only (`localStorage`). No backend.

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
(`:root` + Tailwind `@theme`): foam `#F4F7F5`, river `#1F6F8B` (headlines),
raft cyan `#2896D2` (boat / action accent), sky `#7EC8E3`, forest `#2F4F3E`,
ink `#1A2420`, paddle gold `#E6B422` (hero CTA + achievement stamp — not
Cub insignia), ember `#E07A3D`, mist `#D7E4EA`.

Hero type is fluid (`clamp`) with safe padding so the shout, gold CTA,
and soft-hold line wrap instead of clipping from phone through wide.

One scrolling pitch. The hero is still B’s left half at every width:
full-bleed raft, title + den on the photo, paddle-gold “I'm interested”,
soft hold + ~$327 under the button. No Soft Hold corner chip. No teal
body CTA. Below 1024px the plan/camp half scrolls under that hero; from
1024px the halves sit side by side. The achievement stamp is a den-made
paddle mark for the Cub Scout rafting-patch earn — not BSA insignia.
