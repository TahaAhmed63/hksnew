import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';



const products = [
  {
    id: 1,
    image: require('../../assets/homepage-images/s8.jpg'),
    title: 'S8 SN 5W40',
    description: 'Lorem ipsum dolor sit amet.',
    buyLink: '/',
    readMoreLink: '/',
  },
  {
    id: 2,
    image: require('../../assets/homepage-images/Featured-image-psd-2.jpg'),
    title: 'S8 SN 5W40',
    description: 'Lorem ipsum dolor sit amet.',
    buyLink: '/',
    readMoreLink: '/',
  },
  {
    id: 3,
    image: require('../../assets/homepage-images/Featured-image-gray.jpg'),
    title: 'S5 CH4 20W50',
    description: 'Lorem ipsum dolor sit amet.',
    buyLink: '/',
    readMoreLink: '/',
  },

  {
    id: 4,
    image: require('../../assets/homepage-images/Featured-image-psd-4.jpg'),
    title: 'S8 SN 5W40',
    description: 'Lorem ipsum dolor sit amet.',
    buyLink: '/',
    readMoreLink: '/',
  },
];

const Product = () => {
  return (
    <div className="container fslider py-md-5">
      <Swiper modules={[Navigation]}
        navigation={false}
        spaceBetween={30}
        slidesPerView={3}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="item">
              <div className="featured-img">
                <Image src={product.image} alt={product.title} layout="responsive" />
              </div>

              <div className="innerproduct">
                <h2>{product.title}</h2>

                <div className="innerexcept">
                  <p>{product.description}</p>
                </div>

                <div className="btnproducts">
                  <a href={product.buyLink} className="button buy-now">Buy</a>
                  <a href={product.readMoreLink} className="button read-more">Read More</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
