<script>
	import { dataStore } from '$lib/Store';

	let name = '';

	function addItem() {
		const newItem = { id: $dataStore.length + 1, text: name };
		dataStore.update((data) => [...data, newItem]);
		name = '';
	}
</script>

<input bind:value={name} />

<button on:click={addItem}>Add New Item</button>
<slot />
