import { Postcard } from "@/components/Postcard";
import { RiverBand } from "@/components/RiverBand";
import { Rsvp } from "@/components/Rsvp";
import { SiteFooter } from "@/components/SiteFooter";
import { Weekend } from "@/components/Weekend";

export default function Home() {
  return (
    <>
      <main>
        <Postcard />
        <Weekend />
        <RiverBand />
        <Rsvp />
      </main>
      <SiteFooter />
    </>
  );
}
