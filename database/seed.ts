import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import * as schema from './schema'

const sqlite = new Database('./database./test.db');
const db = drizzle(sqlite, { schema });

async function seedDatabase() {
  const rawFile = readFileSync('data.json', 'utf-8');
  const parsedEateries = JSON.parse(rawFile) as schema.NewEatery[];
  await db.insert(schema.eateries).values(parsedEateries);
}

seedDatabase();
