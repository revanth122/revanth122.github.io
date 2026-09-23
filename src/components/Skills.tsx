import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section className="relative mx-auto max-w-5xl">
      <SectionHeading eyebrow="What I Work With" title="Skills & Tools" />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <TiltCard
              intensity={5}
              className="group h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-border-bright"
            >
              <h3 className="font-display text-heading font-medium mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-dim group-hover:text-text transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
