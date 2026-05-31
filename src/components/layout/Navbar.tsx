"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";
import { IconArrow, IconClose, IconMenu, IconPhone } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
          scrolled
            ? "bg-white/95 shadow-soft backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-max flex h-[72px] items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className="link-underline font-heading text-xs font-semibold uppercase tracking-menu text-navy/75 transition-colors hover:text-navy data-[active=true]:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 font-heading text-sm font-semibold text-navy/70 transition-colors hover:text-gold"
          >
            <IconPhone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link href="/quote" className="btn-gold !py-3 !text-sm">
            Get a Quote
            <IconArrow className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-cloud lg:hidden"
        >
          <IconMenu className="h-6 w-6" />
        </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[84%] max-w-sm flex-col bg-white p-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-cloud"
                >
                  <IconClose className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      data-active={isActive(item.href)}
                      className="flex items-center justify-between border-b border-cloud-dark py-4 font-heading text-base font-semibold uppercase tracking-menu text-navy data-[active=true]:text-gold"
                    >
                      {item.label}
                      <IconArrow className="h-5 w-5 text-gold" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-3">
                <a href={`tel:${site.phone}`} className="btn-outline w-full">
                  <IconPhone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <Link href="/quote" className="btn-gold w-full">
                  Get a Quote
                  <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
