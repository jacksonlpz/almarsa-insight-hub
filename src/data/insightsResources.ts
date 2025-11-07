import type { TranslationFunction } from "@/lib/i18n";

export type ResourceMetric = {
  value: string;
  label: string;
  icon: string;
};

export const getResourceMetrics = (t: TranslationFunction): ResourceMetric[] => {
  return [
    {
      value: t('insights.metrics.guides.value'),
      label: t('insights.metrics.guides.label'),
      icon: "advantage-insight" as const,
    },
    {
      value: t('insights.metrics.modules.value'),
      label: t('insights.metrics.modules.label'),
      icon: "strategy" as const,
    },
    {
      value: t('insights.metrics.submissions.value'),
      label: t('insights.metrics.submissions.label'),
      icon: "defence" as const,
    }
  ];
};

export type FeaturedResource = {
  title: string;
  description: string;
  category: string;
  type: string;
  topic: string;
  icon: string;
  highlights: string[];
  pdfUrl: string;
};

export const getFeaturedResources = (t: TranslationFunction): FeaturedResource[] => {
  return [
    {
      title: t('insights.resources.omanIndustrialDesign.title'),
      description: t('insights.resources.omanIndustrialDesign.description'),
      category: t('insights.categories.legal'),
      type: t('insights.actions.download'),
      topic: t('insights.resources.omanIndustrialDesign.topic'),
      icon: "patent" as const,
      highlights: [
        t('insights.resources.omanIndustrialDesign.highlights.0'),
        t('insights.resources.omanIndustrialDesign.highlights.1'),
        t('insights.resources.omanIndustrialDesign.highlights.2'),
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    },
    {
      title: t('insights.resources.omanPatent.title'),
      description: t('insights.resources.omanPatent.description'),
      category: t('insights.categories.legal'),
      type: t('insights.actions.download'),
      topic: t('insights.resources.omanPatent.topic'),
      icon: "patent" as const,
      highlights: [
        t('insights.resources.omanPatent.highlights.0'),
        t('insights.resources.omanPatent.highlights.1'),
        t('insights.resources.omanPatent.highlights.2'),
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    },
    {
      title: t('insights.resources.omanTrademark.title'),
      description: t('insights.resources.omanTrademark.description'),
      category: t('insights.categories.legal'),
      type: t('insights.actions.download'),
      topic: t('insights.resources.omanTrademark.topic'),
      icon: "trademark" as const,
      highlights: [
        t('insights.resources.omanTrademark.highlights.0'),
        t('insights.resources.omanTrademark.highlights.1'),
        t('insights.resources.omanTrademark.highlights.2'),
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    }
  ];
};

export type InsightResource = {
  title: string;
  description: string;
  category: string;
  type: string;
  topic: string;
  icon: string;
  pdfUrl: string;
};

export const ALL_INSIGHTS: InsightResource[] = [
  {
    title: "Kuwait Industrial Design Law",
    description: "Complete legal framework governing industrial design protection in Kuwait.",
    category: "Legal",
    type: "PDF",
    topic: "Industrial Design",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/z4lkc0hnocaif6ugq0ebl53qtqo6uoqj",
  },
  {
    title: "Kuwait Patent Law",
    description: "Comprehensive patent legislation and regulations for Kuwait jurisdiction.",
    category: "Legal",
    type: "PDF",
    topic: "Patent Law",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/lgbhury7k32scqasl357wty8pwp0sd54",
  },
  {
    title: "Kuwait Trademark Law",
    description: "Official trademark law and procedural requirements for Kuwait trademark registration.",
    category: "Legal",
    type: "PDF",
    topic: "Trademark Law",
    icon: "trademark" as const,
    pdfUrl: "https://app.box.com/s/ga6nwfqhzjvm6tyjvu4lkyjrdxnig3n8",
  },
  {
    title: "Bahrain Industrial Design Law",
    description: "Complete legal framework governing industrial design protection in Bahrain.",
    category: "Legal",
    type: "PDF",
    topic: "Industrial Design",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/5a0ktbgzhlsm9vt61lsg34jg3s000fa1",
  },
  {
    title: "Bahrain Patent Law",
    description: "Comprehensive patent legislation and regulations for Bahrain jurisdiction.",
    category: "Legal",
    type: "PDF",
    topic: "Patent Law",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf",
  },
  {
    title: "Bahrain Trademark Law",
    description: "Official trademark law and procedural requirements for Bahrain trademark registration.",
    category: "Legal",
    type: "PDF",
    topic: "Trademark Law",
    icon: "trademark" as const,
    pdfUrl: "https://app.box.com/s/57obz1s7et6582she8mtvc9vs57g3riu",
  },
  {
    title: "Qatar Industrial Design Law",
    description: "Complete legal framework governing industrial design protection in Qatar.",
    category: "Legal",
    type: "PDF",
    topic: "Industrial Design",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d",
  },
  {
    title: "Qatar Patent Law",
    description: "Comprehensive patent legislation and regulations for Qatar jurisdiction.",
    category: "Legal",
    type: "PDF",
    topic: "Patent Law",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/9du5aa5tdtlc14fr1863fvfg1fdtlc52",
  },
  {
    title: "Qatar Trademark Law",
    description: "Official trademark law and procedural requirements for Qatar trademark registration.",
    category: "Legal",
    type: "PDF",
    topic: "Trademark Law",
    icon: "trademark" as const,
    pdfUrl: "https://app.box.com/s/k1gbqhk5o71k52nwmta3rqi1c9e10s0n",
  },
  {
    title: "Saudi Arabia Industrial Design Law",
    description: "Complete legal framework governing industrial design protection in Saudi Arabia.",
    category: "Legal",
    type: "PDF",
    topic: "Industrial Design",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf",
  },
  {
    title: "United Arab Emirates Industrial Design Law",
    description: "Complete legal framework governing industrial design protection in the UAE.",
    category: "Legal",
    type: "PDF",
    topic: "Industrial Design",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/fwp2zjskgnanomebd81apummnlv5wk88",
  },
  {
    title: "United Arab Emirates Patent Law",
    description: "Comprehensive patent legislation and regulations for UAE jurisdiction.",
    category: "Legal",
    type: "PDF",
    topic: "Patent Law",
    icon: "patent" as const,
    pdfUrl: "https://app.box.com/s/ampkce9rqlibhc3dhb680qmdesi0vz99",
  },
  {
    title: "United Arab Emirates Trademark Law",
    description: "Official trademark law and procedural requirements for UAE trademark registration.",
    category: "Legal",
    type: "PDF",
    topic: "Trademark Law",
    icon: "trademark" as const,
    pdfUrl: "https://app.box.com/s/5clbaem72dfvlxox3e6nzr1db1vymlkh",
  }
];

export type LearningModule = {
  title: string;
  videoUrl: string;
  summary: string;
  howTo: string[];
  didYouKnow: string;
};

export const LEARNING_MODULES: LearningModule[] = [
  {
    title: "What is a Trademark? Protecting Your Brand Identity",
    videoUrl: "https://www.youtube.com/embed/Lq4Bp4oSkj8?rel=0",
    summary:
      "Al Marsa’s explainer shows how trademarks serve as your brand’s legal fingerprint, the difference between patents and marks, and the variety of signals you can protect—from names and logos to sounds and motion marks.",
    howTo: [
      "List the brand elements you rely on (names, logos, slogans, sounds) and decide which should be filed as word, design, or non-traditional marks.",
      "Run clearance searches and gather acceptable specimens that prove use before submitting an application to strengthen your examination footing.",
      "Plan maintenance: calendar renewals, monitor use, and aim for incontestable status so protection endures alongside your brand growth."
    ],
    didYouKnow:
      "Did you know? Unlike patents, trademarks can last indefinitely—so long as you keep using them and meeting renewal deadlines, they become compounding brand assets."
  },
  {
    title: "Trademark Basics: 3 Steps to Secure Your Brand",
    videoUrl: "https://www.youtube.com/embed/Cva5A5xu06g?rel=0",
    summary:
      "This Al Marsa primer walks through what can be trademarked, why distinctiveness matters, and the three foundational actions that keep imitators from eroding your brand value.",
    howTo: [
      "Audit the names, logos, slogans, colours, and packaging elements that make you recognisable and confirm each is distinctive rather than generic.",
      "Search your trademark office database (such as USPTO.gov) to confirm the mark is available before you invest in marketing or filing fees.",
      "Prepare a clean depiction of the mark, list the correct goods and services, and submit the application so protection is locked in early."
    ],
    didYouKnow:
      "Did you know? A trademark becomes far harder to challenge once it is both registered and continuously used—verified protection keeps competitors from piggybacking on your reputation."
  },
  {
    title: "Patent vs. Trademark vs. Copyright",
    videoUrl: "https://www.youtube.com/embed/hfwbVpkEYtc?rel=0",
    summary:
      "Al Marsa compares the three pillars of intellectual property, clarifying how patents secure inventions, trademarks protect brand identity, and copyrights safeguard creative expression.",
    howTo: [
      "Classify each asset you own—technology, branding, or creative output—and map it to the correct IP right before investing in protection.",
      "Track lifecycles: patents run roughly 20 years, trademarks last indefinitely with use, and copyrights follow the creator’s life plus 70 years in many jurisdictions.",
      "Build a protection plan that layers these rights, ensuring inventions, brand touchpoints, and creative collateral each have coverage." 
    ],
    didYouKnow:
      "Did you know? These rights complement rather than replace one another—many successful products rely on all three to protect functionality, market identity, and storytelling."
  }
];

export type CountryGuideResource = {
  label: string;
  href: string;
};

export type CountryDetailedGuide = {
  title: string;
  updated: string;
  sections: {
    heading: string;
    points: string[];
  }[];
  downloadHref?: string;
};

export type CountryGuide = {
  country: string;
  summary: string;
  resources: CountryGuideResource[];
  trademarkGuide?: CountryDetailedGuide;
  patentGuide?: CountryDetailedGuide;
  designGuide?: CountryDetailedGuide;
};

export const COUNTRY_GUIDES: CountryGuide[] = [
  {
    country: "United Arab Emirates",
    summary: "Trademark, patent, and industrial design filing sequences with milestone timelines across the Emirates.",
    designGuide: {
      title: "UAE Design Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "Design Applications — Required at Filing",
          points: [
            "Complete applicant and designer details including full name, complete address, and nationality.",
            "Provide the design title with the initial submission.",
            "Include visual representations: one copy for two-dimensional designs and one copy of each view for three-dimensional designs."
          ]
        },
        {
          heading: "Design Applications — Within 90 Days",
          points: [
            "⚠️ The 90-day deadline for formal documents is strictly non-extendible.",
            "Power of Attorney — notarized.",
            "Extract from Commercial Register or Memorandum of Association for corporate applicants — notarized.",
            "Deed of Assignment signed by the designer when the applicant differs — notarized.",
            "Certified copy of the priority document when claiming priority."
          ]
        },
        {
          heading: "Assignment Applications",
          points: [
            "Power of Attorney executed by the assignee — notarized.",
            "Deed of Assignment executed by both parties — notarized.",
            "Certificate of Incorporation of the assignee — notarized."
          ]
        },
        {
          heading: "Registered User/License Agreement Applications",
          points: [
            "Power of Attorney executed by the licensee — notarized.",
            "License Agreement executed by both parties — notarized."
          ]
        },
        {
          heading: "Change of Name/Address Applications",
          points: [
            "Power of Attorney in the new name and/or address — notarized.",
            "Certificate proving the change issued by the local competent authority — notarized."
          ]
        },
        {
          heading: "Important Filing Notes",
          points: [
            "Stage 1 (at filing): submit applicant and designer information, design title, and visual representation.",
            "Stage 2 (within 90 days): submit all formal legal documents, supporting documentation, and priority claims.",
            "The 90-day period is strictly non-extendible; missing it risks abandonment, so plan notarizations in advance."
          ]
        },
        {
          heading: "Design Representation Guidelines",
          points: [
            "Two-dimensional designs: provide one clear copy showing the complete design.",
            "Three-dimensional designs: submit sufficient views (front, back, side, top, bottom) to fully represent the design.",
            "Ensure images are clear and of sufficient quality for examination."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Document | When Required | Notarization",
            "Applicant/Designer details | At filing | No",
            "Design title | At filing | No",
            "Visual representation | At filing | No",
            "Power of Attorney | Within 90 days | Yes",
            "Commercial Register Extract | Within 90 days | Yes",
            "Deed of Assignment | Within 90 days | Yes",
            "Priority document | Within 90 days | Certified copy"
          ]
        },
        {
          heading: "Key Points Summary",
          points: [
            "Two-stage filing process with a strict 90-day deadline for formal documents.",
            "Basic information is required at filing; formal documents follow within 90 days.",
            "All legal documents must be notarized and priority evidence certified.",
            "Multiple views are mandatory for three-dimensional designs.",
            "Non-extendible deadline for supporting documents requires proactive planning.",
            "Priority must be claimed within 90 days with certified documentation."
          ]
        },
        {
          heading: "Timeline Overview",
          points: [
            "Milestone | Deadline",
            "Initial filing (items 1, 2, 5) | Filing date",
            "Formal documents (items 3, 4, 6, 7) | 90 days from filing (strict)"
          ]
        },
        {
          heading: "Contact Our Specialists",
          points: [
            "For assistance with UAE design registration and filing procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/fwp2zjskgnanomebd81apummnlv5wk88"
    },
    trademarkGuide: {
      title: "UAE Trademark Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "Applicant Information",
          points: [
            "Provide the applicant's full legal name.",
            "Submit a complete street address including building, area, city, and country.",
            "Generic addresses are no longer accepted; the UAE Trademark Office requires detailed street addresses."
          ]
        },
        {
          heading: "Power of Attorney",
          points: [
            "Power of Attorney must be executed by the applicant, notarized by a Notary Public, and legalized up to the UAE Consulate.",
            "Submit the legalized Power of Attorney with the application or file an undertaking to deliver the original within 90 days of filing.",
            "The 90-day deadline for submitting the legalized Power of Attorney is strictly non-extendable."
          ]
        },
        {
          heading: "List of Goods and Services",
          points: [
            "Provide a clear specification of the goods and/or services to be protected.",
            "Classify the goods and services according to the Nice Classification system."
          ]
        },
        {
          heading: "Priority Document (if applicable)",
          points: [
            "Supply a certified copy of the priority application; scanned email submission is acceptable.",
            "Include a simple English translation when the priority document is not in English.",
            "Priority must be claimed within six months of the first filing in a Paris Convention member state."
          ]
        },
        {
          heading: "Key Points Summary",
          points: [
            "Full street address details are mandatory for all applicants.",
            "Power of Attorney must be notarized and legalized to UAE Consulate level.",
            "A non-extendable 90-day grace period applies to late Power of Attorney submissions.",
            "Priority claims must be lodged within six months of the first filing.",
            "Priority documents can be emailed as certified scans."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Applicant details: full name and complete address due at filing.",
            "Power of Attorney: notarized and legalized, due at filing or within 90 days of filing.",
            "Goods and services list: classified specification required at filing.",
            "Priority document: certified copy with translation, due within six months of the first filing."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "Contact the Al Marsa IP specialist team for tailored assistance with UAE trademark registration."
          ]
        }
      ]
    },
    patentGuide: {
      title: "UAE Patent Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "Patent Applications",
          points: [
            "Power of Attorney notarized.",
            "Extract from Commercial Register or Memorandum of Association notarized.",
            "Deed of Assignment signed by the inventor or designer if the applicant differs, notarized.",
            "Certified copy of the priority document when claiming priority."
          ]
        },
        {
          heading: "Assignment Applications",
          points: [
            "Power of Attorney executed by the assignee, notarized.",
            "Deed of Assignment executed by both parties, notarized.",
            "Certificate of Incorporation of the assignee, notarized."
          ]
        },
        {
          heading: "Registered User or License Agreements",
          points: [
            "Power of Attorney executed by the licensee, notarized.",
            "License Agreement executed by both parties, notarized."
          ]
        },
        {
          heading: "Change of Name or Address",
          points: [
            "Power of Attorney in the new name or address, notarized.",
            "Certificate evidencing the change issued by the local competent authority of the domicile, notarized."
          ]
        },
        {
          heading: "Agency Agreements",
          points: [
            "Power of Attorney notarized.",
            "For individual merchants submit two copies each of the commercial permit, commercial register entry, agency agreement legalized up to the UAE Consulate, notarized Arabic translation when required, agent identification card, notarized Powers of Attorney, and declarations.",
            "For companies provide all individual merchant documents plus extracts for all partners or certificates confirming national status, and two notarized copies of the Memorandum of Association and Articles of Incorporation."
          ]
        },
        {
          heading: "Important Submission Notes",
          points: [
            "Original documents must be presented for verification and checked against submitted copies.",
            "Applications must be filed in duplicate with each copy placed in a separate file.",
            "All notarizations must be properly completed and agency agreements require UAE Consulate legalization.",
            "Non-Arabic documents require notarized Arabic translations."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Patent applications: notarized Power of Attorney, Commercial Register Extract, Deed of Assignment, and priority document as applicable.",
            "Assignments: notarized Power of Attorney, Deed of Assignment, and Certificate of Incorporation.",
            "Licenses: notarized Power of Attorney and License Agreement.",
            "Name or address changes: notarized Power of Attorney and official certificate of change.",
            "Agency agreements: notarized Power of Attorney, commercial documents, and consulate-legalized agency agreement."
          ]
        },
        {
          heading: "Key Points Summary",
          points: [
            "All formal documents require notarization.",
            "Agency agreements must be legalized up to the UAE Consulate.",
            "Original documents should be available for verification.",
            "Duplicate submissions in separate files are mandatory.",
            "Companies must supply partner documentation in addition to agency requirements.",
            "Non-Arabic documents need notarized translations."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with UAE patent filing and related procedures, connect with the Al Marsa IP specialists."
          ]
        }
      ]
    },
    resources: [
      { label: "Trademark guide", href: "https://app.box.com/s/5clbaem72dfvlxox3e6nzr1db1vymlkh" },
      { label: "Patent guide", href: "https://app.box.com/s/ampkce9rqlibhc3dhb680qmdesi0vz99" },
      { label: "Design guide", href: "https://app.box.com/s/fwp2zjskgnanomebd81apummnlv5wk88" }
    ]
  },
  {
    country: "Saudi Arabia",
    summary: "Industrial design enforcement checkpoints and registration stages covering the Kingdom's IP authority workflows.",
    designGuide: {
      title: "Saudi Arabia Trademark Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "Trademark/Service Mark Applications",
          points: [
            "Power of Attorney in the applicant's name: scanned colored copy with full name and address, Apostille certification or Saudi Consulate legalization required.",
            "List of goods/services selected from NICE Classification 12th Edition (2023).",
            "Trademark representation: one high-quality JPEG image.",
            "Priority document (if claimed): scanned colored or electronic copy filed within 6 months of foreign filing, simple English translation required for non-English documents."
          ]
        },
        {
          heading: "Collective and Quality Mark Applications",
          points: [
            "Power of Attorney in the applicant's name with Apostille certification or Saudi Consulate legalization.",
            "Goods/services list compliant with NICE Classification 12th Edition (2023).",
            "Trademark representation: one high-quality JPEG image.",
            "Articles of Association: two certified copies with Apostille or Saudi Consulate legalization.",
            "Control system documentation: two certified copies covering control/examination procedures, conditions, and usage method with required legalization."
          ]
        },
        {
          heading: "Renewal Applications",
          points: [
            "Power of Attorney in the owner's name matching registry records, Apostille or Saudi Consulate legalization required.",
            "Copy of registration certificate when not managed through your firm."
          ]
        },
        {
          heading: "Assignment Applications",
          points: [
            "Power of Attorney in the assignee's name with complete address, legalized via Apostille or Saudi Consulate.",
            "Deed of Assignment executed by the assignor with required legalization.",
            "Registration certificate copies when filings are not handled directly."
          ]
        },
        {
          heading: "Merger Applications",
          points: [
            "Power of Attorney in the new owner's name with full details and required legalization.",
            "Merger document: scanned colored copy with Apostille or Saudi Consulate legalization.",
            "Registration certificate copies when not managed by your office."
          ]
        },
        {
          heading: "License Applications",
          points: [
            "Power of Attorney in the licensee's name with Apostille or Saudi Consulate legalization.",
            "License Agreement executed by licensor and licensee, legalized accordingly.",
            "Registration certificate copies when relevant filings are external."
          ]
        },
        {
          heading: "Change of Name Applications",
          points: [
            "Power of Attorney in the new owner's name reflecting updated details, Apostille or Saudi Consulate legalization required.",
            "Change of name document: legalized scanned colored copy.",
            "Registration certificate copies when not managed internally."
          ]
        },
        {
          heading: "Change of Address Applications",
          points: [
            "Power of Attorney in the owner's name with new address and required legalization.",
            "Registration certificate copies when not handled through your firm."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "All formal documents require Apostille certification or Saudi Consulate legalization and may be submitted as colored scans.",
            "Applicant or owner information must be complete and accurate across all filings.",
            "Saudi Arabia follows NICE Classification 12th Edition (2023) for goods and services.",
            "Trademark images must be high-quality JPEG files with clear resolution.",
            "Priority claims must be filed within 6 months and supported by certified, translated documents."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Trademark/Service Mark Applications | Power of Attorney | Goods/services list, trademark image, priority document if applicable | Legalization required",
            "Collective/Quality Mark Applications | Power of Attorney | Goods/services list, trademark image, Articles of Association, control system documentation | Legalization required",
            "Renewal Applications | Power of Attorney | Registration certificate | Legalization required",
            "Assignment Applications | Power of Attorney (assignee) | Deed of Assignment, registration certificate | Legalization required",
            "Merger Applications | Power of Attorney (new owner) | Merger document, registration certificate | Legalization required",
            "License Applications | Power of Attorney (licensee) | License Agreement, registration certificate | Legalization required",
            "Change of Name Applications | Power of Attorney (new name) | Change document, registration certificate | Legalization required",
            "Change of Address Applications | Power of Attorney (owner) | Registration certificate | Legalization required"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "All Powers of Attorney require Apostille certification or Saudi Consulate legalization.",
            "Colored scanned copies are acceptable provided details are complete and legible.",
            "Registration certificates are necessary for post-registration actions when prior filings were external.",
            "Priority claims carry a strict 6-month deadline from the foreign filing date.",
            "Always rely on NICE Classification 12th Edition (2023) for goods and services descriptions."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Saudi Arabia trademark registration and related procedures, contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf"
    },
    resources: [
      { label: "Design guide", href: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf" }
    ]
  },
  {
    country: "Qatar",
    summary: "Madrid accession updates, examination timelines, and required documentation for trademarks, patents, and designs.",
    trademarkGuide: {
      title: "Qatar Trademark Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "Trademark/Service Mark Applications",
          points: [
            "Power of Attorney legalized up to the Qatar Consulate from the applicant's country.",
            "Business documentation proving the applicant's right to the trademark: Chamber of Commerce document, Commercial Register extract, or eligible governmental document.",
            "Submission must confirm the individual applicant operates a business or holds rights to the mark."
          ]
        },
        {
          heading: "Collective Mark Applications",
          points: [
            "Power of Attorney legalized up to the Qatari Consulate or any Arab Consulate.",
            "Certificate of Incorporation or Commercial Register extract (simple copy).",
            "Trademark prints: five copies of the mark.",
            "List of goods/services with at least one item excluded per class; full class coverage is not permitted.",
            "Applicant details: name, address, nationality, activity, legal status, and nature of business.",
            "Priority document copy when priority is claimed."
          ]
        },
        {
          heading: "Renewal of Trademark/Service Mark Registrations",
          points: [
            "Power of Attorney legalized up to the Qatari Consulate or any Arab Consulate when not previously filed.",
            "Applicant information: name, address, activity, nationality, and nature of business.",
            "Existing trademark registration number."
          ]
        },
        {
          heading: "Assignment Applications",
          points: [
            "Power of Attorney executed by the assignee and legalized up to the Qatari or other Arab Consulate.",
            "Deed of Assignment signed by both parties, authenticated and legalized up to the Qatar Consulate.",
            "Certificate of Incorporation or Commercial Register extract for the assignee (simple copy acceptable)."
          ]
        },
        {
          heading: "Registered User / License Agreement Applications",
          points: [
            "Power of Attorney executed by the licensee, legalized up to the Qatari Consulate or any Arab Consulate.",
            "License Agreement signed by both parties, authenticated and legalized up to the Qatari Consulate.",
            "Certificate of Incorporation or Commercial Register extract for the registered user (simple copy acceptable)."
          ]
        },
        {
          heading: "Change of Name/Address Applications",
          points: [
            "Power of Attorney in the new name and/or address, legalized up to the Qatari Consulate or any Arab Consulate.",
            "Official certificate evidencing the change."
          ]
        },
        {
          heading: "Amendment of Trademark Applications",
          points: [
            "Power of Attorney legalized up to the Qatari Consulate or any Arab Consulate and stamped with the company seal.",
            "Authenticated certificate demonstrating the amendment."
          ]
        },
        {
          heading: "Agency Agreements",
          points: [
            "Power of Attorney legalized up to the Qatari Consulate or any Arab Consulate.",
            "Agency Agreement executed by both principal and agent, legalized up to the Qatari Consulate.",
            "Agreement must specify parties' names and nationalities, covered goods/services, rights and liabilities, principal obligations, and profit or commission allocation."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Primary legalization route is through the Qatar Consulate; legalization via any Arab Consulate is accepted when a Qatar Consulate is unavailable.",
            "Class coverage cannot include all goods/services in a class; at least one item must be excluded.",
            "Individual applicants must submit business proof confirming their right to the mark.",
            "Collective mark filings require five trademark prints and comprehensive applicant details.",
            "Authenticated agreements and deeds must undergo full legalization prior to submission."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Trademark/Service Mark Applications | Power of Attorney | Business documentation | Qatar Consulate legalization",
            "Collective Mark Applications | Power of Attorney | Certificate of Incorporation, five trademark prints, goods list, applicant details, priority document if claimed | Qatar or Arab Consulate legalization",
            "Renewal Applications | Power of Attorney (if new) | Applicant information, trademark number | Qatar or Arab Consulate legalization",
            "Assignment Applications | Power of Attorney (assignee) | Deed of Assignment, Certificate of Incorporation | Qatar or Arab Consulate legalization",
            "License Applications | Power of Attorney (licensee) | License Agreement, Certificate of Incorporation | Qatar or Arab Consulate legalization",
            "Change of Name/Address Applications | Power of Attorney | Official change certificate | Qatar or Arab Consulate legalization",
            "Amendment Applications | Power of Attorney (sealed) | Amendment certificate | Qatar or Arab Consulate legalization",
            "Agency Agreements | Power of Attorney | Agency Agreement with specified terms | Qatar or Arab Consulate legalization"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Legalization via Arab Consulate is acceptable when Qatar Consulate services are unavailable.",
            "Ensure at least one item per class is excluded to comply with Qatar's class coverage limitation.",
            "Individual applicants must provide business proof to validate filing rights.",
            "Five trademark prints are mandatory for collective mark applications.",
            "Deeds, licenses, and agency agreements require full authentication and legalization, and amendment filings demand a sealed Power of Attorney."
          ]
        },
        {
          heading: "Legalization Hierarchy",
          points: [
            "Preferred legalization: Qatar Consulate within the applicant's jurisdiction.",
            "Alternative legalization: Any Arab Consulate when the Qatar Consulate is unavailable.",
            "Applies to all Powers of Attorney, deeds, agreements, and formal documents submitted in Qatar."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Qatar trademark registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/k1gbqhk5o71k52nwmta3rqi1c9e10s0n"
    },
    patentGuide: {
      title: "Qatar Patent Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "Filing Requirements for Patent Applications",
          points: [
            "Power of Attorney legalized up to the Qatar Consulate; can be submitted after filing.",
            "Complete patent specifications including abstract and claims in English, with Arabic translation allowed later.",
            "Include one complete set of drawings covering the invention when applicable."
          ]
        },
        {
          heading: "Submission Flexibility",
          points: [
            "Documents required at filing: complete English specifications and all drawings.",
            "Documents permitted later: legalized Power of Attorney and Arabic translation of specifications."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Power of Attorney must undergo Qatar Consulate legalization following standard procedures.",
            "Specifications, abstract, and claims must be filed in English with Arabic translations supplied subsequently.",
            "Technical documentation must contain full description, abstract, claims, and comprehensive drawings illustrating the invention."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Power of Attorney | N/A | Submit post-filing if needed | Legalization at Qatar Consulate",
            "Abstract | English and Arabic | English at filing, Arabic later | N/A",
            "Claims | English and Arabic | English at filing, Arabic later | N/A",
            "Complete Specifications | English and Arabic | English at filing, Arabic later | N/A",
            "Drawings | N/A | File with application when applicable | N/A"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Flexible submission allows swift filing while satisfying delayed formalities.",
            "English specifications are mandatory for initial filing and must be complete.",
            "Arabic translations and legalized Power of Attorney remain compulsory despite deferred timing.",
            "All drawings related to the invention must be included from the outset."
          ]
        },
        {
          heading: "Filing Strategy",
          points: [
            "Immediate filing requirements: complete English specifications and all relevant drawings.",
            "Post-filing submissions: Qatar-consulate-legalized Power of Attorney and Arabic translation of specifications."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Qatar patent registration and filing procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/9du5aa5tdtlc14fr1863fvfg1fdtlc52"
    },
    designGuide: {
      title: "Qatar Design Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "Filing Requirements for Design Applications",
          points: [
            "Owner details: full name, complete address, nationality, nature of business, and other relevant particulars.",
            "Design identification: title of the design, particulars of home registration, and disclosure of other registrations.",
            "Design description: concise English summary describing the design's features."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Owner information must include comprehensive legal and business details.",
            "Report existing home-country or foreign registrations to document prior rights.",
            "Provide a clear English technical description highlighting distinctive design characteristics."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Owner Details | Name, address, nationality, business nature | English",
            "Design Title | Full title or name of the design | English",
            "Registration Particulars | Home and other jurisdiction registrations | English",
            "Design Description | Summary of distinctive features | English"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Design protection relies on cautionary notice filings without formal legalization requirements.",
            "English language is mandatory for all submissions.",
            "Home registration evidence strengthens ownership claims.",
            "Complete owner information is essential to validate the notice.",
            "Ensure the description aligns with any associated visual materials."
          ]
        },
        {
          heading: "Filing Considerations",
          points: [
            "Pre-filing preparation: compile registration history, confirm accurate owner data, and draft an English description.",
            "Design description guidelines: keep content concise yet comprehensive, emphasize distinctive elements, use precise language, and align text with visual representations."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Qatar design registration and cautionary notice filing, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d"
    },
    resources: [
      { label: "Trademark guide", href: "https://app.box.com/s/k1gbqhk5o71k52nwmta3rqi1c9e10s0n" },
      { label: "Patent guide", href: "https://app.box.com/s/9du5aa5tdtlc14fr1863fvfg1fdtlc52" },
      { label: "Design guide", href: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d" }
    ]
  },
  {
    country: "Bahrain",
    summary: "Filing prerequisites, priority recognition, and examination timelines across Bahrain's IP registries.",
    trademarkGuide: {
      title: "Bahrain Trademark Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Trademark/Service Mark Applications",
          points: [
            "Power of Attorney signed by the applicant's authorized signatory, legalized up to the Bahraini Consulate or authenticated by Apostille.",
            "Provide one supporting document only: certified priority document, legalized Certificate of Incorporation, Registrar of Companies certificate, Commercial Register extract, or Chamber of Commerce certificate.",
            "Submit complete applicant particulars including name, address, and profession.",
            "Supply clear prints of each trademark as filed.",
            "List international class numbers with detailed goods and/or services."
          ]
        },
        {
          heading: "Late Filing Option",
          points: [
            "Applications may be lodged without legalized documents, provided all required legalizations are submitted within 90 days of the Industrial Property Office examination notification."
          ]
        },
        {
          heading: "Renewal of Trademark Registration",
          points: [
            "Power of Attorney in the registered owner's name legalized up to the Bahraini Consulate or authenticated by Apostille."
          ]
        },
        {
          heading: "Recordal of Assignment",
          points: [
            "Power of Attorney signed by the assignee's authorized signatory with Bahraini Consulate legalization or Apostille.",
            "Deed of Assignment executed by assignor and assignee, legalized up to the Bahraini Consulate or Apostilled."
          ]
        },
        {
          heading: "Recordal of Change of Name and/or Address",
          points: [
            "Power of Attorney reflecting the new name and/or address, duly legalized or Apostilled.",
            "Official certificate evidencing the change, legalized up to the Bahraini Consulate or Apostilled."
          ]
        },
        {
          heading: "Recordal of License Agreement",
          points: [
            "Power of Attorney from the licensor and separate Power of Attorney from the licensee, each legalized up to the Bahraini Consulate or Apostilled.",
            "License Agreement signed by both parties and legalized up to the Bahraini Consulate or Apostilled."
          ]
        },
        {
          heading: "Recordal of Security Interest Agreement",
          points: [
            "Power of Attorney from the registered owner and Power of Attorney from the secured party, both legalized or Apostilled.",
            "Security Interest Agreement (lien) legalized up to the Bahraini Consulate or Apostilled."
          ]
        },
        {
          heading: "Recordal of Merger",
          points: [
            "Power of Attorney signed by the new owner's authorized signatory with required legalization.",
            "Certified merger document notarized and legalized up to the Bahraini Consulate or Apostilled."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Bahrain accepts either Bahraini Consulate legalization or Apostille authentication for all formal documents.",
            "New applications require only one legalized supporting document chosen from the approved list.",
            "A 90-day grace period after IPO notification allows late submission of legalizations, enabling expedited filings.",
            "Dual Powers of Attorney are mandatory for license and security agreement recordals.",
            "Merger documents must be certified prior to legalization."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "New Application | Power of Attorney (applicant) | One supporting document, applicant particulars, mark prints, class/goods list | Bahraini Consulate or Apostille",
            "Renewal | Power of Attorney (owner) | None | Bahraini Consulate or Apostille",
            "Assignment | Power of Attorney (assignee) | Deed of Assignment | Bahraini Consulate or Apostille",
            "Change of Name/Address | Power of Attorney (new details) | Change certificate | Bahraini Consulate or Apostille",
            "License Agreement | Power of Attorney (licensor and licensee) | License Agreement | Bahraini Consulate or Apostille",
            "Security Interest | Power of Attorney (owner and secured party) | Security Agreement | Bahraini Consulate or Apostille",
            "Merger | Power of Attorney (new owner) | Certified merger document | Bahraini Consulate or Apostille"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Apostille authentication is treated the same as consular legalization across all filings.",
            "Only a single supporting document is required for new applications.",
            "Grace-period submissions must still meet legalization standards within 90 days.",
            "License agreements demand separate Powers of Attorney for both parties.",
            "Security interests require authorization from both owner and secured party.",
            "Merger evidence must be certified before legalization.",
            "Applicant particulars are mandatory for every new filing."
          ]
        },
        {
          heading: "Supporting Document Selection Guide",
          points: [
            "Priority-based filings should use a legalized certified copy of the home or foreign registration/application.",
            "Corporate applicants can rely on legalized incorporation or registrar documents.",
            "Business entities may opt for a legalized Chamber of Commerce certificate.",
            "Select the document that is easiest to legalize while meeting ownership proof requirements."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Bahrain trademark registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "/pdfs/bahrain-trademark-law.pdf"
    },
    patentGuide: {
      title: "Bahrain Patent and Utility Model Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Patent and Utility Model Applications",
          points: [
            "Filing documents: English patent specifications in Word format (title, summary, drawings, claims), applicant and inventor details (name, address, nationality), and PCT application copy with priority number and date.",
            "Documents permitted for late filing within 3 months: legalized Power of Attorney, simply signed Deed of Assignment when applicant is not inventor, certificate of deposit for microorganism patents, and legal acquisition documents for genetic resources or traditional knowledge.",
            "Arabic translation of specifications, claims, and drawings must be submitted within 4 months of filing.",
            "Extended late filing option allows Power of Attorney and Deed of Assignment to be filed within 90 days from filing date."
          ]
        },
        {
          heading: "Recordal of Assignment",
          points: [
            "Power of Attorney from the assignee legalized up to the Bahraini Consulate or authenticated by Apostille.",
            "Deed of Assignment executed by both parties with equivalent legalization."
          ]
        },
        {
          heading: "Recordal of License Agreement",
          points: [
            "Power of Attorney from the licensee legalized up to the Bahraini Consulate or Apostilled.",
            "License Agreement signed by owner and licensee with required legalization."
          ]
        },
        {
          heading: "Recordal of Change of Name and/or Address",
          points: [
            "Power of Attorney reflecting new details legalized up to the Bahraini Consulate or Apostilled.",
            "Certificate or document attesting to the change issued by the competent authority and duly legalized."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Legalization accepted via Bahraini Consulate or Apostille across all filings.",
            "3-month grace period for Power of Attorney, Deed of Assignment, certificate of deposit, and genetic resource documentation; 90-day extended period for Power of Attorney and Deed of Assignment when filing without them.",
            "Arabic translation deadline of 4 months covering full specifications, claims, and drawings.",
            "Microorganism-related patents require certificate of deposit; genetic resource patents require legal acquisition documentation."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "New Patent Application | Power of Attorney (applicant) | Specifications (English), PCT copy, applicant/inventor details, Arabic translation | Bahraini Consulate or Apostille | POA within 3 months/90 days, Arabic within 4 months",
            "Assignment | Power of Attorney (assignee) | Deed of Assignment | Bahraini Consulate or Apostille | At recordal",
            "License Agreement | Power of Attorney (licensee) | License Agreement | Bahraini Consulate or Apostille | At recordal",
            "Change of Name/Address | Power of Attorney (new details) | Change certificate | Bahraini Consulate or Apostille | At recordal"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Apostille is accepted as an alternative to consular legalization for all documents.",
            "Scanned copies of Power of Attorney and Deed of Assignment are sufficient; originals are not required.",
            "Dual grace periods: 3 months (or 90 days) for primary documents and 4 months for Arabic translation.",
            "Specifications must be filed in English Word format, and PCT copy with priority details is mandatory.",
            "Licenses require only the licensee's Power of Attorney; assignments require documentation from both parties.",
            "Email submission of clear scanned documents is acceptable."
          ]
        },
        {
          heading: "Filing Strategy Guide",
          points: [
            "Immediate filing: all documents legalized and ready.",
            "3-month grace period filing: key documents pending legalization such as Power of Attorney and Deed of Assignment.",
            "90-day extended grace period: rapid filing using specifications and PCT copy while legalizations are prepared.",
            "4-month translation window: submit English specifications first and follow with Arabic translation."
          ]
        },
        {
          heading: "Document Format Requirements",
          points: [
            "Patent specifications must be Word documents (.doc or .docx).",
            "Power of Attorney, Deed of Assignment, and supporting documents can be PDF scans.",
            "Initial filing requires English-language materials; final submission has both English and Arabic versions.",
            "Supporting documents may remain in original language provided they are legalized or Apostilled."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Bahrain patent registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "/pdfs/bahrain-patent-law.pdf"
    },
    designGuide: {
      title: "Bahrain Industrial Design Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Industrial Design Applications",
          points: [
            "Power of Attorney signed by the applicant's authorized signatory, notarized and legalized up to the Bahraini Consulate or Apostilled.",
            "Applicant information: full name, address, nationality, and occupation or business nature.",
            "Supporting documentation: either legalized Certificate of Incorporation when no priority is claimed or legalized certified priority document filed within 6 months.",
            "Design representations: three copies of each design submitted.",
            "Hague Convention members can rely on Apostille without consular legalization for Power of Attorney and supporting documents."
          ]
        },
        {
          heading: "Recordal of Assignment",
          points: [
            "Power of Attorney from the assignee, notarized and legalized or Apostilled.",
            "Deed of Assignment signed by both parties with equivalent legalization."
          ]
        },
        {
          heading: "Recordal of Change of Name and/or Address",
          points: [
            "Power of Attorney reflecting new details, notarized and legalized or Apostilled.",
            "Certificate attesting to the change issued by the competent authority, duly legalized."
          ]
        },
        {
          heading: "Recordal of License Agreement",
          points: [
            "Power of Attorney from the design owner and separate Power of Attorney from the licensee, each legalized or Apostilled.",
            "License Agreement executed by both parties with required legalization."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Legalization may be completed via Bahraini Consulate or Apostille across all filings.",
            "Priority claims must be lodged within 6 months and supported by a certified priority document.",
            "90-day grace period allows late submission of legalized documents after filing.",
            "Hague Convention applicants benefit from Apostille-only authentication.",
            "Three representations are mandatory for each design, and Powers of Attorney must be notarized."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "New Design Application | Power of Attorney (applicant) | Certificate of Incorporation or priority document, applicant details, three design representations | Bahraini Consulate or Apostille | Hague members: Apostille only",
            "Assignment | Power of Attorney (assignee) | Deed of Assignment | Bahraini Consulate or Apostille | Notarization required",
            "Change of Name/Address | Power of Attorney (new details) | Change certificate from competent authority | Bahraini Consulate or Apostille | Notarization required",
            "License Agreement | Power of Attorney (owner and licensee) | License Agreement | Bahraini Consulate or Apostille | Dual Powers of Attorney required"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Apostille is accepted as an alternative to consular legalization.",
            "Hague Convention members rely solely on Apostille for simplified processing.",
            "90-day grace period supports rapid filings while legalizations are completed.",
            "Priority must be claimed within 6 months when applicable.",
            "Three design representations are obligatory for each design submission.",
            "Powers of Attorney must be notarized for design matters.",
            "License recordals require two Powers of Attorney.",
            "Certificate of Incorporation is only required when no priority is claimed.",
            "Assignment recordals need documentation from both assignor and assignee.",
            "Competent authority certificates are necessary for name/address changes."
          ]
        },
        {
          heading: "Supporting Document Selection Guide",
          points: [
            "Priority applicants should file a certified priority document within 6 months; no Certificate of Incorporation is needed.",
            "Non-priority applicants rely on a legalized Certificate of Incorporation.",
            "Hague Convention members can use Apostille-only authentication for faster processing."
          ]
        },
        {
          heading: "Filing Strategy Guide",
          points: [
            "Standard filing: submit all notarized and legalized documents upfront for a complete application.",
            "90-day grace period filing: lodge design with representations and basic details while finalizing Power of Attorney and supporting documents."
          ]
        },
        {
          heading: "Design Representation Requirements",
          points: [
            "Provide three clear representations per design, using high-resolution images or detailed drawings.",
            "Ensure representations depict identical design features across all views.",
            "Use professional imagery or technical drawings to illustrate key characteristics."
          ]
        },
        {
          heading: "Priority Claim Guidelines",
          points: [
            "Eligibility requires prior foreign filing within 6 months.",
            "Priority provides earlier protection and removes the need for a Certificate of Incorporation.",
            "Certified priority documents must show the application or registration number and filing date with necessary legalization."
          ]
        },
        {
          heading: "Legalization Process Comparison",
          points: [
            "Hague Convention members: Apostille covers all Powers of Attorney and supporting documents for quicker processing.",
            "Non-Hague members: consular legalization up to the Bahraini Consulate remains mandatory.",
            "All applicants may utilize the 90-day grace period for document submissions regardless of legalization path."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Bahrain industrial design registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/5a0ktbgzhlsm9vt61lsg34jg3s000fa1"
    },
    resources: [
      { label: "Trademark guide", href: "https://app.box.com/s/57obz1s7et6582she8mtvc9vs57g3riu" },
      { label: "Patent guide", href: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf" },
      { label: "Design guide", href: "https://app.box.com/s/5a0ktbgzhlsm9vt61lsg34jg3s000fa1" }
    ]
  },
  {
    country: "Oman",
    summary: "Step-by-step submission requirements with renewal checkpoints for Oman filings.",
    trademarkGuide: {
      title: "Oman Trademark Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Trademark/Service Mark Applications",
          points: [
            "Power of Attorney signed by an authorized signatory, notarized, and legalized via Apostille or the Consulate of Oman; a single Power of Attorney can cover multiple filings for the same applicant.",
            "Applicant particulars: full name, nationality, complete address, and occupation or business nature.",
            "Trademark representation: clear print of the mark and, where available, its meaning or translation.",
            "Goods and services: specific listings within relevant International Classes; class headings or filings without detailed goods/services are not accepted.",
            "Corporate evidence: simple copy of Certificate of Incorporation, Commercial Register extract, or Certificate of Good Standing with simple English translation if needed.",
            "Priority document (when claimed): certified copy with simple English translation."
          ]
        },
        {
          heading: "Collective Mark Applications",
          points: [
            "Power of Attorney notarized and legalized via Apostille or Consulate of Oman.",
            "Corporate documentation: simple copy of incorporation, commercial register extract, or certificate of good standing with English translation if required.",
            "Trademark representations: all marks presented on a single sheet.",
            "Certified priority document with simple English translation when priority is invoked."
          ]
        },
        {
          heading: "Renewal of Trademark Registration",
          points: [
            "Power of Attorney (if not already on file) notarized and legalized via Apostille or Consulate of Oman.",
            "Registration particulars including trademark registration number and International Class."
          ]
        },
        {
          heading: "Recordal of Change of Name and Address",
          points: [
            "Power of Attorney notarized and legalized via Apostille or Consulate of Oman.",
            "Original or certified change certificate issued by the Commercial Registry with simple English translation."
          ]
        },
        {
          heading: "Recordal of Assignment",
          points: [
            "Power of Attorney from the assignee legalized via Apostille or Consulate of Oman.",
            "Assignment Deed signed by both parties, identifying trademark number, mark, and class; notarized and legalized accordingly.",
            "Assignee corporate documentation: simple copy of incorporation, commercial register extract, or good standing certificate with English translation when necessary.",
            "Assignee details: full name, address, nationality, and business profession."
          ]
        },
        {
          heading: "Recordal of License Agreement",
          points: [
            "Power of Attorney notarized and legalized via Apostille or Consulate of Oman.",
            "License Agreement signed by licensor and licensee, notarized and legalized via Apostille or Consulate of Oman.",
            "Licensee corporate documentation: simple copy of incorporation, commercial register extract, or good standing certificate with English translation.",
            "Provide registration number and class; license recordals are limited to registered trademarks only."
          ]
        },
        {
          heading: "Recordal of Merger",
          points: [
            "Power of Attorney in the merged entity name, notarized and legalized via Apostille or Consulate of Oman.",
            "Merger document signed by both parties with simple English translation if required, notarized and legalized accordingly."
          ]
        },
        {
          heading: "Recordal of Change of Name Only",
          points: [
            "Power of Attorney notarized and legalized via Apostille or Consulate of Oman.",
            "Original or certified change of name certificate issued by the home registry with simple English translation."
          ]
        },
        {
          heading: "Recordal of Change of Address Only",
          points: [
            "Power of Attorney (not required if the agent is already on record) notarized and legalized via Apostille or Consulate of Oman.",
            "Original or certified change of address certificate with simple English translation."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Legalization accepted via Apostille or Consulate of Oman; choose either method for required documents.",
            "Certificates of Incorporation, Commercial Register extracts, and Certificates of Good Standing only require simple copies with English translations.",
            "One legalized Power of Attorney can cover multiple applications for the same applicant, enabling cost-efficient bulk filings.",
            "Specific goods and services must be listed for each class; class headings or broad descriptions are rejected.",
            "License agreements can only be recorded against registered trademarks.",
            "Priority documents, merger paperwork, and change certificates need certified originals with simple English translations."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "New Application | Power of Attorney (applicant) | Applicant details, trademark print, goods/services list, incorporation document (simple copy), priority document if applicable | Apostille or Oman Consulate | Specific goods/services mandatory; single POA usable across filings",
            "Collective Mark | Power of Attorney (applicant) | Incorporation document (simple copy), all marks on one sheet, priority document if applicable | Apostille or Oman Consulate | Present all marks together",
            "Renewal | Power of Attorney (if new) | Registration number and class | Apostille or Oman Consulate | Omit POA if already filed",
            "Change of Name & Address | Power of Attorney | Commercial Registry change certificate | Apostille or Oman Consulate | Original or certified copy required",
            "Assignment | Power of Attorney (assignee) | Assignment Deed, assignee incorporation document (simple copy), assignee information | Apostille or Oman Consulate | Deed must list trademark number, mark, and class",
            "License Agreement | Power of Attorney | License Agreement, licensee incorporation document (simple copy), registration number and class | Apostille or Oman Consulate | Registered marks only",
            "Merger | Power of Attorney (new entity) | Merger document | Apostille or Oman Consulate | POA must reflect new name",
            "Change of Name Only | Power of Attorney | Home registry change certificate | Apostille or Oman Consulate | Provide original or certified copy",
            "Change of Address Only | Power of Attorney (if required) | Home registry change certificate | Apostille or Oman Consulate | POA optional if agent already on record"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Apostille is acceptable as an alternative to consular legalization for all documents requiring legalization.",
            "Simple copies of incorporation documents suffice with English translation.",
            "English translations are mandatory for all non-English documents; certification of the translation is not required.",
            "Class headings alone are not permissible; detailed specifications must accompany every class.",
            "Collective marks require all representations on one sheet and assignments must identify the mark and class.",
            "Merger recordals require the Power of Attorney to show the new entity name, and change of address filings may rely on existing agency appointments."
          ]
        },
        {
          heading: "Supporting Document Selection Guide",
          points: [
            "Certificate of Incorporation: standard corporate registration certificate suitable for most applicants.",
            "Commercial Register Extract: official registry entry demonstrating company status.",
            "Certificate of Good Standing: confirms corporate compliance and active status.",
            "All options require only simple copies with English translation when needed."
          ]
        },
        {
          heading: "Filing Strategy Guide",
          points: [
            "Bulk filings benefit from a single legalized Power of Attorney covering multiple classes or applications for the same applicant.",
            "Collective marks should present all marks on a single page to streamline examination.",
            "License agreements must be timed after registration; prepare documents during prosecution and submit once registration issues.",
            "Assignments and change recordals require early collection of registry-issued certificates and translations to avoid delays."
          ]
        },
        {
          heading: "Goods and Services Specification Guidelines",
          points: [
            "Provide precise descriptions for each good or service using NICE terminology where possible.",
            "Avoid blanket phrases such as 'all goods in Class X' or class headings without detail.",
            "Ensure specifications match commercial activities and reflect accurate class coverage.",
            "Review each class to confirm the scope aligns with applicant requirements."
          ]
        },
        {
          heading: "Translation Requirements Summary",
          points: [
            "Incorporation documents, Commercial Register extracts, Certificates of Good Standing, and priority documents require simple English translations when issued in other languages.",
            "Merger documents and change certificates need translations if not in English, while Powers of Attorney and agreements are typically executed in the required language.",
            "Translations do not need legalization or certification."
          ]
        },
        {
          heading: "Power of Attorney Usage Guidelines",
          points: [
            "Power of Attorney is required for new applications, collective marks, assignments, licenses, mergers, and name changes.",
            "Renewals and change of address filings may rely on existing Powers of Attorney when the agent is already on record.",
            "Ensure the Power of Attorney authorizes all trademark matters, is notarized, and legalized via Apostille or Consulate of Oman.",
            "Leverage a single Power of Attorney for multiple applications to reduce legalization costs." 
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Oman trademark registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo"
    },
    patentGuide: {
      title: "Oman Patent Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Patent Applications",
          points: [
            "Filing details: provide priority application number and date, and PCT application information where applicable.",
            "Applicant and inventor information: full names and complete addresses for all parties.",
            "Technical documentation: abstract, complete specification, claims, and drawings in both English and Arabic; drawings require bilingual annotations.",
            "Alternative filing: when full Arabic translation is unavailable, file with Arabic title and abstract initially and supply the complete translation within the prescribed deadline."
          ]
        },
        {
          heading: "Documents Permitted for Late Filing",
          points: [
            "Power of Attorney: original, notarized, and legalized via Apostille or Consulate of Oman; submit within 60 days of filing.",
            "Deed of Assignment: executed by inventors and legalized via Apostille or Consulate of Oman; submit within 90 days when applicant is not the inventor.",
            "Corporate evidence: simple copy of Certificate of Incorporation, Commercial Register extract, or Certificate of Good Standing with simple English translation if required; submit within 90 days.",
            "Priority document (national filings): certified copy with simple English translation submitted within 90 days; PCT national phase entries do not require a certified priority document.",
            "Complete Arabic translation of specification, claims, and drawings must be provided within 90 days if not filed initially." 
          ]
        },
        {
          heading: "Grace Period Overview",
          points: [
            "60-day grace period: applies to submission of legalized Power of Attorney.",
            "90-day grace period: covers Deed of Assignment, certified priority documents for national filings, corporate certificates, and completion of Arabic translations.",
            "Late filing charges apply for documents lodged after the filing date but within grace periods."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Legalization can be completed via Apostille or Consulate of Oman for Power of Attorney and Deed of Assignment.",
            "Corporate documents require only simple copies with English translations; no legalization is needed.",
            "Arabic translations are mandatory for titles, abstracts, specifications, claims, and drawings; flexible filing permits staged submission.",
            "Certified priority documents are compulsory for national filings but waived for PCT entries.",
            "Late filing flexibility supports rapid national phase entries while documents are finalized."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Priority/PCT Details | Required at filing | No late filing | No legalization | No translation required",
            "Applicant/Inventor Information | Required at filing | No late filing | No legalization | No translation required",
            "Abstract, Specification, Claims, Drawings | Required at filing (English and Arabic) | Arabic completion allowed within 90 days | No legalization | Arabic translation mandatory",
            "Power of Attorney | Preferred at filing | Late filing allowed | Submit within 60 days | Apostille or Consulate legalization | No translation required",
            "Deed of Assignment | Preferred at filing | Late filing allowed | Submit within 90 days | Apostille or Consulate legalization | No translation required",
            "Certificate of Incorporation / Commercial Register / Good Standing | Preferred at filing | Late filing allowed | Submit within 90 days | No legalization | Simple English translation if required",
            "Priority Document (national filings) | Preferred at filing | Late filing allowed | Submit within 90 days | Certified copy | Simple English translation if required"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Apostille is accepted as an alternative to consular legalization for Power of Attorney and Deed of Assignment.",
            "Original Power of Attorney is required; duplicates are not accepted.",
            "Deed of Assignment must be executed by all inventors to transfer rights to the applicant.",
            "Certified priority document is unnecessary for PCT national phase entries but mandatory for national filings claiming priority.",
            "Late filing fees apply when documents are submitted after filing within the grace periods.",
            "English translations for corporate and priority documents may be simple, without notarization or legalization." 
          ]
        },
        {
          heading: "Filing Strategy Guide",
          points: [
            "Immediate complete filing: submit all legalized documents and full Arabic translations at filing to avoid late fees.",
            "60-day strategy: file with technical documentation ready while the Power of Attorney legalization is finalized.",
            "90-day maximum flexibility: file quickly with English materials and Arabic abstract/title, then submit Power of Attorney, Deed of Assignment, corporate documents, and complete Arabic translations within the grace period.",
            "Partial translation approach: start with English specifications and Arabic abstract/title, finalizing full Arabic translations within 90 days."
          ]
        },
        {
          heading: "Arabic Translation Requirements",
          points: [
            "Mandatory translation covers patent title, abstract, specification, claims, and drawings.",
            "Option 1: file with complete English and Arabic sets to avoid supplemental submissions.",
            "Option 2: file with English specifications and Arabic abstract/title, then submit complete Arabic translation within 90 days.",
            "Translations should maintain technical accuracy; legalization of translations is not required." 
          ]
        },
        {
          heading: "Priority Document Guidelines",
          points: [
            "National filings need certified priority documents with simple English translations submitted within 90 days.",
            "PCT national phase entries rely on PCT data without providing certified priority documents, reducing documentation burden.",
            "Priority claims secure earlier filing dates and protect against intervening rights." 
          ]
        },
        {
          heading: "Deed of Assignment Requirements",
          points: [
            "Transfers patent rights from inventors to applicant when they differ, ensuring corporate ownership.",
            "Must reference the patent application, list all inventors and the applicant, and include clear transfer language.",
            "Requires notarization and legalization via Apostille or Consulate of Oman, with submission within 90 days.",
            "Late filing permits execution post-filing while incurring standard charges." 
          ]
        },
        {
          heading: "Power of Attorney Guidelines",
          points: [
            "Execute original Power of Attorney in favor of the representative, ensure notarization, and legalize via Apostille or Consulate of Oman.",
            "Authorizes filing, prosecution, and representation before the Patent Office.",
            "Preferred at filing but may be submitted within 60 days to maintain application pendency.",
            "Avoid delays by initiating legalization immediately upon deciding to file." 
          ]
        },
        {
          heading: "Certificate of Incorporation Guidelines",
          points: [
            "Choose from Certificate of Incorporation, Commercial Register extract, or Certificate of Good Standing.",
            "Provide simple copies; legalization is not required.",
            "Prepare simple English translations for documents issued in other languages.",
            "Submit within 90 days when not available at filing." 
          ]
        },
        {
          heading: "Common Filing Scenarios",
          points: [
            "Corporate applicants with inventor-employees should plan Deed of Assignment execution and legalization early.",
            "PCT national phase entries benefit from reduced documentation and can leverage grace periods for Arabic translations.",
            "Independent inventors filing directly may not require Deed of Assignment but must still legalize the Power of Attorney.",
            "Rush filings can proceed with English specifications and minimal Arabic content, using grace periods for remaining documents."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Oman patent registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo"
    },
    designGuide: {
      title: "Oman Industrial Design Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Industrial Design Applications",
          points: [
            "Provide multiple design views and complete filing particulars covering applicant, designer, and classification details.",
            "Power of Attorney: original, signed by an authorized signatory, notarized, and legalized via Apostille or the Consulate of Oman.",
            "Corporate documentation: simple copy of Certificate of Incorporation, Commercial Register extract, or Certificate of Good Standing with simple English translation when necessary.",
            "Deed of Assignment executed by designer(s) transferring rights to the applicant, notarized and legalized via Apostille or Consulate of Oman.",
            "Priority document (if claimed): certified copy with simple English translation filed within 6 months of the priority date.",
            "Design abstract summarizing the novelty and distinctive visual elements." 
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Legalization accepted through Apostille or the Consulate of Oman for Power of Attorney and Deed of Assignment.",
            "Corporate documents require only simple copies accompanied by simple English translations when issued in other languages.",
            "Deed of Assignment is mandatory when the applicant differs from the designer and must be executed by all designers.",
            "Design representations must cover multiple views to capture all distinctive features.",
            "Priority may be claimed within 6 months using certified documents without legalization requirements." 
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "Design Views | Required at filing | No legalization | No translation required | Professional images or drawings",
            "Filing Particulars | Required at filing | No legalization | No translation required | Complete application data",
            "Power of Attorney | Required at filing | Apostille or Oman Consulate | No translation required | Original document",
            "Certificate of Incorporation / Commercial Register / Good Standing | Required at filing | No legalization | English translation if needed | Simple copy",
            "Deed of Assignment | Required at filing | Apostille or Oman Consulate | No translation required | Original document",
            "Priority Document (if claimed) | Required within 6 months | No legalization | English translation if needed | Certified copy",
            "Design Abstract | Required at filing | No legalization | No translation required | Brief novelty description"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Apostille may be used instead of consular legalization for documents requiring authentication.",
            "Original Power of Attorney must be submitted; copies are not accepted.",
            "Deed of Assignment is compulsory whenever designers differ from the applicant and must be notarized and legalized.",
            "Multiple high-quality design views are mandatory to reflect all aspects of the design.",
            "Simple English translations are required for non-English corporate and priority documents.",
            "Priority document needs certification only and does not require legalization." 
          ]
        },
        {
          heading: "Design Representation Guidelines",
          points: [
            "Include front, back, left, right, top, bottom, and perspective views when applicable.",
            "Maintain consistent scale, lighting, and quality across all views to ensure clarity.",
            "Use professional photography or technical drawings to highlight distinctive elements.",
            "Provide detail views for unique features requiring emphasis." 
          ]
        },
        {
          heading: "Design Abstract Guidelines",
          points: [
            "Summarize novelty features in 50–150 words focusing on visual characteristics.",
            "Use objective, descriptive language and avoid marketing statements.",
            "Emphasize distinctive elements that differentiate the design from prior art." 
          ]
        },
        {
          heading: "Supporting Document Selection Guide",
          points: [
            "Choose between Certificate of Incorporation, Commercial Register extract, or Certificate of Good Standing as corporate proof.",
            "All options require only simple copies with English translations when the originals are not in English.",
            "No legalization is necessary for these corporate documents." 
          ]
        },
        {
          heading: "Filing Strategy Guide",
          points: [
            "Individual designer applicants may rely on their own Power of Attorney without providing corporate documents or Deed of Assignment.",
            "Corporate applicants should prepare Certificate of Incorporation and Deed of Assignment from each designer to establish ownership.",
            "Plan Apostille or consular legalization timelines in advance to avoid delays, especially when multiple documents require authentication." 
          ]
        },
        {
          heading: "Priority Claim Requirements",
          points: [
            "Priority must be claimed within 6 months of the earliest filing date.",
            "Provide a certified copy of the priority application with simple English translation if necessary.",
            "Legalization of the priority document is not required." 
          ]
        },
        {
          heading: "Common Filing Errors to Avoid",
          points: [
            "Submitting Power of Attorney copies instead of originals.",
            "Omitting Deed of Assignment when applicant is not the designer or lacking all designer signatures.",
            "Providing insufficient design views or low-quality imagery.",
            "Attempting to legalize corporate documents that only require simple copies.",
            "Failing to include the design abstract or claiming priority after the 6-month window." 
          ]
        },
        {
          heading: "Legalization Process",
          points: [
            "Apostille route: notarize Power of Attorney/Deed of Assignment, obtain Apostille, and courier original to Oman.",
            "Consular route: notarize documents, authenticate through the Ministry of Foreign Affairs (home country), legalize at the Omani Consulate, then courier the originals.",
            "Corporate documents only require simple copies with translations; no legalization steps are needed." 
          ]
        },
        {
          heading: "Application Processing Comparison",
          points: [
            "Individual designer applicants require only their own Power of Attorney and design materials, resulting in lower costs and simpler processing.",
            "Corporate applicants must submit legalized Deeds of Assignment and corporate certificates, increasing complexity and cost but ensuring organizational ownership." 
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Oman industrial design registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo"
    },
    resources: [
      { label: "Trademark guide", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo" },
      { label: "Patent guide", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo" },
      { label: "Design guide", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo" }
    ]
  },
  {
    country: "Kuwait",
    summary: "Comprehensive filing overviews covering classifications, oppositions, and maintenance windows.",
    trademarkGuide: {
      title: "Kuwait Trademark Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Trademark/Service Mark Applications",
          points: [
            "Power of Attorney signed by the applicant's authorized signatory and legalized up to the Kuwait Consulate (Apostille not accepted).",
            "Priority document (when claimed): simple copy filed within 6 months of the basic application date with no legalization requirement."
          ]
        },
        {
          heading: "Renewal of Trademark/Service Mark Registrations",
          points: [
            "Power of Attorney executed by the registered owner and legalized up to the Kuwait Consulate.",
            "Copy of the Kuwaiti registration certificate."
          ]
        },
        {
          heading: "Recordal of Assignment",
          points: [
            "Power of Attorney from the assignee legalized up to the Kuwait Consulate.",
            "Deed of Assignment signed by assignor and assignee, legalized up to the Kuwait Consulate.",
            "Copy of the Kuwaiti registration certificate."
          ]
        },
        {
          heading: "Recordal of Change of Name and/or Address",
          points: [
            "Power of Attorney in the new name and/or address legalized up to the Kuwait Consulate.",
            "Official certificate evidencing the change, legalized up to the Kuwait Consulate.",
            "Copy of the Kuwaiti registration certificate."
          ]
        },
        {
          heading: "Recordal of Merger",
          points: [
            "Power of Attorney signed by an authorized signatory and legalized up to the Kuwait Consulate.",
            "Merger document executed by both parties and legalized up to the Kuwait Consulate.",
            "Copy of the Kuwaiti registration certificate."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Consular legalization at the Kuwait Consulate is mandatory for all Powers of Attorney and transactional documents; Apostille is not accepted.",
            "Priority documents and registration certificates may be submitted as simple copies without legalization.",
            "Priority claims must be filed within 6 months of the basic application date.",
            "Post-registration recordals require legalized Power of Attorney, copy of the Kuwaiti registration certificate, and the relevant legalized transaction document."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "New Trademark Applications | Power of Attorney (applicant) | Priority document if claimed | Legalization via Kuwait Consulate | Priority document simple copy only",
            "Renewal Applications | Power of Attorney (owner) | Kuwait registration certificate | Legalization via Kuwait Consulate | Copy sufficient",
            "Assignment Recordals | Power of Attorney (assignee) | Deed of Assignment, registration certificate copy | Legalization via Kuwait Consulate | Deed signed by both parties",
            "Change of Name/Address Recordals | Power of Attorney (new details) | Official change certificate, registration certificate copy | Legalization via Kuwait Consulate | Certificate must come from competent authority",
            "Merger Recordals | Power of Attorney | Merger document, registration certificate copy | Legalization via Kuwait Consulate | Document executed by both parties"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Consular legalization is compulsory; Apostille legalization is rejected.",
            "Assignment Powers of Attorney must be executed by the assignee, not the assignor.",
            "Change of name/address Powers of Attorney must reflect the updated details.",
            "Official change certificates must be government issued; company declarations are insufficient.",
            "Transactional documents must include trademark identification details and bear signatures of all required parties."
          ]
        },
        {
          heading: "Legalization Requirements",
          points: [
            "Power of Attorney, Deed of Assignment, Merger documentation, and change certificates all require Kuwait Consulate legalization.",
            "Priority documents and Kuwaiti registration certificates can be submitted as simple copies without legalization.",
            "Legalization chain typically requires notarization, Ministry of Foreign Affairs authentication, and Kuwait Consulate attestation before submission."
          ]
        },
        {
          heading: "Transaction-Specific Guidance",
          points: [
            "Assignments: ensure the deed lists trademark name, number, and class, with signatures from both parties and Kuwait Consulate legalization.",
            "Change of name/address: submit an official, legalized certificate showing old and new details alongside the updated Power of Attorney.",
            "Mergers: provide legalized merger documentation naming all merging entities and the surviving entity with effective date confirmation."
          ]
        },
        {
          heading: "Filing Strategy Recommendations",
          points: [
            "Use one legalized Power of Attorney to cover multiple applications to manage costs effectively.",
            "Schedule post-registration recordals with sufficient lead time for document legalization (typically 3–4 weeks).",
            "Prepare Kuwait registration certificate copies early to avoid delays in assignment, merger, or change filings."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Kuwait trademark registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "/pdfs/kuwait-trademark-law.pdf"
    },
    patentGuide: {
      title: "Kuwait Patent Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Patent Applications",
          points: [
            "Power of Attorney signed by the applicant's authorized signatory and legalized up to the Kuwait Consulate.",
            "Copy of Certificate of Incorporation or Certificate of Good Standing for the applicant.",
            "Provide invention title, summary description, and details of the corresponding foreign patent (number and date).",
            "Disclose applicant and inventor information (full name, address, nationality, and occupation).",
            "Submit two copies of the patent specifications with Arabic translation, including all sections and abstract.",
            "Submit two sets of formal drawings bearing Arabic reference numerals.",
            "Provide assignment document from inventors to applicant (signed copy; legalization not required).",
            "Include copies of the PCT application (if applicable) and the priority document."
          ]
        },
        {
          heading: "Recordal of Assignment",
          points: [
            "Power of Attorney executed by the assignee legalized up to the Kuwait Consulate.",
            "Deed of Assignment signed by both parties and legalized up to the Kuwait Consulate."
          ]
        },
        {
          heading: "Recordal of Change of Name and/or Address",
          points: [
            "Power of Attorney in the new name and/or address legalized up to the Kuwait Consulate.",
            "Change certificate legalized up to the Kuwait Consulate."
          ]
        },
        {
          heading: "Recordal of Merger",
          points: [
            "Power of Attorney signed by an authorized signatory of the surviving entity and legalized up to the Kuwait Consulate.",
            "Merger document executed by both parties and legalized up to the Kuwait Consulate."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Consular legalization through the Kuwait Consulate is mandatory for all Powers of Attorney and transactional documents; Apostille is not accepted.",
            "Patent specifications and drawings must be filed in duplicate with Arabic translations and Arabic numerals on drawings.",
            "Assignment from inventors to applicant is required when ownership differs, though legalization is not required for filing.",
            "Copies of PCT and priority documents are sufficient without legalization."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "New Patent Applications | Power of Attorney (applicant) | Certificate of Incorporation, invention details, specifications (2 copies), drawings (2 sets), inventor assignment, PCT/priority copies | Legalization via Kuwait Consulate for POA | Arabic translation mandatory",
            "Assignment Recordals | Power of Attorney (assignee) | Deed of Assignment | Legalization via Kuwait Consulate | Both parties must sign",
            "Change of Name/Address Recordals | Power of Attorney (new details) | Change certificate | Legalization via Kuwait Consulate | POA must reflect new information",
            "Merger Recordals | Power of Attorney | Merger document | Legalization via Kuwait Consulate | Document executed by all parties"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Arabic translations are obligatory for all specifications and drawings, with two complete copies required.",
            "Formal drawings must display Arabic reference numerals consistent with the specifications.",
            "Assignment recordals require the assignee's legalized Power of Attorney; Apostille documentation is not recognized.",
            "Priority and PCT documents can be lodged as copies without legalization or translation requirements."
          ]
        },
        {
          heading: "Patent Specification and Drawing Requirements",
          points: [
            "Specifications must include title, field, background, summary, detailed description, claims, and abstract in both English and Arabic.",
            "Drawings must be professional quality, numbered consistently, and reflect Arabic numerals across all references.",
            "Prepare two identical sets of each to meet filing requirements."
          ]
        },
        {
          heading: "Filing Strategy Guide",
          points: [
            "Prioritize translation and duplication timelines: Arabic translations and duplicate sets typically require several weeks.",
            "Legalize the Power of Attorney concurrently with translation work to minimize delays.",
            "Ensure assignment from inventors is executed early to avoid ownership questions at filing."
          ]
        },
        {
          heading: "Common Filing Errors to Avoid",
          points: [
            "Submitting Apostille legalization instead of Kuwait Consulate attestation for Powers of Attorney or transactional documents.",
            "Providing only one set of specifications or drawings, or omitting Arabic translations.",
            "Failing to include PCT or priority documentation when applicable.",
            "Missing inventor assignment when the applicant differs from the inventors."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Kuwait patent registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "/pdfs/kuwait-patent-law.pdf"
    },
    designGuide: {
      title: "Kuwait Industrial Design Registration Requirements",
      updated: "October 2025",
      sections: [
        {
          heading: "New Industrial Design Applications",
          points: [
            "Power of Attorney signed by an authorized signatory and legalized up to the Kuwait Consulate.",
            "Corporate applicants: provide legalized Commercial Register extract or official Memorandum/Articles of Association.",
            "Applicant information: full name, address, nationality, and occupation or business nature.",
            "Design representations: two representations of each design or model showing various views."
          ]
        },
        {
          heading: "Recordal of Assignment",
          points: [
            "Power of Attorney executed by the assignee and legalized up to the Kuwait Consulate.",
            "Deed of Assignment signed by both parties and legalized up to the Kuwait Consulate."
          ]
        },
        {
          heading: "Recordal of Change of Name and/or Address",
          points: [
            "Power of Attorney in the new name/address legalized up to the Kuwait Consulate.",
            "Change certificate legalized up to the Kuwait Consulate."
          ]
        },
        {
          heading: "Recordal of Merger",
          points: [
            "Power of Attorney signed by the authorized signatory of the surviving entity and legalized up to the Kuwait Consulate.",
            "Merger document executed by both parties and legalized up to the Kuwait Consulate."
          ]
        },
        {
          heading: "Key Requirements Summary",
          points: [
            "Consular legalization via the Kuwait Consulate is mandatory for all Powers of Attorney, corporate documents, and transactional paperwork; Apostille is not accepted.",
            "Two design representations showing multiple views must be submitted for each design.",
            "Corporate applicants must legalize Commercial Register extracts or Memorandum/Articles of Association.",
            "Design views must be presented on sheets with upright orientation and clear view designations."
          ]
        },
        {
          heading: "Documentation Checklist",
          points: [
            "New Design Applications | Power of Attorney (applicant) | Legalized corporate documentation (if company), applicant details, two design representations | Legalization via Kuwait Consulate | Multiple views required",
            "Assignment Recordals | Power of Attorney (assignee) | Deed of Assignment | Legalization via Kuwait Consulate | Both parties must sign",
            "Change of Name/Address Recordals | Power of Attorney (new details) | Change certificate | Legalization via Kuwait Consulate | POA must reflect new details",
            "Merger Recordals | Power of Attorney | Merger document | Legalization via Kuwait Consulate | Document executed by all parties"
          ]
        },
        {
          heading: "Important Notes",
          points: [
            "Two complete design representations are required per design, each illustrating various views on appropriately formatted sheets.",
            "View labels such as perspective, front, side, top, bottom, or back must be clearly indicated.",
            "Assignment Powers of Attorney must originate from the assignee; change Powers of Attorney must reflect updated details.",
            "Transactional documents must be fully legalized; incomplete legalization chains result in rejection."
          ]
        },
        {
          heading: "Design Representation Guidelines",
          points: [
            "Place design figures upright on the sheet with multiple figures displayed together when appropriate.",
            "Include perspective, front, side, top, bottom, and any necessary detail views labeled accordingly.",
            "Use professional images or technical drawings with consistent scale and high resolution."
          ]
        },
        {
          heading: "Corporate Documentation Requirements",
          points: [
            "Commercial Register extracts must be current, official, and legalized up to the Kuwait Consulate.",
            "Memorandum or Articles of Association must be official copies and fully legalized.",
            "Individual applicants do not need corporate documentation but must still legalize the Power of Attorney."
          ]
        },
        {
          heading: "Filing Strategy Guide",
          points: [
            "Individuals benefit from simplified filings requiring only a legalized Power of Attorney and design representations.",
            "Corporate applicants should allocate additional time for legalizing corporate documents and Powers of Attorney.",
            "Plan for a 4–6 week preparation window to complete legalization and design presentation work."
          ]
        },
        {
          heading: "Common Filing Errors to Avoid",
          points: [
            "Submitting Apostille-legalized documents instead of Kuwait Consulate legalization.",
            "Providing only one design representation or missing required views.",
            "Failing to legalize corporate documents for company applicants.",
            "Neglecting to label views or position designs upright on filing sheets."
          ]
        },
        {
          heading: "Specialist Support",
          points: [
            "For assistance with Kuwait industrial design registration and related procedures, please contact our IP specialists."
          ]
        }
      ],
      downloadHref: "https://app.box.com/s/z4lkc0hnocaif6ugq0ebl53qtqo6uoqj"
    },
    resources: [
      { label: "Trademark guide", href: "https://app.box.com/s/ga6nwfqhzjvm6tyjvu4lkyjrdxnig3n8" },
      { label: "Patent guide", href: "https://app.box.com/s/lgbhury7k32scqasl357wty8pwp0sd54" },
      { label: "Design guide", href: "https://app.box.com/s/z4lkc0hnocaif6ugq0ebl53qtqo6uoqj" }
    ]
  }
];

