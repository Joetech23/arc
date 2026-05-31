import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { StatsStrip } from "@/components/home/StatsStrip";
import { site } from "@/lib/site";
import {
  IconArrowUpRight,
  IconCompass,
  IconLeaf,
  IconShield,
  IconCheck,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Arcmarshal Dzine Koncept — a design and construction company in Abuja committed to sustainability, innovation and turning clients' dreams into reality.",
};

const values = [
  {
    Icon: IconShield,
    title: "Integrity",
    body: "We do what we say, and we say what's true. Honest pricing, honest timelines.",
  },
  {
    Icon: IconLeaf,
    title: "Sustainability",
    body: "Building responsibly — for the client, the community and the environment.",
  },
  {
    Icon: IconCompass,
    title: "Innovation",
    body: "Embracing modern methods and materials to build smarter, better, faster.",
  },
  {
    Icon: IconCheck,
    title: "Quality",
    body: "An obsession with detail that shows in every finish we hand over.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Bringing dreams into reality, one build at a time."
        subtitle="We're a Nigerian design and construction company driven by craft, integrity and a belief that great buildings change lives."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        crumb="About"
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-max grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 overflow-hidden rounded-3xl lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
              alt="Arcmarshal project in progress"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Our Story</span>
            <Reveal>
              <h2 className="display-2 mt-5">
                A construction partner Nigeria can build on.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="lede mt-5 space-y-4">
                <p>
                  Arcmarshal Dzine Koncept Nig. Ltd. was founded on a simple
                  promise: to bring our clients&rsquo; dreams into reality —
                  with quality that lasts and service you can trust.
                </p>
                <p>
                  From our base in Kurudu, Abuja, we&rsquo;ve grown into a
                  full-service design and construction company delivering
                  residential, commercial and industrial projects, renovations,
                  real estate and interior finishing across {site.serviceAreas.length} states.
                </p>
                <p>
                  What sets us apart is our commitment to{" "}
                  <span className="font-semibold text-navy">
                    sustainability and innovation
                  </span>{" "}
                  — building smarter today for a stronger tomorrow.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/portfolio" className="btn-navy mt-8">
                See our work
                <IconArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Mission & Vision */}
      <section className="section-pad bg-cloud">
        <div className="container-max grid gap-6 md:grid-cols-2">
          <Reveal className="card p-10">
            <span className="eyebrow">Our Mission</span>
            <p className="mt-5 font-heading text-2xl font-bold leading-snug text-navy">
              To deliver exceptional, sustainable construction that turns our
              clients&rsquo; visions into spaces they&rsquo;re proud of — on
              time, on budget, every time.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="card bg-navy p-10 text-white">
            <span className="eyebrow text-gold">Our Vision</span>
            <p className="mt-5 font-heading text-2xl font-bold leading-snug text-white">
              To be Nigeria&rsquo;s most trusted name in design and
              construction — known for innovation, integrity and buildings that
              stand the test of time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container-max">
          <SectionHeading
            eyebrow="What Drives Us"
            title="The values behind every project."
            align="center"
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, body }) => (
              <Reveal
                key={title}
                className="group rounded-2xl border border-cloud-dark p-8 transition-all hover:border-gold hover:shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
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
    </>
  );
}
