CREATE TABLE IF NOT EXISTS "take-home-fullstack_github_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"login" varchar(256),
	"node_id" varchar(256),
	"avatar_url" varchar(512),
	"gravatar_id" varchar(256),
	"type" varchar(50),
	"name" varchar(256),
	"company" varchar(512),
	"blog" varchar(512),
	"location" varchar(256),
	"email" varchar(256),
	"twitter_username" varchar(256),
	"created_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "data_field_1_idx" ON "take-home-fullstack_github_user" ("login");