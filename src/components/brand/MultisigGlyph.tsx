import { motion } from 'framer-motion';

export interface MultisigGlyphProps {
  n: number;
  m: number;
  signed?: number;
  className?: string;
  label?: string;
}

/** M-of-N multisig explainer — calm dots, no neon. */
export function MultisigGlyph({ n, m, signed = 0, className = '', label }: MultisigGlyphProps) {
  const dots = Array.from({ length: n }, (_, i) => i);
  const activeCount = Math.min(n, Math.max(0, signed));

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${className}`}
      role="img"
      aria-label={label ?? `${activeCount} of ${n} approvers signed; ${m} required`}
    >
      <div className="flex min-w-0 flex-wrap gap-2">
        {dots.map(i => {
          const isSigned = i < activeCount;
          return (
            <motion.span
              key={i}
              className="relative h-3 w-3 rounded-full border"
              initial={false}
              animate={{
                backgroundColor: isSigned ? '#C2553D' : '#F5F0E6',
                borderColor: isSigned ? '#C2553D' : 'rgba(123, 112, 101, 0.45)'
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}
      </div>
      <p className="min-w-0 break-words font-mono text-xs tracking-wide text-warm">
        {m}/{n} · <span className="text-sumi">{activeCount}</span> signed
      </p>
    </div>
  );
}
