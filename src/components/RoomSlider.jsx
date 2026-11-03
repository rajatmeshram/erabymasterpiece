"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "@/data/site";

export default function RoomSlider() {
  const [index, setIndex] = useState(0);
  const room = experiences[index];

  const go = (dir) => {
    setIndex((i) => (i + dir + experiences.length) % experiences.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="rooms" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <AnimatePresence mode="wait">
        <motion.img
          key={room.image}
          src={room.image}
          alt={room.title}
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/20" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 py-10 sm:px-10">
        <p className="font-roman pt-16 text-[11px] tracking-[0.48em] text-gold uppercase">
          III · Rooms of the house
        </p>

        <div>
          <p className="font-display text-7xl text-gold/40 sm:text-9xl">
            {room.index}
          </p>
          <h2 className="font-display -mt-4 text-5xl text-ivory sm:text-7xl">
            {room.title}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-ivory/85">
            {room.copy}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-8">
          <div className="flex gap-2">
            {experiences.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-gold" : "w-3 bg-ivory/30"
                }`}
                aria-label={item.title}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold"
              aria-label="Previous room"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-12 w-12 place-items-center rounded-full bg-gold text-oxblood"
              aria-label="Next room"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
