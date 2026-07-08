import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";
import {
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact" },
  description:
    "Get in touch with Arcmarshal Dzine Koncept. Call, email, WhatsApp or visit us at Army Post Service Estate, Kurudu, Abuja.",
};

const mapSrc =
  "https://www.google.com/maps?q=Army+Post+Service+Estate,+Kurudu,+Abuja&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        subtitle="Whether it's a question, a quote or a coffee on site — we'd love to hear from you."
        image="/images/projects/millennium-quarters-kaduna-01.jpeg"
        crumb="Contact"
      />

      <section className="section-pad">
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <div>
            <span className="eyebrow">Get in touch</span>
            <Reveal>
              <h2 className="display-2 mt-5">
                We&rsquo;re ready when you are.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="lede mt-5">
                Reach out through whichever channel suits you best. Our team
                typically responds within one business day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
                {
                  Icon: IconPin,
                  label: "Visit us",
                  value: `${site.address.line1}, ${site.address.line2}`,
                  href: mapSrc.replace("&output=embed", ""),
                },
                {
                  Icon: IconPhone,
                  label: "Call us",
                  value: site.phoneDisplay,
                  href: `tel:${site.phone}`,
                },
                {
                  Icon: IconMail,
                  label: "Email us",
                  value: site.email,
                  href: `mailto:${site.email}`,
                },
                {
                  Icon: IconWhatsApp,
                  label: "WhatsApp",
                  value: "Chat with us instantly",
                  href: `https://wa.me/${site.whatsapp}`,
                },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-cloud-dark p-5 transition-all hover:border-gold hover:shadow-soft"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal-light">
                      {label}
                    </span>
                    <span className="block font-heading font-semibold text-navy">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 text-sm text-charcoal-light">
              Serving {site.serviceAreas.join(", ")}.
            </p>
          </div>

          {/* Form column */}
          <Reveal delay={0.1} className="card p-7 md:p-10">
            <h3 className="font-heading text-2xl font-bold text-navy">
              Send us a message
            </h3>
            <p className="mt-2 text-charcoal-light">
              Fill in the form and we&rsquo;ll be in touch shortly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-max">
          <div className="overflow-hidden rounded-3xl border border-cloud-dark">
            <iframe
              title="Arcmarshal location — Kurudu, Abuja"
              src={mapSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
