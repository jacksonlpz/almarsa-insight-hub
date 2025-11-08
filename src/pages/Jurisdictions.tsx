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

const JURISDICTION_METRICS = [
  {
    metric: "150+",
    label: "Jurisdictions coordinated"
  },
  {
    metric: "60+",
    label: "Local counsel partnerships"
  },
  {
    metric: "2000+",
    label: "Cross-border mandates delivered"
  }
];

const GCC_COUNTRIES = [
  {
    name: "Qatar",
    Flag: QA,
    info: {
      capital: "Doha",
      ministry: "Ministry of Commerce and Industry (MOCI)",
      website: "https://www.moci.gov.qa/en/",
      description: "Qatar offers a robust IP framework with recent accession to the Madrid Protocol, enabling streamlined international trademark protection."
    },
    treaties: {
      madrid: "Yes (Joined May 3, 2024)",
      pct: "Yes",
      paris: "Yes",
      trips: "Yes (WTO Member)",
      gcc: "Yes"
    },
    trademarks: {
      duration: "10 years",
      renewable: "Yes (10-year periods)",
      oppositionPeriod: "60 days from publication",
      classes: "Nice Classification"
    },
    patents: {
      duration: "20 years from filing",
      examination: "Substantive examination",
      pct: "Available",
      types: "Invention patents"
    },
    designs: {
      duration: "10 years",
      renewable: "Yes (up to 25 years total)",
      protection: "Industrial designs",
      novelty: "Required"
    }
  },
  {
    name: "Bahrain",
    Flag: BH,
    info: {
      capital: "Manama",
      ministry: "Ministry of Industry and Commerce (MOIC)",
      website: "https://www.moic.gov.bh/en",
      description: "Bahrain maintains a progressive IP regime with regular gazette publications and efficient trademark registration processes."
    },
    treaties: {
      madrid: "No",
      pct: "Yes",
      paris: "Yes",
      trips: "Yes (WTO Member)",
      gcc: "Yes"
    },
    trademarks: {
      duration: "10 years",
      renewable: "Yes (10-year periods)",
      oppositionPeriod: "60 days from publication",
      classes: "Nice Classification"
    },
    patents: {
      duration: "20 years from filing",
      examination: "Substantive examination",
      pct: "Available",
      types: "Invention patents"
    },
    designs: {
      duration: "10 years",
      renewable: "Yes (up to 25 years total)",
      protection: "Industrial designs",
      novelty: "Required"
    }
  },
  {
    name: "Saudi Arabia",
    Flag: SA,
    info: {
      capital: "Riyadh",
      ministry: "Saudi Authority for Intellectual Property (SAIP)",
      website: "https://www.saip.gov.sa/en/",
      description: "As part of Vision 2030, Saudi Arabia has significantly modernized its IP framework with comprehensive protection mechanisms."
    },
    treaties: {
      madrid: "Yes",
      pct: "Yes",
      paris: "Yes",
      trips: "Yes (WTO Member)",
      gcc: "Yes"
    },
    trademarks: {
      duration: "10 years",
      renewable: "Yes (10-year periods)",
      oppositionPeriod: "90 days from publication",
      classes: "Nice Classification"
    },
    patents: {
      duration: "20 years from filing",
      examination: "Substantive examination",
      pct: "Available",
      types: "Invention patents, Utility models"
    },
    designs: {
      duration: "10 years",
      renewable: "Yes (up to 25 years total)",
      protection: "Industrial designs",
      novelty: "Required"
    }
  },
  {
    name: "Kuwait",
    Flag: KW,
    info: {
      capital: "Kuwait City",
      ministry: "Ministry of Commerce and Industry (MOCI)",
      website: "https://www.moci.gov.kw/en/",
      description: "Kuwait provides comprehensive IP protection with strong enforcement mechanisms and recent modernization of IP regulations."
    },
    treaties: {
      madrid: "No",
      pct: "Yes (Joined 2016)",
      paris: "Yes",
      trips: "Yes (WTO Member)",
      gcc: "Yes (Adopted 2015)"
    },
    trademarks: {
      duration: "10 years",
      renewable: "Yes (10-year periods)",
      oppositionPeriod: "60 days from publication",
      classes: "Nice Classification"
    },
    patents: {
      duration: "20 years from filing",
      examination: "Substantive examination",
      pct: "Available",
      types: "Invention patents"
    },
    designs: {
      duration: "10 years",
      renewable: "Yes (5-year extension)",
      protection: "Industrial designs",
      novelty: "Required"
    }
  },
  {
    name: "UAE",
    Flag: AE,
    info: {
      capital: "Abu Dhabi",
      ministry: "Ministry of Economy and Tourism",
      website: "https://www.moet.gov.ae/en/home",
      description: "The UAE leads the region in IP innovation with accelerated patent programs, digital services, and strategic international partnerships."
    },
    treaties: {
      madrid: "Yes",
      pct: "Yes",
      paris: "Yes",
      trips: "Yes (WTO Member)",
      gcc: "Yes"
    },
    trademarks: {
      duration: "10 years",
      renewable: "Yes (10-year periods)",
      oppositionPeriod: "30 days from publication",
      classes: "Nice Classification"
    },
    patents: {
      duration: "20 years from filing",
      examination: "Substantive examination",
      pct: "Available",
      types: "Invention patents, Utility models"
    },
    designs: {
      duration: "10 years",
      renewable: "Yes (up to 25 years total)",
      protection: "Industrial designs",
      novelty: "Required"
    }
  },
  {
    name: "Oman",
    Flag: OM,
    info: {
      capital: "Muscat",
      ministry: "Ministry of Commerce, Industry & Investment Promotion (MOCIIP)",
      website: "https://tejarah.gov.om/en",
      description: "Oman has digitized its IP services platform with significant investment in modernizing trademark and patent registration processes."
    },
    treaties: {
      madrid: "No",
      pct: "Yes",
      paris: "Yes",
      trips: "Yes (WTO Member)",
      gcc: "Yes"
    },
    trademarks: {
      duration: "10 years",
      renewable: "Yes (10-year periods)",
      oppositionPeriod: "60 days from publication",
      classes: "Nice Classification"
    },
    patents: {
      duration: "20 years from filing",
      examination: "Substantive examination",
      pct: "Available",
      types: "Invention patents"
    },
    designs: {
      duration: "10 years",
      renewable: "Yes (up to 25 years total)",
      protection: "Industrial designs",
      novelty: "Required"
    },
    guide: {
      filingSystem: "Anteriority examination system (form and substance)",
      classification: "Nice Classification - one application per class",
      effectiveDate: "GCC Trademark Law adopted August 10, 2023",
      restrictions: "Class 33 and alcoholic drinks in Class 32 NOT registrable",
      process: [
        "Application filed & examined",
        "Accepted applications published in Official Gazette",
        "Opposition period: 2 months from publication",
        "Opposition venue: Civil court (if not settled by Registrar)",
        "Certificate issued if no opposition"
      ],
      validity: "10 years from filing date",
      renewal: "During last 12 months of protection period",
      gracePeriod: "6 months for late renewal with additional fees",
      keyPoints: [
        "Cancellation vulnerability: 5 consecutive years of non-use (with 1-month notice)",
        "Member of: Paris Convention, PCT, Budapest Treaty, Berne Convention, WIPO Convention, WIPO Copyright Treaty"
      ]
    }
  }
];

