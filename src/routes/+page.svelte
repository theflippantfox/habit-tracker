<script lang="ts">
    import {APP_NAME, PRIMARY_COLOR} from '$lib/configs/constants'
</script>

<div class="page">
    <form 
        class="w-full"
        method="POST"
    >
        <h1
            class="mb-16 font-medium text-3xl"
        > 
            Welcome to <span class={`text-${PRIMARY_COLOR}-600`} >{APP_NAME}</span>
        </h1>
        <div class="details">
            <input 
                name="username"
                type="text"
                id="username"
                class="mb-4 w-full p-4 rounded-md border-2 border-slate-900"
                placeholder="Username"
            />
            <button 
                class="mb-20 p-4 w-full font-semibold rounded-md border bg-slate-900 text-white" 
                type="submit"
            >
              Proceed
            </button>
        </div>
    </form>
</div>

<style>
    .page {
        height: 100svh;
        width: 100svw;
        padding: 3em;
        display: flex;
        justify-content: center;
        place-items: end;
    }

    .details {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        place-items:center;
    }

</style>