"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/data/site";

const filters = ["All", "Dining", "Nights", "Interiors", "Events"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const shots = useMemo(
    () =>
      filter === "All" ? gallery : gallery.filter((shot) => shot.tag === filter),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-[11px] tracking-[0.24em] uppercase ${
              filter === item
                ? "bg-gold text-oxblood"
                : "border border-gold/30 text-gold"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-3 lg:grid-cols-4">
        {shots.map((shot, i) => (
          <motion.button
            layout
            type="button"
            key={shot.id}
            onClick={() => setActive(shot)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className={`group relative overflow-hidden ${
              i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={shot.image}
              alt={shot.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/35" />
            <span className="absolute bottom-3 left-3 text-[11px] tracking-[0.22em] text-ivory uppercase opacity-0 transition group-hover:opacity-100">
              {shot.title}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.button
            type="button"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <img
              src={active.image}
              alt={active.title}
              className="max-h-[82vh] max-w-[92vw] object-contain"
            />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
