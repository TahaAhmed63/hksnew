"use-client";
import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/store/slice/productslice";
import Link from "next/link";

// Dynamically import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Product = () => {
  const dispatch = useDispatch();
//hello w
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const productData = useSelector((state) => state.products?.data);


console.log(productData,"productData")
  const publishedProducts = productData?.products?.filter(
    (product) => product.status !== "draft"
  );
  return (
    <div className="container fslider  py-4">

    <div className="related-products-slider pb-3">
          <h2>Featured Products</h2>
      </div> 

      <Swiper
        modules={[Navigation]}
        navigation={false}
        spaceBetween={30}
        slidesPerView={3}
        // Add breakpoints to control the number of slides per view based on screen size
        breakpoints={{
          // When the screen width is >= 640px, show 1 slide
      
          300: {
            slidesPerView: 1,
          },
         
          // When the screen width is >= 768px, show 2 slides
          675: {
            slidesPerView: 2,
          },
          // When the screen width is >= 1024px, show 3 slides
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {publishedProducts?.map((product,key) => (
          <SwiperSlide key={product.id}>
            <div className="item">
              <div className="featured-img">
                {product?.images?.map((e) => (
                  <img src={e?.src} alt={e?.name} layout="responsive" />
                ))}
              </div>

              <div className="innerproduct">
                <h2>{product?.name}</h2>

                <div className="innerexcept">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product?.short_description,
                    }}
                  />
                </div>

                <div className="btnproducts">
                  <Link
                    href={`/products/${product?.slug}`}
                    className="button buy-now"
                  >
                    Buy
                  </Link>
                  <Link
                    href={`/products/${product?.slug}`}
                    className="button read-more"
                  >
                    Read More
                  </Link>
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
