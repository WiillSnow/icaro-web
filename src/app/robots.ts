import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" }
      { userAgent: "*", disallow: ["/gracias"] },
    ],
    sitemap: "https://icarosolar.mx/sitemap.xml",
    host: "https://icarosolar.mx",
  };
}
