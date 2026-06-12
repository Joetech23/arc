export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  intro: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Construction",
    short: "Private homes, duplexes and estates built to last a lifetime.",
    description:
      "From single-family bungalows to luxury duplexes and gated estates, we build homes that balance comfort, durability and timeless design.",
    intro:
      "Your home is the single most important space you will ever invest in. We treat every residential build — whether a modest bungalow or a multi-unit estate — with the craftsmanship and attention it deserves.",
    features: [
      "Bungalows, duplexes & terraces",
      "Private estates & gated communities",
      "Structural engineering & foundations",
      "Roofing, plumbing & electrical fit-out",
      "Sustainable, energy-conscious materials",
      "Turn-key handover, ready to live in",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "commercial",
    title: "Commercial Construction",
    short: "Offices, plazas and retail spaces engineered for business.",
    description:
      "We deliver office buildings, shopping plazas, showrooms and mixed-use developments that work as hard as the businesses inside them.",
    intro:
      "Commercial spaces have to perform — for footfall, for staff, for brand. We design and build environments that are efficient, compliant and built to impress clients from the kerb to the boardroom.",
    features: [
      "Office complexes & corporate HQs",
      "Shopping plazas & retail units",
      "Showrooms & hospitality spaces",
      "Mixed-use developments",
      "Compliance with planning regulations",
      "Fast-tracked project scheduling",
    ],
    image:
      "/images/projects/naowa-hall-construction-elele-army-barracks-port-harcourt.jpeg",
  },
  {
    slug: "industrial",
    title: "Industrial Construction",
    short: "Factories, warehouses and plants built for scale.",
    description:
      "Heavy-duty facilities — factories, warehouses, processing plants — engineered for safety, capacity and operational efficiency.",
    intro:
      "Industrial projects demand a different discipline: load-bearing precision, logistics planning and uncompromising safety. We bring the structural expertise and project controls these builds require.",
    features: [
      "Warehouses & distribution centres",
      "Factories & processing plants",
      "Steel structures & large-span roofing",
      "Heavy-load flooring & foundations",
      "Site safety & compliance management",
      "Phased delivery for live operations",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "renovation",
    title: "Renovation & Remodeling",
    short: "Transforming existing spaces into something extraordinary.",
    description:
      "Full and partial renovations that breathe new life into tired buildings — structural upgrades, modern finishes and complete remodels.",
    intro:
      "Not every project starts from the ground up. We specialise in reimagining existing structures — restoring, upgrading and remodelling them to meet modern standards and your evolving needs.",
    features: [
      "Full & partial home renovations",
      "Commercial space refurbishment",
      "Structural reinforcement & repairs",
      "Modern finishes & space optimisation",
      "Kitchen & bathroom remodels",
      "Heritage-sensitive restorations",
    ],
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Land",
    short: "Verified land and property opportunities across Nigeria.",
    description:
      "Genuine, documented land and property — with advisory support — across Abuja, Port Harcourt, Kaduna, Bauchi and Delta.",
    intro:
      "Whether you are buying your first plot or building a property portfolio, we connect you with verified land and real estate opportunities, backed by honest advisory and clean documentation.",
    features: [
      "Verified plots with clean title",
      "Residential & commercial land",
      "Property advisory & due diligence",
      "Investment & portfolio guidance",
      "Coverage across 5 states",
      "Build-ready packages available",
    ],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "interior",
    title: "Interior Design & Finishing",
    short: "Interiors that turn buildings into experiences.",
    description:
      "Complete interior fit-out, bespoke finishing and décor that reflects your taste and elevates every room.",
    intro:
      "The difference between a building and a space you love is in the finishing. Our interior team delivers thoughtful, characterful interiors — from concept moodboards to the final coat of paint.",
    features: [
      "Full interior fit-out & finishing",
      "Bespoke joinery & furniture",
      "Lighting & ambiance design",
      "Material, colour & texture curation",
      "POP, screeding & premium paintwork",
      "Styling & final handover",
    ],
    image: "/images/projects/naowa-hall-interior-pop-ceiling-lighting.jpeg",
  },
  {
    slug: "project-management",
    title: "Project Management",
    short: "End-to-end supervision that keeps projects on track.",
    description:
      "Professional project management and consulting — budget control, scheduling and quality assurance from groundbreaking to handover.",
    intro:
      "A great build needs more than great hands — it needs control. We manage timelines, budgets, contractors and quality so your project is delivered on time, on budget and to specification.",
    features: [
      "Budget planning & cost control",
      "Programme & milestone scheduling",
      "Contractor & vendor coordination",
      "Quality assurance & inspections",
      "Risk & compliance management",
      "Transparent client reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
