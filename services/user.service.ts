import { dbClient } from "@/database/client";

export const getUserExtensions = async (userId: string) => {
  const userExtensions = await dbClient.userExtension.findMany({
    where: {
      userId,
    },
  });

  return userExtensions;
};

const CHROME_WEB_STORE_REGEX =
  /^https:\/\/chrome\.google\.com\/webstore\/detail\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
const validateExtensionUrl = (url: string) => {
  const cleanUrl = url.split("?")[0];

  if (!CHROME_WEB_STORE_REGEX.test(cleanUrl)) {
    return false;
  }

  const [extensionId, extensionName] = cleanUrl.split("/").slice(-2);

  return {
    extensionId,
    extensionName,
    cleanUrl,
  };
};

export const addUserExtension = async (
  userId: string,
  extensionUrl: string
) => {
  const validatedUrl = validateExtensionUrl(extensionUrl);
  if (!validatedUrl) {
    throw new Error("Invalid extension URL");
  }
  const { extensionId, extensionName, cleanUrl } = validatedUrl;

  const extension = await dbClient.extension.findFirst({
    where: {
      id: extensionId,
    },
  });

  if (!extension) {
    // TODO: Extension not found, create it
    await dbClient.extension.create({
      data: {
        id: extensionId,
        name: extensionName,
        url: cleanUrl,
      },
    });
  }

  await dbClient.userExtension.create({
    data: {
      userId,
      extensionId,
    },
  });
};
