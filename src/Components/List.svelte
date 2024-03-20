<script>
	import { createEventDispatcher } from 'svelte';

	// @ts-ignore
	/**
	 * @type {{ done: any; title: any; }}
	 */
	export let todo;

	const dispatch = createEventDispatcher();

	function deleteTodo() {
		// dispatch('deleteMe', todo)
		dispatch('deleteMe', {
			// @ts-ignore
			todo
		});
	}
</script>

<div>
	<input type="checkbox" bind:value={todo.done} />
	{todo.title}
	<button on:click={deleteTodo}>X</button>
</div>
