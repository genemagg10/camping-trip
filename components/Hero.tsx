"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photos, trip } from "@/lib/trip";

export function Hero() {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = frame.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const drift = Math.min(window.scrollY * 0.12, 64);
        root.style.setProperty("--drift", `${drift}px`);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative mx-auto w-full max-w-6xl px-3 pb-6 sm:px-4">
      <div
        ref={frame}
        className="hero-drift relative min-h-[34rem] overflow-hidden rounded-[1.6rem] border-[6px] border-cream shadow-[0_24px_50px_-28px_rgba(18,63,82,0.7)] sm:min-h-[38rem]"
      >
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-river-deep/90 via-river-deep/25 to-ink/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 shimmer" aria-hidden />
        <div className="relative z-10 flex min-h-[34rem] flex-col justify-end gap-5 p-5 pb-8 sm:min-h-[38rem] sm:p-10">
          <p className="w-fit rotate-[-3deg] rounded-sm bg-stamp px-3 py-1 font-display text-xs font-semibold tracking-[0.22em] text-cream uppercase shadow-md">
            den mail · not a booking
          </p>
          <h1 className="max-w-xl font-display text-[2.35rem] leading-[1.05] font-semibold text-balance text-cream sm:text-6xl">
            The river wants our Cubs.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-foam/95 sm:text-xl">
            Arrow of Light weekend on the {trip.river}: earn the Cub Scout
            rafting patch Saturday morning, then paddle about 14 miles, then
            sleep where the water still talks.
          </p>
          <dl className="flex flex-wrap gap-2 text-sm text-cream">
            <div className="rounded-full bg-ink/45 px-3 py-1.5 backdrop-blur-sm">
              <dt className="sr-only">Dates</dt>
              <dd>{trip.dates}</dd>
            </div>
            <div className="rounded-full bg-ink/45 px-3 py-1.5 backdrop-blur-sm">
              <dt className="sr-only">Place</dt>
              <dd>
                {trip.outfitter} · {trip.city}
              </dd>
            </div>
            <div className="rounded-full bg-ink/45 px-3 py-1.5 backdrop-blur-sm">
              <dt className="sr-only">Ballpark</dt>
              <dd>Scout + Dad ≈ ${trip.scoutDadApprox}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
