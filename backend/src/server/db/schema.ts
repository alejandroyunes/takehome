import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `take-home-fullstack_${name}`);

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