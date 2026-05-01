import { Link } from 'react-router-dom';
import { GuideCard } from '@/components/site/GuideCard';
import { PageShell } from '@/components/site/PageShell';
import { ALL_GUIDE_SLUGS, getGuide } from '@/content/guides';
import { useI18n } from '@/i18n/LocaleProvider';

export default function GuidesIndex() {
  const { locale, t, m } = useI18n();
  const guides = ALL_GUIDE_SLUGS.map(sl => getGuide(sl, locale)).filter(Boolean);

  return (
    <PageShell
      showBackLink
      title={t('guidesIndex.title')}
      subtitleJa={m.shellSubtitleJa.guidesIndex}
      lead={t('guidesIndex.lead')}
    >
      <main className="min-h-[40vh] overflow-x-hidden pb-24">
        <div className="page-container py-14">
          <ul className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {guides.map(g => (
              <li key={g!.slug}>
                <GuideCard guide={g!} />
                <Link
                  to={`/guides/${g!.slug}`}
                  className="focus-ring mt-4 ml-6 inline-flex font-ui text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
                >
                  {t('guidesIndex.openGuide')} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </PageShell>
  );
}
