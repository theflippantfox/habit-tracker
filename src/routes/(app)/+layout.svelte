<script lang="ts">
	let { children } = $props();
</script>

{@render children()}

<div class="absolute bottom-0 flex w-full justify-around bg-slate-900 p-4 text-white">
	<a
		aria-label="home"
		class="flex select-none items-center rounded-md border p-2 font-semibold"
		href="/home"
	>
		<i class="lni lni-home-2"></i>
	</a>
	<a
		aria-label="add"
		class="flex select-none items-center rounded-md border p-2 font-semibold"
		href="/add"
	>
		<i class="lni lni-plus"></i>
	</a>
	<a
		aria-label="settings"
		class="flex select-none items-center rounded-md border p-2 font-semibold"
		href="/settings"
	>
		<i class="lni lni-dashboard-square-1"></i>
	</a>
</div>
