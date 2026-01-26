'use client';

import { useI18n, Locale } from '@/i18n';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();

  const handleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    // Update document direction for RTL support
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLocale;
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => handleChange('de')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
          locale === 'de'
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => handleChange('ar')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
          locale === 'ar'
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="العربية"
      >
        AR
      </button>
    </div>
  );
}
