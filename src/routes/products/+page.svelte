<script>
    export let data;
    // @ts-ignore
   
    let {products} = data
</script>
{#each products as value}
    <div>{value.id}--{value.title}</div>
{/each}