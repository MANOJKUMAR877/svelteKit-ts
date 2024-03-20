// @ts-ignore
import { json } from '@sveltejs/kit';

// @ts-ignore
export async function POST({ request, cookies }) {
	const data = await request.json();
	// @ts-ignore
	const { username, password } = data;
	if (!username || !password) {
		return json(
			{ message: 'Missing' },
			{
				status: 400
			}
		);
	}
	cookies.set('username', username, { path: '/' });
	return json({ message: 'success' });
}
