import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { cache } from "react";

export const getDbClient = cache(() => {
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
    maxUses: 1,
  });
  return new PrismaClient({ adapter });
});
