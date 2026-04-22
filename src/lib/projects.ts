export interface Project {
  slug: string;
  name: string;
  location: string;
  region: string;
  status: "On Sale" | "Ready for Sale" | "Coming Soon";
  tagline: string;
  description: string;
  prices: { label: string; amount: string }[];
  types: string[];
  features: string[];
  images: { src: string; alt: string }[];
  applyUrl: string;
  mapEmbed?: string;
}

export const projects: Project[] = [
  {
    slug: "mallow-court",
    name: "Mallow Court",
    location: "Adenta, Greater Accra",
    region: "Greater Accra",
    status: "On Sale",
    tagline: "Modern apartments in a prime Accra suburb",
    description:
      "Mallow Court offers beautifully designed 2 and 3 bedroom apartments in Adenta, Greater Accra. Situated in a gated community with 24/7 security and facility management services, Mallow Court provides comfortable living in one of Accra's most sought-after suburbs.",
    prices: [
      { label: "2 Bedroom", amount: "GH₵ 350,000.00" },
      { label: "3 Bedroom", amount: "GH₵ 450,000.00" },
    ],
    types: ["2 Bedroom Apartment", "3 Bedroom Apartment"],
    features: [
      "2 & 3 Bedroom ensuite",
      "Visitors Washroom",
      "Kitchen with sink and cabinet",
      "Living area and dining",
      "Store Room",
      "Balcony",
      "Kitchen terrace",
      "Car Park",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
    ],
    images: [
      { src: "/images/shc.jpg", alt: "Mallow Court Exterior" },
    ],
    applyUrl: "https://forms.gle/rL8X8Woe63iiqifr7",
  },
  {
    slug: "urban-premier-court",
    name: "Urban Premier Court",
    location: "North Kaneshie, Greater Accra",
    region: "Greater Accra",
    status: "On Sale",
    tagline: "Premium urban living in the heart of Accra",
    description:
      "Urban Premier Court features elegant 2 and 3 bedroom apartments in North Kaneshie. Designed for modern urban living, this estate combines comfort, convenience, and security in a well-connected Accra neighbourhood.",
    prices: [
      { label: "2 Bedroom Apartment", amount: "GH₵ 380,000.00" },
      { label: "3 Bedroom Apartment", amount: "GH₵ 490,000.00" },
    ],
    types: ["2 Bedroom Apartment", "3 Bedroom Apartment"],
    features: [
      "2 & 3 Bedroom Apartments",
      "Visitors Washroom",
      "Kitchen with sink and cabinet",
      "Living area and dining",
      "Store Room",
      "Balcony",
      "Kitchen terrace",
      "Car Park",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
    ],
    images: [
      { src: "/images/shc1.jpg", alt: "Urban Premier Court" },
    ],
    applyUrl: "https://forms.gle/rL8X8Woe63iiqifr7",
  },
  {
    slug: "legacy-court",
    name: "Legacy Court",
    location: "Greater Accra",
    region: "Greater Accra",
    status: "On Sale",
    tagline: "Timeless design meets modern comfort",
    description:
      "Legacy Court offers spacious 3 and 4 bedroom semi-detached and detached houses. With carefully designed ground and top floor layouts, Legacy Court provides the perfect family home with distinct living areas, ensuite bedrooms, and modern amenities.",
    prices: [
      { label: "3 Bedroom Semi-Detached", amount: "GH₵ 480,000.00" },
      { label: "4 Bedroom Detached", amount: "GH₵ 650,000.00" },
    ],
    types: ["3 Bedroom Semi-Detached", "4 Bedroom Detached"],
    features: [
      "Ground Floor: Living Area, Entry Porch, Dining, Kitchen & Storage, Kitchen Yard, Guest Bedroom Ensuite, Visitors Washroom",
      "Top Floor: 2 Bedroom Ensuite, Master Bedroom Ensuite, Family Area, Balcony",
      "Car Port",
      "Outdoor Terrace",
      "Store",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
    ],
    images: [
      { src: "/images/shc2.jpg", alt: "Legacy Court" },
    ],
    applyUrl: "https://forms.gle/rL8X8Woe63iiqifr7",
  },
  {
    slug: "club-court",
    name: "Club Court",
    location: "Greater Accra",
    region: "Greater Accra",
    status: "Ready for Sale",
    tagline: "Exclusive community living at its finest",
    description:
      "Club Court is an exclusive estate offering premium 2 and 3 bedroom homes in a secure gated community. Designed with family comfort in mind, each home comes with modern finishes, spacious living areas, and comprehensive estate management services.",
    prices: [
      { label: "2 Bedroom", amount: "GH₵ 360,000.00" },
      { label: "3 Bedroom", amount: "GH₵ 470,000.00" },
    ],
    types: ["2 Bedroom", "3 Bedroom"],
    features: [
      "2 & 3 Bedroom ensuite",
      "Visitors Washroom",
      "Kitchen with sink and cabinet",
      "Living area and dining",
      "Store Room",
      "Balcony",
      "Kitchen terrace",
      "Car Park",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
    ],
    images: [
      { src: "/images/shc3.jpg", alt: "Club Court" },
    ],
    applyUrl: "https://forms.gle/rL8X8Woe63iiqifr7",
  },
  {
    slug: "john-agyekum-kufuor-estates",
    name: "John Agyekum Kufuor Estates",
    location: "Kumasi, Ashanti Region",
    region: "Ashanti",
    status: "On Sale",
    tagline: "Premium housing in the Garden City",
    description:
      "Located in Kumasi, the John Agyekum Kufuor Estates offers a range of 2, 3, and 4 bedroom detached and semi-detached homes. Named after Ghana's former President, this estate combines quality construction with affordable pricing in the heart of the Ashanti Region.",
    prices: [
      { label: "2 Bedroom Semi-Detached", amount: "GH₵ 310,000.00" },
      { label: "2 Bedroom Detached", amount: "GH₵ 360,000.00" },
      { label: "3 Bedroom Detached", amount: "GH₵ 480,000.00" },
      { label: "4 Bedroom Detached", amount: "GH₵ 851,000.00" },
    ],
    types: ["2 Bedroom Semi-Detached", "2 Bedroom Detached", "3 Bedroom Detached", "4 Bedroom Detached"],
    features: [
      "2, 3 & 4 Bedroom ensuite",
      "Visitors Washroom",
      "Kitchen with sink and cabinet",
      "Living area and dining",
      "Store Room",
      "Balcony",
      "Kitchen terrace",
      "Car Park",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
    ],
    images: [
      { src: "/images/shc4.jpg", alt: "John Agyekum Kufuor Estates" },
    ],
    applyUrl: "https://forms.gle/LgkWChgNqrYgSxv86",
  },
  {
    slug: "rock-estates",
    name: "Rock Estates",
    location: "Bolgatanga, Upper East Region",
    region: "Upper East",
    status: "On Sale",
    tagline: "Quality homes in the Upper East Region",
    description:
      "Rock Estates brings SHC's signature quality to the Upper East Region. Located in Bolgatanga, this estate offers affordable yet well-finished homes designed for the northern Ghana climate, with spacious layouts and modern amenities.",
    prices: [
      { label: "2 Bedroom", amount: "GH₵ 350,000.00" },
      { label: "3 Bedroom", amount: "GH₵ 460,000.00" },
    ],
    types: ["2 Bedroom", "3 Bedroom"],
    features: [
      "2 & 3 Bedroom ensuite",
      "Visitors Washroom",
      "Kitchen with sink and cabinet",
      "Living area and dining",
      "Store Room",
      "Balcony",
      "Car Park",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
    ],
    images: [
      { src: "/images/shc5.jpg", alt: "Rock Estates" },
    ],
    applyUrl: "https://forms.gle/rL8X8Woe63iiqifr7",
  },
  {
    slug: "executive-bungalows",
    name: "4 Bedroom Executive Bungalows",
    location: "Greater Accra",
    region: "Greater Accra",
    status: "On Sale",
    tagline: "Luxury executive living",
    description:
      "The 4 Bedroom Executive Bungalows represent the pinnacle of SHC's residential offerings. These spacious detached homes feature premium finishes, expansive living areas, and are situated in exclusive, well-maintained estates perfect for executive families.",
    prices: [
      { label: "4 Bedroom Executive", amount: "GH₵ 851,000.00" },
    ],
    types: ["4 Bedroom Executive Bungalow"],
    features: [
      "4 Bedroom ensuite with wardrobes",
      "Visitors Washroom",
      "Kitchen with sink and cabinet",
      "Living area and dining",
      "Store Room",
      "Balcony",
      "Kitchen terrace",
      "Car Park (2 vehicles)",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
      "Landscaped gardens",
    ],
    images: [
      { src: "/images/shc6.jpg", alt: "Executive Bungalows" },
    ],
    applyUrl: "https://forms.gle/rL8X8Woe63iiqifr7",
  },
  {
    slug: "mawuli-court",
    name: "Mawuli Court",
    location: "Ho, Volta Region",
    region: "Volta",
    status: "Ready for Sale",
    tagline: "Quality homes in the Volta Region",
    description:
      "Mawuli Court is SHC's flagship development in the Volta Region, located in Ho. These well-designed homes bring the same quality and attention to detail that SHC is known for, with features tailored for comfortable family living in the serene Volta Region.",
    prices: [
      { label: "2 Bedroom", amount: "GH₵ 350,000.00" },
      { label: "3 Bedroom", amount: "GH₵ 460,000.00" },
    ],
    types: ["2 Bedroom", "3 Bedroom"],
    features: [
      "2 & 3 Bedroom ensuite",
      "Visitors Washroom",
      "Kitchen with sink and cabinet",
      "Living area and dining",
      "Store Room",
      "Balcony",
      "Kitchen terrace",
      "Car Park",
      "24/7 Security service",
      "Facility Management service",
      "Gated Community",
    ],
    images: [
      { src: "/images/shc7.jpg", alt: "Mawuli Court" },
    ],
    applyUrl: "https://forms.gle/rL8X8Woe63iiqifr7",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
