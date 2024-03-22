<script>
	// @ts-ignore
	import { dataStore } from '$lib/Store';
</script>

<h1>Example Component</h1>

<ul>
	{#each $dataStore as item}
		<li>{item.text}</li>
	{/each}
</ul>
<a href="/dummy">move</a>