<script>
    // @ts-nocheck
    
        import { json } from '@sveltejs/kit';
    // @ts-nocheck
    //    let username= ""
    //    let password=""
    //    let message=""
    // 	const HandleSubmit =async (/** @type {undefined} */ e) => {
    // 		message=""
    //         const response = await fetch("/auth",{
    //             method:"POST",
    //             body:JSON.stringify({
    //                 username,password
    //             })
    //         })
    //         const data = await response.json()
    //         message=data.message
    // 	};
    export let form;
    
    </script>
    
    <p>{form?.message||""}</p>
    <!-- //on:submit|preventDefault={HandleSubmit} -->
    <form  method="post" action="/auth?/login">
        <input name="username" />
        <input name="password" />
        <button>Login</button>
        <button formaction="/auth?/register">Register</button>
    </form>
    