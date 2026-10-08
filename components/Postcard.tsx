"use client";

import Image from "next/image";
import { useEffect, useRef, type RefObject } from "react";
import { copy } from "@/lib/copy";
import { photos } from "@/lib/trip";
import { ExtLink } from "@/components/ExtLink";

const thumbs = [
  { href: "#angel-island", photo: photos.angel, label: "The island" },
  { href: "#coloma", photo: photos.camp, label: "The river camp" },
  { href: "#pinnacles", photo: photos.pinnacles, label: "The caves" },
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
            src={photos.angel.src}
            alt={photos.angel.alt}
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
              <p className="hero-den text-foam uppercase">{copy.hero.den}</p>
              <p className="hero-meta text-foam/90">
                {copy.hero.line1}
                <br />
                {copy.hero.line2}
                <br />
                {copy.hero.dates}
              </p>
            </div>
            <a
              ref={cta}
              href="#options"
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
            src={photos.pinnacles.src}
            alt={photos.pinnacles.alt}
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="plan-half flex min-w-0 flex-1 flex-col gap-6">
          <ul className="grid grid-cols-3 gap-2">
            {thumbs.map((item) => (
              <li key={item.href} className="min-w-0">
                <a href={item.href} className="block min-w-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-river">
                  <figure className="overflow-hidden rounded-lg bg-mist ring-2 ring-ink/15">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.photo.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 16vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="min-w-0 px-1 py-1.5 text-center text-[0.68rem] font-semibold tracking-wide break-words text-forest uppercase">
                      {item.label}
                    </figcaption>
                  </figure>
                </a>
              </li>
            ))}
          </ul>

          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-wide text-river uppercase">
              {copy.why.title}
            </h2>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-pretty">
              {copy.why.p1}
            </p>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-pretty">
              {copy.why.p2}
            </p>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-pretty">
              {copy.why.p3}
            </p>
          </div>

          <aside className="rule-aside min-w-0">
            <h2 className="text-sm font-extrabold tracking-[0.14em] text-ember uppercase">
              {copy.rule.title}
            </h2>
            <p className="mt-2 text-[1.02rem] leading-relaxed text-pretty">
              {copy.rule.before}
              <ExtLink href={copy.rule.href}>{copy.rule.linkLabel}</ExtLink>
              {copy.rule.middle}
              <ExtLink href={copy.rule.paddleHref}>{copy.rule.paddleLabel}</ExtLink>
              {copy.rule.after}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-pretty">
              <ExtLink href={copy.rule.moreHref}>{copy.rule.moreLabel}</ExtLink>
              {" · "}
              <ExtLink href={copy.rule.gssHref}>{copy.rule.gssLabel}</ExtLink>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
