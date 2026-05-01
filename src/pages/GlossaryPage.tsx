import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { getGlossary } from '@/content/glossary';
import { useI18n } from '@/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

export default function GlossaryPage() {
  const { locale, t, m } = useI18n();
  const cats = useMemo(() => getGlossary(locale), [locale]);
  const [selected, setSelected] = useState<string>('all');
  const visible = selected === 'all' ? cats : cats.filter(c => c.id === selected);
  const totalTerms = cats.reduce((acc, b) => acc + b.terms.length, 0);

  return (
    <PageShell
      title={t('glossaryPage.title')}
      subtitleJa={m.shellSubtitleJa.glossary}
      lead={t('glossaryPage.lead')}
    >
      <main className="min-h-[40vh] overflow-x-hidden pb-24">
        <div className="page-container border-b border-warm/15 pb-10">
          <Link
            to="/"
            className="focus-ring mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t('lessonPage.breadcrumbHome')}
          </Link>
          <p className="font-mono text-[11px] text-warm">{t('glossaryPage.metaLine', { terms: totalTerms, categories: cats.length })}</p>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setSelected('all')}
              className={cn(
                'focus-ring shrink-0 whitespace-nowrap rounded-full border px-5 py-2 font-mono text-[11px] uppercase tracking-[0.12em]',
                selected === 'all'
                  ? 'border-primary bg-primary text-black shadow-sm'
                  : 'border-warm/35 bg-night text-warm hover:border-warm hover:text-primary'
              )}
            >
              {t('glossaryPage.allCategories')} {totalTerms}
            </button>
            {cats.map(c => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelected(c.id)}
                className={cn(
                  'focus-ring shrink-0 whitespace-nowrap rounded-full border px-5 py-2 font-ui text-[13px]',
                  selected === c.id ? 'border-primary bg-primary text-black' : 'border-warm/25 bg-night text-warm hover:border-warm'
                )}
              >
                {c.title} ({c.terms.length})
              </button>
            ))}
          </div>
        </div>
        <div className="page-container space-y-20 py-16">
          {visible.map(section => (
            <section key={section.id}>
              <h2 className="flex items-center gap-3 font-display text-2xl text-primary">
                {section.title}
                <span className="font-mono text-sm font-normal uppercase tracking-[0.2em] text-warm">{section.terms.length}</span>
              </h2>
              <dl className="mt-10 grid gap-8 border-t border-warm/15 pt-10 lg:gap-12">
                {section.terms.map(({ term, def }) => (
                  <div key={term} id={term}>
                    <dt className="font-display text-xl italic text-primary">{term}</dt>
                    <dd className="mt-3 max-w-reading font-ui leading-relaxed text-warm">{def}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