const GLOBAL_FRAMEWORKS = [
  {
    icon: "advantage-network" as const,
    title: "WIPO systems",
    description: "Central management of Madrid and PCT portfolios with proactive renewal and opposition oversight.",
    highlights: [
      "Madrid System filings and designations",
      "PCT national phase coordination",
      "TRIPS-aligned advisory",
      "Global watch and enforcement"
    ]
  },
  {
    icon: "strategy" as const,
    title: "Regional offices",
    description: "Direct representation at GCC Patent Office, ARIPO, and OAPI with harmonised evidence preparation.",
    highlights: [
      "Unified document legalisation",
      "Customs recordals",
      "Renewal harmonisation",
      "Intermediary payment management"
    ]
  },
  {
    icon: "audit" as const,
    title: "Local intelligence",
    description: "On-the-ground partners deliver language-specific advice and real-time updates on regulatory shifts.",
    highlights: [
      "Bespoke translation services",
      "Market surveillance",
      "Evidence gathering",
      "Regulatory monitoring"
    ]
  }
];

const DELIVERY_STEPS = [
  {
    title: "Jurisdiction mapping",
    description: "Identify filing pathways, evidentiary requirements, and budget envelopes for each target market."
  },
  {
    title: "Local counsel orchestration",
    description: "Mobilise vetted partners, align documentation, and manage legalisation and translation workflows."
  },
  {
    title: "Portfolio governance",
    description: "Centralised tracking covering renewals, oppositions, and prosecution milestones with executive reporting."
  },
  {
    title: "Enforcement readiness",
    description: "Deploy customs recordals, watch notices, and dispute response playbooks to protect market position."
  }
];

const OPERATING_PILLARS = [
  {
    title: "Single coordination hub",
    description: "A dedicated programme director orchestrates every jurisdiction and escalation.",
    icon: "advantage-governance" as const,
  },
  {
    title: "Reporting built for boards",
    description: "Custom dashboards and quarterly reviews aligned to governance requirements.",
    icon: "advantage-insight" as const,
  },
  {
    title: "Financial clarity",
    description: "Pre-approved fee schedules and transparent spend tracking across counsel and filings.",
    icon: "defence" as const,
  },
];

const CARD_TABS = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "treaties", label: "Treaties", icon: FileText },
  { id: "trademarks", label: "Trademarks", icon: Tag },
  { id: "patents", label: "Patents", icon: Lightbulb }
] as const;

