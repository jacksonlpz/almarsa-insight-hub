import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { renderAlMarsaIcon } from "@/components/icons/al-marsa";
import { SERVICE_INTRO, SERVICE_PILLARS, SERVICE_PROCESS } from "@/data/servicesData";
import useScrollReveal from "@/hooks/useScrollReveal";
import "@/styles/home.css";
import "@/styles/accessibility.css";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";

const SERVICE_METRICS = [
  {
    metric: "24h",
    label: "Average response for regional filings"
  },
  {
    metric: "60+",
    label: "Jurisdictions coordinated each year"
  },
  {
    metric: "94%",
    label: "Mandates retained through renewals"
  }
];

const Services = () => {
  usePageSEO({
    title: "Intellectual Property Services Portfolio",
    description: "Explore Al Marsa IP's trademark, patent, enforcement, anti-counterfeiting, and advisory services tailored for GCC and global mandates.",
    keywords: [
      "IP services Kuwait",
      "trademark enforcement GCC",
      "patent filing support",
      "anti-counterfeiting program",
      "intellectual property advisory"
    ],
    url: buildCanonicalUrl("/services"),
  });

  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main role="main" id="main-content">
        <section aria-label="Services Overview" className="relative overflow-hidden bg-navy-deep text-white" data-animate>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a202c] via-[#1e293b] to-[#0f172a]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,_rgba(231,93,43,0.2),_transparent_60%)]" />
          </div>
          <div className="container-responsive relative z-10 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <span className="hero-eyebrow">Our Services</span>
                <h1 className="hero-title text-white mx-auto">
                  Comprehensive IP Execution.<br />Empowering Your Innovation Journey.
                </h1>
                <p className="hero-subtitle mx-auto">
                  End-to-end IP solutions orchestrating filings, renewals, enforcement, and commercialization programs that keep your strategy ahead of market momentum.
                </p>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm text-white/80 flex-wrap">
                {SERVICE_METRICS.map((metric, index) => (
                  <div key={metric.label} className="flex items-center gap-2">
                    {index > 0 && <span className="text-white/30">•</span>}
                    <span className="font-bold text-white text-lg">{metric.metric}</span>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                <Button asChild size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                >
                  <Link to="/jurisdictions">View Coverage Areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Our Service Offering</span>
              <h2 className="section-title mt-6">Six Core Service Pillars</h2>
              <p className="section-subtitle mt-6">
                {SERVICE_INTRO}
              </p>
            </div>
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SERVICE_PILLARS && SERVICE_PILLARS.length > 0 ? (
                SERVICE_PILLARS.map((pillar) => {
                  const slug = pillar.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

                  return (
                  <Card
                    key={pillar.title}
                      id={slug}
                    className="group relative overflow-hidden border border-border bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    data-animate
                  >
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-md transition-all duration-300 group-hover:scale-110">
                          {renderAlMarsaIcon(pillar.icon, { className: "h-8 w-8", strokeWidth: 1.5 })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-navy-deep">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">{pillar.tagline}</p>
                      </div>

                      <ul className="space-y-2">
                        {pillar.services.map((service) => (
                          <li key={service} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-foreground/80">{service}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs font-semibold text-primary">
                          <span className="text-muted-foreground">Why it matters:</span> {pillar.whyItMatters}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  );
                })
              ) : (
                <div className="col-span-full text-center text-muted-foreground">
                  Loading services...
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Our Process</span>
              <h2 className="section-title mt-6">From Ideation to Protection & Growth</h2>
              <p className="section-subtitle mt-6">
                Clear. Transparent. Client-centric.
              </p>
            </div>
            <ol className="timeline max-w-4xl mx-auto">
              {SERVICE_PROCESS && SERVICE_PROCESS.length > 0 ? (
                SERVICE_PROCESS.map((step) => (
                  <li key={step.title} className="timeline-item" data-animate>
                    <div className="timeline-index">{step.step}</div>
                    <div className="timeline-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))
              ) : (
                <div className="text-center text-muted-foreground">
                  Loading process steps...
                </div>
              )}
            </ol>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 md:py-32" data-animate>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-[#1e293b] to-navy-deep" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(231,93,43,0.3),_transparent_70%)]" />
          <div className="container-responsive relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <span className="hero-eyebrow">Ready to Begin?</span>
                <h2 className="hero-title text-white">
                  Protect and Scale Your IP Portfolio
                </h2>
                <p className="hero-subtitle mx-auto">
                  Deploy a tailored IP roadmap that aligns filings with commercial goals and activates enforcement strategies safeguarding enterprise value.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                <Button asChild size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                >
                  <Link to="/our-story">Learn About Us</Link>
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

export default Services;
