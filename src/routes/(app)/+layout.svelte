<script lang='ts'>
    import {goto} from '$app/navigation'
</script>

<slot />

<div class="p-4 w-full flex justify-around absolute bottom-0 bg-slate-900 text-white">
    <div class="p-2 font-semibold rounded-md border flex items-center select-none" on:click={() => goto('home')}>
        <i class="lni lni-home-2"></i>
    </div>
    <div class="p-2 font-semibold rounded-md border flex items-center select-none" on:click={() => goto('add')}>
        <i class="lni lni-plus"></i>
    </div>
    <div class="p-2 font-semibold rounded-md border flex items-center select-none" on:click={() => goto('settings')}>
        <i class="lni lni-dashboard-square-1"></i>
    </div>
</div>