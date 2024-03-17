<script lang="ts">
	export let data: { todos: Todos[] };

	let { todos } = data;
	let value = todos.splice(0, 5);

	// let r = value.map((/** @type {any} */ todo) => ({ ...todo, checked: false }));
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let formData: { name: string; email: string } = {
		name: '',
		email: ''
	};

	function handleSubmit(event: Event) {
		event.preventDefault();
		console.log(formData)
		dispatch('submit', formData);
	}
</script>

{#each value as todo}
	<div>
		<input type="checkbox" bind:checked={todo.completed} />
		<input bind:value={todo.title} disabled={todo.completed} />
	</div>
{/each}

{#each value as todo}
	<li>{todo.completed.toString()}{todo.title}</li>
{/each}
<form on:submit={handleSubmit}>
	<label>
		Name:
		<input type="text" bind:value={formData.name} />
	</label>
	<label>
		Email:
		<input type="email" bind:value={formData.email} />
	</label>
	<button type="submit">Submit</button>
</form>
