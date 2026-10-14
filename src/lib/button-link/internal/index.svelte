<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ResolvedPathname } from '$app/types';

	let {
		href,
		variant = 'secondary',
		disabled = false,
		children
	}: {
		href: ResolvedPathname;
		variant?: 'primary' | 'secondary';
		disabled?: boolean;
		children: Snippet;
	} = $props();

	let primary = $derived(variant === 'primary');
	let secondary = $derived(variant === 'secondary');
</script>

<a
	data-sveltekit-preload-code="eager"
	class:primary
	class:secondary
	class:disabled
	href={disabled ? undefined : href}>{@render children()}</a
>

<style>
	a {
		border-radius: var(--border-radius);
		padding: var(--gap-three-quarters);
		border: none;
		cursor: pointer;
		box-shadow: var(--shadow-small);
		transition-property: color, border, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		text-align: center;
		text-decoration: none;
	}

	a.primary.disabled,
	a.secondary.disabled {
		color: var(--accents-4);
		background: var(--accents-2);
		cursor: not-allowed;
	}

	.secondary,
	.primary:hover {
		color: var(--foreground);
		background: var(--background);
	}

	.secondary:hover,
	.primary {
		background: var(--foreground);
		color: var(--background);
	}

	a:active:not(:disabled) {
		transform: scale(0.95);
	}
</style>
