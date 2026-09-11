"use client";

import Image from "next/image";
import { useEffect, useRef, type RefObject } from "react";
import { AchievementStamp } from "@/components/AchievementStamp";
import { photos, trip } from "@/lib/trip";

const thumbs = [
  { photo: photos.halfDay, label: "River day" },
  { photo: photos.tents, label: "Private camp" },
  { photo: photos.scouts, label: "Young rafters" },
] as const;

const wideThumbs = [photos.riverView, photos.halfDay] as const;

const stackBullets = [
  "Private river camp · hot showers",
  "Sat 9am: earn the Cub Scout rafting patch, then smash ~14 miles + lunch",
  `Soft hold · ~$${trip.scoutDadApprox} Scout + Dad`,
] as const;

const spreadPlan = [
  "Pitch the tents at the private river camp — bathrooms, hot showers, fire rings.",
  "Sat 9am: Cub Scout rafting patch lesson. They certify and award it. Then ~14 miles + lunch.",
  "Splash. Paddle. Campfire. Not a corporate BSA flyer.",
  "Soft hold only — nothing booked until the den says go.",
] as const;

function useCtaPulse(ref: RefObject<HTMLAnchorElement | null>) {
  useEffect(() => {
    const button = ref.current;
    if (!button) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      button.classList.add("cta-ready");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          button.classList.add("cta-ready");
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(button);
    return () => io.disconnect();
  }, [ref]);
}

function useRiverDrift(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        root.style.setProperty("--drift", `${Math.min(window.scrollY * 0.1, 48)}px`);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}

export function Postcard() {
  const hero = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLAnchorElement>(null);
  useRiverDrift(hero);
  useCtaPulse(cta);

  return (
    <section className="w-full min-w-0 lg:grid lg:min-h-svh lg:grid-cols-2">
      <div
        ref={hero}
        className="hero-drift relative min-h-[28rem] min-w-0 lg:min-h-svh"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={photos.heroYellow.src}
            alt={photos.heroYellow.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[72%_38%] lg:object-[88%_36%]"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 shimmer" />
        </div>
        <div className="hero-pad relative z-10 flex min-h-[28rem] flex-col justify-end lg:min-h-svh">
          <div className="hero-copy">
            <div className="hero-title-block">
              <h1 className="hero-shout tracking-[0.02em] text-foam uppercase">
                Last camping trip of the year!
              </h1>
              <p className="hero-den text-foam uppercase">
                Arrow of Light den
              </p>
              <p className="hero-meta text-foam/90">
                {trip.river}
                <br />
                {trip.dates}
              </p>
            </div>
            <a
              ref={cta}
              href="#rsvp"
              className="hero-cta inline-flex w-fit shrink-0 items-center rounded-full bg-gold px-6 text-base font-bold text-ink"
            >
              I&apos;m interested
            </a>
            <p className="hero-hold text-foam">
              Soft hold · ~${trip.scoutDadApprox} Scout + Dad
            </p>
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-col bg-foam">
        <div className="relative hidden min-h-64 overflow-hidden bg-mist lg:block">
          <Image
            src={photos.tents.src}
            alt={photos.tents.alt}
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="plan-half flex min-w-0 flex-1 flex-col gap-6">
          <div className="lg:hidden">
            <p className="text-ink">
              {trip.outfitter} · {trip.city}
            </p>
          </div>

          <ul className="grid grid-cols-3 gap-2 lg:hidden">
            {thumbs.map((item) => (
              <li key={item.label} className="min-w-0">
                <figure className="overflow-hidden rounded-lg bg-mist ring-2 ring-ink/15">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.photo.src}
                      alt={item.photo.alt}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="min-w-0 px-1 py-1.5 text-center text-[0.68rem] font-semibold break-words tracking-wide text-forest uppercase">
                    {item.label}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <ul className="hidden min-w-0 grid-cols-2 gap-3 lg:grid">
            {wideThumbs.map((photo) => (
              <li key={photo.src} className="min-w-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-mist ring-2 ring-ink/15">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>

          <ul className="grid gap-2 text-[1.02rem] leading-snug lg:hidden">
            {stackBullets.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                <span className="min-w-0 text-pretty">{line}</span>
              </li>
            ))}
          </ul>

          <div className="hidden min-w-0 lg:block">
            <h2 className="text-xl font-bold tracking-wide text-river uppercase">
              The plan
            </h2>
            <ul className="mt-3 grid gap-2 text-[1.02rem] leading-snug">
              {spreadPlan.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                  <span className="min-w-0 text-pretty">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex items-center gap-3">
            <AchievementStamp />
            <p className="text-sm leading-snug text-ink">
              <span className="text-base font-bold tracking-wide text-ink uppercase">
                {trip.patchBeat}
              </span>
              <span className="mt-0.5 block text-xs text-ink/65">
                They certify and award it. This stamp is ours — not BSA art.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
