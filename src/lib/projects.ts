export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Interior"
  | "Renovation";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  /** Completion year — leave empty when not confirmed. */
  year?: string;
  /** Client / commissioning body, shown on the detail page. */
  client?: string;
  description: string;
  scope: string[];
  /** Cover photo used on cards and the page hero. */
  image: string;
  /** Full photo gallery for the project page. */
  gallery: string[];
  featured?: boolean;
};

/**
 * Real Arcmarshal projects. NAOWA Hall photos are the client's own.
 * Projects still using Unsplash placeholder covers are marked — swap
 * when the client supplies photos (add them to `gallery` too).
 */
export const projects: Project[] = [
  {
    slug: "naowa-hall-elele-army-barracks",
    title: "NAOWA Hall, 5 Battalion Elele Army Barracks",
    category: "Commercial",
    location: "Port Harcourt",
    client: "Nigerian Army Officers' Wives Association (NAOWA)",
    description:
      "Full design and construction of a multipurpose event hall for the Nigerian Army Officers' Wives Association at 5 Battalion, Elele Army Barracks. Delivered from foundation to finish — structure, roofing, premium POP ceilings with cove lighting, and external works — and commissioned with army officials on site.",
    scope: [
      "Structural works & block construction",
      "Long-span roofing installation",
      "POP ceilings with concealed cove lighting",
      "Doors, windows & electrical fit-out",
      "Internal & external painting",
      "Landscaping & walkways",
    ],
    image:
      "/images/projects/naowa-hall-construction-elele-army-barracks-port-harcourt.jpeg",
    gallery: [
      "/images/projects/naowa-hall-construction-elele-army-barracks-port-harcourt.jpeg",
      "/images/projects/naowa-hall-elele-port-harcourt-exterior.jpeg",
      "/images/projects/naowa-hall-port-harcourt-side-elevation.jpeg",
      "/images/projects/naowa-hall-roofline-architecture-detail.jpeg",
      "/images/projects/naowa-hall-structural-construction-stage.jpeg",
      "/images/projects/naowa-hall-veranda-paintwork-detail.jpeg",
      "/images/projects/naowa-hall-interior-pop-ceiling-lighting.jpeg",
      "/images/projects/naowa-hall-cove-lighting-interior-finishing.jpeg",
      "/images/projects/naowa-hall-official-site-visit-elele.jpeg",
      "/images/projects/naowa-hall-site-inspection-army-officials.jpeg",
    ],
    featured: true,
  },
  {
    slug: "naowa-hall-interior-finishing",
    title: "NAOWA Hall — Interior Finishing & POP Lighting",
    category: "Interior",
    location: "Port Harcourt",
    client: "Nigerian Army Officers' Wives Association (NAOWA)",
    description:
      "Complete interior finishing package for the NAOWA multipurpose hall: layered POP ceiling design with concealed cove lighting, recessed downlights, smooth wall finishing and premium paintwork — turning a bare hall into a warm, event-ready space.",
    scope: [
      "Layered POP ceiling design",
      "Concealed cove (indirect) lighting",
      "Recessed downlight installation",
      "Wall screeding & smooth finishing",
      "Premium interior paintwork",
    ],
    image: "/images/projects/naowa-hall-interior-pop-ceiling-lighting.jpeg",
    gallery: [
      "/images/projects/naowa-hall-interior-pop-ceiling-lighting.jpeg",
      "/images/projects/naowa-hall-cove-lighting-interior-finishing.jpeg",
      "/images/projects/naowa-hall-interior-ceiling-design.jpeg",
    ],
    featured: true,
  },
  {
    slug: "six-bedroom-millennium-quarters-kaduna",
    title: "6-Bedroom Residential Development, Millennium Quarters",
    category: "Residential",
    location: "Kaduna",
    description:
      "A spacious 6-bedroom private residential development in Millennium Quarters, Kaduna State — designed and built for modern family living with generous living spaces and quality finishes throughout.",
    scope: [
      "Architectural design & approvals",
      "Full structural construction",
      "Roofing, plumbing & electrical works",
      "Interior & exterior finishing",
    ],
    // TODO: replace with client photo when available
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    gallery: [],
    featured: true,
  },
  {
    slug: "fepa-quarters-apartments-karu-abuja",
    title: "6 Units of 4-Bedroom Apartments, FEPA Quarters, Karu",
    category: "Residential",
    location: "Abuja",
    year: "2018",
    description:
      "Construction of six units of 4-bedroom apartments at FEPA Quarters, Karu, Abuja — a multi-unit residential development delivered in 2018, combining efficient layouts with durable, low-maintenance finishes.",
    scope: [
      "Multi-unit residential construction",
      "Structural & block work for 6 units",
      "Roofing & external works",
      "Complete fit-out & finishing",
    ],
    // TODO: replace with client photo when available
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    gallery: [],
    featured: true,
  },
  {
    slug: "generator-house-zamfara-government-house",
    title: "Generator House, Zamfara State Government House",
    category: "Industrial",
    location: "Zamfara",
    year: "2020",
    client: "Zamfara State Government",
    description:
      "Design and construction of a dedicated generator house at the Zamfara State Government House in 2020 — a purpose-built utility facility engineered for ventilation, noise control and safe, serviceable power infrastructure.",
    scope: [
      "Purpose-built utility structure",
      "Reinforced foundations & flooring",
      "Ventilation & acoustic considerations",
      "Power infrastructure provisions",
    ],
    // TODO: replace with client photo when available
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    gallery: [],
    featured: true,
  },
  {
    slug: "army-blocks-renovation-elele",
    title: "Renovation of 9 Army Blocks, Elele Army Barracks",
    category: "Renovation",
    location: "Port Harcourt",
    year: "2022",
    client: "Nigerian Army",
    description:
      "Comprehensive renovation of nine accommodation blocks at Elele Army Barracks in 2022 — structural repairs, re-roofing, plumbing and electrical upgrades, and complete refinishing to restore the blocks to full service.",
    scope: [
      "Structural repairs across 9 blocks",
      "Re-roofing & ceiling replacement",
      "Plumbing & electrical upgrades",
      "Full repainting & refinishing",
    ],
    // TODO: replace with client photo when available
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1400&q=80",
    gallery: [],
    featured: true,
  },
  {
    slug: "protestant-church-renovation-elele",
    title: "Protestant Church Renovation, Elele Army Barracks",
    category: "Renovation",
    location: "Port Harcourt",
    client: "Nigerian Army",
    description:
      "Renovation of the Protestant church at Elele Army Barracks, Port Harcourt — restoring and upgrading the worship space with structural repairs, new finishes and improved comfort for the barracks community.",
    scope: [
      "Structural assessment & repairs",
      "Roof & ceiling restoration",
      "Interior refinishing & painting",
      "Fixtures & comfort upgrades",
    ],
    // TODO: replace with client photo when available
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1400&q=80",
    gallery: [],
  },
];

export const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Interior",
  "Renovation",
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
