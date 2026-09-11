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
  "Sat 9am Cub Scout rafting patch, then ~14 miles + lunch",
  `~$${trip.scoutDadApprox} Scout + Dad (soft hold)`,
] as const;

const spreadPlan = [
  "Private river camp — bathrooms, hot showers, fire rings.",
  "Sat 9am Cub Scout rafting patch lesson — they certify/award it — then ~14 miles + lunch.",
  "Colour action. Warm dad energy. Not a corporate BSA flyer.",
  "Interest only — nothing booked until the den says go.",
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
  const stackCta = useRef<HTMLAnchorElement>(null);
  const spreadCta = useRef<HTMLAnchorElement>(null);
  useRiverDrift(hero);
  useCtaPulse(stackCta);
  useCtaPulse(spreadCta);

  return (
    <section className="w-full lg:grid lg:min-h-svh lg:grid-cols-2">
      <div
        ref={hero}
        className="hero-drift relative min-h-[28rem] overflow-hidden lg:min-h-svh"
      >
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] lg:hidden"
        />
        <Image
          src={photos.family.src}
          alt={photos.family.alt}
          fill
          priority
          sizes="50vw"
          className="hidden object-cover object-[center_20%] lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 shimmer" />
        <p className="absolute top-0 right-0 z-20 flex size-[4.25rem] flex-col items-center justify-center bg-foam text-center font-display text-[0.62rem] leading-none font-extrabold tracking-[0.16em] text-ink uppercase lg:hidden">
          Soft
          <span className="mt-1.5">hold</span>
        </p>
        <div className="hero-pad relative z-10 flex min-h-[28rem] flex-col justify-end pr-20 lg:min-h-svh lg:pr-0">
          <h1 className="hero-shout font-display font-extrabold tracking-[0.02em] text-balance text-foam uppercase">
            Last camping trip of the year
          </h1>
          <p className="hero-den mt-3 text-foam/95">
            <span className="lg:hidden">Arrow of Light den · Dad + Scout</span>
            <span className="hidden lg:inline">Arrow of Light den</span>
          </p>
          <p className="mt-3 hidden max-w-[36ch] text-foam/90 lg:block">
            {trip.river}
            <br />
            {trip.dates}
          </p>
          <a
            ref={spreadCta}
            href="#rsvp"
            className="mt-5 hidden min-h-11 w-fit items-center rounded-full bg-river px-6 py-2.5 text-base font-bold text-foam lg:inline-flex"
          >
            I&apos;m interested
          </a>
          <p className="mt-2 hidden text-xs text-foam/90 lg:block">
            Soft hold · ~${trip.scoutDadApprox} Scout + Dad
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-foam">
        <div className="relative hidden min-h-64 overflow-hidden bg-mist lg:block">
          <Image
            src={photos.tents.src}
            alt={photos.tents.alt}
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-1 flex-col gap-6 px-4 py-7 lg:px-8 lg:py-8">
          <div className="lg:hidden">
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

          <ul className="grid grid-cols-3 gap-2 lg:hidden">
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

          <ul className="hidden grid-cols-2 gap-3 lg:grid">
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

          <ul className="grid gap-2 text-[1.02rem] leading-snug lg:hidden">
            {stackBullets.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <h2 className="font-display text-2xl font-bold tracking-wide text-river uppercase">
              The plan
            </h2>
            <ul className="mt-3 grid gap-2 text-[1.02rem] leading-snug">
              {spreadPlan.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            ref={stackCta}
            href="#rsvp"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-river text-base font-bold text-foam lg:hidden"
          >
            I&apos;m interested
          </a>
          <p className="text-sm text-forest lg:hidden">
            Gauge only. Nothing booked yet.
          </p>

          <div className="mt-auto flex items-center gap-3">
            <AchievementStamp />
            <p className="text-sm leading-snug text-ink">
              <span className="font-display text-base font-bold tracking-wide text-ink uppercase">
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
