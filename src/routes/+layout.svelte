<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link href="https://cdn.lineicons.com/5.0/lineicons.css" rel="stylesheet" />
</svelte:head>

<div class="h-svh w-svw relative">
	{@render children()}
</div>
