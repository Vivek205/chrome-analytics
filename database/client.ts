// import { neon } from "@neondatabase/serverless";

// const sql = neon(`${process.env.NEXT_PUBLIC_DATABASE_URL}`);

// export { sql };
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = `${process.env.NEXT_PUBLIC_DATABASE_URL}`;
if (!connectionString) {
  throw new Error("NEXT_PUBLIC_DATABASE_URL is not defined");
}

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma as dbClient };
