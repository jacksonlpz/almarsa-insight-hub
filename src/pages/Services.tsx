import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AboutCard } from "@/components/ui/AboutCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { renderAlMarsaIcon } from "@/components/icons/al-marsa";
import { getServiceIntro, getServicePillars, getServiceProcess } from "@/data/servicesData";
import useScrollReveal from "@/hooks/useScrollReveal";
import "@/styles/home.css";
import "@/styles/accessibility.css";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const Services = () => {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  usePageSEO({
    title: t('servicesPage.hero.title') + ' ' + t('servicesPage.hero.titleLine2'),
    description: t('servicesPage.hero.subtitle'),
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

  // Get service metrics from translations
  const serviceMetrics = [
    {
      metric: t('servicesPage.hero.metrics.response.metric'),
      label: t('servicesPage.hero.metrics.response.label')
    },
    {
      metric: t('servicesPage.hero.metrics.jurisdictions.metric'),
      label: t('servicesPage.hero.metrics.jurisdictions.label')
    },
    {
      metric: t('servicesPage.hero.metrics.retention.metric'),
      label: t('servicesPage.hero.metrics.retention.label')
    }
  ];

  // Get dynamic data using translations
  const SERVICE_INTRO = getServiceIntro(t);
  const SERVICE_PILLARS = getServicePillars(t);
  const SERVICE_PROCESS = getServiceProcess(t);

  return (
    <div className={cn("min-h-screen bg-background text-foreground", isRTL && "dir-rtl")}>
      <a href="#main-content" className="skip-link">{t('servicesPage.skipLink')}</a>
      <Header />
      <main role="main" id="main-content">
        {/* Hero Section */}
        <section aria-label="Services Overview" className="relative overflow-hidden bg-navy-deep text-white" data-animate>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a202c] via-[#1e293b] to-[#0f172a]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,_rgba(231,93,43,0.2),_transparent_60%)]" />
          </div>
          <div className="container-responsive relative z-10 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <span className="hero-eyebrow">{t('servicesPage.hero.eyebrow')}</span>
                <h1 className="hero-title text-white mx-auto">
                  {t('servicesPage.hero.title')}<br />{t('servicesPage.hero.titleLine2')}
                </h1>
                <p className="hero-subtitle mx-auto">
                  {t('servicesPage.hero.subtitle')}
                </p>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm text-white/80 flex-wrap">
                {serviceMetrics.map((metric, index) => (
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
                    <span>{t('servicesPage.hero.cta.getStarted')}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                >
                  <Link to="/jurisdictions">{t('servicesPage.hero.cta.viewCoverage')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Pillars Section */}
        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <SectionHeading
              eyebrow={t('servicesPage.pillars.eyebrow')}
              title={t('servicesPage.pillars.title')}
              subtitle={SERVICE_INTRO}
              align="center"
              className="max-w-3xl"
            />
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {SERVICE_PILLARS && SERVICE_PILLARS.length > 0 ? (
                SERVICE_PILLARS.map((pillar) => {
                  const slug = pillar.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

                  return (
                    <AboutCard
                      key={pillar.title}
                      id={slug}
                      badge={t('servicesPage.pillars.badge')}
                      title={pillar.title}
                      description={pillar.tagline}
                    >
                      <div className="space-y-6">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          {renderAlMarsaIcon(pillar.icon, { className: "h-8 w-8", strokeWidth: 1.5 })}
                        </div>
                        <ul className="space-y-3 text-base text-muted-foreground">
                          {pillar.services.map((service) => (
                            <li key={service} className="flex items-start gap-3">
                              <Check className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-base font-semibold text-primary">
                          {t('servicesPage.pillars.whyItMattersLabel')}{' '}
                          <span className="font-normal text-muted-foreground">{pillar.whyItMatters}</span>
                        </p>
                      </div>
                    </AboutCard>
                  );
                })
              ) : (
                <div className="col-span-full text-center text-muted-foreground">
                  {t('servicesPage.pillars.loadingMessage')}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('servicesPage.process.eyebrow')}</span>
              <h2 className="section-title mt-6">{t('servicesPage.process.title')}</h2>
              <p className="section-subtitle mt-6">
                {t('servicesPage.process.subtitle')}
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
                  {t('servicesPage.process.loadingMessage')}
                </div>
              )}
            </ol>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative overflow-hidden py-24 md:py-32" data-animate>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-[#1e293b] to-navy-deep" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(231,93,43,0.3),_transparent_70%)]" />
          <div className="container-responsive relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <span className="hero-eyebrow">{t('servicesPage.finalCta.eyebrow')}</span>
                <h2 className="hero-title text-white">
                  {t('servicesPage.finalCta.title')}
                </h2>
                <p className="hero-subtitle mx-auto">
                  {t('servicesPage.finalCta.subtitle')}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                <Button asChild size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>{t('servicesPage.finalCta.cta.getStarted')}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                >
                  <Link to="/our-story">{t('servicesPage.finalCta.cta.learnAboutUs')}</Link>
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
