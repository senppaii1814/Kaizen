import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { useI18n } from '@/i18n/LocaleProvider';

export default function About() {
  const { t, m } = useI18n();
  const sections = m.about.sections;

  return (
    <PageShell
      eyebrow={t('about.eyebrow')}
      title={t('about.title')}
      subtitleJa={m.shellSubtitleJa.about}
      lead={t('about.lead')}
    >
      <main className="overflow-x-hidden pb-24">
        <section className="page-section-tight relative overflow-x-hidden border-b border-warm/15">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.06]" aria-hidden />
          <div className="page-container relative max-w-5xl">
            <p
              className="mt-6 text-center font-jp-sans text-5xl leading-none text-primary/90 sm:text-6xl lg:text-left lg:text-7xl xl:text-8xl"
              aria-hidden
            >
              改善
            </p>
          </div>
        </section>

        <section className="page-section">
          <ol className="page-container flex max-w-4xl flex-col gap-16 sm:gap-20">
            {sections.map((section, i) => (
              <li key={section.heading} className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]">
                <div className="flex min-w-0 flex-wrap items-baseline gap-4 md:flex-col md:items-start md:gap-3">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-warm">0{i + 1}</span>
                  <span className="font-jp-sans text-4xl leading-none text-primary sm:text-5xl md:text-6xl" aria-hidden>
                    {section.kanji}
                  </span>
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-2xl italic text-primary sm:text-3xl">{section.heading}</h2>
                  <p className="mt-4 max-w-reading font-jp-sans text-base leading-relaxed text-warm sm:text-lg">{section.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="page-section-tight border-t border-warm/15 bg-night">
          <div className="page-container flex max-w-4xl flex-col gap-6 text-center">
            <p className="font-jp-serif text-2xl italic text-primary sm:text-3xl">
              {t('about.close')}{' '}
              <Link
                to="/#waitlist"
                className="focus-ring inline-flex items-center gap-2 text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                {t('about.closeLink')}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
