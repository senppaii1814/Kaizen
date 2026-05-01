import { Link, NavLink } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher';
import { useI18n } from '@/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

const ROUTES = [
  { to: '/', end: true, key: 'home' as const },
  { to: '/about', end: false, key: 'about' },
  { to: '/guides', end: false, key: 'guides' },
  { to: '/glossary', end: false, key: 'glossary' },
  { to: '/progress', end: false, key: 'progress' },
  { to: '/updates', end: false, key: 'updates' },
  { to: '/economics', end: false, key: 'economics' },
  { to: '/security', end: false, key: 'security' },
  { to: '/network', end: false, key: 'network' },
  { to: '/faq', end: false, key: 'faq' }
] as const;

export function SiteNav() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4 pb-2">
      <nav
        aria-label="Primary"
        className="flex max-w-[min(100%,72rem)] flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-b-2xl border border-warm/15 bg-black/90 px-4 py-2 shadow-lg backdrop-blur-md md:flex-nowrap md:rounded-b-3xl md:px-6"
      >
        <Link
          to="/"
          className="focus-ring mr-2 shrink-0 rounded-md text-center leading-tight transition-opacity hover:opacity-90"
        >
          <span className="font-jp-sans text-sm font-medium text-paper">{t('meta.kanji')}</span>
          <span className="mx-1.5 text-warm/40" aria-hidden>
            ·
          </span>
          <span className="font-display text-sm font-medium italic text-paper">{t('meta.brand')}</span>
        </Link>

        <div className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 overflow-x-auto sm:gap-x-3 md:mx-0 md:flex-nowrap md:justify-start">
          {ROUTES.map(r => (
            <NavLink
              key={r.to}
              to={r.to}
              end={r.end}
              className={({ isActive }) =>
                cn(
                  'focus-ring shrink-0 rounded-full px-2 py-1 font-ui text-[10px] uppercase tracking-wide transition-colors duration-kaizen sm:text-[11px]',
                  isActive ? 'text-paper' : 'text-primary/65 hover:text-primary'
                )
              }
            >
              {t(`nav.${r.key}`)}
            </NavLink>
          ))}
        </div>

        <div className="shrink-0 md:ml-2">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
