import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useI18n } from '@/i18n/LocaleProvider';
import { GuideCard } from '@/components/site/GuideCard';
import { Waitlist } from '@/components/marketing/Waitlist';
import { MarqueeBand } from '@/components/marketing/MarqueeBand';
import { AnimatedHomeStats } from '@/components/site/AnimatedHomeStats';
import { LiveActivityStrip } from '@/components/site/LiveActivityStrip';
import { FEATURED_GUIDE_SLUGS, NEXT_GUIDE_SLUGS, getGuide } from '@/content/guides';

export function BelajarHome() {
  const { t, m, locale } = useI18n();
  const s = m.site;

  const featured = FEATURED_GUIDE_SLUGS.map(gslug => getGuide(gslug, locale)).filter(Boolean);
  const secondary = NEXT_GUIDE_SLUGS.map(gslug => getGuide(gslug, locale)).filter(Boolean);

  return (
    <>
      <section className="relative overflow-hidden border-b border-warm/15 bg-gradient-to-b from-paper via-[#d8c7ab] to-mist/40">
        <div className="pointer-events-none absolute inset-0 grain opacity-55" aria-hidden />
        <div className="page-container relative py-20 sm:py-24 lg:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-warm/20 bg-paper/85 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-warm">
            {s.badge}
          </p>
          <h1 className="drop-ink mt-8 max-w-4xl font-display text-[clamp(2.1rem,4.5vw+0.6rem,3.5rem)] leading-[1.05] tracking-tight text-sumi">
            <span className="block">{s.heroLine1}</span>
            <span className="mt-4 block text-xl italic text-sumi/90 sm:text-2xl">{s.heroAccent}</span>
          </h1>
          <p className="mt-8 max-w-2xl font-ui text-lg leading-relaxed text-warm sm:text-xl">{s.heroLead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/#waitlist"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-oxide px-8 py-3.5 font-ui text-sm font-medium text-paper transition duration-kaizen ease-kaizen hover:brightness-95"
            >
              {s.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/guides"
              className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-oxide/45 px-8 py-3 font-ui text-sm font-medium text-oxide transition hover:border-oxide hover:bg-oxide/10"
            >
              <BookOpen className="h-4 w-4" aria-hidden />
              {s.finalSecondaryCta}
            </Link>
          </div>
          <p className="mt-6 max-w-xl font-mono text-[11px] leading-relaxed text-sumi/85">{s.primaryCtaFoot}</p>
          <ul className="mt-14 flex flex-wrap gap-3">
            {s.chips.map(label => (
              <li key={label} className="rounded-xl border border-warm/25 bg-paper px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-warm shadow-sm">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MarqueeBand />

      <section className="border-b border-warm/15 bg-paper/90 py-10 sm:py-12">
        <div className="page-container">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-warm">{s.metricsLabel}</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-warm/20 bg-warm/15 sm:grid-cols-2 lg:grid-cols-4">
            {s.metrics.map(row => (
              <div key={row.label} className="flex flex-col justify-center gap-3 bg-paper px-8 py-7">
                <span className="font-display text-4xl italic tracking-tight text-sumi sm:text-5xl">{row.value}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm">{row.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedHomeStats />
      <LiveActivityStrip />

      <aside className="border-b border-oxide/20 bg-sumi/[0.04] px-6 py-6 sm:px-8 lg:py-8">
        <p className="page-container mx-auto max-w-reading text-center font-jp-kosugi text-sm leading-relaxed text-sumi">{s.dyor}</p>
      </aside>

      <section className="border-b border-warm/15 bg-[#d2bf9f] py-16 sm:py-20 lg:py-24">
        <div className="page-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-warm">{s.featuredLabel}</p>
              <h2 className="font-display text-3xl tracking-tight text-sumi sm:text-4xl">{s.featuredTitle}</h2>
              <p className="font-ui text-[1.05rem] leading-relaxed text-warm">{s.featuredLead}</p>
            </div>
            <Link
              to="/guides"
              className="focus-ring shrink-0 font-mono text-sm font-medium uppercase tracking-wide text-sumi underline decoration-warm/50 underline-offset-4 hover:text-oxide hover:decoration-oxide"
            >
              {s.viewAll}
            </Link>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {featured.map(g => (g ? <GuideCard key={g.slug} guide={g} /> : null))}
          </div>
        </div>
      </section>

      <section className="page-section border-b border-warm/15 bg-paper">
        <div className="page-container">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-warm">{s.secondaryLabel}</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-sumi sm:text-4xl">{s.secondaryTitle}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-warm">{s.secondaryLead}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {secondary.map(g => (g ? <GuideCard key={g.slug} guide={g} /> : null))}
          </div>
        </div>
      </section>

      <section className="page-section border-b border-warm/15 bg-mist/55">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-warm">{s.whyLabel}</p>
            <h2 className="mt-6 font-display text-3xl tracking-tight text-sumi sm:text-4xl">{s.whyTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-warm">{s.whyLead}</p>
          </div>
          <ul className="grid gap-6">
            {s.whyBullets.map(item => (
              <li key={item.title} className="rounded-2xl border border-warm/20 bg-paper p-8 shadow-md">
                <h3 className="font-display text-xl italic text-sumi">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-warm">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section border-b border-warm/15">
        <div className="page-container">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-warm">{s.toolkitLabel}</p>
          <h2 className="mt-6 font-display text-3xl tracking-tight text-sumi sm:text-4xl">{s.toolkitTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-warm">{s.toolkitLead}</p>
          {/* Vertical “ritual” stack — brand spec avoids generic multi-column feature grids */}
          <ul className="mt-12 max-w-3xl divide-y divide-warm/15 rounded-2xl border border-warm/20 bg-paper shadow-sm">
            {s.toolkitCards.map(card => (
              <li key={card.href}>
                <Link
                  to={card.href}
                  className="focus-ring flex flex-col gap-3 px-6 py-6 transition-colors duration-300 ease-out hover:bg-mist/50 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-8 sm:py-7"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl italic text-sumi">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-warm">{card.body}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 font-ui text-xs font-semibold text-oxide">
                    {t(`nav.${card.ctaNavKey}`)}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-warm/15 bg-gradient-to-br from-sumi/[0.92] via-night to-[#1a1714] px-6 py-20 text-paper sm:px-8">
        <div className="page-container flex flex-col items-start gap-6 text-left">
          <h2 className="max-w-3xl font-display text-4xl italic leading-tight sm:text-[2.75rem]">{s.finalTitle}</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-paper/80">{s.finalLead}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/#waitlist"
              className="focus-ring rounded-full bg-oxide px-8 py-3.5 font-ui text-sm font-semibold text-paper transition hover:brightness-95"
            >
              {s.primaryCta}
            </Link>
            <Link
              to="/guides"
              className="focus-ring rounded-full border border-paper/25 px-8 py-3.5 font-ui text-sm text-paper hover:border-paper/60"
            >
              {s.finalSecondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <Waitlist />
    </>
  );
}
