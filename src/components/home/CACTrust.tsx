"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { fadeUp, viewportOnce } from "@/lib/motion";
import {
  IconCheck,
  IconShield,
  IconManagement,
  IconUser,
} from "@/components/icons";

const trust = [
  {
    Icon: IconManagement,
    title: "CAC Registered",
    body: "A legally incorporated Nigerian company, registered with the Corporate Affairs Commission.",
  },
  {
    Icon: IconShield,
    title: "Fully Accountable",
    body: "Clear contracts, documented scope and transparent pricing on every single project.",
  },
  {
    Icon: IconUser,
    title: "Verified Team",
    body: "Qualified professionals and vetted partners you can trust on and off site.",
  },
];

export function CACTrust() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-max grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Verified seal card */}
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-10">
            <div className="grain absolute inset-0 opacity-30" />
            <div className="relative">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewportOnce}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
                className="relative flex h-24 w-24 items-center justify-center"
              >
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-gold/40" />
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gold text-navy">
                  <IconShield className="h-12 w-12" />
                </span>
              </motion.div>

              <p className="mt-7 font-heading text-2xl font-extrabold text-white">
                Registered &amp; Verified
              </p>
              <p className="mt-2 text-white/60">
                {site.legalName} is a duly registered Nigerian company.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3">
                <IconCheck className="h-5 w-5 text-gold" />
                <span className="font-heading text-sm font-semibold uppercase tracking-menu text-gold">
                  {site.cac.rcNumber}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy + trust points */}
        <div>
          <span className="eyebrow text-gold">Trust &amp; Credibility</span>
          <Reveal>
            <h2 className="display-2 mt-5 !text-white">
              A company you can build a future with.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lede mt-5 text-white/70">
              When you hand us your project, you&rsquo;re working with a
              properly registered, accountable business — not a one-man band.
              Your investment is in safe, certified hands.
            </p>
          </Reveal>

          <RevealGroup className="mt-9 space-y-4">
            {trust.map(({ Icon, title, body }) => (
              <Reveal
                key={title}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
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
