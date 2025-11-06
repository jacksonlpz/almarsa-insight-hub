import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, supportedLanguages } from '@/lib/i18n';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    if (!supportedLanguages.includes(lang)) {
      if (import.meta.env.DEV) {
        console.warn(`Language "${lang}" is not fully supported. Falling back to English.`);
      }
      setLanguageState('en');
      return;
    }

    setLanguageState(lang);
    // Update document-level attributes for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Apply language settings on mount
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) as string || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}