<script lang="ts">
	export let data: { products: Products[] };

	let { products } = data;
</script>

{#each products as value}
	<div>{value.id}--{value.title}</div>
{/each}
