import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Allpagebanner from "../../assets/homepage-images/allpagebanner.jpg";
// import ProductTabs from "./productTabs";
import { Baseurl } from "../../../BaseUrl";
import dynamic from "next/dynamic";
import { useState } from "react";
import RelatedSlider from "@/Components/RelatedproductSlider/RelatedSlider";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slice/cartslice";
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
      variationId: selectedVariation?.id,
      price: selectedVariation ? selectedVariation.price : singleProduct.price,
      quantity,
      img:selectedVariation? selectedVariation?.image : singleProduct?.images
    };
    dispatch(addItem(item));
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
      <div className="singpgbanner">
        <Image src={Allpagebanner} alt="Banner" />
        <div className="singpg-title text-center">
          <h1>Shop</h1>
        </div>
      </div>

      <div className="container ">
        <div className="row py-md-5">
          <div key={singleProduct.id} className="product col-md-6 col-2 mb-3">
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

          <div className="col-md-6 singprod-content-col">
            <div className="singleproduct-title">
              <h2>{singleProduct.name}</h2>
            </div>

            <div className="singleproduct-des">
              <p
                dangerouslySetInnerHTML={{
                  __html: singleProduct?.short_description,
                }}
              />
            </div>

            <div className="variation-select d-flex gap-2 py-2 align-items-center pb-4">
              <label>{singleProduct?.attributes[0]?.name}</label>
              <select
                id="variations"
                onChange={handleVariationChange}
                className="form-control"
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
            <div className="singleproduct-pricing">
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
              <button className="btn btn-warning" onClick={handleAddToCart} >Add to basket</button>
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
      <RelatedSlider />
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

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${Baseurl}/get-product-by-slug?slug=${params.slug}`);
  const product = await res.json();

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
