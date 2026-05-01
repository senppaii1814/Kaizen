import { useReducedMotion } from 'framer-motion';
import { useI18n } from '@/i18n/LocaleProvider';

/** Full-bleed marquee — inspired by curated landings; respects reduced motion. */
export function MarqueeBand() {
  const reduceMotion = useReducedMotion();
  const { m } = useI18n();
  const items = m.marquee.items;
  const doubled = [...items, ...items];

  if (reduceMotion) {
    return (
      <div className="border-y border-paper/[0.08] bg-gradient-to-r from-night via-sumi to-night py-4 text-paper">
        <p className="page-container max-w-reading text-center font-mono text-[10px] leading-relaxed tracking-wide text-paper/70 sm:text-[11px]">
          {items.map((line, i) => (
            <span key={line + String(i)}>
              {i > 0 && <span className="text-paper/30"> · </span>}
              {line}
            </span>
          ))}
        </p>
      </div>
    );
  }

  return (
    <div className="border-y border-paper/[0.08] bg-gradient-to-r from-night via-sumi to-night py-3">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {doubled.map((line, i) => (
            <span
              key={`${line}-${i}`}
              className="flex shrink-0 items-center whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-paper/75 sm:text-[11px] sm:tracking-[0.22em]"
            >
              <span className="px-6">{line}</span>
              <span className="select-none text-paper/25 sm:px-2" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
