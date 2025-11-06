import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.ourStory'), href: "/our-story" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.jurisdictions'), href: "/jurisdictions" },
    { name: t('nav.newsEvents'), href: "/news-events" },
    { name: t('nav.insightsForms'), href: "/insights-forms" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      isRTL && "dir-rtl"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:h-24 lg:h-32">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <Link
              to="/"
              className="group block transition-all duration-300 hover:scale-105"
            >
              <img
                src="/logo.svg"
                alt="Al Marsa Intellectual Property"
                className="h-16 w-auto max-w-none object-contain transition-transform duration-300 group-hover:rotate-2 md:h-20 lg:h-24"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-10 xl:gap-14">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative text-base lg:text-lg font-semibold transition-all duration-300 hover:text-primary group whitespace-nowrap",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-navy-deep"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  location.pathname === item.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>

          {/* Language Switcher - Desktop */}
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-md text-sm font-semibold transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-navy-deep hover:text-primary hover:bg-gray-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
