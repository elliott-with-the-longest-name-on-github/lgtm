<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div>
	<h1>success!</h1>
	<p>you done it</p>
	<a href={resolve('/train')}>train again</a>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
		display: grid;
		place-content: center;
	}
</style>
