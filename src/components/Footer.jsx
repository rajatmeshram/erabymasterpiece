import Link from "next/link";
import { navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-ink px-6 py-16 text-gold">
      <img
        src="/brand/bird.png"
        alt=""
        className="pointer-events-none absolute right-8 bottom-8 w-40 max-w-[40%] object-contain opacity-25"
      />
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <img src="/brand/logo.png" alt="ERA by Masterpiece" className="w-44" />
          <p className="mt-6 max-w-xs text-sm leading-7 text-gold/80">
            A hospitality house at 41° North — dining, nights, and ceremony in
            oxblood, gold, and chrome.
          </p>
        </div>
        <div>
          <p className="font-roman text-[11px] tracking-[0.4em] uppercase text-ivory">
            Navigate
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.18em] uppercase hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-roman text-[11px] tracking-[0.4em] uppercase text-ivory">
            Reservations
          </p>
          <p className="mt-5 text-sm leading-7">
            host@erabymasterpiece.com
            <br />
            +91 22 4100 41 00
            <br />
            Open daily · 12:00 — 01:00
          </p>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-7xl text-[11px] tracking-[0.28em] uppercase text-gold/50">
        © MMXXVI ERA by Masterpiece · All rites reserved
      </p>
    </footer>
  );
}
