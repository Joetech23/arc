const items = ["Design", "Build", "Inspire"];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center">
          {items.map((word, j) => (
            <div key={`${i}-${j}`} className="flex items-center">
              <span className="px-8 font-heading text-3xl font-extrabold uppercase tracking-tight text-navy md:text-5xl">
                {word}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0 text-gold md:h-4 md:w-4"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2 15 9l7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
              </svg>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function TaglineMarquee() {
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-cloud-dark bg-gold/10 py-6"
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </section>
  );
}
