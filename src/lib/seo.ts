// SEO utilities and meta tag management
import { APP_CONFIG, SEO_CONFIG } from './constants';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function generatePageTitle(title?: string): string {
  if (!title) return SEO_CONFIG.defaultTitle;
  return SEO_CONFIG.titleTemplate.replace('%s', title);
}

export function generateMetaTags(
  data: Omit<SEOData, 'structuredData'> = {}
): { [key: string]: string } {
  const title = generatePageTitle(data.title);
  const description = data.description || SEO_CONFIG.defaultDescription;
  const keywords = data.keywords?.join(', ') || SEO_CONFIG.keywords.join(', ');
  const image =
    data.image || `${APP_CONFIG.siteUrl}/logo.svg`;
  const url =
    data.url ||
    (typeof window !== 'undefined' ? window.location.href : APP_CONFIG.siteUrl);
  const type = data.type || 'website';
  const robots = data.robots || 'index, follow';

  return {
    // Basic meta tags
    'title': title,
    'description': description,
    'keywords': keywords,
    'author': data.author || 'Al Marsa Intellectual Property Agents',
    
    // Open Graph tags
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'og:site_name': 'Al Marsa IP',
    
    // Twitter Card tags
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:site': '@almarsaip',
    
    // Additional meta tags
    'robots': robots,
    'viewport': 'width=device-width, initial-scale=1.0',
    'theme-color': '#ff6600',
  };
}

export function updateDocumentMeta(data: SEOData = {}): void {
  const { structuredData, ...metaData } = data;
  const metaTags = generateMetaTags(metaData);
  
  // Update document title
  document.title = metaTags.title;
  
  // Update or create meta tags
  Object.entries(metaTags).forEach(([name, content]) => {
    if (name === 'title') return; // Skip title as it's handled above
    
    // Check for existing meta tag
    let metaTag = document.querySelector(`meta[name="${name}"]`) ||
                  document.querySelector(`meta[property="${name}"]`);
    
    if (metaTag) {
      metaTag.setAttribute('content', content);
    } else {
      // Create new meta tag
      metaTag = document.createElement('meta');
      
      // Use property for og: and twitter: tags, name for others
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        metaTag.setAttribute('property', name);
      } else {
        metaTag.setAttribute('name', name);
      }
      
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  });

  const canonicalUrl = metaTags['og:url'];
  if (canonicalUrl) {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }

  const structuredDataId = 'seo-structured-data';
  if (structuredData) {
    const scriptContent = JSON.stringify(structuredData, null, 2);
    let scriptTag = document.getElementById(structuredDataId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', structuredDataId);
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = scriptContent;
  } else {
    const existingScript = document.getElementById(structuredDataId);
    if (existingScript) {
      existingScript.remove();
    }
  }
}

export function buildCanonicalUrl(path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${APP_CONFIG.siteUrl}${normalizedPath}`;
}
