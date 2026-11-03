"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/site";

export default function ExperienceRail() {
  return (
    <div className="hide-scrollbar flex snap-x gap-5 overflow-x-auto px-5 pb-6 sm:px-8">
      {experiences.map((item, i) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.7 }}
          className="group relative h-[460px] w-[78vw] shrink-0 snap-start overflow-hidden sm:w-[360px]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-roman text-xs tracking-[0.4em] text-gold">
              {item.roman}
            </p>
            <h3 className="font-display mt-2 text-3xl text-ivory">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ivory/80">{item.copy}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
