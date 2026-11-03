"use client";

import { motion } from "framer-motion";

function Palmette() {
  return (
    <svg
      className="palmette"
      viewBox="0 0 520 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 9h140 M370 9h140"
        stroke="#b59c5f"
        strokeWidth="1"
      />
      <path
        d="M210 9c12-10 24-10 36 0 12 10 24 10 36 0 12-10 24-10 36 0 12 10 24 10 36 0"
        stroke="#b59c5f"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function ChapterTitle({
  kicker,
  title,
  sculpture,
  pose = "crown",
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {pose === "crown" && sculpture ? (
        <motion.img
          src={sculpture}
          alt=""
          initial={{ opacity: 0, y: 24, rotateX: 18 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="asset-3d mb-5 h-28 w-auto max-w-[240px] object-contain sm:h-40 sm:max-w-[300px]"
        />
      ) : null}

      {kicker ? (
        <p className="font-roman text-[11px] tracking-[0.48em] text-gold/80 uppercase">
          {kicker}
        </p>
      ) : null}

      <h2 className="font-display gold-text mt-4 max-w-5xl px-4 text-4xl leading-[0.92] sm:text-6xl md:text-7xl">
        {title}
      </h2>

      <div className="mt-6">
        <Palmette />
      </div>

      {pose === "stage" && sculpture ? (
        <motion.img
          src={sculpture}
          alt=""
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="asset-3d mt-6 h-24 w-auto max-w-md object-contain sm:h-36"
        />
      ) : null}
    </div>
  );
}
