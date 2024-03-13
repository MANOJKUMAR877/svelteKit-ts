import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);
export function addSnippet(input: CodeSnippetInput) {
	let snippets = get(snippetStore);
	snippetStore.update(() => {
		return [{ ...input, favourite: false }, ...snippets];
	});
}
export function deleteSnippeet(index: number) {
	let snippets = get(snippetStore);
	snippets.splice(index, 1);
	snippetStore.update(() => {
		return snippets;
	});
}

export function toggleSnippet(index: number) {
	let snippets = get(snippetStore);

	snippetStore.update(() => {
		return snippets.map((snippet, snippetIndex) => {
			if (snippetIndex === index) {
				return { ...snippet, favourite: !snippet.favourite };
			}
			return snippet;
		});
	});
}
