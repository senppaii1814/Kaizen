import { Check } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { useI18n } from '@/i18n/LocaleProvider';
import { getSecurity } from '@/content/infoPages';

export default function SecurityPage() {
  const { locale, m } = useI18n();
  const c = getSecurity(locale);

  return (
    <PageShell showBackLink eyebrow={c.eyebrow} title={c.title} subtitleJa={m.shellSubtitleJa.security} lead={c.lead}>
      <main className="overflow-x-hidden pb-24">
        <div className="page-container py-12">
          <div className="rounded-3xl border border-warm/20 bg-night p-8 shadow-inner sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-warm">{c.checklistIntro}</p>
            <ul className="mt-8 space-y-4">
              {c.checklist.map(item => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-primary">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-sm leading-relaxed text-primary">{item}</p>
                </li>
              ))}
            </ul>
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

          <p className="mt-14 rounded-2xl bg-mist/60 px-6 py-5 font-ui text-sm leading-relaxed text-warm">{c.closing}</p>
        </div>
      </main>
    </PageShell>
  );
}
