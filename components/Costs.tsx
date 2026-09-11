import { Reveal } from "@/components/Reveal";
import { trip } from "@/lib/trip";

const campPerPerson = trip.campPerPersonNight * trip.campNights;
const campScoutDad = campPerPerson * 2;

export function Costs() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-6 sm:py-10">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-stamp uppercase">
            Kitchen-table math
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Scout + Dad lands around ${trip.scoutDadApprox}.
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            That ballpark is raft + lunch + two nights of camp.{" "}
            {trip.mealsNote} Friday dinner is our own. No one is sneaking a
            surprise zipline onto the invoice.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="paper-card relative overflow-hidden rounded-2xl border border-dashed border-ink/20 p-5 sm:p-6">
            <p className="mb-4 font-display text-xl">Camp ledger</p>
            <table className="w-full text-left text-[0.98rem]">
              <caption className="sr-only">
                Cost breakdown for camp nights and raft seats
              </caption>
              <tbody className="divide-y divide-ink/10">
                <tr>
                  <th scope="row" className="py-3 pr-3 font-medium">
                    Camp, ${trip.campPerPersonNight}/person/night ×{" "}
                    {trip.campNights} nights
                  </th>
                  <td className="py-3 text-right tabular-nums">
                    ${campPerPerson}/person
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 pr-3 font-medium">
                    Scout raft (includes lunch)
                  </th>
                  <td className="py-3 text-right tabular-nums">
                    ${trip.scoutRaft}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 pr-3 font-medium">
                    Adult raft (includes lunch)
                  </th>
                  <td className="py-3 text-right tabular-nums">
                    ${trip.adultRaft}
                  </td>
                </tr>
                <tr className="font-display text-lg">
                  <th scope="row" className="pt-4 font-semibold">
                    Scout + Dad ≈ raft + lunch + 2 nights
                  </th>
                  <td className="pt-4 text-right font-semibold tabular-nums">
                    ${trip.scoutDadApprox}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-5 text-sm text-ink-soft">
              ${trip.scoutRaft} Scout raft + ${trip.adultRaft} adult raft + $
              {campScoutDad} camp (two people, two nights) = $
              {trip.scoutDadApprox}. {trip.mealsNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
