export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
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
  /** Full photo gallery for the project page (cover first). */
  gallery: string[];
  featured?: boolean;
};

/** Every project below uses the client's own real photographs. */
export const projects: Project[] = [
  {
    slug: "naowa-hall-elele-army-barracks",
    title: "NAOWA Hall, 5 Battalion Elele Army Barracks",
    category: "Commercial",
    location: "Port Harcourt",
    client: "Nigerian Army Officers' Wives Association (NAOWA)",
    description:
      "Full design and construction of a multipurpose event hall for the Nigerian Army Officers' Wives Association at 5 Battalion, Elele Army Barracks. Delivered from foundation to finish — structure, roofing, premium POP ceilings with cove lighting and external works — and commissioned with army officials on site.",
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
      "/images/projects/naowa-hall-interior-ceiling-design.jpeg",
      "/images/projects/naowa-hall-official-site-visit-elele.jpeg",
      "/images/projects/naowa-hall-site-inspection-army-officials.jpeg",
    ],
    featured: true,
  },
  {
    slug: "bauchi-duplex-and-bungalow",
    title: "5-Bedroom Duplex & 3-Bedroom Bungalow, Bauchi",
    category: "Residential",
    location: "Bauchi",
    year: "2024",
    description:
      "Ground-up design and construction of a contemporary 5-bedroom duplex and a 3-bedroom bungalow in Bauchi State, completed in 2024. Our in-house team delivered the project end to end — from setting out and reinforced columns through the structural frame to a clean, modern flat-roof finish.",
    scope: [
      "Architectural design & 3D visualisation",
      "Reinforced foundations & columns",
      "Structural frame & slab work",
      "Contemporary flat-roof construction",
      "Windows, doors & external works",
      "Modern finishing & painting",
    ],
    image: "/images/projects/bauchi-duplex-bungalow-cover.jpg",
    gallery: [
      "/images/projects/bauchi-duplex-bungalow-cover.jpg",
      "/images/projects/bauchi-duplex-bungalow-01.jpg",
      "/images/projects/bauchi-duplex-bungalow-02.jpg",
      "/images/projects/bauchi-duplex-bungalow-03.jpg",
      "/images/projects/bauchi-duplex-bungalow-04.jpg",
      "/images/projects/bauchi-duplex-bungalow-05.jpg",
      "/images/projects/bauchi-duplex-bungalow-06.jpg",
      "/images/projects/bauchi-duplex-bungalow-07.jpg",
      "/images/projects/bauchi-duplex-bungalow-08.jpg",
      "/images/projects/bauchi-duplex-bungalow-09.jpg",
      "/images/projects/bauchi-duplex-bungalow-10.jpg",
      "/images/projects/bauchi-duplex-bungalow-11.jpg",
      "/images/projects/bauchi-duplex-bungalow-12.jpg",
      "/images/projects/bauchi-duplex-bungalow-13.jpg",
      "/images/projects/bauchi-duplex-bungalow-14.jpg",
      "/images/projects/bauchi-duplex-bungalow-15.jpg",
      "/images/projects/bauchi-duplex-bungalow-16.jpg",
      "/images/projects/bauchi-duplex-bungalow-17.jpg",
      "/images/projects/bauchi-duplex-bungalow-18.jpg",
      "/images/projects/bauchi-duplex-bungalow-19.jpg",
      "/images/projects/bauchi-duplex-bungalow-20.jpg",
      "/images/projects/bauchi-duplex-bungalow-21.jpg",
      "/images/projects/bauchi-duplex-bungalow-22.jpg",
      "/images/projects/bauchi-duplex-bungalow-23.jpg",
      "/images/projects/bauchi-duplex-bungalow-24.jpg",
      "/images/projects/bauchi-duplex-bungalow-25.jpg",
      "/images/projects/bauchi-duplex-bungalow-26.jpg",
      "/images/projects/bauchi-duplex-bungalow-27.jpg",
    ],
    featured: true,
  },
  {
    slug: "millennium-quarters-residence-kaduna",
    title: "6-Bedroom Residential Development, Millennium Quarters",
    category: "Residential",
    location: "Kaduna",
    description:
      "A spacious 6-bedroom private residence in Millennium Quarters, Kaduna — designed and built for comfortable modern family living and finished with a bespoke ornamental gate, perimeter fencing and compound lighting.",
    scope: [
      "Architectural design & approvals",
      "Full structural construction",
      "Roofing & external works",
      "Interior & exterior finishing",
      "Ornamental gate & perimeter fencing",
      "Compound & security lighting",
    ],
    image: "/images/projects/millennium-quarters-kaduna-cover.jpeg",
    gallery: [
      "/images/projects/millennium-quarters-kaduna-cover.jpeg",
      "/images/projects/millennium-quarters-kaduna-01.jpeg",
      "/images/projects/millennium-quarters-kaduna-02.jpeg",
      "/images/projects/millennium-quarters-kaduna-03.jpeg",
      "/images/projects/millennium-quarters-kaduna-04.jpeg",
      "/images/projects/millennium-quarters-kaduna-05.jpeg",
      "/images/projects/millennium-quarters-kaduna-06.jpeg",
      "/images/projects/millennium-quarters-kaduna-07.jpeg",
      "/images/projects/millennium-quarters-kaduna-08.jpeg",
      "/images/projects/millennium-quarters-kaduna-09.jpeg",
      "/images/projects/millennium-quarters-kaduna-10.jpeg",
      "/images/projects/millennium-quarters-kaduna-11.jpeg",
    ],
    featured: true,
  },
  {
    slug: "minimah-farm-renovation-port-harcourt",
    title: "Lt. Gen. Kenneth Minimah Farm Renovation",
    category: "Renovation",
    location: "Port Harcourt",
    year: "2023",
    client: "Lt. Gen. Kenneth Minimah (Rtd)",
    description:
      "Renovation and refurbishment of Lt. General Kenneth Minimah's country home and farm in Port Harcourt, completed in 2023 — restoring the two-storey residence and its grounds with fresh finishes, structural repairs and landscaped surroundings.",
    scope: [
      "Full building refurbishment",
      "External repainting & finishing",
      "Roof & structural repairs",
      "Compound paving & landscaping",
      "Fixtures & general renovation works",
    ],
    image: "/images/projects/minimah-farm-port-harcourt-cover.jpg",
    gallery: [
      "/images/projects/minimah-farm-port-harcourt-cover.jpg",
      "/images/projects/minimah-farm-port-harcourt-01.jpg",
      "/images/projects/minimah-farm-port-harcourt-02.jpg",
      "/images/projects/minimah-farm-port-harcourt-03.jpg",
      "/images/projects/minimah-farm-port-harcourt-04.jpg",
    ],
    featured: true,
  },
  {
    slug: "zamfara-government-house-generator",
    title: "Generator House, Zamfara State Government House",
    category: "Industrial",
    location: "Zamfara",
    year: "2020",
    client: "Zamfara State Government",
    description:
      "Design and construction of a dedicated generator house at the Zamfara State Government House, completed in 2020 — a purpose-built power facility engineered for safe housing of standby generators, fuel storage and proper ventilation.",
    scope: [
      "Purpose-built utility structure",
      "Reinforced base & access ramp",
      "Ventilation & louvre screening",
      "Fuel storage provision",
      "Secure housing & finishing",
    ],
    image: "/images/projects/zamfara-generator-house-cover.jpg",
    gallery: [
      "/images/projects/zamfara-generator-house-cover.jpg",
      "/images/projects/zamfara-generator-house-01.jpg",
      "/images/projects/zamfara-generator-house-02.jpg",
    ],
    featured: true,
  },
  {
    slug: "5-battalion-hq-renovation-elele",
    title: "5 Battalion Headquarters Renovation, Elele Barracks",
    category: "Renovation",
    location: "Port Harcourt",
    year: "2022",
    client: "Nigerian Army",
    description:
      "Renovation of the 5 Battalion Headquarters building at Elele Army Barracks, Port Harcourt, completed in 2022 — a comprehensive re-roofing, refinishing and upgrade of the long-span administrative block.",
    scope: [
      "Re-roofing of administrative block",
      "Structural repairs",
      "Window & facade upgrades",
      "Repainting & refinishing",
      "External works",
    ],
    image: "/images/projects/5-battalion-hq-elele-cover.jpg",
    gallery: [
      "/images/projects/5-battalion-hq-elele-cover.jpg",
      "/images/projects/5-battalion-hq-elele-01.jpg",
      "/images/projects/5-battalion-hq-elele-02.jpg",
      "/images/projects/5-battalion-hq-elele-03.jpg",
    ],
  },
];

export const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
