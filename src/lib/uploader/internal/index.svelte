<script lang="ts">
	import { browser } from '$app/env';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { Toast } from '#lib/toast/index.js';

	let form: HTMLFormElement;
	let toastMessage: string | undefined = $state();
	let timeout: ReturnType<typeof setTimeout>;

	function setToast(message: string) {
		toastMessage = message;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			toastMessage = undefined;
		}, 3000);
	}

	const handleSubmit: SubmitFunction = async () => {
		setToast('uploading');
		return async ({ result }) => {
			if (result.type === 'redirect') {
				setToast('success');
				form.reset();
			} else {
				setToast('failure');
			}
		};
	};
</script>

<form
	bind:this={form}
	method="POST"
	action="/train?/upload"
	enctype="multipart/form-data"
	use:enhance={handleSubmit}
>
	<label>
		<input
			aria-label="Upload a file"
			type="file"
			name="file"
			accept=".txt"
			required
			onchange={(e) => {
				const file = e.currentTarget.files?.[0];

				if (file) {
					form.requestSubmit();
				}
			}}
		/>

		<div>
			<!-- Octicons "file" icon -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" aria-hidden="true">
				<path
					d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"
				/>
			</svg>
		</div>

		<button disabled={browser} aria-label="Upload">
			<!-- Octicons "cloud-upload" icon -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
				<path
					d="M7 9H5l3-3 3 3H9v5H7V9zm5-4c0-.44-.91-3-4.5-3C5.08 2 3 3.92 3 6 1.02 6 0 7.52 0 9c0 1.53 1 3 3 3h3v-1.3H3c-1.62 0-1.7-1.42-1.7-1.7 0-.17.05-1.7 1.7-1.7h1.3V6c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V12h2c2.08 0 4-1.16 4-3.5C16 6.06 14.08 5 12 5z"
				/>
			</svg>
		</button>
	</label>
</form>
{#if toastMessage}
	<Toast>{toastMessage}</Toast>
{/if}

<style>
	form {
		position: fixed;
		right: 8px;
		bottom: 12px;
		width: 32px;
		height: 32px;
	}

	div {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
	}

	label {
		cursor: pointer;
	}

	svg {
		fill: currentColor;
		width: 100%;
		height: auto;
		max-height: 100%;
	}

	input[type='file'] {
		display: none;
	}

	button {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
	}

	/* in browsers without JS, the upload button is visible when the file input is populated */
	input[type='file']:valid ~ button:not(:disabled) {
		display: block;
	}
</style>
