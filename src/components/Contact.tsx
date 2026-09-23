import { Phone, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import OrbitField from "./OrbitField";
import CopyEmailButton from "./CopyEmailButton";
import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section className="relative mx-auto max-w-2xl overflow-hidden">
      <OrbitField compact />

      <Reveal className="text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.25em] uppercase text-accent">Get In Touch</p>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-heading tracking-tight">
          Let's build something <span className="text-accent">intelligent</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-text-dim leading-relaxed">
          Open to AI engineering roles and collaborations on LLM systems, RAG pipelines, and
          production ML. Send a message and I'll get back to you.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <ContactForm />
      </Reveal>

      <Reveal delay={0.25} className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 text-center">
        <p className="text-xs text-text-dim">Prefer to reach out directly?</p>
        <CopyEmailButton
          email={profile.email}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-heading hover:border-border-bright transition-colors"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-text-dim">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} /> {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone size={15} /> {profile.phone}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-dim hover:text-accent transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-dim hover:text-accent transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
