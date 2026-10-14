<script lang="ts">
	let {
		type,
		id,
		name,
		value = undefined
	}: {
		type: 'text' | 'password';
		id: string;
		name: string;
		value?: string;
	} = $props();
</script>

<input {type} {value} {id} {name} />

<style>
	input {
		border: 1px solid #ccc;
		border-radius: var(--border-radius);
		padding: var(--gap-half);
	}
</style>
