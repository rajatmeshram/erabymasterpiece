"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { events } from "@/data/site";

const tabs = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
];

export default function EventList() {
  const [tab, setTab] = useState("upcoming");
  const list = useMemo(
    () => events.filter((event) => event.status === tab),
    [tab],
  );
  const featured = list[0];
  const rest = list.slice(1);

  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-roman text-[11px] tracking-[0.42em] uppercase">
              II · Calendar
            </p>
            <h2 className="font-display gold-text mt-3 text-5xl sm:text-7xl">
              The nights
            </h2>
          </div>
          <div className="flex rounded-full border border-gold/40 p-1">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`rounded-full px-5 py-2 text-[11px] tracking-[0.28em] uppercase transition ${
                  tab === item.id
                    ? "bg-gold text-oxblood"
                    : "text-gold hover:text-ivory"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            {featured ? (
              <article className="group relative mt-10 min-h-[52vh] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="relative z-10 flex min-h-[52vh] flex-col justify-end p-6 sm:p-10">
                  <p className="font-roman text-[11px] tracking-[0.3em] uppercase">
                    {featured.date} · {featured.place}
                  </p>
                  <h3 className="font-display mt-2 text-4xl text-ivory sm:text-6xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-ivory/85">{featured.copy}</p>
                </div>
              </article>
            ) : null}

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {rest.map((event) => (
                <article key={event.id} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 bg-ink/80 px-3 py-1 text-[10px] tracking-[0.22em] text-gold uppercase">
                      {event.date}
                    </span>
                  </div>
                  <p className="font-roman mt-4 text-[11px] tracking-[0.28em] uppercase">
                    {event.place}
                  </p>
                  <h3 className="font-display mt-1 text-3xl text-ivory">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gold/85">{event.copy}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
