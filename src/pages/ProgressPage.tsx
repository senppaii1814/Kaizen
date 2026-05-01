import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { ALL_GUIDE_SLUGS, getGuide, type GuideSlug } from '@/content/guides';
import { useI18n } from '@/i18n/LocaleProvider';
import { progressPercent } from '@/lib/guideProgress';

export default function ProgressPage() {
  const { locale, t, m } = useI18n();
  const rows = ALL_GUIDE_SLUGS.map(slug => ({
    slug: slug as GuideSlug,
    guide: getGuide(slug, locale)!
  }));

  const anyPct = rows.some(({ slug, guide }) => progressPercent(slug, guide.steps.length) > 0);

  return (
    <PageShell title={t('progressPage.title')} subtitleJa={m.shellSubtitleJa.progress} lead={t('progressPage.lead')}>
      <main className="min-h-[40vh] overflow-x-hidden pb-24">
        <div className="page-container border-b border-warm/15 pb-8">
          <Link
            to="/"
            className="focus-ring inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t('lessonPage.breadcrumbHome')}
          </Link>
        </div>
        <div className="page-container py-12">
          {!anyPct ? (
            <p className="rounded-2xl border border-warm/20 bg-night px-10 py-12 text-center font-ui text-warm">{t('progressPage.empty')}</p>
          ) : null}
          <ul className="mt-10 space-y-10">
            {rows.map(({ slug, guide }) => {
              const pct = progressPercent(slug, guide.steps.length);
              return (
                <li key={slug} className="rounded-2xl border border-warm/20 bg-night p-8 shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-warm">{guide.category}</p>
                      <h2 className="mt-2 font-display text-2xl italic text-primary">{guide.title}</h2>
                      <div className="mt-8 h-2 max-w-xl overflow-hidden rounded-full bg-mist">
                        <div className="h-full bg-primary transition-[width] duration-700 ease-kaizen" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <Link
                      to={`/guides/${slug}`}
                      className="focus-ring rounded-full bg-primary px-5 py-2.5 font-ui text-sm font-semibold text-black hover:brightness-95"
                    >
                      {t('progressPage.openGuide')}
                    </Link>
                  </div>
                  <div className="mt-10 flex justify-end">
                    <span className="font-display text-3xl italic text-primary">{pct}%</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </PageShell>
  );
}
