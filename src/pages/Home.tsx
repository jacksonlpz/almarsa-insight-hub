import { useMemo } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageOptimized from "@/components/ImageOptimized";
import CountUp from "@/components/CountUp";
import heroImage from "@/assets/hero-bg.jpg";
import { renderAlMarsaIcon } from "@/components/icons/al-marsa";
import { features as homeFeatures, services as homeServices, stats as homeStats } from "@/data/homeData";
import useScrollReveal from "@/hooks/useScrollReveal";
import "@/styles/home.css";
import { usePageSEO } from "@/hooks/usePageSEO";
import { useLanguage } from "@/hooks/useLanguage";
import { APP_CONFIG, COMPANY_INFO } from "@/lib/constants";
import { buildCanonicalUrl } from "@/lib/seo";
const TIMELINE_PHASES = [
  {
    title: "Consultation & IP audit",
    description: "Immersion sessions to surface current assets, exposure points, and the jurisdictions that require immediate mobilisation.",
    icon: "audit" as const,
  },
  {
    title: "Strategy architecture",
    description: "Scenario planning, filing roadmaps, and budget modelling that translate commercial goals into actionable programmes.",
    icon: "strategy" as const,
  },
  {
    title: "Execution & monitoring",
    description: "Coordinated filings, renewals, and ongoing watch services documented through decision-grade dashboards.",
    icon: "execution" as const,
  },
  {
    title: "Enforcement & defence",
    description: "Litigation support, oppositions, and negotiated settlements that protect enterprise value at pace.",
    icon: "defence" as const,
  },
];
const TESTIMONIALS = [
  {
    quote:
      "AL Marsa’s programme management is meticulous. Every filing decision arrives with clear exposure analysis and governance-ready documentation.",
    name: "Group General Counsel",
    firm: "Regional Food & Beverage Conglomerate",
  },
  {
    quote:
      "Our expansion into new jurisdictions would not have met board timelines without their structured roadmap and associate coordination.",
    name: "Managing Director",
    firm: "Technology Holdings Company",
  },
];

