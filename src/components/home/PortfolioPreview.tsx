import Link from "next/link";
import { projects } from "@/lib/projects";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowUpRight } from "@/components/icons";

export function PortfolioPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-max">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that speak for themselves."
            light
          />
          <Reveal>
            <Link href="/portfolio" className="btn-ghost-light shrink-0">
              View all projects
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2">
          {featured.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0
                  ? "md:col-span-4 md:row-span-2 min-h-[280px] md:min-h-[520px]"
                  : "md:col-span-2 min-h-[240px]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="w-fit rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-navy">
                  {p.category}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60">
                  {p.location} · {p.year}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
