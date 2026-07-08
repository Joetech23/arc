import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/Parallax";
import { IconArrowUpRight, IconWhatsApp } from "@/components/icons";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <ParallaxImage
        src="/images/projects/millennium-quarters-kaduna-cover.jpeg"
        opacity={0.2}
        distance={60}
      />
      <div className="absolute inset-0 bg-navy/60" />

      <div className="container-max relative z-10 text-center">
        <Reveal>
          <span className="eyebrow justify-center text-gold">
            Let&rsquo;s get started
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-2 mx-auto mt-5 max-w-3xl !text-white">
            Ready to build your dream? Let&rsquo;s talk.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mx-auto mt-5 max-w-xl text-white/70">
            Share your vision and we&rsquo;ll come back with ideas, timelines
            and a clear quote — no obligation.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-gold">
              Request a Free Quote
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <IconWhatsApp className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