const Home = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  useScrollReveal();
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: APP_CONFIG.siteUrl,
    logo: `${APP_CONFIG.siteUrl}/logo.svg`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.building}, ${COMPANY_INFO.address.floor}`,
      addressLocality: COMPANY_INFO.address.area,
      addressCountry: COMPANY_INFO.address.country
    },
    areaServed: ["Gulf Cooperation Council", "Middle East", "MENA"],
    sameAs: Object.values(COMPANY_INFO.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: COMPANY_INFO.email,
        telephone: COMPANY_INFO.phone,
        availableLanguage: ["English", "Arabic"]
      }
    ]
  }), []);

  const seoConfig = useMemo(() => ({
    title: "Intellectual Property Protection Across 150+ Jurisdictions",
    description:
      "Al Marsa Intellectual Property Agents deliver Kuwait-based IP counsel, strategic enforcement, and portfolio governance across the GCC and wider MENA region.",
    keywords: [
      "intellectual property agents",
      "trademark registration Kuwait",
      "GCC IP enforcement",
      "brand protection services",
      "Middle East patent filing"
    ],
    image: `${APP_CONFIG.siteUrl}/logo.svg`,
    url: buildCanonicalUrl("/"),
    structuredData,
  }), [structuredData]);

  usePageSEO(seoConfig);

  return (
    <div className={cn("min-h-screen bg-background text-foreground", isRTL && "dir-rtl")}> 
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy-deep text-white" data-animate>
          <div className="absolute inset-0">
            <ImageOptimized
              src={heroImage}
              alt="Professional IP Services"
              className="h-full w-full object-cover opacity-60"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy-deep/95 to-black/70" />

          <div className="container-responsive relative z-10 py-20 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8 max-w-2xl">
                <div className="space-y-6">
                  <span className="hero-eyebrow">{t('hero.title')}</span>
                  <h1 className="hero-title text-white">
                    {t('hero.subtitle')}
                  </h1>
                  <p className="hero-subtitle text-white/80">
                    {t('intro.statement')}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="group">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>{t('hero.cta.consultation')}</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    <Link to="/services">{t('nav.services')}</Link>
                  </Button>
                </div>
              </div>

              <Card className="bg-white/12 backdrop-blur-md border-white/10 text-left shadow-xl">
                <CardContent className="space-y-6 p-8 lg:p-10">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                    <Award className="h-4 w-4" />
                    Trusted Partner
                  </div>
                  <p className="text-base leading-relaxed text-white/80">
                    “Clients rely on us for responsive counsel, clear filing pathways, and measured defence strategies that stand up in every jurisdiction.”
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Dedicated regional experts",
                        description: "Direct access to partners across MENA, Europe, and key global IP offices.",
                        icon: "advantage-network",
                      },
                      {
                        label: "ISO-aligned quality management",
                        description: "Cross-functional reviews keep filings, renewals, and enforcement audit-ready.",
                        icon: "advantage-governance",
                      },
                      {
                        label: "Decision-grade reporting",
                        description: "Dashboards summarise exposure, deadlines, and next actions in real time.",
                        icon: "strategy",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4 rounded-xl bg-white/5 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                          {renderAlMarsaIcon(item.icon, { className: "h-6 w-6" })}
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-white">{item.label}</p>
                          <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust & Credibility Section */}
        <section className="section-spacing bg-gradient-to-b from-white via-gray-50 to-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('trust.title')}</span>
              <h2 className="section-title mt-6">{t('trust.subtitle')}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {homeStats && homeStats.length > 0 ? (
                homeStats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-primary/30"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 text-center">
                      <CountUp
                        end={stat.number}
                        duration={2000}
                        className="text-5xl font-bold text-navy-deep mb-3 transition-transform duration-500 group-hover:scale-110 inline-block"
                      />
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-500 group-hover:text-primary">{stat.label}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-muted-foreground">
                  Loading statistics...
                </div>
              )}
            </div>
          </div>
        </section>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <section className="section-spacing bg-white texture-blueprint" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('services.sectionTitle')}</span>
              <h2 className="section-title mt-6">{t('services.mainTitle')}</h2>
              <p className="section-subtitle mt-6">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {homeServices && homeServices.length > 0 ? (
                homeServices.map((service, index) => (
                  <Card key={index} className="service-card group h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:scale-110 flex-shrink-0">
                        {renderAlMarsaIcon(service.icon, { className: "h-8 w-8 group-hover:text-white transition-colors", strokeWidth: 1.5 })}
                      </div>
                      <div className="flex-grow mt-6 space-y-4">
                        <h3 className="text-xl font-bold text-navy-deep leading-tight">{service.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="mt-6 flex-shrink-0">
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                        >
                          Explore our IP services
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center text-muted-foreground">
                  Loading services...
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gray-warm" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('advantages.sectionTitle')}</span>
              <h2 className="section-title mt-6">{t('advantages.mainTitle')}</h2>
              <p className="section-subtitle mt-6">
                {t('advantages.subtitle')}
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
              {homeFeatures && homeFeatures.length > 0 ? (
                homeFeatures.slice(0, 3).map((feature) => (
                  <div key={feature.label} className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 transition-all duration-300 hover:bg-primary hover:scale-110 group">
                      {renderAlMarsaIcon(feature.icon, { className: "h-10 w-10 text-primary group-hover:text-white transition-colors", strokeWidth: 1.5 })}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-deep">{feature.label}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-muted-foreground">
                  Loading features...
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('process.sectionTitle')}</span>
              <h2 className="section-title mt-6">{t('process.title')}</h2>
              <p className="section-subtitle mt-6">
                {t('process.subtitle')}
              </p>
            </div>
            <ol className="timeline max-w-4xl mx-auto">
              {TIMELINE_PHASES.map((phase, index) => (
                <li key={phase.title} className="timeline-item" data-animate>
                  <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="timeline-content">
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="text-center mt-16">
              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center gap-2">
                  {t('process.discuss')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="cta-band" data-animate>
          <div className="container-responsive relative z-10">
            <div className="cta-content">
              <div className="space-y-3">
                <span className="section-eyebrow text-white/70">{t('cta.ready')}</span>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">{t('cta.build')}</h2>
                <p className="text-white/80">
                  {t('cta.description')}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-white text-navy-deep hover:bg-white/90">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>{t('cta.kickoff')}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/10 text-white hover:bg-white hover:text-navy-deep"
                >
                  <Link to="/contact">{t('cta.proposalDeck')}</Link>
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

export default Home;
