import { GettingThere } from "@/components/GettingThere";
import { Logistics } from "@/components/Logistics";

export function GettingAndCosts() {
  return (
    <section
      className="getting-costs mx-auto w-full min-w-0 max-w-6xl px-4 py-12 sm:px-6"
      aria-label="Getting there and logistics"
    >
      <GettingThere />
      <Logistics />
    </section>
  );
}
