import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import CountUp from "./CountUp";
import { profile, stats } from "../data";

export default function About() {
  return (
    <section className="relative mx-auto max-w-4xl">
      <SectionHeading eyebrow="About Me" title="Summary" />

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl text-center">
        <p className="text-base sm:text-lg leading-relaxed text-text">{profile.summary}</p>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.1 + i * 0.08}>
            <TiltCard className="rounded-2xl border border-border bg-surface/60 px-4 py-7 text-center h-full">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-accent">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-text-dim leading-snug">{s.label}</div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
