import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Arrow of Light den · South Fork river weekend",
  description:
    "Den pitch for a soft-hold Cub Scout rafting + camp weekend, Fri Apr 23 – Sun Apr 25, with Whitewater Excitement on the South Fork American River. Cub Scout rafting patch Saturday morning. Interest only — nothing booked.",
  openGraph: {
    title: "Arrow of Light den · South Fork river weekend",
    description:
      "Fri Apr 23 – Sun Apr 25 · Lotus, CA · Cub Scout rafting patch, ~14 miles, two nights at the private campground. Soft hold only.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
