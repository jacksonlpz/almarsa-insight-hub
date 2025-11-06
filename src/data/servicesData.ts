import type { AlMarsaIconName } from "@/components/icons/al-marsa";

type ServicePillar = {
  icon: AlMarsaIconName;
  title: string;
  tagline: string;
  services: string[];
  whyItMatters: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const SERVICE_INTRO = "We organize our offerings into six core service pillars. Whether you're launching a new brand, defending your patent, or expanding internationally — we have the expertise to guide you.";

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    icon: "trademark",
    title: "IP Registration & Protection",
    tagline: "Secure your intellectual property before it can be challenged.",
    services: [
      "Trademark Registration & Management",
      "Patent Filing & Prosecution",
      "Industrial Design Registration",
      "Trade Secret Safeguards"
    ],
    whyItMatters: "Proper registration is your foundational shield."
  },
  {
    icon: "disputes",
    title: "Enforcement & Litigation",
    tagline: "Your rights matter — and we help you enforce them.",
    services: [
      "Infringement actions and remedies",
      "Cease & Desist Notices",
      "Opposition / Cancellation proceedings",
      "Customs recordation & border enforcement",
      "Civil & criminal litigation",
      "Domain name dispute resolution"
    ],
    whyItMatters: "Strong enforcement protects your competitive advantage."
  },
  {
    icon: "strategy",
    title: "Licensing & Assignment",
    tagline: "Turn your IP into revenue or strategic partnerships.",
    services: [
      "Drafting licensing agreements",
      "Assigning ownership rights",
      "Franchise & brand expansion contracts",
      "Technology transfer & joint ventures"
    ],
    whyItMatters: "Strategic licensing maximizes your IP's commercial value."
  },
  {
    icon: "defence",
    title: "Anti-Counterfeiting & Market Surveillance",
    tagline: "Stay ahead of threats in the market before they escalate.",
    services: [
      "Brand protection programs",
      "Market monitoring & investigations",
      "Coordination with customs, law enforcement & regulators"
    ],
    whyItMatters: "Proactive surveillance prevents revenue loss and brand damage."
  },
  {
    icon: "audit",
    title: "IP Contracts & Agreements",
    tagline: "Clear, enforceable contracts protect your creative and technical assets.",
    services: [
      "Non-Disclosure / Confidentiality Agreements",
      "Software licensing & digital IP contracts",
      "Technology transfer clauses",
      "Custom IP-specific legal agreements"
    ],
    whyItMatters: "Airtight contracts prevent disputes before they arise."
  },
  {
    icon: "advantage-insight",
    title: "IP Strategy & Advisory",
    tagline: "Plan, evaluate, and leverage your IP as strategic capital.",
    services: [
      "IP portfolio audits & optimization",
      "Valuation & monetization assessments",
      "Market entry & jurisdictional planning",
      "Risk assessment & due diligence in transactions"
    ],
    whyItMatters: "Strategic IP planning drives long-term business growth."
  }
];

export const SERVICE_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Initial Discovery & Needs Assessment",
    description: "We analyze your IP assets, business goals, and competitive landscape."
  },
  {
    step: "02",
    title: "Prior Art / Conflict Search",
    description: "Deep due diligence to identify risks, clashes, or opportunities."
  },
  {
    step: "03",
    title: "Strategic Roadmap",
    description: "We craft a custom protection plan aligned with your business vision."
  },
  {
    step: "04",
    title: "Application Preparation & Filing",
    description: "Precise drafting, documentation, and filing with relevant authorities."
  },
  {
    step: "05",
    title: "Prosecution, Office Actions & Responses",
    description: "We handle all examiner queries, objections, and amendments."
  },
  {
    step: "06",
    title: "Monitoring, Maintenance & Enforcement",
    description: "Ongoing surveillance, renewals, enforcement, and portfolio health checks."
  }
];
