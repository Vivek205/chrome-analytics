import { dbClient } from "@/database/client";

export const getExtensionDetails = async (extensionId: string) => {
  const extensionDetails = await dbClient.extensions.findUnique({
    where: { id: extensionId },
    select: {
      id: true,
      name: true,
      url: true,
    },
  });

  return extensionDetails;
};
