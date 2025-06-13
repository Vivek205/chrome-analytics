import * as cheerio from "cheerio";

export const fetchExtensionName = async (
  url: string
): Promise<string | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Failed to fetch extension name:", response.statusText);
      return null;
    }
    const text = await response.text();
    const $ = cheerio.load(text);
    const extensionName = $("h1").text().trim();
    return extensionName;
  } catch (error) {
    console.error("Error fetching extension name:", error);
    return null;
  }
};
