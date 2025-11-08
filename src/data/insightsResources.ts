import type { Language } from "@/lib/i18n";

export type ResourceMetric = {
  value: string;
  label: string;
  icon: string;
};

export const RESOURCE_METRICS: Record<Language, ResourceMetric[]> = {
  en: [
    {
      value: "GCC-focused",
      label: "Guides & templates",
      icon: "advantage-insight" as const,
    },
    {
      value: "Video explainers",
      label: "Learning modules",
      icon: "strategy" as const,
    },
    {
      value: "Prompt follow-up",
      label: "Form submissions",
      icon: "defence" as const,
    }
  ],
  ar: [
    {
      value: "تركيز على مجلس التعاون الخليجي",
      label: "أدلة ونماذج",
      icon: "advantage-insight" as const,
    },
    {
      value: "شروحات فيديو",
      label: "وحدات التعلم",
      icon: "strategy" as const,
    },
    {
      value: "متابعة فورية",
      label: "نماذج مقدمة",
      icon: "defence" as const,
    }
  ]
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

export const FEATURED_RESOURCES: Record<Language, FeaturedResource[]> = {
  en: [
    {
      title: "Oman Industrial Design Law",
      description:
        "Complete legal framework governing industrial design protection in Oman.",
      category: "Legal",
      type: "PDF",
      topic: "Industrial Design",
      icon: "patent" as const,
      highlights: [
        "Comprehensive coverage of industrial design registration requirements.",
        "Detailed procedural guidelines for Oman IP filings.",
        "Protection duration, renewal terms, and enforcement provisions.",
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    },
    {
      title: "Oman Patent Law",
      description:
        "Comprehensive patent legislation and regulations for Oman jurisdiction.",
      category: "Legal",
      type: "PDF",
      topic: "Patent Law",
      icon: "patent" as const,
      highlights: [
        "Complete patent filing requirements and examination procedures.",
        "Priority claims, novelty standards, and patentability criteria.",
        "Patent term duration, licensing provisions, and infringement remedies.",
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    },
    {
      title: "Oman Trademark Law",
      description:
        "Official trademark law and procedural requirements for Oman trademark registration.",
      category: "Legal",
      type: "PDF",
      topic: "Trademark Law",
      icon: "trademark" as const,
      highlights: [
        "Trademark classification, examination, and opposition procedures.",
        "Registration requirements, renewal terms, and use obligations.",
        "Enforcement mechanisms and infringement remedies in Oman.",
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    }
  ],
  ar: [
    {
      title: "قانون التصميم الصناعي في عُمان",
      description:
        "الإطار القانوني الكامل الذي ينظم حماية التصاميم الصناعية في سلطنة عُمان.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "التصميم الصناعي",
      icon: "patent" as const,
      highlights: [
        "تغطية شاملة لمتطلبات تسجيل التصميم الصناعي.",
        "إرشادات إجرائية مفصلة لطلبات الملكية الفكرية في عُمان.",
        "مدة الحماية وشروط التجديد وأحكام الإنفاذ.",
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    },
    {
      title: "قانون براءات الاختراع في عُمان",
      description:
        "التشريعات واللوائح الشاملة الخاصة ببراءات الاختراع في سلطنة عُمان.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون البراءات",
      icon: "patent" as const,
      highlights: [
        "كامل متطلبات إيداع براءة الاختراع وإجراءات الفحص.",
        "ادعاءات الأولوية ومعايير الجدة وقابلية الاختراع.",
        "مدة البراءة وأحكام الترخيص ووسائل معالجة التعدي.",
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    },
    {
      title: "قانون العلامات التجارية في عُمان",
      description:
        "القانون الرسمي وإجراءات تسجيل العلامات التجارية في سلطنة عُمان.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون العلامات التجارية",
      icon: "trademark" as const,
      highlights: [
        "تصنيف العلامات وإجراءات الفحص والاعتراض.",
        "متطلبات التسجيل وشروط التجديد والتزامات الاستخدام.",
        "آليات الإنفاذ ووسائل الانتصاف من التعدي في عُمان.",
      ],
      pdfUrl: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo",
    }
  ]
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

export const ALL_INSIGHTS: Record<Language, InsightResource[]> = {
  en: [
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
  ],
  ar: [
    {
      title: "قانون التصميم الصناعي في الكويت",
      description: "الإطار القانوني الكامل الذي ينظم حماية التصاميم الصناعية في دولة الكويت.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "التصميم الصناعي",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/z4lkc0hnocaif6ugq0ebl53qtqo6uoqj",
    },
    {
      title: "قانون براءات الاختراع في الكويت",
      description: "التشريعات واللوائح الشاملة الخاصة ببراءات الاختراع في دولة الكويت.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون البراءات",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/lgbhury7k32scqasl357wty8pwp0sd54",
    },
    {
      title: "قانون العلامات التجارية في الكويت",
      description: "القانون الرسمي وإجراءات تسجيل العلامات التجارية في دولة الكويت.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون العلامات التجارية",
      icon: "trademark" as const,
      pdfUrl: "https://app.box.com/s/ga6nwfqhzjvm6tyjvu4lkyjrdxnig3n8",
    },
    {
      title: "قانون التصميم الصناعي في البحرين",
      description: "الإطار القانوني الكامل الذي ينظم حماية التصاميم الصناعية في مملكة البحرين.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "التصميم الصناعي",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/5a0ktbgzhlsm9vt61lsg34jg3s000fa1",
    },
    {
      title: "قانون براءات الاختراع في البحرين",
      description: "التشريعات واللوائح الشاملة الخاصة ببراءات الاختراع في مملكة البحرين.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون البراءات",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf",
    },
    {
      title: "قانون العلامات التجارية في البحرين",
      description: "القانون الرسمي وإجراءات تسجيل العلامات التجارية في مملكة البحرين.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون العلامات التجارية",
      icon: "trademark" as const,
      pdfUrl: "https://app.box.com/s/57obz1s7et6582she8mtvc9vs57g3riu",
    },
    {
      title: "قانون التصميم الصناعي في قطر",
      description: "الإطار القانوني الكامل الذي ينظم حماية التصاميم الصناعية في دولة قطر.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "التصميم الصناعي",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d",
    },
    {
      title: "قانون براءات الاختراع في قطر",
      description: "التشريعات واللوائح الشاملة الخاصة ببراءات الاختراع في دولة قطر.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون البراءات",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/9du5aa5tdtlc14fr1863fvfg1fdtlc52",
    },
    {
      title: "قانون العلامات التجارية في قطر",
      description: "القانون الرسمي وإجراءات تسجيل العلامات التجارية في دولة قطر.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون العلامات التجارية",
      icon: "trademark" as const,
      pdfUrl: "https://app.box.com/s/k1gbqhk5o71k52nwmta3rqi1c9e10s0n",
    },
    {
      title: "قانون التصميم الصناعي في المملكة العربية السعودية",
      description: "الإطار القانوني الكامل الذي ينظم حماية التصاميم الصناعية في المملكة العربية السعودية.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "التصميم الصناعي",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf",
    },
    {
      title: "قانون التصميم الصناعي في دولة الإمارات العربية المتحدة",
      description: "الإطار القانوني الكامل الذي ينظم حماية التصاميم الصناعية في دولة الإمارات العربية المتحدة.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "التصميم الصناعي",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/fwp2zjskgnanomebd81apummnlv5wk88",
    },
    {
      title: "قانون براءات الاختراع في دولة الإمارات العربية المتحدة",
      description: "التشريعات واللوائح الشاملة الخاصة ببراءات الاختراع في دولة الإمارات العربية المتحدة.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون البراءات",
      icon: "patent" as const,
      pdfUrl: "https://app.box.com/s/ampkce9rqlibhc3dhb680qmdesi0vz99",
    },
    {
      title: "قانون العلامات التجارية في دولة الإمارات العربية المتحدة",
      description: "القانون الرسمي وإجراءات تسجيل العلامات التجارية في دولة الإمارات العربية المتحدة.",
      category: "قانوني",
      type: "ملف PDF",
      topic: "قانون العلامات التجارية",
      icon: "trademark" as const,
      pdfUrl: "https://app.box.com/s/5clbaem72dfvlxox3e6nzr1db1vymlkh",
    }
  ]
};

export type LearningModule = {
  title: string;
  videoUrl: string;
  summary: string;
  howTo: string[];
  didYouKnow: string;
};

export const LEARNING_MODULES: Record<Language, LearningModule[]> = {
  en: [
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
  ],
  ar: [
    {
      title: "ما هي العلامة التجارية؟ حماية هوية علامتك",
      videoUrl: "https://www.youtube.com/embed/Lq4Bp4oSkj8?rel=0",
      summary:
        "يوضح هذا الشرح من المرسى كيف تعمل العلامات التجارية كبصمة قانونية لعلامتك، والفرق بين البراءات والعلامات، وأنواع الإشارات التي يمكنك حمايتها من الأسماء والشعارات إلى الأصوات والعلامات الحركية.",
      howTo: [
        "حدد عناصر العلامة التي تعتمد عليها (الأسماء، الشعارات، الشعارات اللفظية، الأصوات) وقرر أيها يجب إيداعه كعلامة لفظية أو شكلية أو غير تقليدية.",
        "أجرِ عمليات بحث للتأكد من خلو السجلات واجمع نماذج استخدام مقبولة قبل تقديم الطلب لتعزيز موقفك أثناء الفحص.",
        "ضع خطة للصيانة: جدول مواعيد التجديد، راقب الاستخدام، واستهدف حالة عدم القابلية للطعن حتى تستمر الحماية مع نمو علامتك."
      ],
      didYouKnow:
        "هل كنت تعلم؟ بخلاف البراءات، يمكن للعلامات التجارية أن تدوم إلى أجل غير مسمى طالما استمرت في استخدامها والالتزام بمواعيد التجديد، فتتحول إلى أصول متراكمة للعلامة."
    },
    {
      title: "أساسيات العلامات التجارية: 3 خطوات لتأمين علامتك",
      videoUrl: "https://www.youtube.com/embed/Cva5A5xu06g?rel=0",
      summary:
        "يستعرض هذا الدليل من المرسى ما يمكن حمايته كعلامة تجارية، ولماذا تهم التميّز، وثلاث خطوات أساسية تمنع المقلدين من تقويض قيمة علامتك.",
      howTo: [
        "راجع الأسماء والشعارات والشعارات اللفظية والألوان وعناصر التغليف التي تميزك وتأكد من أن كل عنصر مميز وليس وصفياً.",
        "ابحث في قاعدة بيانات مكتب العلامات التجارية (مثل USPTO.gov) للتحقق من توفر العلامة قبل الاستثمار في التسويق أو رسوم الإيداع.",
        "جهز تمثيلاً واضحاً للعلامة، وأدرج السلع والخدمات الصحيحة، وقدّم الطلب لضمان تثبيت الحماية مبكراً."
      ],
      didYouKnow:
        "هل كنت تعلم؟ تصبح العلامة التجارية أصعب بكثير في الطعن بمجرد تسجيلها واستخدامها بشكل مستمر—فالحماية الموثقة تمنع المنافسين من الاستفادة من سمعتك."
    },
    {
      title: "براءة اختراع أم علامة تجارية أم حق نشر",
      videoUrl: "https://www.youtube.com/embed/hfwbVpkEYtc?rel=0",
      summary:
        "يقارن المرسى بين الركائز الثلاث للملكية الفكرية، موضحاً كيف تحمي البراءات الابتكارات، وتحمي العلامات الهوية التجارية، وتصون حقوق النشر التعبير الإبداعي.",
      howTo: [
        "صنّف كل أصل تملكه—تقني أو علاماتي أو إبداعي—واربطه بحق الملكية الفكرية المناسب قبل الاستثمار في الحماية.",
        "تابع دورات الحياة: تدوم البراءات نحو 20 عاماً، وتستمر العلامات مع الاستخدام، بينما تمتد حقوق النشر طوال حياة المؤلف زائد 70 عاماً في العديد من الولايات القضائية.",
        "ابنِ خطة حماية تدمج هذه الحقوق معاً، لضمان تغطية الابتكارات ونقاط الاتصال بالعلامة والمواد الإبداعية على حد سواء."
      ],
      didYouKnow:
        "هل كنت تعلم؟ تكمل هذه الحقوق بعضها البعض بدلاً من أن تحل محلها—فالعديد من المنتجات الناجحة تعتمد على الثلاثة لحماية الوظيفة والهوية السوقية والسرد القصصي."
    }
  ]
};

export type CountryGuideResource = {
  label: string;
  href: string;
  type?: "trademark" | "patent" | "design";
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

export const COUNTRY_GUIDES: Record<Language, CountryGuide[]> = {
  en: [
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
      { label: "Trademark guide", href: "https://app.box.com/s/5clbaem72dfvlxox3e6nzr1db1vymlkh", type: "trademark" },
      { label: "Patent guide", href: "https://app.box.com/s/ampkce9rqlibhc3dhb680qmdesi0vz99", type: "patent" },
      { label: "Design guide", href: "https://app.box.com/s/fwp2zjskgnanomebd81apummnlv5wk88", type: "design" }
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
      { label: "Design guide", href: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf", type: "design" }
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
      { label: "Trademark guide", href: "https://app.box.com/s/k1gbqhk5o71k52nwmta3rqi1c9e10s0n", type: "trademark" },
      { label: "Patent guide", href: "https://app.box.com/s/9du5aa5tdtlc14fr1863fvfg1fdtlc52", type: "patent" },
      { label: "Design guide", href: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d", type: "design" }
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
      { label: "Trademark guide", href: "https://app.box.com/s/57obz1s7et6582she8mtvc9vs57g3riu", type: "trademark" },
      { label: "Patent guide", href: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf", type: "patent" },
      { label: "Design guide", href: "https://app.box.com/s/5a0ktbgzhlsm9vt61lsg34jg3s000fa1", type: "design" }
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
      { label: "Trademark guide", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo", type: "trademark" },
      { label: "Patent guide", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo", type: "patent" },
      { label: "Design guide", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo", type: "design" }
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
      { label: "Trademark guide", href: "https://app.box.com/s/ga6nwfqhzjvm6tyjvu4lkyjrdxnig3n8", type: "trademark" },
      { label: "Patent guide", href: "https://app.box.com/s/lgbhury7k32scqasl357wty8pwp0sd54", type: "patent" },
      { label: "Design guide", href: "https://app.box.com/s/z4lkc0hnocaif6ugq0ebl53qtqo6uoqj", type: "design" }
    ]
  }
  ],
  ar: [
    {
      country: "الإمارات العربية المتحدة",
      summary: "جداول تقديم العلامات والبراءات والتصاميم الصناعية مع مراحل تنفيذ محددة عبر الإمارات.",
      designGuide: {
        title: "متطلبات تسجيل التصميم في دولة الإمارات",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات التصميم — المستندات المطلوبة عند الإيداع",
            points: [
              "استكمال بيانات مقدم الطلب والمصمم بما في ذلك الاسم الكامل، العنوان المفصل، والجنسية.",
              "تقديم عنوان التصميم مع الطلب الأولي.",
              "إرفاق تمثيلات مرئية: نسخة واحدة للتصاميم ثنائية الأبعاد ونسخة لكل منظور للتصاميم ثلاثية الأبعاد."
            ]
          },
          {
            heading: "طلبات التصميم — خلال 90 يوماً",
            points: [
              "⚠️ المهلة البالغة 90 يوماً للمستندات الرسمية غير قابلة للتمديد إطلاقاً.",
              "توكيل قانوني موثق.",
              "مستخرج من السجل التجاري أو عقد التأسيس للمتقدمين من الشركات — موثق.",
              "عقد التنازل موقع من المصمم عند اختلاف مقدم الطلب — موثق.",
              "صورة مصدقة من مستند الأولوية عند المطالبة بالأولوية."
            ]
          },
          {
            heading: "طلبات تسجيل التنازل",
            points: [
              "توكيل قانوني منفذ من المتنازل إليه — موثق.",
              "عقد التنازل موقع من الطرفين — موثق.",
              "شهادة تأسيس للمتنازل إليه — موثقة."
            ]
          },
          {
            heading: "طلبات المستخدم أو اتفاقية الترخيص",
            points: [
              "توكيل قانوني منفذ من المرخص له — موثق.",
              "اتفاقية الترخيص موقعة من الطرفين — موثقة."
            ]
          },
          {
            heading: "طلبات تغيير الاسم أو العنوان",
            points: [
              "توكيل قانوني بالاسم أو العنوان الجديد — موثق.",
              "شهادة تثبت التغيير صادرة عن الجهة المحلية المختصة — موثقة."
            ]
          },
          {
            heading: "ملاحظات مهمة حول الإيداع",
            points: [
              "المرحلة الأولى (عند الإيداع): تقديم بيانات مقدم الطلب والمصمم، عنوان التصميم، والتمثيل المرئي.",
              "المرحلة الثانية (خلال 90 يوماً): تقديم جميع المستندات القانونية الرسمية، والمستندات الداعمة، ووثائق الأولوية.",
              "المهلة البالغة 90 يوماً غير قابلة للتمديد؛ التأخير يعرض الطلب للشطب، لذا يجب التخطيط للتوثيقات مسبقاً."
            ]
          },
          {
            heading: "إرشادات تمثيل التصميم",
            points: [
              "التصاميم ثنائية الأبعاد: تقديم نسخة واضحة واحدة تُظهر التصميم بالكامل.",
              "التصاميم ثلاثية الأبعاد: تقديم مناظير كافية (أمامي، خلفي، جانبي، علوي، سفلي) لتمثيل التصميم بالكامل.",
              "ضمان وضوح الصور وجودتها بما يكفي لأغراض الفحص."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "المستند | وقت التقديم | التوثيق",
              "بيانات مقدم الطلب/المصمم | عند الإيداع | لا",
              "عنوان التصميم | عند الإيداع | لا",
              "التمثيل المرئي | عند الإيداع | لا",
              "التوكيل القانوني | خلال 90 يوماً | نعم",
              "مستخرج السجل التجاري | خلال 90 يوماً | نعم",
              "عقد التنازل | خلال 90 يوماً | نعم",
              "مستند الأولوية | خلال 90 يوماً | نسخة مصدقة"
            ]
          },
          {
            heading: "ملخص النقاط الرئيسية",
            points: [
              "عملية إيداع على مرحلتين بمهلة صارمة قدرها 90 يوماً للمستندات الرسمية.",
              "المعلومات الأساسية مطلوبة عند الإيداع؛ المستندات الرسمية تُستكمل خلال 90 يوماً.",
              "جميع المستندات القانونية يجب أن تكون موثقة، وأدلة الأولوية مصدقة.",
              "من الضروري تقديم مناظير متعددة للتصاميم ثلاثية الأبعاد.",
              "المهلة غير قابلة للتمديد وتتطلب تخطيطاً مسبقاً للمستندات الداعمة.",
              "يجب المطالبة بالأولوية خلال 90 يوماً مع تقديم مستندات معتمدة."
            ]
          },
          {
            heading: "نظرة عامة على الجدول الزمني",
            points: [
              "المرحلة | الموعد النهائي",
              "الإيداع الأولي (البنود 1، 2، 5) | تاريخ الإيداع",
              "المستندات الرسمية (البنود 3، 4، 6، 7) | 90 يوماً من تاريخ الإيداع (صارم)"
            ]
          },
          {
            heading: "تواصل مع خبرائنا",
            points: [
              "للحصول على دعم في تسجيل تصاميم الإمارات وإجراءات الإيداع، يُرجى التواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "https://app.box.com/s/fwp2zjskgnanomebd81apummnlv5wk88"
      },
      trademarkGuide: {
        title: "متطلبات تسجيل العلامات التجارية في دولة الإمارات",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "معلومات مقدم الطلب",
            points: [
              "تقديم الاسم القانوني الكامل لمقدم الطلب.",
              "إرفاق عنوان بريدي كامل يتضمن المبنى والمنطقة والمدينة والدولة.",
              "لم تعد العناوين العامة مقبولة؛ يشترط مكتب العلامات التجارية الإماراتي تفاصيل العنوان الكامل."
            ]
          },
          {
            heading: "التوكيل القانوني",
            points: [
              "يجب تنفيذ التوكيل القانوني من قبل مقدم الطلب، وتوثيقه لدى كاتب العدل، وتقنينه حتى سفارة دولة الإمارات.",
              "تقديم التوكيل المقنن مع الطلب أو تقديم تعهد بتسليم الأصل خلال 90 يوماً من الإيداع.",
              "المهلة البالغة 90 يوماً لتسليم التوكيل المقنن غير قابلة للتمديد إطلاقاً."
            ]
          },
          {
            heading: "قائمة السلع والخدمات",
            points: [
              "تقديم وصف واضح للسلع و/أو الخدمات المطلوب حمايتها.",
              "تصنيف السلع والخدمات وفق تصنيف نيس الدولي."
            ]
          },
          {
            heading: "مستند الأولوية (إن وجد)",
            points: [
              "تقديم نسخة مصدقة من طلب الأولوية؛ يُقبل إرسال نسخة ممسوحة عبر البريد الإلكتروني.",
              "إرفاق ترجمة إنجليزية مبسطة إذا لم يكن مستند الأولوية باللغة الإنجليزية.",
              "يجب المطالبة بالأولوية خلال ستة أشهر من تاريخ الإيداع الأول في دولة عضو باتفاقية باريس."
            ]
          },
          {
            heading: "ملخص النقاط الرئيسية",
            points: [
              "تفاصيل العنوان الكامل إلزامية لجميع المتقدمين.",
              "يجب توثيق التوكيل وتقنينه حتى مستوى سفارة الإمارات.",
              "تطبق مهلة سماح غير قابلة للتمديد قدرها 90 يوماً لتقديم التوكيلات المتأخرة.",
              "يجب تقديم مطالبات الأولوية خلال ستة أشهر من الإيداع الأول.",
              "يمكن إرسال مستندات الأولوية عبر البريد الإلكتروني كنسخ مصدقة."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "بيانات مقدم الطلب: الاسم الكامل والعنوان المفصل عند الإيداع.",
              "التوكيل القانوني: موثق ومقنن، يقدم عند الإيداع أو خلال 90 يوماً.",
              "قائمة السلع والخدمات: مواصفات مصنفة مطلوبة عند الإيداع.",
              "مستند الأولوية: نسخة مصدقة مع ترجمة، يقدم خلال ستة أشهر من الإيداع الأول."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "تواصل مع فريق خبراء الملكية الفكرية في المرسى للحصول على دعم مخصص في تسجيل العلامات التجارية بالإمارات."
            ]
          }
        ]
      },
      patentGuide: {
        title: "متطلبات تسجيل براءات الاختراع في دولة الإمارات",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات البراءة",
            points: [
              "توكيل قانوني موثق.",
              "مستخرج من السجل التجاري أو عقد التأسيس موثق.",
              "عقد تنازل موقع من المخترع أو المصمم إذا كان مقدم الطلب مختلفاً، موثق.",
              "نسخة مصدقة من مستند الأولوية عند المطالبة بها."
            ]
          },
          {
            heading: "طلبات التنازل",
            points: [
              "توكيل قانوني منفذ من المتنازل إليه، موثق.",
              "عقد التنازل موقع من الطرفين، موثق.",
              "شهادة تأسيس للمتنازل إليه، موثقة."
            ]
          },
          {
            heading: "اتفاقيات المستخدم أو الترخيص",
            points: [
              "توكيل قانوني منفذ من المرخص له، موثق.",
              "اتفاقية الترخيص موقعة من الطرفين، موثقة."
            ]
          },
          {
            heading: "تغيير الاسم أو العنوان",
            points: [
              "توكيل قانوني بالاسم أو العنوان الجديد، موثق.",
              "شهادة تثبت التغيير صادرة عن الجهة المحلية المختصة في موطن مقدم الطلب، موثقة."
            ]
          },
          {
            heading: "اتفاقيات الوكالة",
            points: [
              "توكيل قانوني موثق.",
              "للتجار الأفراد: تقديم نسختين من الترخيص التجاري، وقيد السجل التجاري، واتفاقية الوكالة مقننة حتى سفارة الإمارات، وترجمة عربية موثقة عند الحاجة، وبطاقة تعريف الوكيل، وتوكيلات موثقة، وتصريحات.",
              "للشركات: تقديم جميع مستندات التاجر الفرد إضافة إلى مستخرجات لجميع الشركاء أو شهادات تثبت الجنسية، ونسختين موثقتين من عقد التأسيس والنظام الأساسي."
            ]
          },
          {
            heading: "ملاحظات مهمة للتقديم",
            points: [
              "يجب تقديم المستندات الأصلية للتحقق ومقارنتها بالنسخ المرفوعة.",
              "يجب تقديم الطلبات بنسختين مع وضع كل نسخة في ملف منفصل.",
              "يتعين إكمال جميع إجراءات التوثيق بشكل صحيح، وتستلزم اتفاقيات الوكالة تقنيناً حتى سفارة الإمارات.",
              "الوثائق غير العربية تحتاج إلى ترجمات عربية موثقة."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلبات البراءة: توكيل قانوني موثق، مستخرج السجل التجاري، عقد التنازل، ومستند الأولوية إن وجد.",
              "التنازل: توكيل قانوني موثق، عقد تنازل، وشهادة تأسيس.",
              "التراخيص: توكيل قانوني موثق واتفاقية ترخيص.",
              "تغيير الاسم أو العنوان: توكيل قانوني موثق وشهادة تغيير رسمية.",
              "اتفاقيات الوكالة: توكيل قانوني موثق، مستندات تجارية، واتفاقية وكالة مقننة."
            ]
          },
          {
            heading: "ملخص النقاط الرئيسية",
            points: [
              "جميع المستندات الرسمية تتطلب التوثيق.",
              "يجب تقنين اتفاقيات الوكالة حتى سفارة الإمارات.",
              "يجب إتاحة المستندات الأصلية للتحقق.",
              "مطلوب تقديم نسختين منفصلتين لكل طلب.",
              "على الشركات تقديم مستندات الشركاء بالإضافة إلى متطلبات الوكالة.",
              "الوثائق غير العربية تحتاج إلى ترجمات عربية موثقة."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للحصول على المساعدة في إيداع براءات الاختراع في الإمارات وإجراءاتها، تواصل مع خبراء الملكية الفكرية في المرسى."
            ]
          }
        ]
      },
      resources: [
        { label: "دليل العلامات التجارية", href: "https://app.box.com/s/5clbaem72dfvlxox3e6nzr1db1vymlkh", type: "trademark" },
        { label: "دليل البراءات", href: "https://app.box.com/s/ampkce9rqlibhc3dhb680qmdesi0vz99", type: "patent" },
        { label: "دليل التصاميم", href: "https://app.box.com/s/fwp2zjskgnanomebd81apummnlv5wk88", type: "design" }
      ]
    },
    {
      country: "المملكة العربية السعودية",
      summary: "نقاط إنفاذ للتصاميم الصناعية ومراحل التسجيل وفق مسارات هيئة الملكية الفكرية السعودية.",
      designGuide: {
        title: "متطلبات تسجيل العلامات التجارية في المملكة العربية السعودية",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات العلامات/علامات الخدمات",
            points: [
              "توكيل قانوني باسم مقدم الطلب: نسخة ملونة ممسوحة تتضمن الاسم الكامل والعنوان مع وجوب التصديق بالأبوستيل أو التصديق لدى القنصلية السعودية.",
              "قائمة السلع/الخدمات وفق تصنيف نيس الإصدار الثاني عشر لعام 2023.",
              "تمثيل العلامة: صورة JPEG عالية الجودة.",
              "مستند الأولوية (إن وُجد): نسخة ملونة أو إلكترونية تقدم خلال 6 أشهر من الإيداع الأجنبي مع ترجمة إنجليزية مبسطة إذا كان المستند بلغة أخرى."
            ]
          },
          {
            heading: "طلبات العلامات الجماعية وعلامات الجودة",
            points: [
              "توكيل قانوني باسم مقدم الطلب مع تصديق بالأبوستيل أو القنصلية السعودية.",
              "قائمة السلع/الخدمات متوافقة مع تصنيف نيس الإصدار الثاني عشر (2023).",
              "تمثيل العلامة: صورة JPEG عالية الجودة.",
              "عقد التأسيس: نسختان مصدقتان مع تصديق بالأبوستيل أو القنصلية السعودية.",
              "وثائق نظام الرقابة: نسختان مصدقتان تشمل إجراءات الفحص والشروط وطريقة الاستخدام مع التصديق المطلوب."
            ]
          },
          {
            heading: "طلبات التجديد",
            points: [
              "توكيل قانوني باسم المالك مطابق لسجلات السجل مع التصديق بالأبوستيل أو القنصلية السعودية.",
              "نسخة من شهادة التسجيل عند عدم إدارة الملف عبر مكتبكم."
            ]
          },
          {
            heading: "طلبات التنازل",
            points: [
              "توكيل قانوني باسم المتنازل إليه مع العنوان الكامل والتصديق بالأبوستيل أو القنصلية السعودية.",
              "عقد التنازل موقع من المتنازل مع التصديق المطلوب.",
              "نسخ من شهادة التسجيل عند عدم إدارة الإيداع مباشرة."
            ]
          },
          {
            heading: "طلبات الاندماج",
            points: [
              "توكيل قانوني باسم المالك الجديد مع التفاصيل الكاملة والتصديق المطلوب.",
              "مستند الاندماج: نسخة ملونة ممسوحة مع تصديق بالأبوستيل أو القنصلية السعودية.",
              "نسخ شهادة التسجيل عند عدم إدارة الملفات داخلياً."
            ]
          },
          {
            heading: "طلبات الترخيص",
            points: [
              "توكيل قانوني باسم المرخص له مع التصديق بالأبوستيل أو القنصلية السعودية.",
              "اتفاقية الترخيص موقعة من المرخِّص والمرخَّص له ومصدق عليها.",
              "نسخ شهادة التسجيل عند وجود تعاملات خارجية."
            ]
          },
          {
            heading: "طلبات تغيير الاسم",
            points: [
              "توكيل قانوني باسم المالك الجديد يتضمن التفاصيل المحدثة مع التصديق المطلوب.",
              "مستند تغيير الاسم: نسخة ملونة مصدقة.",
              "نسخ شهادة التسجيل عند عدم إدارة الملف داخلياً."
            ]
          },
          {
            heading: "طلبات تغيير العنوان",
            points: [
              "توكيل قانوني باسم المالك مع العنوان الجديد والتصديق المطلوب.",
              "نسخ شهادة التسجيل عند عدم إدارة الملف عبر مكتبكم."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "جميع المستندات الرسمية تتطلب تصديق الأبوستيل أو القنصلية السعودية ويمكن تقديمها كنسخ ملونة ممسوحة.",
              "يجب أن تكون بيانات مقدم الطلب أو المالك كاملة ودقيقة في جميع الطلبات.",
              "تعتمد المملكة تصنيف نيس الإصدار الثاني عشر (2023) للسلع والخدمات.",
              "يجب أن تكون صور العلامة بصيغة JPEG عالية الجودة وواضحة.",
              "يجب تقديم مطالبات الأولوية خلال 6 أشهر مع مستندات مصدقة ومترجمة."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلبات العلامات/علامات الخدمات | التوكيل القانوني | قائمة السلع والخدمات، صورة العلامة، مستند الأولوية إن وجد | يلزم التصديق",
              "طلبات العلامات الجماعية/علامات الجودة | التوكيل القانوني | قائمة السلع والخدمات، صورة العلامة، عقد التأسيس، وثائق نظام الرقابة | يلزم التصديق",
              "طلبات التجديد | التوكيل القانوني | شهادة التسجيل | يلزم التصديق",
              "طلبات التنازل | التوكيل القانوني (المتنازل إليه) | عقد التنازل، شهادة التسجيل | يلزم التصديق",
              "طلبات الاندماج | التوكيل القانوني (المالك الجديد) | مستند الاندماج، شهادة التسجيل | يلزم التصديق",
              "طلبات الترخيص | التوكيل القانوني (المرخص له) | اتفاقية الترخيص، شهادة التسجيل | يلزم التصديق",
              "طلبات تغيير الاسم | التوكيل القانوني (الاسم الجديد) | مستند التغيير، شهادة التسجيل | يلزم التصديق",
              "طلبات تغيير العنوان | التوكيل القانوني (المالك) | شهادة التسجيل | يلزم التصديق"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "جميع التوكيلات تحتاج إلى تصديق الأبوستيل أو القنصلية السعودية.",
              "تُقبل النسخ الملونة الممسوحة بشرط وضوح جميع التفاصيل.",
              "شهادات التسجيل ضرورية للإجراءات اللاحقة عند إدارة الملفات خارجياً.",
              "مطالبات الأولوية خاضعة لمهلة صارمة قدرها 6 أشهر من تاريخ الإيداع الأجنبي.",
              "يجب الاعتماد على تصنيف نيس الإصدار الثاني عشر (2023) لوصف السلع والخدمات."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للمساعدة في تسجيل العلامات التجارية في المملكة العربية السعودية وإجراءاتها، تواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf"
      },
      resources: [
        { label: "دليل التصاميم", href: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf", type: "design" }
      ]
    },
    {
      country: "دولة قطر",
      summary: "تحديثات الانضمام إلى مدريد، جداول الفحص، ومتطلبات المستندات للعلامات والبراءات والتصاميم.",
      trademarkGuide: {
        title: "متطلبات تسجيل العلامات التجارية في قطر",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات العلامات/علامات الخدمات",
            points: [
              "توكيل قانوني مقنن حتى القنصلية القطرية في بلد مقدم الطلب.",
              "مستندات تجارية تثبت حق مقدم الطلب في العلامة: وثيقة من غرفة التجارة، مستخرج السجل التجاري، أو مستند حكومي مؤهل.",
              "يجب أن يثبت مقدم الطلب الفردي أنه يدير نشاطاً تجارياً أو يمتلك حقوقاً في العلامة."
            ]
          },
          {
            heading: "طلبات العلامات الجماعية",
            points: [
              "توكيل قانوني مقنن حتى القنصلية القطرية أو أي قنصلية عربية.",
              "شهادة تأسيس أو مستخرج من السجل التجاري (صورة بسيطة مقبولة).",
              "طبعات العلامة: خمس نسخ من العلامة.",
              "قائمة السلع/الخدمات مع استبعاد عنصر واحد على الأقل من كل فئة؛ لا يُسمح بتغطية الفئة بالكامل.",
              "بيانات مقدم الطلب: الاسم، العنوان، الجنسية، النشاط، الوضع القانوني، وطبيعة العمل.",
              "نسخة من مستند الأولوية عند المطالبة بها."
            ]
          },
          {
            heading: "تجديد تسجيل العلامة/علامة الخدمة",
            points: [
              "توكيل قانوني مقنن حتى القنصلية القطرية أو أي قنصلية عربية إذا لم يكن مودعاً مسبقاً.",
              "معلومات مقدم الطلب: الاسم، العنوان، النشاط، الجنسية، وطبيعة العمل.",
              "رقم تسجيل العلامة القائم."
            ]
          },
          {
            heading: "طلبات التنازل",
            points: [
              "توكيل قانوني منفذ من المتنازل إليه ومقنن حتى القنصلية القطرية أو أي قنصلية عربية.",
              "عقد تنازل موقع من الطرفين، موثق ومقنن حتى القنصلية القطرية.",
              "شهادة تأسيس أو مستخرج سجل تجاري للمتنازل إليه (صورة بسيطة مقبولة)."
            ]
          },
          {
            heading: "طلبات المستخدم المسجل/اتفاقيات الترخيص",
            points: [
              "توكيل قانوني منفذ من المرخص له، مقنن حتى القنصلية القطرية أو أي قنصلية عربية.",
              "اتفاقية الترخيص موقعة من الطرفين، موثقة ومقننة حتى القنصلية القطرية.",
              "شهادة تأسيس أو مستخرج سجل تجاري للمستخدم المسجل (صورة بسيطة مقبولة)."
            ]
          },
          {
            heading: "طلبات تغيير الاسم/العنوان",
            points: [
              "توكيل قانوني بالاسم و/أو العنوان الجديد، مقنن حتى القنصلية القطرية أو أي قنصلية عربية.",
              "شهادة رسمية تثبت التغيير."
            ]
          },
          {
            heading: "تعديل طلبات العلامات",
            points: [
              "توكيل قانوني مقنن حتى القنصلية القطرية أو أي قنصلية عربية ومختوم بختم الشركة.",
              "شهادة موثقة تثبت التعديل."
            ]
          },
          {
            heading: "اتفاقيات الوكالة",
            points: [
              "توكيل قانوني مقنن حتى القنصلية القطرية أو أي قنصلية عربية.",
              "اتفاقية وكالة موقعة من الأصيل والوكيل، مقننة حتى القنصلية القطرية.",
              "يجب أن تتضمن الاتفاقية أسماء وجنسيات الأطراف، السلع/الخدمات المغطاة، الحقوق والالتزامات، التزامات الأصيل، وآلية توزيع الأرباح أو العمولات."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "المسار الأساسي للتقنين عبر القنصلية القطرية؛ ويقبل التقنين عبر أي قنصلية عربية عند تعذر القنصلية القطرية.",
              "لا يمكن تغطية جميع السلع/الخدمات في الفئة؛ يجب استبعاد بند واحد على الأقل.",
              "يتعين على المتقدمين الأفراد تقديم إثبات نشاط تجاري يؤكد حقهم في العلامة.",
              "طلبات العلامات الجماعية تتطلب خمس طبعات للعلامة وبيانات كاملة عن مقدم الطلب.",
              "يجب تقنين الاتفاقيات والمستندات بالكامل قبل تقديمها."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلبات العلامات/علامات الخدمات | التوكيل القانوني | مستندات تجارية | تقنين القنصلية القطرية",
              "طلبات العلامات الجماعية | التوكيل القانوني | شهادة التأسيس، خمس طبعات للعلامة، قائمة السلع، بيانات مقدم الطلب، مستند الأولوية إن وجد | تقنين القنصلية القطرية أو أي قنصلية عربية",
              "طلبات التجديد | التوكيل القانوني (إن كان جديداً) | بيانات مقدم الطلب، رقم العلامة | تقنين القنصلية القطرية أو أي قنصلية عربية",
              "طلبات التنازل | التوكيل القانوني (المتنازل إليه) | عقد التنازل، شهادة التأسيس | تقنين القنصلية القطرية أو أي قنصلية عربية",
              "طلبات الترخيص | التوكيل القانوني (المرخص له) | اتفاقية الترخيص، شهادة التأسيس | تقنين القنصلية القطرية أو أي قنصلية عربية",
              "طلبات تغيير الاسم/العنوان | التوكيل القانوني | شهادة التغيير الرسمية | تقنين القنصلية القطرية أو أي قنصلية عربية",
              "طلبات التعديل | التوكيل القانوني (مختوم) | شهادة التعديل | تقنين القنصلية القطرية أو أي قنصلية عربية",
              "اتفاقيات الوكالة | التوكيل القانوني | اتفاقية الوكالة ببيانات محددة | تقنين القنصلية القطرية أو أي قنصلية عربية"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "يُقبل التقنين عبر قنصلية عربية عند تعذر خدمات القنصلية القطرية.",
              "يجب استبعاد عنصر واحد على الأقل من كل فئة للالتزام بمتطلبات التغطية في قطر.",
              "على المتقدمين الأفراد تقديم إثبات نشاط تجاري لتأكيد حقهم في التقديم.",
              "خمس طبعات للعلامة شرط إلزامي لطلبات العلامات الجماعية.",
              "تتطلب العقود والتراخيص والاتفاقيات توثيقاً وتقنيناً كاملاً، ويستلزم تعديل الطلبات توكيلاً مختوماً."
            ]
          },
          {
            heading: "تسلسل التقنين",
            points: [
              "التقنين المفضل: القنصلية القطرية ضمن ولاية مقدم الطلب.",
              "التقنين البديل: أي قنصلية عربية عند تعذر القنصلية القطرية.",
              "ينطبق ذلك على جميع التوكيلات، والعقود، والمستندات الرسمية المقدمة في قطر."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للحصول على دعم في تسجيل العلامات التجارية في قطر والإجراءات المرتبطة بها، يرجى التواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "https://app.box.com/s/k1gbqhk5o71k52nwmta3rqi1c9e10s0n"
      },
      patentGuide: {
        title: "متطلبات تسجيل براءات الاختراع في قطر",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "متطلبات إيداع طلبات البراءة",
            points: [
              "توكيل قانوني مقنن حتى القنصلية القطرية؛ يمكن تقديمه بعد الإيداع.",
              "مواصفات براءة كاملة تتضمن الملخص والمطالبات باللغة الإنجليزية، مع إمكانية تقديم الترجمة العربية لاحقاً.",
              "تقديم مجموعة كاملة من الرسومات الخاصة بالاختراع عند الحاجة."
            ]
          },
          {
            heading: "مرونة التقديم",
            points: [
              "المستندات المطلوبة عند الإيداع: المواصفات الكاملة باللغة الإنجليزية وجميع الرسومات.",
              "المستندات التي يمكن تقديمها لاحقاً: التوكيل القانوني المقنن والترجمة العربية للمواصفات."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "يجب تقنين التوكيل القانوني عبر القنصلية القطرية وفق الإجراءات المعتمدة.",
              "يجب تقديم الملخص والمطالبات والمواصفات باللغة الإنجليزية مع استكمال الترجمة العربية لاحقاً.",
              "يجب أن تتضمن الوثائق الفنية وصفاً كاملاً وملخصاً ومطالبات ورسومات توضح الاختراع."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "التوكيل القانوني | غير محدد | يقدم بعد الإيداع عند الحاجة | تقنين القنصلية القطرية",
              "الملخص | إنجليزي وعربي | الإنجليزية عند الإيداع، العربية لاحقاً | لا",
              "المطالبات | إنجليزي وعربي | الإنجليزية عند الإيداع، العربية لاحقاً | لا",
              "المواصفات الكاملة | إنجليزي وعربي | الإنجليزية عند الإيداع، العربية لاحقاً | لا",
              "الرسومات | غير محدد | تقدم مع الطلب عند الحاجة | لا"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "تتيح المرونة في التقديم إيداع الطلب بسرعة مع استكمال المستندات الرسمية لاحقاً.",
              "تعد المواصفات الإنجليزية شرطاً أساسياً عند الإيداع ويجب أن تكون كاملة.",
              "تظل الترجمات العربية والتوكيل المقنن إلزامية رغم إمكانية تقديمها لاحقاً.",
              "يجب إرفاق جميع الرسومات المتعلقة بالاختراع منذ البداية."
            ]
          },
          {
            heading: "استراتيجية الإيداع",
            points: [
              "متطلبات الإيداع الفورية: المواصفات الكاملة باللغة الإنجليزية وجميع الرسومات ذات الصلة.",
              "المستندات اللاحقة: التوكيل القانوني المقنن عبر القنصلية القطرية والترجمة العربية للمواصفات."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للحصول على الدعم في تسجيل براءات الاختراع في قطر وإجراءات الإيداع، يرجى التواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "https://app.box.com/s/9du5aa5tdtlc14fr1863fvfg1fdtlc52"
      },
      designGuide: {
        title: "متطلبات تسجيل التصاميم في قطر",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "متطلبات إيداع طلبات التصميم",
            points: [
              "بيانات المالك: الاسم الكامل، العنوان التفصيلي، الجنسية، طبيعة النشاط، وأي بيانات ذات صلة.",
              "تعريف التصميم: عنوان التصميم، تفاصيل التسجيل في بلد المنشأ، والإفصاح عن أي تسجيلات أخرى.",
              "وصف التصميم: ملخص باللغة الإنجليزية يوضح خصائص التصميم."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "يجب أن تتضمن معلومات المالك تفاصيل قانونية وتجارية كاملة.",
              "يجب الإفصاح عن أي تسجيلات في بلد المنشأ أو دول أخرى لإثبات الحقوق السابقة.",
              "تقديم وصف تقني باللغة الإنجليزية يبرز السمات المميزة للتصميم."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "بيانات المالك | الاسم، العنوان، الجنسية، طبيعة النشاط | إنجليزي",
              "عنوان التصميم | الاسم الكامل للتصميم | إنجليزي",
              "تفاصيل التسجيل | تسجيلات بلد المنشأ أو الدول الأخرى | إنجليزي",
              "وصف التصميم | ملخص بالسمات المميزة | إنجليزي"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "تعتمد حماية التصميم على إيداع إعلانات احترازية دون متطلبات تقنين رسمية.",
              "اللغة الإنجليزية إلزامية لجميع المستندات المقدمة.",
              "إثبات التسجيل في بلد المنشأ يعزز إثبات الملكية.",
              "تعد بيانات المالك الكاملة ضرورية لتأكيد صحة الإيداع.",
              "يجب أن يتوافق الوصف مع أي مواد مرئية مرفقة."
            ]
          },
          {
            heading: "اعتبارات الإيداع",
            points: [
              "التحضير قبل الإيداع: جمع سجل التسجيلات السابقة، التحقق من بيانات المالك، وصياغة وصف باللغة الإنجليزية.",
              "إرشادات وصف التصميم: المحافظة على الدقة والاختصار، إبراز العناصر المميزة، استخدام لغة واضحة، ومطابقة الوصف مع التمثيل المرئي."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للحصول على دعم في تسجيل التصاميم في قطر وتقديم الإعلانات الاحترازية، يرجى التواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d"
      },
      resources: [
        { label: "دليل العلامات التجارية", href: "https://app.box.com/s/k1gbqhk5o71k52nwmta3rqi1c9e10s0n", type: "trademark" },
        { label: "دليل البراءات", href: "https://app.box.com/s/9du5aa5tdtlc14fr1863fvfg1fdtlc52", type: "patent" },
        { label: "دليل التصاميم", href: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d", type: "design" }
      ]
    },
    {
      country: "مملكة البحرين",
      summary: "متطلبات الإيداع، الاعتراف بالأولوية، وجداول الفحص عبر سجلات الملكية الفكرية في البحرين.",
      trademarkGuide: {
        title: "متطلبات تسجيل العلامات التجارية في البحرين",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات العلامات/علامات الخدمات الجديدة",
            points: [
              "توكيل قانوني موقّع من المفوض بالتوقيع لدى مقدم الطلب، مقنن حتى القنصلية البحرينية أو موثق بالأبوستيل.",
              "تقديم مستند داعم واحد فقط: مستند أولوية مصدق، شهادة تأسيس مقننة، شهادة من مسجل الشركات، مستخرج من السجل التجاري، أو شهادة من غرفة التجارة.",
              "تقديم بيانات مقدم الطلب كاملة بما في ذلك الاسم، العنوان، والمهنة.",
              "توفير طبعات واضحة لكل علامة كما تم إيداعها.",
              "إدراج أرقام الفئات الدولية مع وصف تفصيلي للسلع و/أو الخدمات."
            ]
          },
          {
            heading: "خيار الإيداع المتأخر",
            points: [
              "يمكن تقديم الطلبات دون مستندات مقننة بشرط تقديم جميع التصديقات المطلوبة خلال 90 يوماً من إخطار مكتب الملكية الصناعية بنتيجة الفحص."
            ]
          },
          {
            heading: "تجديد تسجيل العلامة",
            points: [
              "توكيل قانوني باسم مالك العلامة المسجل، مقنن حتى القنصلية البحرينية أو موثق بالأبوستيل."
            ]
          },
          {
            heading: "تسجيل التنازل",
            points: [
              "توكيل قانوني موقع من المفوض بالتوقيع لدى المتنازل إليه مع تقنين القنصلية البحرينية أو الأبوستيل.",
              "عقد تنازل موقع من المتنازل والمتنازل إليه، مقنن حتى القنصلية البحرينية أو موثق بالأبوستيل."
            ]
          },
          {
            heading: "تسجيل تغيير الاسم و/أو العنوان",
            points: [
              "توكيل قانوني يتضمن الاسم أو العنوان الجديد، موثق أو مصدق بالأبوستيل.",
              "شهادة رسمية تثبت التغيير، مقننة حتى القنصلية البحرينية أو موثقة بالأبوستيل."
            ]
          },
          {
            heading: "تسجيل اتفاقية الترخيص",
            points: [
              "توكيل قانوني من المالك وتوكيل منفصل من المرخص له، كل منهما مقنن حتى القنصلية البحرينية أو موثق بالأبوستيل.",
              "اتفاقية الترخيص موقعة من الطرفين ومقننة حتى القنصلية البحرينية أو موثقة بالأبوستيل."
            ]
          },
          {
            heading: "تسجيل اتفاقية الرهن/الضمان",
            points: [
              "توكيل قانوني من المالك المسجل وتوكيل من الدائن المرتهن، كلاهما مقنن أو موثق بالأبوستيل.",
              "اتفاقية حق الضمان (الرهن) مقننة حتى القنصلية البحرينية أو موثقة بالأبوستيل."
            ]
          },
          {
            heading: "تسجيل الاندماج",
            points: [
              "توكيل قانوني موقع من المفوض بالتوقيع لدى المالك الجديد مع التقنين المطلوب.",
              "مستند اندماج مصدق وموثق حتى القنصلية البحرينية أو بالأبوستيل."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "تقبل البحرين التقنين عبر القنصلية البحرينية أو توثيق الأبوستيل لجميع المستندات الرسمية.",
              "تتطلب الطلبات الجديدة مستنداً مقنناً واحداً فقط من القائمة المعتمدة.",
              "توفر مهلة سماح قدرها 90 يوماً بعد إخطار مكتب الملكية الصناعية لتقديم التصديقات، مما يسمح بالإيداع السريع.",
              "تستلزم تسجيلات الترخيص والرهن تقديم توكيلين منفصلين.",
              "يجب تصديق مستندات الاندماج قبل التقنين."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلب جديد | التوكيل القانوني (مقدم الطلب) | مستند داعم واحد، بيانات مقدم الطلب، طبعات العلامة، قائمة الفئات والسلع | القنصلية البحرينية أو الأبوستيل",
              "التجديد | التوكيل القانوني (المالك) | لا يوجد | القنصلية البحرينية أو الأبوستيل",
              "التنازل | التوكيل القانوني (المتنازل إليه) | عقد التنازل | القنصلية البحرينية أو الأبوستيل",
              "تغيير الاسم/العنوان | التوكيل القانوني (البيانات الجديدة) | شهادة التغيير | القنصلية البحرينية أو الأبوستيل",
              "اتفاقية الترخيص | التوكيل القانوني (المالك والمرخص له) | اتفاقية الترخيص | القنصلية البحرينية أو الأبوستيل",
              "اتفاقية الضمان | التوكيل القانوني (المالك والدائن المرتهن) | اتفاقية الضمان | القنصلية البحرينية أو الأبوستيل",
              "الاندماج | التوكيل القانوني (المالك الجديد) | مستند الاندماج المصدق | القنصلية البحرينية أو الأبوستيل"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "يُقبل الأبوستيل كبديل لتقنين القنصلية.",
              "يستفيد أعضاء اتفاقية لاهاي من الاكتفاء بالأبوستيل لتبسيط الإجراءات.",
              "تسمح مهلة 90 يوماً بتقديم سريع بينما تكتمل إجراءات التقنين.",
              "يجب تقديم مطالبات الأولوية خلال 6 أشهر عند الاقتضاء.",
              "يتطلب كل تصميم ثلاث طبعات، ويجب توثيق التوكيلات.",
              "تستلزم اتفاقيات الترخيص تقديم توكيلين.",
              "لا يُطلب تقديم شهادة التأسيس إلا عند عدم المطالبة بالأولوية.",
              "تستلزم تسجيلات التنازل تقديم مستندات من الطرفين.",
              "يتطلب تغيير الاسم/العنوان شهادة من الجهة المختصة."
            ]
          },
          {
            heading: "دليل اختيار المستندات الداعمة",
            points: [
              "المتقدمون الذين يطالبون بالأولوية يجب أن يقدموا مستند الأولوية خلال 6 أشهر؛ ولا حاجة لشهادة التأسيس.",
              "المتقدمون الذين لا يطالبون بالأولوية يعتمدون على شهادة تأسيس مقننة.",
              "أعضاء اتفاقية لاهاي يمكنهم استخدام الأبوستيل فقط لتسريع المعالجة."
            ]
          },
          {
            heading: "دليل استراتيجية الإيداع",
            points: [
              "الإيداع القياسي: تقديم جميع المستندات الموثقة والمقننة كاملة.",
              "الإيداع مع مهلة 90 يوماً: تقديم الطلب مع طبعات التصميم والبيانات الأساسية أثناء استكمال التوكيلات والمستندات."
            ]
          },
          {
            heading: "متطلبات تمثيل التصميم",
            points: [
              "تقديم ثلاث صور واضحة لكل تصميم باستخدام صور عالية الجودة أو رسومات مفصلة.",
              "يجب أن تعرض الصور ذات العناصر المميزة ذاتها عبر جميع المناظير.",
              "استخدام صور احترافية أو رسومات فنية لإبراز الخصائص الأساسية."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للمساعدة في تسجيل العلامات التجارية في البحرين وإجراءاتها، يرجى التواصل مع خبرائنا في الملكية الفكرية."
            ]
          }
        ]
      },
      patentGuide: {
        title: "متطلبات تسجيل براءات الاختراع في البحرين",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات براءة الاختراع",
            points: [
              "توكيل قانوني موقع من المخترع أو الشركة، مقنن حتى القنصلية البحرينية أو موثق بالأبوستيل.",
              "عقد تنازل موقع من المخترع إلى مقدم الطلب عند اختلاف الطرفين، مع التصديق المطلوب.",
              "مواصفات براءة متكاملة باللغتين الإنجليزية والعربية.",
              "نسخة مصدقة من مستند الأولوية خلال 12 شهراً من الإيداع الأول."
            ]
          },
          {
            heading: "التقديم عبر مراحل",
            points: [
              "الإيداع الكامل: تقديم جميع المستندات الموثقة والمقننة منذ البداية.",
              "الإيداع بمهلة 3 أشهر: إمكانية تقديم الطلب مع مواصفات البراءة والرسومات، واستكمال التوكيل وعقد التنازل لاحقاً.",
              "تمديد إضافي لمدة 90 يوماً: يسمح بالإيداع السريع باستخدام المواصفات ونسخة من طلب PCT أثناء تجهيز التصديقات.",
              "نافذة ترجمة 4 أشهر: تقديم المواصفات باللغة الإنجليزية أولاً ثم استكمال الترجمة العربية."
            ]
          },
          {
            heading: "متطلبات صيغة المستند",
            points: [
              "يجب أن تكون مواصفات البراءة بصيغة Word (.doc أو .docx).",
              "يمكن تقديم التوكيل وعقد التنازل والمستندات الداعمة بصيغة PDF ممسوحة.",
              "يتطلب الإيداع الأولي مستندات باللغة الإنجليزية؛ أما المستند النهائي فيتضمن نسختين باللغتين الإنجليزية والعربية.",
              "يمكن أن تبقى المستندات الداعمة بلغتها الأصلية شريطة توثيقها أو توثيق الأبوستيل."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للمساعدة في تسجيل براءات الاختراع في البحرين وإجراءاتها، يرجى التواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "/pdfs/bahrain-patent-law.pdf"
      },
      designGuide: {
        title: "متطلبات تسجيل التصاميم الصناعية في البحرين",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات التصميم الصناعي الجديدة",
            points: [
              "توكيل قانوني موقع من المفوض بالتوقيع لدى مقدم الطلب، موثق ومقنن حتى القنصلية البحرينية أو بالأبوستيل.",
              "بيانات مقدم الطلب: الاسم الكامل، العنوان، الجنسية، وطبيعة النشاط.",
              "مستند داعم: إما شهادة تأسيس مقننة عند عدم المطالبة بالأولوية أو مستند أولوية مقنن خلال 6 أشهر.",
              "تمثيل التصميم: ثلاث نسخ لكل تصميم.",
              "يُمكن لأعضاء اتفاقية لاهاي الاعتماد على الأبوستيل دون الحاجة لتقنين إضافي للتوكيلات والمستندات الداعمة."
            ]
          },
          {
            heading: "تسجيل التنازل",
            points: [
              "توكيل قانوني من المتنازل إليه، موثق ومقنن أو موثق بالأبوستيل.",
              "عقد التنازل موقع من الطرفين مع نفس متطلبات التقنين."
            ]
          },
          {
            heading: "تسجيل تغيير الاسم و/أو العنوان",
            points: [
              "توكيل قانوني يتضمن التفاصيل الجديدة، موثق ومقنن أو موثق بالأبوستيل.",
              "شهادة صادرة عن الجهة المختصة تثبت التغيير مع التقنين المطلوب."
            ]
          },
          {
            heading: "تسجيل اتفاقية الترخيص",
            points: [
              "توكيل قانوني من مالك التصميم وتوكيل منفصل من المرخص له، كل منهما مقنن أو موثق بالأبوستيل.",
              "اتفاقية الترخيص موقعة من الطرفين ومقننة وفق المتطلبات."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "يمكن إتمام التقنين عبر القنصلية البحرينية أو الأبوستيل لجميع الطلبات.",
              "يجب تقديم مستند الأولوية خلال 6 أشهر عند المطالبة بالأولوية.",
              "توجد مهلة سماح قدرها 90 يوماً لتقديم المستندات المقننة بعد الإيداع.",
              "يستفيد أعضاء اتفاقية لاهاي من معالجة أسرع عبر الأبوستيل فقط.",
              "يتطلب كل تصميم ثلاث طبعات، ويجب توثيق التوكيلات."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلب تصميم جديد | التوكيل القانوني (مقدم الطلب) | شهادة التأسيس أو مستند الأولوية، بيانات مقدم الطلب، ثلاث طبعات للتصميم | القنصلية البحرينية أو الأبوستيل | أعضاء لاهاي: الأبوستيل فقط",
              "التنازل | التوكيل القانوني (المتنازل إليه) | عقد التنازل | القنصلية البحرينية أو الأبوستيل | توثيق مطلوب",
              "تغيير الاسم/العنوان | التوكيل القانوني (بيانات جديدة) | شهادة التغيير | القنصلية البحرينية أو الأبوستيل | توثيق مطلوب",
              "اتفاقية الترخيص | التوكيل القانوني (المالك والمرخص له) | اتفاقية الترخيص | القنصلية البحرينية أو الأبوستيل | توكيلان إلزاميان"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "يُقبل الأبوستيل كبديل للتقنين القنصلي.",
              "يستفيد أعضاء اتفاقية لاهاي من إجراءات مبسطة بالأبوستيل فقط.",
              "تتيح مهلة 90 يوماً تقديماً سريعاً مع استكمال التقنين لاحقاً.",
              "يجب تقديم مطالبات الأولوية خلال 6 أشهر.",
              "من الضروري تقديم ثلاث تمثيلات لكل تصميم.",
              "يجب توثيق التوكيلات في شؤون التصميم.",
              "تستلزم اتفاقيات الترخيص وجود توكيلين.",
              "يطلب تقديم شهادة التأسيس فقط عند عدم المطالبة بالأولوية.",
              "يتطلب تسجيل التنازل تقديم مستندات من كلا الطرفين.",
              "يلزم الحصول على شهادة من الجهة المختصة عند تغيير الاسم أو العنوان."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للمساعدة في تسجيل التصاميم الصناعية في البحرين وإجراءاتها، تواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "https://app.box.com/s/t4562nx25ie0gssc0297uzeew81ww20d"
      },
      resources: [
        { label: "دليل العلامات التجارية", href: "https://app.box.com/s/57obz1s7et6582she8mtvc9vs57g3riu", type: "trademark" },
        { label: "دليل البراءات", href: "https://app.box.com/s/sr40kml17wtqzeg7x72yv76okhqv8klf", type: "patent" },
        { label: "دليل التصاميم", href: "https://app.box.com/s/5a0ktbgzhlsm9vt61lsg34jg3s000fa1", type: "design" }
      ]
    },
    {
      country: "سلطنة عُمان",
      summary: "متطلبات الإيداع خطوة بخطوة مع نقاط تجديد لملفات عُمان.",
      trademarkGuide: {
        title: "متطلبات تسجيل العلامات التجارية في سلطنة عُمان",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات العلامات/علامات الخدمات الجديدة",
            points: [
              "توكيل قانوني موقّع من المفوض بالتوقيع، موثق ومقنن بالأبوستيل أو قنصلية عُمان؛ يمكن لتوكيل واحد تغطية عدة طلبات لنفس مقدم الطلب.",
              "بيانات مقدم الطلب: الاسم الكامل، الجنسية، العنوان التفصيلي، وطبيعة النشاط أو المهنة.",
              "تمثيل العلامة: طبعة واضحة للعلامة مع المعنى أو الترجمة إن وجدت.",
              "السلع والخدمات: قوائم محددة ضمن الفئات الدولية ذات الصلة؛ لا تُقبل عناوين الفئات أو الطلبات بدون تفصيل.",
              "مستندات الشركات: نسخة بسيطة من شهادة التأسيس أو مستخرج السجل التجاري أو شهادة حسن السيرة مع ترجمة إنجليزية مبسطة عند الحاجة.",
              "مستند الأولوية (إن وُجد): نسخة مصدقة مع ترجمة إنجليزية مبسطة."
            ]
          },
          {
            heading: "طلبات العلامات الجماعية",
            points: [
              "توكيل قانوني موثق ومقنن بالأبوستيل أو قنصلية عُمان.",
              "مستندات الشركة: نسخة بسيطة من شهادة التأسيس أو مستخرج السجل التجاري أو شهادة حسن السيرة مع ترجمة إنجليزية عند الحاجة.",
              "تمثيلات العلامة: عرض جميع العلامات في ورقة واحدة.",
              "مستند الأولوية المصدق مع ترجمة إنجليزية مبسطة عند المطالبة."
            ]
          },
          {
            heading: "تجديد تسجيل العلامة",
            points: [
              "توكيل قانوني (إذا لم يكن مودعاً سابقاً) موثق ومقنن بالأبوستيل أو قنصلية عُمان.",
              "بيانات التسجيل بما في ذلك رقم العلامة والفئة الدولية."
            ]
          },
          {
            heading: "تسجيل تغيير الاسم والعنوان",
            points: [
              "توكيل قانوني موثق ومقنن بالأبوستيل أو قنصلية عُمان.",
              "شهادة تغيير أصلية أو مصدقة صادرة عن السجل التجاري مع ترجمة إنجليزية مبسطة."
            ]
          },
          {
            heading: "تسجيل التنازل",
            points: [
              "توكيل قانوني من المتنازل إليه مقنن بالأبوستيل أو قنصلية عُمان.",
              "عقد تنازل موقع من الطرفين يتضمن رقم العلامة والفئة، موثق ومقنن وفق المتطلبات.",
              "مستندات الشركة للمتنازل إليه: نسخة بسيطة من شهادة التأسيس أو مستخرج السجل التجاري أو شهادة حسن السيرة مع ترجمة إنجليزية.",
              "بيانات المتنازل إليه: الاسم الكامل، العنوان، الجنسية، وطبيعة العمل."
            ]
          },
          {
            heading: "تسجيل اتفاقية الترخيص",
            points: [
              "توكيل قانوني موثق ومقنن بالأبوستيل أو قنصلية عُمان.",
              "اتفاقية الترخيص موقعة من المرخِّص والمرخَّص له، موثقة ومقننة.",
              "مستندات الشركة للمرخَّص له: نسخة بسيطة من شهادة التأسيس أو مستخرج السجل التجاري أو شهادة حسن السيرة مع ترجمة إنجليزية.",
              "تقديم رقم التسجيل والفئة؛ تُسجل التراخيص على العلامات المسجلة فقط."
            ]
          },
          {
            heading: "تسجيل الاندماج",
            points: [
              "توكيل قانوني باسم الكيان المندمج، موثق ومقنن بالأبوستيل أو قنصلية عُمان.",
              "مستند اندماج موقع من الطرفين مع ترجمة إنجليزية مبسطة إن لزم، موثق ومقنن.",
            ]
          },
          {
            heading: "تسجيل تغيير الاسم فقط",
            points: [
              "توكيل قانوني موثق ومقنن بالأبوستيل أو قنصلية عُمان.",
              "شهادة تغيير اسم أصلية أو مصدقة صادرة عن السجل في بلد المنشأ مع ترجمة إنجليزية مبسطة."
            ]
          },
          {
            heading: "تسجيل تغيير العنوان فقط",
            points: [
              "توكيل قانوني (يُعفى إذا كان الوكيل مسجلاً مسبقاً) موثق ومقنن بالأبوستيل أو قنصلية عُمان.",
              "شهادة تغيير عنوان أصلية أو مصدقة مع ترجمة إنجليزية مبسطة."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "يمكن التقنين عبر الأبوستيل أو قنصلية عُمان حسب تفضيل مقدم الطلب.",
              "مستندات الشركات (التأسيس، السجل التجاري، شهادة حسن السيرة) تحتاج فقط إلى نسخ بسيطة مع ترجمة إنجليزية مبسطة.",
              "يمكن لتوكيل واحد مقنن تغطية عدة طلبات لنفس العميل مما يقلل التكاليف.",
              "يجب ذكر السلع والخدمات بالتفصيل لكل فئة؛ تُرفض الأوصاف العامة.",
              "تُسجل اتفاقيات الترخيص فقط على العلامات المسجلة.",
              "تحتاج مستندات الأولوية والاندماج وشهادات التغيير إلى نسخ أصلية مع ترجمة إنجليزية مبسطة."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلب جديد | التوكيل القانوني (مقدم الطلب) | بيانات مقدم الطلب، طبعة العلامة، قائمة السلع/الخدمات، مستند تأسيس (نسخة بسيطة)، مستند الأولوية عند توفره | الأبوستيل أو قنصلية عُمان | السلع والخدمات محددة؛ توكيل واحد يمكن استخدامه لعدة طلبات",
              "علامة جماعية | التوكيل القانوني (مقدم الطلب) | مستند تأسيس (نسخة بسيطة)، جميع العلامات في ورقة واحدة، مستند الأولوية إن وُجد | الأبوستيل أو قنصلية عُمان | تقديم كل العلامات معاً",
              "تجديد | التوكيل القانوني (إن كان جديداً) | رقم التسجيل والفئة | الأبوستيل أو قنصلية عُمان | الاستغناء عن التوكيل إذا كان مودعاً",
              "تغيير الاسم والعنوان | التوكيل القانوني | شهادة التغيير من السجل التجاري | الأبوستيل أو قنصلية عُمان | يتطلب نسخة أصلية أو مصدقة",
              "التنازل | التوكيل القانوني (المتنازل إليه) | عقد التنازل، مستندات شركة المتنازل إليه (نسخة بسيطة)، بيانات المتنازل إليه | الأبوستيل أو قنصلية عُمان | يجب ذكر رقم العلامة والفئة",
              "اتفاقية الترخيص | التوكيل القانوني | اتفاقية الترخيص، مستندات المرخَّص له (نسخة بسيطة)، رقم التسجيل والفئة | الأبوستيل أو قنصلية عُمان | للعلامات المسجلة فقط",
              "الاندماج | التوكيل القانوني (الكيان الجديد) | مستند الاندماج | الأبوستيل أو قنصلية عُمان | يجب أن يعكس التوكيل الاسم الجديد",
              "تغيير الاسم فقط | التوكيل القانوني | شهادة تغيير الاسم | الأبوستيل أو قنصلية عُمان | نسخة أصلية أو مصدقة",
              "تغيير العنوان فقط | التوكيل القانوني (إذا لزم) | شهادة تغيير العنوان | الأبوستيل أو قنصلية عُمان | نسخة أصلية أو مصدقة"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "يمكن استبدال تقنين القنصلية بالأبوستيل لجميع المستندات.",
              "تحتاج مستندات الشركة إلى نسخ بسيطة فقط مع ترجمة إنجليزية عند الحاجة.",
              "يتطلب عقد التنازل توقيع جميع المصممين عند اختلاف مقدم الطلب.",
              "يجب أن تشمل تمثيلات التصميم عدة مناظير لإبراز جميع السمات.",
              "يمكن المطالبة بالأولوية خلال 6 أشهر باستخدام مستندات مصدقة دون الحاجة للتقنين."
            ]
          },
          {
            heading: "قائمة التحقق من التصميم",
            points: [
              "مناظير التصميم | مطلوبة عند الإيداع | لا يلزم تقنين | لا ترجمة مطلوبة | صور أو رسومات احترافية",
              "بيانات الإيداع | مطلوبة عند الإيداع | لا يلزم تقنين | لا ترجمة مطلوبة | بيانات الطلب الكاملة",
              "التوكيل القانوني | مطلوبة عند الإيداع | الأبوستيل أو قنصلية عُمان | لا ترجمة مطلوبة | النسخة الأصلية",
              "شهادة التأسيس/السجل التجاري/حسن السيرة | مطلوبة عند الإيداع | لا يلزم تقنين | ترجمة إنجليزية عند الحاجة | نسخة بسيطة",
              "عقد التنازل | مطلوبة عند الإيداع | الأبوستيل أو قنصلية عُمان | لا ترجمة مطلوبة | النسخة الأصلية",
              "مستند الأولوية (إن وُجد) | خلال 6 أشهر | لا يلزم تقنين | ترجمة إنجليزية عند الحاجة | نسخة مصدقة",
              "ملخص التصميم | مطلوبة عند الإيداع | لا يلزم تقنين | لا ترجمة مطلوبة | وصف موجز للابتكار"
            ]
          },
          {
            heading: "ملاحظات إضافية",
            points: [
              "يجوز استخدام الأبوستيل بدلاً من التقنين القنصلي للمستندات التي تتطلب تصديقاً.",
              "يجب تقديم التوكيل الأصلي؛ لا تُقبل النسخ.",
              "عقد التنازل إلزامي عند اختلاف المصمم عن مقدم الطلب ويجب توثيقه وتقنينه.",
              "ينبغي توفير صور عالية الجودة متعددة الزوايا.",
              "تتطلب المستندات غير الإنجليزية ترجمات إنجليزية مبسطة.",
              "مستند الأولوية يحتاج إلى تصديق فقط دون تقنين."
            ]
          },
          {
            heading: "إرشادات تمثيل التصميم",
            points: [
              "تضمين مناظير أمامية، خلفية، جانبية، علوية، سفلية، ومنظور ثلاثي الأبعاد عند الحاجة.",
              "الحفاظ على مقياس وجودة وإضاءة موحدة لكل المناظير.",
              "استخدام تصوير احترافي أو رسومات فنية لإبراز العناصر المميزة.",
              "تقديم مناظير تفصيلية للميزات الفريدة."
            ]
          },
          {
            heading: "إرشادات ملخص التصميم",
            points: [
              "تلخيص عناصر الحداثة في 50–150 كلمة مع التركيز على السمات البصرية.",
              "استخدام لغة وصفية موضوعية والابتعاد عن العبارات التسويقية.",
              "إبراز العناصر التي تميز التصميم عن السابق."
            ]
          },
          {
            heading: "اختيار المستندات الداعمة",
            points: [
              "يمكن اختيار شهادة التأسيس أو مستخرج السجل التجاري أو شهادة حسن السيرة كإثبات للشخصية الاعتبارية.",
              "تحتاج هذه المستندات إلى نسخ بسيطة وترجمة إنجليزية عند الضرورة.",
              "لا يلزم تقنين للمستندات الداعمة للشركات."
            ]
          },
          {
            heading: "استراتيجية الإيداع",
            points: [
              "يمكن للمصمم الفردي الاعتماد على توكيله الخاص دون مستندات شركة أو عقد تنازل.",
              "ينبغي على الشركات تجهيز شهادة التأسيس وعقد التنازل من كل مصمم لإثبات الملكية.",
              "التخطيط لجدول التقنين بالأبوستيل أو القنصلية مسبقاً لتجنب التأخير، خاصة عند تعدد المستندات."
            ]
          },
          {
            heading: "متطلبات المطالبة بالأولوية",
            points: [
              "يجب المطالبة بالأولوية خلال 6 أشهر من تاريخ الإيداع الأول.",
              "تقديم نسخة مصدقة من طلب الأولوية مع ترجمة إنجليزية مبسطة عند الحاجة.",
              "لا يلزم تقنين مستند الأولوية."
            ]
          },
          {
            heading: "أخطاء شائعة يجب تجنبها",
            points: [
              "تقديم نسخة من التوكيل بدلاً من الأصل.",
              "إغفال عقد التنازل عندما يختلف مقدم الطلب عن المصمم أو غياب توقيع المصممين.",
              "تقديم مناظير تصميم غير كافية أو منخفضة الجودة.",
              "تقنين مستندات الشركات رغم الاكتفاء بالنسخ البسيطة.",
              "عدم إرفاق ملخص التصميم أو المطالبة بالأولوية بعد انتهاء المهلة."
            ]
          },
          {
            heading: "إجراءات التقنين",
            points: [
              "مسار الأبوستيل: توثيق التوكيل/عقد التنازل، الحصول على الأبوستيل، وإرسال الأصل إلى عُمان.",
              "المسار القنصلي: توثيق المستندات، تصديق وزارة الخارجية في بلد المنشأ، تقنينها لدى القنصلية العُمانية، ثم إرسال الأصول.",
              "لا تحتاج مستندات الشركات إلا إلى نسخ بسيطة مع الترجمات."
            ]
          },
          {
            heading: "مقارنة معالجة الطلب",
            points: [
              "يحتاج المصمم الفردي إلى توكيله ومستندات التصميم فقط، ما يقلل التكلفة والتعقيد.",
              "يتعين على الشركات تقديم عقود تنازل موثقة ومستندات شركات، ما يزيد التعقيد لكنه يضمن ملكية الشركة."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للحصول على الدعم في تسجيل التصاميم الصناعية في عُمان وإجراءاتها، تواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo"
      },
      resources: [
        { label: "دليل العلامات التجارية", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo", type: "trademark" },
        { label: "دليل البراءات", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo", type: "patent" },
        { label: "دليل التصاميم", href: "https://app.box.com/s/dyuat0ucmkh7tij1e5hb4wjwdbzixzjo", type: "design" }
      ]
    },
    {
      country: "دولة الكويت",
      summary: "نظرة شاملة على الإيداع تشمل التصنيفات وإجراءات الاعتراض وفترات الصيانة.",
      trademarkGuide: {
        title: "متطلبات تسجيل العلامات التجارية في الكويت",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات العلامات/علامات الخدمات الجديدة",
            points: [
              "توكيل قانوني موقع من المفوض بالتوقيع لدى مقدم الطلب ومقنن حتى القنصلية الكويتية (لا يُقبل الأبوستيل).",
              "مستند الأولوية (عند المطالبة): نسخة بسيطة تُقدّم خلال 6 أشهر من تاريخ الطلب الأساسي دون حاجة للتقنين."
            ]
          },
          {
            heading: "تجديد تسجيل العلامات",
            points: [
              "توكيل قانوني صادر عن المالك المسجل ومقنن حتى القنصلية الكويتية.",
              "نسخة من شهادة التسجيل الكويتية."
            ]
          },
          {
            heading: "تسجيل التنازل",
            points: [
              "توكيل قانوني من المتنازل إليه مقنن حتى القنصلية الكويتية.",
              "عقد تنازل موقع من المتنازل والمتنازل إليه ومقنن حتى القنصلية الكويتية.",
              "نسخة من شهادة التسجيل الكويتية."
            ]
          },
          {
            heading: "تسجيل تغيير الاسم و/أو العنوان",
            points: [
              "توكيل قانوني بالاسم أو العنوان الجديد مقنن حتى القنصلية الكويتية.",
              "شهادة رسمية تثبت التغيير مقننة حتى القنصلية الكويتية.",
              "نسخة من شهادة التسجيل الكويتية."
            ]
          },
          {
            heading: "تسجيل الاندماج",
            points: [
              "توكيل قانوني موقع من المفوض بالتوقيع ومقنن حتى القنصلية الكويتية.",
              "مستند اندماج موقع من الطرفين ومقنن حتى القنصلية الكويتية.",
              "نسخة من شهادة التسجيل الكويتية."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "التقنين عبر القنصلية الكويتية إلزامي لجميع التوكيلات والمستندات الخاصة بالتصرفات؛ لا يُقبل الأبوستيل.",
              "يمكن تقديم مستندات الأولوية وشهادات التسجيل كنسخ بسيطة بدون تقنين.",
              "يجب تقديم مطالبات الأولوية خلال 6 أشهر من تاريخ الطلب الأساسي.",
              "تتطلب التصرفات بعد التسجيل توكيلاً مقنناً، ونسخة من شهادة التسجيل الكويتية، والمستند المقنن الخاص بالتصرف."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلبات العلامات الجديدة | التوكيل القانوني (مقدم الطلب) | مستند الأولوية عند المطالبة | التقنين عبر القنصلية الكويتية | مستند الأولوية نسخة بسيطة",
              "طلبات التجديد | التوكيل القانوني (المالك) | شهادة التسجيل الكويتية | التقنين عبر القنصلية الكويتية | نسخة الشهادة كافية",
              "تسجيل التنازل | التوكيل القانوني (المتنازل إليه) | عقد التنازل، نسخة شهادة التسجيل | التقنين عبر القنصلية الكويتية | العقد موقع من الطرفين",
              "تغيير الاسم/العنوان | التوكيل القانوني (البيانات الجديدة) | شهادة تغيير رسمية، نسخة شهادة التسجيل | التقنين عبر القنصلية الكويتية | الشهادة صادرة عن جهة مختصة",
              "تسجيل الاندماج | التوكيل القانوني | مستند الاندماج، نسخة شهادة التسجيل | التقنين عبر القنصلية الكويتية | المستند موقع من الطرفين"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "التقنين القنصلي إلزامي؛ يُرفض استخدام الأبوستيل.",
              "يجب أن تُنفذ توكيلات التنازل من قبل المتنازل إليه وليس المتنازل.",
              "يجب أن تعكس توكيلات تغيير الاسم/العنوان البيانات المحدثة.",
              "يجب أن تصدر شهادات التغيير عن جهات حكومية رسمية؛ لا تكفي إقرارات الشركة.",
              "يجب أن تتضمن مستندات التصرف تفاصيل العلامة وتوقيعات جميع الأطراف."
            ]
          },
          {
            heading: "متطلبات التقنين",
            points: [
              "تتطلب التوكيلات وعقود التنازل ومستندات الاندماج وشهادات التغيير تقنين القنصلية الكويتية.",
              "يمكن تقديم مستندات الأولوية وشهادات التسجيل الكويتية كنسخ بسيطة دون تقنين.",
              "يتطلب مسار التقنين عادةً التوثيق، ثم تصديق وزارة الخارجية، ثم تقنين القنصلية الكويتية قبل التقديم."
            ]
          },
          {
            heading: "إرشادات خاصة بالمعاملات",
            points: [
              "التنازل: يجب أن يذكر العقد اسم العلامة ورقمها وفئتها، وأن يحمل توقيعات الطرفين وتقنين القنصلية الكويتية.",
              "تغيير الاسم/العنوان: تقديم شهادة رسمية مقننة توضح البيانات القديمة والجديدة مع التوكيل المحدّث.",
              "الاندماج: توفير مستند اندماج مقنن يحدد جميع الكيانات المندمجة والكيان الباقي مع تأكيد تاريخ النفاذ."
            ]
          },
          {
            heading: "توصيات استراتيجية الإيداع",
            points: [
              "استخدام توكيل مقنن واحد لتغطية طلبات متعددة لتقليل التكاليف.",
              "تخصيص وقت كافٍ (3–4 أسابيع عادةً) لتقنين المستندات قبل المعاملات بعد التسجيل.",
              "تحضير نسخ من شهادات التسجيل الكويتية مبكراً لتسريع إجراءات التنازل أو الاندماج أو التغيير."
            ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للحصول على الدعم في تسجيل العلامات التجارية في الكويت وإجراءاتها، يرجى التواصل مع خبراء الملكية الفكرية لدينا."
            ]
          }
        ],
        downloadHref: "/pdfs/kuwait-trademark-law.pdf"
      },
      patentGuide: {
        title: "متطلبات تسجيل براءات الاختراع في الكويت",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "متطلبات الإيداع",
            points: [
              "توكيل قانوني موثق ومقنن حتى القنصلية الكويتية (لا يُقبل الأبوستيل).",
              "مواصفات براءة كاملة باللغة الإنجليزية مع ترجمة عربية.",
              "ملخص باللغتين العربية والإنجليزية.",
              "مطالبات كاملة باللغتين العربية والإنجليزية.",
              "رسومات براءة (إن وُجدت).",
              "مستند أولوية (إن وُجد) مع ترجمة عربية.",
              "اتفاقية PCT (إن انطبق) مع ترجمة عربية.",
              "عقد تنازل من المخترعين إذا كان مقدم الطلب كياناً آخر."
            ]
          },
          {
            heading: "نظام التقديم",
            points: [
              "يُقبل الإيداع الأولي بالمواصفات والرسومات الإنجليزية مع توفير النسخ العربية خلال فترة محددة.",
              "يمكن تقديم التوكيل القانوني خلال مهلة قصيرة بعد الإيداع بشرط استكمال التقنين قبل الفحص الرسمي." ]
          },
          {
            heading: "ملخص المتطلبات",
            points: [
              "التقنين القنصلي إلزامي لجميع التوكيلات وعقود التنازل.",
              "المواصفات والمطالبات والملخص يجب توفيرها باللغتين العربية والإنجليزية.",
              "يتعين تقديم نسخة مصدقة من مستند الأولوية أو طلب PCT مع ترجمة عربية بسيطة." ]
          },
          {
            heading: "قائمة التحقق",
            points: [
              "التوكيل القانوني | عند الإيداع أو خلال مهلة قصيرة | تقنين القنصلية الكويتية | لا ترجمة مطلوبة",
              "المواصفات والمطالبات | عند الإيداع | لا تقنين | ترجمة عربية مطلوبة",
              "الملخص | عند الإيداع | لا تقنين | ترجمة عربية",
              "الرسومات | عند الإيداع | لا تقنين | لا ترجمة",
              "مستند الأولوية | خلال 6 أشهر | لا تقنين | ترجمة عربية",
              "مستند PCT | عند المطابقة | لا تقنين | ترجمة عربية",
              "عقد التنازل | عند اختلاف المخترع | تقنين القنصلية الكويتية | لا ترجمة" ]
          },
          {
            heading: "إرشادات قانونية",
            points: [
              "لا يُقبل الأبوستيل؛ يجب التقنين عبر القنصلية الكويتية.",
              "يجب توفير الترجمات العربية للمستندات الفنية خلال الفترة المحددة.",
              "ينبغي توفير مستندات الأولوية وPCT مبكراً لضمان قبول الطلب." ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "التوكيل القانوني وعقود التنازل يجب أن تمر بسلسلة التقنين (توثيق، وزارة الخارجية، القنصلية الكويتية).",
              "يجب الاحتفاظ بنسخ إضافية من المواصفات والمطالبات لإدراج التعديلات.",
              "ينبغي الحصول على توقيع المخترعين على عقد التنازل مبكراً لتفادي أسئلة الملكية." ]
          },
          {
            heading: "أخطاء شائعة",
            points: [
              "تقديم توكيلات مقننة بالأبوستيل بدلاً من القنصلية الكويتية.",
              "إيداع مواصفات أو رسومات بدون ترجمة عربية.",
              "إغفال تقديم مستندات PCT أو الأولوية عند الاقتضاء.",
              "غياب عقد التنازل عند اختلاف مقدم الطلب عن المخترعين." ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للحصول على دعم في تسجيل براءات الاختراع بالكويت وإجراءاتها، تواصل مع خبراء الملكية الفكرية لدينا." ]
          }
        ],
        downloadHref: "/pdfs/kuwait-patent-law.pdf"
      },
      designGuide: {
        title: "متطلبات تسجيل التصاميم الصناعية في الكويت",
        updated: "أكتوبر 2025",
        sections: [
          {
            heading: "طلبات التصميم الصناعي الجديدة",
            points: [
              "توكيل قانوني موقع من المفوض بالتوقيع ومقنن حتى القنصلية الكويتية.",
              "الشركات: تقديم مستخرج سجل تجاري مقنن أو عقد/نظام أساسي رسمي مقنن.",
              "بيانات مقدم الطلب: الاسم الكامل، العنوان، الجنسية، وطبيعة النشاط.",
              "تمثيلات التصميم: صورتان لكل تصميم أو نموذج توضح مناظير مختلفة."
            ]
          },
          {
            heading: "تسجيل التنازل",
            points: [
              "توكيل قانوني من المتنازل إليه مقنن حتى القنصلية الكويتية.",
              "عقد تنازل موقع من الطرفين ومقنن حتى القنصلية الكويتية."
            ]
          },
          {
            heading: "تسجيل تغيير الاسم و/أو العنوان",
            points: [
              "توكيل قانوني بالبيانات الجديدة مقنن حتى القنصلية الكويتية.",
              "شهادة تغيير مقننة حتى القنصلية الكويتية."
            ]
          },
          {
            heading: "تسجيل الاندماج",
            points: [
              "توكيل قانوني موقع من المفوض بالتوقيع للكيان الباقي ومقنن حتى القنصلية الكويتية.",
              "مستند اندماج موقع من الطرفين ومقنن حتى القنصلية الكويتية."
            ]
          },
          {
            heading: "ملخص المتطلبات الرئيسية",
            points: [
              "يُعد التقنين عبر القنصلية الكويتية إلزامياً لجميع التوكيلات والمستندات؛ لا يُقبل الأبوستيل.",
              "يجب تقديم تمثيلين كاملين لكل تصميم يوضحان عدة مناظير.",
              "يتعين على الشركات تقنين مستخرجات السجل التجاري أو عقد/نظام التأسيس.",
              "يجب عرض مناظير التصميم على أوراق بخطوط واضحة وتسمية كل منظور."
            ]
          },
          {
            heading: "قائمة التحقق من المستندات",
            points: [
              "طلبات التصميم الجديدة | التوكيل القانوني (مقدم الطلب) | مستندات الشركة المقننة (للشركات)، بيانات مقدم الطلب، تمثيلات التصميم | التقنين عبر القنصلية الكويتية | تقديم مناظير متعددة",
              "تسجيل التنازل | التوكيل القانوني (المتنازل إليه) | عقد التنازل | التقنين عبر القنصلية الكويتية | توقيع الطرفين",
              "تغيير الاسم/العنوان | التوكيل القانوني (البيانات الجديدة) | شهادة التغيير | التقنين عبر القنصلية الكويتية | يجب أن تعكس التوكيلات البيانات الجديدة",
              "تسجيل الاندماج | التوكيل القانوني | مستند الاندماج | التقنين عبر القنصلية الكويتية | مستند موقع من جميع الأطراف"
            ]
          },
          {
            heading: "ملاحظات مهمة",
            points: [
              "يجب تقديم تمثيلين كاملين لكل تصميم مع إبراز المناظير المختلفة.",
              "يلزم توضيح تسمية المناظير مثل منظور أمامي، جانبي، علوي، سفلي، ومنظور ثلاثي الأبعاد.",
              "يجب أن تصدر التوكيلات الخاصة بالتنازل من المتنازل إليه وأن تتضمن التوكيلات الخاصة بالتغيير التفاصيل المحدّثة.",
              "المستندات الناقصة في التسلسل القنصلي تُرفض.",
            ]
          },
          {
            heading: "إرشادات تمثيل التصميم",
            points: [
              "عرض الصور بشكل مستقيم على الورقة مع جمع المناظير ذات الصلة.",
              "تضمين مناظير أمامية، جانبية، علوية، سفلية، ومناظير تفصيلية عند الحاجة.",
              "استخدام صور أو رسومات عالية الدقة بمقياس متناسق."
            ]
          },
          {
            heading: "متطلبات مستندات الشركة",
            points: [
              "يجب أن تكون مستخرجات السجل التجاري حديثة ورسمية ومقننة حتى القنصلية الكويتية.",
              "يتعين تقنين عقد التأسيس أو النظام الأساسي بالكامل.",
              "المتقدمون الأفراد غير مطالبين بمستندات الشركة لكن يجب تقنين التوكيل." ]
          },
          {
            heading: "استراتيجية الإيداع",
            points: [
              "يستفيد الأفراد من إجراءات مبسطة تتطلب توكيلاً مقنناً وتمثيلات للتصميم فقط.",
              "يجب على الشركات تخصيص وقت إضافي لتقنين مستندات الشركة والتوكيلات.",
              "التخطيط لفترة تجهيز 4–6 أسابيع لإتمام التقنين وإعداد ملفات التصميم." ]
          },
          {
            heading: "أخطاء شائعة",
            points: [
              "تقديم مستندات مقننة بالأبوستيل بدلاً من القنصلية الكويتية.",
              "إرفاق تمثيل واحد فقط أو إغفال المناظير المطلوبة.",
              "عدم تقنين مستندات الشركة للمتقدمين من الشركات.",
              "إهمال تسمية المناظير أو ترتيبها بشكل مائل على الأوراق." ]
          },
          {
            heading: "دعم الخبراء",
            points: [
              "للمساعدة في تسجيل التصاميم الصناعية في الكويت وإجراءاتها، يرجى التواصل مع خبرائنا." ]
          }
        ],
        downloadHref: "/pdfs/kuwait-design-law.pdf"
      },
      resources: [
        { label: "دليل العلامات التجارية", href: "https://app.box.com/s/ga6nwfqhzjvm6tyjvu4lkyjrdxnig3n8", type: "trademark" },
        { label: "دليل البراءات", href: "https://app.box.com/s/lgbhury7k32scqasl357wty8pwp0sd54", type: "patent" },
        { label: "دليل التصاميم", href: "https://app.box.com/s/z4lkc0hnocaif6ugq0ebl53qtqo6uoqj", type: "design" }
      ]
    },
  ]
};

