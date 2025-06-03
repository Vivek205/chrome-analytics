

// export const getUserExtensions = async (userId: string) => {
//   const dbClient = getDbClient();
//   const userExtensions = await dbClient.userExtension.findMany({
//     where: {
//       userId,
//     },
//   });

//   return userExtensions;
// };

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

// const CHROME_WEB_STORE_REGEX =
//   /^https:\/\/chromewebstore\.google\.com\/detail\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9]+$/;

// const validateExtensionUrl = (url: string) => {
//   const cleanUrl = url.split("?")[0];

//   if (!CHROME_WEB_STORE_REGEX.test(cleanUrl)) {
//     return false;
//   }

//   const [extensionId, extensionName] = cleanUrl.split("/").slice(-2);

//   return {
//     extensionId,
//     extensionName,
//     cleanUrl,
//   };
// };

// export const addUserExtension = async (
//   userId: string,
//   extensionUrl: string
// ) => {
//   const dbClient = getDbClient();
//   const validatedUrl = validateExtensionUrl(extensionUrl);
//   if (!validatedUrl) {
//     throw new Error("Invalid extension URL");
//   }
//   const { extensionId, extensionName, cleanUrl } = validatedUrl;

//   const extension = await dbClient.extension.findFirst({
//     where: {
//       id: extensionId,
//     },
//   });

//   if (!extension) {
//     // TODO: Extension not found, create it
//     await dbClient.extension.create({
//       data: {
//         id: extensionId,
//         name: extensionName,
//         url: cleanUrl,
//       },
//     });
//   }

//   await dbClient.userExtension.create({
//     data: {
//       userId,
//       extensionId,
//     },
//   });
// };
