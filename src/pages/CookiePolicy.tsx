import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";

const CookiePolicy = () => {
  usePageSEO({
    title: "Cookie Policy",
    description: "Al Marsa Intellectual Property Agents cookie policy and usage information.",
    url: buildCanonicalUrl("/cookie-policy"),
  });

  const formattedAddress = `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.floor}, ${COMPANY_INFO.address.building}, ${COMPANY_INFO.address.area} ${COMPANY_INFO.address.country}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title text-navy-deep mb-6">
              Cookie Policy
            </h1>
            <p className="text-body text-text-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">1. What Are Cookies</h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-body leading-relaxed text-foreground">
                  {COMPANY_INFO.name} uses cookies to enhance your browsing experience, analyze site traffic, and understand
                  where our visitors are coming from.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">2. Types of Cookies We Use</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">Essential Cookies</h3>
                    <p className="text-body leading-relaxed text-foreground">
                      These cookies are necessary for the website to function properly. They enable core functionality
                      such as security, network management, and accessibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">Analytics Cookies</h3>
                    <p className="text-body leading-relaxed text-foreground">
                      We use analytics cookies to understand how visitors interact with our website. This helps us
                      improve our services and user experience. These cookies collect information anonymously.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">Functionality Cookies</h3>
                    <p className="text-body leading-relaxed text-foreground">
                      These cookies allow our website to remember choices you make (such as language preferences)
                      and provide enhanced, more personalized features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-sm font-semibold text-navy-deep mb-2">Performance Cookies</h3>
                    <p className="text-body leading-relaxed text-foreground">
                      These cookies help us understand how effective our content is, what interests our users,
                      and to improve how our website works.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">3. Third-Party Cookies</h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  In addition to our own cookies, we may use various third-party cookies to report usage statistics
                  of our website and deliver advertisements on and through our website.
                </p>
                <p className="text-body leading-relaxed text-foreground">
                  These third-party services may include:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for content sharing features</li>
                  <li>Marketing and advertising platforms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">4. Managing Cookies</h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. However,
                  limiting cookies may impact your experience of our website and prevent you from enjoying all
                  its features.
                </p>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  You can set your browser to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>Accept all cookies</li>
                  <li>Reject all cookies</li>
                  <li>Notify you when a cookie is set</li>
                  <li>Delete cookies after your browsing session</li>
                </ul>
                <p className="text-body leading-relaxed text-foreground mt-4">
                  For more information on how to manage cookies in popular browsers, please visit:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome Cookie Settings</a></li>
                  <li>Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox Cookie Settings</a></li>
                  <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari Cookie Settings</a></li>
                  <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge Cookie Settings</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">5. Cookie Retention</h2>
                <p className="text-body leading-relaxed text-foreground">
                  Session cookies are temporary and are deleted when you close your browser. Persistent cookies
                  remain on your device until they expire or you delete them. The retention period varies depending
                  on the purpose of the cookie.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">6. Updates to This Policy</h2>
                <p className="text-body leading-relaxed text-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
                  our operations, or for other operational, legal, or regulatory reasons. We encourage you to review
                  this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">7. Contact Us</h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 rounded-lg bg-muted/50 p-6">
                  <p className="text-body text-foreground">
                    <strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">{COMPANY_INFO.email}</a>
                  </p>
                  <p className="text-body text-foreground">
                    <strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary hover:underline">{COMPANY_INFO.phone}</a>
                  </p>
                  <p className="text-body text-foreground">
                    <strong>Address:</strong> {formattedAddress}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">8. Your Consent</h2>
                <p className="text-body leading-relaxed text-foreground">
                  By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy.
                  If you do not agree to our use of cookies, you should set your browser settings accordingly or
                  refrain from using our website.
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
