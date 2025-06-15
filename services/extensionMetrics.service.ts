import { dbClient } from "@/database/client";

export const getExtensionMetrics = async (extensionId: string) => {
  const metrics = await dbClient.extension_metrics.findMany({
    where: { extensionId },
    orderBy: {
      scrapedAt: "asc",
    },
  });

  return metrics;
};
