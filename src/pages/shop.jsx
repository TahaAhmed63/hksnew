import Image from "next/image";
import React from "react";
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import Link from "next/link";
import { Baseurl } from "../../BaseUrl";

const Shop = ({ products }) => {
  const publishedProducts = products?.filter(
    (product) => product?.status !== "draft"
  );

  return (
    <>
      <div className="singpgbanner">
        <Image src={Allpagebanner} />
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
                className="product col-lg-3 col-sm-6 col-2 mb-3"
              >
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${Baseurl}/get-products`);
  const data = await response.json();

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // Revalidate data every 10 seconds
  };
}

export default Shop;
