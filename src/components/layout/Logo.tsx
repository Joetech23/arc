import Image from "next/image";
import Link from "next/link";

/** Full-colour logo (navy + gold art) — for light backgrounds. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Arcmarshal Dzine Koncept — home" className={className}>
      <Image
        src="/arcmarshal-logo.png"
        alt="Arcmarshal Dzine Koncept"
        width={1962}
        height={802}
        priority
        className="h-11 w-auto md:h-12"
      />
    </Link>
  );
}

/** Brand skyline glyph as inline SVG — scales to any colour via props. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" className={className} fill="none">
      {/* roofline */}
      <path
        d="M4 34 32 12l28 22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* towers */}
      <rect x="22" y="6" width="9" height="26" rx="1" fill="currentColor" opacity="0.95" />
      <rect x="33" y="14" width="8" height="18" rx="1" className="text-gold" fill="#c5a24a" />
      {/* window */}
      <rect x="27.5" y="38" width="9" height="9" rx="1.5" stroke="#c5a24a" strokeWidth="2.5" />
      <path d="M32 38v9M27.5 42.5h9" stroke="#c5a24a" strokeWidth="1.4" />
    </svg>
  );
}

/** White/gold text lockup — for dark (navy) backgrounds. */
export function LogoLight({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Arcmarshal Dzine Koncept — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <BrandMark className="h-10 w-auto text-white" />
      <span className="leading-none">
        <span className="block font-heading text-xl font-extrabold tracking-tight text-white">
          Arcmarshal
        </span>
        <span className="block font-heading text-sm font-semibold tracking-[0.18em] text-gold">
          DZINE KONCEPT
        </span>
      </span>
    </Link>
  );
}
