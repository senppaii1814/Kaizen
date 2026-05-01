import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { getUpdates } from '@/content/updates';
import { useI18n } from '@/i18n/LocaleProvider';

export default function UpdatesPage() {
  const { locale, t, m } = useI18n();
  const rows = getUpdates(locale);

  return (
    <PageShell title={t('updatesPage.title')} subtitleJa={m.shellSubtitleJa.updates} lead={t('updatesPage.lead')}>
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
        <ol className="page-container divide-y divide-warm/15 py-12">
          {rows.map(post => (
            <li key={post.iso + post.title} className="py-12">
              <time dateTime={post.iso} className="font-mono text-[11px] uppercase tracking-[0.2em] text-warm">
                {post.iso}
              </time>
              <h2 className="mt-4 font-display text-2xl italic text-primary">{post.title}</h2>
              <p className="mt-6 max-w-reading font-ui leading-relaxed text-warm">{post.body}</p>
            </li>
          ))}
        </ol>
      </main>
    </PageShell>
  );
}
