import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Check if the DATABASE_URL environment variable exists
if (!import.meta.env.VITE_DATABASE_URL) {
  console.error('VITE_DATABASE_URL is not defined in environment variables');
}

// Create SQL client with Neon
const sql = neon(import.meta.env.VITE_DATABASE_URL || '');

// Create Drizzle client with the schema
export const db = drizzle(sql, { schema });

// Export types for use throughout the app
export * from './schema'; 