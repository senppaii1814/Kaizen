import { useI18n } from '@/i18n/LocaleProvider';

export function HowItWorks() {
  const { t, m } = useI18n();
  const steps = m.how.steps;

  return (
    <section id="how" className="page-section border-b border-warm/15 bg-gradient-to-b from-sumi via-night to-[#1a1714] text-paper">
      <div className="page-container">
        <header className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="section-label-on-dark mx-auto lg:mx-0">{t('how.eyebrow')}</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.65rem]">{t('how.title')}</h2>
          <p className="mt-6 mx-auto max-w-2xl font-jp-sawarabi-g text-sm leading-relaxed text-paper/78 lg:mx-0 lg:max-w-3xl">{t('how.lead')}</p>
        </header>

        <ol className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {steps.map(step => (
            <li
              key={step.n}
              className="group relative rounded-2xl border border-paper/20 bg-sumi/35 px-7 py-8 shadow-[inset_0_1px_0_0_rgba(244,234,216,0.08)] transition duration-kaizen ease-kaizen hover:border-paper/35 hover:bg-sumi/45"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/45">{step.n}</span>
              <h3 className="mt-6 font-display text-xl italic leading-snug">{step.title}</h3>
              <p className="mt-4 font-jp-kosugi text-[0.935rem] leading-relaxed text-paper/[0.74]">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 mx-auto max-w-2xl text-center font-jp-yuji text-[1rem] leading-relaxed text-paper/[0.72] lg:mx-0 lg:text-left sm:text-[1.1rem]">
          {t('how.closing')}
        </p>
      </div>
    </section>
  );
}
