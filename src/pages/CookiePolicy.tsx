import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const CookiePolicy = () => {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  usePageSEO({
    title: t('legal.cookiePolicy.title'),
    description: "Al Marsa Intellectual Property Agents cookie policy and usage information.",
    url: buildCanonicalUrl("/cookie-policy"),
  });

  const formattedAddress = `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.floor}, ${COMPANY_INFO.address.building}, ${COMPANY_INFO.address.area} ${COMPANY_INFO.address.country}`;

  return (
    <div className={cn("min-h-screen bg-background text-foreground", isRTL && "dir-rtl")}>
      <Header />
      <main id="main-content" role="main">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title text-navy-deep mb-6">
              {t('legal.cookiePolicy.title')}
            </h1>
            <p className="text-body text-text-muted">
              {t('legal.cookiePolicy.lastUpdated')}: {new Date().toLocaleDateString(isRTL ? 'ar-KW' : 'en-US')}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  1. {t('legal.cookiePolicy.sections.whatAreCookies.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  {t('legal.cookiePolicy.sections.whatAreCookies.paragraph1')}
                </p>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.cookiePolicy.sections.whatAreCookies.paragraph2').replace('{companyName}', COMPANY_INFO.name)}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  2. {t('legal.cookiePolicy.sections.typesOfCookies.title')}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">
                      {t('legal.cookiePolicy.sections.typesOfCookies.essential.title')}
                    </h3>
                    <p className="text-body leading-relaxed text-foreground">
                      {t('legal.cookiePolicy.sections.typesOfCookies.essential.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">
                      {t('legal.cookiePolicy.sections.typesOfCookies.analytics.title')}
                    </h3>
                    <p className="text-body leading-relaxed text-foreground">
                      {t('legal.cookiePolicy.sections.typesOfCookies.analytics.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">
                      {t('legal.cookiePolicy.sections.typesOfCookies.functionality.title')}
                    </h3>
                    <p className="text-body leading-relaxed text-foreground">
                      {t('legal.cookiePolicy.sections.typesOfCookies.functionality.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">
                      {t('legal.cookiePolicy.sections.typesOfCookies.performance.title')}
                    </h3>
                    <p className="text-body leading-relaxed text-foreground">
                      {t('legal.cookiePolicy.sections.typesOfCookies.performance.description')}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  3. {t('legal.cookiePolicy.sections.thirdPartyCookies.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  {t('legal.cookiePolicy.sections.thirdPartyCookies.paragraph1')}
                </p>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.cookiePolicy.sections.thirdPartyCookies.paragraph2')}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>{t('legal.cookiePolicy.sections.thirdPartyCookies.services.analytics')}</li>
                  <li>{t('legal.cookiePolicy.sections.thirdPartyCookies.services.social')}</li>
                  <li>{t('legal.cookiePolicy.sections.thirdPartyCookies.services.marketing')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  4. {t('legal.cookiePolicy.sections.managingCookies.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  {t('legal.cookiePolicy.sections.managingCookies.paragraph1')}
                </p>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  {t('legal.cookiePolicy.sections.managingCookies.paragraph2')}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>{t('legal.cookiePolicy.sections.managingCookies.options.accept')}</li>
                  <li>{t('legal.cookiePolicy.sections.managingCookies.options.reject')}</li>
                  <li>{t('legal.cookiePolicy.sections.managingCookies.options.notify')}</li>
                  <li>{t('legal.cookiePolicy.sections.managingCookies.options.delete')}</li>
                </ul>
                <p className="text-body leading-relaxed text-foreground mt-4">
                  {t('legal.cookiePolicy.sections.managingCookies.paragraph3')}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t('legal.cookiePolicy.sections.managingCookies.browsers.chrome')}</a></li>
                  <li>Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t('legal.cookiePolicy.sections.managingCookies.browsers.firefox')}</a></li>
                  <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t('legal.cookiePolicy.sections.managingCookies.browsers.safari')}</a></li>
                  <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t('legal.cookiePolicy.sections.managingCookies.browsers.edge')}</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  5. {t('legal.cookiePolicy.sections.cookieRetention.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.cookiePolicy.sections.cookieRetention.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  6. {t('legal.cookiePolicy.sections.updates.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.cookiePolicy.sections.updates.description')}
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  7. {t('legal.cookiePolicy.sections.contactUs.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  {t('legal.cookiePolicy.sections.contactUs.paragraph1')}
                </p>
                <div className="space-y-2 rounded-lg bg-muted/50 p-6">
                  <p className="text-body text-foreground">
                    <strong>{t('legal.cookiePolicy.sections.contactUs.email')}</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">{COMPANY_INFO.email}</a>
                  </p>
                  <p className="text-body text-foreground">
                    <strong>{t('legal.cookiePolicy.sections.contactUs.phone')}</strong> <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary hover:underline">{COMPANY_INFO.phone}</a>
                  </p>
                  <p className="text-body text-foreground">
                    <strong>{t('legal.cookiePolicy.sections.contactUs.address')}</strong> {formattedAddress}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">
                  8. {t('legal.cookiePolicy.sections.consent.title')}
                </h2>
                <p className="text-body leading-relaxed text-foreground">
                  {t('legal.cookiePolicy.sections.consent.description')}
                </p>
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

export default CookiePolicy;
