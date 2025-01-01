<script lang="ts">
    import {goto} from '$app/navigation'
    export let button
</script>

<button class="button" role="button" on:click={goto(button.link)}>
    <div class="logo"></div>
    <div class="text">{button.text}</div>
</button>