# Cub Scout Arrow of Light — den trip pitch

Warm dad postcard pitch for an Arrow of Light den rafting + camp weekend on
the South Fork American River with
[Whitewater Excitement](https://whitewaterexcitement.com) (Lotus, CA).

**Soft hold only** — nothing is booked yet. This site gauges family interest.

## Trip (locked)

- **When:** Fri Apr 23 – Sun Apr 25
- **Where:** Whitewater Excitement private campground (bathrooms + hot showers) · South Fork American River
- **Highlight:** Sat morning Cub Scout rafting patch lesson (they certify and award the patch), then ~14 miles of rafting + lunch
- **Ballpark:** Scout + Dad ≈ **$327** (raft + lunch + 2 nights camp)
  - Camp $15/person/night × 2 nights
  - Scout raft $129 · adult raft $138
- **Meals:** Families still share meals and snacks. Friday dinner is own gear / own food.
- **Outfitter:** [whitewaterexcitement.com](https://whitewaterexcitement.com) · 800.750.2386 · Lotus, CA

Photo credits and source URLs live in [`SOURCE.md`](./SOURCE.md).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Vercel-ready.

Interest RSVP is local-only (`localStorage`). No backend.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy on Vercel

Import the GitHub repo at [vercel.com/new](https://vercel.com/new). Framework
preset: Next.js. Default build (`next build`) and output are fine — no extra
env vars.

## Design notes

Mobile stacks the rafting hero over the plan. From 1024px the postcard splits
side by side. Primary CTA is the paddle-gold **I'm interested** on the hero.
The achievement stamp is den-made (paddles + wave), not BSA insignia. Cub
Scout rafting patch is named in copy — phone-confirmed with the outfitter.
