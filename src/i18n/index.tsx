'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import de from './locales/de.json';
import ar from './locales/ar.json';

export type Locale = 'de' | 'ar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = Record<string, any>;

const translations: Record<Locale, Translations> = {
  de: de as Translations,
  ar: ar as Translations,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

export function I18nProvider({ children, defaultLocale = 'de' }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: unknown = translations[locale];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        // Return the key if translation not found
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  }, [locale]);

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export function useTranslation() {
  const { t, locale, dir } = useI18n();
  return { t, locale, dir };
}
