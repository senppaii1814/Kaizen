import { PageShell } from '@/components/site/PageShell';
import { useI18n } from '@/i18n/LocaleProvider';
import { getNetwork } from '@/content/infoPages';

export default function NetworkPage() {
  const { locale, m } = useI18n();
  const c = getNetwork(locale);

  return (
    <PageShell showBackLink eyebrow={c.eyebrow} title={c.title} subtitleJa={m.shellSubtitleJa.network} lead={c.lead}>
      <main className="overflow-x-hidden pb-24">
        <div className="page-container py-12">
          <ul className="grid gap-6 sm:grid-cols-2">
            {c.cards.map((card, i) => (
              <li
                key={card.title}
                className="rounded-2xl border border-warm/20 bg-gradient-to-br from-night via-night to-mist/80 p-7 shadow-sm transition hover:border-gold/25"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-warm">{String(i + 1).padStart(2, '0')} · </span>
                <h2 className="mt-3 font-display text-xl italic text-primary">{card.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-warm">{card.body}</p>
              </li>
            ))}
          </ul>

          <aside className="mt-14 rounded-2xl border border-dashed border-primary/30 bg-mist/70 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">{c.footnote}</p>
          </aside>
        </div>
      </main>
    </PageShell>
  );
}
