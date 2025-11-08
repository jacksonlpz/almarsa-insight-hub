import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Info, FileText, Tag, Lightbulb } from "lucide-react";
import { renderAlMarsaIcon } from "@/components/icons/al-marsa";
import useScrollReveal from "@/hooks/useScrollReveal";
import "@/styles/home.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { QA, BH, SA, KW, AE, OM } from "country-flag-icons/react/3x2";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/i18n";

const CARD_TABS = [
  { id: "overview", labelKey: "overview", icon: Info },
  { id: "treaties", labelKey: "treaties", icon: FileText },
  { id: "trademarks", labelKey: "trademarks", icon: Tag },
  { id: "patents", labelKey: "patents", icon: Lightbulb }
] as const;

const TREATY_ITEMS = [
  { key: "madrid", labelKey: "madrid" },
  { key: "pct", labelKey: "pct" },
  { key: "paris", labelKey: "paris" },
  { key: "trips", labelKey: "trips" },
  { key: "gcc", labelKey: "gcc" }
] as const;

const TRADEMARK_ITEMS = [
  { key: "duration", labelKey: "duration" },
  { key: "renewable", labelKey: "renewable" },
  { key: "oppositionPeriod", labelKey: "oppositionPeriod" },
  { key: "classes", labelKey: "classes" }
] as const;

const PATENT_ITEMS = [
  { key: "duration", labelKey: "duration" },
  { key: "examination", labelKey: "examination" },
  { key: "pct", labelKey: "pct" },
  { key: "types", labelKey: "types" }
] as const;

const HIGHLIGHT_TREATIES = ["madrid", "pct", "gcc"] as const;

const COUNTRY_ORDER = [
  "qatar",
  "bahrain",
  "saudiArabia",
  "kuwait",
  "uae",
  "oman"
] as const;

const COUNTRY_FLAGS = {
  qatar: QA,
  bahrain: BH,
  saudiArabia: SA,
  kuwait: KW,
  uae: AE,
  oman: OM
} as const;

const GLOBAL_FRAMEWORK_ORDER = [
  "wipoSystems",
  "regionalOffices",
  "localIntelligence"
] as const;

const GLOBAL_FRAMEWORK_ICONS = {
  wipoSystems: "advantage-network",
  regionalOffices: "strategy",
  localIntelligence: "audit"
} as const;

const DELIVERY_STEP_ORDER = [
  "jurisdictionMapping",
  "localCounsel",
  "portfolioGovernance",
  "enforcementReadiness"
] as const;

const PILLAR_ORDER = [
  "coordinationHub",
  "reporting",
  "financialClarity"
] as const;

const PILLAR_ICONS = {
  coordinationHub: "advantage-governance",
  reporting: "advantage-insight",
  financialClarity: "defence"
} as const;

