import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";

const TermsOfService = () => {
  usePageSEO({
    title: "Terms of Service",
    description: "Al Marsa Intellectual Property Agents terms of service and legal agreements.",
    url: buildCanonicalUrl("/terms-of-service"),
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title text-navy-deep mb-6">
              Terms of Service
            </h1>
            <p className="text-body text-text-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">1. Acceptance of Terms</h2>
                <p className="text-body leading-relaxed">
                  By accessing and using the services of Al Marsa Intellectual Property Agents ("Al Marsa," "we," "us," or "our"), 
                  you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">2. Services Description</h2>
                <p className="text-body leading-relaxed mb-4">
                  Al Marsa provides intellectual property services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>Trademark registration and maintenance</li>
                  <li>Patent application and prosecution</li>
                  <li>IP litigation and enforcement</li>
                  <li>IP consultation and strategy</li>
                  <li>International filing services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">3. Professional Relationship</h2>
                <p className="text-body leading-relaxed">
                  The establishment of an attorney-client relationship requires a formal engagement agreement. 
                  Communication through our website or initial consultations does not automatically create an 
                  attorney-client relationship. All formal engagements will be governed by separate service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">4. Confidentiality</h2>
                <p className="text-body leading-relaxed text-foreground">
                  We maintain strict confidentiality regarding all client information and communications. 
                  However, we recommend that you avoid sharing highly sensitive information through unsecured 
                  channels such as general contact forms or email until a formal attorney-client relationship 
                  has been established.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">5. Fees and Payment</h2>
                <p className="text-body leading-relaxed text-foreground mb-4">
                  Our fee structure will be clearly outlined in your service agreement. General principles include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-body text-foreground">
                  <li>Transparent pricing with no hidden fees</li>
                  <li>Payment terms as specified in service agreements</li>
                  <li>Government fees are additional to our service fees</li>
                  <li>Cancellation and refund policies per service agreement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">6. Limitation of Liability</h2>
                <p className="text-body leading-relaxed text-foreground">
                  To the fullest extent permitted by law, Al Marsa shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                  whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">7. Intellectual Property Rights</h2>
                <p className="text-body leading-relaxed text-foreground">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, 
                  and other matters related to this website are protected under applicable intellectual property laws, 
                  and other proprietary rights. All rights reserved by Al Marsa.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">8. Governing Law</h2>
                <p className="text-body leading-relaxed text-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws of Kuwait. 
                  Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the 
                  courts of Kuwait.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-navy-deep mb-4">9. Contact Information</h2>
                <p className="text-body leading-relaxed text-foreground">
                  For questions regarding these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="font-medium">{COMPANY_INFO.name}</p>
                  <p className="text-body">Email: {COMPANY_INFO.legal.legalEmail}</p>
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

export default TermsOfService;
