import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { IconClock, IconLeaf, IconShield } from "@/components/icons";

const pillars = [
  {
    Icon: IconLeaf,
    title: "Sustainability & Innovation",
    body: "We build for tomorrow — using smart, energy-conscious methods and modern materials that lower cost and impact over a building's lifetime.",
  },
  {
    Icon: IconShield,
    title: "Uncompromising Quality",
    body: "Every joint, finish and foundation is held to a standard we'd stake our name on. Because we do — on every site we touch.",
  },
  {
    Icon: IconClock,
    title: "Delivered On Time",
    body: "Tight project controls and honest scheduling mean you get the keys when we say you will — no endless delays, no surprises.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-max grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
              alt="Arcmarshal team reviewing plans on site"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          {/* floating accent card */}
          <div className="absolute -bottom-6 -right-2 hidden max-w-[230px] rounded-2xl bg-gold p-6 shadow-gold sm:block lg:-right-6">
            <p className="font-heading text-3xl font-extrabold text-navy">100%</p>
            <p className="mt-1 text-sm font-medium text-navy/80">
              Commitment to every client&rsquo;s vision, start to finish.
            </p>
          </div>
        </Reveal>

        <div>
          <span className="eyebrow">Why Arcmarshal</span>
          <Reveal>
            <h2 className="display-2 mt-5">
              Built on trust. Defined by detail.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lede mt-5">
              We&rsquo;re more than a contractor. We&rsquo;re the partner that
              treats your project like our own — combining engineering rigour
              with genuine craft.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 space-y-6">
            {pillars.map(({ Icon, title, body }) => (
              <Reveal
                key={title}
                className="flex gap-5 rounded-2xl p-4 transition-colors hover:bg-cloud"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-light">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
