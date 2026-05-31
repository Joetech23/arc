import Link from "next/link";
import { services } from "@/lib/services";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconArrowUpRight,
  IconCommercial,
  IconIndustrial,
  IconInterior,
  IconLand,
  IconManagement,
  IconRenovation,
  IconResidential,
} from "@/components/icons";

const iconMap = {
  residential: IconResidential,
  commercial: IconCommercial,
  industrial: IconIndustrial,
  renovation: IconRenovation,
  "real-estate": IconLand,
  interior: IconInterior,
  "project-management": IconManagement,
} as const;

export function ServicesSnapshot() {
  return (
    <section className="section-pad grain">
      <div className="container-max">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-service design & construction, under one roof."
          />
          <Reveal>
            <Link
              href="/services"
              className="link-underline shrink-0 font-heading text-sm font-semibold text-navy"
            >
              All services →
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-cloud-dark bg-cloud-dark sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.slug as keyof typeof iconMap];
            return (
              <Reveal key={s.slug} as="article">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col bg-white p-8 transition-colors duration-500 hover:bg-navy"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cloud text-navy transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                    {Icon && <Icon className="h-7 w-7" />}
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-navy transition-colors duration-500 group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-light transition-colors duration-500 group-hover:text-white/70">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold">
                    Learn more
                    <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
          {/* CTA tile */}
          <Reveal as="article">
            <Link
              href="/quote"
              className="group flex h-full flex-col justify-between bg-gold p-8"
            >
              <h3 className="font-heading text-xl font-bold text-navy">
                Have a project in mind?
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy">
                Request a free quote
                <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
