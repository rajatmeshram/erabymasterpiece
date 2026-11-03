"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let hover = false;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target;
      hover = Boolean(
        t.closest("a, button, [data-cursor='gold']"),
      );
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        dot.current.classList.toggle("is-hover", hover);
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    const id = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(id);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ring} className="era-ring hidden md:block" />
      <div ref={dot} className="era-cursor hidden md:block" />
    </>
  );
}
