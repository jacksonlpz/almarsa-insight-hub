import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { renderAlMarsaIcon } from "@/components/icons/al-marsa";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import useScrollReveal from "@/hooks/useScrollReveal";
import "@/styles/home.css";
import type { CountryDetailedGuide } from "@/data/insightsResources";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import {
  RESOURCE_METRICS,
  FEATURED_RESOURCES,
  ALL_INSIGHTS,
  LEARNING_MODULES,
  COUNTRY_GUIDES,
} from "@/data/insightsResources";
import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutCard } from "@/components/ui/AboutCard";

const InsightsForms = () => {
  const { t, language } = useLanguage();

  usePageSEO({
    title: "Insights Library & IP Forms",
    description: "Access Al Marsa's downloadable IP templates, jurisdictional guides, and market analysis modules for brand and patent teams.",
    keywords: [
      "IP insights",
      "trademark forms",
      "intellectual property resources"
    ],
    url: buildCanonicalUrl("/insights-forms"),
  });

  useScrollReveal();
  const [activeGuide, setActiveGuide] = useState<{
    country: string;
    guide: CountryDetailedGuide;
    type: "trademark" | "patent" | "design";
  } | null>(null);

  const guideTypeLabels = useMemo(
    () => ({
      trademark: language === "ar" ? "العلامات التجارية" : "Trademark",
      patent: language === "ar" ? "براءات الاختراع" : "Patent",
      design: language === "ar" ? "التصاميم الصناعية" : "Design",
    }),
    [language]
  );

  const allContent = useMemo(
    () => [...FEATURED_RESOURCES[language], ...ALL_INSIGHTS[language]],
    [language]
  );

  const filteredContent = allContent;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-[#1a2332] to-navy-light text-white" data-animate>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(231,93,43,0.08),_transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-14">
            <div className="mx-auto max-w-5xl space-y-6 text-center sm:space-y-7">
              {/* Hero Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-label-xs font-semibold uppercase tracking-widest text-white/90">{t('insights.hero.eyebrow')}</span>
                </div>
                <h1 className="hero-title text-white">
                  {t('insights.hero.title')}
                </h1>
                <p className="hero-subtitle mx-auto text-white/75">
                  {t('insights.hero.subtitle')}
                </p>
              </div>

              {/* Metrics Grid - Compact */}
              <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
                {RESOURCE_METRICS[language].map((metric) => (
                  <div
                    key={metric.label}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-base ease-emphasis hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-white/10">
                        {renderAlMarsaIcon(metric.icon, { className: "h-5 w-5" })}
                      </div>
                      <div className="text-left">
                        <div className="text-heading-lg font-semibold text-white lg:text-display-sm">{metric.value}</div>
                        <p className="text-label-xs font-semibold uppercase tracking-wide text-white/70 leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features List - Inline */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-center gap-2">
                  <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary" />
                  <span className="text-label-xs font-semibold uppercase tracking-wide text-primary">{t('insights.hero.quality.heading')}</span>
                  <div className="h-px w-6 bg-gradient-to-l from-transparent to-primary" />
                </div>
                <p className="mb-3 text-body-xs leading-relaxed text-white/75 md:text-body">
                  {t('insights.hero.quality.description')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <span>{t('insights.hero.quality.features.categorized')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <span>{t('insights.hero.quality.features.templates')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <span>{t('insights.hero.quality.features.routing')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 lg:py-24 texture-blueprint" data-animate>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="mb-8 md:mb-12 space-y-3 text-center mx-auto max-w-3xl">
              <div className="space-y-3">
                <span className="section-eyebrow">{t('insights.countryGuides.eyebrow')}</span>
                <h2 className="section-title">{t('insights.countryGuides.title')}</h2>
              </div>
              <p className="section-subtitle">
                {t('insights.countryGuides.description')}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {COUNTRY_GUIDES[language].map((guide) => (
                <Card
                  key={guide.country}
                  className="group overflow-hidden rounded-2xl border border-border bg-white shadow-lg transition-all duration-base ease-emphasis hover:-translate-y-1 hover:shadow-2xl"
                >
                  <CardContent className="flex flex-col gap-4 p-4">
                    <div className="space-y-3">
                      <Badge variant="outline" className="uppercase tracking-widest text-label-xs">
                        {t('insights.countryGuides.badge')}
                      </Badge>
                      <div className="space-y-2">
                        <h3 className="text-heading-sm font-semibold text-navy-deep leading-tight">{guide.country}</h3>
                        <p className="text-body-xs leading-relaxed text-muted-foreground line-clamp-3">{guide.summary}</p>
                      </div>
                    </div>
                    <div className="mt-auto space-y-1.5">
                      {guide.resources.map((resource) => {
                        const modalType = resource.type && guide[`${resource.type}Guide` as const];

                        if (modalType) {
                          return (
                            <Button
                              key={`${guide.country}-${resource.label}`}
                              variant="outline"
                              size="sm"
                              className="w-full justify-between rounded-full px-4 text-label-sm"
                              onClick={() => {
                                if (resource.type) {
                                  setActiveGuide({
                                    country: guide.country,
                                    guide: guide[`${resource.type}Guide` as const]!,
                                    type: resource.type,
                                  });
                                }
                              }}
                            >
                              <span className="truncate">{resource.label}</span>
                              <ArrowRight className="h-4 w-4 flex-shrink-0" />
                            </Button>
                          );
                        }

                        return (
                          <Button
                            key={`${guide.country}-${resource.label}`}
                            variant="outline"
                            size="sm"
                            className="w-full justify-between rounded-full px-3 py-2 text-xs h-auto"
                            asChild
                          >
                            <a href={resource.href} target="_blank" rel="noopener noreferrer">
                              <span className="truncate">{resource.label}</span>
                              <ArrowRight className="h-3 w-3 flex-shrink-0" />
                            </a>
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Dialog
          open={!!activeGuide}
          onOpenChange={(open) => {
            if (!open) {
              setActiveGuide(null);
            }
          }}
        >
          <DialogContent className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border-border bg-white p-0">
            {activeGuide && (
              <div className="flex h-full flex-col overflow-hidden">
                <div className="border-b border-border px-5 py-4">
                  <DialogHeader className="gap-2 text-left">
                    <DialogTitle>
                      {t('insights.countryGuides.dialog.titlePattern')
                        .replace('{country}', activeGuide.country)
                        .replace('{type}', guideTypeLabels[activeGuide.type])}
                    </DialogTitle>
                    <DialogDescription>
                      {t('insights.countryGuides.dialog.descriptionPattern')
                        .replace('{date}', activeGuide.guide.updated)
                        .replace('{country}', activeGuide.country)}
                    </DialogDescription>
                  </DialogHeader>
                </div>
                <ScrollArea className="flex-1 px-5 py-5">
                  <div className="space-y-4">
                    {activeGuide.guide.sections.map((section) => {
                      const isChecklistSection = section.heading.toLowerCase().includes('documentation checklist') || 
                                                section.heading.toLowerCase().includes('document checklist');
                      
                      // Check if this is a table-formatted section (contains pipe separators)
                      const isTableData = section.points.some(point => point.includes('|'));
                      
                      if (isChecklistSection && isTableData) {
                        // Parse table data
                        const rows = section.points.map(point => point.split('|').map(cell => cell.trim()));
                        const headers = rows[0];
                        const dataRows = rows.slice(1);
                        
                        return (
                          <div key={section.heading} className="space-y-3 rounded-2xl border border-muted-foreground/10 bg-muted/20 p-4 overflow-x-auto">
                            <p className="text-label-xs font-semibold uppercase tracking-widest text-primary/70">{section.heading}</p>
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse text-body-sm">
                                <thead>
                                  <tr className="border-b-2 border-primary/20">
                                    {headers.map((header, idx) => (
                                      <th key={idx} className="px-3 py-2 text-left font-semibold text-primary bg-primary/5">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {dataRows.map((row, rowIdx) => (
                                    <tr key={rowIdx} className="border-b border-muted-foreground/10 hover:bg-muted/30 transition-colors">
                                      {row.map((cell, cellIdx) => (
                                        <td key={cellIdx} className="px-3 py-2.5 text-muted-foreground">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        );
                      }
                      
                    return (
                      <div key={section.heading} className="space-y-3 rounded-2xl border border-muted-foreground/10 bg-muted/20 p-4">
                        <p className="text-label-xs font-semibold uppercase tracking-widest text-primary/70">{section.heading}</p>
                        <ul className="space-y-2 text-body leading-relaxed text-muted-foreground">
                            {section.points.map((point) => (
                              <li key={point} className="flex items-start gap-3">
                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
                {activeGuide.guide.downloadHref && (
                  <div className="border-t border-border bg-muted/30 px-5 py-4">
                    <Button
                      variant="outline"
                      className="w-full justify-center rounded-full"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = activeGuide.guide.downloadHref!;
                        link.download = `${activeGuide.country}-${activeGuide.type}-Guide-Checklist.pdf`;
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {t('insights.countryGuides.dialog.downloadButton')}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <SectionHeading
              eyebrow={t('insights.legislation.eyebrow')}
              title={t('insights.legislation.title')}
              subtitle={t('insights.legislation.description')}
              align="center"
              className="max-w-3xl"
            />
            {filteredContent.length === 0 ? (
              <div className="mt-12 text-center text-muted-foreground">
                {t('insights.legislation.noResults')}
              </div>
            ) : filteredContent && filteredContent.length > 0 ? (
              <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                {filteredContent.map((insight) => {
                  const handleDownload = () => {
                    if ('pdfUrl' in insight && insight.pdfUrl) {
                      const link = document.createElement('a');
                      link.href = insight.pdfUrl;
                      link.download = insight.title.replace(/\s+/g, '-').toLowerCase() + '.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }
                  };

                  const highlights = 'highlights' in insight ? insight.highlights : undefined;
                  const actionLabel = 'pdfUrl' in insight ? t('insights.legislation.openPdf') : t('insights.legislation.view');

                  return (
                    <AboutCard
                      key={insight.title}
                      badge={t('insights.legislation.badge')}
                      title={insight.title}
                      description={insight.description}
                      onClick={handleDownload}
                      className="cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
                    >
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            {renderAlMarsaIcon(insight.icon, { className: "h-7 w-7" })}
                          </div>
                          <span className="text-base font-semibold text-muted-foreground">{insight.topic}</span>
                        </div>

                        {highlights && highlights.length > 0 && (
                          <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                            {highlights.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}

                        <div className="flex items-center justify-between border-t border-border/50 pt-4 text-base text-muted-foreground">
                          <span className="font-semibold text-primary">{insight.type}</span>
                          <div className="flex items-center gap-2 text-primary">
                            <span className="hidden sm:inline">{actionLabel}</span>
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </AboutCard>
                  );
                })}
              </div>
            ) : (
              <div className="mt-12 text-center text-muted-foreground">
                {t('insights.legislation.loading')}
              </div>
            )}
          </div>
        </section>
        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <SectionHeading
              eyebrow={t('insights.learningModules.eyebrow')}
              title={t('insights.learningModules.title')}
              subtitle={t('insights.learningModules.description')}
              align="center"
              className="max-w-3xl"
            />
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {LEARNING_MODULES[language].map((module) => (
                <AboutCard
                  key={module.title}
                  badge={t('insights.learningModules.badge')}
                  title={module.title}
                  description={module.summary}
                >
                  <div className="space-y-6">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
                      <iframe
                        src={module.videoUrl}
                        title={module.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">
                          {t('insights.learningModules.howToPractice')}
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                          {module.howTo.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-base leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-primary">{t('insights.learningModules.didYouKnow')}</span>{' '}
                        {module.didYouKnow}
                      </div>
                    </div>
                  </div>
                </AboutCard>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" data-animate>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="cta-content">
              <div className="space-y-3">
                <span className="text-label-xs font-semibold uppercase tracking-widest text-white/60">{t('insights.finalCta.eyebrow')}</span>
                <h2 className="text-display-md font-heading font-semibold text-white sm:text-display-lg">
                  {t('insights.finalCta.title')}
                </h2>
                <p className="max-w-2xl text-body sm:text-body text-white/75">
                  {t('insights.finalCta.description')}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-navy-deep"
                >
                  <Link to="/news-events">{t('insights.finalCta.button')}</Link>
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

export default InsightsForms;
