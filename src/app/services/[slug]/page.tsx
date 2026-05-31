import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { getService, services } from "@/lib/services";
import { IconArrow, IconArrowUpRight, IconCheck } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.description}
        image={service.image}
        crumb={service.title}
      />

      <section className="section-pad">
        <div className="container-max grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="eyebrow">Overview</span>
            <Reveal>
              <p className="lede mt-5">{service.intro}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h3 className="mt-12 font-heading text-2xl font-bold text-navy">
                What&rsquo;s included
              </h3>
            </Reveal>
            <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.features.map((f) => (
                <Reveal
                  key={f}
                  className="flex items-start gap-3 rounded-xl bg-cloud p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-charcoal">{f}</span>
                </Reveal>
              ))}
            </RevealGroup>
          </div>

          {/* sticky CTA card */}
          <div>
            <Reveal className="sticky top-28 rounded-3xl bg-navy p-8 text-white">
              <h3 className="font-heading text-2xl font-bold text-white">
                Start your {service.title.toLowerCase()} project
              </h3>
              <p className="mt-3 text-white/70">
                Tell us what you have in mind and we&rsquo;ll prepare a tailored
                quote — no obligation.
              </p>
              <Link href="/quote" className="btn-gold mt-6 w-full">
                Request a Quote
                <IconArrow className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost-light mt-3 w-full">
                Talk to our team
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-cloud-dark bg-cloud section-pad">
        <div className="container-max">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display-2">Explore other services</h2>
            <Link
              href="/services"
              className="link-underline hidden font-heading text-sm font-semibold text-navy sm:block"
            >
              All services →
            </Link>
          </div>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Reveal key={o.slug} as="article">
                <Link
                  href={`/services/${o.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={o.image}
                      alt={o.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-navy">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-light">
                      {o.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold">
                      Learn more
                      <IconArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
