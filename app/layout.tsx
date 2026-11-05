import type { Metadata } from "next";
import Script from "next/script";
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
    "Arrow of Light den, dads and Scouts. The booked campout is Pinnacles Campground, group site #127 and tent site #130, Fri Apr 30 to Sun May 2, 2027. The pitch still compares Angel Island, Coloma, and Pinnacles. The den is not going rafting.",
  openGraph: {
    title: "Three ways to close out Cubs · Arrow of Light den",
    description:
      "Booked: Pinnacles group site #127 and tent site #130, Fri Apr 30 to Sun May 2, 2027. The pitch still compares Angel Island, Coloma, and Pinnacles.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-foam font-sans text-ink">
        <Script id="reveal-fail-open" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js-reveal");
setTimeout(function(){
  document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("is-in");});
},1200);`}
        </Script>
        {children}
      </body>
    </html>
  );
}
