"use client";

const frames = [
  { src: "/media/kitchen.jpg", title: "Homemade" },
  { src: "/media/steak.jpg", title: "Award-winning" },
  { src: "/media/pasta.jpg", title: "Small batch" },
  { src: "/media/oysters.jpg", title: "First course" },
  { src: "/media/seabass.jpg", title: "From the pass" },
  { src: "/media/risotto.jpg", title: "The dining room" },
  { src: "/media/banquet.jpg", title: "Banquet" },
  { src: "/media/dessert.jpg", title: "Pastry" },
];

function Slide({ frame }) {
  return (
    <figure className="w-[min(78vw,620px)] shrink-0 overflow-hidden rounded-[18px] bg-ink">
      <img
        src={frame.src}
        alt={frame.title}
        className="h-[58vh] w-full object-cover sm:h-[64vh]"
      />
      <figcaption className="flex items-center justify-between gap-4 bg-ink px-6 py-5 text-ivory">
        <span className="h-2 w-2 shrink-0 rounded-full bg-ivory" />
        <h3 className="font-roman text-center text-lg tracking-[0.28em] uppercase sm:text-xl">
          {frame.title}
        </h3>
        <span className="h-2 w-2 shrink-0 rounded-full bg-ivory" />
      </figcaption>
    </figure>
  );
}

export default function KitchenStrip() {
  const loop = [...frames, ...frames];

  return (
    <section className="overflow-hidden bg-oxblood py-5">
      <div className="era-marquee flex gap-3 px-3">
        {loop.map((frame, i) => (
          <Slide key={`${frame.title}-${i}`} frame={frame} />
        ))}
      </div>
    </section>
  );
}
