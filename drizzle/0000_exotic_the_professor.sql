CREATE TABLE IF NOT EXISTS "attendance" (
	"id" uuid PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"timestamp" timestamp NOT NULL,
	"photo_url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "employees" (
	"id" uuid PRIMARY KEY NOT NULL,
	"gender" varchar,
	"full_name" varchar NOT NULL,
	"position" varchar NOT NULL,
	"department" varchar NOT NULL,
	"phone_number" varchar,
	"user_id" uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"role" varchar NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "attendance" ADD CONSTRAINT "attendance_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "employees" ADD CONSTRAINT "employees_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
