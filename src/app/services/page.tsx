import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { services } from "@/lib/services";
import {
  IconArrowUpRight,
  IconCheck,
  IconCommercial,
  IconIndustrial,
  IconInterior,
  IconLand,
  IconManagement,
  IconRenovation,
  IconResidential,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Residential, commercial and industrial construction, renovation, real estate, interior design and project management — full-service delivery across Nigeria.",
};

const iconMap = {
  residential: IconResidential,
  commercial: IconCommercial,
  industrial: IconIndustrial,
  renovation: IconRenovation,
  "real-estate": IconLand,
  interior: IconInterior,
  "project-management": IconManagement,
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need to design, build and finish."
        subtitle="One accountable team across the full project lifecycle — from the first concept sketch to the final handover."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
        crumb="Services"
      />

      <section className="section-pad">
        <div className="container-max">
          <RevealGroup className="space-y-6">
            {services.map((s, i) => {
              const Icon = iconMap[s.slug as keyof typeof iconMap];
              return (
                <Reveal
                  key={s.slug}
                  as="article"
                  className="group grid gap-8 overflow-hidden rounded-3xl border border-cloud-dark bg-white p-6 transition-all hover:shadow-card md:grid-cols-[1.1fr_1fr] md:p-0"
                >
                  <div
                    className={`relative min-h-[240px] overflow-hidden rounded-2xl md:rounded-none ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center md:p-10">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                        {Icon && <Icon className="h-6 w-6" />}
                      </span>
                      <span className="font-heading text-xs font-semibold uppercase tracking-eyebrow text-gold">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="mt-5 font-heading text-2xl font-bold text-navy">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-charcoal-light">{s.description}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {s.features.slice(0, 4).map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-charcoal"
                        >
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-7 inline-flex w-fit items-center gap-2 font-heading text-sm font-semibold text-navy link-underline"
                    >
                      Explore {s.title}
                      <IconArrowUpRight className="h-4 w-4 text-gold" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
