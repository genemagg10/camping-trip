"use client";

import Image from "next/image";
import { useEffect, useRef, type RefObject } from "react";
import { copy } from "@/lib/copy";
import { photos, trip } from "@/lib/trip";

const thumbs = [
  { photo: photos.halfDay, label: "River day" },
  { photo: photos.tents, label: "Private camp" },
  { photo: photos.scouts, label: "Young rafters" },
] as const;

const wideThumbs = [photos.riverView, photos.halfDay] as const;

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
            className="hero-focal"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 shimmer" />
        </div>
        <div className="hero-pad relative z-10 flex min-h-[28rem] flex-col justify-end lg:min-h-svh">
          <div className="hero-copy">
            <div className="hero-title-block">
              <h1 className="hero-shout tracking-[0.02em] text-foam uppercase">
                {copy.hero.shout}
              </h1>
              <p className="hero-den text-foam uppercase">
                {copy.hero.den}
              </p>
              <p className="hero-meta text-foam/90">
                {copy.hero.river}
                <br />
                {copy.hero.place}
                <br />
                {copy.hero.dates}
              </p>
            </div>
            <a
              ref={cta}
              href="#patch"
              className="hero-cta inline-flex w-fit max-w-full shrink-0 items-center text-pretty rounded-full bg-gold px-6 text-base font-bold text-ink"
            >
              {copy.hero.cta}
            </a>
            <p className="hero-hold text-foam">{copy.hero.hold}</p>
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

          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-wide text-river uppercase">
              {copy.why.title}
            </h2>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-pretty">
              {copy.hero.paragraph}
            </p>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-pretty">
              {copy.why.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
