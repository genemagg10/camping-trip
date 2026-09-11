import type { Metadata } from "next";
import { Bangers, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Last camping trip of the year! · Arrow of Light den",
  description:
    "Arrow of Light den · Dads and Scouts. Last overnight before Scouts BSA — Fri Apr 23 – Sun Apr 25 at Whitewater Excitement, Lotus, CA. Cub Scout rafting patch Saturday, then ~14 miles. Soft hold only · about $327 for Scout + Dad.",
  openGraph: {
    title: "Last camping trip of the year! · Arrow of Light den",
    description:
      "South Fork American River · Whitewater Excitement, Lotus, CA · Fri Apr 23 – Sun Apr 25. Soft hold only · about $327 for Scout + Dad.",
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
