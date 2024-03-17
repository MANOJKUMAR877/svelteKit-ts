import type { Load, RequestHandler } from '@sveltejs/kit';

//import { json } from 'remix';

export const load: Load = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todos: Todos[] = await res.json();
	return { todos };
};

// export const post: RequestHandler = async (request) => {
// 	// Parse form data from the request body
// 	const formData = await json<{ name: string; email: string }>(request);

// 	// Here you can handle the form data as needed
// 	console.log('Received form data:', formData);

// 	// Return a response indicating success
// 	return {
// 		status: 200,
// 		body: {
// 			message: 'Form submitted successfully'
// 		}
// 	};
// };
