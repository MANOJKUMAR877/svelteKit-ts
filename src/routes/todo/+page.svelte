<script lang="ts">
	export let data: { todos: Todos[] };

	let { todos } = data;
	let value = todos.splice(0, 5);

	// let r = value.map((/** @type {any} */ todo) => ({ ...todo, checked: false }));
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
