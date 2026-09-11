import { Logistics } from "@/components/Logistics";
import { PatchBeat } from "@/components/PatchBeat";
import { Postcard } from "@/components/Postcard";
import { RiverBand } from "@/components/RiverBand";
import { SiteFooter } from "@/components/SiteFooter";
import { Weekend } from "@/components/Weekend";

export default function Home() {
  return (
    <>
      <main>
        <Postcard />
        <PatchBeat />
        <Weekend />
        <RiverBand />
        <Logistics />
      </main>
      <SiteFooter />
    </>
  );
}
