"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const Compass3D = dynamic(() => import("./Compass3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-oxblood">
      <img
        src="/media/table.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-oxblood/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(181,156,95,0.22),transparent_46%)]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pt-24 pb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-roman text-[11px] tracking-[0.5em] text-ivory/80 uppercase"
        >
          I · 41° North
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display gold-text mt-3 text-[18vw] leading-[0.78] sm:text-[8.5rem]"
        >
          ERA
        </motion.h1>
        <div className="mt-2 flex w-full max-w-sm items-center gap-4">
          <span className="gold-rule flex-1" />
          <p className="font-roman text-[11px] tracking-[0.4em] text-ivory uppercase">
            By Masterpiece
          </p>
          <span className="gold-rule flex-1" />
        </div>

        <div className="relative mx-auto mt-2 aspect-square w-[min(72vw,420px)]">
          <img
            src="/brand/compass-gold.png?v=3"
            alt=""
            className="absolute inset-[10%] w-[80%] animate-[spin_64s_linear_infinite] object-contain opacity-30"
          />
          <Compass3D />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-2 max-w-md text-base leading-7 text-ivory/88"
        >
          A Roman table for a modern city — caviar, wagyu, sea bass, and a
          cellar opened at the cloth.
        </motion.p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/menu"
            className="rounded-full bg-ivory px-9 py-4 text-[12px] tracking-[0.32em] text-oxblood uppercase shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
          >
            Open the menu
          </Link>
          <Link
            href="#rooms"
            className="rounded-full border-2 border-gold bg-oxblood px-9 py-4 text-[12px] tracking-[0.32em] text-ivory uppercase shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
          >
            Enter the rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
