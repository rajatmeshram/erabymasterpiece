"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function FloatingAsset({
  src,
  className = "",
  depth = 30,
  rotate = 12,
  delay = 0,
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-1, 1], [-depth, depth]), {
    stiffness: 60,
    damping: 18,
  });
  const y = useSpring(useTransform(my, [-1, 1], [-depth, depth]), {
    stiffness: 60,
    damping: 18,
  });
  const rx = useSpring(useTransform(my, [-1, 1], [rotate, -rotate]), {
    stiffness: 50,
    damping: 16,
  });
  const ry = useSpring(useTransform(mx, [-1, 1], [-rotate, rotate]), {
    stiffness: 50,
    damping: 16,
  });

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <motion.img
      src={src}
      alt=""
      style={{ x, y, rotateX: rx, rotateY: ry }}
      initial={{ opacity: 0, scale: 0.86, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`asset-3d pointer-events-none select-none ${className}`}
    />
  );
}
