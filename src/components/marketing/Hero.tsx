import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import CountUp from '../reactbits/CountUp';
import { CeramicVessel } from '@/components/brand/CeramicVessel';
import { InkPattern } from '@/components/brand/InkPattern';
import { useI18n } from '@/i18n/LocaleProvider';

const DEMO_TARGET = 18420;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { t, locale, m } = useI18n();
  const [progress, setProgress] = useState(0.58);
  const [segments, setSegments] = useState(4);
  const stats = m.hero.stats;

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setProgress(p => (p + 0.017 > 0.96 ? 0.48 : p + 0.017));
      setSegments(s => (s >= 8 ? 3 : s + 1));
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const balance = useMemo(() => Math.round(progress * DEMO_TARGET), [progress]);

  return (
    <section className="relative overflow-hidden border-b border-warm/15 bg-paper/40">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.55]" aria-hidden />

      <div className="page-container relative grid min-w-0 gap-12 pt-20 pb-16 sm:gap-14 sm:pb-20 lg:pt-28 lg:pb-24 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-start xl:gap-16 xl:pb-28">
        <div className="relative min-w-0 xl:pt-2">
          <p className="section-label flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-warm/50 to-transparent" aria-hidden />
            {t('hero.eyebrow')}
          </p>

          <h1 className="drop-ink mt-10 max-w-full text-balance break-words font-display text-[clamp(2rem,4.8vw+0.85rem,4rem)] leading-[1.02] tracking-tight text-sumi">
            <span className="block">{t('hero.title')}</span>
            <span className="mt-3 block italic text-sumi/92">
              <span className="text-oxide">{t('hero.titleEmphasis').split(',')[0]?.trim()}</span>
              {t('hero.titleEmphasis').includes(',') && (
                <>, {t('hero.titleEmphasis').split(',').slice(1).join(',').trim()}</>
              )}
            </span>
          </h1>

          <p
            className={`mt-8 text-lg leading-snug text-warm sm:text-xl ${
              locale === 'ja' ? 'font-jp-kaisei' : 'font-jp-shippori'
            }`}
          >
            {t('hero.subtitle')}
          </p>

          <p className="mt-6 max-w-2xl font-ui text-[1.05rem] leading-relaxed text-warm sm:text-lg">{t('hero.lead')}</p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <a
              href="#waitlist"
              className="focus-ring group inline-flex items-center justify-center gap-3 rounded-full bg-oxide px-8 py-3.5 font-ui text-sm font-medium text-paper transition duration-kaizen ease-kaizen hover:brightness-95"
            >
              {t('hero.cta')}
              <ArrowDown className="h-4 w-4 transition-transform duration-kaizen group-hover:translate-y-0.5" aria-hidden />
            </a>
            <a
              href="#how"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full border-2 border-sumi/75 bg-transparent px-8 py-[0.8125rem] font-ui text-sm font-medium text-sumi transition duration-kaizen ease-kaizen hover:border-oxide hover:text-oxide"
            >
              {t('hero.secondaryCta')}
              <ArrowRight className="h-4 w-4 transition-transform duration-kaizen ease-kaizen group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>

          <p className="mt-8 max-w-md font-mono text-[11px] leading-relaxed tracking-wide text-sumi/85">{t('hero.inlineNote')}</p>

          <dl className="mt-12 grid min-w-0 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-warm/20 bg-warm/[0.08] md:grid-cols-4">
            {stats.map(s => (
              <div key={s.label} className="card-paper min-w-0 bg-paper px-5 py-4 sm:px-6 sm:py-5">
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-warm">{s.label}</dt>
                <dd className="mt-2 font-display text-lg italic leading-snug tracking-tight text-sumi md:text-xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          className="relative min-w-0"
        >
          <div className="card-paper relative rounded-2xl border border-warm/25 bg-paper/92 p-6 shadow-lg shadow-sumi/[0.06] backdrop-blur-sm sm:rounded-[1.65rem] sm:p-8">
            <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-warm sm:flex-row sm:items-center sm:justify-between">
              <span className="min-w-0 truncate">{t('hero.demoLabel')}</span>
              <span className="flex shrink-0 items-center gap-2 font-mono text-[11px] text-gold">
                  <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                live
              </span>
            </div>

            <div className="mt-6 flex w-full min-w-0 flex-row flex-wrap items-center justify-center gap-x-8 gap-y-6">
              <InkPattern segmentsFilled={segments} className="h-36 w-36 shrink-0 sm:h-40 sm:w-40 md:h-44 md:w-44" />
              <div className="flex shrink-0 flex-col items-center gap-3">
                <CeramicVessel progress={progress} milestonePulse={progress >= 0.94} className="[&_svg]:h-32 [&_svg]:w-32 sm:[&_svg]:h-36 sm:[&_svg]:w-36 md:[&_svg]:h-44 md:[&_svg]:w-44" />
              </div>
            </div>

            <dl className="mt-10 grid min-w-0 grid-cols-2 gap-6 border-t border-warm/15 pt-8 sm:gap-8">
              <div className="min-w-0">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-warm">{t('hero.demoBalance')}</dt>
                <dd className="mt-1 truncate font-display text-xl tabular-nums tracking-tight text-sumi sm:text-2xl">
                  $<CountUp
                    to={balance}
                    duration={reduceMotion ? 0 : 1.1}
                    separator=","
                    locale={locale === 'ja' ? 'ja-JP' : 'en-US'}
                  />
                </dd>
              </div>
              <div className="min-w-0 text-right">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-warm">{t('hero.demoTarget')}</dt>
                <dd className="mt-1 truncate font-display text-xl tabular-nums tracking-tight text-sumi sm:text-2xl">
                  $<CountUp
                    to={DEMO_TARGET}
                    duration={reduceMotion ? 0 : 1}
                    separator=","
                    locale={locale === 'ja' ? 'ja-JP' : 'en-US'}
                  />
                </dd>
              </div>
            </dl>
            <div
              className="pointer-events-none absolute bottom-3 right-3 font-jp-yuji text-5xl leading-none text-warm/[0.08] select-none sm:bottom-4 sm:right-4 sm:text-6xl"
              aria-hidden
            >
              輪
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