const Jurisdictions = () => {
  const { language, t } = useLanguage();
  const pageContent = translations[language].jurisdictions;

  usePageSEO({
    title: pageContent.seo.title,
    description: pageContent.seo.description,
    keywords: pageContent.seo.keywords,
    url: buildCanonicalUrl("/jurisdictions"),
  });

  const strategicRegions = pageContent.strategicRegions;
  const cardLabels = pageContent.cardLabels;
  const tabs = pageContent.tabs;
  const treatyLabels = pageContent.treatyLabels;
  const trademarkLabels = pageContent.trademarkLabels;
  const patentLabels = pageContent.patentLabels;
  const countries = COUNTRY_ORDER.map((key) => {
    const country = pageContent.countries[key];
    const FlagComponent = COUNTRY_FLAGS[key];
    return {
      name: country.name,
      flagTitle: country.flagTitle,
      Flag: FlagComponent,
      info: {
        capital: country.capital,
        ministry: country.ministry,
        website: country.website,
        description: country.description
      },
      treaties: country.treaties,
      trademarks: country.trademarks,
      patents: country.patents
    };
  });
  const globalFrameworks = GLOBAL_FRAMEWORK_ORDER.map((key) => ({
    ...pageContent.globalFrameworks.items[key],
    icon: GLOBAL_FRAMEWORK_ICONS[key]
  }));
  const deliverySteps = DELIVERY_STEP_ORDER.map((key) => pageContent.deliveryRhythm.steps[key]);
  const pillars = PILLAR_ORDER.map((key) => ({
    ...pageContent.programmeGovernance.pillars[key],
    icon: PILLAR_ICONS[key]
  }));

  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy-deep text-white" data-animate>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a202c] via-[#1e293b] to-[#0f172a]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,_rgba(231,93,43,0.2),_transparent_60%)]" />
          </div>
          <div className="container-responsive relative z-10 py-16 md:py-24 lg:py-28">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <span className="hero-eyebrow">{t('jurisdictions.hero.eyebrow')}</span>
                <h1 className="hero-title text-white mx-auto">
                  {t('jurisdictions.hero.title')}<br />{t('jurisdictions.hero.titleLine2')}
                </h1>
                <p className="hero-subtitle mx-auto">
                  {t('jurisdictions.hero.subtitle')}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/80 sm:gap-6 sm:text-sm md:gap-8 md:text-base">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-lg">{t('jurisdictions.hero.metrics.jurisdictions.metric')}</span>
                  <span>{t('jurisdictions.hero.metrics.jurisdictions.label')}</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-lg">{t('jurisdictions.hero.metrics.partnerships.metric')}</span>
                  <span>{t('jurisdictions.hero.metrics.partnerships.label')}</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-lg">{t('jurisdictions.hero.metrics.mandates.metric')}</span>
                  <span>{t('jurisdictions.hero.metrics.mandates.label')}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                <Button asChild size="lg">
                  <Link to="/contact" className="flex w-full items-center justify-center gap-2 sm:w-auto">
                    <span>{t('jurisdictions.hero.buttons.getInTouch')}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                >
                  <Link to="/services" className="flex w-full items-center justify-center sm:w-auto">
                    {t('jurisdictions.hero.buttons.ourServices')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white texture-blueprint" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{strategicRegions.eyebrow}</span>
              <h2 className="section-title mt-6">{strategicRegions.title}</h2>
              <p className="section-subtitle mt-6">{strategicRegions.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {countries.map((country) => (
                <Card
                  key={country.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="flex flex-col p-0">
                    {/* Header Section - Fixed Height */}
                    <div className="flex flex-col gap-3 bg-gradient-to-br from-[#101828] via-[#15203a] to-[#1f325a] p-3.5 text-white">
                      {/* Country Info Row - Fixed Height */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <country.Flag
                            className="h-9 w-auto flex-shrink-0 overflow-hidden rounded-lg shadow-lg ring-1 ring-white/40"
                            title={country.flagTitle || `${country.name} flag`}
                          />
                          <div className="space-y-0.5 min-w-0">
                            <h3 className="text-base font-semibold tracking-tight truncate">{country.name}</h3>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75 truncate">
                              {`${cardLabels.capitalPrefix} ${country.info.capital}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 rounded-lg border border-white/20 bg-white/12 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/85 max-w-[140px]">
                          <span className="block line-clamp-2 break-words leading-tight">{country.info.ministry}</span>
                        </div>
                      </div>
                      
                      {/* Description - Fixed Height */}
                      <div className="h-[60px] overflow-hidden">
                        <p className="text-xs leading-relaxed text-white/75 line-clamp-3">{country.info.description}</p>
                      </div>
                      
                      {/* Treaty Highlights - Fixed Height */}
                      <div className="grid grid-cols-3 gap-2">
                        {HIGHLIGHT_TREATIES.map((key) => {
                          const label = treatyLabels[key];
                          return (
                            <div
                              key={key}
                              className="flex flex-col gap-1.5 rounded-xl border border-white/15 bg-white/8 p-2.5 backdrop-blur"
                            >
                              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/70 leading-tight truncate">
                                {label}
                              </p>
                              <p className="text-xs font-semibold text-white leading-tight line-clamp-2">
                                {country.treaties[key]}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tabs Section - Flexible Height */}
                    <div className="flex flex-col gap-3 p-3.5 bg-white">
                      <Tabs defaultValue="overview" className="flex flex-col gap-2.5">
                        <TabsList className="grid w-full grid-cols-2 gap-3 rounded-2xl bg-gray-100/80 p-2 h-auto sm:grid-cols-4">
                          {CARD_TABS.map((tab) => {
                            return (
                              <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="flex h-9 w-full items-center justify-center gap-1 rounded-full border-2 border-gray-300/80 bg-white px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.06em] text-gray-700 shadow-sm transition-all hover:border-primary/60 hover:bg-primary/5 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                              >
                                <tab.icon className="h-2.5 w-2.5 flex-shrink-0" />
                                <span className="whitespace-nowrap leading-none">{tabs[tab.labelKey]}</span>
                              </TabsTrigger>
                            );
                          })}
                        </TabsList>

                        <TabsContent value="overview" className="mt-0 data-[state=inactive]:hidden">
                          <div className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 bg-gray-50 p-3 min-h-[200px]">
                            <div className="flex flex-col gap-2.5">
                              <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">{cardLabels.ministry}</p>
                                <p className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2">{country.info.ministry}</p>
                              </div>
                              <a
                                href={country.info.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors w-fit"
                              >
                                {cardLabels.officialWebsite}
                                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                              </a>
                            </div>
                            <p className="text-xs leading-relaxed text-gray-700 line-clamp-4">{country.info.description}</p>
                          </div>
                        </TabsContent>

                        <TabsContent value="treaties" className="mt-0 data-[state=inactive]:hidden">
                          <div className="grid grid-cols-2 gap-2 min-h-[200px] content-start">
                            {TREATY_ITEMS.map((item) => (
                              <div key={item.key} className="flex flex-col gap-1.5 rounded-2xl border border-gray-200 bg-white p-2.5 shadow-sm">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 leading-tight truncate">
                                  {treatyLabels[item.labelKey]}
                                </p>
                                <p className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2">
                                  {country.treaties[item.key]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="trademarks" className="mt-0 data-[state=inactive]:hidden">
                          <div className="grid grid-cols-2 gap-2 min-h-[200px] content-start">
                            {TRADEMARK_ITEMS.map((item) => (
                              <div key={item.key} className="flex flex-col gap-1.5 rounded-2xl border border-gray-200 bg-gray-50 p-2.5 shadow-sm">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 leading-tight truncate">
                                  {trademarkLabels[item.labelKey]}
                                </p>
                                <p className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2">
                                  {country.trademarks[item.key]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="patents" className="mt-0 data-[state=inactive]:hidden">
                          <div className="grid grid-cols-2 gap-2 min-h-[200px] content-start">
                            {PATENT_ITEMS.map((item) => (
                              <div key={item.key} className="flex flex-col gap-1.5 rounded-2xl border border-gray-200 bg-white p-2.5 shadow-sm">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 leading-tight truncate">
                                  {patentLabels[item.labelKey]}
                                </p>
                                <p className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2">
                                  {country.patents[item.key]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gray-warm" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{pageContent.globalFrameworks.eyebrow}</span>
              <h2 className="section-title text-navy-deep mt-6">{pageContent.globalFrameworks.title}</h2>
              <p className="section-subtitle mt-6">{pageContent.globalFrameworks.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              {globalFrameworks.map((framework) => (
                <Card
                  key={framework.title}
                  className="group rounded-2xl border border-border bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl"
                >
                  <CardContent className="space-y-5 p-6 sm:p-7 lg:p-8">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      {renderAlMarsaIcon(framework.icon, { className: "h-8 w-8 group-hover:text-white transition-colors", strokeWidth: 1.5 })}
                    </div>
                    <h3 className="text-lg font-semibold text-navy-deep">{framework.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{framework.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {framework.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold uppercase text-primary">
                            •
                          </span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{pageContent.deliveryRhythm.eyebrow}</span>
              <h2 className="section-title mt-6">{pageContent.deliveryRhythm.title}</h2>
              <p className="section-subtitle mt-6">{pageContent.deliveryRhythm.subtitle}</p>
            </div>
            <ol className="timeline max-w-4xl mx-auto">
              {deliverySteps.map((step, index) => (
                <li key={step.title} className="timeline-item">
                  <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-spacing bg-gray-warm" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">{pageContent.programmeGovernance.eyebrow}</span>
              <h2 className="section-title mt-6">{pageContent.programmeGovernance.title}</h2>
              <p className="section-subtitle mt-6">{pageContent.programmeGovernance.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="text-center space-y-4 sm:space-y-5 p-6 sm:p-8 group" data-animate>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    {renderAlMarsaIcon(pillar.icon, { className: "h-9 w-9 group-hover:text-white transition-colors", strokeWidth: 1.5 })}
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" data-animate>
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
            <div className="cta-content">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{pageContent.ctaBand.eyebrow}</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  {pageContent.ctaBand.title}
                </h2>
                <p className="max-w-2xl text-sm text-white/75 sm:text-base">
                  {pageContent.ctaBand.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
                <Button asChild size="lg" className="w-full bg-white text-navy-deep hover:bg-white/90 sm:w-auto">
                  <Link to="/contact">{pageContent.ctaBand.buttons.startMandate}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-white bg-white/10 text-white hover:bg-white hover:text-navy-deep sm:w-auto"
                >
                  <Link to="/our-story">{pageContent.ctaBand.buttons.seeHowWeOperate}</Link>
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

export default Jurisdictions;
