import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Magnetic from "./Magnetic";
import MenuButton from "./MenuButton";
import MenuOverlay from "./MenuOverlay";
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

export default function Nav({ onOpen }: { onOpen: (section: SectionKey) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<SectionKey | null>(null);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="fixed top-0 inset-x-0 z-[95] border-b border-border/60 bg-bg/70 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-[15px] font-semibold tracking-tight text-heading shrink-0"
          >
            RB
          </button>

          <nav
            onMouseLeave={() => setHovered(null)}
            className="hidden md:flex items-center gap-0.5 rounded-full border border-border/70 bg-surface/40 p-1"
          >
            {links.map((l) => (
              <button
                key={l.key}
                onMouseEnter={() => setHovered(l.key)}
                onClick={() => onOpen(l.key)}
                className="relative rounded-full px-4 py-1.5 text-sm text-text-dim hover:text-heading transition-colors"
              >
                {hovered === l.key && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-full bg-surface-2 border border-border-bright/60"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Magnetic strength={0.4} className="hidden sm:block">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-full bg-heading px-4 py-2 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
              >
                <Download size={14} />
                Resume
              </a>
            </Magnetic>

            <div className="md:hidden">
              <MenuButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
            </div>
          </div>
        </div>
      </motion.header>

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenSection={onOpen}
      />
    </>
  );
}
