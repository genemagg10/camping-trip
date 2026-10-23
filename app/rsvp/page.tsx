import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RsvpForm } from "@/components/RsvpForm";
import { SiteFooter } from "@/components/SiteFooter";
import { campout } from "@/lib/campout";
import { photos } from "@/lib/trip";

export const metadata: Metadata = {
  title: "RSVP · Pinnacles campout · Arrow of Light den",
  description: `${campout.place}, ${campout.site}, ${campout.dates}. Tell the den if your family is coming. The public tally is people and cars only.`,
};

export default function RsvpPage() {
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
          <h1 className="hero-shout max-w-xl text-foam uppercase">Save us a spot</h1>
          <p className="hero-den text-foam uppercase">Arrow of Light den</p>
          <p className="hero-meta max-w-xl text-foam/95">
            {campout.place}
            <br />
            {campout.site}
            <br />
            {campout.dates}
          </p>
        </div>
      </header>

      <div className="option-inner">
        <p className="max-w-3xl text-pretty text-[1.05rem] leading-relaxed">
          One response per family for {campout.datesLong}. Yes counts toward the {campout.peopleCap}{" "}
          people on {campout.site.toLowerCase()}. Maybe is written down, and it does not take a spot until you switch
          to Yes. If we go past {campout.peopleCap}, regular sites hold {campout.regularSitePeople} people each. Use
          the notes for dietary needs, including celiac-safe food. Only Gene sees names, email, and notes. This page
          shows people and cars.
        </p>
        <div className="mt-8">
          <RsvpForm />
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
