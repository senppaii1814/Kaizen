import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/LocaleProvider';

function isInternal(href: string) {
  return href.startsWith('/') || href.startsWith('#');
}

export function Footer() {
  const { t, m } = useI18n();

  return (
    <footer className="relative border-t border-warm/15 bg-paper pt-20 pb-12">
      <div className="page-container flex flex-col gap-16 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="flex items-baseline gap-3">
            <span className="font-jp-yuji text-3xl text-sumi">{t('meta.kanji')}</span>
            <span className="font-display text-2xl italic text-sumi">Kaizen Treasury</span>
          </p>
          <p className="mt-4 font-jp-sawarabi-m text-sm leading-relaxed text-warm">{t('footer.tagline')}</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:gap-14">
          {m.footer.sections.map(section => (
            <div key={section.title} className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm">{section.title}</p>
              <ul className="space-y-2 font-ui text-sm">
                {section.links.map(link =>
                  isInternal(link.href) ? (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="focus-ring rounded-sm text-sumi transition-colors duration-kaizen ease-kaizen hover:text-oxide"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="focus-ring rounded-sm text-sumi transition-colors duration-kaizen ease-kaizen hover:text-oxide"
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
      <div className="page-container mt-16 border-t border-warm/15 pt-8">
        <p className="font-mono text-[11px] tracking-wide text-warm">{t('footer.disclaimer')}</p>
      </div>
    </footer>
  );
}
