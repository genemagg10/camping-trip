import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CampoutPlan } from "@/components/CampoutPlan";
import { SiteFooter } from "@/components/SiteFooter";
import { campout } from "@/lib/campout";
import { planMeta } from "@/lib/plan";
import { photos } from "@/lib/trip";

export const metadata: Metadata = {
  title: "Final campout plan · Pinnacles · Arrow of Light den",
  description: `${campout.place}, ${campout.site} in ${campout.siteLoop} and ${campout.tentSite}, ${campout.dates}. Arrow of Light goals and the weekend plan. Adventure completion is still TBD.`,
};

export default function PlanPage() {
  return (
    <main className="min-w-0">
      <header className="relative min-h-72">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={photos.pinnacles.src}
            alt={photos.pinnacles.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>
        <div className="hero-pad relative z-10 flex min-h-72 flex-col justify-end">
          <Link
            href="/"
            className="mb-4 inline-flex min-h-11 w-fit items-center text-sm font-bold text-foam underline decoration-2 underline-offset-4"
          >
            Back to the pitch
          </Link>
          <h1 className="hero-shout max-w-xl text-foam uppercase">{planMeta.shout}</h1>
          <p className="hero-den text-foam uppercase">Arrow of Light den</p>
          <p className="hero-meta max-w-xl text-foam/95">
            {campout.place}
            <br />
            {campout.site} · {campout.siteLoop}
            <br />
            {campout.tentSite}
            <br />
            {campout.dates}
          </p>
        </div>
      </header>

      <nav className="option-jump" aria-label="Campout plan">
        <p className="w-full text-xs font-extrabold tracking-[0.16em] text-foam uppercase">On this page</p>
        <a href="#goals">Goals</a>
        <a href="#weekend">Weekend plan</a>
        <a href="#before">Before we leave</a>
        <Link href="/rsvp">RSVP</Link>
      </nav>

      <CampoutPlan />
      <SiteFooter />
    </main>
  );
}
