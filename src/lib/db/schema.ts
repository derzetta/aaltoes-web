import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

// Silkway application schema
export const silkwayApplications = pgTable('silkway_applications', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  project: text('project').notNull(),
  about: text('about').notNull(),
  chinaInterest: text('china_interest').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Types for our application schema
export type SilkwayApplication = typeof silkwayApplications.$inferSelect;
export type NewSilkwayApplication = typeof silkwayApplications.$inferInsert; 