import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(-?\d+(\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(match ? "0" + match[3] : value);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseFloat(match[1]);
    const decimals = match[2] ? match[2].length - 1 : 0;
    const suffix = match[3];
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals) + suffix),
    });
    return () => controls.stop();
  }, [inView, match]);

  return <span ref={ref}>{display}</span>;
}
