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

const bullets = [
  "Private river camp · hot showers",
  "Sat: morning on the water + lunch",
  `~$${trip.scoutDadApprox} Scout + Dad (soft hold)`,
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
  const mobileHero = useRef<HTMLDivElement>(null);
  const wideHero = useRef<HTMLDivElement>(null);
  const mobileCta = useRef<HTMLAnchorElement>(null);
  const wideCta = useRef<HTMLAnchorElement>(null);
  useRiverDrift(mobileHero);
  useRiverDrift(wideHero);
  useCtaPulse(mobileCta);
  useCtaPulse(wideCta);

  return (
    <section className="w-full">
      <div className="lg:hidden">
        <div
          ref={mobileHero}
          className="hero-drift relative min-h-[28rem] overflow-hidden"
        >
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 shimmer" />
          <p className="absolute top-0 right-0 z-20 flex size-[4.25rem] flex-col items-center justify-center bg-foam text-center font-display text-[0.62rem] leading-none font-extrabold tracking-[0.16em] text-ink uppercase">
            Soft
            <span className="mt-1.5">hold</span>
          </p>
          <div className="hero-pad relative z-10 flex min-h-[28rem] flex-col justify-end pr-20">
            <h1 className="hero-shout font-display font-extrabold tracking-[0.02em] text-balance text-foam uppercase">
              Last camping trip of the year
            </h1>
            <p className="hero-den mt-3 text-foam/95">
              Arrow of Light den · Dad + Scout
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-4 py-7">
          <div>
            <p className="font-display text-2xl font-bold tracking-wide text-river uppercase">
              {trip.river}
            </p>
            <p className="mt-1 text-ink">
              {trip.outfitter} · {trip.city}
            </p>
            <p className="mt-1 font-display text-xl font-bold tracking-wide text-ink uppercase">
              {trip.dates}
            </p>
          </div>

          <ul className="grid grid-cols-3 gap-2">
            {thumbs.map((item) => (
              <li key={item.label} className="min-w-0">
                <figure className="overflow-hidden rounded-lg bg-mist ring-2 ring-raft/35">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.photo.src}
                      alt={item.photo.alt}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-1 py-1.5 text-center text-[0.68rem] font-semibold tracking-wide text-forest uppercase">
                    {item.label}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <ul className="grid gap-2 text-[1.02rem] leading-snug">
            {bullets.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <a
            ref={mobileCta}
            href="#rsvp"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-river text-base font-bold text-foam"
          >
            I&apos;m interested
          </a>
          <p className="text-sm text-forest">Gauge only. Nothing booked yet.</p>
          <div className="flex items-center gap-3">
            <AchievementStamp />
            <p className="text-xs text-ink/60">
              A · Postcard. No Cub patch chrome.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden min-h-svh grid-cols-2 lg:grid">
        <div ref={wideHero} className="hero-drift relative min-h-svh overflow-hidden">
          <Image
            src={photos.family.src}
            alt={photos.family.alt}
            fill
            priority
            sizes="50vw"
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
          <div className="hero-pad relative z-10 flex h-full min-h-svh flex-col justify-end">
            <h1 className="hero-shout font-display font-extrabold tracking-[0.02em] text-balance text-foam uppercase">
              Last camping trip of the year
            </h1>
            <p className="hero-den mt-3 text-foam/95">Arrow of Light den</p>
            <p className="mt-3 max-w-[36ch] text-foam/90">
              {trip.river}
              <br />
              {trip.dates}
            </p>
            <a
              ref={wideCta}
              href="#rsvp"
              className="mt-5 inline-flex min-h-11 w-fit items-center rounded-full bg-river px-6 py-2.5 text-base font-bold text-foam"
            >
              I&apos;m interested
            </a>
            <p className="mt-2 text-xs text-foam/90">
              Soft hold · ~${trip.scoutDadApprox} Scout + Dad
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-foam">
          <div className="relative min-h-64 overflow-hidden bg-mist">
            <Image
              src={photos.tents.src}
              alt={photos.tents.alt}
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-1 flex-col gap-6 px-8 py-8">
            <ul className="grid grid-cols-2 gap-3">
              {wideThumbs.map((photo) => (
                <li key={photo.src}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-mist ring-2 ring-raft/35">
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
            <div>
              <h2 className="font-display text-2xl font-bold tracking-wide text-river uppercase">
                The plan
              </h2>
              <ul className="mt-3 grid gap-2 text-[1.02rem] leading-snug">
                <li className="flex gap-2">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                  <span>Private river camp — bathrooms, hot showers, fire rings.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                  <span>Saturday morning on the water, then a long river day + lunch.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                  <span>Colour action. Warm dad energy. Not a corporate BSA flyer.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                  <span>Interest only — nothing booked until the den says go.</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto flex items-center gap-3">
              <AchievementStamp />
              <p className="text-sm text-forest">
                B · Wide postcard. Patch claim open — no fake Cub chrome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
