import { PageShell } from '@/components/site/PageShell';
import { useI18n } from '@/i18n/LocaleProvider';
import { getEconomics } from '@/content/infoPages';

function pctWidth(pct: string) {
  const n = parseInt(pct, 10);
  return Number.isFinite(n) ? `${n}%` : pct;
}

export default function EconomicsPage() {
  const { locale, m } = useI18n();
  const c = getEconomics(locale);

  return (
    <PageShell
      showBackLink
      eyebrow={c.eyebrow}
      title={c.title}
      subtitleJa={m.shellSubtitleJa.economics}
      lead={c.lead}
    >
      <main className="overflow-x-hidden pb-24">
        <div className="page-container py-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-primary">{c.splitLabel}</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {c.splitBlocks.map(block => (
              <article
                key={block.pct}
                className="flex flex-col rounded-2xl border border-warm/20 bg-night p-7 shadow-sm transition hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display text-3xl italic tracking-tight text-gold">{block.pct}</span>
                  <h2 className="font-display text-xl text-primary">{block.title}</h2>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-mist">
                  <div
                    className="h-full animate-pulse rounded-full bg-gradient-to-r from-gold via-primary/85 to-gold"
                    style={{ width: pctWidth(block.pct) }}
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-warm">{block.detail}</p>
              </article>
            ))}
          </div>

          {c.sections.map(sec => (
            <section key={sec.heading} className="mt-16 border-t border-warm/15 pt-14">
              <h2 className="font-display text-2xl tracking-tight text-primary sm:text-[1.75rem]">{sec.heading}</h2>
              <div className="mt-6 space-y-4">
                {sec.paragraphs.map(p => (
                  <p key={p.slice(0, 48)} className="max-w-reading text-[0.97rem] leading-relaxed text-warm">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <p className="mt-16 rounded-2xl border border-dashed border-gold/40 bg-mist/50 p-6 font-mono text-xs leading-relaxed text-warm">
            {c.footnote}
          </p>
        </div>
      </main>
    </PageShell>
  );
}
