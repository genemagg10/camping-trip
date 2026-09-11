import { Reveal } from "@/components/Reveal";
import { copy } from "@/lib/copy";
import { trip } from "@/lib/trip";

export function GettingThere() {
  return (
    <Reveal>
      <article id="getting-there" className="getting-map-card rounded-2xl bg-white px-5 py-6 sm:px-6">
        <h2 className="getting-map-title text-xl font-bold tracking-wide text-river uppercase">
          {copy.gettingThere.title}
        </h2>
        <div className="getting-map-shell mt-4">
          <iframe
            className="getting-map-frame"
            title={copy.gettingThere.frameTitle}
            src={trip.osmEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="getting-map-caption mt-4 text-[1.02rem] leading-relaxed text-pretty text-ink/80">
          {copy.gettingThere.captionBefore}
          <strong className="font-semibold text-ink">
            {copy.gettingThere.captionFact}
          </strong>
          {copy.gettingThere.captionAfter}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-ink/65">
          {copy.gettingThere.caveat}
        </p>
        <p className="getting-map-links mt-3 text-sm leading-relaxed text-pretty">
          <a
            className="underline underline-offset-2"
            href={trip.mapsDirections}
            target="_blank"
            rel="noreferrer"
          >
            {copy.gettingThere.mapsLabel}
          </a>
          {" · "}
          <a
            className="underline underline-offset-2"
            href={trip.osmLarger}
            target="_blank"
            rel="noreferrer"
          >
            {copy.gettingThere.osmLabel}
          </a>
        </p>
      </article>
    </Reveal>
  );
}
