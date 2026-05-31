import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-navy text-white">
      <div className="container-max py-32 text-center">
        <p className="font-heading text-[7rem] font-extrabold leading-none text-gold/90 md:text-[10rem]">
          404
        </p>
        <h1 className="display-2 mt-2 !text-white">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&rsquo;re looking for may have moved or no longer exists.
          Let&rsquo;s get you back on solid ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-gold">
            Back to home
            <IconArrow className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-ghost-light">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
