import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

import * as schema from '../database/schema'

export { sql, eq, and, or } from 'drizzle-orm'
export const tables = schema

const sqlite = new Database('./data/sqlite.db')

export function useDrizzle() {
  return drizzle(sqlite, { schema })
}

export type User = typeof schema.users.$inferSelect
