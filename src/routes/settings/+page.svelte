<script lang="ts">
    import Button from '$lib/components/settings/Button.svelte'

    const buttons = [
        {icon: 'user-4', text: 'Username', link: 'settings/username'},
        {icon: 'globe-1', text: 'General', link: 'settings/general'},
        {icon: 'brush-2', text: 'Theme', link: 'settings/theme'},
        {icon: 'file-plus-circle', text: 'Data Import/Export', link: 'settings/data'},
        {icon: 'exit', text: 'Logout', link: 'settings/logout'}
    ]
</script>

<div class="h-full p-4 flex flex-col justify-center">
    {#each buttons as item}
        <Button button={item} />
    {/each}
</div>
