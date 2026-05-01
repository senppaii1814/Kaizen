import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { useI18n } from '@/i18n/LocaleProvider';

const INTERVAL_MS = 4200;

/** Rotating “synthetic steward” lines — vibes only, not live backend data. */
export function LiveActivityStrip() {
  const { m } = useI18n();
  const reduceMotion = useReducedMotion();
  const { liveActivityTitle, liveActivityLines } = m.site;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!liveActivityLines.length || reduceMotion) return;
    const id = window.setInterval(() => {
      setIdx(i => (i + 1) % liveActivityLines.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [liveActivityLines.length, reduceMotion]);

  if (!liveActivityLines.length) return null;

  if (reduceMotion) {
    return (
      <section className="border-b border-warm/15 bg-[#cfbb9a] py-8" aria-label={liveActivityTitle}>
        <div className="page-container space-y-4">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-warm">
            <Activity className="h-4 w-4 text-oxide" aria-hidden />
            {liveActivityTitle}
          </p>
          <ul className="space-y-2 font-mono text-[11px] leading-relaxed text-sumi/90 sm:text-[12px]">
            {liveActivityLines.map(line => (
              <li key={line} className="border-l-2 border-gold/40 pl-4">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const line = liveActivityLines[idx] ?? liveActivityLines[0];

  return (
    <section className="border-b border-warm/15 bg-[#cfbb9a] py-8 sm:py-9" aria-live="polite" aria-label={liveActivityTitle}>
      <div className="page-container flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <p className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-warm">
          <motion.span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-oxide"
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          >
            <Activity className="h-4 w-4" />
          </motion.span>
          {liveActivityTitle}
        </p>
        <div className="min-h-[3.25rem] flex-1 overflow-hidden rounded-xl border border-warm/15 bg-paper/80 px-4 py-3 shadow-sm sm:px-6 sm:py-3.5">
          <AnimatePresence mode="wait">
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[11px] leading-relaxed text-sumi sm:text-[12px]"
            >
              {line}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
