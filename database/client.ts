import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

import * as schema from './schema';

const readOnlySQLite = new Database('./database/test.db', { readonly: true });
export const readOnlyDrizzleClient = drizzle(readOnlySQLite, { schema });
