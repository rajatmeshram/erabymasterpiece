"use client";

import { motion } from "framer-motion";

export default function OrnamentHeading({
  kicker = "",
  title,
  align = "center",
  asset = "/brand/wings.png",
  assetAlt = "ERA sculptural ornament",
}) {
  const aligned =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`relative flex flex-col ${aligned} gap-4`}>
      {kicker ? (
        <p className="font-roman text-[11px] tracking-[0.46em] uppercase text-gold/80">
          {kicker}
        </p>
      ) : null}
      <div className="relative inline-flex items-center justify-center px-16 sm:px-24">
        <motion.img
          initial={{ opacity: 0, x: -24, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={asset}
          alt=""
          className="pointer-events-none absolute left-0 top-1/2 h-16 w-16 -translate-y-1/2 object-contain sm:h-24 sm:w-24"
        />
        <h2 className="font-display gold-text max-w-4xl text-4xl leading-none sm:text-6xl md:text-7xl">
          {title}
        </h2>
        <motion.img
          initial={{ opacity: 0, x: 24, rotate: 8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={asset}
          alt={assetAlt}
          className="pointer-events-none absolute right-0 top-1/2 h-16 w-16 -translate-y-1/2 scale-x-[-1] object-contain sm:h-24 sm:w-24"
        />
      </div>
      <div className="gold-rule w-40" />
    </div>
  );
}
