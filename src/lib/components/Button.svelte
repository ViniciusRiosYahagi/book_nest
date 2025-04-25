<script lang="ts">
	import type { ComponentProps } from '$lib/types/types';

	let { isSecondary, isDanger, isMenu, href, onclick, children, ...props }: ComponentProps = $props();
</script>

{#if href}
	<a
		{href}
		class="min-w-60 rounded border-white bg-black px-6 py-3.5 text-center text-2xl text-white font-semibold hover:underline"
		class:btn-secondary={isSecondary}
		class:btn-danger={isDanger}
		class:btn-menu={isMenu}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="min-w-60 rounded border-white bg-black px-6 py-3.5 text-center text-2xl text-white font-semibold hover:underline"
		{...props}
		{onclick}
		class:btn-secondary={isSecondary}
		class:btn-danger={isDanger}
		class:btn-menu={isMenu}
	>
		{@render children()}
	</button>
{/if}
