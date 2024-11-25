"use-client"
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Allpagebanner from "../../assets/homepage-images/allpagebanner.jpg";
// import ProductTabs from "./productTabs";
import { Baseurl } from "../../../BaseUrl";
import dynamic from "next/dynamic";
import { useState } from "react";
import SinglePageHeader from "@/Components/singlepageheader/SinglePageHeader";

// import RelatedSlider from "@/Components/RelatedproductSlider/RelatedSlider";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/store/slice/cartslice";
const  RelatedSlider=dynamic(() => import('./../../Components/RelatedproductSlider/RelatedSlider'), { ssr: false });
const ProductTabs = dynamic(() => import("./productTabs"), { ssr: false });
const ProductPage = ({ product }) => {
  const [selectedVariation, setSelectedVariation] = useState(null);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);  
  const singleProduct = product?.product;
  if (!singleProduct) {
    return <div>Loading...</div>;
  }
  const handleAddToCart = () => {
    const item = {
      id: singleProduct.id,
      name: singleProduct?.name + selectedVariation?.name || singleProduct?.name,
      variationName: selectedVariation?.name,
      variationId: selectedVariation?.id,
      price: selectedVariation ? selectedVariation.price : singleProduct.price,
      quantity,
      img:selectedVariation? selectedVariation?.image : singleProduct?.images.map((e)=>(e?.src))
    };
    dispatch(addItem(item));
dispatch(toggleCart())
  };
  const handleVariationChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "") {
      // If the user selects the placeholder, set the state to null
      setSelectedVariation(null);
    } else {
      const selectedVar = singleProduct?.variations.find(
        (variation) => variation?.name === selectedOption
      );
      setSelectedVariation(selectedVar);
    }
  };

  // Define the changeImgUri function

  // Extract prices from product_variations
  const prices = singleProduct?.variations
    ?.map((variation) =>
      variation.price !== "" ? parseFloat(variation.price) : null
    )
    .filter((price) => price !== null); // Filter out null values

  // Calculate minimum and maximum prices
  const minPrice = prices.length > 0 ? Math.min(...prices) : null;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : null;
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
  };
  console.log(selectedVariation, "selectedVariation");

  return (
    <>
     <SinglePageHeader  title={singleProduct?.name} pagebanner={Allpagebanner}  />

      <div className="container-md ">
        <div className="row py-md-5 py-3 pb-4">
          <div key={singleProduct.id} className="product col-sm-6 col-12 mb-3">
            <div className="singpgfeatrued-img">
              {selectedVariation === null || undefined
                ? singleProduct?.images?.map((e, i) => (
                    <img key={i} src={e?.src} alt={e?.name} />
                  ))
                : selectedVariation?.image?.src && (
                    <img
                      src={selectedVariation.image.src}
                      alt={selectedVariation?.image?.name}
                    />
                  )}

              {/*               
              <img
                src={changeimgUri(product.featured_image)}
                alt={product.name}
              />
               */}
            </div>
          </div>

          <div className="col-sm-6 col-12 singprod-content-col">
            <div className="singleproduct-title">
              <h2 className="m-0">{singleProduct.name}</h2>
            </div>

            <div className="singleproduct-des">
              <p className="m-0"
                dangerouslySetInnerHTML={{
                  __html: singleProduct?.short_description,
                }}
              />
            </div>
{ singleProduct?.type === "variable" &&
    <div className="variation-select d-flex gap-2 py-3 align-items-center ">
    <label>{singleProduct?.attributes[0]?.name}</label>
    <select
      id="variations"
      onChange={handleVariationChange}
      className="form-control form-select"
    >
      <option value="">Choose an option</option>
      {singleProduct?.variations?.map((option, i) =>
        option?.price !== "" ? (
          <option key={i} value={option.name}>
            {option.name}
          </option>
        ) : null
      )}
    </select>
  </div>
}
{singleProduct?.type === "simple" && 
<h6 className="stock-text">{singleProduct?.stock_quantity  +" "+ singleProduct?.stock_status }</h6>
}
        
            <div className="singleproduct-pricing py-3 ">
              <h2>
                {/* PKR{" "}
                        {minPrice === maxPrice
                          ? minPrice
                          : `${minPrice} - PKR ${maxPrice}`} */}
                {selectedVariation && `RS ` + selectedVariation?.price}
              </h2>
            </div>
            <div className="quantity-controls d-flex align-items-center gap-2">
              <button onClick={handleDecrement} className="btn btn-warning">-</button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="form-control text-center"
                style={{ width: "50px" }}
                min="1"
              />
              <button onClick={handleIncrement} className="btn btn-warning">+</button>
              <button 
  className="btn btn-warning" 
  onClick={handleAddToCart} 
  disabled={singleProduct?.type === "variable"  && selectedVariation === null} // Disable the button when the condition is true
>
  Add to basket
</button>
            </div>
          </div>
        </div>

        <div className="row py-md-5">
          <ProductTabs
            productData={singleProduct?.description}
            additionalinfo={singleProduct?.attributes}
          />
        </div>
      </div>

      {/* <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.lprice}</p> */}
     <RelatedSlider productId={singleProduct?.id} />
    </>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/get-products`);
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.statusText}`);
    const products = await res.json();

    const paths = products?.products?.map((product) => ({
      params: { slug: product.slug },
    })) || [];

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/get-product-by-slug?slug=${params.slug}`);
    if (!res.ok) throw new Error(`Failed to fetch product: ${res.statusText}`);
    const product = await res.json();

    if (!product) {
      return { notFound: true };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      notFound: true,
    };
  }
}


export default ProductPage;