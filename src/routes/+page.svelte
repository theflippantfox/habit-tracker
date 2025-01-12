<script lang="ts">
	import { APP_NAME, PRIMARY_COLOR } from '$lib/configs/constants';

	let formSwitch: boolean = false;
</script>

<div class="page">
	{#if formSwitch == false}
		<form class="w-full" action="?signin" method="POST">
			<h1 class="mb-16 text-3xl font-medium">
				Welcome to <span class={`text-${PRIMARY_COLOR}-600`}>{APP_NAME}</span>
			</h1>
			<div class="details">
				<input
					name="email"
					type="email"
					id="email"
					class="mb-4 w-full rounded-md border-2 border-slate-900 p-4"
					placeholder="Email"
				/>
				<input
					name="password"
					type="password"
					id="password"
					class="mb-4 w-full rounded-md border-2 border-slate-900 p-4"
					placeholder="Password"
				/>
				<button
					class="mb-20 w-full rounded-md border bg-slate-900 p-4 font-semibold text-white"
					type="submit"
				>
					Proceed
				</button>
			</div>
			<p>
				Or
				<span
					on:click={() => {
						formSwitch = !formSwitch;
					}}
					>Signup
				</span>
			</p>
		</form>
	{:else}
		<form class="w-full" action="?signin" method="POST">
			<h1 class="mb-16 text-3xl font-medium">
				Welcome to <span class={`text-${PRIMARY_COLOR}-600`}>{APP_NAME}</span>
			</h1>
			<div class="details">
				<input
					name="email"
					type="email"
					id="email"
					class="mb-4 w-full rounded-md border-2 border-slate-900 p-4"
					placeholder="Email"
				/>
				<input
					name="password"
					type="password"
					id="password"
					class="mb-4 w-full rounded-md border-2 border-slate-900 p-4"
					placeholder="Password"
				/>
				<button
					class="mb-20 w-full rounded-md border bg-slate-900 p-4 font-semibold text-white"
					type="submit"
				>
					Proceed
				</button>
			</div>
			<p>
				Or
				<a
					on:click={() => {
						formSwitch = !formSwitch;
					}}
				>
					Signin
				</a>
			</p>
		</form>
	{/if}
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
		place-items: center;
	}
</style>
