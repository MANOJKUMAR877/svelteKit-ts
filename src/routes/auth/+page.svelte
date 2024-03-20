<script>
// @ts-nocheck

	import { json } from '@sveltejs/kit';
// @ts-nocheck
   let username= ""
   let password=""
   let message=""
	const HandleSubmit =async (/** @type {undefined} */ e) => {
		message=""
        const response = await fetch("/auth",{
            method:"POST",
            body:JSON.stringify({
                username,password
            })
        })
        const data = await response.json()
        message=data.message
	};
</script>

<p>{message}</p>

<form on:submit|preventDefault={HandleSubmit}>
	<input bind:value={username} name="username" />
	<input bind:value={password} name="password" />
	<button>Submit</button>
</form>
