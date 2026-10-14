import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	POSTGRES_URL: {
		description: 'Connection string for the Neon (formerly Vercel Postgres) database'
	},
	MODEL_TRAINING_PASSWORD: {
		description: 'Password required to access the /train page'
	},
	SESSION_SECRET: {
		description: 'Secret used to encrypt session cookies'
	}
});
