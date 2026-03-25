import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core'

export const keywords = pgTable('keywords', {
  id:         serial('id').primaryKey(),
  keyword:    text('keyword').notNull(),
  volume:     integer('volume').notNull().default(0),
  difficulty: integer('difficulty').notNull().default(0),
  position:   integer('position').notNull().default(0),
  trend:      text('trend').notNull().default('flat'),
  createdAt:  timestamp('created_at').defaultNow(),
})