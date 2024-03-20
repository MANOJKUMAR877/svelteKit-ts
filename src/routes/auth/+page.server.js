// @ts-ignore
import { json } from '@sveltejs/kit';
export const actions = {
	// @ts-ignore
	default: async ({ request, cookies }) => {
		// @ts-ignore
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			return;
			{
				message: 'Missing';
			}
		}
		cookies.set('username', username, { path: '/' });
		return { message: 'success' };
	}
};
