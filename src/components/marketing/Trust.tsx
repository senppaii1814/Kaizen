import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { MultisigGlyph } from '../brand/MultisigGlyph';
import { useI18n } from '@/i18n/LocaleProvider';

export function Trust() {
  const reduceMotion = useReducedMotion();
  const { t, m } = useI18n();
  const [signed, setSigned] = useState(1);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setSigned(s => (s >= 3 ? 1 : s + 1));
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const bullets = m.trust.bullets;

  return (
    <section id="trust" className="page-section border-b border-warm/15">
      <div className="page-container grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div className="min-w-0">
          <p className="section-label">{t('trust.eyebrow')}</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.1] tracking-tight text-sumi sm:text-4xl">{t('trust.title')}</h2>
          <p className="mt-5 max-w-lg break-words font-ui leading-relaxed text-warm">{t('trust.lead')}</p>
          <ul className="mt-8 space-y-3 font-jp-sawarabi-g text-sm text-warm">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oxide" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-paper min-w-0 rounded-3xl border border-warm/20 bg-paper p-8">
          <div className="flex min-w-0 flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-warm sm:flex-row sm:items-center sm:justify-between">
            <span className="min-w-0 truncate">{t('trust.demoLabel')}</span>
            <span className="shrink-0 text-oxide">● multisig</span>
          </div>
          <p className="mt-4 font-display text-2xl text-sumi">{t('trust.demoTitle')}</p>
          <p className="mt-1 font-ui text-sm text-warm">{t('trust.demoMeta')}</p>
          <div className="mt-8 rounded-2xl border border-warm/15 bg-mist/60 p-5">
            <MultisigGlyph n={5} m={3} signed={signed} />
          </div>
          <p className="mt-8 border-t border-warm/15 pt-6 font-jp-kosugi text-xs leading-relaxed text-warm">
            {t('trust.demoFoot')}
          </p>
        </div>
      </div>
    </section>
  );
}
