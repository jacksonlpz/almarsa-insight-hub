// Application constants and configuration
export const COMPANY_INFO = {
  name: "Al Marsa Intellectual Property Agents",
  shortName: "Al Marsa",
  tagline: "Intellectual Property Agents",
  description: "Leading intellectual property agents providing comprehensive protection for your innovations and brands across 150+ jurisdictions worldwide.",
  
  // Contact Information
  phone: "+965 9009 5960",
  email: "info@almarsapro.com",
  address: {
    street: "Jaber Al Mubarak St Block 2, Bldg. No:29",
    floor: "Floor 3",
    building: "Al Sharqia Towers",
    area: "Sharq",
    country: "Kuwait"
  },
  
  // Business Hours
  businessHours: {
    weekdays: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    weekend: "Friday: Closed"
  },
  
  // Social Media
  social: {
    linkedin: "https://linkedin.com/company/al-marsa-intellectual-property",
    twitter: "https://x.com/almarsaip",
    website: "https://almarsapro.com"
  },
  
  // Legal
  legal: {
    privacyEmail: "privacy@almarsapro.com",
    legalEmail: "legal@almarsapro.com",
    supportEmail: "support@almarsapro.com"
  }
};

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'https://api.almarsapro.com',
  timeout: 30000,
  retries: 3
};

export const APP_CONFIG = {
  siteName: "Al Marsa IP",
  siteUrl: "https://almarsapro.com",
  language: "en",
  region: "KW",
  
  // Feature flags
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    chat: import.meta.env.VITE_ENABLE_CHAT === 'true',
    newsletter: true,
    blog: true
  }
};

export const SEO_CONFIG = {
  defaultTitle: "Al Marsa - Intellectual Property Agents",
  titleTemplate: "%s | Al Marsa IP",
  defaultDescription: "Professional IP services across 150+ jurisdictions. Expert IP protection, patent applications, trademark registration, and brand protection solutions.",
  keywords: [
    "intellectual property",
    "trademark registration",
    "patent applications",
    "IP protection",
    "Kuwait IP services",
    "GCC intellectual property",
    "brand protection"
  ]
};

// Design Tokens
export const COLORS = {
  primary: '#E75D2B',
  navyDeep: '#1A202C',
  navyLight: '#2D3748',
  grayWarm: '#F7FAFC',
  background: '#FFFFFF',
  foreground: '#1A202C',
  muted: '#718096',
  border: '#E2E8F0',
  destructive: '#E53E3E'
} as const;

// Animation Timing
export const ANIMATION_TIMING = {
  carouselDelay: 4000,
  toastDuration: 5000,
  scrollRevealDelay: 100,
  transitionDuration: 300
} as const;

// Map Configuration
export const MAP_CONFIG = {
  // Al Sharqia Towers, Sharq, Kuwait - Actual coordinates
  coordinates: {
    lat: 29.3741,
    lng: 47.9920
  },
  zoom: 16,
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.2!2d47.9920!3d29.3741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzI2LjgiTiA0N8KwNTknMzEuMiJF!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw&q=Al+Sharqia+Towers,+Jaber+Al+Mubarak+St+Block+2,+Bldg.+No:29,+Floor+3,+Sharq+Kuwait'
} as const;

// Form Validation Rules
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 100
  },
  email: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  },
  message: {
    minLength: 10,
    maxLength: 1000
  },
  phone: {
    pattern: /^[\d\s()+-]+$/
  }
} as const;

// External Resources
export const EXTERNAL_LINKS = {
  asiaIP: 'https://asiaiplaw.com',
  boxCom: 'https://app.box.com/s/',
  ministries: {
    bahrain: 'https://www.moic.gov.bh/en',
    qatar: 'https://www.moci.gov.qa/en/',
    saudiArabia: 'https://www.saip.gov.sa/en/',
    kuwait: 'https://www.moci.gov.kw/en/',
    uae: 'https://www.moet.gov.ae/en/home',
    oman: 'https://tejarah.gov.om/en'
  }
} as const;