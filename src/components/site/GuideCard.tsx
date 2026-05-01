import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GuideDoc } from '@/content/guides';
import { useI18n } from '@/i18n/LocaleProvider';

type Props = { guide: GuideDoc; className?: string };

export function GuideCard({ guide, className }: Props) {
  const { m } = useI18n();
  const lb = m.site.guideLabels;
  const n = guide.steps.length;

  return (
    <article
      className={cn(
        'flex min-w-0 flex-col overflow-hidden rounded-2xl border border-warm/25 bg-night shadow-[0_20px_55px_-40px_rgba(0,0,0,0.75)] transition duration-kaizen ease-kaizen hover:border-gold/35 hover:shadow-xl',
        className
      )}
    >
      <Link to={`/guides/${guide.slug}`} className="focus-ring group flex flex-1 flex-col outline-none [&:focus-visible]:z-[1]">
        <div className="flex flex-wrap items-center gap-2 border-b border-warm/15 bg-gradient-to-br from-black via-night to-mist px-5 py-3">
          <span className="rounded-full bg-gold/25 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-black">
            {lb.free}
          </span>
          {guide.isNew ? (
            <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-black">
              {lb.new}
            </span>
          ) : null}
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm">{guide.category}</span>
          <span className="rounded-md border border-warm/25 px-2 py-0.5 font-mono text-[10px] text-warm">
            {guide.level === 'beginner' ? lb.beginner : lb.intermediate}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl italic leading-snug tracking-tight text-primary group-hover:text-paper">{guide.title}</h3>
            <span className="flex shrink-0 items-center gap-1 rounded-md bg-mist px-2 py-1 font-mono text-[11px] text-primary" aria-hidden>
              <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden />
              {guide.rating}
            </span>
          </div>
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-warm">{guide.deck}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm">
            <span>{n}&nbsp;</span>
            <span>{lb.stepsWord}</span>
            <span className="text-warm/50"> · </span>
            <span>
              {guide.durationMin}&nbsp;{lb.minWord}
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
