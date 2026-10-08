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
  title: "Three ways to close out Cubs · Arrow of Light den",
  description:
    "Arrow of Light den, dads and Scouts. Fri Apr 23 to Sun Apr 25, 2027. Three weekends to compare: Angel Island, a Coloma campout, and Pinnacles. Soft hold only. Nothing booked. The den is not going rafting.",
  openGraph: {
    title: "Three ways to close out Cubs · Arrow of Light den",
    description:
      "Fri Apr 23 to Sun Apr 25, 2027. Angel Island, Coloma, or Pinnacles. Soft hold only. Nothing booked.",
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
