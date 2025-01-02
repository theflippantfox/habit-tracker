<script lang="ts">
    import {goto} from '$app/navigation'
    export let button
</script>

<button class="p-2 mb-4 w-full font-semibold rounded-md border bg-slate-900 text-white flex items-center select-none" on:click={() => goto(button.link)}>
    <div class="w-8 h-8 mr-4 flex items-center justify-center b-1">
        <i class={`lni lni-${button.icon}`}></i>
    </div>
    <div class="text">{button.text}</div>
</button>

<style>
    .lni {
        font-size: 1.5em;
    }
</style>