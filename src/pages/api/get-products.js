const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

/**
 * Get Products with Variations.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
const cache = {};

export default async function handler(req, res) {
  const { perPage, page } = req?.query ?? {};
  console.log("URL:", process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL);
  console.log("Key:", process.env.WC_CONSUMER_KEY ? "Loaded" : "Missing");
  console.log("Secret:", process.env.WC_CONSUMER_SECRET ? "Loaded" : "Missing");
  const cacheKey = `products-${perPage}-${page}`;
  if (cache[cacheKey]) {
    return res.json(cache[cacheKey]);
  }

  // Fetch data from the API if not in cache
  const responseData = {
    success: false,
    products: [],
  };

  try {
    const { data: products } = await api.get("products", {
      per_page: perPage || 50,
      page: page || 1,
      _fields: "id,name,price,images,price_html,status,slug,short_description,stock,type",
    });

    const productsWithVariations = await Promise.all(
      products.map(async (product) => {
        if (product.type === "variable") {
          const { data: variations } = await api.get(
            `products/${product.id}/variations`
          );
          return { ...product, variations };
        }
        return product;
      })
    );

    responseData.success = true;
    responseData.products = productsWithVariations;

    // Cache the response
    cache[cacheKey] = responseData;

    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
