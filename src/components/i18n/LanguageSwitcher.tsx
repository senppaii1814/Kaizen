import { useI18n } from '@/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="flex shrink-0 items-center rounded-full border border-warm/35 bg-night p-0.5 shadow-inner"
      role="group"
      aria-label={locale === 'ja' ? '言語' : 'Language'}
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={cn(
          'focus-ring rounded-full px-3 py-1 font-ui text-[11px] font-medium uppercase tracking-wide transition duration-kaizen ease-kaizen',
          locale === 'en' ? 'bg-primary text-black shadow-sm' : 'text-warm hover:text-primary'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('ja')}
        aria-pressed={locale === 'ja'}
        className={cn(
          'focus-ring rounded-full px-3 py-1 font-jp-sans text-[11px] font-medium transition duration-kaizen ease-kaizen',
          locale === 'ja' ? 'bg-primary text-black shadow-sm' : 'text-warm hover:text-primary'
        )}
      >
        日本語
      </button>
    </div>
  );
}
