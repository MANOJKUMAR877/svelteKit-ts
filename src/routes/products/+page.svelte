<script lang="ts">
	export let data: { products: Products[] };

	let { products } = data;
</script>

{#each products as value}
	<div>
		<a data-sveltekit-preload-data="hover" href={`/products/${value.id}`}>{value.id}--{value.title}</a>
	</div>
{/each}
