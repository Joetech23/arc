import Link from "next/link";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  crumb?: string;
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-navy pt-28">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
      </div>

      <div className="container-max relative z-10 pb-14 md:pb-20">
        <Reveal>
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold">{crumb ?? title}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <span className="eyebrow text-gold">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-1 mt-4 max-w-4xl !text-white">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.15}>
            <p className="lede mt-5 max-w-2xl text-white/70">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
