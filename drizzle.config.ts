import type { Config } from 'drizzle-kit';

export default {
  schema: './database/schema.ts',
  out: './database/output',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './database/test.db',
  },
} satisfies Config;
