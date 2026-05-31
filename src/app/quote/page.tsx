import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free, no-obligation quote for your construction, renovation or interior project from Arcmarshal Dzine Koncept.",
};

const points = [
  "A clear, itemised quote — no hidden costs",
  "Honest timelines you can plan around",
  "Expert advice on materials & approach",
  "A dedicated point of contact",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Get a free quote for your project."
        subtitle="Share a few details and our team will come back with ideas, timelines and a transparent estimate."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
        crumb="Quote"
      />

      <section className="section-pad">
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Reassurance column */}
          <div>
            <span className="eyebrow">What you&rsquo;ll get</span>
            <Reveal>
              <h2 className="display-2 mt-5">No pressure. Just clarity.</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="lede mt-5">
                Requesting a quote is the easiest way to start. It&rsquo;s free,
                it&rsquo;s quick, and there&rsquo;s no obligation to proceed.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-charcoal">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-navy p-7 text-white">
              <p className="font-heading text-lg font-bold">
                Prefer to talk it through?
              </p>
              <p className="mt-2 text-sm text-white/70">
                Call us directly and we&rsquo;ll guide you through the options.
              </p>
            </div>
          </div>

          {/* Form column */}
          <Reveal delay={0.1} className="card p-7 md:p-10">
            <h3 className="font-heading text-2xl font-bold text-navy">
              Tell us about your project
            </h3>
            <p className="mt-2 text-charcoal-light">
              The more detail you share, the more accurate your quote.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
