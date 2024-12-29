import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';
import * as schema from './schema';

// Create postgres connection
const client = postgres(DATABASE_URL);

// Create drizzle database instance with schema
export const db = drizzle(client, { schema });
