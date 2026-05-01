import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MarketingNav } from '@/components/marketing/Nav';
import { Footer } from '@/components/marketing/Footer';
import { useI18n } from '@/i18n/LocaleProvider';

export function InfoRichLayout({
  eyebrow,
  title,
  lead,
  children
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <MarketingNav />
      <main className="min-h-[50vh] overflow-x-hidden pb-24">
        <div className="border-b border-warm/15 bg-gradient-to-br from-mist/65 via-paper to-[#ceb996]">
          <div className="page-container py-10 sm:py-14">
            <Link
              to="/"
              className="focus-ring mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm hover:text-sumi"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {t('lessonPage.breadcrumbHome')}
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-warm">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2rem,3.2vw+1rem,3.25rem)] leading-tight tracking-tight text-sumi">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl font-ui text-lg leading-relaxed text-warm">{lead}</p>
          </div>
        </div>
        <div className="page-container py-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}
