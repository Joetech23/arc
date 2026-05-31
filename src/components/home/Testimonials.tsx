import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconQuote, IconStar } from "@/components/icons";

const testimonials = [
  {
    quote:
      "Arcmarshal delivered our family home exactly as promised — on time, on budget and finished beautifully. They treated it like their own.",
    name: "Mrs. A. Okafor",
    role: "Homeowner, Abuja",
  },
  {
    quote:
      "Professional from day one. The team managed our commercial plaza build with a level of organisation we hadn't seen before in Nigeria.",
    name: "Engr. T. Bello",
    role: "Developer, Port Harcourt",
  },
  {
    quote:
      "Their interior finishing transformed the space completely. Real craftsmanship and an eye for detail. Highly recommended.",
    name: "Mr. J. Eze",
    role: "Client, Kaduna",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by the people we build for."
          align="center"
        />
        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal
              key={t.name}
              as="article"
              className="card relative flex flex-col p-8"
            >
              <IconQuote className="h-9 w-9 text-gold/30" />
              <div className="mt-4 flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-charcoal-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-cloud-dark pt-5">
                <p className="font-heading font-bold text-navy">{t.name}</p>
                <p className="text-sm text-charcoal-light">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
