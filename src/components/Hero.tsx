import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import OrbitField from "./OrbitField";
import Magnetic from "./Magnetic";
import CopyEmailButton from "./CopyEmailButton";
import { profile } from "../data";
import type { SectionKey } from "../types";

const roles = ["AI Engineer", "LLM Systems Builder", "RAG Architect", "GenAI Product Engineer"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero({ onOpen }: { onOpen: (section: SectionKey) => void }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <OrbitField />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-text-dim"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={item}
          className="font-name text-[13vw] sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight text-heading"
        >
          Revanth
          <br />
          <span className="text-accent">Boddupalli</span>
        </motion.h1>

        <motion.div variants={item} className="mt-6 h-9 sm:h-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="font-display text-lg sm:text-2xl font-medium text-heading"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-text-dim"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic strength={0.3}>
            <button
              onClick={() => onOpen("projects")}
              className="inline-flex items-center gap-2 rounded-full bg-heading px-6 py-3.5 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
            >
              View My Work
            </button>
          </Magnetic>
          <Magnetic strength={0.3}>
            <button
              onClick={() => onOpen("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-heading hover:border-border-bright hover:bg-surface transition-colors"
            >
              Get In Touch
            </button>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center justify-center gap-5">
          {[
            { href: profile.github, icon: GithubIcon, label: "GitHub" },
            { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-text-dim hover:text-accent transition-colors"
            >
              <Icon size={19} />
            </a>
          ))}
          <CopyEmailButton
            email={profile.email}
            iconOnly
            size={19}
            className="text-text-dim hover:text-accent transition-colors"
          />
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => onOpen("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-dim hover:text-accent transition-colors"
        aria-label="View about"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
