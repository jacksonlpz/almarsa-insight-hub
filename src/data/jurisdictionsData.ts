import { Building, Globe, Users } from "lucide-react";

export const regions = [
  {
    name: "Middle East & North Africa",
    countries: [
      "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
      "Egypt", "Jordan", "Lebanon", "Morocco", "Tunisia", "Algeria"
    ],
    icon: "🏜️",
    description: "Our primary region with deep local expertise and established partnerships."
  },
  {
    name: "Asia Pacific",
    countries: [
      "China", "Japan", "India", "Singapore", "South Korea", "Australia",
      "Malaysia", "Thailand", "Philippines", "Indonesia", "Hong Kong", "Taiwan"
    ],
    icon: "🌏",
    description: "Comprehensive coverage across major Asian markets and emerging economies."
  },
  {
    name: "Europe",
    countries: [
      "United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands",
      "Switzerland", "Sweden", "Belgium", "Austria", "Poland", "Ireland"
    ],
    icon: "🇪🇺",
    description: "Full European Union coverage plus key non-EU jurisdictions."
  },
  {
    name: "Americas",
    countries: [
      "United States", "Canada", "Brazil", "Mexico", "Argentina", "Chile",
      "Colombia", "Peru", "Venezuela", "Uruguay", "Costa Rica", "Panama"
    ],
    icon: "🌎",
    description: "North and South American markets with strong local partnerships."
  },
  {
    name: "Africa",
    countries: [
      "South Africa", "Nigeria", "Kenya", "Ghana", "Ethiopia", "Tanzania",
      "Uganda", "Zambia", "Zimbabwe", "Botswana", "Namibia", "Rwanda"
    ],
    icon: "🌍",
    description: "Growing coverage across the African continent's emerging markets."
  }
];

export const specializations = [
  {
    icon: Building,
    title: "GCC Expertise",
    description: "Deep understanding of Gulf Cooperation Council regulations and business practices.",
    features: ["Local filing procedures", "Cultural considerations", "Government relations", "Fast-track services"]
  },
  {
    icon: Globe,
    title: "International Treaties",
    description: "Leverage international agreements for efficient multi-jurisdictional protection.",
    features: ["Madrid Protocol", "PCT applications", "Paris Convention", "WIPO procedures"]
  },
  {
    icon: Users,
    title: "Local Partnerships",
    description: "Established network of trusted local agents and attorneys worldwide.",
    features: ["Vetted partners", "Quality assurance", "Cost optimization", "Streamlined process"]
  }
];

export const stats = [
  { number: "150+", label: "Jurisdictions Covered" },
  { number: "50+", label: "Countries with Local Partners" },
  { number: "25+", label: "Languages Supported" },
  { number: "2000+", label: "International Filings" }
];