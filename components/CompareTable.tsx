import { compare } from "@/lib/copy";
import { Reveal } from "@/components/Reveal";

export function CompareTable() {
  return (
    <Reveal as="section" id="compare" className="scroll-mt-4 border-t border-mist bg-white">
      <div className="option-inner">
        <h2 className="text-3xl font-bold tracking-wide text-river text-pretty sm:text-4xl">
          {compare.title}
        </h2>
        <p className="mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-pretty">
          {compare.lede}
        </p>
        <p className="mt-2 text-sm text-ink/70">{compare.swipe}</p>
        <div className="compare-wrap mt-5">
          <table className="compare-table">
            <caption className="sr-only">
              Comparison of Angel Island, the Coloma campout, and Pinnacles on cost, drive, booking, wow, rules, and weather
            </caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Topic</span>
                </th>
                {compare.columns.map((column) => (
                  <th key={column.id} scope="col">
                    <a href={`#${column.id}`}>{column.label}</a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.cells.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
