export const load = async (/** @type {{ fetch: any; }} */ loadEvent: { fetch: any }) => {
	let { fetch } = loadEvent;
	const notification ="heiii I am going to sales"
	const response = await fetch('http://localhost:4000/products');
	const products: Products[] = await response.json();
	return { products ,notification};
};
