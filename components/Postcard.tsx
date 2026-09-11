"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AchievementStamp } from "@/components/AchievementStamp";
import { photos, trip } from "@/lib/trip";

const thumbs = [
  { photo: photos.halfDay, label: "River" },
  { photo: photos.riversideTent, label: "Private camp" },
  { photo: photos.scouts, label: "Young rafters" },
] as const;

export function Postcard() {
  const frame = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const root = frame.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (root && !reduced) {
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          root.style.setProperty(
            "--drift",
            `${Math.min(window.scrollY * 0.1, 48)}px`,
          );
          ticking = false;
        });
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  useEffect(() => {
    const button = cta.current;
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
  }, []);

  return (
    <section className="mx-auto grid w-full max-w-6xl lg:min-h-[min(100svh,52rem)] lg:grid-cols-2 lg:gap-6">
      <div
        ref={frame}
        className="hero-drift relative min-h-[30.5rem] overflow-hidden sm:min-h-[34rem] lg:min-h-full"
      >
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 shimmer" />
        <div className="hero-pad relative z-10 flex min-h-[30.5rem] flex-col justify-end sm:min-h-[34rem] lg:min-h-full lg:justify-end">
          <h1 className="hero-shout font-display font-extrabold tracking-[0.02em] text-balance text-foam uppercase">
            Last camping trip of the year
          </h1>
          <p className="hero-den mt-3 max-w-[36ch] font-medium text-foam/95">
            Arrow of Light den · Dad + Scout
          </p>
          <a
            ref={cta}
            href="#rsvp"
            className="mt-4 inline-flex min-h-11 w-fit items-center rounded-full bg-gold px-5 py-2.5 text-base font-bold text-ink"
          >
            I&apos;m interested
          </a>
          <p className="mt-2 max-w-[34ch] text-[0.8rem] leading-snug text-foam/90 sm:text-xs">
            Soft hold only · Scout + Dad ≈ ${trip.scoutDadApprox} · nothing
            booked yet
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-river uppercase">
            {trip.river}
          </p>
          <p className="mt-1 font-display text-3xl font-bold tracking-wide text-river uppercase sm:text-4xl">
            {trip.outfitter}
          </p>
          <p className="mt-1 text-[1.05rem] text-ink">
            {trip.city} · {trip.dates}
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-2">
          {thumbs.map((item) => (
            <li key={item.label} className="min-w-0">
              <figure className="overflow-hidden rounded-lg bg-mist">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.photo.src}
                    alt={item.photo.alt}
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-1.5 py-1.5 text-center text-[0.7rem] font-semibold tracking-wide text-forest uppercase">
                  {item.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <ul className="grid gap-2 text-[1.02rem] leading-snug">
          <li className="flex gap-2">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
            <span>Private campground — bathrooms + hot showers.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
            <span>
              Sat water + lunch: Cub Scout rafting patch lesson, then ~14
              miles.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ember" />
            <span>
              Scout + Dad ≈ ${trip.scoutDadApprox} (raft + lunch + 2 nights).
              Soft hold.
            </span>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <AchievementStamp />
          <p className="max-w-xs text-sm leading-relaxed text-ink/80">
            Saturday they earn the Cub Scout rafting patch — Whitewater
            Excitement certifies and awards it. Then the river does the rest.
          </p>
        </div>

        <p className="text-sm text-forest">
          Gauge only. Nothing booked yet.
        </p>
      </div>
    </section>
  );
}
