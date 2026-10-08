import Image from "next/image";
import { ExtLink } from "@/components/ExtLink";
import { Reveal } from "@/components/Reveal";
import { ScheduleIconMark } from "@/components/ScheduleIcons";
import type { FamilyAddon, TripOption as TripOptionData } from "@/lib/options";

function PhotoFigure({
  photo,
  sizes,
  aspect = "aspect-[16/9]",
}: {
  photo: TripOptionData["photo"];
  sizes: string;
  aspect?: string;
}) {
  return (
    <figure className="min-w-0">
      <div className={`relative overflow-hidden rounded-xl bg-mist ${aspect}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 text-sm leading-snug text-pretty text-ink/75">
        {photo.caption}{" "}
        <ExtLink href={photo.creditHref}>{photo.credit}</ExtLink>
      </figcaption>
    </figure>
  );
}

function FamilyAddOn({ addon }: { addon: FamilyAddon }) {
  return (
    <aside className="private-addon" aria-label="Private family raft, not a Scout event">
      <p className="text-xs font-extrabold tracking-[0.14em] text-ember uppercase">
        {addon.kicker}
      </p>
      <div className="mt-2 flex items-start gap-3">
        <ScheduleIconMark name="raft" className="mt-1 size-6 shrink-0 text-river" />
        <h3 className="text-2xl font-bold tracking-wide text-ink text-pretty">
          {addon.title}
        </h3>
      </div>
      <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:items-start">
        <div className="min-w-0">
          {addon.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-3 text-[1.02rem] leading-relaxed text-pretty first:mt-0">
              {paragraph}
            </p>
          ))}
          <dl className="mt-4 grid gap-2">
            {addon.prices.map((price) => (
              <div key={price.name} className="logistics-row text-sm">
                <dt>
                  <span className="font-bold">{price.name}</span>
                  <span className="mt-0.5 block text-ink/70">{price.detail}</span>
                </dt>
                <dd className="shrink-0 font-bold">{price.price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm leading-relaxed text-pretty">{addon.extra}</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            {addon.links.map((link) => (
              <li key={link.href}>
                <ExtLink href={link.href}>{link.label}</ExtLink>
              </li>
            ))}
          </ul>
        </div>
        <PhotoFigure
          photo={addon.photo}
          sizes="(min-width: 1024px) 30vw, 100vw"
          aspect="aspect-[3/2]"
        />
      </div>
    </aside>
  );
}

export function TripOption({ option }: { option: TripOptionData }) {
  return (
    <Reveal as="section" id={option.id} className="option-section scroll-mt-4 border-t border-mist">
      <div className="option-inner">
        <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.14em] text-ember uppercase">
          <span className="option-num" aria-hidden="true">
            {option.number}
          </span>
          {option.kicker}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-wide text-river text-pretty sm:text-4xl">
          {option.title}
        </h2>
        <p className="mt-1 text-lg font-semibold text-ink/80">{option.place}</p>
        <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-pretty">
          {option.lede}
        </p>

        <div className="mt-6 max-w-5xl">
          <PhotoFigure
            photo={option.photo}
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>

        <div className="mt-8 max-w-3xl">
          <h3 className="text-lg font-bold tracking-wide text-forest uppercase">
            Why this is fun for these Scouts
          </h3>
          {option.why.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-3 text-[1.02rem] leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold tracking-wide text-forest uppercase">
            Draft weekend
          </h3>
          <div className="mt-4 grid gap-6">
            {option.days.map((day) => (
              <article key={day.id} className="schedule-card min-w-0 rounded-2xl bg-white p-4">
                <h4 className="text-sm font-extrabold tracking-[0.14em] text-river uppercase">
                  {day.label}
                </h4>
                <ol className="schedule-timeline mt-4">
                  {day.beats.map((beat) => (
                    <li key={`${day.id}-${beat.title}`} className="schedule-row">
                      <p className="schedule-time">{beat.time}</p>
                      <div className="schedule-rail" aria-hidden="true">
                        <span className="schedule-dot" />
                      </div>
                      <div className="min-w-0">
                        <p className="flex items-start gap-2 font-bold text-pretty">
                          <ScheduleIconMark
                            name={beat.icon}
                            className="mt-0.5 size-4 shrink-0 text-river"
                          />
                          <span>{beat.title}</span>
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-pretty text-ink/80">
                          {beat.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>

        {option.afterDaysNote ? (
          <p className="den-ends mt-8">{option.afterDaysNote}</p>
        ) : null}
        {option.addon ? (
          <div className="mt-4">
            <FamilyAddOn addon={option.addon} />
          </div>
        ) : null}

        <div className="getting-costs mt-10">
          <article className="logistics-card min-w-0 rounded-2xl bg-white p-5">
            <h3 className="text-lg font-bold tracking-wide text-forest uppercase">
              Logistics
            </h3>
            <dl className="mt-4 grid gap-3">
              {option.logistics.map((fact) => (
                <div key={fact.label} className="grid gap-1 border-b border-mist pb-3 last:border-b-0">
                  <dt className="text-sm font-extrabold tracking-wide text-river uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-[1.02rem] leading-relaxed text-pretty">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <h4 className="mt-5 text-sm font-extrabold tracking-[0.12em] text-forest uppercase">
              Gear
            </h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed">
              {option.gear.map((item) => (
                <li key={item} className="text-pretty">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-col gap-1 text-sm">
              {option.maps.map((link) => (
                <li key={link.href}>
                  <ExtLink href={link.href}>{link.label}</ExtLink>
                  <span className="text-ink/60"> · not a live traffic quote</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="logistics-card min-w-0 rounded-2xl bg-white p-5">
            <h3 className="text-lg font-bold tracking-wide text-forest uppercase">
              Ballpark, one Scout and one Dad
            </h3>
            <dl className="mt-4 grid gap-2">
              {option.costs.map((line) => (
                <div key={line.label} className="logistics-row text-sm">
                  <dt className="text-pretty">{line.label}</dt>
                  <dd className="shrink-0 font-semibold">{line.amount}</dd>
                </div>
              ))}
              <div className="logistics-row logistics-total text-base">
                <dt>Working total</dt>
                <dd>{option.costTotal}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-ink/80">
              {option.costNote}
            </p>
          </article>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg font-bold tracking-wide text-forest uppercase">
            Arrow of Light
          </h3>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-pretty">{option.aol}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="activity-card pros min-w-0 rounded-2xl bg-white p-5">
            <h3 className="text-lg font-bold tracking-wide text-forest uppercase">Pros</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              {option.pros.map((item) => (
                <li key={item} className="text-pretty">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="activity-card cons min-w-0 rounded-2xl bg-white p-5">
            <h3 className="text-lg font-bold tracking-wide text-ember uppercase">Cons</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              {option.cons.map((item) => (
                <li key={item} className="text-pretty">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 max-w-3xl">
          <h3 className="text-lg font-bold tracking-wide text-forest uppercase">
            Open questions
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed">
            {option.questions.map((item) => (
              <li key={item} className="text-pretty">
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-extrabold tracking-[0.12em] text-ink/70 uppercase">
            Sources for this option
          </h3>
          <ul className="mt-2 flex flex-col gap-1 text-sm">
            {option.sources.map((link) => (
              <li key={link.href}>
                <ExtLink href={link.href}>{link.label}</ExtLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
