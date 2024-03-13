import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippets: [
			{
				title: 'Manojkumar',
				langauge: 'HTML',
				code: '<div>hei</div>',
				favourite: true
			}
		]
	};
}) satisfies PageLoad
