<script>
    export let data;
    let {title,value,parentData}=data
  
</script>


<h1>{parentData.username}</h1>
<slot/>


<h1>{title}{value[0].body}</h1>