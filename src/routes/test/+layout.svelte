<script>
	import { onMount } from 'svelte';
	import { load } from '$lib/dataFetch';
	/**
	 * @type {{ response: any; }}
	 */
	let r;
	onMount(async () => {
		let data = await load();
		r = data;
	});
</script>

<slot>{r}</slot>
