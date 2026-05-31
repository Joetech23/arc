import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore a selection of residential, commercial, industrial, interior and renovation projects delivered by Arcmarshal Dzine Koncept across Nigeria.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Work we're proud to put our name on."
        subtitle="A growing portfolio of homes, commercial spaces and industrial builds across Abuja, Port Harcourt, Kaduna and beyond."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
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
