import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface InkPatternProps {
  /** 0–8 segments revealed */
  segmentsFilled: number;
  className?: string;
}

/** Ink-brush strokes that complete as deposits arrive (hero metaphor). */
export function InkPattern({ segmentsFilled, className = '' }: InkPatternProps) {
  const reduceMotion = useReducedMotion();
  const n = Math.min(8, Math.max(0, segmentsFilled));

  const strokes = [
    'M16 88 Q44 52 72 64',
    'M72 64 Q96 40 120 56',
    'M28 104 Q52 76 80 92',
    'M80 92 Q104 72 128 88',
    'M40 120 Q64 100 92 116',
    'M20 68 Q48 44 68 48',
    'M52 36 Q84 24 108 40',
    'M96 116 Q72 100 56 124'
  ];

  return (
    <svg viewBox="0 0 144 144" className={cn('h-40 w-40 md:h-48 md:w-48', className)} aria-hidden>
      {strokes.map((d, i) => {
        const visible = i < n;
        return (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#111629"
            strokeWidth={2.2}
            strokeLinecap="round"
            opacity={visible ? 0.58 : 0.08}
            initial={false}
            animate={{
              pathLength: visible ? 1 : 0.15,
              opacity: visible ? 0.58 : 0.08
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: reduceMotion ? 0 : i * 0.04
            }}
          />
        );
      })}
    </svg>
  );
}
