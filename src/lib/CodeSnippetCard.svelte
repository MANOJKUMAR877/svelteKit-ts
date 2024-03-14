<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { deleteSnippeet, toggleSnippet } from '../SnippetStore';
	export let snippet: CodeSnippet = {
		title: '',
		langauge: '',
		code: '',
		favourite: false
	};
	export let index: number;
</script>

<div class="card">
	<header class="card-header">
		{snippet.title}
		<div class="float-right">
			<button
				type="button"
				class="btn btn-sm variant-filled-secondary"
				on:click={() => toggleSnippet(index)}
				>{snippet.favourite ? 'Unfavourite' : 'Favourite'}</button
			>
			<button
				type="button"
				class="btn btn-sm variant-outline-error"
				on:click={() => deleteSnippeet(index)}>X</button
			>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={snippet.langauge} code={snippet.code}></CodeBlock>
	</section>
</div>
