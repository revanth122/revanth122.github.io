import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="relative mx-auto max-w-3xl">
      <SectionHeading eyebrow="Where I've Worked" title="Experience" />

      <div className="mt-14 space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <TiltCard intensity={3} className="relative rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-heading">
                      {job.role} · {job.company}
                    </h3>
                    <p className="text-sm text-text-dim">{job.location}</p>
                  </div>
                </div>
                <span className="text-xs text-accent whitespace-nowrap sm:pl-4">
                  {job.start} — {job.end}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-[15px] leading-relaxed text-text-dim">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
