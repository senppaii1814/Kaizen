import { useI18n } from '@/i18n/LocaleProvider';

export function Principles() {
  const { t, m } = useI18n();
  const items = m.principles.items;

  return (
    <section id="principles" className="page-section border-b border-warm/15">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="section-label">{t('principles.eyebrow')}</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.1] tracking-tight text-sumi sm:text-4xl">{t('principles.title')}</h2>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.kanji}
              className="card-paper flex min-w-0 h-full flex-col gap-6 rounded-3xl border border-warm/15 bg-paper p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <span className="font-jp-yuji text-6xl leading-none text-sumi" aria-hidden>
                  {item.kanji}
                </span>
                <span className="font-mono text-[11px] tracking-wide text-warm">0{i + 1}</span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-oxide">{item.romaji}</p>
                <h3 className="mt-2 font-display text-xl text-sumi">{item.title}</h3>
                <p className="mt-3 break-words font-jp-kosugi text-sm leading-relaxed text-warm">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
