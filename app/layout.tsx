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
    "Den sales pitch: Arrow of Light rafting + camp weekend, Fri Apr 23 – Sun Apr 25, Whitewater Excitement on the South Fork American River. Sat 9am Cub Scout rafting patch, then ~14 miles + lunch. Soft hold only — Scout + Dad ≈ $327.",
  openGraph: {
    title: "Last camping trip of the year! · Arrow of Light den",
    description:
      "Hit the river. Fri Apr 23 – Sun Apr 25 · Lotus, CA · Cub Scout rafting patch, then ~14 miles. Soft hold. Scout + Dad ≈ $327.",
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
