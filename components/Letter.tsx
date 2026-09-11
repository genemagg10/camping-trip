import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { photos, trip } from "@/lib/trip";

export function Letter() {
  return (
    <section className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 sm:grid-cols-[1.1fr_0.9fr] sm:items-center sm:py-16">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-stamp uppercase">
          A note from a den dad with a printer
        </p>
        <h2 className="font-display text-3xl leading-tight font-semibold text-pretty sm:text-4xl">
          Postcard energy. Actual facts. Zero Google Slides.
        </h2>
        <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            Dear den families — this is the pitch. {trip.dates}.{" "}
            {trip.outfitter} on the {trip.river}, {trip.city}. We camp at their{" "}
            {trip.camp}.
          </p>
          <p>
            Friday we roll in, pitch tents, and eat an easy dinner we packed
            ourselves. Saturday is the achievement day: the Cub Scout rafting
            patch lesson at 9am (they certify it and they award it), then a
            long, splashy classroom of about 14 river miles plus lunch. Saturday
            night we cook at camp. Sunday is breakfast, pack, and home before
            anyone invents a fourth activity.
          </p>
          <p>
            Nothing is reserved. A soft hold is just a polite maybe from the
            calendar. If enough families raise a hand, we turn this flyer into
            a real weekend. If not, we keep the paddles for another April.
          </p>
        </div>
      </Reveal>
      <Reveal delay={2} className="relative">
        <figure className="paper-card relative rotate-2 rounded-md p-3">
          <div className="relative aspect-[4/3] overflow-hidden bg-foam">
            <Image
              src={photos.scouts.src}
              alt={photos.scouts.alt}
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-display text-sm text-ink-soft">
            Helmets on. Paddles up. This is the den-energy we are aiming at.
          </figcaption>
        </figure>
        <p className="absolute -top-3 -left-1 rotate-[-8deg] bg-gold px-2 py-1 text-[0.7rem] font-bold tracking-wider text-ink uppercase shadow-sm">
          taped on in the kitchen
        </p>
      </Reveal>
    </section>
  );
}
