import type { Load } from '@sveltejs/kit';


export const load: Load = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todos[] = await res.json();
  return { todos };
};