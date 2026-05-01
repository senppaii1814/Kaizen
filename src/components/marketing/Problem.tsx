import { useI18n } from '@/i18n/LocaleProvider';

export function Problem() {
  const { t, m } = useI18n();
  const cards = m.problem.cards;

  return (
    <section id="problem" className="page-section border-y border-warm/[0.09] bg-mist/70">
      <div className="page-container grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
        <div className="min-w-0">
          <p className="section-label">{t('problem.eyebrow')}</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.12] tracking-tight text-sumi sm:text-4xl lg:text-[2.5rem]">
            {t('problem.title')}
          </h2>
          <p className="mt-5 max-w-md font-jp-sawarabi-m text-sm leading-relaxed text-warm">{t('problem.lead')}</p>
        </div>

        <ul className="grid min-w-0 gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <li
              key={c.title}
              className="group relative flex flex-col gap-3 rounded-2xl border border-warm/20 bg-paper p-6 transition duration-kaizen ease-kaizen hover:-translate-y-0.5 hover:border-warm/40 hover:shadow-md"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] text-oxide">0{i + 1}</span>
              <h3 className="font-display text-lg italic text-sumi">{c.title}</h3>
              <p className="break-words font-jp-kosugi text-sm leading-relaxed text-warm">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
