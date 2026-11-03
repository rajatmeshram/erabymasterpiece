import { Cinzel, Cormorant_Garamond, League_Spartan } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-era-display",
});

const roman = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-era-roman",
});

const body = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-era-body",
});

export const metadata = {
  title: "ERA by Masterpiece",
  description:
    "A hospitality house at 41°N — dining, nights, and ceremony in oxblood and bust gold.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${roman.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-oxblood text-gold">
        <SmoothScroll>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
