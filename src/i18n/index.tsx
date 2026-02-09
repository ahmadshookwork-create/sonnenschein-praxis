'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import de from './locales/de.json';
import ar from './locales/ar.json';

export type Locale = 'de' | 'ar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = Record<string, any>;

const translations: Record<Locale, Translations> = {
  de: de as Translations,
  ar: ar as Translations,
};

const LOCALE_STORAGE_KEY = 'praxis-allozy-locale';

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

function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === 'de' || stored === 'ar') {
      return stored;
    }
  } catch {
    // localStorage might not be available
  }
  return null;
}

function storeLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // localStorage might not be available
  }
}

export function I18nProvider({ children, defaultLocale = 'de' }: I18nProviderProps) {
  // Initialize with stored locale or default
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Only run on client
    if (typeof window !== 'undefined') {
      return getStoredLocale() || defaultLocale;
    }
    return defaultLocale;
  });
  
  const [isHydrated, setIsHydrated] = useState(false);

  // On mount, check localStorage again (for SSR hydration)
  useEffect(() => {
    const stored = getStoredLocale();
    if (stored && stored !== locale) {
      setLocaleState(stored);
    }
    setIsHydrated(true);
  }, []);

  // Update document direction when locale changes
  useEffect(() => {
    if (isHydrated) {
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = locale;
    }
  }, [locale, isHydrated]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    storeLocale(newLocale);
  }, []);

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
