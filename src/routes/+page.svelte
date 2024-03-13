<script lang="ts">
	import { snippetStore, addSnippet } from '../SnippetStore';
	import CodeSnippetCard from '$lib/CodeSnippetCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let formData: CodeSnippetInput = {
		title: '',
		langauge: 'HTML',
		code: ''
	};

	snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create A Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input type="text" class="input" placeholder="Enter the text" bind:value={formData.title} />
			</label>
			<label class="label">
				<span>Programming Laungauge</span>
				<select class="select" bind:value={formData.langauge}>
					<option value="html"> HTML </option>
					<option value="CSS"> CSS </option>
					<option value="JavaScript"> Javascript </option>
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="enter your snippet"
					bind:value={formData.code}
				></textarea>
			</label>
			<button
				type="button"
				class="btn btn-sm variant-filled-primary"
				on:click={() => addSnippet(formData)}>Create Snippet</button
			>
		</div>
		<div class="text-center py-6">
			<h2>My Code Snippet</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard {snippet} {index} />
		{/each}
	</div>
</div>
