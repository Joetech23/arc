import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconBuildings,
  IconGov,
  IconResidential,
  IconUser,
} from "@/components/icons";

const segments = [
  {
    Icon: IconUser,
    title: "Homeowners",
    body: "Your dream home, designed and built with care — from first sketch to final key.",
  },
  {
    Icon: IconBuildings,
    title: "Developers",
    body: "Reliable capacity and quality you can scale across multiple sites and timelines.",
  },
  {
    Icon: IconGov,
    title: "Government",
    body: "Compliant, well-managed civil and public works delivered to specification.",
  },
  {
    Icon: IconResidential,
    title: "Corporations",
    body: "Offices, facilities and fit-outs that reflect your brand and serve your people.",
  },
];

export function TargetAudience() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-max">
        <SectionHeading
          eyebrow="Who We Build For"
          title="The right partner, whatever you're building."
          align="center"
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map(({ Icon, title, body }) => (
            <Reveal
              key={title}
              as="article"
              className="card group p-8 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cloud text-navy transition-colors duration-300 group-hover:bg-gold">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-heading text-lg font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                {body}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
