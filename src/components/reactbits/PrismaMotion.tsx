import { useMemo, useRef } from 'react';
import { motion, useInView, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const CARD_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type LandingAboutSegment = { text: string; variant: 'body' | 'jpItalic' | 'enItalic' };
export type LandingFeatureSegment = { text: string; variant: 'primary' | 'muted' };

function segmentClass(variant: LandingAboutSegment['variant']) {
  if (variant === 'jpItalic') return 'font-jp-serif italic';
  if (variant === 'enItalic') return 'font-serif italic';
  return 'font-normal';
}

function featureSegmentClass(variant: LandingFeatureSegment['variant']) {
  if (variant === 'primary') return 'text-primary';
  return 'text-gray-500';
}

/** EN hero word “Kaizen” — superscript * after trailing “a”. */
export function WordsPullUp({
  text,
  className = '',
  showAsteriskEn = false,
  showKaizenJaAsterisk = false
}: {
  text: string;
  className?: string;
  showAsteriskEn?: boolean;
  showKaizenJaAsterisk?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  if (showKaizenJaAsterisk && !text.includes(' ')) {
    const graphemes = Array.from(text);
    const last = graphemes.pop() ?? '';
    const prefix = graphemes.join('');
    return (
      <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="relative inline-block"
        >
          {prefix}
          <span className="relative inline-block">
            {last}
            <span className="absolute -right-[0.35em] top-[0.65em] text-[0.31em]">*</span>
          </span>
        </motion.span>
      </div>
    );
  }

  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        const lastChar = word.slice(-1);
        const start = word.slice(0, -1);
        return (
          <motion.span
            key={`${word}-${index}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
            className="mr-[0.22em] inline-block"
          >
            {showAsteriskEn && isLastWord && lastChar.toLowerCase() === 'a' ? (
              <span className="relative inline-block">
                {start}
                {lastChar}
                <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">*</span>
              </span>
            ) : (
              word
            )}
          </motion.span>
        );
      })}
    </div>
  );
}

export function WordsPullUpMultiStyle({ segments, className = '' }: { segments: { text: string; className: string }[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = segments.flatMap(segment => segment.text.split(' ').map(word => ({ word, className: segment.className })));

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map(({ word, className: wordClass }, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
          className={`mr-[0.22em] inline-block ${wordClass}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function WordsPullUpAboutLanding({ segments, className = '' }: { segments: LandingAboutSegment[]; className?: string }) {
  const flat = useMemo(
    () =>
      segments.flatMap(s =>
        s.text.split(' ').map(word => ({
          word,
          className: segmentClass(s.variant)
        }))
      ),
    [segments]
  );

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {flat.map(({ word, className: wc }, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
          className={`mr-[0.22em] inline-block ${wc}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function WordsPullUpFeaturesLanding({ segments, className = '' }: { segments: LandingFeatureSegment[]; className?: string }) {
  const flat = useMemo(
    () =>
      segments.flatMap(s =>
        s.text.split(' ').map(word => ({
          word,
          className: featureSegmentClass(s.variant)
        }))
      ),
    [segments]
  );

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {flat.map(({ word, className: wc }, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
          className={`mr-[0.22em] inline-block ${wc}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function AnimatedLetter({
  char,
  index,
  total,
  progress
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char === ' ' ? '\u00A0' : char}</motion.span>;
}

export function FeatureCard({
  index,
  title,
  number,
  image,
  items,
  learnMoreLabel
}: {
  index: number;
  title: string;
  number: string;
  image: string;
  items: string[];
  learnMoreLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: CARD_EASE, delay: index * 0.15 }}
      className="flex h-full flex-col rounded-2xl bg-mist p-5 sm:p-6"
    >
      <img src={image} alt="" className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12" />
      <div className="mt-6 flex items-baseline justify-between gap-3">
        <h3 className="text-lg sm:text-xl text-paper">{title}</h3>
        <span className="text-xs text-gray-500">{number}</span>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map(item => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex cursor-default items-center gap-2 pt-8 text-sm text-primary/90">
        {learnMoreLabel}
        <ArrowRight className="h-4 w-4 -rotate-45" />
      </span>
    </motion.article>
  );
}
