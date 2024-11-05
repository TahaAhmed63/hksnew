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
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
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
              <h1 className="m-0">
                {slide.headings.map((heading, i) => (
                  <span key={i}>
                    {heading}
                    {i < slide.headings.length - 1 && <br />}
                  </span>
                ))}
              </h1>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
