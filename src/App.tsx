import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from '@/pages/About';
import EconomicsPage from '@/pages/EconomicsPage';
import FAQPage from '@/pages/FAQPage';
import GuideLesson from '@/pages/GuideLesson';
import GuidesIndex from '@/pages/GuidesIndex';
import GlossaryPage from '@/pages/GlossaryPage';
import NetworkPage from '@/pages/NetworkPage';
import NotFound from '@/pages/NotFound';
import PrismaHome from '@/pages/PrismaHome';
import ProgressPage from '@/pages/ProgressPage';
import SecurityPage from '@/pages/SecurityPage';
import UpdatesPage from '@/pages/UpdatesPage';

function RouteResetScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <RouteResetScroll />
      <Routes>
        <Route path="/" element={<PrismaHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guides" element={<GuidesIndex />} />
        <Route path="/guides/:slug" element={<GuideLesson />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/economics" element={<EconomicsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
