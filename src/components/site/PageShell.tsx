import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SiteNav } from '@/components/site/SiteNav';
import { SiteFooter } from '@/components/site/SiteFooter';
import { useI18n } from '@/i18n/LocaleProvider';

export function PageShell({
  children,
  eyebrow,
  title,
  subtitleJa,
  lead,
  showBackLink = false
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  subtitleJa?: string;
  lead?: string;
  showBackLink?: boolean;
}) {
  const { t } = useI18n();
  const showHeader = Boolean(eyebrow ?? title ?? lead ?? subtitleJa);

  return (
    <div className="relative flex min-h-dvh flex-col bg-black text-primary/90">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.1]" aria-hidden />
      <SiteNav />

      {showHeader ? (
        <header className="relative border-b border-warm/15 bg-gradient-to-br from-black via-night to-black">
          <div className="page-container py-10 sm:py-14">
            {showBackLink ? (
              <Link
                to="/"
                className="focus-ring mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                {t('lessonPage.breadcrumbHome')}
              </Link>
            ) : null}
            {eyebrow ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-warm">{eyebrow}</p>
            ) : null}
            {title ? (
              <h1 className="mt-5 max-w-4xl font-display text-[clamp(2rem,3.2vw+1rem,3.25rem)] leading-tight tracking-tight text-primary">
                {title}
              </h1>
            ) : null}
            {subtitleJa ? (
              <p className="mt-4 max-w-3xl font-serif text-xl italic leading-snug text-primary/85 sm:text-2xl">{subtitleJa}</p>
            ) : null}
            {lead ? <p className="mt-6 max-w-2xl font-ui text-lg leading-relaxed text-warm">{lead}</p> : null}
          </div>
        </header>
      ) : null}

      <div className="relative flex-1">{children}</div>

      <SiteFooter />
    </div>
  );
}
