import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import OrbitField from "./OrbitField";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section className="relative mx-auto max-w-2xl text-center overflow-hidden">
      <OrbitField compact />

      <Reveal>
        <p className="mb-3 text-xs font-medium tracking-[0.25em] uppercase text-accent">Get In Touch</p>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-heading tracking-tight">
          Let's build something <span className="text-accent">intelligent</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-text-dim leading-relaxed">
          Open to AI engineering roles and collaborations on LLM systems, RAG pipelines, and
          production ML. Reach out and I'll get back to you.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <Magnetic strength={0.25}>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-heading px-7 py-3.5 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </Magnetic>
      </Reveal>

      <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-dim">
        <span className="inline-flex items-center gap-2">
          <MapPin size={15} /> {profile.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <Phone size={15} /> {profile.phone}
        </span>
      </Reveal>

      <Reveal delay={0.35} className="mt-10 flex items-center justify-center gap-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-text-dim hover:text-accent transition-colors"
        >
          <GithubIcon size={22} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-text-dim hover:text-accent transition-colors"
        >
          <LinkedinIcon size={22} />
        </a>
      </Reveal>
    </section>
  );
}
