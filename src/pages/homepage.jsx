import React from 'react';
import Home from '../Components/Home/home-banner.jsx';
import BriefProfile from '../Components/Home/brief_profile.jsx';
import Blendingplant from '@/Components/Home/blendingplant.jsx';
import Product from '@/Components/Products/product.jsx';
import Explore_solution_sec from '@/Components/Home/explore_solution_sec.jsx';
import HomeVideoSec from '@/Components/Home/homevideo_Sec.jsx';
import HomeMaplic from '@/Components/Home/homemaplic.jsx';



const Homepage = () => {
  return (
    <>
      <Home />
      <BriefProfile />
      <Blendingplant/>
      <Product/>
      <Explore_solution_sec/>
      <HomeVideoSec/>
      <HomeMaplic/>

      </>
   
  );
}

export default Homepage;
