"use client";
import React from 'react';
import dynamic from 'next/dynamic';

import HomeBanner from '@/Components/Home/HomeBanner';
import BriefProfile from '@/Components/Home/BreifProfile';
import BlendingPlant from '@/Components/Home/BlendingPlant';
import ExploreSolution from '@/Components/Home/ExploreSolution';
import HomeVideoSec from '@/Components/Home/HomeVideoSec';
import SVGComponent from '@/Components/Svgmapping/SVGComponent';

// Dynamic import for client-only rendering
const Product = dynamic(() => import('@/Components/Products/Product'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <BriefProfile />
      <BlendingPlant />
      <Product />
      <ExploreSolution />
      <HomeVideoSec />
      <SVGComponent />
    </>
  );
};

export default HomePage;
