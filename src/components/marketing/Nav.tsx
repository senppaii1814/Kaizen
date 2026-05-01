import { Link, NavLink, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher';
import { useI18n } from '@/i18n/LocaleProvider';

const MID_LINKS: {
  to: string;
  labelKey: 'guides' | 'glossary' | 'progress' | 'updates' | 'economics' | 'security' | 'network' | 'faq';
}[] = [
  { to: '/guides', labelKey: 'guides' },
  { to: '/glossary', labelKey: 'glossary' },
  { to: '/progress', labelKey: 'progress' },
  { to: '/updates', labelKey: 'updates' },
  { to: '/economics', labelKey: 'economics' },
  { to: '/security', labelKey: 'security' },
  { to: '/network', labelKey: 'network' },
  { to: '/faq', labelKey: 'faq' }
];

function midLinkActive(pathname: string, to: string) {
  if (to === '/guides') return pathname === '/guides' || pathname.startsWith('/guides/');
  return pathname === to;
}

export function MarketingNav() {
  const { t, locale } = useI18n();
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-warm/15 bg-paper/95 backdrop-blur-xl">
      <nav
        className="page-container flex flex-wrap items-center justify-between gap-y-4 py-4 lg:flex-nowrap lg:gap-6"
        aria-label="Primary"
      >
        <Link to="/" className="group focus-ring min-w-0 rounded-sm lg:mr-8">
          <span className="flex items-baseline gap-2">
            <span className="font-jp-yuji text-lg text-sumi">{t('meta.kanji')}</span>
            <span className="truncate font-display text-lg italic tracking-tight text-sumi group-hover:text-oxide">
              {locale === 'ja' ? t('meta.brand') : 'Kaizen Treasury'}
            </span>
          </span>
        </Link>

        <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-2 font-ui text-[13px] lg:w-auto lg:flex-1 lg:justify-start">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `focus-ring whitespace-nowrap ${isActive ? 'font-semibold text-sumi' : 'text-warm hover:text-sumi'}`
            }
          >
            {t('nav.home')}
          </NavLink>
          {MID_LINKS.map(({ to, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              className={() =>
                `focus-ring whitespace-nowrap ${midLinkActive(pathname, to) ? 'font-semibold text-sumi' : 'text-warm hover:text-sumi'}`
              }
            >
              {t(`nav.${labelKey}`)}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `focus-ring whitespace-nowrap ${isActive ? 'font-semibold text-sumi' : 'text-warm hover:text-sumi'}`
            }
          >
            {t('nav.about')}
          </NavLink>
        </div>

        <div className="flex w-full shrink-0 items-center justify-end gap-3 sm:w-auto">
          <Link
            to="/#waitlist"
            className="focus-ring rounded-full bg-oxide px-5 py-2.5 font-ui text-sm font-semibold text-paper hover:brightness-95"
          >
            {t('nav.join')}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
