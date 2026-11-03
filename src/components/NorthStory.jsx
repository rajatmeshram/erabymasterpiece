"use client";

import Link from "next/link";

export default function NorthStory() {
  return (
    <section className="bg-teal">
      <div className="mx-auto grid min-h-[80svh] max-w-7xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="font-roman text-[11px] tracking-[0.46em] uppercase">
            V · 41° North
          </p>
          <h2 className="font-display gold-text mt-5 text-5xl leading-[0.92] sm:text-7xl">
            A table,
            <br />
            not a backdrop
          </h2>
          <p className="mt-8 max-w-md text-base leading-8 text-ivory/88">
            Hospitality here is plated: caviar, wagyu, sea bass, a cellar that
            opens at the table. The compass is only the bearing — the night is
            the meal.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-block text-[11px] tracking-[0.32em] uppercase underline decoration-gold/50 underline-offset-8"
          >
            Open the menu
          </Link>
        </div>
        <img
          src="/media/service.jpg"
          alt="Service at ERA"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
    </section>
  );
}
