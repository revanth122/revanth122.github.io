import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p className="mb-3 text-xs font-medium tracking-[0.25em] uppercase text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-heading">
        {title}
      </h2>
    </Reveal>
  );
}
