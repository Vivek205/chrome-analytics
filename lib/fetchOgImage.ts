import * as cheerio from "cheerio";

export const fetchOgImage = async (url: string): Promise<string | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }
    const data = await response.text();
    const $ = cheerio.load(data);
    const ogImage = $('meta[property="og:image"]').attr("content");
    if (ogImage) {
      return ogImage;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch OG image:", error);
    return null;
  }
};
