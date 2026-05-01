import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiteNav } from '@/components/site/SiteNav';
import { SiteFooter } from '@/components/site/SiteFooter';
import { useI18n } from '@/i18n/LocaleProvider';
import {
  AnimatedLetter,
  CARD_EASE,
  EASE,
  FeatureCard,
  HeroJapanesePullUp,
  WordsPullUp,
  WordsPullUpAboutLanding,
  WordsPullUpFeaturesLanding
} from '@/components/reactbits/PrismaMotion';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';
const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const FEATURE_IMAGES = [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85'
] as const;

export default function PrismaHome() {
  const { locale, m } = useI18n();
  const L = m.site.landing;
  const aboutRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = useMemo(() => Array.from(L.aboutAnimatedParagraph), [L.aboutAnimatedParagraph]);

  return (
    <div className="relative flex min-h-dvh flex-col bg-black text-primary/90">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.08]" aria-hidden />
      <SiteNav />

      <main className="relative flex-1">
        <section className="h-screen p-4 md:p-6">
          <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
            <video className="absolute inset-0 h-full w-full object-cover" src={HERO_VIDEO} autoPlay loop muted playsInline />
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            <div className="absolute top-4 left-4 right-4 z-10 md:top-6 md:left-8 md:right-8">
              <p
                className={
                  locale === 'ja'
                    ? 'font-jp-sans text-[11px] font-medium leading-snug tracking-[0.04em] text-primary/88 sm:text-sm'
                    : 'font-mono text-[10px] uppercase tracking-[0.35em] text-primary/80 sm:text-xs'
                }
              >
                {L.heroEyebrow}
              </p>
            </div>

            <div className="absolute right-0 bottom-0 left-0 z-10 p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-12 items-end gap-6">
                <div className="col-span-12 min-w-0 md:col-span-8">
                  {locale === 'ja' ? (
                    <HeroJapanesePullUp
                      text={L.heroWordJa}
                      className="max-w-full text-[clamp(3.75rem,21vw,13.5rem)] font-semibold leading-[1.02] tracking-tight text-primary"
                    />
                  ) : (
                    <WordsPullUp
                      text="Kaizen"
                      showAsteriskEn
                      className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                    />
                  )}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.5, ease: EASE }}
                    className={`text-xs leading-[1.65] text-primary/72 sm:text-sm md:text-base ${locale === 'ja' ? 'font-jp-sans' : ''}`}
                  >
                    {L.heroLead}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.7, ease: EASE }}
                    className="mt-5"
                  >
                    <Link
                      to="/guides"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                    >
                      {L.heroCta}
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-black px-4 py-16 sm:px-6 md:py-24">
          <div className="relative mx-auto max-w-6xl rounded-2xl bg-night px-6 py-12 text-center sm:px-10 md:py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary sm:text-xs">{L.aboutEyebrow}</p>
            <WordsPullUpAboutLanding
              className="mx-auto mt-6 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
              segments={L.aboutSegments}
            />
            <p
              ref={aboutRef}
              className="relative mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-primary sm:text-sm md:text-base"
            >
              {chars.map((char, idx) => (
                <AnimatedLetter key={`${char}-${idx}`} char={char} index={idx} total={chars.length} progress={scrollYProgress} />
              ))}
            </p>
          </div>
        </section>

        <section className="relative min-h-screen overflow-hidden bg-black px-4 py-16 sm:px-6 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" aria-hidden />
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <WordsPullUpFeaturesLanding className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" segments={L.featuresSegments} />
            </div>

            <div className="mt-10 grid gap-3 sm:gap-2 md:gap-1 md:grid-cols-2 lg:h-[480px] lg:grid-cols-4">
              <motion.article
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: CARD_EASE, delay: 0 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <video className="absolute inset-0 h-full w-full object-cover" src={FEATURE_VIDEO} autoPlay loop muted playsInline />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                <p className="absolute right-4 bottom-4 left-4 text-base text-paper sm:text-lg">{L.featureVideoCaption}</p>
              </motion.article>

              {L.featureCards.map((card, i) => (
                <FeatureCard
                  key={card.title}
                  index={i + 1}
                  title={card.title}
                  number={String(i + 1).padStart(2, '0')}
                  image={FEATURE_IMAGES[i] ?? FEATURE_IMAGES[0]}
                  items={card.items}
                  learnMoreLabel={L.featureLearnMore}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="scroll-mt-28 border-t border-warm/15 bg-night px-4 py-20 sm:px-6">
          <div className="page-container mx-auto max-w-2xl text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-warm">{L.waitlistEyebrow}</p>
            <h2 className="mt-5 font-display text-3xl italic tracking-tight text-primary sm:text-4xl">{L.waitlistTitle}</h2>
            <p className="mt-6 font-ui text-base leading-relaxed text-warm sm:text-lg">{L.waitlistLead}</p>
            <Link
              to="/guides"
              className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              {L.waitlistCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
