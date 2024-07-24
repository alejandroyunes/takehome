// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `take-home-fullstack_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const githubtUser = createTable(
  "github_user",
  {
    id: serial("id").primaryKey(),
    login: varchar("login", { length: 256 }),
    nodeId: varchar("node_id", { length: 256 }),
    avatarUrl: varchar("avatar_url", { length: 512 }),
    gravatarId: varchar("gravatar_id", { length: 256 }),
    type: varchar("type", { length: 50 }),
    name: varchar("name", { length: 256 }),
    company: varchar("company", { length: 512 }),
    blog: varchar("blog", { length: 512 }),
    location: varchar("location", { length: 256 }),
    email: varchar("email", { length: 256 }),
    twitterUsername: varchar("twitter_username", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull(),
  },
  (example) => ({
    dataField1Index: index("data_field_1_idx").on(example.login),
  })
);