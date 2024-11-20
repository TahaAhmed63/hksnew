"use-client"
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/store/slice/productslice";
import Link from "next/link";

const Product = ({ productId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  const productData = useSelector((state) => state?.products?.data?.products);
  console.log(productData);
  const filteredProduct = productData?.filter(
    (product) => product.id !== productId
  );
  const publishedProducts = filteredProduct?.filter(
    (product) => product.status !== "draft"
  );

  return (
    <div className="container fslider ">
      <div className="related-products-slider">
          <h2>Related Products</h2>
      </div> 
      <Swiper
        modules={[Navigation]}
        navigation={false}
        spaceBetween={30}
        slidesPerView={3}
      >
        {publishedProducts?.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="singpg-products-display py-md-4">
              <div className=" fslider">
                <div className="item">
                  <div className="featured-img">
                    {product?.images?.map((e) => (
                      <img key={e?.src} src={e?.src} alt={e?.name} />
                    ))}
                  </div>

                  <div className="innerproduct">
                    <h2>
                      <Link href={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h2>
                  </div>

                  <div className="product-pricing">
                    <p
                      dangerouslySetInnerHTML={{ __html: product?.price_html }}
                    />
                  </div>

                  <div className="select-btn-prodpg pb-3">
                    <Link href={`/products/${product.slug}`}>
                      <button>Select Option</button>
                    </Link>
                  </div>
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
