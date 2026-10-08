import { CompareTable } from "@/components/CompareTable";
import { Postcard } from "@/components/Postcard";
import { SiteFooter } from "@/components/SiteFooter";
import { StillToFigure } from "@/components/StillToFigure";
import { TripOption } from "@/components/TripOption";
import { jumps } from "@/lib/copy";
import { options } from "@/lib/options";

export default function Home() {
  return (
    <main className="min-w-0">
      <Postcard />
      <nav id="options" aria-label="Trip options" className="option-jump scroll-mt-4">
        <p className="w-full text-xs font-extrabold tracking-[0.16em] text-foam uppercase">
          Jump to an option
        </p>
        {jumps.map((jump) => (
          <a key={jump.href} href={jump.href}>
            {jump.label}
          </a>
        ))}
      </nav>
      {options.map((option) => (
        <TripOption key={option.id} option={option} />
      ))}
      <CompareTable />
      <StillToFigure />
      <SiteFooter />
    </main>
  );
}
