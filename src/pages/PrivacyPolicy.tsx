import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const PrivacyPolicy = () => {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  usePageSEO({
    title: t('legal.privacyPolicy.title'),
    description: "Al Marsa Intellectual Property Agents privacy policy and data protection practices.",
    url: buildCanonicalUrl("/privacy-policy"),
  });

  return (
    <div className={cn("min-h-screen bg-background text-foreground", isRTL && "dir-rtl")}>
      <Header />
      <main id="main-content" role="main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title text-navy-deep mb-6">
              {t('legal.privacyPolicy.title')}
            </h1>
            <p className="text-body text-text-muted">
              {t('legal.privacyPolicy.lastUpdated')}: {new Date().toLocaleDateString(isRTL ? 'ar-KW' : 'en-US')}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  1. {t('legal.privacyPolicy.sections.informationCollection.title')}
                </h2>
                <p className="text-body leading-relaxed mb-4">
                  {t('legal.privacyPolicy.sections.informationCollection.paragraph1')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>{t('legal.privacyPolicy.sections.informationCollection.items.forms')}</li>
                  <li>{t('legal.privacyPolicy.sections.informationCollection.items.newsletter')}</li>
                  <li>{t('legal.privacyPolicy.sections.informationCollection.items.services')}</li>
                  <li>{t('legal.privacyPolicy.sections.informationCollection.items.communication')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  2. {t('legal.privacyPolicy.sections.howWeUse.title')}
                </h2>
                <p className="text-body leading-relaxed mb-4">
                  {t('legal.privacyPolicy.sections.howWeUse.paragraph1')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>{t('legal.privacyPolicy.sections.howWeUse.items.provide')}</li>
                  <li>{t('legal.privacyPolicy.sections.howWeUse.items.process')}</li>
                  <li>{t('legal.privacyPolicy.sections.howWeUse.items.updates')}</li>
                  <li>{t('legal.privacyPolicy.sections.howWeUse.items.comply')}</li>
                  <li>{t('legal.privacyPolicy.sections.howWeUse.items.protect')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  3. {t('legal.privacyPolicy.sections.sharing.title')}
                </h2>
                <p className="text-body leading-relaxed mb-4">
                  {t('legal.privacyPolicy.sections.sharing.paragraph1')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-foreground">
                  <li>{t('legal.privacyPolicy.sections.sharing.items.consent')}</li>
                  <li>{t('legal.privacyPolicy.sections.sharing.items.providers')}</li>
                  <li>{t('legal.privacyPolicy.sections.sharing.items.legal')}</li>
                  <li>{t('legal.privacyPolicy.sections.sharing.items.business')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  4. {t('legal.privacyPolicy.sections.security.title')}
                </h2>
                <p className="text-body leading-relaxed">
                  {t('legal.privacyPolicy.sections.security.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  5. {t('legal.privacyPolicy.sections.rights.title')}
                </h2>
                <p className="text-body leading-relaxed mb-4">
                  {t('legal.privacyPolicy.sections.rights.paragraph1')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>{t('legal.privacyPolicy.sections.rights.items.access')}</li>
                  <li>{t('legal.privacyPolicy.sections.rights.items.rectify')}</li>
                  <li>{t('legal.privacyPolicy.sections.rights.items.delete')}</li>
                  <li>{t('legal.privacyPolicy.sections.rights.items.object')}</li>
                  <li>{t('legal.privacyPolicy.sections.rights.items.portability')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  6. {t('legal.privacyPolicy.sections.contactUs.title')}
                </h2>
                <p className="text-body leading-relaxed">
                  {t('legal.privacyPolicy.sections.contactUs.paragraph1')}
                </p>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="font-medium">{COMPANY_INFO.name}</p>
                  <p className="text-body">{t('contact.info.emailAddress')}: {COMPANY_INFO.legal.privacyEmail}</p>
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

export default PrivacyPolicy;
