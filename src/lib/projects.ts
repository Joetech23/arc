export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Interior"
  | "Renovation";

export type Project = {
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  image: string;
  featured?: boolean;
};

// Placeholder imagery — to be replaced with the client's real project photos.
export const projects: Project[] = [
  {
    title: "Maitama Hillside Residence",
    category: "Residential",
    location: "Abuja",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    title: "Wuse Commercial Plaza",
    category: "Commercial",
    location: "Abuja",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    title: "Trans-Amadi Logistics Warehouse",
    category: "Industrial",
    location: "Port Harcourt",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    title: "Kurudu Family Duplex",
    category: "Residential",
    location: "Abuja",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    title: "Penthouse Interior Fit-out",
    category: "Interior",
    location: "Kaduna",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    title: "Heritage Villa Renovation",
    category: "Renovation",
    location: "Delta",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    title: "Garki Office Complex",
    category: "Commercial",
    location: "Abuja",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bauchi Industrial Shed",
    category: "Industrial",
    location: "Bauchi",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Lounge & Reception Interior",
    category: "Interior",
    location: "Abuja",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1400&q=80",
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
