"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photos } from "@/lib/trip";

const frames = [photos.chiliBar, photos.halfDay, photos.wholeRiver, photos.family] as const;

export function RiverBand() {
  const band = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = band.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const view = window.innerHeight || 1;
        const progress = (view - rect.top) / (view + rect.height);
        const drift = (Math.min(1, Math.max(0, progress)) - 0.5) * 28;
        el.style.setProperty("--band-drift", `${drift}px`);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative mt-8 bg-river-deep py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 shimmer opacity-70" />
      <div className="mx-auto mb-6 max-w-5xl px-4">
        <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
          Colour, not clip art
        </p>
        <h2 className="mt-1 font-display text-3xl text-cream">
          The photos do the yelling. We just tape them down.
        </h2>
      </div>
      <div
        ref={band}
        className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {frames.map((photo, i) => (
          <figure
            key={photo.src}
            className="relative h-56 w-[78vw] shrink-0 overflow-hidden rounded-xl border-4 border-cream sm:h-72 sm:w-[38vw]"
            style={{
              transform: `translateY(calc(var(--band-drift, 0px) * ${i % 2 === 0 ? 1 : -0.7}))`,
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 80vw, 38vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
