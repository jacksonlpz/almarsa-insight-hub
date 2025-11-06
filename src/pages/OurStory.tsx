import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const OurStory = () => {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  usePageSEO({
    title: t('ourStory.hero.title'),
    description: t('ourStory.hero.subtitle'),
    keywords: ["Al Marsa IP story", "IP leadership Kuwait", "GCC intellectual property team"],
    url: buildCanonicalUrl("/our-story"),
  });

  useScrollReveal();

  // Get milestone data from translations
  const milestones = [
    {
      year: t('ourStory.journey.milestones.2004.year'),
      title: t('ourStory.journey.milestones.2004.title'),
      description: t('ourStory.journey.milestones.2004.description')
    },
    {
      year: t('ourStory.journey.milestones.2010.year'),
      title: t('ourStory.journey.milestones.2010.title'),
      description: t('ourStory.journey.milestones.2010.description')
    },
    {
      year: t('ourStory.journey.milestones.2015.year'),
      title: t('ourStory.journey.milestones.2015.title'),
      description: t('ourStory.journey.milestones.2015.description')
    },
    {
      year: t('ourStory.journey.milestones.2020.year'),
      title: t('ourStory.journey.milestones.2020.title'),
      description: t('ourStory.journey.milestones.2020.description')
    },
    {
      year: t('ourStory.journey.milestones.2024.year'),
      title: t('ourStory.journey.milestones.2024.title'),
      description: t('ourStory.journey.milestones.2024.description')
    }
  ];

  // Get core values from translations
  const coreValues = [
    {
      icon: "trademark" as const,
      title: t('ourStory.principles.values.integrity.title'),
      description: t('ourStory.principles.values.integrity.description')
    },
    {
      icon: "advantage-network" as const,
      title: t('ourStory.principles.values.clientFocus.title'),
      description: t('ourStory.principles.values.clientFocus.description')
    },
    {
      icon: "advantage-governance" as const,
      title: t('ourStory.principles.values.globalOutlook.title'),
      description: t('ourStory.principles.values.globalOutlook.description')
    },
    {
      icon: "creative" as const,
      title: t('ourStory.principles.values.innovation.title'),
      description: t('ourStory.principles.values.innovation.description')
    }
  ];

  // Get insights from translations
  const insights = [
    {
      metric: t('ourStory.trust.insights.experience.metric'),
      label: t('ourStory.trust.insights.experience.label')
    },
    {
      metric: t('ourStory.trust.insights.jurisdictions.metric'),
      label: t('ourStory.trust.insights.jurisdictions.label')
    },
    {
      metric: t('ourStory.trust.insights.retention.metric'),
      label: t('ourStory.trust.insights.retention.label')
    }
  ];

  // Get team members from translations
  const teamMembers = [
    {
      name: t('ourStory.leadership.team.hassan.name'),
      role: t('ourStory.leadership.team.hassan.role'),
      bio: t('ourStory.leadership.team.hassan.bio'),
      location: t('ourStory.leadership.team.hassan.location'),
      image: "/men.jpg"
    },
    {
      name: t('ourStory.leadership.team.noor.name'),
      role: t('ourStory.leadership.team.noor.role'),
      bio: t('ourStory.leadership.team.noor.bio'),
      location: t('ourStory.leadership.team.noor.location'),
      image: "/women.png"
    },
    {
      name: t('ourStory.leadership.team.omar.name'),
      role: t('ourStory.leadership.team.omar.role'),
      bio: t('ourStory.leadership.team.omar.bio'),
      location: t('ourStory.leadership.team.omar.location'),
      image: "/men.jpg"
    }
  ];

  return (
    <div className={cn("min-h-screen bg-background text-foreground", isRTL && "dir-rtl")}>
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-[#1a2332] to-navy-light text-white" data-animate>
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,_rgba(231,93,43,0.15),_transparent_50%)]" />
          <div className="container-responsive relative z-10 py-12 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8 text-center">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 backdrop-blur-sm">
                    <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                    <span className="text-label-xs font-semibold uppercase tracking-widest text-white/90">
                      {t('ourStory.hero.badge')}
                    </span>
                  </div>
                  <h1 className="hero-title text-white">
                    {t('ourStory.hero.title')}
                  </h1>
                  <p className="hero-subtitle mx-auto text-white/80">
                    {t('ourStory.hero.subtitle')}
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid gap-4 pt-4 md:grid-cols-3">
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-base ease-emphasis hover:border-white/20 hover:bg-white/10">
                    <div className="space-y-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        {renderAlMarsaIcon("advantage-network", { className: "h-5 w-5" })}
                      </div>
                      <h3 className="text-heading-sm font-semibold text-white">
                        {t('ourStory.hero.features.leadership.title')}
                      </h3>
                      <p className="text-body-xs leading-relaxed text-white/70">
                        {t('ourStory.hero.features.leadership.description')}
                      </p>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-base ease-emphasis hover:border-white/20 hover:bg-white/10">
                    <div className="space-y-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        {renderAlMarsaIcon("strategy", { className: "h-5 w-5" })}
                      </div>
                      <h3 className="text-heading-sm font-semibold text-white">
                        {t('ourStory.hero.features.strategy.title')}
                      </h3>
                      <p className="text-body-xs leading-relaxed text-white/70">
                        {t('ourStory.hero.features.strategy.description')}
                      </p>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                    <div className="space-y-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        {renderAlMarsaIcon("advantage-governance", { className: "h-5 w-5" })}
                      </div>
                      <h3 className="text-sm font-semibold text-white">
                        {t('ourStory.hero.features.reporting.title')}
                      </h3>
                      <p className="text-xs leading-relaxed text-white/70">
                        {t('ourStory.hero.features.reporting.description')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-2">
                  <Button asChild size="default" className="bg-white text-navy-deep hover:bg-white/90 h-10">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>{t('ourStory.hero.cta.contact')}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="default" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 h-10">
                    <Link to="/services">{t('ourStory.hero.cta.services')}</Link>
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
              <span className="section-eyebrow">{t('ourStory.trust.eyebrow')}</span>
              <h2 className="section-title mt-6">{t('ourStory.trust.title')}</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 max-w-4xl mx-auto">
              {insights.map((insight) => (
                <div key={insight.label} className="insight-metric">
                  <span>{insight.metric}</span>
                  <p>{insight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('ourStory.foundation.eyebrow')}</span>
              <h2 className="section-title mt-6">{t('ourStory.foundation.title')}</h2>
              <p className="section-subtitle mt-6">
                {t('ourStory.foundation.subtitle')}
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              <div className="space-y-8 p-12 rounded-3xl bg-white shadow-lg">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                    {t('ourStory.foundation.vision.badge')}
                  </div>
                  <h3 className="text-3xl font-bold text-navy-deep">
                    {t('ourStory.foundation.vision.title')}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t('ourStory.foundation.vision.description')}
                </p>
              </div>
              <div className="space-y-8 p-12 rounded-3xl bg-white shadow-lg">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                    {t('ourStory.foundation.commitment.badge')}
                  </div>
                  <h3 className="text-3xl font-bold text-navy-deep">
                    {t('ourStory.foundation.commitment.title')}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t('ourStory.foundation.commitment.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey/Milestones Section */}
        <section className="section-spacing bg-gradient-to-b from-white to-gray-50" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('ourStory.journey.eyebrow')}</span>
              <h2 className="section-title mt-6">{t('ourStory.journey.title')}</h2>
              <p className="section-subtitle mt-6">
                {t('ourStory.journey.subtitle')}
              </p>
            </div>
            <ol className="timeline max-w-4xl mx-auto">
              {milestones.map((milestone) => (
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

        {/* Core Values Section */}
        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('ourStory.principles.eyebrow')}</span>
              <h2 className="section-title mt-6">{t('ourStory.principles.title')}</h2>
              <p className="section-subtitle mt-6">
                {t('ourStory.principles.subtitle')}
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
              {coreValues.map((value, index) => (
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

        {/* Leadership Team Section */}
        <section className="section-spacing bg-gradient-to-b from-gray-50 to-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{t('ourStory.leadership.eyebrow')}</span>
              <h2 className="section-title mt-6 text-navy-deep">{t('ourStory.leadership.title')}</h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
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
                      <MapPin className="h-4 w-4" /> {member.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative overflow-hidden py-32" data-animate>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-[#1e293b] to-navy-deep" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(231,93,43,0.3),_transparent_70%)]" />
          <div className="container-responsive relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <span className="hero-eyebrow">{t('ourStory.finalCta.eyebrow')}</span>
                <h2 className="hero-title text-white">
                  {t('ourStory.finalCta.title')}
                </h2>
                <p className="hero-subtitle max-w-3xl mx-auto">
                  {t('ourStory.finalCta.subtitle')}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                <Button asChild size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>{t('ourStory.finalCta.cta.consultation')}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                >
                  <Link to="/services">{t('ourStory.finalCta.cta.services')}</Link>
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
