export type Language = 'en' | 'ar';

export const languages = {
  en: 'English',
  ar: 'العربية'
};

export const supportedLanguages: Language[] = ['en', 'ar'];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      ourStory: 'Our Story',
      services: 'Services',
      jurisdictions: 'Jurisdictions',
      newsEvents: 'News & Events',
      insightsForms: 'Insights & Forms',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    hero: {
      title: 'Protecting Your Intellectual Property Rights',
      subtitle: 'Your trusted IP partner — from Kuwait to the world.',
      cta: {
        consultation: 'Schedule a Consultation',
        explore: 'Explore Our Services'
      }
    },
    intro: {
      statement: 'AL Marsa Intellectual Property & Trademark Agents is a Kuwait‑based boutique IP firm committed to excellence, integrity, and international reach. We help individuals, startups, and corporations safeguard their innovations, brands, and creative expressions across multiple jurisdictions.'
    },
    stats: {
      founded: 'Founded',
      mattersManaged: 'Matters Managed',
      jurisdictions: 'Global Jurisdictions',
      satisfaction: 'Client Satisfaction'
    },
    services: {
      title: 'Our Core Services',
      subtitle: 'Below is a preview of what we offer — click to learn more:',
      sectionTitle: 'Our Services',
      mainTitle: 'Comprehensive IP Solutions',
      list: {
        trademark: {
          title: 'Trademark Registration & Protection',
          description: 'From search and filing to renewals and opposition'
        },
        patent: {
          title: 'Patent Application & Prosecution',
          description: 'Technical drafting, filing, and prosecution assistance'
        },
        litigation: {
          title: 'IP Litigation & Enforcement',
          description: 'Dispute resolution, infringement actions, enforcement strategy'
        },
        global: {
          title: 'Global & Cross-Border IP',
          description: 'PCT, Madrid, local counsel coordination, portfolio management'
        },
        design: {
          title: 'Industrial Design & Model Protection',
          description: 'Design registration, monitoring, and defense'
        }
      }
    },
    features: {
      title: 'Why AL Marsa?',
      subtitle: 'We don\'t sell one-size-fits-all; each client receives a plan built for their field, goals, and jurisdictions.',
      list: [
        'Local Expertise, Global Vision',
        'Tailored, Proactive Strategies',
        'Responsive & Transparent Communication',
        'Deep Understanding of GCC IP Landscape'
      ]
    },
    workflow: {
      title: 'How We Work — Our Approach',
      subtitle: 'A systematic approach to protecting and managing your intellectual property.',
      steps: [
        {
          title: 'Consultation & IP Audit',
          description: 'We assess your innovations, brands, and vulnerable assets.'
        },
        {
          title: 'Strategy & Filing',
          description: 'We design filing strategy (national, regional, international) and handle applications.'
        },
        {
          title: 'Monitoring & Enforcement',
          description: 'We watch, detect potential conflicts, and propose action when needed.'
        },
        {
          title: 'Defense & Litigation',
          description: 'If disputes arise, we defend your rights in courts, oppositions, and alternative forums.'
        }
      ]
    },
    cta: {
      title: 'Let\'s Get Started',
      subtitle: 'Ready to protect your ideas, brand, or invention?',
      contact: 'Contact Us Today',
      proposal: 'Request a Proposal',
      ready: 'Ready to protect your IP?',
      build: 'Build a resilient IP programme with us',
      description: 'Speak with an advisor who understands the jurisdictions that matter to your business.',
      kickoff: 'Schedule your kickoff call',
      proposalDeck: 'Request a proposal deck'
    },
    trust: {
      title: 'Trusted by Leading Organizations',
      subtitle: 'Building partnerships through excellence'
    },
    advantages: {
      sectionTitle: 'Our Advantages',
      mainTitle: 'Why Choose AL Marsa',
      subtitle: 'We deliver comprehensive IP solutions tailored to your business needs'
    },
    process: {
      sectionTitle: 'Our Process',
      title: 'How We Work',
      subtitle: 'A proven approach to IP protection',
      discuss: 'Discuss your IP needs'
    },
    footer: {
      description: 'Leading intellectual property and trademark agents providing comprehensive protection for your innovations and brands across the GCC and MENA region.',
      followUs: 'Follow Us',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      getInTouch: 'Get In Touch',
      phone: 'Phone',
      email: 'Email',
      office: 'Office',
      copyright: 'Al Marsa Intellectual Property & Trademark Agents. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy',
      services: {
        ipRegistration: 'IP Registration & Protection',
        enforcement: 'Enforcement & Litigation',
        licensing: 'Licensing & Assignment',
        antiCounterfeiting: 'Anti-Counterfeiting Programmes',
        ipStrategy: 'IP Strategy & Advisory'
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Contact Us',
      description: 'Reach out to discuss your IP protection needs',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company',
        service: 'Service Interested In',
        urgency: 'Urgency',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        selectService: 'Select a service',
        selectUrgency: 'Select urgency level',
        required: 'Required',
        optional: 'Optional'
      },
      services: {
        trademark: 'Trademark Registration',
        patent: 'Patent Applications',
        litigation: 'IP Litigation',
        strategy: 'IP Strategy Consulting',
        licensing: 'Licensing & Transactions',
        brandProtection: 'Brand Protection',
        other: 'Other'
      },
      urgency: {
        routine: 'Routine Inquiry',
        timeSensitive: 'Time-Sensitive',
        urgent: 'Urgent'
      },
      info: {
        location: 'Office location',
        phoneWhatsapp: 'Phone & WhatsApp',
        emailAddress: 'Email address',
        businessHours: 'Business hours'
      },
      success: 'Thank you! Your message has been sent successfully.',
      error: 'Failed to send message. Please try again.'
    },
    ourStory: {
      title: 'Our Story',
      subtitle: 'Building Trust Through Excellence',
      hero: {
        badge: 'About Al Marsa',
        title: 'Your Global Partner in Intellectual Property',
        subtitle: 'Rooted in Kuwait, connected globally. We deliver precision IP protection with commercial insight and strategic enforcement.',
        features: {
          leadership: {
            title: 'Dedicated Client Leadership',
            description: 'Multi-jurisdictional mandates coordinated end-to-end'
          },
          strategy: {
            title: 'Integrated Strategy',
            description: 'Prosecution, enforcement, and commercialization aligned'
          },
          reporting: {
            title: 'Transparent Reporting',
            description: 'Leadership informed at every critical milestone'
          }
        },
        cta: {
          contact: 'Get In Touch',
          services: 'Our Services'
        }
      },
      trust: {
        eyebrow: 'Our Track Record',
        title: 'Trusted By Leaders',
        insights: {
          experience: {
            metric: '20+',
            label: 'Years of combined GCC experience'
          },
          jurisdictions: {
            metric: '150+',
            label: 'Jurisdictions coordinated through partners'
          },
          retention: {
            metric: '92%',
            label: 'Matters retained through client referrals'
          }
        }
      },
      foundation: {
        eyebrow: 'Our Foundation',
        title: 'Delivering Tailored IP Strategies for Unparalleled Protection and Growth',
        subtitle: 'Every engagement is anchored by collaborative planning, success metrics, and regional roadmaps that accelerate decision-making.',
        vision: {
          badge: 'Founding Vision',
          title: 'Strategic IP Partner for Ambitious Leaders',
          description: 'We combine prosecution excellence, contentious expertise, and commercial fluency. Our teams steward portfolios that power IPOs, franchise expansions, and cross-border investments.'
        },
        commitment: {
          badge: 'Our Commitment',
          title: 'Measurable Outcomes at Every Stage',
          description: 'Every mandate includes defined deliverables, exposure mitigation plans, and reporting cadences that keep general counsel and leadership aligned from day one.'
        }
      },
      journey: {
        eyebrow: 'Our Journey',
        title: 'Two Decades of Excellence',
        subtitle: 'Sustained growth, diversified expertise, and client wins across the GCC, MENA, and global innovation corridors.',
        milestones: {
          2004: {
            year: '2004',
            title: 'Foundation',
            description: 'Al Marsa IP was established with a vision to deliver world-class intellectual property services across the Middle East.'
          },
          2010: {
            year: '2010',
            title: 'Regional Expansion',
            description: 'We broadened our reach throughout the GCC, building alliances with leading IP firms to fast-track cross-border filings.'
          },
          2015: {
            year: '2015',
            title: 'Global Network',
            description: 'A vetted network spanning 150+ jurisdictions enabled clients to manage portfolios through a single strategic partner.'
          },
          2020: {
            year: '2020',
            title: 'Digital Innovation',
            description: 'We debuted a digital client portal for transparent mandate tracking and streamlined document collaboration.'
          },
          2024: {
            year: '2024',
            title: 'Excellence Recognised',
            description: 'Serving 500+ clients with over 2,000 successful registrations cemented our reputation for precision and responsiveness.'
          }
        }
      },
      principles: {
        eyebrow: 'Our Principles',
        title: 'Values That Drive Excellence',
        subtitle: 'These tenets ensure advice that is commercially viable, culturally informed, and defensible in every forum.',
        values: {
          integrity: {
            title: 'Integrity & Trust',
            description: 'Transparent counsel and ethical practice are the foundations of every engagement.'
          },
          clientFocus: {
            title: 'Client Focus',
            description: 'We measure success by the commercial outcomes our clients achieve.'
          },
          globalOutlook: {
            title: 'Global Outlook',
            description: 'Forward-looking strategies anticipate multi-jurisdictional opportunities and challenges.'
          },
          innovation: {
            title: 'Innovation',
            description: 'We invest in tools and training that keep us at the forefront of evolving IP landscapes.'
          }
        }
      },
      leadership: {
        eyebrow: 'Leadership Team',
        title: 'Integrated Expertise',
        team: {
          hassan: {
            name: 'Hassan Al Sabah',
            role: 'Managing Partner',
            bio: 'Strategic advisor across multi-jurisdictional filings with 20 years guiding GCC innovators.',
            location: 'Kuwait City'
          },
          noor: {
            name: 'Noor Al Farsi',
            role: 'Director, Enforcement',
            bio: 'Leads dispute resolution and enforcement with a focus on customs, litigation, and negotiated settlements.',
            location: 'Kuwait City'
          },
          omar: {
            name: 'Omar Al Saeed',
            role: 'Head of Client Programmes',
            bio: 'Architects operating playbooks and reporting cadences that keep leadership informed at every stage.',
            location: 'Kuwait City'
          }
        }
      },
      testimonial: {
        title: 'What Our Clients Say',
        quote: 'The Al Marsa team integrates legal, technical, and commercial advisors in a way that gives our board total confidence in every IP decision.',
        author: 'Chief Legal Officer',
        company: 'Regional Industrial Group'
      },
      finalCta: {
        eyebrow: 'Ready to Start?',
        title: 'Advance Your IP Strategy',
        subtitle: 'Whether formalising a first filing or rationalising a global portfolio, we align protection with growth targets and governance requirements.',
        cta: {
          consultation: 'Schedule a Consultation',
          services: 'Explore Our Services'
        }
      }
    },
    servicesPage: {
      hero: {
        title: 'Comprehensive IP Execution',
        subtitle: 'Empowering Your Innovation Journey',
        description: 'End-to-end IP solutions orchestrating filings, renewals, enforcement, and commercialization programs that keep your strategy ahead of market momentum.'
      },
      pillars: {
        title: 'Six Core Service Pillars',
        subtitle: 'Our Service Offering'
      },
      process: {
        title: 'Our Service Process',
        subtitle: 'How We Deliver Excellence'
      },
      cta: {
        getStarted: 'Get Started',
        viewCoverage: 'View Coverage Areas'
      }
    },
    jurisdictions: {
      title: 'Global Coverage',
      subtitle: 'Jurisdictions We Serve',
      description: 'Comprehensive IP protection across 150+ jurisdictions worldwide',
      gcc: 'GCC Countries',
      international: 'International Coverage',
      treaties: 'International Treaties',
      details: {
        capital: 'Capital',
        ministry: 'Governing Authority',
        website: 'Official Website',
        treaties: 'Treaty Memberships',
        trademarks: 'Trademark Protection',
        patents: 'Patent Protection',
        designs: 'Industrial Design Protection',
        duration: 'Duration',
        renewable: 'Renewable',
        oppositionPeriod: 'Opposition Period',
        classes: 'Classification System',
        examination: 'Examination Type',
        types: 'Protection Types',
        novelty: 'Novelty Requirement'
      }
    },
    newsEvents: {
      title: 'News & Events',
      subtitle: 'Stay Updated',
      description: 'Latest developments in intellectual property law and practice',
      publications: 'Recent Publications',
      trademarkGazettes: 'Trademark Gazettes',
      events: 'Upcoming Events',
      viewAll: 'View All',
      readMore: 'Read More',
      register: 'Register',
      deadline: 'Objection deadline'
    },
    insights: {
      title: 'Insights & Forms',
      subtitle: 'Resources & Tools',
      description: 'Access our library of IP resources, guides, and downloadable forms',
      categories: {
        guides: 'Guides & Whitepapers',
        forms: 'Downloadable Forms',
        articles: 'Articles & Analysis',
        webinars: 'Webinars & Videos'
      },
      download: 'Download',
      view: 'View',
      watch: 'Watch'
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Retry',
      close: 'Close',
      open: 'Open',
      yes: 'Yes',
      no: 'No',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      more: 'More',
      less: 'Less',
      all: 'All',
      none: 'None',
      select: 'Select',
      selected: 'Selected',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      continue: 'Continue',
      learnMore: 'Learn More',
      exploreServices: 'Explore our IP services'
    },
    legal: {
      privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated'
      },
      termsOfService: {
        title: 'Terms of Service',
        lastUpdated: 'Last Updated'
      },
      cookiePolicy: {
        title: 'Cookie Policy',
        lastUpdated: 'Last Updated'
      }
    },
    notFound: {
      title: '404 - Page Not Found',
      message: 'The page you are looking for does not exist.',
      backHome: 'Back to Home'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      ourStory: 'قصتنا',
      services: 'خدماتنا',
      jurisdictions: 'النطاق القضائي',
      newsEvents: 'الأخبار والفعاليات',
      insightsForms: 'الرؤى والنماذج',
      contact: 'اتصل بنا',
      getStarted: 'ابدأ الآن'
    },
    hero: {
      title: 'حماية حقوق الملكية الفكرية الخاصة بك',
      subtitle: 'شريكك الموثوق في الملكية الفكرية — من الكويت إلى العالم',
      cta: {
        consultation: 'جدولة استشارة',
        explore: 'استكشاف خدماتنا'
      }
    },
    intro: {
      statement: 'المرسى للملكية الفكرية ووكلاء العلامات التجارية هي شركة كويتية متخصصة في الملكية الفكرية ملتزمة بالتميز والنزاهة والوصول الدولي. نحن نساعد الأفراد والشركات الناشئة والشركات في حماية ابتكاراتهم وعلاماتهم التجارية وإبداعاتهم في العديد من الولايات القضائية.'
    },
    stats: {
      founded: 'تأسست',
      mattersManaged: 'القضايا المُدارة',
      jurisdictions: 'الولايات القضائية العالمية',
      satisfaction: 'رضا العملاء'
    },
    services: {
      title: 'خدماتنا الأساسية',
      subtitle: 'فيما يلي نظرة عامة على ما نقدمه — انقر للمزيد من المعلومات:',
      sectionTitle: 'خدماتنا',
      mainTitle: 'حلول شاملة للملكية الفكرية',
      list: {
        trademark: {
          title: 'تسجيل وحماية العلامات التجارية',
          description: 'من البحث والتسجيل إلى التجديدات والمعارضة'
        },
        patent: {
          title: 'تقديم ومتابعة براءات الاختراع',
          description: 'صياغة تقنية، تقديم، ومساعدة في المتابعة'
        },
        litigation: {
          title: 'التقاضي وإنفاذ الملكية الفكرية',
          description: 'حل النزاعات، إجراءات التعدي، استراتيجية الإنفاذ'
        },
        global: {
          title: 'الملكية الفكرية العالمية وعبر الحدود',
          description: 'معاهدة التعاون، مدريد، تنسيق المستشار المحلي، إدارة المحفظة'
        },
        design: {
          title: 'حماية التصاميم والنماذج الصناعية',
          description: 'تسجيل التصاميم، المراقبة، والدفاع'
        }
      }
    },
    features: {
      title: 'لماذا المرسى؟',
      subtitle: 'نحن لا نقدم حلولاً موحدة؛ كل عميل يحصل على خطة مصممة لمجاله وأهدافه والولايات القضائية المعنية.',
      list: [
        'خبرة محلية، رؤية عالمية',
        'استراتيجيات مخصصة واستباقية',
        'تواصل سريع وشفاف',
        'فهم عميق لمشهد الملكية الفكرية في دول مجلس التعاون الخليجي'
      ]
    },
    workflow: {
      title: 'كيف نعمل — منهجنا',
      subtitle: 'نهج منظم لحماية وإدارة ملكيتك الفكرية.',
      steps: [
        {
          title: 'استشارة وتدقيق الملكية الفكرية',
          description: 'نقيم ابتكاراتك وعلاماتك التجارية وأصولك المعرضة للخطر.'
        },
        {
          title: 'الاستراتيجية والتسجيل',
          description: 'نصمم استراتيجية التسجيل (وطنياً، إقليمياً، دولياً) ونتعامل مع الطلبات.'
        },
        {
          title: 'المراقبة والإنفاذ',
          description: 'نراقب ونكتشف النزاعات المحتملة ونقترح الإجراءات عند الحاجة.'
        },
        {
          title: 'الدفاع والتقاضي',
          description: 'في حالة نشوء نزاعات، ندافع عن حقوقك في المحاكم والمعارضات والمنتديات البديلة.'
        }
      ]
    },
    cta: {
      title: 'لنبدأ',
      subtitle: 'هل أنت مستعد لحماية أفكارك وعلامتك التجارية أو اختراعك؟',
      contact: 'اتصل بنا اليوم',
      proposal: 'طلب عرض',
      ready: 'هل أنت مستعد لحماية ملكيتك الفكرية؟',
      build: 'بناء برنامج قوي للملكية الفكرية معنا',
      description: 'تحدث مع مستشار يفهم الولايات القضائية المهمة لعملك.',
      kickoff: 'جدولة مكالمة البدء',
      proposalDeck: 'طلب عرض تقديمي'
    },
    trust: {
      title: 'موثوق به من قبل المؤسسات الرائدة',
      subtitle: 'بناء الشراكات من خلال التميز'
    },
    advantages: {
      sectionTitle: 'مزايانا',
      mainTitle: 'لماذا تختار المرسى',
      subtitle: 'نقدم حلولاً شاملة للملكية الفكرية مصممة خصيصاً لاحتياجات عملك'
    },
    process: {
      sectionTitle: 'عمليتنا',
      title: 'كيف نعمل',
      subtitle: 'نهج مثبت لحماية الملكية الفكرية',
      discuss: 'ناقش احتياجات الملكية الفكرية الخاصة بك'
    },
    footer: {
      description: 'وكلاء رائدون في مجال الملكية الفكرية والعلامات التجارية يقدمون حماية شاملة لابتكاراتك وعلاماتك التجارية عبر دول مجلس التعاون الخليجي ومنطقة الشرق الأوسط وشمال أفريقيا.',
      followUs: 'تابعنا',
      quickLinks: 'روابط سريعة',
      ourServices: 'خدماتنا',
      getInTouch: 'تواصل معنا',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      office: 'المكتب',
      copyright: 'المرسى للملكية الفكرية ووكلاء العلامات التجارية. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      cookiePolicy: 'سياسة ملفات تعريف الارتباط',
      services: {
        ipRegistration: 'تسجيل وحماية الملكية الفكرية',
        enforcement: 'الإنفاذ والتقاضي',
        licensing: 'الترخيص والتنازل',
        antiCounterfeiting: 'برامج مكافحة التزييف',
        ipStrategy: 'استراتيجية واستشارات الملكية الفكرية'
      }
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'اتصل بنا',
      description: 'تواصل معنا لمناقشة احتياجات حماية الملكية الفكرية الخاصة بك',
      form: {
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        company: 'الشركة',
        service: 'الخدمة المهتم بها',
        urgency: 'مستوى الأهمية',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال...',
        selectService: 'اختر خدمة',
        selectUrgency: 'اختر مستوى الأهمية',
        required: 'مطلوب',
        optional: 'اختياري'
      },
      services: {
        trademark: 'تسجيل العلامات التجارية',
        patent: 'طلبات براءات الاختراع',
        litigation: 'التقاضي في الملكية الفكرية',
        strategy: 'استشارات استراتيجية الملكية الفكرية',
        licensing: 'الترخيص والمعاملات',
        brandProtection: 'حماية العلامة التجارية',
        other: 'أخرى'
      },
      urgency: {
        routine: 'استفسار روتيني',
        timeSensitive: 'حساس للوقت',
        urgent: 'عاجل'
      },
      info: {
        location: 'موقع المكتب',
        phoneWhatsapp: 'الهاتف وواتساب',
        emailAddress: 'عنوان البريد الإلكتروني',
        businessHours: 'ساعات العمل'
      },
      success: 'شكراً لك! تم إرسال رسالتك بنجاح.',
      error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.'
    },
    ourStory: {
      title: 'قصتنا',
      subtitle: 'بناء الثقة من خلال التميز',
      hero: {
        badge: 'عن المرسى',
        title: 'شريكك العالمي في الملكية الفكرية',
        subtitle: 'متجذرون في الكويت، متصلون عالميًا. نقدم حماية دقيقة للملكية الفكرية مع رؤية تجارية وإنفاذ استراتيجي.',
        features: {
          leadership: {
            title: 'قيادة مخصصة للعملاء',
            description: 'تنسيق الولايات متعددة الاختصاصات من البداية إلى النهاية'
          },
          strategy: {
            title: 'استراتيجية متكاملة',
            description: 'مواءمة الملاحقة والإنفاذ والتسويق'
          },
          reporting: {
            title: 'إعداد تقارير شفافة',
            description: 'إبلاغ القيادة في كل مرحلة حرجة'
          }
        },
        cta: {
          contact: 'تواصل معنا',
          services: 'خدماتنا'
        }
      },
      trust: {
        eyebrow: 'سجلنا الحافل',
        title: 'موثوق به من قبل القادة',
        insights: {
          experience: {
            metric: '20+',
            label: 'سنوات من الخبرة المشتركة في دول مجلس التعاون الخليجي'
          },
          jurisdictions: {
            metric: '150+',
            label: 'ولايات قضائية منسقة من خلال الشركاء'
          },
          retention: {
            metric: '92%',
            label: 'قضايا محتفظ بها من خلال إحالات العملاء'
          }
        }
      },
      foundation: {
        eyebrow: 'أساسنا',
        title: 'تقديم استراتيجيات ملكية فكرية مصممة خصيصًا لحماية ونمو لا مثيل لهما',
        subtitle: 'كل مشاركة مرتكزة على التخطيط التعاوني ومقاييس النجاح وخرائط الطريق الإقليمية التي تسرع صنع القرار.',
        vision: {
          badge: 'رؤية التأسيس',
          title: 'شريك استراتيجي في الملكية الفكرية للقادة الطموحين',
          description: 'نجمع بين التميز في الملاحقة والخبرة في المنازعات والطلاقة التجارية. تدير فرقنا محافظ تدعم الطروحات العامة الأولية وتوسع الامتيازات والاستثمارات عبر الحدود.'
        },
        commitment: {
          badge: 'التزامنا',
          title: 'نتائج قابلة للقياس في كل مرحلة',
          description: 'كل ولاية تتضمن نتائج محددة وخطط تخفيف التعرض وإيقاعات إعداد التقارير التي تبقي المستشار العام والقيادة متوافقين منذ اليوم الأول.'
        }
      },
      journey: {
        eyebrow: 'رحلتنا',
        title: 'عقدان من التميز',
        subtitle: 'نمو مستدام وخبرة متنوعة ونجاحات العملاء عبر دول مجلس التعاون الخليجي والشرق الأوسط وشمال أفريقيا وممرات الابتكار العالمية.',
        milestones: {
          2004: {
            year: '2004',
            title: 'التأسيس',
            description: 'تأسست المرسى للملكية الفكرية برؤية لتقديم خدمات ملكية فكرية عالمية المستوى عبر الشرق الأوسط.'
          },
          2010: {
            year: '2010',
            title: 'التوسع الإقليمي',
            description: 'وسعنا نطاق وصولنا في جميع أنحاء دول مجلس التعاون الخليجي، وبناء تحالفات مع شركات الملكية الفكرية الرائدة لتسريع التسجيلات عبر الحدود.'
          },
          2015: {
            year: '2015',
            title: 'الشبكة العالمية',
            description: 'شبكة موثوقة تمتد عبر أكثر من 150 ولاية قضائية مكّنت العملاء من إدارة المحافظ من خلال شريك استراتيجي واحد.'
          },
          2020: {
            year: '2020',
            title: 'الابتكار الرقمي',
            description: 'أطلقنا بوابة عملاء رقمية لتتبع الولايات بشفافية والتعاون المبسط في المستندات.'
          },
          2024: {
            year: '2024',
            title: 'التميز المعترف به',
            description: 'خدمة أكثر من 500 عميل مع أكثر من 2,000 تسجيل ناجح عززت سمعتنا في الدقة والاستجابة.'
          }
        }
      },
      principles: {
        eyebrow: 'مبادئنا',
        title: 'القيم التي تدفع التميز',
        subtitle: 'هذه المبادئ تضمن نصيحة قابلة للتطبيق تجاريًا ومستنيرة ثقافيًا وقابلة للدفاع عنها في كل منتدى.',
        values: {
          integrity: {
            title: 'النزاهة والثقة',
            description: 'المشورة الشفافة والممارسة الأخلاقية هي أساس كل مشاركة.'
          },
          clientFocus: {
            title: 'التركيز على العميل',
            description: 'نقيس النجاح بالنتائج التجارية التي يحققها عملاؤنا.'
          },
          globalOutlook: {
            title: 'نظرة عالمية',
            description: 'استراتيجيات تطلعية تتوقع الفرص والتحديات متعددة الولايات القضائية.'
          },
          innovation: {
            title: 'الابتكار',
            description: 'نستثمر في الأدوات والتدريب الذي يبقينا في طليعة المشاهد المتطورة للملكية الفكرية.'
          }
        }
      },
      leadership: {
        eyebrow: 'فريق القيادة',
        title: 'الخبرة المتكاملة',
        team: {
          hassan: {
            name: 'حسن الصباح',
            role: 'الشريك الإداري',
            bio: 'مستشار استراتيجي عبر التسجيلات متعددة الولايات القضائية مع 20 عامًا من توجيه المبتكرين في دول مجلس التعاون الخليجي.',
            location: 'مدينة الكويت'
          },
          noor: {
            name: 'نور الفارسي',
            role: 'مدير، الإنفاذ',
            bio: 'يقود حل النزاعات والإنفاذ مع التركيز على الجمارك والتقاضي والتسويات المتفاوض عليها.',
            location: 'مدينة الكويت'
          },
          omar: {
            name: 'عمر السعيد',
            role: 'رئيس برامج العملاء',
            bio: 'يصمم كتيبات التشغيل وإيقاعات إعداد التقارير التي تبقي القيادة مطلعة في كل مرحلة.',
            location: 'مدينة الكويت'
          }
        }
      },
      testimonial: {
        title: 'ما يقوله عملاؤنا',
        quote: 'يدمج فريق المرسى المستشارين القانونيين والتقنيين والتجاريين بطريقة تمنح مجلس إدارتنا ثقة تامة في كل قرار متعلق بالملكية الفكرية.',
        author: 'كبير المستشارين القانونيين',
        company: 'مجموعة صناعية إقليمية'
      },
      finalCta: {
        eyebrow: 'هل أنت مستعد للبدء؟',
        title: 'تطوير استراتيجية الملكية الفكرية الخاصة بك',
        subtitle: 'سواء كنت تقوم بإضفاء الطابع الرسمي على أول تسجيل أو ترشيد محفظة عالمية، فإننا نوائم الحماية مع أهداف النمو ومتطلبات الحوكمة.',
        cta: {
          consultation: 'جدولة استشارة',
          services: 'استكشف خدماتنا'
        }
      }
    },
    servicesPage: {
      hero: {
        title: 'تنفيذ شامل للملكية الفكرية',
        subtitle: 'تمكين رحلة الابتكار الخاصة بك',
        description: 'حلول شاملة للملكية الفكرية تنسق التسجيلات والتجديدات والإنفاذ وبرامج التسويق التي تبقي استراتيجيتك في صدارة زخم السوق.'
      },
      pillars: {
        title: 'ستة ركائز خدمة أساسية',
        subtitle: 'عرض خدماتنا'
      },
      process: {
        title: 'عملية خدمتنا',
        subtitle: 'كيف نقدم التميز'
      },
      cta: {
        getStarted: 'ابدأ الآن',
        viewCoverage: 'عرض مناطق التغطية'
      }
    },
    jurisdictions: {
      title: 'التغطية العالمية',
      subtitle: 'الولايات القضائية التي نخدمها',
      description: 'حماية شاملة للملكية الفكرية عبر أكثر من 150 ولاية قضائية في جميع أنحاء العالم',
      gcc: 'دول مجلس التعاون الخليجي',
      international: 'التغطية الدولية',
      treaties: 'المعاهدات الدولية',
      details: {
        capital: 'العاصمة',
        ministry: 'السلطة الحاكمة',
        website: 'الموقع الرسمي',
        treaties: 'عضويات المعاهدات',
        trademarks: 'حماية العلامات التجارية',
        patents: 'حماية براءات الاختراع',
        designs: 'حماية التصاميم الصناعية',
        duration: 'المدة',
        renewable: 'قابل للتجديد',
        oppositionPeriod: 'فترة المعارضة',
        classes: 'نظام التصنيف',
        examination: 'نوع الفحص',
        types: 'أنواع الحماية',
        novelty: 'متطلبات الجدة'
      }
    },
    newsEvents: {
      title: 'الأخبار والفعاليات',
      subtitle: 'ابق على اطلاع',
      description: 'آخر التطورات في قانون وممارسة الملكية الفكرية',
      publications: 'المنشورات الأخيرة',
      trademarkGazettes: 'جرائد العلامات التجارية',
      events: 'الفعاليات القادمة',
      viewAll: 'عرض الكل',
      readMore: 'اقرأ المزيد',
      register: 'سجل',
      deadline: 'الموعد النهائي للاعتراض'
    },
    insights: {
      title: 'الرؤى والنماذج',
      subtitle: 'الموارد والأدوات',
      description: 'الوصول إلى مكتبتنا من موارد الملكية الفكرية والأدلة والنماذج القابلة للتنزيل',
      categories: {
        guides: 'الأدلة والمستندات البيضاء',
        forms: 'النماذج القابلة للتنزيل',
        articles: 'المقالات والتحليلات',
        webinars: 'الندوات ومقاطع الفيديو'
      },
      download: 'تحميل',
      view: 'عرض',
      watch: 'مشاهدة'
    },
    common: {
      loading: 'جارٍ التحميل...',
      error: 'حدث خطأ',
      retry: 'إعادة المحاولة',
      close: 'إغلاق',
      open: 'فتح',
      yes: 'نعم',
      no: 'لا',
      save: 'حفظ',
      cancel: 'إلغاء',
      delete: 'حذف',
      edit: 'تعديل',
      search: 'بحث',
      filter: 'تصفية',
      sort: 'ترتيب',
      more: 'المزيد',
      less: 'أقل',
      all: 'الكل',
      none: 'لا شيء',
      select: 'اختيار',
      selected: 'محدد',
      back: 'رجوع',
      next: 'التالي',
      previous: 'السابق',
      submit: 'إرسال',
      continue: 'متابعة',
      learnMore: 'اعرف المزيد',
      exploreServices: 'استكشف خدماتنا في الملكية الفكرية'
    },
    legal: {
      privacyPolicy: {
        title: 'سياسة الخصوصية',
        lastUpdated: 'آخر تحديث'
      },
      termsOfService: {
        title: 'شروط الخدمة',
        lastUpdated: 'آخر تحديث'
      },
      cookiePolicy: {
        title: 'سياسة ملفات تعريف الارتباط',
        lastUpdated: 'آخر تحديث'
      }
    },
    notFound: {
      title: '404 - الصفحة غير موجودة',
      message: 'الصفحة التي تبحث عنها غير موجودة.',
      backHome: 'العودة إلى الرئيسية'
    }
  }
};
