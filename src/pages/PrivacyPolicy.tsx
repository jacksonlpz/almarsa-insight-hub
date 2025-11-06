import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";

const PrivacyPolicy = () => {
  usePageSEO({
    title: "Privacy Policy",
    description: "Al Marsa Intellectual Property Agents privacy policy and data protection practices.",
    url: buildCanonicalUrl("/privacy-policy"),
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title text-navy-deep mb-6">
              Privacy Policy
            </h1>
            <p className="text-body text-text-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">1. Information We Collect</h2>
                <p className="text-body leading-relaxed mb-4">
                  Al Marsa Intellectual Property Agents collects information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>Fill out our contact forms or request consultation</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Engage our IP services</li>
                  <li>Communicate with us via email, phone, or other channels</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">2. How We Use Your Information</h2>
                <p className="text-body leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>Provide, maintain, and improve our IP services</li>
                  <li>Process and respond to your inquiries and requests</li>
                  <li>Send you updates about our services and industry news</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-body leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-foreground">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">4. Data Security</h2>
                <p className="text-body leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                  of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">5. Your Rights</h2>
                <p className="text-body leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>Access and obtain a copy of your personal information</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict the processing of your information</li>
                  <li>Data portability rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">6. Contact Us</h2>
                <p className="text-body leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="font-medium">{COMPANY_INFO.name}</p>
                  <p className="text-body">Email: {COMPANY_INFO.legal.privacyEmail}</p>
                  <p className="text-body">Phone: {COMPANY_INFO.phone}</p>
                  <p className="text-body">Address: {COMPANY_INFO.address.street}, {COMPANY_INFO.address.floor}, {COMPANY_INFO.address.building}, {COMPANY_INFO.address.area} {COMPANY_INFO.address.country}</p>
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
