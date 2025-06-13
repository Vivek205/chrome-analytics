import { neon } from "@neondatabase/serverless";

console.log("connection string sql", process.env.NEXT_PUBLIC_DATABASE_URL);

export const getSQL = () => {
  if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
    throw new Error("NEXT_PUBLIC_DATABASE_URL is not defined");
  }
  return neon(process.env.NEXT_PUBLIC_DATABASE_URL);
};