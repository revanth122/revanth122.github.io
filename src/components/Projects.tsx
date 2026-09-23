import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="relative mx-auto max-w-5xl">
      <SectionHeading eyebrow="Selected Work" title="Projects" />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className="h-full">
            <TiltCard intensity={7} className="h-full rounded-2xl">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-border-bright"
              >
                <div className="relative flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-medium text-heading leading-snug">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-text-dim transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <p className="relative mt-3 text-sm leading-relaxed text-text-dim">{p.description}</p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-2 border border-border px-2.5 py-1 text-[11px] font-mono text-text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="relative mt-6 text-xs font-medium text-accent">{p.linkLabel} →</span>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
