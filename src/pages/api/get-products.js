const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: "wc/v3"
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
export default async function handler(req, res) {
	const responseData = {
		success: false,
		products: []
	}

	const { perPage } = req?.query ?? {};

	try {
		// Fetch main product data
		const { data: products } = await api.get(
			'products',
			{
				per_page: perPage || 50
			}
		);

		// For each product, fetch its variations (if it's a variable product)
		const productsWithVariations = await Promise.all(products.map(async (product) => {
			if (product.type === 'variable') {
				try {
					const { data: variations } = await api.get(`products/${product.id}/variations`);
					return { ...product, variations };
				} catch (error) {
					console.error(`Error fetching variations for product ${product.id}:`, error.message);
					return product; // Return product without variations if there's an error
				}
			}
			return product; // Return simple products directly
		}));

		responseData.success = true;
		responseData.products = productsWithVariations;

		res.json(responseData);
	} catch (error) {
		responseData.error = error.message;
		res.status(500).json(responseData);
	}
}
