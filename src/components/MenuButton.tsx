import { motion } from "framer-motion";

export default function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative z-[95] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-heading hover:border-border-bright transition-colors"
    >
      <span className="relative flex h-3.5 w-4 flex-col justify-between">
        <motion.span
          className="h-[1.5px] w-full bg-current"
          animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" as const }}
        />
        <motion.span
          className="h-[1.5px] w-full bg-current"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="h-[1.5px] w-full bg-current"
          animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" as const }}
        />
      </span>
    </button>
  );
}
