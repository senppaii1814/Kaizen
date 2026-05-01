import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { ALL_GUIDE_SLUGS, getGuide, guideExists, type GuideSlug } from '@/content/guides';
import { useI18n } from '@/i18n/LocaleProvider';
import { loadGuideProgress, progressPercent, toggleStepComplete } from '@/lib/guideProgress';

export default function GuideLesson() {
  const { slug } = useParams<{ slug: string }>();
  const { t, m, locale } = useI18n();
  const lb = m.site.guideLabels;
  const guide = slug && guideExists(slug) ? getGuide(slug, locale) : null;

  const [completed, setCompleted] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!slug) return;
    setCompleted(loadGuideProgress(slug));
  }, [slug]);

  const pct = useMemo(() => (guide && slug ? progressPercent(slug, guide.steps.length) : 0), [guide, slug]);

  const nextSlug = useMemo(() => {
    if (!slug) return null;
    const i = ALL_GUIDE_SLUGS.indexOf(slug as GuideSlug);
    if (i < 0 || i >= ALL_GUIDE_SLUGS.length - 1) return null;
    return ALL_GUIDE_SLUGS[i + 1];
  }, [slug]);

  if (!slug || !guide) {
    return <Navigate to="/guides" replace />;
  }

  const lessonSlug = slug;
  const nextGuideDoc = nextSlug ? getGuide(nextSlug, locale) : null;

  function onToggle(stepIndex: number) {
    const done = !completed[stepIndex];
    toggleStepComplete(lessonSlug, stepIndex, done);
    setCompleted(loadGuideProgress(lessonSlug));
  }

  return (
    <PageShell>
      <main className="overflow-x-hidden pb-24">
        <div className="border-b border-warm/15 bg-gradient-to-br from-black via-night to-black">
          <div className="page-container py-8">
            <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-warm">
              <Link to="/" className="hover:text-primary">
                {t('lessonPage.breadcrumbHome')}
              </Link>
              <span className="mx-3 text-warm/50">/</span>
              <Link to="/guides" className="hover:text-primary">
                {t('lessonPage.breadcrumbGuides')}
              </Link>
              <span className="mx-3 text-warm/50">/</span>
              <span className="font-medium text-primary">{guide.category}</span>
            </nav>
            <Link to="/guides" className="focus-ring mt-8 mb-12 inline-flex font-ui text-sm text-primary hover:underline">
              {t('lessonPage.backToList')}
            </Link>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-black">
                {lb.free}
              </span>
              {guide.isNew ? (
                <span className="rounded-full bg-gold/18 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-black">
                  {lb.new}
                </span>
              ) : null}
              <span className="rounded-md border border-warm/25 px-2 py-0.5 font-mono text-[10px] text-warm">
                {guide.level === 'beginner' ? lb.beginner : lb.intermediate}
              </span>
              <span className="rounded-md border border-warm/25 px-2 py-0.5 font-mono text-[10px] text-warm">{guide.category}</span>
            </div>
            <h1 className="mt-8 font-display text-[clamp(2rem,3vw,3rem)] leading-tight text-primary">{guide.title}</h1>
            <p className="mt-4 max-w-3xl font-serif text-xl italic leading-snug text-primary/85 sm:text-2xl">{m.shellSubtitleJa.lesson}</p>
            <p className="mt-8 max-w-3xl font-ui text-lg leading-relaxed text-warm">{guide.deck}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-warm">
              {guide.rating} ★ · {guide.steps.length} {lb.stepsWord} · {guide.durationMin} {lb.minWord}
            </p>
          </div>
        </div>

        <div className="page-container grid gap-12 py-12 lg:grid-cols-[280px,minmax(0,1fr)] lg:gap-14">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-warm/20 bg-night p-6 shadow-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-warm">{t('lessonPage.progressTitle')}</p>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-mist">
                <div className="h-full bg-primary transition-[width] duration-500 ease-kaizen" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-4 font-display text-3xl italic text-primary">{pct}%</p>
              <p className="font-mono text-[10px] text-warm">{t('lessonPage.stepDone')}</p>
            </div>
            <div className="rounded-2xl border border-dashed border-primary/35 bg-mist/80 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">{t('lessonPage.earlyAccessNoteTitle')}</p>
              <p className="mt-3 text-sm leading-relaxed text-warm">{t('lessonPage.earlyAccessNoteBody')}</p>
            </div>
          </aside>

          <div>
            <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.32em] text-warm">
              {t('lessonPage.learnSteps')} {guide.steps.length}
            </p>
            <ol className="space-y-14">
              {guide.steps.map((step, idx) => {
                const stepNum = String(idx + 1).padStart(2, '0');
                const done = !!completed[idx];
                return (
                  <li key={step.title} id={`step-${idx}`} className="rounded-3xl border border-warm/20 bg-night/95 p-8 shadow-inner">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-warm/15 pb-6">
                      <div className="flex gap-6">
                        <span className="font-mono text-3xl italic text-warm">{stepNum}</span>
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-warm">
                            {t('lessonPage.stepOfTotal', { current: idx + 1, total: guide.steps.length })}
                          </div>
                          <h3 className="font-display text-2xl italic text-primary">{step.title}</h3>
                          <p className="mt-2 font-mono text-[11px] text-warm">{t('lessonPage.minRead', { minutes: step.readMin })}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className={`focus-ring inline-flex items-center gap-2 rounded-full border px-5 py-2 font-ui text-xs font-semibold ${
                          done
                            ? 'border-primary bg-primary text-black hover:brightness-95'
                            : 'border-warm/30 bg-mist text-warm hover:border-warm hover:text-primary'
                        }`}
                        onClick={() => onToggle(idx)}
                        aria-pressed={done}
                      >
                        {done ? (
                          <>
                            <Check className="h-4 w-4" aria-hidden /> {t('progressPage.complete')}
                          </>
                        ) : (
                          t('lessonPage.stepDone')
                        )}
                      </button>
                    </div>

                    <div className="mt-6 rounded-2xl border border-warm/10 bg-mist/60 px-6 py-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-warm">{t('lessonPage.tldr')}</p>
                      <ul className="mt-3 space-y-2 font-ui text-sm text-primary">
                        {step.bullets.map(line => (
                          <li key={line} className="flex gap-2">
                            <span className="text-primary">·</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="prose-muted mt-8 space-y-4 font-ui leading-relaxed text-warm [&_strong]:font-semibold [&_strong]:text-primary">
                      {step.body.split('\n\n').map(p => (
                        <p key={p.slice(0, 24)}>{p}</p>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ol>

            <aside className="mt-16 rounded-3xl border border-warm/20 bg-mist/40 p-8">
              <p className="text-sm leading-relaxed text-warm">{m.site.dyor}</p>
            </aside>

            {nextGuideDoc ? (
              <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-gold/25 bg-night p-10 text-primary">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-warm">{t('lessonPage.nextGuide')}</p>
                <h3 className="font-display text-2xl text-primary">{nextGuideDoc.title}</h3>
                <Link
                  to={`/guides/${nextGuideDoc.slug}`}
                  className="focus-ring inline-flex w-fit rounded-full bg-primary px-6 py-3 font-ui text-sm font-semibold text-black hover:brightness-95"
                >
                  {t('lessonPage.continueNext')} →
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </PageShell>
  );
}
