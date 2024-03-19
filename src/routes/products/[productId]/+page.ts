import { redirect } from '@sveltejs/kit';

export const load = async (loadEvent: { fetch: any; params: any }) => {
	let { fetch, params } = loadEvent;
	let { productId } = params;
	if (productId > 5) {
		redirect(307, '/products');
	}
	let data = await fetch(`http://localhost:4000/products/${productId}`);
	let response: Products[] = await data.json();

	return { response };
};
