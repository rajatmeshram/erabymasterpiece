"use client";

import { shopReels } from "@/data/site";

export default function WatchAndShop() {
  return (
    <section className="bg-ivory py-16 text-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-roman text-[11px] tracking-[0.4em] text-teal uppercase">
          Take the house home
        </p>
        <h2 className="font-display mt-3 text-4xl text-oxblood sm:text-6xl">
          Watch & Shop
        </h2>
      </div>
      <div className="hide-scrollbar mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-6 sm:px-8">
        {shopReels.map((reel) => (
          <article
            key={reel.id}
            className="watch-card group relative h-[560px] w-[250px] shrink-0 overflow-hidden bg-ink sm:w-[270px]"
          >
            <img
              src={reel.image}
              alt={reel.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 opacity-0 transition group-hover:opacity-100">
              <span className="ml-1 border-y-8 border-l-[14px] border-y-transparent border-l-oxblood" />
            </span>
            <div className="absolute inset-x-3 bottom-3 rounded-xl bg-ivory p-3">
              <p className="line-clamp-2 text-[13px] font-medium leading-5">
                {reel.title} | {reel.product}
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-sm font-semibold text-oxblood">
                  {reel.price}
                </span>
                {reel.compare ? (
                  <span className="text-xs text-teal line-through">
                    {reel.compare}
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
