"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photos } from "@/lib/trip";

const frames = [photos.chiliBar, photos.family, photos.wholeRiver] as const;

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
        const drift = (Math.min(1, Math.max(0, progress)) - 0.5) * 20;
        el.style.setProperty("--band-drift", `${drift}px`);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-mist/70 py-8">
      <div
        ref={band}
        className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {frames.map((photo, i) => (
          <figure
            key={photo.src}
            className="relative h-44 w-[72vw] shrink-0 overflow-hidden rounded-xl bg-sky ring-2 ring-ink/15 sm:h-56 sm:w-[34vw]"
            style={{
              transform: `translateY(calc(var(--band-drift, 0px) * ${i % 2 === 0 ? 1 : -0.65}))`,
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 72vw, 34vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
