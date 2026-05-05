import { Client } from "pg";
import { readFileSync } from "fs";
import { resolve } from "path";

async function migrate() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.error("Missing DATABASE_URL environment variable");
    process.exit(1);
  }

  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log("Connected to database");

    const schema = readFileSync(resolve("data/database-schema.sql"), "utf-8");
    await client.query(schema);

    console.log("✅ Database schema migrated successfully");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

migrate();
