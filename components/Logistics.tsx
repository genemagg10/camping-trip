import { Reveal } from "@/components/Reveal";
import { copy } from "@/lib/copy";
import { trip } from "@/lib/trip";

export function Logistics() {
  return (
    <section
      id="logistics"
      className="mx-auto w-full min-w-0 max-w-xl px-4 py-12 sm:px-6"
    >
      <Reveal>
        <article className="logistics-card rounded-2xl bg-white px-5 py-6 sm:px-6">
          <h2 className="text-xl font-bold tracking-wide text-river uppercase">
            {copy.logistics.title}
          </h2>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-pretty text-ink/80">
            {copy.logistics.hold}
          </p>
          <dl className="mt-5 grid gap-3 text-[1.02rem]">
            {copy.logistics.rows.map((row) => (
              <div key={row.label} className="logistics-row">
                <dt className="font-semibold text-ink">{row.label}</dt>
                <dd className="text-right text-ink/80">{row.value}</dd>
              </div>
            ))}
            <div className="logistics-row logistics-total">
              <dt>{copy.logistics.totalLabel}</dt>
              <dd className="text-right">{copy.logistics.totalValue}</dd>
            </div>
          </dl>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-pretty text-ink/80">
            {copy.logistics.meals}
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-pretty">
            {copy.logistics.outfitter}
            <br />
            <a className="underline underline-offset-2" href={trip.website}>
              whitewaterexcitement.com
            </a>
            {" · "}
            <a className="underline underline-offset-2" href={trip.phoneHref}>
              {trip.phone}
            </a>
          </p>
        </article>
      </Reveal>
    </section>
  );
}
