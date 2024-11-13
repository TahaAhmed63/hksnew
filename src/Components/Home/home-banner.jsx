import Link from "next/link";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Bannerone from "../../assets/homepage-images/banner.jpg";
import Bannertwo from "../../assets/homepage-images/bannertwo.jpg";
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
    headings: [
      "Expertly Crafted",
      "Lubricants For",
      "Every need"
    ],
    descriptions: [
      "Leading Innovation in High-Performance ",
      "Lubricants and Greases."
    ]
  },
  {
    src: Bannertwo,
    alt: "Banner Two",
    headings: [
      "Quality You Can Trust"
    ],
    descriptions: [
      "Delivering the best solutions for your lubrication needs.",
      "Our products are engineered for excellence."
    ]
  }
  // Add more slides as needed
];

export default function App() {
  const [key, setKey] = useState(0);  // State to trigger animation on slide change

  const handleSlideChange = (swiper) => {
    setKey(prevKey => prevKey + 1); // Increment key to force re-animation on slide change
  };

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange} // Trigger on slide change
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide.src} alt={slide.alt} />
            <div className="container swiper-content">
              <p className="py-md-4">
                {slide.descriptions.map((descrip, i) => (
                  <span key={i}>
                    {descrip}
                    {i < slide.descriptions.length - 1 && <br />}
                  </span>
                ))}
              </p>

              {/* Motion H1 with Slide Change Animation */}
              <motion.h1
                key={key} // Force remount on key change to trigger animation
                className="m-0"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2,  // Slower animation duration
                  delay: 1, 
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