const TREATY_ITEMS = [
  { key: "madrid", label: "Madrid Protocol" },
  { key: "pct", label: "PCT" },
  { key: "paris", label: "Paris Convention" },
  { key: "trips", label: "TRIPS" },
  { key: "gcc", label: "GCC Trademark Law" }
] as const;

const TRADEMARK_ITEMS = [
  { key: "duration", label: "Protection Duration" },
  { key: "renewable", label: "Renewable" },
  { key: "oppositionPeriod", label: "Opposition Period" },
  { key: "classes", label: "Classification" }
] as const;

const PATENT_ITEMS = [
  { key: "duration", label: "Protection Duration" },
  { key: "examination", label: "Examination Type" },
  { key: "pct", label: "PCT Route" },
  { key: "types", label: "Patent Types" }
] as const;

const HIGHLIGHT_TREATIES = ["madrid", "pct", "gcc"] as const;

const Jurisdictions = () => {
  const { t } = useLanguage();

  usePageSEO({
    title: "Global IP Jurisdictions Coverage",
    description: "Review Al Marsa IP's 150+ jurisdiction network enabling coordinated filings, renewals, and enforcement programmes worldwide.",
    keywords: [
      "international IP network",
      "GCC trademark filings",
      "global intellectual property coverage"
    ],
    url: buildCanonicalUrl("/jurisdictions"),
  });

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
                    <span>Get In Touch</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                >
                  <Link to="/services" className="flex w-full items-center justify-center sm:w-auto">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white texture-blueprint" data-animate>
          <div className="container-responsive">
            <div className="section-heading">
              <span className="section-eyebrow">Strategic regions</span>
              <h2 className="section-title mt-6">GCC Intellectual Property Landscape</h2>
              <p className="section-subtitle mt-6">
                Comprehensive IP protection across all six Gulf Cooperation Council member states with specialized knowledge of local regulations, treaties, and enforcement mechanisms.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {GCC_COUNTRIES.map((country) => (
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
                            title={`${country.name} flag`}
                          />
                          <div className="space-y-0.5 min-w-0">
                            <h3 className="text-base font-semibold tracking-tight truncate">{country.name}</h3>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75 truncate">
                              Capital • {country.info.capital}
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
                          const treaty = TREATY_ITEMS.find((item) => item.key === key);
                          return (
                            <div
                              key={key}
                              className="flex flex-col gap-1.5 rounded-xl border border-white/15 bg-white/8 p-2.5 backdrop-blur"
                            >
                              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/70 leading-tight truncate">
                                {treaty?.label}
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
                                <span className="whitespace-nowrap leading-none">{tab.label}</span>
                              </TabsTrigger>
                            );
                          })}
                        </TabsList>

                        <TabsContent value="overview" className="mt-0 data-[state=inactive]:hidden">
                          <div className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 bg-gray-50 p-3 min-h-[200px]">
                            <div className="flex flex-col gap-2.5">
                              <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Ministry</p>
                                <p className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2">{country.info.ministry}</p>
                              </div>
                              <a
                                href={country.info.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors w-fit"
                              >
                                Official website
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
                                  {item.label}
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
                                  {item.label}
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
                                  {item.label}
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
              <span className="section-eyebrow">Global frameworks</span>
              <h2 className="section-title text-navy-deep mt-6">Confidence across international systems</h2>
              <p className="section-subtitle mt-6">
                We integrate directly with world bodies and regional offices, ensuring your IP assets remain compliant, enforceable, and optimised for expansion.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              {GLOBAL_FRAMEWORKS.map((framework) => (
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
              <span className="section-eyebrow">Delivery rhythm</span>
              <h2 className="section-title mt-6">A disciplined sequence for international execution</h2>
              <p className="section-subtitle mt-6">
                Transparent governance and dependable timelines keep stakeholders aligned from initial assessment through enforcement.
              </p>
            </div>
            <ol className="timeline max-w-4xl mx-auto">
              {DELIVERY_STEPS.map((step, index) => (
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
              <span className="section-eyebrow">Programme governance</span>
              <h2 className="section-title mt-6">Partnerships designed for scale</h2>
              <p className="section-subtitle mt-6">
                Stay audit-ready with programme management that delivers clarity on spend, timelines, and risk posture.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {OPERATING_PILLARS.map((pillar) => (
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
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Global reach</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Extend your IP protection with a single, accountable partner
                </h2>
                <p className="max-w-2xl text-sm text-white/75 sm:text-base">
                  Engage our cross-border desk to coordinate filings, renewals, enforcement, and commercialisation strategies across every jurisdiction critical to your growth.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
                <Button asChild size="lg" className="w-full bg-white text-navy-deep hover:bg-white/90 sm:w-auto">
                  <Link to="/contact">Start an international mandate</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-white bg-white/10 text-white hover:bg-white hover:text-navy-deep sm:w-auto"
                >
                  <Link to="/our-story">See how we operate</Link>
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
