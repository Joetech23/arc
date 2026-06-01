import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
  description: `Privacy policy for ${site.legalName}.`,
};

const sections = [
  {
    h: "1. Introduction",
    p: `This Privacy Policy explains how ${site.legalName} ("we", "us", "our") collects, uses and protects the information you provide when you use our website.`,
  },
  {
    h: "2. Information We Collect",
    p: "We collect information you voluntarily provide through our contact and quote forms — including your name, email address, phone number and project details. We may also collect basic, anonymous analytics about how visitors use our site.",
  },
  {
    h: "3. How We Use Your Information",
    p: "We use your information solely to respond to your enquiries, prepare quotes, deliver our services and communicate with you about your project. We do not sell or rent your personal information to third parties.",
  },
  {
    h: "4. Data Storage & Security",
    p: "Enquiries submitted through our forms are delivered to our business email. We take reasonable measures to protect your information, but no method of transmission over the internet is completely secure.",
  },
  {
    h: "5. Third-Party Services",
    p: "Our website may use third-party services (such as email delivery and embedded maps) that have their own privacy practices. We encourage you to review their policies.",
  },
  {
    h: "6. Your Rights",
    p: "You may request access to, correction of, or deletion of the personal information you have shared with us by contacting us using the details below.",
  },
  {
    h: "7. Contact Us",
    p: `If you have any questions about this Privacy Policy, please contact us at ${site.email} or ${site.phoneDisplay}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
        crumb="Privacy"
      />
      <section className="section-pad">
        <div className="container-max max-w-3xl">
          <p className="text-sm text-charcoal-light">
            Last updated: {new Date().getFullYear()}
          </p>
          <div className="mt-8 space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-heading text-xl font-bold text-navy">
                  {s.h}
                </h2>
                <p className="mt-3 leading-relaxed text-charcoal-light">
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
