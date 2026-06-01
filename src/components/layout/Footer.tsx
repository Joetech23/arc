import Link from "next/link";
import { LogoLight } from "./Logo";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import {
  IconArrowUpRight,
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconTikTok,
  IconYouTube,
} from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* CTA strip */}
      <div className="container-max">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-2xl font-bold md:text-3xl">
              Let&rsquo;s build something that lasts.
            </p>
            <p className="mt-2 text-white/60">
              Tell us about your project — we&rsquo;ll handle the rest.
            </p>
          </div>
          <Link href="/quote" className="btn-gold shrink-0">
            Request a Quote
            <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container-max grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <LogoLight />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            {site.tagline}. A design and construction company turning Nigeria&rsquo;s
            boldest ideas into landmarks built to last.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.socials.instagram, Icon: IconInstagram, label: "Instagram" },
              { href: site.socials.facebook, Icon: IconFacebook, label: "Facebook" },
              { href: site.socials.tiktok, Icon: IconTikTok, label: "TikTok" },
              { href: site.socials.youtube, Icon: IconYouTube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-navy"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-eyebrow text-gold">
            Company
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-eyebrow text-gold">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-eyebrow text-gold">
            Get in touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>
                {site.address.line1}, {site.address.line2}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.phone}`}
                className="flex gap-3 transition-colors hover:text-gold"
              >
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-3 transition-colors hover:text-gold"
              >
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 md:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <span>
              Built by{" "}
              <a
                href={site.builtBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold"
              >
                {site.builtBy.name}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
