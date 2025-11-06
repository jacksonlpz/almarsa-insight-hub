import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  usePageSEO({
    title: "Page Not Found",
    description: "The page you requested could not be located on Al Marsa Intellectual Property Agents.",
    url: buildCanonicalUrl(location.pathname),
    robots: "noindex, nofollow",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link to="/" className="text-primary underline underline-offset-4 hover:text-primary-hover">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
