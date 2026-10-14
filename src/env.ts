import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	POSTGRES_URL: {
		static: true,
		description: 'Connection string for the Neon (formerly Vercel Postgres) database'
	},
	MODEL_TRAINING_PASSWORD: {
		static: true,
		description: 'Password required to access the /train page'
	},
	SESSION_SECRET: {
		static: true,
		description: 'Secret used to encrypt session cookies'
	}
});
