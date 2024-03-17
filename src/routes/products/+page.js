export const load = async (/** @type {{ fetch: any; }} */ loadEvent) => {
	let { fetch } = loadEvent;
	const response = await fetch('http://localhost:4000/products');
	const products = await response.json();
	return { products };
};
