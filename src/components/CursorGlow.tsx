import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { damping: 28, stiffness: 200, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 200, mass: 0.4 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, rgba(255,138,61,0.13), transparent 65%)",
      }}
    />
  );
}
