import { MarketingNav } from '@/components/marketing/Nav';
import { BelajarHome } from '@/components/site/BelajarHome';
import { Footer } from '@/components/marketing/Footer';

export default function Landing() {
  return (
    <>
      <MarketingNav />
      <main className="overflow-x-hidden">
        <BelajarHome />
      </main>
      <Footer />
    </>
  );
}
