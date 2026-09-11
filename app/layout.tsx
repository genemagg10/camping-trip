import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Last camping trip of the year · Arrow of Light den",
  description:
    "Den pitch for a soft-hold Cub Scout rafting + camp weekend, Fri Apr 23 – Sun Apr 25, with Whitewater Excitement on the South Fork American River. Interest only — nothing booked.",
  openGraph: {
    title: "Last camping trip of the year · Arrow of Light den",
    description:
      "Fri Apr 23 – Sun Apr 25 · Lotus, CA · Cub Scout rafting patch, ~14 miles, two nights at the private campground. Soft hold only. Scout + Dad ≈ $327.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-foam font-sans text-ink">{children}</body>
    </html>
  );
}
