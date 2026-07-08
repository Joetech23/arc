"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { IconArrow, IconArrowUpRight, IconStar } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

type Slide = {
  image: string;
  title: React.ReactNode;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image: "/images/projects/naowa-hall-roofline-architecture-detail.jpeg",
    title: (
      <>
        We turn your <span className="text-gold">boldest ideas</span> into
        landmarks.
      </>
    ),
    subtitle:
      "A design & construction company building residential, commercial and industrial projects across Nigeria — with a relentless focus on quality and craft.",
  },
  {
    image:
      "/images/projects/bauchi-duplex-bungalow-02.jpg",
    title: (
      <>
        Dream homes, <span className="text-gold">built to last</span> a
        lifetime.
      </>
    ),
    subtitle:
      "From private bungalows to luxury duplexes and gated estates — we bring comfort, durability and timeless design to every home we build.",
  },
  {
    image: "/images/projects/naowa-hall-interior-pop-ceiling-lighting.jpeg",
    title: (
      <>
        From foundation to the <span className="text-gold">final finish</span>.
      </>
    ),
    subtitle:
      "Construction, renovation and interior finishing under one accountable roof. One team, start to finish, delivered on time.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const active = slides[index];

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1 }, scale: { duration: 6, ease: "easeOut" } }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      </div>

      <div className="container-max relative z-10 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow text-gold"
          >
            {site.tagline}
          </motion.span>

          {/* Animating headline + subtitle per slide */}
          <div className="min-h-[210px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease }}
              >
                <h1 className="display-1 mt-6 !text-white">{active.title}</h1>
                <p className="lede mt-7 max-w-xl text-white/75">
                  {active.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link href="/portfolio" className="btn-gold">
              View Our Projects
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/quote" className="btn-ghost-light">
              Get a Free Quote
              <IconArrow className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm text-white/70">
                Trusted by 150+ clients
              </span>
            </div>
            <div className="hidden h-8 w-px bg-white/15 sm:block" />
            <p className="text-sm text-white/70">
              Serving {site.serviceAreas.slice(0, 4).join(" · ")} &amp; beyond
            </p>
          </motion.div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-max flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative h-1.5 overflow-hidden rounded-full bg-white/25 transition-all duration-300"
                style={{ width: i === index ? 48 : 20 }}
              >
                {i === index && (
                  <motion.span
                    key={`fill-${index}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: paused ? 0 : 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              <IconArrow className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              <IconArrow className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
