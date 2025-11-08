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
      },
      card: {
        badge: 'Trusted Partner',
        quote: 'Clients rely on us for responsive counsel, clear filing pathways, and measured defence strategies that stand up in every jurisdiction.',
        advantages: {
          network: {
            label: 'Dedicated regional experts',
            description: 'Direct access to partners across MENA, Europe, and key global IP offices.'
          },
          governance: {
            label: 'ISO-aligned quality management',
            description: 'Cross-functional reviews keep filings, renewals, and enforcement audit-ready.'
          },
          reporting: {
            label: 'Decision-grade reporting',
            description: 'Dashboards summarise exposure, deadlines, and next actions in real time.'
          }
        }
      }
    },
    intro: {
      statement: 'AL Marsa Intellectual Property & Trademark Agents is a Kuwait‑based boutique IP firm committed to excellence, integrity, and international reach. We help individuals, startups, and corporations safeguard their innovations, brands, and creative expressions across multiple jurisdictions.'
    },
    stats: {
      founded: 'Founded',
      mattersManaged: 'Matters Managed',
      jurisdictions: 'Global Jurisdictions',
      satisfaction: 'Client Satisfaction',
      home: {
        matters: {
          number: '50+',
          label: 'Matters Managed'
        },
        globalJurisdictions: {
          number: '25+',
          label: 'Global Jurisdictions'
        },
        clientSatisfaction: {
          number: '100%',
          label: 'Client Satisfaction'
        }
      }
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
      },
      home: {
        trademarkProtection: {
          title: 'Trademark Registration & Protection',
          description: 'From search and filing to renewals, oppositions, and watch services'
        },
        patentApplication: {
          title: 'Patent Application & Prosecution',
          description: 'Technical drafting, filings, and prosecution across priority jurisdictions'
        },
        tradeSecret: {
          title: 'Trade Secret Advisory',
          description: 'Programmes that harden confidential processes and govern sensitive know-how'
        },
        disputes: {
          title: 'IP Disputes & Enforcement',
          description: 'Infringement response, negotiated settlements, and litigation support'
        },
        globalIP: {
          title: 'Global & Cross-Border IP',
          description: 'Madrid, PCT, and local counsel coordination with unified governance'
        },
        industrialDesign: {
          title: 'Industrial Design & Model Protection',
          description: 'Design registration, renewals, and anti-counterfeit programmes'
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
      ],
      home: {
        localExpertise: {
          label: 'Local expertise, global visibility',
          description: 'Sector-specific attorneys embedded across the GCC provide nuanced counsel the moment priorities shift.'
        },
        tailoredProgrammes: {
          label: 'Tailored, proactive programmes',
          description: 'Lifecycle strategies built around launches, renewals, and disputes so decisions are always timely and informed.'
        },
        auditReady: {
          label: 'Audit-ready governance & reporting',
          description: 'Evidence frameworks, dashboards, and board-ready updates that withstand scrutiny across jurisdictions.'
        },
        rapidEnforcement: {
          label: 'Rapid enforcement & defence posture',
          description: 'Escalation playbooks let you intervene quickly—administratively, commercially, or litigiously—without losing momentum.'
        }
      }
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
      discuss: 'Discuss your IP needs',
      phases: {
        consultation: {
          title: 'Consultation & IP audit',
          description: 'Immersion sessions to surface current assets, exposure points, and the jurisdictions that require immediate mobilisation.'
        },
        strategy: {
          title: 'Strategy architecture',
          description: 'Scenario planning, filing roadmaps, and budget modelling that translate commercial goals into actionable programmes.'
        },
        execution: {
          title: 'Execution & monitoring',
          description: 'Coordinated filings, renewals, and ongoing watch services documented through decision-grade dashboards.'
        },
        enforcement: {
          title: 'Enforcement & defence',
          description: 'Litigation support, oppositions, and negotiated settlements that protect enterprise value at pace.'
        }
      }
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
      hero: {
        eyebrow: 'Get In Touch',
        title: 'Expert IP Support Tailored to Your Needs',
        subtitle: 'Connect with regionally focused professionals who coordinate filings, enforcement, and strategic advisory across the GCC.',
        metrics: {
          response: {
            value: '24h',
            label: 'Response time'
          },
          retention: {
            value: '92%',
            label: 'Client retention'
          },
          jurisdictions: {
            value: '150+',
            label: 'Jurisdictions covered'
          }
        },
        whatToExpect: {
          heading: 'What to Expect',
          description: 'Dedicated engagement lead coordinating with our specialists for response within one business day.',
          pillars: {
            lead: 'Dedicated engagement lead',
            confidential: 'Confidential handling',
            multilingual: 'Multilingual regional support'
          }
        }
      },
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
      sections: {
        sendMessage: {
          eyebrow: 'Send a Message',
          title: 'Tell Us About Your IP Objectives',
          subtitle: 'Share your requirements and we'll assemble the right team across prosecution, enforcement, and strategic advisory.'
        },
        visitOffice: {
          eyebrow: 'Visit Our Office',
          title: 'Centrally Located in Kuwait City',
          subtitle: 'Our office serves clients across the GCC, MENA region, and international jurisdictions through our extensive partner network.'
        },
        nextSteps: {
          eyebrow: 'Next Steps',
          title: 'Partner with a team focused on safeguarding your IP',
          subtitle: 'From first filings to cross-border enforcement, we structure programmes that align to your governance and growth ambitions.',
          buttons: {
            primary: 'Explore our services',
            secondary: 'Learn about our approach'
          }
        }
      },
      formLabels: {
        firstNamePlaceholder: 'John',
        lastNamePlaceholder: 'Doe',
        emailPlaceholder: 'john.doe@example.com',
        phonePlaceholder: '+965 9009 5960',
        companyPlaceholder: 'Your company',
        messagePlaceholder: 'Describe your IP requirements, timelines, or questions...',
        submitButton: 'Send message',
        submitting: 'Sending...',
        privacyNotice: 'By submitting, you agree to our privacy policy. All enquiries are handled securely and confidentially.'
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
      hero: {
        eyebrow: 'Global Coverage',
        title: 'Seamless Global IP Protection.',
        titleLine2: 'Uncompromising Reach & Expertise.',
        subtitle: 'We translate complex cross-border rules into disciplined action, ensuring filings and enforcement remain cohesive across every territory you operate.',
        metrics: {
          jurisdictions: {
            metric: '150+',
            label: 'Jurisdictions coordinated'
          },
          partnerships: {
            metric: '60+',
            label: 'Local counsel partnerships'
          },
          mandates: {
            metric: '2000+',
            label: 'Cross-border mandates delivered'
          }
        }
      },
      sections: {
        strategicRegions: {
          eyebrow: 'Strategic regions',
          title: 'GCC Intellectual Property Landscape',
          subtitle: 'Comprehensive IP protection across all six Gulf Cooperation Council member states with specialized knowledge of local regulations, treaties, and enforcement mechanisms.'
        },
        globalFrameworks: {
          eyebrow: 'Global frameworks',
          title: 'Confidence across international systems',
          subtitle: 'We integrate directly with world bodies and regional offices, ensuring your IP assets remain compliant, enforceable, and optimised for expansion.'
        },
        deliveryRhythm: {
          eyebrow: 'Delivery rhythm',
          title: 'A disciplined sequence for international execution',
          subtitle: 'Transparent governance and dependable timelines keep stakeholders aligned from initial assessment through enforcement.'
        },
        programmeGovernance: {
          eyebrow: 'Programme governance',
          title: 'Partnerships designed for scale',
          subtitle: 'Stay audit-ready with programme management that delivers clarity on spend, timelines, and risk posture.'
        },
        finalCta: {
          eyebrow: 'Global reach',
          title: 'Extend your IP protection with a single, accountable partner',
          subtitle: 'Engage our cross-border desk to coordinate filings, renewals, enforcement, and commercialisation strategies across every jurisdiction critical to your growth.',
          buttons: {
            primary: 'Start an international mandate',
            secondary: 'See how we operate'
          }
        }
      },
      tabs: {
        overview: 'Overview',
        treaties: 'Treaties',
        trademarks: 'Trademarks',
        patents: 'Patents'
      },
      labels: {
        capital: 'Capital',
        ministry: 'Ministry',
        officialWebsite: 'Official website'
      },
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
      deadline: 'Objection deadline',
      hero: {
        eyebrow: 'GCC IP Intelligence',
        title: 'Industry Updates & Official Gazette Publications',
        subtitle: 'Real-time monitoring of official IP developments, trademark gazette publications, and regulatory updates across the GCC region.',
        metrics: {
          countries: {
            metric: '6',
            label: 'GCC Countries'
          },
          updates: {
            metric: 'Daily',
            label: 'Updates'
          },
          sources: {
            metric: 'Official',
            label: 'Sources'
          }
        }
      },
      sections: {
        officialSources: {
          eyebrow: 'Official sources',
          title: 'GCC Intellectual Property Updates',
          subtitle: 'Curated updates from official government ministries and IP offices across all six GCC member states.'
        },
        latestUpdates: 'Latest Updates'
      }
    },
    insights: {
      title: 'Insights & Forms',
      subtitle: 'Resources & Tools',
      description: 'Access our library of IP resources, guides, and downloadable forms',
      hero: {
        eyebrow: 'Insights & Resources',
        title: 'Actionable IP Intelligence',
        subtitle: 'Curated library of intelligence, templates, and analyst briefings for confident IP strategy across the GCC region.',
        metrics: {
          guides: {
            value: 'GCC-focused',
            label: 'Guides & Templates'
          },
          videos: {
            value: 'Video explainers',
            label: 'Learning Modules'
          },
          forms: {
            value: 'Prompt follow-up',
            label: 'Form Submissions'
          }
        },
        quality: {
          heading: 'Quality Assurance',
          description: 'Materials written by IP professionals and reviewed regularly to reflect GCC, MENA, and international changes.',
          features: {
            categorized: 'Categorized content',
            templates: 'Regional templates',
            routing: 'Specialist routing'
          }
        }
      },
      sections: {
        countryIntelligence: {
          eyebrow: 'Country intelligence',
          title: 'Country Guides',
          subtitle: 'Practical overviews of filing procedures, timelines, and requirements by country.'
        },
        legalFramework: {
          eyebrow: 'Legal Framework Repository',
          title: 'GCC IP Legislation & Regulatory Documents',
          subtitle: 'Access comprehensive trademark, patent, and industrial design legislation across Kuwait, Bahrain, Qatar, Saudi Arabia, and the UAE.'
        },
        onDemandLearning: {
          eyebrow: 'On-demand learning',
          title: 'IP Knowledge Center: learn, apply, protect',
          subtitle: 'Short explainer modules with actionable guidance to help you understand intellectual property, trademarks, patents, and design rights.'
        },
        nextSteps: {
          eyebrow: 'Next steps',
          title: 'Coordinate your next IP intelligence briefing',
          subtitle: 'Partner with our analysts to review upcoming filings, regional enforcement activity, or governance updates tailored to your organisation.',
          buttons: {
            primary: 'Subscribe for intelligence updates',
            secondary: 'View our services'
          }
        }
      },
      labels: {
        countryGuide: 'Country guide',
        trademarkGuide: 'Trademark guide',
        patentGuide: 'Patent guide',
        designGuide: 'Design guide',
        downloadFullGuide: 'Download full guide & checklist',
        howToPractice: 'How to put this into practice',
        didYouKnow: 'Did you know?'
      },
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
      },
      card: {
        badge: 'شريك موثوق',
        quote: 'يعتمد العملاء علينا للحصول على مشورة سريعة الاستجابة، ومسارات تقديم واضحة، واستراتيجيات دفاع متوازنة تصمد في كل ولاية قضائية.',
        advantages: {
          network: {
            label: 'خبراء إقليميون متخصصون',
            description: 'وصول مباشر إلى الشركاء عبر منطقة الشرق الأوسط وشمال أفريقيا وأوروبا ومكاتب الملكية الفكرية العالمية الرئيسية.'
          },
          governance: {
            label: 'إدارة الجودة المتوافقة مع ISO',
            description: 'المراجعات متعددة الوظائف تحافظ على التسجيلات والتجديدات والإنفاذ جاهزة للتدقيق.'
          },
          reporting: {
            label: 'تقارير على مستوى صنع القرار',
            description: 'لوحات المعلومات تلخص التعرض والمواعيد النهائية والإجراءات التالية في الوقت الفعلي.'
          }
        }
      }
    },
    intro: {
      statement: 'المرسى للملكية الفكرية ووكلاء العلامات التجارية هي شركة كويتية متخصصة في الملكية الفكرية ملتزمة بالتميز والنزاهة والوصول الدولي. نحن نساعد الأفراد والشركات الناشئة والشركات في حماية ابتكاراتهم وعلاماتهم التجارية وإبداعاتهم في العديد من الولايات القضائية.'
    },
    stats: {
      founded: 'تأسست',
      mattersManaged: 'القضايا المُدارة',
      jurisdictions: 'الولايات القضائية العالمية',
      satisfaction: 'رضا العملاء',
      home: {
        matters: {
          number: '+50',
          label: 'القضايا المُدارة'
        },
        globalJurisdictions: {
          number: '+25',
          label: 'ولايات قضائية عالمية'
        },
        clientSatisfaction: {
          number: '100%',
          label: 'رضا العملاء'
        }
      }
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
      },
      home: {
        trademarkProtection: {
          title: 'تسجيل وحماية العلامات التجارية',
          description: 'من البحث والتسجيل إلى التجديدات والمعارضات وخدمات المراقبة'
        },
        patentApplication: {
          title: 'تقديم ومتابعة براءات الاختراع',
          description: 'الصياغة الفنية والتقديم والمتابعة عبر الولايات القضائية ذات الأولوية'
        },
        tradeSecret: {
          title: 'الاستشارات في الأسرار التجارية',
          description: 'برامج تعزيز العمليات السرية وإدارة المعرفة الحساسة'
        },
        disputes: {
          title: 'نزاعات وإنفاذ الملكية الفكرية',
          description: 'الرد على الانتهاكات والتسويات المتفاوض عليها ودعم التقاضي'
        },
        globalIP: {
          title: 'الملكية الفكرية العالمية وعبر الحدود',
          description: 'مدريد، معاهدة التعاون بشأن البراءات، وتنسيق المستشار المحلي مع حوكمة موحدة'
        },
        industrialDesign: {
          title: 'حماية التصاميم والنماذج الصناعية',
          description: 'تسجيل التصاميم والتجديدات وبرامج مكافحة التزييف'
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
      ],
      home: {
        localExpertise: {
          label: 'خبرة محلية، رؤية عالمية',
          description: 'محامون متخصصون في القطاعات عبر دول مجلس التعاون الخليجي يقدمون مشورة دقيقة في اللحظة التي تتغير فيها الأولويات.'
        },
        tailoredProgrammes: {
          label: 'برامج مخصصة واستباقية',
          description: 'استراتيجيات دورة الحياة المبنية على الإطلاق والتجديدات والنزاعات بحيث تكون القرارات دائمًا في الوقت المناسب ومستنيرة.'
        },
        auditReady: {
          label: 'الحوكمة وإعداد التقارير الجاهزة للتدقيق',
          description: 'أطر الأدلة ولوحات المعلومات والتحديثات الجاهزة لمجلس الإدارة التي تصمد أمام التدقيق عبر الولايات القضائية.'
        },
        rapidEnforcement: {
          label: 'وضع الإنفاذ والدفاع السريع',
          description: 'كتيبات التصعيد تتيح لك التدخل بسرعة - إداريًا أو تجاريًا أو من خلال التقاضي - دون فقدان الزخم.'
        }
      }
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
      discuss: 'ناقش احتياجات الملكية الفكرية الخاصة بك',
      phases: {
        consultation: {
          title: 'الاستشارة وتدقيق الملكية الفكرية',
          description: 'جلسات الانغماس لإظهار الأصول الحالية ونقاط التعرض والولايات القضائية التي تتطلب التعبئة الفورية.'
        },
        strategy: {
          title: 'هيكلة الاستراتيجية',
          description: 'تخطيط السيناريوهات وخرائط طريق التقديم ونمذجة الميزانية التي تترجم الأهداف التجارية إلى برامج قابلة للتنفيذ.'
        },
        execution: {
          title: 'التنفيذ والمراقبة',
          description: 'التسجيلات المنسقة والتجديدات وخدمات المراقبة المستمرة الموثقة من خلال لوحات معلومات على مستوى القرار.'
        },
        enforcement: {
          title: 'الإنفاذ والدفاع',
          description: 'دعم التقاضي والاعتراضات والتسويات المتفاوض عليها التي تحمي قيمة المؤسسة بسرعة.'
        }
      }
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
      hero: {
        eyebrow: 'تواصل معنا',
        title: 'دعم خبير للملكية الفكرية مصمم لاحتياجاتك',
        subtitle: 'تواصل مع متخصصين ذوي تركيز إقليمي ينسقون التسجيلات والإنفاذ والاستشارات الاستراتيجية عبر دول مجلس التعاون الخليجي.',
        metrics: {
          response: {
            value: '24 ساعة',
            label: 'وقت الاستجابة'
          },
          retention: {
            value: '92%',
            label: 'الاحتفاظ بالعملاء'
          },
          jurisdictions: {
            value: '+150',
            label: 'الولايات القضائية المشمولة'
          }
        },
        whatToExpect: {
          heading: 'ما يمكن توقعه',
          description: 'قائد مشاركة مخصص ينسق مع متخصصينا للرد خلال يوم عمل واحد.',
          pillars: {
            lead: 'قائد مشاركة مخصص',
            confidential: 'معالجة سرية',
            multilingual: 'دعم إقليمي متعدد اللغات'
          }
        }
      },
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
      sections: {
        sendMessage: {
          eyebrow: 'إرسال رسالة',
          title: 'أخبرنا عن أهداف الملكية الفكرية الخاصة بك',
          subtitle: 'شارك متطلباتك وسنقوم بتجميع الفريق المناسب عبر الملاحقة والإنفاذ والاستشارات الاستراتيجية.'
        },
        visitOffice: {
          eyebrow: 'زيارة مكتبنا',
          title: 'موقع مركزي في مدينة الكويت',
          subtitle: 'يخدم مكتبنا العملاء عبر دول مجلس التعاون الخليجي ومنطقة الشرق الأوسط وشمال أفريقيا والولايات القضائية الدولية من خلال شبكة شركائنا الواسعة.'
        },
        nextSteps: {
          eyebrow: 'الخطوات التالية',
          title: 'شارك مع فريق يركز على حماية ملكيتك الفكرية',
          subtitle: 'من التسجيلات الأولى إلى الإنفاذ عبر الحدود، نبني برامج تتماشى مع حوكمتك وطموحات نموك.',
          buttons: {
            primary: 'استكشف خدماتنا',
            secondary: 'تعرف على نهجنا'
          }
        }
      },
      formLabels: {
        firstNamePlaceholder: 'محمد',
        lastNamePlaceholder: 'أحمد',
        emailPlaceholder: 'mohammad.ahmad@example.com',
        phonePlaceholder: '+965 9009 5960',
        companyPlaceholder: 'شركتك',
        messagePlaceholder: 'وصف متطلبات الملكية الفكرية والجداول الزمنية أو الأسئلة الخاصة بك...',
        submitButton: 'إرسال الرسالة',
        submitting: 'جارٍ الإرسال...',
        privacyNotice: 'بالإرسال، فإنك توافق على سياسة الخصوصية الخاصة بنا. يتم التعامل مع جميع الاستفسارات بشكل آمن وسري.'
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
      hero: {
        eyebrow: 'تغطية عالمية',
        title: 'حماية عالمية سلسة للملكية الفكرية.',
        titleLine2: 'وصول وخبرة لا تُقبل بالمساومة.',
        subtitle: 'نترجم القواعد المعقدة عبر الحدود إلى إجراءات منضبطة، مما يضمن بقاء التسجيلات والإنفاذ متماسكة عبر كل إقليم تعمل فيه.',
        metrics: {
          jurisdictions: {
            metric: '+150',
            label: 'ولايات قضائية منسقة'
          },
          partnerships: {
            metric: '+60',
            label: 'شراكات استشارية محلية'
          },
          mandates: {
            metric: '+2000',
            label: 'تكليفات عابرة للحدود منفذة'
          }
        }
      },
      sections: {
        strategicRegions: {
          eyebrow: 'مناطق استراتيجية',
          title: 'مشهد الملكية الفكرية في دول مجلس التعاون الخليجي',
          subtitle: 'حماية شاملة للملكية الفكرية عبر جميع الدول الأعضاء الست في مجلس التعاون الخليجي مع معرفة متخصصة باللوائح المحلية والمعاهدات وآليات الإنفاذ.'
        },
        globalFrameworks: {
          eyebrow: 'أطر عمل عالمية',
          title: 'ثقة عبر الأنظمة الدولية',
          subtitle: 'نتكامل مباشرة مع الهيئات العالمية والمكاتب الإقليمية، مما يضمن بقاء أصول الملكية الفكرية الخاصة بك متوافقة وقابلة للإنفاذ ومحسنة للتوسع.'
        },
        deliveryRhythm: {
          eyebrow: 'إيقاع التسليم',
          title: 'تسلسل منضبط للتنفيذ الدولي',
          subtitle: 'الحوكمة الشفافة والجداول الزمنية الموثوقة تبقي أصحاب المصلحة متوافقين من التقييم الأولي وحتى الإنفاذ.'
        },
        programmeGovernance: {
          eyebrow: 'حوكمة البرنامج',
          title: 'شراكات مصممة للتوسع',
          subtitle: 'ابق جاهزًا للتدقيق من خلال إدارة البرنامج التي توفر الوضوح بشأن الإنفاق والجداول الزمنية ووضع المخاطر.'
        },
        finalCta: {
          eyebrow: 'وصول عالمي',
          title: 'مد حماية ملكيتك الفكرية مع شريك واحد مسؤول',
          subtitle: 'تعاون مع مكتبنا العابر للحدود لتنسيق التسجيلات والتجديدات واستراتيجيات الإنفاذ والتسويق عبر كل ولاية قضائية حاسمة لنموك.',
          buttons: {
            primary: 'بدء تكليف دولي',
            secondary: 'شاهد كيف نعمل'
          }
        }
      },
      tabs: {
        overview: 'نظرة عامة',
        treaties: 'المعاهدات',
        trademarks: 'العلامات التجارية',
        patents: 'براءات الاختراع'
      },
      labels: {
        capital: 'العاصمة',
        ministry: 'الوزارة',
        officialWebsite: 'الموقع الرسمي'
      },
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
      deadline: 'الموعد النهائي للاعتراض',
      hero: {
        eyebrow: 'ذكاء الملكية الفكرية لدول مجلس التعاون الخليجي',
        title: 'تحديثات الصناعة ومنشورات الجريدة الرسمية',
        subtitle: 'مراقبة فورية للتطورات الرسمية للملكية الفكرية ومنشورات جريدة العلامات التجارية والتحديثات التنظيمية عبر منطقة دول مجلس التعاون الخليجي.',
        metrics: {
          countries: {
            metric: '6',
            label: 'دول مجلس التعاون الخليجي'
          },
          updates: {
            metric: 'يومي',
            label: 'تحديثات'
          },
          sources: {
            metric: 'رسمي',
            label: 'مصادر'
          }
        }
      },
      sections: {
        officialSources: {
          eyebrow: 'مصادر رسمية',
          title: 'تحديثات الملكية الفكرية في دول مجلس التعاون الخليجي',
          subtitle: 'تحديثات منسقة من الوزارات الحكومية الرسمية ومكاتب الملكية الفكرية عبر جميع الدول الأعضاء الست في مجلس التعاون الخليجي.'
        },
        latestUpdates: 'آخر التحديثات'
      }
    },
    insights: {
      title: 'الرؤى والنماذج',
      subtitle: 'الموارد والأدوات',
      description: 'الوصول إلى مكتبتنا من موارد الملكية الفكرية والأدلة والنماذج القابلة للتنزيل',
      hero: {
        eyebrow: 'الرؤى والموارد',
        title: 'ذكاء قابل للتنفيذ في الملكية الفكرية',
        subtitle: 'مكتبة منسقة من المعلومات والقوالب والإحاطات التحليلية لاستراتيجية واثقة للملكية الفكرية عبر منطقة دول مجلس التعاون الخليجي.',
        metrics: {
          guides: {
            value: 'متخصص في دول الخليج',
            label: 'الأدلة والقوالب'
          },
          videos: {
            value: 'شروحات فيديو',
            label: 'وحدات التعلم'
          },
          forms: {
            value: 'متابعة سريعة',
            label: 'تقديم النماذج'
          }
        },
        quality: {
          heading: 'ضمان الجودة',
          description: 'مواد مكتوبة من قبل متخصصين في الملكية الفكرية ويتم مراجعتها بانتظام لتعكس التغييرات في دول مجلس التعاون الخليجي والشرق الأوسط وشمال أفريقيا والدولية.',
          features: {
            categorized: 'محتوى مصنف',
            templates: 'قوالب إقليمية',
            routing: 'توجيه متخصص'
          }
        }
      },
      sections: {
        countryIntelligence: {
          eyebrow: 'معلومات قطرية',
          title: 'أدلة الدول',
          subtitle: 'نظرة عامة عملية على إجراءات التسجيل والجداول الزمنية والمتطلبات حسب الدولة.'
        },
        legalFramework: {
          eyebrow: 'مستودع الإطار القانوني',
          title: 'تشريعات ووثائق تنظيمية للملكية الفكرية في دول مجلس التعاون الخليجي',
          subtitle: 'الوصول إلى تشريعات شاملة للعلامات التجارية وبراءات الاختراع والتصاميم الصناعية عبر الكويت والبحرين وقطر والسعودية والإمارات.'
        },
        onDemandLearning: {
          eyebrow: 'تعلم حسب الطلب',
          title: 'مركز معرفة الملكية الفكرية: تعلم، طبق، احم',
          subtitle: 'وحدات شرح قصيرة مع إرشادات قابلة للتنفيذ لمساعدتك على فهم الملكية الفكرية والعلامات التجارية وبراءات الاختراع وحقوق التصميم.'
        },
        nextSteps: {
          eyebrow: 'الخطوات التالية',
          title: 'نسق إحاطتك القادمة في مجال معلومات الملكية الفكرية',
          subtitle: 'شارك مع محللينا لمراجعة التسجيلات القادمة أو نشاط الإنفاذ الإقليمي أو تحديثات الحوكمة المصممة خصيصًا لمؤسستك.',
          buttons: {
            primary: 'اشترك للحصول على تحديثات المعلومات',
            secondary: 'عرض خدماتنا'
          }
        }
      },
      labels: {
        countryGuide: 'دليل الدولة',
        trademarkGuide: 'دليل العلامات التجارية',
        patentGuide: 'دليل براءات الاختراع',
        designGuide: 'دليل التصاميم',
        downloadFullGuide: 'تنزيل الدليل الكامل وقائمة التحقق',
        howToPractice: 'كيفية تطبيق هذا عمليًا',
        didYouKnow: 'هل تعلم؟'
      },
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
