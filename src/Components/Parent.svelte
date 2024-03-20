<script>
// @ts-nocheck

	//import { Interface } from "readline";
	import List from './List.svelte';

	let todos = [
		{ id: 1, title: 'Breakfast', done: false },
		{ id: 2, title: 'Lunch', done: false },
		{ id: 3, title: 'Dinner', done: false }
	];

	// @ts-ignore
	function deleteTodo(event) {
		// event.detail => `new CustomEvent()`를 통해 이벤트를 초기화 할 때 전달 된 모든 데이터를 반환
		const todo = event.detail.todo;
		const index = todos.findIndex((t) => t.id === todo.id);
		console.log(todo);
		todos.splice(index, 1);
		todos = todos;
	}
</script>

{#each todos as todo (todo.id)}
	<List {todo} on:deleteMe={deleteTodo} />
{/each}
