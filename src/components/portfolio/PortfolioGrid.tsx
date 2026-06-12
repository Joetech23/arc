"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { categories, projects, type ProjectCategory } from "@/lib/projects";
import { IconArrowUpRight } from "@/components/icons";

export function PortfolioGrid() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? "bg-navy text-white"
                : "bg-cloud text-navy/70 hover:bg-cloud-dark"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group shine relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={`${p.title} — ${p.category.toLowerCase()} project by Arcmarshal Dzine Koncept in ${p.location}, Nigeria`}
                loading="lazy"
                className="img-rich absolute inset-0 h-full w-full object-cover group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <span className="w-fit rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-navy">
                    {p.category}
                  </span>
                  <span className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60">
                  {p.location}
                  {p.year ? ` · ${p.year}` : ""}
                </p>
              </div>
              <Link
                href={`/portfolio/${p.slug}`}
                aria-label={`View ${p.title} project details and gallery`}
                className="absolute inset-0 z-10"
              />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
