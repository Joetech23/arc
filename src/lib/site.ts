export const site = {
  name: "Arcmarshal Dzine Koncept",
  legalName: "Arcmarshal Dzine Koncept Nig. Ltd.",
  shortName: "Arcmarshal",
  tagline: "Design • Build • Inspire",
  description:
    "Arcmarshal Dzine Koncept is a design and construction company in Abuja, Nigeria — delivering residential, commercial and industrial projects, renovations, real estate and interior finishing with a commitment to sustainability and innovation.",
  url: "https://arcmarshaldzine.com",
  email: "arcmarshal@gmail.com",
  phone: "+2348061168998",
  phoneDisplay: "+234 806 116 8998",
  whatsapp: "2348061168998",
  address: {
    line1: "Army Post Service Estate",
    line2: "Kurudu, Abuja",
    region: "FCT",
    country: "Nigeria",
  },
  serviceAreas: ["Abuja", "Port Harcourt", "Bauchi", "Kaduna", "Delta"],
  // CAC registration — update rcNumber with the real RC number from the certificate.
  cac: {
    registered: true,
    rcNumber: "RC: ••••••••",
  },
  socials: {
    instagram: "https://www.instagram.com/arcmarshaldzine/",
    facebook: "https://www.facebook.com/arcmarsha/",
    tiktok: "https://www.tiktok.com/@arcmarshaldzine",
    youtube: "https://www.youtube.com/@ArcmarshalDzine",
  },
  builtBy: {
    name: "Eaglescroft",
    url: "https://eaglescroft.com.ng",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 180, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "", label: "States Covered" },
  { value: 150, suffix: "+", label: "Satisfied Clients" },
] as const;
