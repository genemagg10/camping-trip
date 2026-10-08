import { still } from "@/lib/copy";
import { Reveal } from "@/components/Reveal";

export function StillToFigure() {
  return (
    <Reveal as="section" id="open-questions" className="scroll-mt-4 border-t-4 border-gold">
      <div className="option-inner">
        <h2 className="text-3xl font-bold tracking-wide text-river text-pretty sm:text-4xl">
          {still.title}
        </h2>
        <p className="mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-pretty">
          {still.lede}
        </p>
        <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-5 text-[1.05rem] leading-relaxed">
          {still.items.map((item) => (
            <li key={item} className="text-pretty">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
