"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open ? "bg-oxblood/92 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="relative z-50 w-[132px] sm:w-[168px]">
            <img src="/brand/logo.png" alt="ERA by Masterpiece" className="w-full" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex items-center gap-3 text-[11px] tracking-[0.4em] text-gold uppercase"
            aria-label="Menu"
          >
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
            <span className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/40">
              <span
                className={`h-px w-4 bg-gold transition ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-4 bg-gold transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex bg-ink"
          >
            <div className="relative hidden w-[38%] overflow-hidden lg:block">
              <img
                src="/media/interior.jpg"
                alt=""
                className="h-full w-full object-cover opacity-70"
              />
              <img
                src="/brand/compass-gold.png"
                alt=""
                className="absolute inset-0 m-auto w-[55%] object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center px-8 sm:px-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.12 + i * 0.08, duration: 0.6 }}
                >
                  <Link
                    href={link.href}
                    className={`group flex items-baseline gap-6 border-b border-gold/20 py-5 ${
                      pathname === link.href ? "text-ivory" : "text-gold"
                    }`}
                  >
                    <span className="font-roman text-xs tracking-[0.4em]">
                      {link.roman}
                    </span>
                    <span className="font-display text-5xl leading-none transition group-hover:text-ivory sm:text-7xl">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <p className="font-roman mt-10 text-[11px] tracking-[0.4em] text-gold/60 uppercase">
                41°N · True north for the evening
              </p>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
