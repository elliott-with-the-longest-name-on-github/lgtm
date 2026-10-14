<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	let {
		type,
		variant = 'secondary',
		disabled = false,
		onclick,
		children
	}: {
		type: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'secondary';
		disabled?: boolean;
		onclick?: MouseEventHandler<HTMLButtonElement>;
		children: Snippet;
	} = $props();

	let primary = $derived(variant === 'primary');
	let secondary = $derived(variant === 'secondary');
</script>

<button {onclick} class:primary class:secondary {disabled} {type}>{@render children()}</button>

<style>
	button {
		border-radius: var(--border-radius);
		padding: var(--gap-three-quarters);
		border: none;
		cursor: pointer;
		box-shadow: var(--shadow-small);
		transition-property: color, border, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

	button.primary:disabled,
	button.secondary:disabled {
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

	button:active:not(:disabled) {
		transform: scale(0.95);
	}
</style>
