import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.NEXT_PUBLIC_DATABASE_URL}`);

export { sql };
