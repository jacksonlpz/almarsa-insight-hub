import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info - Takes 4 columns */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <div className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="Al Marsa Intellectual Property"
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-body leading-relaxed text-white/70 max-w-sm">
                {t('footer.description')}
              </p>
              <div>
                <p className="mb-3 text-label-xs font-semibold uppercase tracking-wide text-white/80">{t('footer.followUs')}</p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/company/al-marsa-intellectual-property"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-base ease-emphasis hover:bg-primary hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/almarsaip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-base ease-emphasis hover:bg-primary hover:text-white"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://almarsapro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-base ease-emphasis hover:bg-primary hover:text-white"
                    aria-label="Website"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Takes 8 columns, divided into 3 sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-label-sm font-bold uppercase tracking-widest text-white">{t('footer.quickLinks')}</h3>
              <nav className="space-y-4">
                <Link
                  to="/"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('nav.home')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/our-story"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('nav.ourStory')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/services"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('nav.services')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/jurisdictions"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('nav.jurisdictions')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/news-events"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('nav.newsEvents')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/insights-forms"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('nav.insightsForms')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('nav.contact')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-label-sm font-bold uppercase tracking-widest text-white">{t('footer.ourServices')}</h3>
              <nav className="space-y-4">
                <Link
                  to="/services#ip-registration-protection"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('footer.services.ipRegistration')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/services#enforcement-litigation"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('footer.services.enforcement')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/services#licensing-assignment"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('footer.services.licensing')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/services#anti-counterfeiting-market-surveillance"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('footer.services.antiCounterfeiting')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  to="/services#ip-strategy-advisory"
                  className="group flex items-center text-body text-white/70 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <span>{t('footer.services.ipStrategy')}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-label-sm font-bold uppercase tracking-widest text-white">{t('footer.getInTouch')}</h3>
              <div className="space-y-5">
                <a
                  href="tel:+96590095960"
                  className="group flex items-start gap-3 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-label-xs font-medium uppercase tracking-wide text-white/80">{t('footer.phone')}</p>
                    <p className="text-body text-white/70 transition-colors duration-base ease-emphasis group-hover:text-primary">+965 9009 5960</p>
                  </div>
                </a>
                <a
                  href="mailto:info@almarsapro.com"
                  className="group flex items-start gap-3 transition-colors duration-base ease-emphasis hover:text-primary"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-label-xs font-medium uppercase tracking-wide text-white/80">{t('footer.email')}</p>
                    <p className="break-all text-body text-white/70 transition-colors duration-base ease-emphasis group-hover:text-primary">info@almarsapro.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-label-xs font-medium uppercase tracking-wide text-white/80">{t('footer.office')}</p>
                    <p className="text-body leading-relaxed text-white/70">
                      Al Sharqia Towers, Floor 3<br />
                      Jaber Al Mubarak St, Block 2<br />
                      Sharq, Kuwait
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-body-xs text-white/80 md:text-left">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-label-xs text-white/80 transition-colors duration-base ease-emphasis hover:text-primary"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <span className="text-white/60" aria-hidden="true">|</span>
              <Link
                to="/terms-of-service"
                className="text-label-xs text-white/80 transition-colors duration-base ease-emphasis hover:text-primary"
              >
                {t('footer.termsOfService')}
              </Link>
              <span className="text-white/60" aria-hidden="true">|</span>
              <Link
                to="/cookie-policy"
                className="text-label-xs text-white/80 transition-colors duration-base ease-emphasis hover:text-primary"
              >
                {t('footer.cookiePolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
