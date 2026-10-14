import { createHash } from 'node:crypto';
import { SESSION_SECRET } from '$app/env/private';
import { handleSession } from 'svelte-kit-cookie-session';

export const handle = handleSession({
	init: () => ({
		authenticated: false
	}),
	// svelte-kit-cookie-session v4 uses AES-256-GCM, which requires a 32-byte key
	secret: createHash('sha256').update(SESSION_SECRET).digest()
});
