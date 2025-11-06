import type { AlMarsaIconName } from "@/components/icons/al-marsa";

type ServiceItem = {
  icon: AlMarsaIconName;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    icon: "trademark",
    title: "Trademark Registration & Protection",
    description: "From search and filing to renewals, oppositions, and watch services"
  },
  {
    icon: "patent",
    title: "Patent Application & Prosecution",
    description: "Technical drafting, filings, and prosecution across priority jurisdictions"
  },
  {
    icon: "strategy",
    title: "Trade Secret Advisory",
    description: "Programmes that harden confidential processes and govern sensitive know-how"
  },
  {
    icon: "disputes",
    title: "IP Disputes & Enforcement",
    description: "Infringement response, negotiated settlements, and litigation support"
  },
  {
    icon: "advantage-network",
    title: "Global & Cross-Border IP",
    description: "Madrid, PCT, and local counsel coordination with unified governance"
  },
  {
    icon: "industrial",
    title: "Industrial Design & Model Protection",
    description: "Design registration, renewals, and anti-counterfeit programmes"
  }
];

type FeatureItem = {
  icon: AlMarsaIconName;
  label: string;
  description: string;
};

export const features: FeatureItem[] = [
  {
    icon: "advantage-insight",
    label: "Local expertise, global visibility",
    description: "Sector-specific attorneys embedded across the GCC provide nuanced counsel the moment priorities shift.",
  },
  {
    icon: "advantage-network",
    label: "Tailored, proactive programmes",
    description: "Lifecycle strategies built around launches, renewals, and disputes so decisions are always timely and informed.",
  },
  {
    icon: "advantage-governance",
    label: "Audit-ready governance & reporting",
    description: "Evidence frameworks, dashboards, and board-ready updates that withstand scrutiny across jurisdictions.",
  },
  {
    icon: "defence",
    label: "Rapid enforcement & defence posture",
    description: "Escalation playbooks let you intervene quickly—administratively, commercially, or litigiously—without losing momentum.",
  },
];

export const stats = [
  { number: "50+", label: "Matters Managed" },
  { number: "25+", label: "Global Jurisdictions" },
  { number: "100%", label: "Client Satisfaction" }
];

// Default exports with fallbacks
export default {
  services,
  features,
  stats
};