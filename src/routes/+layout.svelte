<script lang="ts">
	import '../app.css';
	import 'normalize.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		font-size: 1.6rem;
		overflow: scroll;
		background: var(--accents-2);
	}
</style>
