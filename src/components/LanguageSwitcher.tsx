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
    <div className={`flex items-center gap-1 bg-[var(--background-secondary)] rounded-lg p-1 ${className}`}>
      <button
        onClick={() => handleChange('de')}
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${
          locale === 'de'
            ? 'bg-[var(--primary)] text-white shadow-sm'
            : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-white/50'
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => handleChange('ar')}
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${
          locale === 'ar'
            ? 'bg-[var(--primary)] text-white shadow-sm'
            : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-white/50'
        }`}
        aria-label="العربية"
      >
        ع
      </button>
    </div>
  );
}
