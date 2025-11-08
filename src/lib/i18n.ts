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
      skipLink: 'Skip to main content',
      hero: {
        eyebrow: 'Our Services',
        title: 'Comprehensive IP Execution.',
        titleLine2: 'Empowering Your Innovation Journey.',
        subtitle: 'End-to-end IP solutions orchestrating filings, renewals, enforcement, and commercialization programs that keep your strategy ahead of market momentum.',
        metrics: {
          response: {
            metric: '24h',
            label: 'Average response for regional filings'
          },
          jurisdictions: {
            metric: '60+',
            label: 'Jurisdictions coordinated each year'
          },
          retention: {
            metric: '94%',
            label: 'Mandates retained through renewals'
          }
        },
        cta: {
          getStarted: 'Get Started',
          viewCoverage: 'View Coverage Areas'
        }
      },
      pillars: {
        eyebrow: 'Our Service Offering',
        title: 'Six Core Service Pillars',
        intro: 'We organize our offerings into six core service pillars. Whether you\'re launching a new brand, defending your patent, or expanding internationally — we have the expertise to guide you.',
        loadingMessage: 'Loading services...',
        whyItMattersLabel: 'Why it matters:',
        items: {
          registration: {
            title: 'IP Registration & Protection',
            tagline: 'Secure your intellectual property before it can be challenged.',
            services: [
              'Trademark Registration & Management',
              'Patent Filing & Prosecution',
              'Industrial Design Registration',
              'Trade Secret Safeguards'
            ],
            whyItMatters: 'Proper registration is your foundational shield.'
          },
          enforcement: {
            title: 'Enforcement & Litigation',
            tagline: 'Your rights matter — and we help you enforce them.',
            services: [
              'Infringement actions and remedies',
              'Cease & Desist Notices',
              'Opposition / Cancellation proceedings',
              'Customs recordation & border enforcement',
              'Civil & criminal litigation',
              'Domain name dispute resolution'
            ],
            whyItMatters: 'Strong enforcement protects your competitive advantage.'
          },
          licensing: {
            title: 'Licensing & Assignment',
            tagline: 'Turn your IP into revenue or strategic partnerships.',
            services: [
              'Drafting licensing agreements',
              'Assigning ownership rights',
              'Franchise & brand expansion contracts',
              'Technology transfer & joint ventures'
            ],
            whyItMatters: 'Strategic licensing maximizes your IP\'s commercial value.'
          },
          antiCounterfeiting: {
            title: 'Anti-Counterfeiting & Market Surveillance',
            tagline: 'Stay ahead of threats in the market before they escalate.',
            services: [
              'Brand protection programs',
              'Market monitoring & investigations',
              'Coordination with customs, law enforcement & regulators'
            ],
            whyItMatters: 'Proactive surveillance prevents revenue loss and brand damage.'
          },
          contracts: {
            title: 'IP Contracts & Agreements',
            tagline: 'Clear, enforceable contracts protect your creative and technical assets.',
            services: [
              'Non-Disclosure / Confidentiality Agreements',
              'Software licensing & digital IP contracts',
              'Technology transfer clauses',
              'Custom IP-specific legal agreements'
            ],
            whyItMatters: 'Airtight contracts prevent disputes before they arise.'
          },
          advisory: {
            title: 'IP Strategy & Advisory',
            tagline: 'Plan, evaluate, and leverage your IP as strategic capital.',
            services: [
              'IP portfolio audits & optimization',
              'Valuation & monetization assessments',
              'Market entry & jurisdictional planning',
              'Risk assessment & due diligence in transactions'
            ],
            whyItMatters: 'Strategic IP planning drives long-term business growth.'
          }
        }
      },
      process: {
        eyebrow: 'Our Process',
        title: 'From Ideation to Protection & Growth',
        subtitle: 'Clear. Transparent. Client-centric.',
        loadingMessage: 'Loading process steps...',
        steps: {
          discovery: {
            step: '01',
            title: 'Initial Discovery & Needs Assessment',
            description: 'We analyze your IP assets, business goals, and competitive landscape.'
          },
          search: {
            step: '02',
            title: 'Prior Art / Conflict Search',
            description: 'Deep due diligence to identify risks, clashes, or opportunities.'
          },
          roadmap: {
            step: '03',
            title: 'Strategic Roadmap',
            description: 'We craft a custom protection plan aligned with your business vision.'
          },
          filing: {
            step: '04',
            title: 'Application Preparation & Filing',
            description: 'Precise drafting, documentation, and filing with relevant authorities.'
          },
          prosecution: {
            step: '05',
            title: 'Prosecution, Office Actions & Responses',
            description: 'We handle all examiner queries, objections, and amendments.'
          },
          monitoring: {
            step: '06',
            title: 'Monitoring, Maintenance & Enforcement',
            description: 'Ongoing surveillance, renewals, enforcement, and portfolio health checks.'
          }
        }
      },
      finalCta: {
        eyebrow: 'Ready to Begin?',
        title: 'Protect and Scale Your IP Portfolio',
        subtitle: 'Deploy a tailored IP roadmap that aligns filings with commercial goals and activates enforcement strategies safeguarding enterprise value.',
        cta: {
          getStarted: 'Get Started',
          learnAboutUs: 'Learn About Us'
        }
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
        lastUpdated: 'Last Updated',
        sections: {
          informationCollection: {
            title: 'Information We Collect',
            paragraph1: 'Al Marsa Intellectual Property Agents collects information you provide directly to us, such as when you:',
            items: {
              forms: 'Fill out our contact forms or request consultation',
              newsletter: 'Subscribe to our newsletter or updates',
              services: 'Engage our IP services',
              communication: 'Communicate with us via email, phone, or other channels'
            }
          },
          howWeUse: {
            title: 'How We Use Your Information',
            paragraph1: 'We use the information we collect to:',
            items: {
              provide: 'Provide, maintain, and improve our IP services',
              process: 'Process and respond to your inquiries and requests',
              updates: 'Send you updates about our services and industry news',
              comply: 'Comply with legal and regulatory requirements',
              protect: 'Protect our rights and prevent fraud'
            }
          },
          sharing: {
            title: 'Information Sharing and Disclosure',
            paragraph1: 'We do not sell, trade, or otherwise transfer your personal information to third parties except:',
            items: {
              consent: 'With your explicit consent',
              providers: 'To trusted service providers who assist in our operations',
              legal: 'When required by law or to protect our legal rights',
              business: 'In connection with a business transfer or merger'
            }
          },
          security: {
            title: 'Data Security',
            description: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.'
          },
          rights: {
            title: 'Your Rights',
            paragraph1: 'Depending on your location, you may have the following rights regarding your personal information:',
            items: {
              access: 'Access and obtain a copy of your personal information',
              rectify: 'Rectify inaccurate or incomplete information',
              delete: 'Request deletion of your personal information',
              object: 'Object to or restrict the processing of your information',
              portability: 'Data portability rights'
            }
          },
          contactUs: {
            title: 'Contact Us',
            paragraph1: 'If you have any questions about this Privacy Policy or our data practices, please contact us at:'
          }
        }
      },
      termsOfService: {
        title: 'Terms of Service',
        lastUpdated: 'Last Updated',
        sections: {
          acceptance: {
            title: 'Acceptance of Terms',
            description: 'By accessing and using the services of Al Marsa Intellectual Property Agents ("Al Marsa," "we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
          },
          servicesDescription: {
            title: 'Services Description',
            paragraph1: 'Al Marsa provides intellectual property services including but not limited to:',
            items: {
              trademark: 'Trademark registration and maintenance',
              patent: 'Patent application and prosecution',
              litigation: 'IP litigation and enforcement',
              consultation: 'IP consultation and strategy',
              filing: 'International filing services'
            }
          },
          professionalRelationship: {
            title: 'Professional Relationship',
            description: 'The establishment of an attorney-client relationship requires a formal engagement agreement. Communication through our website or initial consultations does not automatically create an attorney-client relationship. All formal engagements will be governed by separate service agreements.'
          },
          confidentiality: {
            title: 'Confidentiality',
            description: 'We maintain strict confidentiality regarding all client information and communications. However, we recommend that you avoid sharing highly sensitive information through unsecured channels such as general contact forms or email until a formal attorney-client relationship has been established.'
          },
          fees: {
            title: 'Fees and Payment',
            paragraph1: 'Our fee structure will be clearly outlined in your service agreement. General principles include:',
            items: {
              transparent: 'Transparent pricing with no hidden fees',
              payment: 'Payment terms as specified in service agreements',
              government: 'Government fees are additional to our service fees',
              cancellation: 'Cancellation and refund policies per service agreement'
            }
          },
          liability: {
            title: 'Limitation of Liability',
            description: 'To the fullest extent permitted by law, Al Marsa shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.'
          },
          intellectualProperty: {
            title: 'Intellectual Property Rights',
            description: 'The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to this website are protected under applicable intellectual property laws, and other proprietary rights. All rights reserved by Al Marsa.'
          },
          governingLaw: {
            title: 'Governing Law',
            description: 'These terms and conditions are governed by and construed in accordance with the laws of Kuwait. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Kuwait.'
          },
          contactInformation: {
            title: 'Contact Information',
            paragraph1: 'For questions regarding these Terms of Service, please contact us at:'
          }
        }
      },
      cookiePolicy: {
        title: 'Cookie Policy',
        lastUpdated: 'Last Updated',
        sections: {
          whatAreCookies: {
            title: 'What Are Cookies',
            paragraph1: 'Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.',
            paragraph2: '{companyName} uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.'
          },
          typesOfCookies: {
            title: 'Types of Cookies We Use',
            essential: {
              title: 'Essential Cookies',
              description: 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.'
            },
            analytics: {
              title: 'Analytics Cookies',
              description: 'We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience. These cookies collect information anonymously.'
            },
            functionality: {
              title: 'Functionality Cookies',
              description: 'These cookies allow our website to remember choices you make (such as language preferences) and provide enhanced, more personalized features.'
            },
            performance: {
              title: 'Performance Cookies',
              description: 'These cookies help us understand how effective our content is, what interests our users, and to improve how our website works.'
            }
          },
          thirdPartyCookies: {
            title: 'Third-Party Cookies',
            paragraph1: 'In addition to our own cookies, we may use various third-party cookies to report usage statistics of our website and deliver advertisements on and through our website.',
            paragraph2: 'These third-party services may include:',
            services: {
              analytics: 'Google Analytics for website analytics',
              social: 'Social media platforms for content sharing features',
              marketing: 'Marketing and advertising platforms'
            }
          },
          managingCookies: {
            title: 'Managing Cookies',
            paragraph1: 'Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our website and prevent you from enjoying all its features.',
            paragraph2: 'You can set your browser to:',
            options: {
              accept: 'Accept all cookies',
              reject: 'Reject all cookies',
              notify: 'Notify you when a cookie is set',
              delete: 'Delete cookies after your browsing session'
            },
            paragraph3: 'For more information on how to manage cookies in popular browsers, please visit:',
            browsers: {
              chrome: 'Chrome Cookie Settings',
              firefox: 'Firefox Cookie Settings',
              safari: 'Safari Cookie Settings',
              edge: 'Edge Cookie Settings'
            }
          },
          cookieRetention: {
            title: 'Cookie Retention',
            description: 'Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device until they expire or you delete them. The retention period varies depending on the purpose of the cookie.'
          },
          updates: {
            title: 'Updates to This Policy',
            description: 'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our operations, or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.'
          },
          contactUs: {
            title: 'Contact Us',
            paragraph1: 'If you have any questions about our use of cookies or this Cookie Policy, please contact us:',
            email: 'Email:',
            phone: 'Phone:',
            address: 'Address:'
          },
          consent: {
            title: 'Your Consent',
            description: 'By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or refrain from using our website.'
          }
        }
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
      skipLink: 'انتقل إلى المحتوى الرئيسي',
      hero: {
        eyebrow: 'خدماتنا',
        title: 'تنفيذ شامل للملكية الفكرية.',
        titleLine2: 'تمكين رحلة الابتكار الخاصة بك.',
        subtitle: 'حلول شاملة للملكية الفكرية تنسق التسجيلات والتجديدات والإنفاذ وبرامج التسويق التي تبقي استراتيجيتك في صدارة زخم السوق.',
        metrics: {
          response: {
            metric: '24 ساعة',
            label: 'متوسط الاستجابة للتسجيلات الإقليمية'
          },
          jurisdictions: {
            metric: '+60',
            label: 'ولاية قضائية منسقة كل عام'
          },
          retention: {
            metric: '94%',
            label: 'ولايات محتفظ بها من خلال التجديدات'
          }
        },
        cta: {
          getStarted: 'ابدأ الآن',
          viewCoverage: 'عرض مناطق التغطية'
        }
      },
      pillars: {
        eyebrow: 'عرض خدماتنا',
        title: 'ستة ركائز خدمة أساسية',
        intro: 'ننظم عروضنا في ستة ركائز خدمة أساسية. سواء كنت تطلق علامة تجارية جديدة، أو تدافع عن براءة اختراعك، أو تتوسع دوليًا - لدينا الخبرة لإرشادك.',
        loadingMessage: 'جارٍ تحميل الخدمات...',
        whyItMattersLabel: 'لماذا هذا مهم:',
        items: {
          registration: {
            title: 'تسجيل وحماية الملكية الفكرية',
            tagline: 'تأمين ملكيتك الفكرية قبل أن يتم الطعن فيها.',
            services: [
              'تسجيل وإدارة العلامات التجارية',
              'تقديم ومتابعة براءات الاختراع',
              'تسجيل التصاميم الصناعية',
              'حماية الأسرار التجارية'
            ],
            whyItMatters: 'التسجيل الصحيح هو درعك الأساسي.'
          },
          enforcement: {
            title: 'الإنفاذ والتقاضي',
            tagline: 'حقوقك مهمة - ونحن نساعدك على إنفاذها.',
            services: [
              'إجراءات وسبل الانتصاف من الانتهاك',
              'إشعارات الكف والامتناع',
              'إجراءات المعارضة / الإلغاء',
              'تسجيل الجمارك وإنفاذ الحدود',
              'التقاضي المدني والجنائي',
              'حل نزاعات أسماء النطاقات'
            ],
            whyItMatters: 'الإنفاذ القوي يحمي ميزتك التنافسية.'
          },
          licensing: {
            title: 'الترخيص والتنازل',
            tagline: 'حوّل ملكيتك الفكرية إلى إيرادات أو شراكات استراتيجية.',
            services: [
              'صياغة اتفاقيات الترخيص',
              'التنازل عن حقوق الملكية',
              'عقود الامتياز وتوسيع العلامة التجارية',
              'نقل التكنولوجيا والمشاريع المشتركة'
            ],
            whyItMatters: 'الترخيص الاستراتيجي يعظم القيمة التجارية لملكيتك الفكرية.'
          },
          antiCounterfeiting: {
            title: 'مكافحة التزييف ومراقبة السوق',
            tagline: 'ابق في صدارة التهديدات في السوق قبل أن تتصاعد.',
            services: [
              'برامج حماية العلامة التجارية',
              'مراقبة السوق والتحقيقات',
              'التنسيق مع الجمارك وإنفاذ القانون والجهات التنظيمية'
            ],
            whyItMatters: 'المراقبة الاستباقية تمنع خسارة الإيرادات والإضرار بالعلامة التجارية.'
          },
          contracts: {
            title: 'عقود واتفاقيات الملكية الفكرية',
            tagline: 'عقود واضحة وقابلة للتنفيذ تحمي أصولك الإبداعية والتقنية.',
            services: [
              'اتفاقيات عدم الإفصاح / السرية',
              'ترخيص البرمجيات وعقود الملكية الفكرية الرقمية',
              'بنود نقل التكنولوجيا',
              'اتفاقيات قانونية مخصصة للملكية الفكرية'
            ],
            whyItMatters: 'العقود المحكمة تمنع النزاعات قبل نشوئها.'
          },
          advisory: {
            title: 'استراتيجية واستشارات الملكية الفكرية',
            tagline: 'خطط، قيّم، واستفد من ملكيتك الفكرية كرأسمال استراتيجي.',
            services: [
              'تدقيق وتحسين محفظة الملكية الفكرية',
              'تقييمات التقييم والتسييل',
              'دخول السوق والتخطيط الاختصاصي',
              'تقييم المخاطر والعناية الواجبة في المعاملات'
            ],
            whyItMatters: 'التخطيط الاستراتيجي للملكية الفكرية يدفع النمو التجاري طويل الأجل.'
          }
        }
      },
      process: {
        eyebrow: 'عمليتنا',
        title: 'من الفكرة إلى الحماية والنمو',
        subtitle: 'واضح. شفاف. يركز على العميل.',
        loadingMessage: 'جارٍ تحميل خطوات العملية...',
        steps: {
          discovery: {
            step: '01',
            title: 'الاكتشاف الأولي وتقييم الاحتياجات',
            description: 'نحلل أصول الملكية الفكرية الخاصة بك، والأهداف التجارية، والمشهد التنافسي.'
          },
          search: {
            step: '02',
            title: 'البحث عن الفن السابق / تضارب المصالح',
            description: 'العناية الواجبة العميقة لتحديد المخاطر والتضاربات أو الفرص.'
          },
          roadmap: {
            step: '03',
            title: 'خارطة الطريق الاستراتيجية',
            description: 'نصمم خطة حماية مخصصة تتماشى مع رؤيتك التجارية.'
          },
          filing: {
            step: '04',
            title: 'إعداد الطلب والتسجيل',
            description: 'الصياغة الدقيقة والتوثيق والتسجيل لدى السلطات المختصة.'
          },
          prosecution: {
            step: '05',
            title: 'الملاحقة، إجراءات المكتب والردود',
            description: 'نتعامل مع جميع استفسارات الفاحص والاعتراضات والتعديلات.'
          },
          monitoring: {
            step: '06',
            title: 'المراقبة والصيانة والإنفاذ',
            description: 'المراقبة المستمرة والتجديدات والإنفاذ وفحوصات صحة المحفظة.'
          }
        }
      },
      finalCta: {
        eyebrow: 'هل أنت مستعد للبدء؟',
        title: 'حماية وتوسيع محفظة الملكية الفكرية الخاصة بك',
        subtitle: 'نشر خارطة طريق مخصصة للملكية الفكرية تتماشى مع التسجيلات مع الأهداف التجارية وتفعيل استراتيجيات الإنفاذ لحماية قيمة المؤسسة.',
        cta: {
          getStarted: 'ابدأ الآن',
          learnAboutUs: 'تعرف علينا'
        }
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
        lastUpdated: 'آخر تحديث',
        sections: {
          informationCollection: {
            title: 'المعلومات التي نجمعها',
            paragraph1: 'تجمع المرسى لوكلاء الملكية الفكرية المعلومات التي تقدمها لنا مباشرة، مثل عندما:',
            items: {
              forms: 'تملأ نماذج الاتصال الخاصة بنا أو تطلب استشارة',
              newsletter: 'تشترك في النشرة الإخبارية أو التحديثات الخاصة بنا',
              services: 'تستخدم خدمات الملكية الفكرية الخاصة بنا',
              communication: 'تتواصل معنا عبر البريد الإلكتروني أو الهاتف أو القنوات الأخرى'
            }
          },
          howWeUse: {
            title: 'كيف نستخدم معلوماتك',
            paragraph1: 'نستخدم المعلومات التي نجمعها من أجل:',
            items: {
              provide: 'توفير خدمات الملكية الفكرية الخاصة بنا والحفاظ عليها وتحسينها',
              process: 'معالجة استفساراتك وطلباتك والرد عليها',
              updates: 'إرسال تحديثات حول خدماتنا وأخبار الصناعة',
              comply: 'الامتثال للمتطلبات القانونية والتنظيمية',
              protect: 'حماية حقوقنا ومنع الاحتيال'
            }
          },
          sharing: {
            title: 'مشاركة المعلومات والإفصاح عنها',
            paragraph1: 'نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة إلا:',
            items: {
              consent: 'بموافقتك الصريحة',
              providers: 'إلى مقدمي الخدمات الموثوق بهم الذين يساعدون في عملياتنا',
              legal: 'عندما يكون مطلوبًا بموجب القانون أو لحماية حقوقنا القانونية',
              business: 'فيما يتعلق بنقل الأعمال أو الاندماج'
            }
          },
          security: {
            title: 'أمن البيانات',
            description: 'نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100٪.'
          },
          rights: {
            title: 'حقوقك',
            paragraph1: 'اعتمادًا على موقعك، قد يكون لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:',
            items: {
              access: 'الوصول إلى معلوماتك الشخصية والحصول على نسخة منها',
              rectify: 'تصحيح المعلومات غير الدقيقة أو غير الكاملة',
              delete: 'طلب حذف معلوماتك الشخصية',
              object: 'الاعتراض على معالجة معلوماتك أو تقييدها',
              portability: 'حقوق نقل البيانات'
            }
          },
          contactUs: {
            title: 'اتصل بنا',
            paragraph1: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات الخاصة بنا، يرجى الاتصال بنا على:'
          }
        }
      },
      termsOfService: {
        title: 'شروط الخدمة',
        lastUpdated: 'آخر تحديث',
        sections: {
          acceptance: {
            title: 'قبول الشروط',
            description: 'من خلال الوصول إلى واستخدام خدمات المرسى لوكلاء الملكية الفكرية ("المرسى" أو "نحن" أو "لنا")، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية. إذا كنت لا توافق على الالتزام بما سبق، يرجى عدم استخدام هذه الخدمة.'
          },
          servicesDescription: {
            title: 'وصف الخدمات',
            paragraph1: 'تقدم المرسى خدمات الملكية الفكرية بما في ذلك على سبيل المثال لا الحصر:',
            items: {
              trademark: 'تسجيل وصيانة العلامات التجارية',
              patent: 'تقديم ومتابعة براءات الاختراع',
              litigation: 'التقاضي وإنفاذ الملكية الفكرية',
              consultation: 'استشارات واستراتيجية الملكية الفكرية',
              filing: 'خدمات التسجيل الدولي'
            }
          },
          professionalRelationship: {
            title: 'العلاقة المهنية',
            description: 'يتطلب إنشاء علاقة محامي-عميل اتفاقية التزام رسمية. التواصل من خلال موقعنا أو الاستشارات الأولية لا يخلق تلقائيًا علاقة محامي-عميل. سيتم تنظيم جميع الالتزامات الرسمية من خلال اتفاقيات خدمة منفصلة.'
          },
          confidentiality: {
            title: 'السرية',
            description: 'نحافظ على سرية صارمة فيما يتعلق بجميع معلومات العملاء والاتصالات. ومع ذلك، نوصي بتجنب مشاركة المعلومات الحساسة للغاية من خلال قنوات غير آمنة مثل نماذج الاتصال العامة أو البريد الإلكتروني حتى يتم إنشاء علاقة رسمية بين المحامي والعميل.'
          },
          fees: {
            title: 'الرسوم والدفع',
            paragraph1: 'سيتم توضيح هيكل الرسوم الخاص بنا بوضوح في اتفاقية الخدمة الخاصة بك. تشمل المبادئ العامة:',
            items: {
              transparent: 'تسعير شفاف بدون رسوم مخفية',
              payment: 'شروط الدفع كما هو محدد في اتفاقيات الخدمة',
              government: 'الرسوم الحكومية إضافية إلى رسوم خدماتنا',
              cancellation: 'سياسات الإلغاء والاسترداد وفقًا لاتفاقية الخدمة'
            }
          },
          liability: {
            title: 'تحديد المسؤولية',
            description: 'إلى أقصى حد يسمح به القانون، لن تكون المرسى مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة في الأرباح أو الإيرادات، سواء تكبدت بشكل مباشر أو غير مباشر، أو أي فقدان للبيانات أو الاستخدام أو حسن النية أو خسائر أخرى غير ملموسة.'
          },
          intellectualProperty: {
            title: 'حقوق الملكية الفكرية',
            description: 'المحتوى والتنظيم والرسومات والتصميم والتجميع والترجمة المغناطيسية والتحويل الرقمي والأمور الأخرى المتعلقة بهذا الموقع محمية بموجب قوانين الملكية الفكرية المعمول بها والحقوق الخاصة الأخرى. جميع الحقوق محفوظة للمرسى.'
          },
          governingLaw: {
            title: 'القانون الحاكم',
            description: 'تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين الكويت. أي نزاعات تنشأ بموجب هذه الشروط تخضع للولاية القضائية الحصرية لمحاكم الكويت.'
          },
          contactInformation: {
            title: 'معلومات الاتصال',
            paragraph1: 'للأسئلة المتعلقة بشروط الخدمة هذه، يرجى الاتصال بنا على:'
          }
        }
      },
      cookiePolicy: {
        title: 'سياسة ملفات تعريف الارتباط',
        lastUpdated: 'آخر تحديث',
        sections: {
          whatAreCookies: {
            title: 'ما هي ملفات تعريف الارتباط',
            paragraph1: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك عند زيارة موقعنا الإلكتروني. تُستخدم على نطاق واسع لجعل مواقع الويب تعمل بكفاءة أكبر وتوفير المعلومات لأصحاب المواقع.',
            paragraph2: 'تستخدم {companyName} ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتحليل حركة المرور على الموقع، وفهم من أين يأتي زوارنا.'
          },
          typesOfCookies: {
            title: 'أنواع ملفات تعريف الارتباط التي نستخدمها',
            essential: {
              title: 'ملفات تعريف الارتباط الأساسية',
              description: 'هذه الملفات ضرورية لكي يعمل الموقع بشكل صحيح. تتيح الوظائف الأساسية مثل الأمان وإدارة الشبكة وإمكانية الوصول.'
            },
            analytics: {
              title: 'ملفات تعريف الارتباط التحليلية',
              description: 'نستخدم ملفات تعريف الارتباط التحليلية لفهم كيفية تفاعل الزوار مع موقعنا. يساعدنا هذا في تحسين خدماتنا وتجربة المستخدم. تجمع هذه الملفات المعلومات بشكل مجهول.'
            },
            functionality: {
              title: 'ملفات تعريف الارتباط الوظيفية',
              description: 'تسمح هذه الملفات لموقعنا بتذكر الاختيارات التي تقوم بها (مثل تفضيلات اللغة) وتوفير ميزات محسّنة وأكثر تخصيصًا.'
            },
            performance: {
              title: 'ملفات تعريف الارتباط للأداء',
              description: 'تساعدنا هذه الملفات على فهم مدى فعالية المحتوى لدينا، وما يهم مستخدمينا، ولتحسين كيفية عمل موقعنا.'
            }
          },
          thirdPartyCookies: {
            title: 'ملفات تعريف الارتباط من طرف ثالث',
            paragraph1: 'بالإضافة إلى ملفات تعريف الارتباط الخاصة بنا، قد نستخدم ملفات تعريف ارتباط مختلفة من طرف ثالث للإبلاغ عن إحصاءات استخدام موقعنا وتقديم الإعلانات على موقعنا ومن خلاله.',
            paragraph2: 'قد تشمل هذه الخدمات من الأطراف الثالثة:',
            services: {
              analytics: 'Google Analytics لتحليلات الموقع',
              social: 'منصات التواصل الاجتماعي لميزات مشاركة المحتوى',
              marketing: 'منصات التسويق والإعلان'
            }
          },
          managingCookies: {
            title: 'إدارة ملفات تعريف الارتباط',
            paragraph1: 'تسمح لك معظم متصفحات الويب بالتحكم في ملفات تعريف الارتباط من خلال تفضيلات الإعدادات الخاصة بها. ومع ذلك، فإن الحد من ملفات تعريف الارتباط قد يؤثر على تجربتك في موقعنا ويمنعك من الاستمتاع بجميع ميزاته.',
            paragraph2: 'يمكنك ضبط متصفحك على:',
            options: {
              accept: 'قبول جميع ملفات تعريف الارتباط',
              reject: 'رفض جميع ملفات تعريف الارتباط',
              notify: 'إخطارك عند تعيين ملف تعريف ارتباط',
              delete: 'حذف ملفات تعريف الارتباط بعد جلسة التصفح الخاصة بك'
            },
            paragraph3: 'لمزيد من المعلومات حول كيفية إدارة ملفات تعريف الارتباط في المتصفحات الشائعة، يرجى زيارة:',
            browsers: {
              chrome: 'إعدادات ملفات تعريف الارتباط في Chrome',
              firefox: 'إعدادات ملفات تعريف الارتباط في Firefox',
              safari: 'إعدادات ملفات تعريف الارتباط في Safari',
              edge: 'إعدادات ملفات تعريف الارتباط في Edge'
            }
          },
          cookieRetention: {
            title: 'الاحتفاظ بملفات تعريف الارتباط',
            description: 'ملفات تعريف الارتباط للجلسة مؤقتة ويتم حذفها عند إغلاق متصفحك. تظل ملفات تعريف الارتباط الدائمة على جهازك حتى تنتهي صلاحيتها أو تحذفها. تختلف فترة الاحتفاظ حسب الغرض من ملف تعريف الارتباط.'
          },
          updates: {
            title: 'تحديثات هذه السياسة',
            description: 'قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه من وقت لآخر لتعكس التغييرات في التكنولوجيا أو التشريعات أو عملياتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. نشجعك على مراجعة هذه السياسة بشكل دوري.'
          },
          contactUs: {
            title: 'اتصل بنا',
            paragraph1: 'إذا كان لديك أي أسئلة حول استخدامنا لملفات تعريف الارتباط أو سياسة ملفات تعريف الارتباط هذه، يرجى الاتصال بنا:',
            email: 'البريد الإلكتروني:',
            phone: 'الهاتف:',
            address: 'العنوان:'
          },
          consent: {
            title: 'موافقتك',
            description: 'من خلال الاستمرار في استخدام موقعنا، فإنك توافق على استخدامنا لملفات تعريف الارتباط كما هو موضح في سياسة ملفات تعريف الارتباط هذه. إذا كنت لا توافق على استخدامنا لملفات تعريف الارتباط، فيجب عليك ضبط إعدادات متصفحك وفقًا لذلك أو الامتناع عن استخدام موقعنا.'
          }
        }
      }
    },
    notFound: {
      title: '404 - الصفحة غير موجودة',
      message: 'الصفحة التي تبحث عنها غير موجودة.',
      backHome: 'العودة إلى الرئيسية'
    }
  }
};
