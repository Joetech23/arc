import { stats } from "@/lib/site";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";

export function StatsStrip() {
  return (
    <section className="relative z-10 -mt-px bg-navy-950">
      <div className="container-max">
        <RevealGroup className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal
              key={s.label}
              className="px-4 py-10 text-center md:py-14"
            >
              <div className="font-heading text-4xl font-extrabold text-gold md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
