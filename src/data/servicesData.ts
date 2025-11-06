import type { AlMarsaIconName } from "@/components/icons/al-marsa";

type ServicePillar = {
  icon: AlMarsaIconName;
  title: string;
  tagline: string;
  services: string[];
  whyItMatters: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type TranslationFunction = (key: string) => string;

export const getServiceIntro = (t: TranslationFunction): string => {
  return t('servicesPage.pillars.intro');
};

export const getServicePillars = (t: TranslationFunction): ServicePillar[] => {
  return [
    {
      icon: "trademark",
      title: t('servicesPage.pillars.items.registration.title'),
      tagline: t('servicesPage.pillars.items.registration.tagline'),
      services: [
        t('servicesPage.pillars.items.registration.services.0'),
        t('servicesPage.pillars.items.registration.services.1'),
        t('servicesPage.pillars.items.registration.services.2'),
        t('servicesPage.pillars.items.registration.services.3')
      ],
      whyItMatters: t('servicesPage.pillars.items.registration.whyItMatters')
    },
    {
      icon: "disputes",
      title: t('servicesPage.pillars.items.enforcement.title'),
      tagline: t('servicesPage.pillars.items.enforcement.tagline'),
      services: [
        t('servicesPage.pillars.items.enforcement.services.0'),
        t('servicesPage.pillars.items.enforcement.services.1'),
        t('servicesPage.pillars.items.enforcement.services.2'),
        t('servicesPage.pillars.items.enforcement.services.3'),
        t('servicesPage.pillars.items.enforcement.services.4'),
        t('servicesPage.pillars.items.enforcement.services.5')
      ],
      whyItMatters: t('servicesPage.pillars.items.enforcement.whyItMatters')
    },
    {
      icon: "strategy",
      title: t('servicesPage.pillars.items.licensing.title'),
      tagline: t('servicesPage.pillars.items.licensing.tagline'),
      services: [
        t('servicesPage.pillars.items.licensing.services.0'),
        t('servicesPage.pillars.items.licensing.services.1'),
        t('servicesPage.pillars.items.licensing.services.2'),
        t('servicesPage.pillars.items.licensing.services.3')
      ],
      whyItMatters: t('servicesPage.pillars.items.licensing.whyItMatters')
    },
    {
      icon: "defence",
      title: t('servicesPage.pillars.items.antiCounterfeiting.title'),
      tagline: t('servicesPage.pillars.items.antiCounterfeiting.tagline'),
      services: [
        t('servicesPage.pillars.items.antiCounterfeiting.services.0'),
        t('servicesPage.pillars.items.antiCounterfeiting.services.1'),
        t('servicesPage.pillars.items.antiCounterfeiting.services.2')
      ],
      whyItMatters: t('servicesPage.pillars.items.antiCounterfeiting.whyItMatters')
    },
    {
      icon: "audit",
      title: t('servicesPage.pillars.items.contracts.title'),
      tagline: t('servicesPage.pillars.items.contracts.tagline'),
      services: [
        t('servicesPage.pillars.items.contracts.services.0'),
        t('servicesPage.pillars.items.contracts.services.1'),
        t('servicesPage.pillars.items.contracts.services.2'),
        t('servicesPage.pillars.items.contracts.services.3')
      ],
      whyItMatters: t('servicesPage.pillars.items.contracts.whyItMatters')
    },
    {
      icon: "advantage-insight",
      title: t('servicesPage.pillars.items.advisory.title'),
      tagline: t('servicesPage.pillars.items.advisory.tagline'),
      services: [
        t('servicesPage.pillars.items.advisory.services.0'),
        t('servicesPage.pillars.items.advisory.services.1'),
        t('servicesPage.pillars.items.advisory.services.2'),
        t('servicesPage.pillars.items.advisory.services.3')
      ],
      whyItMatters: t('servicesPage.pillars.items.advisory.whyItMatters')
    }
  ];
};

export const getServiceProcess = (t: TranslationFunction): ProcessStep[] => {
  return [
    {
      step: t('servicesPage.process.steps.discovery.step'),
      title: t('servicesPage.process.steps.discovery.title'),
      description: t('servicesPage.process.steps.discovery.description')
    },
    {
      step: t('servicesPage.process.steps.search.step'),
      title: t('servicesPage.process.steps.search.title'),
      description: t('servicesPage.process.steps.search.description')
    },
    {
      step: t('servicesPage.process.steps.roadmap.step'),
      title: t('servicesPage.process.steps.roadmap.title'),
      description: t('servicesPage.process.steps.roadmap.description')
    },
    {
      step: t('servicesPage.process.steps.filing.step'),
      title: t('servicesPage.process.steps.filing.title'),
      description: t('servicesPage.process.steps.filing.description')
    },
    {
      step: t('servicesPage.process.steps.prosecution.step'),
      title: t('servicesPage.process.steps.prosecution.title'),
      description: t('servicesPage.process.steps.prosecution.description')
    },
    {
      step: t('servicesPage.process.steps.monitoring.step'),
      title: t('servicesPage.process.steps.monitoring.title'),
      description: t('servicesPage.process.steps.monitoring.description')
    }
  ];
};

// For backwards compatibility - these will be removed after refactoring
export const SERVICE_INTRO = "We organize our offerings into six core service pillars. Whether you're launching a new brand, defending your patent, or expanding internationally — we have the expertise to guide you.";
export const SERVICE_PILLARS: ServicePillar[] = [];
export const SERVICE_PROCESS: ProcessStep[] = [];
