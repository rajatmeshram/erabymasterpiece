"use client";

import { values } from "@/data/site";

function Icon({ name }) {
  const common = {
    viewBox: "0 0 64 64",
    className: "mx-auto h-24 w-24 stroke-gold",
    fill: "none",
    strokeWidth: "1.4",
  };
  if (name === "Fire first") {
    return (
      <svg {...common}>
        <path d="M32 10c4 10-8 14-4 24 2 6 8 10 14 10 12 0 18-12 12-24-8 6-12 4-22-10z" />
        <path d="M28 38c0 8 8 14 16 10" />
      </svg>
    );
  }
  if (name === "No shortcuts") {
    return (
      <svg {...common}>
        <circle cx="32" cy="32" r="18" />
        <path d="M20 32h24M32 20v24" />
        <path d="M14 14l36 36" />
      </svg>
    );
  }
  if (name === "Season like Rome") {
    return (
      <svg {...common}>
        <ellipse cx="32" cy="38" rx="16" ry="10" />
        <path d="M32 12c8 8 10 16 0 26C22 28 24 20 32 12z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="14" y="22" width="36" height="22" rx="2" />
      <path d="M14 30h36M22 22V18h20v4" />
    </svg>
  );
}

export default function Manifesto() {
  return (
    <section className="relative bg-oxblood px-4 pb-[40vh] pt-10">
      <div className="sticky top-0 z-40 bg-gradient-to-b from-oxblood via-oxblood to-oxblood/0 pb-6 pt-8 text-center">
        <p className="font-roman text-[11px] tracking-[0.48em] text-gold uppercase">
          II
        </p>
        <h2 className="font-display gold-text mt-2 text-4xl leading-none sm:text-5xl">
          The house
        </h2>
      </div>

      <div className="relative mx-auto mt-6 w-[min(94vw,720px)]">
        {values.map((item, i) => {
          const tilt = i % 2 === 0 ? -1.4 : 1.6;
          return (
            <article
              key={item.title}
              className="sticky mb-[18vh]"
              style={{
                top: `calc(6.5rem + ${i * 42}px)`,
                zIndex: i + 1,
                transform: `rotate(${tilt}deg)`,
              }}
            >
              <div className="relative min-h-[min(72vh,640px)] rounded-[36px] border border-gold/25 bg-ink shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="absolute -top-8 left-1/2 flex w-[92%] -translate-x-1/2 items-center justify-between rounded-full bg-ivory px-7 py-5 text-ink">
                  <span className="h-2.5 w-2.5 rounded-full bg-oxblood" />
                  <h3 className="font-roman text-base tracking-[0.28em] uppercase sm:text-lg">
                    {item.title}
                  </h3>
                  <span className="h-2.5 w-2.5 rounded-full bg-oxblood" />
                </div>
                <div className="flex min-h-[min(72vh,640px)] flex-col items-center justify-center px-10 pb-16 pt-28 text-center sm:px-16">
                  <Icon name={item.title} />
                  <p className="mt-10 max-w-lg text-2xl leading-10 text-ivory sm:text-[1.85rem] sm:leading-[2.6rem]">
                    {item.copy}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
