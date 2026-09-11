import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { photos, trip } from "@/lib/trip";

export function Camp() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.22em] text-pine uppercase">
          After the splash
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Private campground. Bathrooms. Hot showers.
        </h2>
        <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          We are not proving toughness by skipping plumbing. {trip.outfitter}{" "}
          keeps a private riverside camp in {trip.city} — tent camping Friday
          and Saturday, with the kind of bathrooms and hot showers that make
          den dads much better company.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <Reveal className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]">
          <Image
            src={photos.tents.src}
            alt={photos.tents.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={1} className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:col-span-2">
          <Image
            src={photos.dining.src}
            alt={photos.dining.alt}
            fill
            sizes="(max-width: 640px) 100vw, 66vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={2} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={photos.tentInside.src}
            alt={photos.tentInside.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={3} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={photos.riversideTent.src}
            alt={photos.riversideTent.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
