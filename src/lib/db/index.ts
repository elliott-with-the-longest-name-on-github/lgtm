import { POSTGRES_URL } from '$app/env/private';
import { neon } from '@neondatabase/serverless';
import { Kysely } from 'kysely';
import { NeonDialect } from 'kysely-neon';
import type { Database } from './types.js';

export const db = new Kysely<Database>({
	dialect: new NeonDialect({
		neon: neon(POSTGRES_URL)
	})
});
