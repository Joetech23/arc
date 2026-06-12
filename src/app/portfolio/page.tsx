import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Projects — Construction Portfolio Across Nigeria",
  alternates: { canonical: "/portfolio" },
  description:
    "Real projects by Arcmarshal Dzine Koncept: NAOWA Hall at Elele Army Barracks Port Harcourt, residential developments in Kaduna and Abuja, Zamfara Government House works, army barracks renovations and more.",
};

// ItemList structured data — tells Google about each real project.
const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Construction Projects by Arcmarshal Dzine Koncept",
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      about: `${p.category} construction project`,
      locationCreated: { "@type": "Place", name: `${p.location}, Nigeria` },
      ...(p.year ? { dateCreated: p.year } : {}),
      creator: { "@id": `${site.url}/#organization` },
    },
  })),
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <PageHero
        eyebrow="Our Projects"
        title="Work we're proud to put our name on."
        subtitle="Real projects, real locations — homes, halls, government facilities and renovations delivered across Abuja, Port Harcourt, Kaduna, Zamfara and beyond."
        image="/images/projects/naowa-hall-construction-elele-army-barracks-port-harcourt.jpeg"
        crumb="Projects"
      />

      <section className="section-pad">
        <div className="container-max">
          <PortfolioGrid />
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
