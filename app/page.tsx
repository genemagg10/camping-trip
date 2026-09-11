import { LowerThird } from "@/components/LowerThird";
import { Postcard } from "@/components/Postcard";
import { RiverBand } from "@/components/RiverBand";
import { Rsvp } from "@/components/Rsvp";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <main>
        <Postcard />
        <LowerThird />
        <RiverBand />
        <Rsvp />
      </main>
      <SiteFooter />
    </>
  );
}
