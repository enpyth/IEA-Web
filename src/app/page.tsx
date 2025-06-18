import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import CompanyIntro from '@/components/home/CompanyIntro';
import ChairmanMessage from '@/components/home/ChairmanMessage';
import PlatformsGrid from '@/components/home/PlatformsGrid';
import LatestNews from '@/components/home/LatestNews';

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroBanner />
      <CompanyIntro />
      <ChairmanMessage />
      <PlatformsGrid />
      <LatestNews />
      <Footer />
    </div>
  );
}
