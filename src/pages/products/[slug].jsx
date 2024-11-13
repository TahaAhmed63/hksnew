"use-client"
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Allpagebanner from "../../assets/homepage-images/allpagebanner.jpg";
// import ProductTabs from "./productTabs";
import { Baseurl } from "../../../BaseUrl";
import dynamic from "next/dynamic";
const ProductTabs = dynamic(() => import('./productTabs'), { ssr: false })

const ProductPage = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  // Define the changeImgUri function


  // Extract prices from product_variations
  const prices = product?.variations
  ?.map((variation) => variation.price !== '' ? parseFloat(variation.price) : null)
  .filter(price => price !== null); // Filter out null values

// Calculate minimum and maximum prices
const minPrice = prices.length > 0 ? Math.min(...prices) : null;
const maxPrice = prices.length > 0 ? Math.max(...prices) : null;





  return (
    <>
      <Header />
      <div className="singpgbanner">
        <Image src={Allpagebanner} alt="Banner" />
        <div className="singpg-title text-center">
          <h1>Shop</h1>
        </div>
      </div>

      <div className="container ">
        <div className="row py-md-5">
          <div key={product.id} className="product col-md-6 col-2 mb-3">
            <div className="singpgfeatrued-img">
              {
            product?.images?.map((e)=>(
              <>
               <img
                src={e?.src}
                alt={e?.name}
              />
              </>
            ))
              }
{/*               
              <img
                src={changeimgUri(product.featured_image)}
                alt={product.name}
              />
               */}
            </div>
          </div>

      <div className="col-md-6 singprod-content-col">
        <div className="singleproduct-title">
              <h2>{product.name}</h2>
        </div>

        <div className="singleproduct-des">
        <p dangerouslySetInnerHTML={{ __html: product?.short_description }}/>
        </div>

        <div className="singleproduct-pricing">
                      <h2>
                        PKR{" "}
                        {minPrice === maxPrice
                          ? minPrice
                          : `${minPrice} - PKR ${maxPrice}`}
                      </h2>
                    </div>
      
      </div>

        </div>

        <div className="row py-md-5">
            <ProductTabs productData={product?.description}/>
        </div>
      </div>

      {/* <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.lprice}</p> */}

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${Baseurl}/get-products`);
  const products = await res.json();

  const paths =
    products?.products?.map((product) => ({
      params: { slug: product.slug },
    })) || [];

  return { paths, fallback: true }; // or 'blocking'
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${Baseurl}/get-products`);
  const products = await res.json();

  const product = products.products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
