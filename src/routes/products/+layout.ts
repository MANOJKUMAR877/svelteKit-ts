export const load = async (loadEvent: { fetch: any; parent: any }) => {
	const { fetch, parent } = loadEvent;
	const parentData = await parent();
	const title = 'My name is features';
	const response = await fetch('http://localhost:4000/comments');
	const value = await response.json();
	return { title, value, parentData };
};
