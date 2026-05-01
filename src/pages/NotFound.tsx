import { Link } from 'react-router-dom';
import { PageShell } from '@/components/site/PageShell';
import { useI18n } from '@/i18n/LocaleProvider';

export default function NotFound() {
  const { t, m } = useI18n();

  return (
    <PageShell title={t('notFound.title')} subtitleJa={m.shellSubtitleJa.notFound} lead={t('notFound.lead')}>
      <main className="overflow-x-hidden pb-24">
        <div className="page-container flex min-h-[45vh] flex-col items-center justify-center py-16 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-warm">404</p>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="focus-ring rounded-full bg-primary px-8 py-3 font-ui text-sm font-semibold text-black hover:brightness-95"
            >
              {t('notFound.home')}
            </Link>
            <Link
              to="/guides"
              className="focus-ring rounded-full border-2 border-primary/70 px-8 py-[0.6875rem] font-ui text-sm font-semibold text-primary hover:border-primary"
            >
              {t('notFound.guides')}
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
