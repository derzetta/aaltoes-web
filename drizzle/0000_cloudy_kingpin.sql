CREATE TABLE "restaurant_votes" (
	"id" serial PRIMARY KEY NOT NULL,
	"restaurant_id" text NOT NULL,
	"is_like" boolean NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"session_id" text NOT NULL
);
