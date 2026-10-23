const GOLD = "#e6b422";
const EMBER = "#e07a3d";
const FOAM = "#f4f7f5";
const WOOD = "#6b3e2e";
const WOOD_DARK = "#3d2418";
const COAL = "#2a1814";

/** Flame rows from the log upward. Each saved RSVP lights one more row. */
const FLAMES: (string | null)[][] = [
  [null, null, EMBER, GOLD, EMBER, null, null],
  [null, EMBER, GOLD, FOAM, GOLD, EMBER, null],
  [null, GOLD, FOAM, GOLD, FOAM, GOLD, null],
  [EMBER, GOLD, FOAM, GOLD, FOAM, GOLD, EMBER],
  [null, EMBER, GOLD, FOAM, GOLD, EMBER, null],
  [null, null, GOLD, FOAM, GOLD, null, null],
  [null, null, EMBER, GOLD, EMBER, null, null],
  [null, null, null, GOLD, null, null, null],
];

function Px({
  x,
  y,
  color,
  className = "",
}: {
  x: number;
  y: number;
  color: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute size-2 ${className}`}
      style={{ left: x * 8, bottom: y * 8, background: color }}
    />
  );
}

export function Campfire({
  responses,
  pop,
}: {
  responses: number;
  pop?: boolean;
}) {
  const lit = Math.min(Math.max(responses, 0), FLAMES.length);
  const label =
    responses === 0
      ? "The fire is coals until the first family RSVPs."
      : `${responses} ${responses === 1 ? "family has" : "families have"} answered, and the flame is taller.`;

  return (
    <figure className="campfire-scene relative h-56 overflow-hidden rounded-2xl border-2 border-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-4 left-6 size-2 bg-gold/80" />
        <span className="absolute top-8 left-16 size-2 bg-foam/70" />
        <span className="absolute top-5 right-10 size-2 bg-gold/70" />
        <span className="absolute top-12 right-6 size-2 bg-foam/50" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-9 flex justify-center" aria-hidden="true">
        <div className={`relative h-40 w-40 ${pop ? "flame-pop" : ""}`}>
          <Px x={4} y={2} color={WOOD_DARK} />
          <Px x={5} y={2} color={WOOD} />
          <Px x={6} y={2} color={WOOD} />
          <Px x={7} y={2} color={WOOD_DARK} />
          <Px x={8} y={3} color={WOOD} />
          <Px x={9} y={3} color={WOOD_DARK} />
          <Px x={10} y={3} color={WOOD} />
          <Px x={11} y={2} color={WOOD_DARK} />
          <Px x={3} y={3} color={WOOD} />
          <Px x={4} y={3} color={WOOD_DARK} />
          <Px x={12} y={3} color={WOOD} />
          <Px x={6} y={4} color={COAL} />
          <Px x={7} y={4} color={EMBER} />
          <Px x={8} y={4} color={COAL} />
          <Px x={9} y={4} color={EMBER} />
          <Px x={10} y={4} color={COAL} />
          {FLAMES.slice(0, lit).map((row, rowIndex) =>
            row.map((color, cell) =>
              color ? (
                <Px
                  key={`${rowIndex}-${cell}`}
                  x={5 + cell}
                  y={5 + rowIndex}
                  color={color}
                  className={rowIndex === lit - 1 ? "flame-tip" : "flame-bit"}
                />
              ) : null,
            ),
          )}
        </div>
      </div>

      <div className="hiker-track" aria-hidden="true">
        <span className="hiker">
          <span className="absolute top-0 left-1 h-2 w-4 bg-forest" />
          <span className="absolute top-0 left-2 size-2 bg-forest" />
          <span className="absolute top-2 left-1.5 size-2 bg-[#f0c9a0]" />
          <span className="absolute top-4 left-1 h-3 w-3 bg-river" />
          <span className="absolute top-4 left-4 size-2 bg-[#6b3e2e]" />
          <span className="hiker-leg hiker-leg-a absolute top-7 left-1 h-2 w-1 bg-ink" />
          <span className="hiker-leg hiker-leg-b absolute top-7 left-3 h-2 w-1 bg-ink" />
        </span>
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 bg-ink/55 px-3 py-1.5 text-center text-xs font-bold tracking-wide text-foam">
        {label}
      </figcaption>
    </figure>
  );
}
