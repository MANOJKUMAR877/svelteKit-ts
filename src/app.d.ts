// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
interface CodeSnippetInput {
	title: string;
	langauge: string;
	code: string;
}

interface CodeSnippet {
	title:string;
	langauge:string;
	code:string;
	favourite:boolean
}

interface Todos{
	id:number,
	title:string,
	completed:boolean
}