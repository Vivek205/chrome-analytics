import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { cache } from "react";
import { PrismaNeon } from "@prisma/adapter-neon";

export const getDbClient = cache(() => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL env variable is not set");
  }

  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
});
