import type { AlMarsaIconName } from "@/components/icons/al-marsa";

type ServiceItem = {
  icon: AlMarsaIconName;
  title: string;
  description: string;
};

type FeatureItem = {
  icon: AlMarsaIconName;
  label: string;
  description: string;
};

type StatItem = {
  number: string;
  label: string;
};

type TranslationFunction = (key: string) => string;

export const getHomeServices = (t: TranslationFunction): ServiceItem[] => {
  return [
    {
      icon: "trademark",
      title: t('homePage.homeServices.trademark.title'),
      description: t('homePage.homeServices.trademark.description')
    },
    {
      icon: "patent",
      title: t('homePage.homeServices.patent.title'),
      description: t('homePage.homeServices.patent.description')
    },
    {
      icon: "strategy",
      title: t('homePage.homeServices.tradeSecret.title'),
      description: t('homePage.homeServices.tradeSecret.description')
    },
    {
      icon: "disputes",
      title: t('homePage.homeServices.disputes.title'),
      description: t('homePage.homeServices.disputes.description')
    },
    {
      icon: "advantage-network",
      title: t('homePage.homeServices.global.title'),
      description: t('homePage.homeServices.global.description')
    },
    {
      icon: "industrial",
      title: t('homePage.homeServices.industrial.title'),
      description: t('homePage.homeServices.industrial.description')
    }
  ];
};

export const getHomeFeatures = (t: TranslationFunction): FeatureItem[] => {
  return [
    {
      icon: "advantage-insight",
      label: t('homePage.homeFeatures.expertise.label'),
      description: t('homePage.homeFeatures.expertise.description')
    },
    {
      icon: "advantage-network",
      label: t('homePage.homeFeatures.tailored.label'),
      description: t('homePage.homeFeatures.tailored.description')
    },
    {
      icon: "advantage-governance",
      label: t('homePage.homeFeatures.governance.label'),
      description: t('homePage.homeFeatures.governance.description')
    },
    {
      icon: "defence",
      label: t('homePage.homeFeatures.enforcement.label'),
      description: t('homePage.homeFeatures.enforcement.description')
    }
  ];
};

export const getHomeStats = (t: TranslationFunction): StatItem[] => {
  return [
    {
      number: t('homePage.homeStats.matters.number'),
      label: t('homePage.homeStats.matters.label')
    },
    {
      number: t('homePage.homeStats.jurisdictions.number'),
      label: t('homePage.homeStats.jurisdictions.label')
    },
    {
      number: t('homePage.homeStats.satisfaction.number'),
      label: t('homePage.homeStats.satisfaction.label')
    }
  ];
};

// For backwards compatibility - these will be removed after refactoring
export const services: ServiceItem[] = [];
export const features: FeatureItem[] = [];
export const stats: StatItem[] = [];

// Default exports with fallbacks
export default {
  services,
  features,
  stats
};
