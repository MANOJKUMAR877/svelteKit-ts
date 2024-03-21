export const load = async (/** @type {{ fetch: any; }} */ ) => {
	

	const data = await fetch('http://localhost:4000/products');
	const response = await data.json();
	return { response };
};
