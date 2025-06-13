import { neon } from "@neondatabase/serverless";

console.log("connection string sql", process.env.NEXT_PUBLIC_DATABASE_URL);
const sql = neon(`${process.env.NEXT_PUBLIC_DATABASE_URL}`);

export { sql };
