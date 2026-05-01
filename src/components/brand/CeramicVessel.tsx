import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface CeramicVesselProps {
  /** 0–1 fill level */
  progress: number;
  className?: string;
  /** Pulse ochre shimmer once when progress crosses ~1 */
  milestonePulse?: boolean;
}

/** Ceramic bowl treasury metaphor — fill rises calmly (no bar chart). */
export function CeramicVessel({ progress, className = '', milestonePulse }: CeramicVesselProps) {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, '');
  const clipId = `kv-clip-${uid}`;
  const gradId = `kv-fill-${uid}`;
  const p = Math.min(1, Math.max(0, progress));
  const innerBottom = 118;
  const innerTop = 48;
  const innerH = innerBottom - innerTop;
  const fillHeight = Math.max(1, p * innerH);
  const fillTop = innerBottom - fillHeight;

  return (
    <div className={`relative inline-flex ${className}`} aria-hidden>
      <svg viewBox="0 0 140 140" className="h-36 w-36 md:h-44 md:w-44">
        <defs>
          <clipPath id={clipId}>
            <path d="M34 48 C34 48 28 52 28 66 L28 94 C28 108 46 122 70 122 C94 122 112 108 112 94 L112 66 C112 52 106 48 106 48 C92 44 48 44 34 48 Z" />
          </clipPath>
          <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#4A6741" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#3d5636" stopOpacity="0.78" />
          </linearGradient>
        </defs>
        <ellipse cx="70" cy="46" rx="40" ry="8" fill="none" stroke="#7B7065" strokeWidth="1.2" opacity={0.45} />
        <path
          d="M30 48 C30 48 24 54 24 68 L24 94 C24 112 44 128 70 128 C96 128 116 112 116 94 L116 68 C116 54 110 48 110 48"
          fill="none"
          stroke="#1f1c18"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g clipPath={`url(#${clipId})`}>
          <motion.rect
            x="28"
            width="84"
            fill={`url(#${gradId})`}
            initial={false}
            animate={{
              y: fillTop,
              height: fillHeight
            }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.ellipse
            cx="70"
            fill="#F5F0E6"
            opacity={0.22}
            rx="36"
            ry="5"
            initial={false}
            animate={{
              cy: fillTop + 3,
              opacity: p > 0.02 ? 0.25 : 0
            }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </g>
        {milestonePulse && p >= 0.995 && (
          <motion.ellipse
            cx="70"
            cy={fillTop}
            rx="38"
            ry="7"
            fill="none"
            stroke="#C89B4A"
            strokeWidth="1.5"
            initial={{ opacity: 0.35, scaleX: 0.85 }}
            animate={
              reduceMotion
                ? { opacity: 0.5, scaleX: 1 }
                : { opacity: [0.35, 0.85, 0.35], scaleX: [0.85, 1, 0.95] }
            }
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], repeat: reduceMotion ? 0 : 1 }}
          />
        )}
      </svg>
    </div>
  );
}
