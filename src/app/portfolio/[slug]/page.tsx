import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { IconArrow, IconArrowUpRight, IconCheck, IconPin } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | ${project.category} Project in ${project.location}`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | Arcmarshal Dzine Koncept`,
      description: project.description,
      type: "article",
      ...(project.gallery.length
        ? { images: [{ url: project.image, width: 1200, height: 800 }] }
        : {}),
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    locationCreated: { "@type": "Place", name: `${project.location}, Nigeria` },
    ...(project.year ? { dateCreated: project.year } : {}),
    creator: { "@id": `${site.url}/#organization` },
    ...(project.gallery.length
      ? {
          image: project.gallery.map((src) => ({
            "@type": "ImageObject",
            contentUrl: `${site.url}${src}`,
            name: project.title,
          })),
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`${project.category} Project`}
        title={project.title}
        subtitle={`${project.location}, Nigeria${project.year ? ` · Completed ${project.year}` : ""}`}
        image={project.image}
        crumb={project.title}
      />

      {/* Overview + facts */}
      <section className="section-pad">
        <div className="container-max grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow">Project Overview</span>
            <Reveal>
              <p className="lede mt-5">{project.description}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-12 font-heading text-2xl font-bold text-navy">
                Scope of work
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.scope.map((s) => (
                <Reveal
                  key={s}
                  className="flex items-start gap-3 rounded-xl bg-cloud p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-charcoal">{s}</span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Facts panel */}
          <div>
            <Reveal className="sticky top-28 overflow-hidden rounded-3xl bg-navy text-white">
              <div className="border-b border-white/10 p-7">
                <h3 className="font-heading text-xl font-bold text-white">
                  Project facts
                </h3>
              </div>
              <dl className="space-y-5 p-7">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-eyebrow text-gold">
                    Location
                  </dt>
                  <dd className="mt-1 flex items-center gap-2 font-medium">
                    <IconPin className="h-4 w-4 text-gold" />
                    {project.location}, Nigeria
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-eyebrow text-gold">
                    Category
                  </dt>
                  <dd className="mt-1 font-medium">{project.category}</dd>
                </div>
                {project.year && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-eyebrow text-gold">
                      Completed
                    </dt>
                    <dd className="mt-1 font-medium">{project.year}</dd>
                  </div>
                )}
                {project.client && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-eyebrow text-gold">
                      Client
                    </dt>
                    <dd className="mt-1 font-medium">{project.client}</dd>
                  </div>
                )}
              </dl>
              <div className="p-7 pt-0">
                <Link href="/quote" className="btn-gold w-full">
                  Start a similar project
                  <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-cloud-dark bg-cloud/60 section-pad">
        <div className="container-max">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Project Gallery</span>
              <Reveal>
                <h2 className="display-2 mt-4">
                  {project.gallery.length
                    ? "See the work up close."
                    : "Photos coming soon."}
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="mt-12">
            {project.gallery.length ? (
              <ProjectGallery images={project.gallery} title={project.title} />
            ) : (
              <Reveal className="rounded-3xl border border-dashed border-navy/20 bg-white p-12 text-center">
                <p className="font-heading text-lg font-semibold text-navy">
                  We&rsquo;re digging through the site archives.
                </p>
                <p className="mx-auto mt-2 max-w-md text-charcoal-light">
                  Photos of this project are being prepared. In the meantime,
                  explore our completed NAOWA Hall project or ask us about this
                  one directly.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/portfolio/naowa-hall-elele-army-barracks"
                    className="btn-navy"
                  >
                    View NAOWA Hall
                  </Link>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="border-t border-cloud-dark">
        <div className="container-max grid sm:grid-cols-2">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="group flex items-center gap-4 border-b border-cloud-dark py-8 pr-6 transition-colors hover:bg-cloud sm:border-b-0 sm:border-r"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors group-hover:border-gold group-hover:bg-gold">
              <IconArrow className="h-5 w-5 rotate-180" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-eyebrow text-charcoal-light">
                Previous project
              </span>
              <span className="block font-heading font-bold text-navy">
                {prev.title}
              </span>
            </span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex items-center justify-end gap-4 py-8 pl-6 text-right transition-colors hover:bg-cloud"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-eyebrow text-charcoal-light">
                Next project
              </span>
              <span className="block font-heading font-bold text-navy">
                {next.title}
              </span>
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors group-hover:border-gold group-hover:bg-gold">
              <IconArrow className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </section>

      {/* All projects link */}
      <div className="container-max flex justify-center py-10">
        <Link
          href="/portfolio"
          className="link-underline inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy"
        >
          <IconArrowUpRight className="h-4 w-4 rotate-[225deg] text-gold" />
          Back to all projects
        </Link>
      </div>

      <ClosingCTA />
    </>
  );
}
