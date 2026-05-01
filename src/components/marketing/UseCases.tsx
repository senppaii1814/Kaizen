import { useI18n } from '@/i18n/LocaleProvider';

export function UseCases() {
  const { t, m } = useI18n();
  const items = m.useCases.items;

  return (
    <section id="use-cases" className="page-section border-b border-warm/15 bg-[#cfbb9a]">
      <div className="page-container">
        <header className="flex max-w-2xl flex-col gap-4 lg:max-w-3xl">
          <p className="section-label">{t('useCases.eyebrow')}</p>
          <h2 className="font-display text-3xl leading-[1.1] tracking-tight text-sumi sm:text-4xl">{t('useCases.title')}</h2>
          <p className="font-jp-sawarabi-m text-base leading-relaxed text-warm sm:text-lg">{t('useCases.lead')}</p>
        </header>

        <ul className="mt-14 grid min-w-0 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map(item => (
            <li
              key={item.segment}
              className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-warm/20 bg-paper shadow-[0_22px_50px_-32px_rgba(17,22,41,0.45)] transition duration-kaizen ease-kaizen hover:border-warm/40 hover:shadow-xl"
            >
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gold/[0.14] via-mist to-paper">
                <div className="absolute inset-0 opacity-[0.35] grain" aria-hidden />
                <div className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-warm">{t('useCases.cardBadge')}</div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-oxide">{item.segment}</p>
                <h3 className="font-display text-xl italic tracking-tight text-sumi">{item.label}</h3>
                <p className="break-words font-jp-zen-maru text-sm leading-relaxed text-warm">{item.example}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
