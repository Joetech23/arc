"use client";

import { site } from "@/lib/site";
import { IconWhatsApp } from "@/components/icons";

export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Arcmarshal, I'd like to talk about a project."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-navy py-2 pl-4 pr-1 text-sm font-medium text-white opacity-0 shadow-lift transition-all duration-300 group-hover:max-w-[180px] group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <IconWhatsApp className="relative h-7 w-7" />
      </span>
    </a>
  );
}
