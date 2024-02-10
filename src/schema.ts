import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull().default('USER'),
  created_at: integer('created_at').notNull(),
  updated_at: integer('updated_at').notNull()
});
