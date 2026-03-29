'use client';

import dynamic from 'next/dynamic';

const HeroParticles = dynamic(() => import('@/components/HeroParticles'), { ssr: false });

export default function HeroParticlesWrapper() {
  return <HeroParticles />;
}
