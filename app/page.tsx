import { Camp } from "@/components/Camp";
import { Costs } from "@/components/Costs";
import { Hero } from "@/components/Hero";
import { Itinerary } from "@/components/Itinerary";
import { Letter } from "@/components/Letter";
import { PatchMoment } from "@/components/PatchMoment";
import { RiverBand } from "@/components/RiverBand";
import { Rsvp } from "@/components/Rsvp";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SoftHoldBar } from "@/components/SoftHoldBar";

export default function Home() {
  return (
    <>
      <SoftHoldBar />
      <SiteHeader />
      <main>
        <Hero />
        <Letter />
        <PatchMoment />
        <Itinerary />
        <Costs />
        <RiverBand />
        <Camp />
        <Rsvp />
      </main>
      <SiteFooter />
    </>
  );
}
