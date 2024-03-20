<script>
	export let data;
	// console.log(data.todos)

	//filter pass the condtion

	let value = data.todos.slice(0, 5);
	let value1 = data.todos.slice(17, 24);

	console.log(value1);
	// map

	const handleChange = () => {
		console.log(value);
	};

	const filterdata = () => {
		let r = value.filter((d) => d.completed);
		value = r;
	};
</script>

<h1>Map</h1>

{#each value as val}
	<input bind:value={val.title} />
{/each}

<button on:click={handleChange}>submit</button>

<button on:click={filterdata}>Filter</button>

<h3>ForEach</h3>
