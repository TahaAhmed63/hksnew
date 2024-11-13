import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import Link from "next/link";
import { Baseurl } from "../../BaseUrl";

const shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${Baseurl}/get-products`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

 
  function chnageimguri(url) {
    url = url.replace("http://localhost:3000", "http://192.168.201.158:3000");
    return url;
  }
  return (
    <>
      <Header />

      <div className="singpgbanner">
        <Image src={Allpagebanner} />
        <div className="singpg-title text-center">
          <h1>Shop</h1>
        </div>
      </div>

      <div className="singpg-products-display py-md-5">
        <div className="container fslider">
          <div className="row">
            {products.map((product) => {
              // Extract prices from product_variations
              // const prices = product.product_variations.map(
              //   (variation) => variation.price
              // );

              // // Calculate minimum and maximum prices
              // const minPrice = Math.min(...prices);
              // const maxPrice = Math.max(...prices);

              return (
                <div key={product.id} className="product col-lg-3 col-sm-6 col-2 mb-3" >
                  <div className="item">
                    <div className="featured-img">
                      {product?.images?.map((e)=>(
                        <>
                           <img
                        src={e?.src}
                        alt={e?.name}
                      />
                        </>
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
                      {/* <p>
                        PKR{" "}
                        {minPrice === maxPrice
                          ? minPrice
                          : `${minPrice} - PKR ${maxPrice}`}
                      </p> */}
                  <p dangerouslySetInnerHTML={{ __html: product?.price_html }} />

                    </div>

                    <div className="select-btn-prodpg pb-3">
                      <Link href={`/products/${product.slug}`} rel="">
                        {" "}
                        <button>Select Option</button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.featured_image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.short_description}</p>
          <p>Price: ${product.product_variations[0]?.price || "N/A"}</p>
          <button>Add to Cart</button>
        </div>
      ))} */}
      <Footer />
    </>
  );
};

export default shop;
