import { useEffect, useState } from 'react';
import LightPillar from '@/components/ui/LightPillar';

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/** Fixed WebGL pillar behind all routes — Mujin Modern palette, calm motion. */
export default function SiteBackdrop() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 min-h-dvh bg-gradient-to-b from-[#cdbb9d] via-paper to-[#bca57f]"
        aria-hidden
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 min-h-dvh w-full" aria-hidden>
      <LightPillar
        topColor="#5c6e54"
        bottomColor="#c6b089"
        intensity={0.32}
        rotationSpeed={0.07}
        glowAmount={0.0036}
        pillarWidth={3.2}
        pillarHeight={0.35}
        noiseIntensity={0.22}
        pillarRotation={10}
        interactive={false}
        mixBlendMode="soft-light"
        quality="medium"
      />
    </div>
  );
}
