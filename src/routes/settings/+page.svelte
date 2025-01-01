<script lang="ts">
    import Button from '$lib/components/settings/Button.svelte'

    const buttons = [
        {logo: '', text: 'general', link: 'settings/general'},
        {logo: '', text: 'theme', link: 'settings/theme'},
        {logo: '', text: 'username', link: 'settings/username'},
        {logo: '', text: 'import', link: 'settings/import'},
        {logo: '', text: 'export', link: 'settings/general'},
        {logo: '', text: 'logout', link: 'settings/logout'}

    ]
</script>

<div class="h-full p-4 flex flex-col justify-center">
    {#each buttons as item}
        <Button button={item} />
    {/each}
</div>
