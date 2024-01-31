import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const eateries = sqliteTable('eateries', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  review: text('reveiw').notNull(),
  metro: text('metro').notNull(),
  address: text('address'),
  phone: text('phone'),
  websiteURL: text('websiteURL'),
});

export type Eatery = typeof eateries.$inferSelect; // return type when queried
export type NewEatery = typeof eateries.$inferInsert; // insert type