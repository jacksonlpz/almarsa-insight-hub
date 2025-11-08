import { useRef } from "react";
import type { ComponentType, SVGProps } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Building2, Calendar, AlertCircle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useScrollReveal from "@/hooks/useScrollReveal";
import "@/styles/home.css";
import { AE, BH, KW, OM, QA, SA } from "country-flag-icons/react/3x2";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutCard } from "@/components/ui/AboutCard";

type SectionItem = {
  title: string;
  date?: string;
  deadline?: string;
  description?: string;
  summary?: string;
  image?: string;
  link?: string;
};

type Section = {
  title: string;
  source: string;
  items: SectionItem[];
  note?: string;
  completeList?: string;
};

type CountryData = {
  id: string;
  country: string;
  Flag: ComponentType<SVGProps<SVGSVGElement>>;
  ministry: string;
  sections: Section[];
  website: string;
};

function SectionCarousel({ items }: { items: SectionItem[] }) {
  const { t } = useLanguage();
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    }),
  );

  return (
    <div className="px-8 sm:px-12">
      <Carousel
        plugins={[autoplay.current]}
        className="w-full"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {items.map((item, itemIdx) => (
            <CarouselItem key={itemIdx} className="basis-full pl-3 sm:pl-4">
              <Card
                className="flex h-full flex-col border border-border/50 bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-lg cursor-pointer"
                onClick={() => item.link && window.open(item.link, '_blank', 'noopener noreferrer')}
              >
                <CardContent className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="w-full overflow-hidden rounded-2xl border border-border/50 bg-muted sm:w-36 sm:flex-shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="h-28 w-full object-cover sm:h-full" />
                      ) : (
                        <div className="flex h-28 w-full items-center justify-center bg-muted/50 text-muted-foreground sm:h-full">
                          <FileText className="h-6 w-6" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-2 sm:gap-3 overflow-hidden">
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-navy-deep leading-snug sm:text-base break-words">{item.title}</h5>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          {item.date && (
                            <span className="inline-flex items-center gap-1 whitespace-nowrap">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              {item.date}
                            </span>
                          )}
                          {item.deadline && (
                            <span className="font-medium text-red-600 text-label-sm">
                              ⏰ {t("newsEvents.deadline")}: {item.deadline}
                            </span>
                          )}
                        </div>
                      </div>

                      {(item.summary || item.description) && (
                        <p className="text-xs text-muted-foreground leading-relaxed break-words line-clamp-4">
                          {item.summary ?? item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-8 sm:-left-10 lg:-left-12" />
        <CarouselNext className="-right-8 sm:-right-10 lg:-right-12" />
      </Carousel>
    </div>
  );
}

const GCC_COUNTRIES: CountryData[] = [
  {
    id: "bahrain",
    country: "Bahrain",
    Flag: BH,
    ministry: "Ministry of Industry and Commerce (MOIC)",
    sections: [
      {
        title: "Asia IP Coverage & Analysis",
        source: "Asia IP Magazine",
        items: [
          {
            title: "INTA 2025: IP offices embrace AI",
            date: "May 20, 2025",
            summary:
              "Highlights how Bahrain and regional IP offices are introducing AI tools to modernize trademark and patent examinations.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/a47072176bca825aadacf648034e124b/banner/7f6caf1f0ba788cd7953d817724c2b6e/conversions/Copy-of-AsiaIP_WEB_ARTICLES.psd-%286%29-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/inta-2025-ip-offices-embrace-ai"
          },
          {
            title: "IP aspirations for the new year",
            date: "January 30, 2025",
            summary:
              "Regional practitioners share 2025 priorities for accessible IP systems, green technology and AI adoption relevant to Bahrain's growth plans.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/dfd786998e082758be12670d856df755/banner/cff02a74da64d145a4aed3a577a106ab/conversions/20250224-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/ip-aspirations-for-the-new-year"
          },
          {
            title: "Bahrain speeds up patent approvals through new global partnerships",
            date: "March 19, 2025",
            summary:
              "Details Bahrain's new Patent Prosecution Highway partnerships that fast-track approvals and align with the kingdom's diversification strategy.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/5f8a7deb15235a128fcd99ad6bfde11e/banner/ddf9029977a61241841edeae15e9b53f/conversions/20250319-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/bahrain-speeds-up-patent-approvals-through-new-global-partnerships"
          }
        ]
      }
    ],
    website: "https://www.moic.gov.bh/en"
  },
  {
    id: "qatar",
    country: "Qatar",
    Flag: QA,
    ministry: "Ministry of Commerce and Industry (MOCI)",
    sections: [
      {
        title: "Asia IP Spotlight",
        source: "Asia IP Magazine",
        items: [
          {
            title: "Qatar trademark office initiates digital transformation",
            date: "July 31, 2025",
            summary:
              "Pilot digitization of the Trademarks Official Gazette and certificates marks a phased shift toward fully electronic IP services in Doha.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/a87c11b9100c608b7f8e98cfa316ff7b/banner/9649dec6196d730c5e024f204477d8d1/conversions/AIP-website-article-main-image-%2840%29-extra_large.jpg",
            link: "https://asiaiplaw.com/article/qatar-trademark-office-initiates-digital-transformation"
          },
          {
            title: "Recent policy and procedural changes in the evolving IP landscapes in the MENA region",
            date: "March 31, 2025",
            summary:
              "Breaks down Qatar's new grievance committee, Madrid Protocol accession and fee reductions that strengthen its innovation ecosystem.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/c5df4f4eabf1cbcfeb50fbbf97c5289f/banner/33ef701c8059391708f1c3ddbe9f1f81/conversions/AsiaIP_WEB_ARTICLES.psd-%2864%29-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/recent-policy-and-procedural-changes-in-the-evolving-ip-landscapes-in-the-mena-region"
          },
          {
            title: "Qatar revolutionizes its IP landscape",
            date: "March 31, 2025",
            summary:
              "Details Qatar's IP overhaul—from grievance processes to Madrid Protocol entry and fee cuts—designed to attract high-tech investment.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/082a8bbf2c357c09f26675f9cf5bcba3/banner/aba18772fc70c8cbf79a79f413ef102b/conversions/AsiaIP_WEB_ARTICLES.psd-%2815%29-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/qatar-revolutionizes-its-ip-landscape"
          }
        ]
      }
    ],
    website: "https://www.moci.gov.qa/en/"
  },
  {
    id: "saudiArabia",
    country: "Saudi Arabia",
    Flag: SA,
    ministry: "Saudi Authority for Intellectual Property (SAIP)",
    sections: [
      {
        title: "Asia IP Spotlight",
        source: "Asia IP Magazine",
        items: [
          {
            title: "Saudi Arabia embraces international IP standards; SAIP adopts e-portal system",
            date: "April 25, 2024",
            summary:
              "SAIP's new unified e-portal and embrace of Hague Agreement protections streamline filings and align the kingdom with global IP norms.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/2109737282d2c2de4fc5534be26c9bb6/banner/df83971673de5c8e71ca1e2645718dad/conversions/SAIP-extra_large.jpg",
            link: "https://asiaiplaw.com/section/news-analysis/saudi-arabia-embraces-international-ip-standards-saip-adopts-e-portal-system"
          },
          {
            title: "SAIP digitalizes IP services via unified e-portal",
            date: "April 25, 2024",
            summary:
              "The article highlights faster trademark, patent, and design processing as SAIP pilots a comprehensive electronic front office for rights holders.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/2109737282d2c2de4fc5534be26c9bb6/banner/df83971673de5c8e71ca1e2645718dad/conversions/SAIP-extra_large.jpg",
            link: "https://asiaiplaw.com/section/news-analysis/saudi-arabia-embraces-international-ip-standards-saip-adopts-e-portal-system"
          },
          {
            title: "Global agreements extend design protection in Saudi Arabia",
            date: "April 25, 2024",
            summary:
              "Recognizing Hague registrations grants foreign designs equal protection at home, encouraging international filings into the Saudi market.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/2109737282d2c2de4fc5534be26c9bb6/banner/df83971673de5c8e71ca1e2645718dad/conversions/SAIP-extra_large.jpg",
            link: "https://asiaiplaw.com/section/news-analysis/saudi-arabia-embraces-international-ip-standards-saip-adopts-e-portal-system"
          }
        ]
      }
    ],
    website: "https://www.saip.gov.sa/en/"
  },
  {
    id: "uae",
    country: "UAE",
    Flag: AE,
    ministry: "Ministry of Economy and Tourism",
    sections: [
      {
        title: "Asia IP Spotlight",
        source: "Asia IP Magazine",
        items: [
          {
            title: "UAE unveils new geographical indications system",
            date: "May 30, 2025",
            summary:
              "The Ministry of Economy launched the UAE's first federal GI framework to protect locally distinctive goods and turn them into globally marketable assets in line with the We the UAE 2031 agenda.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/2ccc2826b445aebac6f6b3f8013e7931/banner/deb74a85a4a68465b75c721d45db5d3b/conversions/AIP-zoho-article-main-image-%284%29-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/uae-unveils-new-geographical-indications-system"
          },
          {
            title: "United Arab Emirates IP Experts 2025",
            date: "March 31, 2025",
            summary:
              "Dubai's new Intellectual Property Hub centralizes registration tools and highlights Asia IP's Top 40 practitioners steering the UAE's knowledge-driven economy.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/13d2b7361a27dbc9960ae158598a6a96/banner/aaaccd2766ec67aecbe26459bb828d81/conversions/2025-IP-%283%29-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/united-arab-emirates-ip-experts-2025"
          },
          {
            title: "Cybersquatting and its implications in the UAE",
            date: "February 28, 2025",
            summary:
              "A WIPO panel ordered the transfer of propertyfindersuae.com to Property Finder, underscoring how trademark rights drive domain name enforcement in the Emirates.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/3d7d9461075eb7c37fbbfcad1d7042c1/banner/d8847be3f7cc1b14e9173908bebb2106/conversions/AsiaIP_WEB_ARTICLES.psd-%2872%29-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/cybersquatting-and-its-implications-in-the-uae"
          }
        ]
      }
    ],
    website: "https://www.moet.gov.ae/en/home"
  },
  {
    id: "oman",
    country: "Oman",
    Flag: OM,
    ministry: "Ministry of Commerce, Industry & Investment Promotion (MOCIIP)",
    sections: [
      {
        title: "Asia IP Spotlight",
        source: "Asia IP Magazine",
        items: [
          {
            title: "IP aspirations for the new year",
            date: "January 30, 2025",
            summary:
              "Regional practitioners share 2025 priorities for accessible IP systems, green technology and AI adoption relevant to Oman's growth plans.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/dfd786998e082758be12670d856df755/banner/cff02a74da64d145a4aed3a577a106ab/conversions/20250224-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/ip-aspirations-for-the-new-year"
          },
          {
            title: "Oman enforces new submission requirements for trademark filings",
            date: "November 11, 2024",
            summary:
              "Oman's Ministry of Commerce requires trademark agents to submit original power of attorney documents for trademark applications, with a 60-day window to submit complete documentation.",
            image:
              "https://asiaiplaw.com/storage/imageable/content/561e7e7d74cece738de9b23c0dd293d2/Zayrah Marzan-content_original.jpeg",
            link: "https://asiaiplaw.com/section/cover-story/oman-enforces-new-submission-requirements-for-trademark-filings"
          }
        ]
      }
    ],
    website: "https://tejarah.gov.om/en"
  },
  {
    id: "kuwait",
    country: "Kuwait",
    Flag: KW,
    ministry: "Ministry of Commerce and Industry (MOCI)",
    sections: [
      {
        title: "Asia IP Spotlight",
        source: "Asia IP Magazine",
        items: [
          {
            title: "IP aspirations for the new year",
            date: "January 30, 2025",
            summary:
              "Regional practitioners share 2025 priorities for accessible IP systems, green technology and AI adoption relevant to Kuwait's IP landscape.",
            image:
              "https://asiaiplaw.com/storage/media/image/article/dfd786998e082758be12670d856df755/banner/cff02a74da64d145a4aed3a577a106ab/conversions/20250224-extra_large.jpg",
            link: "https://asiaiplaw.com/section/cover-story/ip-aspirations-for-the-new-year"
          }
        ]
      }
    ],
    website: "https://www.moci.gov.kw/en/"
  }
];

const NewsEvents = () => {
  const { t } = useLanguage();

  usePageSEO({
    title: "News & Regulatory IP Updates",
    description: "Stay informed on GCC trademark notices, IP enforcement trends, and Al Marsa thought leadership events.",
    keywords: ["IP news GCC", "trademark bulletins", "intellectual property events"],
    url: buildCanonicalUrl("/news-events"),
  });

  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy-deep to-navy-light text-white" data-animate>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(231,93,43,0.12),_transparent_50%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] lg:block" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <span className="inline-block text-label-xs font-semibold uppercase tracking-widest text-primary sm:text-label-sm">
                    {t('newsEvents.hero.eyebrow')}
                  </span>
                  <h1 className="hero-title text-white">
                    {t('newsEvents.hero.title')}
                  </h1>
                  <p className="hero-subtitle mx-auto text-white/80">
                    {t('newsEvents.hero.subtitle')}
                  </p>
                </div>

                <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
                  <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-8">
                    <div className="text-center">
                      <div className="text-display-sm font-semibold text-white sm:text-display-md">{t('newsEvents.hero.metrics.countries.metric')}</div>
                      <p className="mt-2 text-label-xs font-semibold uppercase tracking-wide text-white/60 sm:text-label-sm">{t('newsEvents.hero.metrics.countries.label')}</p>
                    </div>
                    <div className="text-center border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0">
                      <div className="text-display-sm font-semibold text-white sm:text-display-md">{t('newsEvents.hero.metrics.updates.metric')}</div>
                      <p className="mt-2 text-label-xs font-semibold uppercase tracking-wide text-white/60 sm:text-label-sm">{t('newsEvents.hero.metrics.updates.label')}</p>
                    </div>
                    <div className="text-center border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0">
                      <div className="text-display-sm font-semibold text-white sm:text-display-md">{t('newsEvents.hero.metrics.sources.metric')}</div>
                      <p className="mt-2 text-label-xs font-semibold uppercase tracking-wide text-white/60 sm:text-label-sm">{t('newsEvents.hero.metrics.sources.label')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Country Updates Section */}
        <section className="section-spacing bg-white" data-animate>
          <div className="container-responsive">
            <SectionHeading
              eyebrow={t("newsEvents.sectionHeading.eyebrow")}
              title={t("newsEvents.sectionHeading.title")}
              subtitle={t("newsEvents.sectionHeading.subtitle")}
              align="center"
              className="max-w-3xl"
            />

            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {GCC_COUNTRIES.map((countryData) => {
                const FlagIcon = countryData.Flag;
                const localizedCountryName = t(`newsEvents.countries.${countryData.id}`);

                const websiteLabel = countryData.website.replace(/^https?:\/\//, "");

                return (
                  <AboutCard
                    key={countryData.id}
                    badge={t("newsEvents.badge.latest")}
                    title={localizedCountryName}
                    description={countryData.ministry}
                    className="h-full"
                  >
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-primary/10">
                          <FlagIcon
                            title={t("newsEvents.countryFlagAlt", { country: localizedCountryName })}
                            className="h-10 w-16"
                          />
                        </div>
                        <a
                          href={countryData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-primary hover:underline"
                        >
                          {websiteLabel}
                        </a>
                      </div>

                      <div className="space-y-8">
                        {countryData.sections.map((section, sectionIdx) => (
                          <div key={sectionIdx} className="space-y-4">
                            <div className="space-y-2">
                              <p className="text-xl font-semibold text-navy-deep">{section.title}</p>
                              <p className="text-base text-muted-foreground">{section.source}</p>
                            </div>

                            {section.note && (
                              <div className="flex items-start gap-3 rounded-2xl bg-primary/10 p-4">
                                <AlertCircle className="h-5 w-5 text-primary" />
                                <p className="text-sm leading-relaxed text-primary">{section.note}</p>
                              </div>
                            )}

                            <SectionCarousel items={section.items} />

                            {section.completeList && (
                              <div className="border-t border-border/50 pt-4">
                                <a
                                  href={section.completeList}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline"
                                >
                                  {t("newsEvents.completeArchive")}
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </AboutCard>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsEvents;
