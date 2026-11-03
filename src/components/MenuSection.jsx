"use client";

import { useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { menu } from "@/data/site";

export default function MenuSection() {
  const dishes = useMemo(
    () =>
      [...menu.entrees, ...menu.mains].map((dish, i) => ({
        ...dish,
        index: String(i + 1).padStart(2, "0"),
      })),
    [],
  );
  const n = dishes.length;
  const step = 360 / n;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -step * (n - 1)],
  );

  return (
    <section ref={ref} className="relative h-[480vh] bg-oxblood">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="relative z-20 flex h-[46%] flex-col items-center justify-end px-5 pb-4">
          <svg
            viewBox="0 0 1000 200"
            className="mx-auto h-[18vh] w-[min(94vw,980px)]"
            aria-hidden="true"
          >
            <defs>
              <path id="era-arc" d="M 40 170 Q 500 8 960 170" fill="none" />
            </defs>
            <text
              fill="#efeade"
              fontSize="78"
              letterSpacing="6"
              fontFamily="Cormorant Garamond, serif"
              fontWeight="600"
            >
              <textPath href="#era-arc" startOffset="50%" textAnchor="middle">
                ENTRÉES &amp; MAINS
              </textPath>
            </text>
          </svg>
          <p className="mx-auto max-w-md text-center text-[12px] leading-6 tracking-[0.1em] text-gold uppercase">
            We write the card like a Roman feast because a bored table is a
            failed night.
          </p>
          <ActiveCopy dishes={dishes} rotate={rotate} step={step} n={n} />
        </div>

        <div className="absolute inset-x-0 top-[54%] z-10 border-t border-dashed border-gold/40" />

        <div className="absolute inset-x-0 top-[54%] z-10 flex justify-center">
          <div className="relative aspect-square w-[min(86%,640px)] shrink-0">
            <motion.div
              className="absolute inset-0"
              style={{ rotate, x: 0, y: 0, transformOrigin: "50% 50%" }}
            >
              {dishes.map((dish, i) => (
                <WheelSlot
                  key={dish.name}
                  dish={dish}
                  i={i}
                  step={step}
                  rotate={rotate}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveCopy({ dishes, rotate, step, n }) {
  const [i, setI] = useState(0);
  useMotionValueEvent(rotate, "change", (value) => {
    const next = Math.min(n - 1, Math.max(0, Math.round(-value / step)));
    setI((prev) => (prev === next ? prev : next));
  });
  const dish = dishes[i];

  return (
    <div className="mt-4 min-h-[9.5rem] text-center">
      <p className="font-display text-3xl text-ivory sm:text-4xl">{dish.name}</p>
      <p className="mt-2 text-sm leading-6 text-gold/85">{dish.copy}</p>
      <p className="font-roman mt-1 text-sm tracking-[0.2em]">{dish.price}</p>
      <Link
        href="/menu"
        className="mt-3 inline-block text-[11px] tracking-[0.32em] uppercase underline decoration-gold/40 underline-offset-8"
      >
        The full card
      </Link>
    </div>
  );
}

function WheelSlot({ dish, i, step, rotate }) {
  const upright = useTransform(rotate, (value) => -value - i * step);
  const nearTop = useTransform(rotate, (value) => {
    let a = (value + i * step) % 360;
    if (a > 180) a -= 360;
    if (a < -180) a += 360;
    return Math.abs(a) < step * 0.55 ? 1 : 0.34;
  });

  return (
    <div
      className="absolute inset-0"
      style={{ transform: `rotate(${i * step}deg)`, transformOrigin: "50% 50%" }}
    >
      <div className="absolute top-0 left-1/2">
        <motion.div
          style={{
            rotate: upright,
            x: "-50%",
            y: "-50%",
            opacity: nearTop,
            transformOrigin: "50% 50%",
          }}
          className="flex items-center gap-3"
        >
          <span className="font-display text-5xl leading-none text-ivory sm:text-7xl">
            {dish.index}
          </span>
          <img
            src={dish.image}
            alt=""
            className="h-16 w-16 rounded-full object-cover ring-1 ring-gold/40 sm:h-24 sm:w-24"
          />
        </motion.div>
      </div>
    </div>
  );
}
