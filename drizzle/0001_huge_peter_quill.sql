ALTER TABLE "attendance" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "employees" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();