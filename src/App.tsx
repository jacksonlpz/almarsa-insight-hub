import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "@/hooks/useLanguage";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages for better performance and code splitting
const Home = lazy(() => import("./pages/Home"));
const OurStory = lazy(() => import("./pages/OurStory"));
const Services = lazy(() => import("./pages/Services"));
const Jurisdictions = lazy(() => import("./pages/Jurisdictions"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const InsightsForms = lazy(() => import("./pages/InsightsForms"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner size="lg" message="Loading page..." />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jurisdictions" element={<Jurisdictions />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/insights-forms" element={<InsightsForms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
