import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`display-2 mt-5 ${light ? "!text-white" : ""}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`lede mt-5 ${light ? "text-white/70" : ""}`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
