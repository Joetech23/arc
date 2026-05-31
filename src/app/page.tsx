import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { TaglineMarquee } from "@/components/home/TaglineMarquee";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CACTrust } from "@/components/home/CACTrust";
import { TargetAudience } from "@/components/home/TargetAudience";
import { Testimonials } from "@/components/home/Testimonials";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSnapshot />
      <TaglineMarquee />
      <PortfolioPreview />
      <WhyChooseUs />
      <CACTrust />
      <TargetAudience />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
