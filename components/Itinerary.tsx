import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { photos, trip } from "@/lib/trip";

const days = [
  {
    day: "Friday",
    when: "Arrive",
    body: trip.friday,
  },
  {
    day: "Saturday",
    when: "9am patch, then river",
    body: `${trip.saturdayPatch} ${trip.saturdayRiver} ${trip.saturdayNight}`,
  },
  {
    day: "Sunday",
    when: "Homeward",
    body: trip.sunday,
  },
] as const;

export function Itinerary() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:py-16">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.22em] text-river uppercase">
          The weekend, in order
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          {trip.dates}
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          Soft hold on the calendar. If this reads like a plan, that is because
          it is a plan — just not a paid reservation yet.
        </p>
      </Reveal>
      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {days.map((item, i) => (
          <Reveal key={item.day} delay={(i + 1) as 1 | 2 | 3} as="li">
            <article className="paper-card h-full rounded-2xl border border-paper-deep p-5">
              <p className="font-display text-2xl font-semibold text-pine">
                {item.day}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-amber uppercase">
                {item.when}
              </p>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={2} className="mt-8 overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/9] sm:aspect-[21/9]">
          <Image
            src={photos.riverLine.src}
            alt={photos.riverLine.alt}
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
