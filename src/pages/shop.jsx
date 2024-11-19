"use client";

import Image from "next/image";
import React from "react";
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import Link from "next/link";
import { Baseurl } from "../../BaseUrl";
import { addItem, toggleCart } from "@/store/slice/cartslice";
import { useDispatch } from "react-redux";

const Shop = ({ products }) => {
  const dispatch = useDispatch();

  // Handle empty or unpublished products
  if (!products || products.length === 0) {
    return (
      <div className="singpgbanner">
        <Image src={Allpagebanner} alt="Shop Banner" />
        <div className="singpg-title text-center">
          <h1>Shop</h1>
        </div>
        <div className="container py-5">
          <h3 className="text-center">No products available at the moment.</h3>
        </div>
      </div>
    );
  }

  const publishedProducts = products.filter(
    (product) => product.status !== "draft"
  );

  const handleAddToCart = (product) => {
    const item = {
      id: product.id,
      price: product.price,
      name: product.name,
      quantity: 1,
      img: product.images.map((e) => e.src),
    };
    dispatch(addItem(item));
    dispatch(toggleCart());
  };

  return (
    <>
      <div className="singpgbanner">
        <Image src={Allpagebanner} alt="Shop Banner" />
        <div className="singpg-title text-center">
          <h1>Shop</h1>
        </div>
      </div>

      <div className="singpg-products-display py-md-5">
        <div className="container fslider">
          <div className="row">
            {publishedProducts.map((product) => (
              <div
                key={product.id}
                className="product col-lg-3 col-sm-6 col-12 mb-3"
              >
                <div className="item">
                  <div className="featured-img">
                    {product.images.map((e) => (
                      <img key={e.src} src={e.src} alt={e.name} />
                    ))}
                  </div>

                  <div className="innerproduct">
                    <h2>
                      <Link href={`/products/${product.slug}`}>{product.name}</Link>
                    </h2>
                  </div>

                  <div className="product-pricing">
                    <p dangerouslySetInnerHTML={{ __html: product.price_html }} />
                  </div>

                  {product.type !== "simple" ? (
                    <div className="select-btn-prodpg pb-3">
                      <Link href={`/products/${product.slug}`}>
                        <button>Select Option</button>
                      </Link>
                    </div>
                  ) : (
                    <button
                      className="btn btn-warning w-100 mb-3 rounded-0"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to basket
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Fetch products during build time
export async function getStaticProps() {
  try {
    console.log(`Fetching from: ${Baseurl}/get-products`);
    const response = await fetch(`${Baseurl}/get-products`);

    // Check if response is valid
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      props: {
        products: data.products || [],
      },
      revalidate: 10, // Revalidate data every 10 seconds for ISR
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      props: {
        products: [], // Return an empty array if fetch fails
      },
      revalidate: 10, // Attempt to fetch again after 10 seconds
    };
  }
}

export default Shop;
