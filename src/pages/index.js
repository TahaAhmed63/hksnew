"use client";
import React from 'react';
import dynamic from 'next/dynamic';

import HomeBanner from './../Components/Home/HomeBanner';
import BriefProfile from './../Components/Home/BreifProfile';
import BlendingPlant from '../Components/Home/BlendingPlant';
import ExploreSolution from './../Components/Home/ExploreSolution';
import HomeVideoSec from './../Components/Home/HomeVideoSec';
import SVGComponent from './../Components/Svgmapping/SVGComponent';
//hdsfs
// Dynamic import for client-only rendering
const Product = dynamic(() => import('./../Components/Products/Product'), {
  ssr: false,
});



export default function Home() {
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
  )}
