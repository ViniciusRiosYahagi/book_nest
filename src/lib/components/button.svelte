<script lang="ts">
	import type { ComponentProps } from '$lib/types/types';

	let { isSecondary, isDanger, isMenu, href, onclick, children, ...props }: ComponentProps =
		$props();
</script>

{#if href}
	<a
		{href}
		class="py-3.5 px-6 min-w-60 text-center bg-black border-r-8 text-white border-white text-2xl"
		class:btn-secondary={isSecondary}
		class:btn-danger={isDanger}
		class:btn-menu={isMenu}
	>
		{@render children()}
	</a>
{:else}
	<button
		class=""
		{...props}
		{onclick}
		class:btn-secondary={isSecondary}
		class:btn-danger={isDanger}
		class:btn-menu={isMenu}
	>
		{@render children()}
	</button>
{/if}
