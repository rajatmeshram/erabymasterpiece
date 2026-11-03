"use client";

import { motion } from "framer-motion";

export default function PageHero({ roman, title, copy, sculpture }) {
  return (
    <section className="relative bg-oxblood px-5 pb-16 pt-36 sm:px-8">
      <div className="relative mx-auto max-w-7xl">
        {sculpture ? (
          <motion.img
            src={sculpture}
            alt=""
            initial={{ opacity: 0, y: 20, rotateX: 12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            className="asset-3d mb-8 h-32 w-auto max-w-[280px] object-contain object-left sm:h-40"
          />
        ) : null}
        <p className="font-roman text-[11px] tracking-[0.46em] text-ivory/80 uppercase">
          {roman}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display gold-text mt-4 max-w-4xl text-5xl leading-[0.92] sm:text-7xl"
        >
          {title}
        </motion.h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/85">{copy}</p>
      </div>
    </section>
  );
}
