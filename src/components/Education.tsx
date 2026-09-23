import { GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { education, certifications } from "../data";

export default function Education() {
  return (
    <section className="relative mx-auto max-w-4xl">
      <SectionHeading eyebrow="Background" title="Education & Certifications" />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <TiltCard intensity={4} className="h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-dim text-accent">
                <GraduationCap size={18} />
              </span>
              <h3 className="font-display text-heading font-medium">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium text-heading">{e.school}</p>
                    <span className="text-xs text-accent">
                      {e.start} – {e.end}
                    </span>
                  </div>
                  <p className="text-sm text-text-dim">{e.degree}</p>
                  <p className="text-xs text-text-dim">{e.location}</p>
                  {e.detail && <p className="mt-1 text-xs text-text-dim">{e.detail}</p>}
                </div>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1}>
          <TiltCard intensity={4} className="h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-dim text-accent">
                <Award size={18} />
              </span>
              <h3 className="font-display text-heading font-medium">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-text-dim">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
