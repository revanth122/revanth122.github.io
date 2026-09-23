import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data";
import type { SectionKey } from "../types";

const links: { key: SectionKey; label: string }[] = [
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
  { key: "education", label: "Education" },
  { key: "contact", label: "Contact" },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const row = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function MenuOverlay({
  open,
  onClose,
  onOpenSection,
}: {
  open: boolean;
  onClose: () => void;
  onOpenSection: (section: SectionKey) => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const select = (key: SectionKey) => {
    onClose();
    onOpenSection(key);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] bg-bg"
        >
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.4]" />

          <div className="relative flex h-full flex-col px-6 sm:px-12">
            <motion.nav
              variants={list}
              initial="hidden"
              animate="show"
              className="flex flex-1 flex-col justify-center gap-1 sm:gap-2"
            >
              {links.map((l, i) => (
                <motion.button
                  key={l.key}
                  variants={row}
                  onClick={() => select(l.key)}
                  className="group flex items-baseline gap-4 sm:gap-6 py-2 text-left"
                >
                  <span className="font-mono text-sm sm:text-base text-text-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-text-dim tracking-tight transition-colors group-hover:text-heading">
                    {l.label}
                  </span>
                  <span className="hidden sm:inline text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </motion.button>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col gap-6 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-dim hover:border-border-bright hover:text-heading transition-colors"
              >
                <Download size={14} />
                Download Resume
              </a>

              <div className="flex items-center gap-5">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-dim hover:text-accent transition-colors">
                  <GithubIcon size={19} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-dim hover:text-accent transition-colors">
                  <LinkedinIcon size={19} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="text-text-dim hover:text-accent transition-colors">
                  <Mail size={19} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
