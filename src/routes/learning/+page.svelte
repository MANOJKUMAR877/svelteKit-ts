<script>
	// @ts-ignore
	export let data;

	const array1 = [
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'Bob' },
		{ id: 3, name: 'Charlie' },
		{ id: 4, name: 'David' },
		{ id: 5, name: 'Emma' },
		{ id: 6, name: 'Frank' },
		{ id: 7, name: 'Grace' },
		{ id: 8, name: 'Henry' },
		{ id: 9, name: 'Ivy' },
		{ id: 10, name: 'Jack' }
	];

	const array2 = [
		{ id: 1, age: 25 },
		{ id: 2, age: 30 },
		{ id: 3, age: 35 },
		{ id: 4, age: 40 },
		{ id: 5, age: 45 }
	];
	const array3 = [
		{ id: 1, age: 25, com: true },
		{ id: 2, age: 30, com: true },
		{ id: 3, age: 35, com: false },
		{ id: 4, age: 40, com: true },
		{ id: 5, age: 45, com: true }
	];

	const newArray = array3.map((item) => ({ ...item, com: !item.com ,n:45}));

	console.log(newArray)
	// const mergedArray = array1.map((item1) => {
	// 	const item2 = array2.find((item) => item.id === item1.id);
	// 	if (item2) {
	// 		return { ...item1, ...item2 };
	// 	}
	// });
	// console.log(mergedArray);
	// // @ts-ignore
	// const d = array2.filter((r, index) => r.id === array1[index].id);
	//console.log(d);

	// @ts-ignore
	const rs = [...array1, ...array2];

	// @ts-ignore
	const arrayLength = array1.length < array2.length ? array1 : array2;
	//console.log(arrayLength);

	// without size of the array

	const mergedArray = [];

	for (let item1 of array1) {
		for (let item2 of array2) {
			if (item1.id === item2.id) {
				mergedArray.push({ id: item1.id, name: item1.name, age: item2.age });
				break; // Once found, exit inner loop
			}
		}
	}
	const rsd = array1.map((r) => {
		let sd = array2.map((s) => {
			if (r.id === s.id) {
				return {
					id: r.id,
					age: s.age,
					name: r.name
				};
			} else {
				return null; // Handle the case where there's no match
			}
		});
		return sd; // Filter out null items
	});

	console.log(rsd);

	//console.log(mergedArray);
	// console.log(rs)

	// const datas = array2.map((item2, index) => {
	// 	let cors = array1.find((items1, index) => item2.id === items1.id);
	// 	if (cors) {
	// 		return {
	// 			id: item2.id,
	// 			name: cors.name,
	// 			age: item2.age
	// 		};
	// 	}
	// });
	// console.log(datas);

	//filter pass the condtion

	let value = data.todos.slice(0, 5);
	// @ts-ignore
	let value1 = data.todos.slice(17, 24);

	//console.log(value1);
	// map

	const handleChange = () => {
		//console.log(value);
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
