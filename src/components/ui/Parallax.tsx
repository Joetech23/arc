"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Subtle vertical parallax for background imagery.
 * Wrap a full-bleed image; it drifts as the section scrolls through view.
 */
export function ParallaxImage({
  src,
  alt = "",
  className = "",
  distance = 80,
  opacity = 1,
}: {
  src: string;
  alt?: string;
  className?: string;
  distance?: number;
  opacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ opacity }}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
