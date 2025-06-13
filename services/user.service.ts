import { dbClient } from "../database/client";

export const getUserExtensions = async (userId: string) => {
  const userExtensions = await dbClient.user_extensions.findMany({
    where: {
      userId,
    },
    include: {
      extensions: true,
    },
  });

  return userExtensions.map((userExtension) => ({
    id: userExtension.extensions.id,
    name: userExtension.extensions.name,
    url: userExtension.extensions.url,
  }));
};

// export const addUser = async (userId: string, email: string, name: string) => {
//   const dbClient = getDbClient();
//   const userExists = await dbClient.user.findFirst({
//     where: {
//       id: userId,
//     },
//   });

//   if (userExists) {
//     return true;
//   }

//   if (!email) {
//     throw new Error("Invalid user email");
//   }

//   await dbClient.user.create({
//     data: {
//       id: userId,
//       email,
//       name,
//     },
//   });
// };

const CHROME_WEB_STORE_REGEX =
  /^https:\/\/chromewebstore\.google\.com\/detail\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9]+$/;

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
  console.log("Validated URL:", validatedUrl);
  if (!validatedUrl) {
    throw new Error("Invalid extension URL");
  }
  const { extensionId, extensionName, cleanUrl } = validatedUrl;

  const extension = await dbClient.extensions.findFirst({
    where: {
      id: extensionId,
    },
  });

  if (!extension) {
    // TODO: Extension not found, create it
    await dbClient.extensions.create({
      data: {
        id: extensionId,
        name: extensionName,
        url: cleanUrl,
      },
    });
  }

  await dbClient.user_extensions.create({
    data: {
      userId,
      extensionId,
    },
  });
};
