import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/LocaleProvider';

function isInternal(href: string) {
  return href.startsWith('/') || href.startsWith('#');
}

export function SiteFooter() {
  const { t, m } = useI18n();

  return (
    <footer className="relative mt-auto border-t border-warm/15 bg-night pt-16 pb-10">
      <div className="page-container flex flex-col gap-16 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="flex flex-wrap items-baseline gap-2">
            <span className="font-jp-sans text-2xl text-primary">{t('meta.kanji')}</span>
            <span className="font-display text-xl italic text-paper">{t('meta.brand')}</span>
          </p>
          <p className="mt-4 font-jp-sans text-sm leading-relaxed text-warm">{t('footer.tagline')}</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3">
          {m.footer.sections.map(section => (
            <div key={section.title} className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm">{section.title}</p>
              <ul className="space-y-2 font-ui text-sm">
                {section.links.map(link =>
                  isInternal(link.href) ? (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="focus-ring rounded-sm text-primary/90 transition-colors duration-kaizen hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="focus-ring rounded-sm text-primary/90 transition-colors duration-kaizen hover:text-paper"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="page-container mt-14 border-t border-warm/15 pt-8">
        <p className="font-mono text-[11px] tracking-wide text-warm">{t('footer.disclaimer')}</p>
      </div>
    </footer>
  );
}
