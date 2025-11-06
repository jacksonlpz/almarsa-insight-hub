import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { renderAlMarsaIcon } from "@/components/icons/al-marsa";
import useScrollReveal from "@/hooks/useScrollReveal";
import "@/styles/home.css";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type Value = {
  icon: keyof typeof ICON_MAP;
  title: string;
  description: string;
};

const ICON_MAP = {
  trademark: "trademark",
  network: "advantage-network",
  governance: "advantage-governance",
  innovation: "creative",
  defence: "defence",
} as const;

const MILESTONES: Milestone[] = [
  {
    year: "2004",
    title: "Foundation",
    description: "Al Marsa IP was established with a vision to deliver world-class intellectual property services across the Middle East."
  },
  {
    year: "2010",
    title: "Regional Expansion",
    description: "We broadened our reach throughout the GCC, building alliances with leading IP firms to fast-track cross-border filings."
  },
  {
    year: "2015",
    title: "Global Network",
    description: "A vetted network spanning 150+ jurisdictions enabled clients to manage portfolios through a single strategic partner."
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "We debuted a digital client portal for transparent mandate tracking and streamlined document collaboration."
  },
  {
    year: "2024",
    title: "Excellence Recognised",
    description: "Serving 500+ clients with over 2,000 successful registrations cemented our reputation for precision and responsiveness."
  }
];

const CORE_VALUES: Value[] = [
  {
    icon: "trademark",
    title: "Integrity & Trust",
    description: "Transparent counsel and ethical practice are the foundations of every engagement."
  },
  {
    icon: "network",
    title: "Client Focus",
    description: "We measure success by the commercial outcomes our clients achieve."
  },
  {
    icon: "governance",
    title: "Global Outlook",
    description: "Forward-looking strategies anticipate multi-jurisdictional opportunities and challenges."
  },
  {
    icon: "innovation",
    title: "Innovation",
    description: "We invest in tools and training that keep us at the forefront of evolving IP landscapes."
  }
];

const INSIGHTS = [
  {
    metric: "20+",
    label: "Years of combined GCC experience"
  },
  {
    metric: "150+",
    label: "Jurisdictions coordinated through partners"
  },
  {
    metric: "92%",
    label: "Matters retained through client referrals"
  }
];

const TEAM_PILLARS = [
  {
    name: "Hassan Al Sabah",
    role: "Managing Partner",
    bio: "Strategic advisor across multi-jurisdictional filings with 20 years guiding GCC innovators.",
    location: "Kuwait City",
    image: "/men.jpg",
  },
  {
    name: "Noor Al Farsi",
    role: "Director, Enforcement",
    bio: "Leads dispute resolution and enforcement with a focus on customs, litigation, and negotiated settlements.",
    location: "Kuwait City",
    image: "/women.png",
  },
  {
    name: "Omar Al Saeed",
    role: "Head of Client Programmes",
    bio: "Architects operating playbooks and reporting cadences that keep leadership informed at every stage.",
    location: "Kuwait City",
    image: "/men.jpg",
  },
];

const TESTIMONIAL = {
  quote:
    "The Al Marsa team integrates legal, technical, and commercial advisors in a way that gives our board total confidence in every IP decision.",
  author: "Chief Legal Officer",
  company: "Regional Industrial Group",
};

