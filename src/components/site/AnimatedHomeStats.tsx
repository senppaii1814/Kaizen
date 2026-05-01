import { motion } from 'framer-motion';
import CountUp from '@/components/reactbits/CountUp';
import { useI18n } from '@/i18n/LocaleProvider';

/** In-view spring counts for the home metrics band — illustrative demo numbers only. */
export function AnimatedHomeStats() {
  const { m, locale } = useI18n();
  const { liveStatsEyebrow, liveStats } = m.site;
  const nfLocale = locale === 'ja' ? 'ja-JP' : 'en-US';

  return (
    <section className="border-b border-warm/15 bg-mist/45 py-12 sm:py-14">
      <div className="page-container">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-warm">{liveStatsEyebrow}</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-warm/20 bg-warm/15 sm:grid-cols-2 lg:grid-cols-4">
          {liveStats.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="flex flex-col justify-center gap-3 bg-paper px-8 py-8"
            >
              <span className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] italic leading-none tracking-tight text-sumi">
                <span className="tabular-nums">
                  {row.prefix ? <span className="mr-0.5 opacity-80">{row.prefix}</span> : null}
                  <CountUp
                    to={row.n}
                    duration={1.8}
                    separator=","
                    locale={nfLocale}
                    className="inline"
                  />
                  {row.suffix ? <span className="ml-0.5 opacity-85">{row.suffix}</span> : null}
                </span>
              </span>
              <span className="font-mono text-[11px] uppercase leading-snug tracking-[0.14em] text-warm">{row.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
