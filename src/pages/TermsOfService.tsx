import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const TermsOfService = () => {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  usePageSEO({
    title: t('legal.termsOfService.title'),
    description: "Al Marsa Intellectual Property Agents terms of service and legal agreements.",
    url: buildCanonicalUrl("/terms-of-service"),
  });

  return (
    <div className={cn("min-h-screen bg-background text-foreground", isRTL && "dir-rtl")}>
      <Header />
      <main id="main-content" role="main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title text-navy-deep mb-6">
              {t('legal.termsOfService.title')}
            </h1>
            <p className="text-body text-text-muted">
              {t('legal.termsOfService.lastUpdated')}: {new Date().toLocaleDateString(isRTL ? 'ar-KW' : 'en-US')}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  1. {t('legal.termsOfService.sections.acceptance.title')}
                </h2>
                <p className="text-body leading-relaxed">
                  {t('legal.termsOfService.sections.acceptance.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  2. {t('legal.termsOfService.sections.servicesDescription.title')}
                </h2>
                <p className="text-body leading-relaxed mb-4">
                  {t('legal.termsOfService.sections.servicesDescription.paragraph1')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>{t('legal.termsOfService.sections.servicesDescription.items.trademark')}</li>
                  <li>{t('legal.termsOfService.sections.servicesDescription.items.patent')}</li>
                  <li>{t('legal.termsOfService.sections.servicesDescription.items.litigation')}</li>
                  <li>{t('legal.termsOfService.sections.servicesDescription.items.consultation')}</li>
                  <li>{t('legal.termsOfService.sections.servicesDescription.items.filing')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  3. {t('legal.termsOfService.sections.professionalRelationship.title')}
                </h2>
                <p className="text-body leading-relaxed">
                  {t('legal.termsOfService.sections.professionalRelationship.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  4. {t('legal.termsOfService.sections.confidentiality.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.termsOfService.sections.confidentiality.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  5. {t('legal.termsOfService.sections.fees.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  {t('legal.termsOfService.sections.fees.paragraph1')}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>{t('legal.termsOfService.sections.fees.items.transparent')}</li>
                  <li>{t('legal.termsOfService.sections.fees.items.payment')}</li>
                  <li>{t('legal.termsOfService.sections.fees.items.government')}</li>
                  <li>{t('legal.termsOfService.sections.fees.items.cancellation')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  6. {t('legal.termsOfService.sections.liability.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.termsOfService.sections.liability.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  7. {t('legal.termsOfService.sections.intellectualProperty.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.termsOfService.sections.intellectualProperty.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  8. {t('legal.termsOfService.sections.governingLaw.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.termsOfService.sections.governingLaw.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  9. {t('legal.termsOfService.sections.contactInformation.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.termsOfService.sections.contactInformation.paragraph1')}
                </p>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="font-medium">{COMPANY_INFO.name}</p>
                  <p className="text-body">{t('contact.info.emailAddress')}: {COMPANY_INFO.legal.legalEmail}</p>
                  <p className="text-body">{t('contact.info.phoneWhatsapp')}: {COMPANY_INFO.phone}</p>
                  <p className="text-body">{t('legal.cookiePolicy.sections.contactUs.address')}: {COMPANY_INFO.address.street}, {COMPANY_INFO.address.floor}, {COMPANY_INFO.address.building}, {COMPANY_INFO.address.area} {COMPANY_INFO.address.country}</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
