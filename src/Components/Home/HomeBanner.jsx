"use-client"

import Link from "next/link";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Bannerone from "../../assets/homepage-images/banner.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
// Import Framer Motion
import { motion } from 'framer-motion';
import { useState } from 'react';



// Define images and corresponding text content
const slides = [
  {
    src: Bannerone,
    alt: "Banner One",
    descriptions1: [
      "Leading Innovation in High-Performance ",
      "Lubricants and Greases."
    ],
    headings: [
      "Expertly Crafted",
      "Lubricants For",
      "Every Need"
    ],
    descriptions2: [
      "HKS GLOBAL PETROLEUM is a pioneer in lubricants ",
      "and grease manufacturing a company registered with SECP",
      "(Securities and Exchange Commission of Pakistan)."
    ]
  }
];

export default function HomeBanner() {
  const [key, setKey] = useState(0);  // State to trigger animation on slide change

  const handleSlideChange = (swiper) => {
    setKey(prevKey => prevKey + 1); // Increment key to force re-animation on slide change
  };

  return (
    <>
      <Swiper
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange} // Trigger on slide change
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-mobile" style={{ background: `url('${slide.src.src}')`,}}> </div>
            <div className="banner-desktop"> <Image src={slide.src} alt={slide.alt} /> </div>

            <div className="container swiper-content">

              {/* Description one Animation */}
                  <motion.p
                    className="pb-md-4 pb-2 m-0 p-0"
                    initial={{ opacity: 0, y: -20 }}  // Start from above and invisible
                    animate={{ opacity: 1, y: 0 }}    // End at normal position and fully visible
                    transition={{ duration: 2 }}      // Slow transition for the entire paragraph
                  >
                    {slide.descriptions1.map((descrip, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: -20 }}   // Each description starts from above and invisible
                        animate={{ opacity: 1, y: 0 }}     // Each description moves to its normal position
                        transition={{
                          duration: 0.8,                   // Slow animation per description
                          delay: i * 0.3,                  // Stagger delay for each description
                        }}
                      >
                        {descrip}
                        {i < slide.descriptions1.length - 1 && <br />}
                      </motion.span>
                    ))}
                  </motion.p>

              {/* Heading Animation */}
                  <motion.h1
                  key={key} // Ensure remount on key change
                  className="m-0"
                  initial={{ opacity: 0, x: -100 }}  // Start from the left
                  animate={{ opacity: 1, x: 0 }}     // Animate to normal position
                  transition={{
                    duration: 2,  // Slower animation for the heading
                    delay: 2.5,     // Delay the heading to start after the paragraph animation
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                  }}
                >
                  {slide.headings.map((heading, i) => (
                    <span key={i}>
                      {heading}
                      {i < slide.headings.length - 1 && <br />}
                    </span>
                  ))}
                  </motion.h1>

              {/* Paragraph 2 Animation (descriptions2) - Bottom to Top */}
                 <motion.p
                    className="py-md-4 py-2 m-0 p-0"
                    initial={{ opacity: 0, y: 20 }}  // Start from below
                    animate={{ opacity: 1, y: 0 }}    // Move to normal position
                    transition={{
                      duration: 2,  // Duration of the animation
                      delay: 3.5,     // Delay this to start after the heading finishes
                    }}
                 >
                {slide.descriptions2.map((descrip, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}  // Start from below
                    animate={{ opacity: 1, y: 0 }}    // Animate to normal position
                    transition={{
                      duration: 0.8,
                      delay: i * 0.3,                 // Staggered animation for each description
                    }}
                  >
                    {descrip}
                    {i < slide.descriptions2.length - 1 && <br />}
                  </motion.span>
                ))}
                 </motion.p>

                <div className="slider-cta ">

                  {/* Button Animation - Bottom to Top  Explore button*/}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}  // Start from below
                      animate={{ opacity: 1, y: 0 }}    // Move to normal position
                      transition={{
                        duration: 2,  // Duration of the button's animation
                        delay: 5,     // Delay the button animation to start after all previous animations finish
                      }}
                    >
                      <a href="https://staging.hksglobalpetroleum.com/about-us/">Explore Now</a>
                    </motion.button>


                   {/* Button Animation - Bottom to Top Our product */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}  // Start from below
                        animate={{ opacity: 1, y: 0 }}    // Move to normal position
                        transition={{
                          duration: 2,  // Duration of the button's animation
                          delay: 6.5,     // Delay the button animation to start after all previous animations finish
                        }}
                      >
                        <a href="https://staging.hksglobalpetroleum.com/about-us/">Our product</a>
                      </motion.button>
                 

                  </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
