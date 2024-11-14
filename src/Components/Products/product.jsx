import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/store/slice/productslice";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: require("../../assets/homepage-images/s8.jpg"),
    title: "S8 SN 5W40",
    description: "Lorem ipsum dolor sit amet.",
    buyLink: "/",
    readMoreLink: "/",
  },
  {
    id: 2,
    image: require("../../assets/homepage-images/Featured-image-psd-2.jpg"),
    title: "S8 SN 5W40",
    description: "Lorem ipsum dolor sit amet.",
    buyLink: "/",
    readMoreLink: "/",
  },
  {
    id: 3,
    image: require("../../assets/homepage-images/Featured-image-gray.jpg"),
    title: "S5 CH4 20W50",
    description: "Lorem ipsum dolor sit amet.",
    buyLink: "/",
    readMoreLink: "/",
  },

  {
    id: 4,
    image: require("../../assets/homepage-images/Featured-image-psd-4.jpg"),
    title: "S8 SN 5W40",
    description: "Lorem ipsum dolor sit amet.",
    buyLink: "/",
    readMoreLink: "/",
  },
];

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  const productData = useSelector((state) => state?.products?.data?.products);
  console.log(productData);
  const publishedProducts = productData.filter(
    (product) => product.status !== "draft"
  );
  return (
    <div className="container fslider py-md-5">
      <Swiper
        modules={[Navigation]}
        navigation={false}
        spaceBetween={30}
        slidesPerView={3}
      >
        {publishedProducts?.map((product) => (
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
