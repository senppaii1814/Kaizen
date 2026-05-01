import { PageShell } from '@/components/site/PageShell';
import { useI18n } from '@/i18n/LocaleProvider';
import { getFAQ } from '@/content/infoPages';

export default function FAQPage() {
  const { locale, m } = useI18n();
  const c = getFAQ(locale);

  return (
    <PageShell showBackLink eyebrow={c.eyebrow} title={c.title} subtitleJa={m.shellSubtitleJa.faq} lead={c.lead}>
      <main className="overflow-x-hidden pb-24">
        <div className="page-container space-y-4 py-12">
          {c.items.map(item => (
            <details
              key={item.q}
              className="group rounded-2xl border border-warm/20 bg-night p-6 shadow-sm open:border-gold/35 open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-display text-lg italic text-primary [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="shrink-0 font-mono text-xs text-gold transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-5 border-t border-warm/15 pt-5 text-sm leading-relaxed text-warm">{item.a}</p>
            </details>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