const OurStory = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  usePageSEO({
    title: "Our Story & Leadership",
    description: "Discover how Al Marsa Intellectual Property Agents evolved into a trusted GCC partner for strategic IP portfolios.",
    keywords: ["Al Marsa IP story", "IP leadership Kuwait", "GCC intellectual property team"],
    url: buildCanonicalUrl("/our-story"),
  });

  useScrollReveal();
  return (
    <div className={cn("min-h-screen bg-background text-foreground", isRTL && "dir-rtl")}> 
      <Header />
      <main id="main-content" role="main">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-[#1a2332] to-navy-light text-white" data-animate>
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,_rgba(231,93,43,0.15),_transparent_50%)]" />
          <div className="container-responsive relative z-10 py-12 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8 text-center">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 backdrop-blur-sm">
                    <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                    <span className="text-label-xs font-semibold uppercase tracking-widest text-white/90">About Al Marsa</span>
                  </div>
                  <h1 className="hero-title text-white">
                    Your Global Partner in Intellectual Property
                  </h1>
                  <p className="hero-subtitle mx-auto text-white/80">
                    Rooted in Kuwait, connected globally. We deliver precision IP protection with commercial insight and strategic enforcement.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid gap-4 pt-4 md:grid-cols-3">
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-base ease-emphasis hover:border-white/20 hover:bg-white/10">
                    <div className="space-y-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        {renderAlMarsaIcon("advantage-network", { className: "h-5 w-5" })}
                      </div>
                      <h3 className="text-heading-sm font-semibold text-white">Dedicated Client Leadership</h3>
                      <p className="text-body-xs leading-relaxed text-white/70">Multi-jurisdictional mandates coordinated end-to-end</p>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-base ease-emphasis hover:border-white/20 hover:bg-white/10">
                    <div className="space-y-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        {renderAlMarsaIcon("strategy", { className: "h-5 w-5" })}
                      </div>
                      <h3 className="text-heading-sm font-semibold text-white">Integrated Strategy</h3>
                      <p className="text-body-xs leading-relaxed text-white/70">Prosecution, enforcement, and commercialization aligned</p>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                    <div className="space-y-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        {renderAlMarsaIcon("advantage-governance", { className: "h-5 w-5" })}
                      </div>
                      <h3 className="text-sm font-semibold text-white">Transparent Reporting</h3>
                      <p className="text-xs leading-relaxed text-white/70">Leadership informed at every critical milestone</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-2">
                  <Button asChild size="default" className="bg-white text-navy-deep hover:bg-white/90 h-10">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Get In Touch</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="default" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 h-10">
                    <Link to="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Credibility Section */}
        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Our Track Record</span>
              <h2 className="section-title mt-6">Trusted By Leaders</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 max-w-4xl mx-auto">
              {INSIGHTS.map((insight) => (
                <div key={insight.label} className="insight-metric">
                  <span>{insight.metric}</span>
                  <p>{insight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Our Foundation</span>
              <h2 className="section-title mt-6">Delivering Tailored IP Strategies for Unparalleled Protection and Growth</h2>
              <p className="section-subtitle mt-6">
                Every engagement is anchored by collaborative planning, success metrics, and regional roadmaps that accelerate decision-making.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              <div className="space-y-8 p-12 rounded-3xl bg-white shadow-lg">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                    Founding Vision
                  </div>
                  <h3 className="text-3xl font-bold text-navy-deep">Strategic IP Partner for Ambitious Leaders</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We combine prosecution excellence, contentious expertise, and commercial fluency. Our teams steward portfolios that power IPOs, franchise expansions, and cross-border investments.
                </p>
              </div>
              <div className="space-y-8 p-12 rounded-3xl bg-white shadow-lg">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                    Our Commitment
                  </div>
                  <h3 className="text-3xl font-bold text-navy-deep">Measurable Outcomes at Every Stage</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Every mandate includes defined deliverables, exposure mitigation plans, and reporting cadences that keep general counsel and leadership aligned from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-b from-white to-gray-50" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Our Journey</span>
              <h2 className="section-title mt-6">Two Decades of Excellence</h2>
              <p className="section-subtitle mt-6">
                Sustained growth, diversified expertise, and client wins across the GCC, MENA, and global innovation corridors.
              </p>
            </div>
            <ol className="timeline max-w-4xl mx-auto">
              {MILESTONES.map((milestone, index) => (
                <li key={milestone.year} className="timeline-item" data-animate>
                  <div className="timeline-index">{milestone.year}</div>
                  <div className="timeline-content">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Our Principles</span>
              <h2 className="section-title mt-6">Values That Drive Excellence</h2>
              <p className="section-subtitle mt-6">
                These tenets ensure advice that is commercially viable, culturally informed, and defensible in every forum.
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
              {CORE_VALUES.map((value, index) => (
                <div
                  key={value.title}
                  className="group p-10 rounded-2xl bg-gradient-to-r from-white to-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  data-animate
                >
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-3xl font-bold text-navy-deep">{value.title}</h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-b from-gray-50 to-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Leadership Team</span>
              <h2 className="section-title mt-6 text-navy-deep">Integrated Expertise</h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
              {TEAM_PILLARS.map((member) => (
                <div key={member.name} className="text-center space-y-6 p-8 group" data-animate>
                  <div className="flex justify-center">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-slate-200 via-slate-100 to-white shadow-lg ring-4 ring-white transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 text-2xl font-semibold text-primary">
                          {member.name
                            .split(" ")
                            .map((part) => part[0] ?? "")
                            .join("")
                            .slice(0, 2)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-navy-deep">{member.name}</h3>
                    <p className="text-base font-semibold text-primary">{member.role}</p>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      <MapPin className="h-4 w-4" /> Kuwait City
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32" data-animate>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-[#1e293b] to-navy-deep" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(231,93,43,0.3),_transparent_70%)]" />
          <div className="container-responsive relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <span className="hero-eyebrow">Ready to Start?</span>
                <h2 className="hero-title text-white">
                  Advance Your IP Strategy
                </h2>
                <p className="hero-subtitle max-w-3xl mx-auto">
                  Whether formalising a first filing or rationalising a global portfolio, we align protection with growth targets and governance requirements.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                <Button asChild size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                >
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
